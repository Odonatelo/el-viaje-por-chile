import express from 'express';
import fs from 'fs';
import path from 'path';
import session from 'express-session';
import RedisStore from 'connect-redis';
import { createClient } from 'redis';
import { OAuth2Client } from 'google-auth-library';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Modality, Type } from '@google/genai';
import dotenv from 'dotenv';
import { INITIAL_TOURS } from './src/data/sampleTours.ts';
import { Tour } from './src/types.ts';
import { readJson, writeJson, readBuffer, writeBuffer } from './storage';

dotenv.config();

// Resolve __dirname in both ESM (dev via tsx) and CJS (production build) contexts.
// In the CJS build, import.meta.url is unavailable, so we fall back gracefully.
const __filename = (() => {
  try {
    return fileURLToPath(import.meta.url);
  } catch {
    return process.cwd() + '/dist/server.cjs';
  }
})();
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

// ----------------------------------------------------
// CORE CONFIG (must be defined before session/OAuth block)
// ----------------------------------------------------

const OWNER_EMAIL = process.env.OWNER_EMAIL || 'juancarlos.castaing@gmail.com';
const OWNER_NAME = process.env.OWNER_NAME || 'Juan Carlos Castaing';
const APP_URL = process.env.APP_URL || `http://localhost:${PORT}`;

// Dev-only conveniences (auto-disabled in production builds / NODE_ENV=production)
const DEV_MODE = process.env.NODE_ENV !== 'production';

// Increase payload limit for audio files & base64 media
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// ----------------------------------------------------
// SESSIONS (Google OAuth) - Redis en producción
// ----------------------------------------------------

const SESSION_SECRET = process.env.SESSION_SECRET || 'cambia-este-secreto-en-produccion';

let sessionStore: session.Store | undefined;
if (process.env.REDIS_URL) {
  const redisClient = createClient({ url: process.env.REDIS_URL });
  redisClient.on('error', (err) => console.error('Redis Client Error:', err));
  redisClient.connect().catch((err) => console.error('Redis connection error:', err));
  sessionStore = new RedisStore({ client: redisClient, prefix: 'elviaje:sess:' });
  console.log('Sesiones configuradas en Redis:', process.env.REDIS_URL);
} else {
  console.warn('REDIS_URL no definida: usando MemoryStore (NO recomendado en producción con múltiples instancias).');
}

app.use(
  session({
    store: sessionStore,
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 días
    },
  }),
);

// ----------------------------------------------------
// GOOGLE OAUTH CLIENT
// ----------------------------------------------------

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';
const GOOGLE_OAUTH_REDIRECT = process.env.GOOGLE_OAUTH_REDIRECT || `${APP_URL}/api/auth/google/callback`;
const oauth2Client = new OAuth2Client(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, GOOGLE_OAUTH_REDIRECT);

interface SessionUser {
  id: string;
  email: string;
  name: string;
  avatar: string;
  googleId: string;
  role: 'creator' | 'admin';
  isOwner: boolean;
}

function getCurrentUser(req: any): SessionUser | null {
  return (req.session && req.session.user) || null;
}

function requireAuth(req: any, res: any, next: any) {
  if (!getCurrentUser(req)) {
    return res.status(401).json({ success: false, error: 'Debes iniciar sesión para realizar esta acción.' });
  }
  next();
}


// ----------------------------------------------------
// CONFIGURATION (all overridable via environment variables)
// ----------------------------------------------------

const GEMINI_TEXT_MODEL = process.env.GEMINI_TEXT_MODEL || 'gemini-2.5-flash';
const GEMINI_TTS_MODEL = process.env.GEMINI_TTS_MODEL || 'gemini-2.5-flash-preview-tts';

// ----------------------------------------------------
// TOUR PERSISTENCE (file-backed; durable en Google Cloud Storage si GCS_BUCKET está definido)
// ----------------------------------------------------

const DATA_DIR = path.join(process.cwd(), 'data');
const TOURS_FILE = path.join(DATA_DIR, 'tours.json');

let toursDatabase: Tour[] = [];

function saveTours() {
  writeJson('data/tours.json', toursDatabase);
}

// ----------------------------------------------------
// USERS / MEMBERSHIP PERSISTENCE (durable en GCS si GCS_BUCKET está definido)
// ----------------------------------------------------

const USERS_FILE = path.join(DATA_DIR, 'users.json');
type StoredUser = {
  email: string;
  memberType: 'none' | 'annual_paid' | 'consulting_free';
  membershipExpiresAt?: string;
};
let usersStore: Record<string, StoredUser> = {};

function saveUsers() {
  writeJson('data/users.json', usersStore);
}

async function initData() {
  toursDatabase = await readJson('data/tours.json', JSON.parse(JSON.stringify(INITIAL_TOURS)));
  usersStore = await readJson('data/users.json', {});
}

function getUserMembership(email: string): StoredUser {
  return usersStore[email.toLowerCase()] || { email: email.toLowerCase(), memberType: 'none' };
}

function setUserMembership(email: string, memberType: 'annual_paid' | 'consulting_free', months = 12) {
  const key = email.toLowerCase();
  const expires = new Date();
  expires.setMonth(expires.getMonth() + months);
  usersStore[key] = { email: key, memberType, membershipExpiresAt: expires.toISOString() };
  saveUsers();
}

// ----------------------------------------------------
// AUTH ROUTES (Google OAuth 2.0)
// ----------------------------------------------------

app.get('/api/auth/google', (req, res) => {
  if (!GOOGLE_CLIENT_ID) {
    return res
      .status(500)
      .send('Google OAuth no configurado. Define GOOGLE_CLIENT_ID y GOOGLE_CLIENT_SECRET en las variables de entorno.');
  }
  const state = Math.random().toString(36).slice(2);
  (req.session as any).oauthState = state;
  const url = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: ['openid', 'email', 'profile'],
    state,
  });
  res.redirect(url);
});

app.get('/api/auth/google/callback', async (req, res) => {
  const { code, state, error } = req.query as any;
  if (error) return res.redirect(`${APP_URL}/?auth_error=${encodeURIComponent(String(error))}`);
  if (!code) return res.redirect(`${APP_URL}/?auth_error=no_code`);
  if (state !== (req.session as any).oauthState) return res.redirect(`${APP_URL}/?auth_error=state_mismatch`);

  try {
    const { tokens } = await oauth2Client.getToken(String(code));
    oauth2Client.setCredentials(tokens);
    const ticket = await oauth2Client.verifyIdToken({
      idToken: tokens.id_token as string,
      audience: GOOGLE_CLIENT_ID,
    });
    const p = ticket.getPayload();
    if (!p || !p.email) return res.redirect(`${APP_URL}/?auth_error=no_email`);

    const email = p.email;
    const isOwner = email.toLowerCase() === OWNER_EMAIL.toLowerCase();
    const user: SessionUser = {
      id: p.sub as string,
      email,
      name: p.name || email,
      avatar: p.picture || '',
      googleId: p.sub as string,
      role: isOwner ? 'admin' : 'creator',
      isOwner,
    };
    (req.session as any).user = user;
    res.redirect(`${APP_URL}/`);
  } catch (e: any) {
    res.redirect(`${APP_URL}/?auth_error=${encodeURIComponent(e?.message || 'oauth_failed')}`);
  }
});

app.post('/api/auth/logout', (req, res) => {
  req.session.destroy(() => {});
  res.json({ success: true });
});

app.get('/api/auth/me', (req, res) => {
  const u = getCurrentUser(req);
  if (!u) return res.json({ success: true, user: null, devMode: DEV_MODE });
  const m = getUserMembership(u.email);
  res.json({
    success: true,
    user: {
      ...u,
      isMember: m.memberType !== 'none',
      memberType: m.memberType,
      membershipExpiresAt: m.membershipExpiresAt,
    },
    devMode: DEV_MODE,
  });
});

// Dev-only owner auto-login: lets you explore the owner/admin panels locally
// without configuring Google OAuth. Disabled when NODE_ENV=production.
app.get('/api/auth/dev-owner-login', (req, res) => {
  if (!DEV_MODE) {
    return res.status(404).json({ success: false, error: 'Not found' });
  }
  const ownerUser: SessionUser = {
    id: 'owner-dev',
    email: OWNER_EMAIL,
    name: OWNER_NAME,
    avatar: '',
    googleId: 'owner-dev',
    role: 'admin',
    isOwner: true,
  };
  const key = OWNER_EMAIL.toLowerCase();
  usersStore[key] = {
    email: key,
    memberType: 'annual_paid',
    membershipExpiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
  };
  saveUsers();
  (req.session as any).user = ownerUser;
  req.session.save((err) => {
    if (err) return res.status(500).json({ success: false, error: 'session save failed' });
    res.redirect('/');
  });
});

// Redeem a real consulting voucher (validated server-side)
app.post('/api/membership/redeem', requireAuth, async (req, res) => {
  try {
    const { code } = (req.body || {}) as { code?: string };
    const valid = (process.env.VALID_VOUCHER_CODES || '')
      .split(',')
      .map((s) => s.trim().toUpperCase())
      .filter(Boolean);
    if (!code || !valid.includes(code.trim().toUpperCase())) {
      return res.status(400).json({ success: false, error: 'Código de consultoría no válido.' });
    }
    const u = getCurrentUser(req) as SessionUser;
    setUserMembership(u.email, 'consulting_free', 12);
    const m = getUserMembership(u.email);
    res.json({
      success: true,
      user: { ...u, isMember: true, memberType: m.memberType, membershipExpiresAt: m.membershipExpiresAt },
    });
  } catch (e: any) {
    res.status(500).json({ success: false, error: e.message });
  }
});


// ----------------------------------------------------
// LAZY GEMINI AI CLIENT
// ----------------------------------------------------

let aiClient: GoogleGenAI | null = null;
function getAI(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY || '';
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY no está configurada. Define la variable de entorno para usar las funciones de IA.');
    }
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
}

// ----------------------------------------------------
// MERCADO PAGO CHILE CONFIGURATION & PAYMENT STORAGE
// ----------------------------------------------------

let mercadoPagoConfig = {
  publicKey: process.env.MERCADOPAGO_PUBLIC_KEY || '',
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN || '',
  webhookUrl: process.env.MERCADOPAGO_WEBHOOK_URL || `${APP_URL}/api/mercadopago/webhook`,
  currency: 'CLP' as const,
  singleTourPriceClp: Number(process.env.MP_SINGLE_TOUR_PRICE_CLP) || 14990,
  annualMembershipPriceClp: Number(process.env.MP_ANNUAL_MEMBERSHIP_PRICE_CLP) || 49990,
  enterprisePriceClp: Number(process.env.MP_ENTERPRISE_PRICE_CLP) || 189990,
  isLiveMode: !!process.env.MERCADOPAGO_ACCESS_TOKEN,
  ownerEmail: OWNER_EMAIL,
  ownerName: OWNER_NAME,
};

// Real payment records are created only from Mercado Pago (live or sandbox) calls.
// No se incluyen datos de ejemplo: cualquier registro aquí representa dinero real.
let paymentRecords: Array<{
  id: string;
  payerEmail: string;
  payerName: string;
  planId: 'single_tour' | 'annual_membership' | 'enterprise_pack';
  planTitle: string;
  amountClp: number;
  status: 'approved' | 'pending' | 'rejected' | 'in_process';
  dateCreated: string;
  paymentMethod: string;
  mercadoPagoPaymentId?: string;
  externalReference?: string;
  initPointUrl?: string;
  demo?: boolean;
}> = [];

function hasRealMpToken(): boolean {
  const t = mercadoPagoConfig.accessToken;
  return !!t && (t.startsWith('APP_USR-') || t.startsWith('TEST-'));
}

// ----------------------------------------------------
// API ROUTES: MERCADO PAGO CHILE
// ----------------------------------------------------

app.get('/api/mercadopago/config', (req, res) => {
  const isOwner = getCurrentUser(req)?.isOwner || false;

  // Sample rows to populate the owner's "Historial de Cobros" demo view.
  // These are NOT real money — they only appear in demo mode (no real MP token).
  const demoSamples = !hasRealMpToken()
    ? [
        {
          id: 'demo-1',
          payerEmail: 'maria.lopez@ejemplo.cl',
          payerName: 'María López',
          planId: 'single_tour',
          planTitle: 'Publicación de Audioguía en El Viaje Por Chile',
          amountClp: mercadoPagoConfig.singleTourPriceClp,
          status: 'approved' as const,
          dateCreated: new Date(Date.now() - 1000 * 60 * 60 * 24 * 6).toISOString(),
          paymentMethod: 'Mercado Pago (Webpay / Tarjetas)',
          demo: true,
        },
        {
          id: 'demo-2',
          payerEmail: 'turismo.patrimonial@munivalparaiso.cl',
          payerName: 'Municipalidad de Valparaíso',
          planId: 'enterprise_pack',
          planTitle: 'Plan Municipalidades & Turismo Patrimonial',
          amountClp: mercadoPagoConfig.enterprisePriceClp,
          status: 'approved' as const,
          dateCreated: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3).toISOString(),
          paymentMethod: 'Mercado Pago (Transferencia)',
          demo: true,
        },
        {
          id: 'demo-3',
          payerEmail: 'carlos.ruiz@creadores.cl',
          payerName: 'Carlos Ruiz',
          planId: 'annual_membership',
          planTitle: 'Membresía Anual de Creador de Audioguías',
          amountClp: mercadoPagoConfig.annualMembershipPriceClp,
          status: 'pending' as const,
          dateCreated: new Date(Date.now() - 1000 * 60 * 60 * 20).toISOString(),
          paymentMethod: 'Mercado Pago (Pendiente)',
          demo: true,
        },
      ]
    : [];

  res.json({
    success: true,
    config: {
      publicKey: mercadoPagoConfig.publicKey,
      hasAccessToken: !!mercadoPagoConfig.accessToken,
      currency: mercadoPagoConfig.currency,
      singleTourPriceClp: mercadoPagoConfig.singleTourPriceClp,
      annualMembershipPriceClp: mercadoPagoConfig.annualMembershipPriceClp,
      enterprisePriceClp: mercadoPagoConfig.enterprisePriceClp,
      isLiveMode: mercadoPagoConfig.isLiveMode,
      ownerEmail: mercadoPagoConfig.ownerEmail,
      ownerName: mercadoPagoConfig.ownerName,
    },
    paymentRecords: isOwner ? paymentRecords : [],
    demoSamples: isOwner ? demoSamples : [],
  });
});

app.post('/api/mercadopago/save-config', (req, res) => {
  try {
    const { accessToken, publicKey, singleTourPriceClp, annualMembershipPriceClp, enterprisePriceClp, isLiveMode } = req.body;
    const user = getCurrentUser(req);

    if (!user || !user.isOwner) {
      return res.status(403).json({
        success: false,
        error: 'Acceso denegado: Solo el propietario de la plataforma puede configurar la pasarela de cobros.',
      });
    }

    if (accessToken !== undefined) mercadoPagoConfig.accessToken = accessToken.trim();
    if (publicKey !== undefined) mercadoPagoConfig.publicKey = publicKey.trim();
    if (singleTourPriceClp !== undefined) mercadoPagoConfig.singleTourPriceClp = Number(singleTourPriceClp) || 14990;
    if (annualMembershipPriceClp !== undefined) mercadoPagoConfig.annualMembershipPriceClp = Number(annualMembershipPriceClp) || 49990;
    if (enterprisePriceClp !== undefined) mercadoPagoConfig.enterprisePriceClp = Number(enterprisePriceClp) || 189990;
    if (isLiveMode !== undefined) mercadoPagoConfig.isLiveMode = Boolean(isLiveMode);
    mercadoPagoConfig.isLiveMode = hasRealMpToken();

    res.json({
      success: true,
      message: 'Configuración de Mercado Pago Chile actualizada exitosamente.',
      config: {
        publicKey: mercadoPagoConfig.publicKey,
        hasAccessToken: !!mercadoPagoConfig.accessToken,
        currency: mercadoPagoConfig.currency,
        singleTourPriceClp: mercadoPagoConfig.singleTourPriceClp,
        annualMembershipPriceClp: mercadoPagoConfig.annualMembershipPriceClp,
        enterprisePriceClp: mercadoPagoConfig.enterprisePriceClp,
        isLiveMode: mercadoPagoConfig.isLiveMode,
        ownerEmail: mercadoPagoConfig.ownerEmail,
      },
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post('/api/mercadopago/create-preference', async (req, res) => {
  try {
    const { title, priceClp, payerEmail, payerName, planId, tourId } = req.body;

    const amount = Number(priceClp) || (
      planId === 'single_tour' ? mercadoPagoConfig.singleTourPriceClp :
      planId === 'enterprise_pack' ? mercadoPagoConfig.enterprisePriceClp :
      mercadoPagoConfig.annualMembershipPriceClp
    );

    const itemTitle = title || (
      planId === 'single_tour' ? 'Publicación de Audioguía en El Viaje Por Chile' :
      planId === 'enterprise_pack' ? 'Plan Municipalidades & Turismo Patrimonial' :
      'Membresía Anual de Creador de Audioguías'
    );

    const externalReference = `EV-${Date.now()}-${planId}`;

    // Real Mercado Pago integration (producción o sandbox TEST-)
    if (hasRealMpToken()) {
      try {
        const mpResponse = await fetch('https://api.mercadopago.com/checkout/preferences', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${mercadoPagoConfig.accessToken}`,
          },
          body: JSON.stringify({
            items: [
              {
                id: planId || 'tour-publish-fee',
                title: itemTitle,
                description: `Cobro oficial recaudado por ${mercadoPagoConfig.ownerName} (El Viaje Por Chile)`,
                quantity: 1,
                currency_id: 'CLP',
                unit_price: amount,
              },
            ],
            payer: {
              email: payerEmail || 'cliente@elviaje.cl',
              name: payerName || 'Creador Audioguía',
            },
            back_urls: {
              success: `${APP_URL}/?mp_status=approved`,
              pending: `${APP_URL}/?mp_status=pending`,
              failure: `${APP_URL}/?mp_status=failure`,
            },
            auto_return: 'approved',
            statement_descriptor: 'ELVIAJE.CL',
            external_reference: externalReference,
            notification_url: mercadoPagoConfig.webhookUrl,
          }),
        });

        const mpData = await mpResponse.json();
        if (mpData.id) {
          const newRecord = {
            id: `mp-${Date.now()}`,
            payerEmail: payerEmail || 'usuario@elviaje.cl',
            payerName: payerName || 'Creador de Ruta',
            planId: (planId || 'single_tour') as 'single_tour' | 'annual_membership' | 'enterprise_pack',
            planTitle: itemTitle,
            amountClp: amount,
            status: 'pending' as const,
            dateCreated: new Date().toISOString(),
            paymentMethod: mercadoPagoConfig.isLiveMode ? 'Mercado Pago (Webpay / Tarjetas)' : 'Mercado Pago Sandbox (TEST)',
            mercadoPagoPaymentId: mpData.id,
            externalReference,
            initPointUrl: mpData.init_point || mpData.sandbox_init_point,
          };
          paymentRecords.unshift(newRecord);

          return res.json({
            success: true,
            preferenceId: mpData.id,
            initPoint: mpData.init_point,
            sandboxInitPoint: mpData.sandbox_init_point,
            isLive: mercadoPagoConfig.isLiveMode,
            amountClp: amount,
            currency: 'CLP',
            paymentRecord: newRecord,
            message: `Preferencia de pago generada por $${amount.toLocaleString('es-CL')} CLP.`,
          });
        }
        console.warn('Mercado Pago respondió sin ID de preferencia:', mpData);
      } catch (mpErr) {
        console.error('Error llamando a Mercado Pago:', mpErr);
        return res.status(502).json({ success: false, error: 'No se pudo comunicar con Mercado Pago.' });
      }
    }

    // MODO DEMO: sin token real configurado. NO registra dinero aprobado,
    // sólo deja una preferencia de prueba en estado "pending".
    const preferenceId = `PREF-DEMO-CL-${Date.now()}`;
    const simulatedInitPoint = `${APP_URL}/?mp_demo=true&pref_id=${preferenceId}`;

    const demoRecord = {
      id: `mp-demo-${Date.now()}`,
      payerEmail: payerEmail || 'demo@elviaje.cl',
      payerName: payerName || 'Modo Demostración',
      planId: (planId || 'single_tour') as 'single_tour' | 'annual_membership' | 'enterprise_pack',
      planTitle: itemTitle,
      amountClp: amount,
      status: 'pending' as const,
      dateCreated: new Date().toISOString(),
      paymentMethod: 'MODO DEMO (sin pasarela real configurada)',
      externalReference,
      initPointUrl: simulatedInitPoint,
      demo: true,
    };
    paymentRecords.unshift(demoRecord);

    res.json({
      success: true,
      demo: true,
      preferenceId,
      initPoint: simulatedInitPoint,
      amountClp: amount,
      currency: 'CLP',
      paymentRecord: demoRecord,
      message: 'MODO DEMO: configura MERCADOPAGO_ACCESS_TOKEN para cobros reales. Este pago NO está aprobado.',
    });
  } catch (error: any) {
    console.error('Error creando preferencia de Mercado Pago:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Mercado Pago Webhook (IPN) - actualiza el estado real de los pagos
app.post('/api/mercadopago/webhook', async (req, res) => {
  try {
    const body = req.body || {};
    if (body.type === 'payment' && body.data?.id && hasRealMpToken()) {
      const paymentId = String(body.data.id);
      try {
        const r = await fetch(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
          headers: { Authorization: `Bearer ${mercadoPagoConfig.accessToken}` },
        });
        const p = await r.json();
        const rec = paymentRecords.find(
          (x) => x.mercadoPagoPaymentId === paymentId || (p.external_reference && x.externalReference === p.external_reference),
        );
        if (rec) {
          rec.status = p.status === 'approved' ? 'approved' : p.status === 'rejected' ? 'rejected' : 'in_process';
          rec.paymentMethod = p.payment_method_type || rec.paymentMethod;

          // Upgrade membership on real approval
          if (rec.status === 'approved' && (rec.planId === 'annual_membership' || rec.planId === 'enterprise_pack')) {
            setUserMembership(rec.payerEmail, 'annual_paid', 12);
          }
        }
        console.log(`Webhook MP: pago ${paymentId} -> ${p.status}`);
      } catch (e) {
        console.warn('No se pudo consultar el pago en Mercado Pago:', e);
      }
    }
    res.status(200).send('OK');
  } catch (err: any) {
    res.status(200).send('OK');
  }
});

// ----------------------------------------------------
// API ROUTES: TOURS CRUD
// ----------------------------------------------------

app.get('/api/tours', (req, res) => {
  try {
    const { city, category, query } = req.query;
    let results = [...toursDatabase];

    if (city && typeof city === 'string' && city !== 'all') {
      results = results.filter((t) => t.city.toLowerCase() === city.toLowerCase());
    }
    if (category && typeof category === 'string' && category !== 'all') {
      results = results.filter((t) => t.category === category);
    }
    if (query && typeof query === 'string' && query.trim() !== '') {
      const q = query.toLowerCase();
      results = results.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.city.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          (t.tagline || '').toLowerCase().includes(q),
      );
    }

    res.json({ success: true, data: results });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/tours/:id', (req, res) => {
  const tour = toursDatabase.find((t) => t.id === req.params.id);
  if (!tour) {
    return res.status(404).json({ success: false, error: 'Tour no encontrado' });
  }
  res.json({ success: true, data: tour });
});

app.post('/api/tours', requireAuth, (req, res) => {
  try {
    const tourData = req.body as Tour;
    if (!tourData.title || !tourData.city) {
      return res.status(400).json({ success: false, error: 'Título y ciudad son obligatorios' });
    }

    const newTour: Tour = {
      ...tourData,
      id: tourData.id || `tour-${Date.now()}`,
      createdAt: tourData.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      rating: tourData.rating ?? 5.0,
      reviewsCount: tourData.reviewsCount ?? 1,
      published: tourData.published ?? true,
      stops: tourData.stops || [],
      generalDocuments: tourData.generalDocuments || [],
      socialLinks: tourData.socialLinks || {},
    };

    toursDatabase.unshift(newTour);
    saveTours();
    res.status(201).json({ success: true, data: newTour });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.put('/api/tours/:id', requireAuth, (req, res) => {
  try {
    const index = toursDatabase.findIndex((t) => t.id === req.params.id);
    if (index === -1) {
      return res.status(404).json({ success: false, error: 'Tour no encontrado' });
    }

    const updatedTour: Tour = {
      ...toursDatabase[index],
      ...req.body,
      id: req.params.id,
      updatedAt: new Date().toISOString(),
    };

    toursDatabase[index] = updatedTour;
    saveTours();
    res.json({ success: true, data: updatedTour });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.delete('/api/tours/:id', requireAuth, (req, res) => {
  const index = toursDatabase.findIndex((t) => t.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ success: false, error: 'Tour no encontrado' });
  }
  toursDatabase.splice(index, 1);
  saveTours();
  res.json({ success: true, data: { id: req.params.id } });
});

app.post('/api/tours/reset', (req, res) => {
  toursDatabase = JSON.parse(JSON.stringify(INITIAL_TOURS));
  saveTours();
  res.json({ success: true, data: toursDatabase });
});

// ----------------------------------------------------
// AUDIO FILE UPLOAD & SERVING
// ----------------------------------------------------

const AUDIO_DIR = 'data/audios';

function pcmBase64ToWavBuffer(base64: string, sampleRate = 24000, channels = 1, bits = 16): Buffer {
  const pcmData = Buffer.from(base64, 'base64');
  const byteRate = sampleRate * channels * (bits / 8);
  const blockAlign = channels * (bits / 8);
  const header = Buffer.alloc(44);
  header.write('RIFF', 0);
  header.writeUInt32LE(36 + pcmData.length, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20); // PCM
  header.writeUInt16LE(channels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(byteRate, 28);
  header.writeUInt16LE(blockAlign, 32);
  header.writeUInt16LE(bits, 34);
  header.write('data', 36);
  header.writeUInt32LE(pcmData.length, 40);
  return Buffer.concat([header, pcmData]);
}

const MIME_EXT: Record<string, string> = {
  'audio/mpeg': '.mp3',
  'audio/mp3': '.mp3',
  'audio/wav': '.wav',
  'audio/x-wav': '.wav',
  'audio/webm': '.webm',
  'audio/ogg': '.ogg',
  'audio/mp4': '.m4a',
  'audio/x-m4a': '.m4a',
  'audio/aac': '.aac',
};
const SAFE_FILE_RE = /^[a-zA-Z0-9_\-.]+$/;

app.post('/api/uploads/audio', requireAuth, async (req, res) => {
  try {
    const { dataUrl, mimeType = 'audio/mpeg' } = req.body;
    if (!dataUrl || typeof dataUrl !== 'string') {
      return res.status(400).json({ success: false, error: 'dataUrl requerido' });
    }
    const ext = MIME_EXT[mimeType] || '.bin';
    const fileName = `upload-${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`;
    const relPath = `${AUDIO_DIR}/${fileName}`;

    const base64 = dataUrl.includes(',') ? dataUrl.split(',')[1] : dataUrl;
    const buffer = Buffer.from(base64, 'base64');
    await writeBuffer(relPath, buffer);

    res.json({ success: true, data: { url: `/api/uploads/audio/${fileName}`, fileName, mimeType, size: buffer.length } });
  } catch (error: any) {
    console.error('Error uploading audio:', error);
    res.status(500).json({ success: false, error: error.message || 'Error al subir audio' });
  }
});

app.get('/api/uploads/audio/:file', async (req, res) => {
  const { file } = req.params;
  if (!SAFE_FILE_RE.test(file)) {
    return res.status(400).json({ success: false, error: 'Nombre de archivo inválido' });
  }
  const ext = path.extname(file).toLowerCase();
  const mimeMap: Record<string, string> = { '.mp3': 'audio/mpeg', '.wav': 'audio/wav', '.webm': 'audio/webm', '.ogg': 'audio/ogg', '.m4a': 'audio/mp4', '.aac': 'audio/aac' };
  try {
    const buffer = await readBuffer(`${AUDIO_DIR}/${file}`);
    if (!buffer) {
      return res.status(404).json({ success: false, error: 'Archivo de audio no encontrado' });
    }
    res.setHeader('Content-Type', mimeMap[ext] || 'application/octet-stream');
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.setHeader('Accept-Ranges', 'bytes');

    const range = req.headers.range;
    if (range) {
      const match = /^bytes=(\d*)-(\d*)$/.exec(range);
      if (match) {
        const start = match[1] !== '' ? parseInt(match[1], 10) : 0;
        const end = match[2] !== '' ? parseInt(match[2], 10) : buffer.length - 1;
        const safeEnd = Math.min(end, buffer.length - 1);
        if (start <= safeEnd) {
          const chunk = buffer.subarray(start, safeEnd + 1);
          res.status(206);
          res.setHeader('Content-Range', `bytes ${start}-${safeEnd}/${buffer.length}`);
          res.setHeader('Content-Length', chunk.length);
          return res.send(chunk);
        }
      }
      res.status(416).setHeader('Content-Range', `bytes */${buffer.length}`);
      return res.end();
    }

    res.setHeader('Content-Length', buffer.length);
    res.send(buffer);
  } catch (error: any) {
    console.error('Error serving audio:', error);
    res.status(500).json({ success: false, error: 'Error al leer archivo de audio' });
  }
});

// ----------------------------------------------------
// API ROUTES: GEMINI AI SCRIPT & AUDIO GENERATION
// ----------------------------------------------------

app.post('/api/gemini/generate-script', requireAuth, async (req, res) => {
  try {
    const { poiTitle, cityName, category, tone = 'historical', language = 'Español', length = 'standard', additionalNotes } = req.body;

    if (!poiTitle) {
      return res.status(400).json({ success: false, error: 'El nombre del punto turístico es requerido' });
    }

    const ai = getAI();

    const toneDescriptions: Record<string, string> = {
      historical: 'riguroso, evocador, apasionante con datos históricos verificables',
      dynamic: 'ameno, fresco, moderno, dinámico y conversacional',
      mysterious: 'intrigante, envolvente, centrado en leyendas, secretos y misterios',
      family: 'cálido, accesible, divertido para niños y adultos con analogías claras',
      poetic: 'lírico, sensorial, centrado en la belleza visual, acústica y arquitectónica',
      insider: 'consejos de local experto, joyas ocultas y detalles fuera de lo común',
    };

    const tonePrompt = toneDescriptions[tone] || 'ameno e informativo';
    const lengthPrompt =
      length === 'short'
        ? 'alrededor de 120 palabras (1 minuto de audio)'
        : length === 'deep'
          ? 'alrededor de 350 palabras (3 minutos de audio)'
          : 'alrededor de 200-250 palabras (2 minutos de audio)';

    const prompt = `Eres un reputado creador de audioguías patrimoniales de excelencia para la plataforma oficial El Viaje Por Chile (www.elviaje.cl).
Crea el contenido sonoro y documental para el atractivo turístico "${poiTitle}" ubicado en "${cityName || 'Chile'}".
Categoría del punto: ${category || 'monumento o sitio de interés'}.
Tono deseado: ${tonePrompt}.
Extensión de la narración: ${lengthPrompt}.
Idiomas: ${language}.
${additionalNotes ? `Detalles adicionales aportados por el guía: ${additionalNotes}` : ''}

El texto de la narración ('narrativeText') debe estar redactado en primera/segunda persona para ser leído como una locución de audioguía inmersiva, saludando cálidamente al visitante, invitándolo a observar detalles arquitectónicos o del entorno y contando una historia cautivadora con ritmo, rigor y emoción.`;

    const response = await ai.models.generateContent({
      model: GEMINI_TEXT_MODEL,
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            subtitle: { type: Type.STRING, description: 'Un subtítulo o frase gancho concisa de máximo 10 palabras.' },
            narrativeText: { type: Type.STRING, description: 'El guión completo de la audioguía listo para ser locutado.' },
            trivia: { type: Type.STRING, description: 'Un dato curioso o anécdota poco conocida sobre el lugar.' },
            tips: { type: Type.STRING, description: 'Un consejo práctico para el visitante.' },
            estimatedStayMinutes: { type: Type.INTEGER, description: 'Tiempo estimado recomendado en minutos (entre 10 y 45).' },
          },
          required: ['subtitle', 'narrativeText', 'trivia', 'tips', 'estimatedStayMinutes'],
        },
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    res.json({ success: true, data: parsed });
  } catch (error: any) {
    console.error('Error generating script:', error);
    res.status(500).json({ success: false, error: error.message || 'Error al generar guión con IA' });
  }
});

app.post('/api/gemini/generate-audio', requireAuth, async (req, res) => {
  try {
    const { text, voiceName = 'Kore', stylePrompt, persist = false } = req.body;

    if (!text || typeof text !== 'string' || text.trim() === '') {
      return res.status(400).json({ success: false, error: 'Texto para audio requerido' });
    }

    const ai = getAI();

    const validVoices = ['Kore', 'Fenrir', 'Zephyr', 'Puck', 'Charon'];
    const chosenVoice = validVoices.includes(voiceName) ? voiceName : 'Kore';

    const spokenText = stylePrompt ? `Speak in a captivating, professional audio-guide tone: ${text}` : text;

    const response = await ai.models.generateContent({
      model: GEMINI_TTS_MODEL,
      contents: [{ parts: [{ text: spokenText }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: chosenVoice },
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    const mimeType = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.mimeType || 'audio/pcm;rate=24000';

    if (!base64Audio) {
      return res.status(500).json({ success: false, error: 'No se pudo generar el audio TTS' });
    }

    let url: string | undefined;
    if (persist) {
      const sampleRate = mimeType.includes('32000') ? 32000 : 24000;
      const wavBuffer = pcmBase64ToWavBuffer(base64Audio, sampleRate);
      const fileName = `tts-${Date.now()}-${Math.random().toString(36).slice(2, 8)}.wav`;
      const relPath = `${AUDIO_DIR}/${fileName}`;
      await writeBuffer(relPath, wavBuffer);
      url = `/api/uploads/audio/${fileName}`;
    }

    res.json({
      success: true,
      audioBase64: base64Audio,
      mimeType,
      voiceName: chosenVoice,
      url,
    });
  } catch (error: any) {
    console.error('Error generating audio TTS:', error);
    res.status(500).json({ success: false, error: error.message || 'Error al generar audio con Gemini' });
  }
});

app.post('/api/gemini/generate-tour-plan', requireAuth, async (req, res) => {
  try {
    const { topic, city, stopsCount = 4, language = 'Español' } = req.body;

    if (!topic || !city) {
      return res.status(400).json({ success: false, error: 'Tema y ciudad son requeridos' });
    }

    const ai = getAI();

    const prompt = `Crea un tour patrimonial y autoguiado completo para la plataforma El Viaje Por Chile (www.elviaje.cl) sobre "${topic}" en la ciudad o destino "${city}".
Idioma: ${language}.
Número de paradas: ${stopsCount}.
Incluye coordenadas geográficas reales (latitud y longitud precisas), títulos evocadores, guión de audio para cada parada, trivia, consejos y categoría.`;

    const response = await ai.models.generateContent({
      model: GEMINI_TEXT_MODEL,
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            tagline: { type: Type.STRING },
            description: { type: Type.STRING },
            city: { type: Type.STRING },
            country: { type: Type.STRING },
            category: { type: Type.STRING, description: 'monument | history | nature | museum | food | art | walking | secrets' },
            durationMinutes: { type: Type.INTEGER },
            distanceKm: { type: Type.NUMBER },
            difficulty: { type: Type.STRING, description: 'easy | moderate | challenging' },
            stops: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  subtitle: { type: Type.STRING },
                  category: { type: Type.STRING },
                  lat: { type: Type.NUMBER },
                  lng: { type: Type.NUMBER },
                  address: { type: Type.STRING },
                  narrativeText: { type: Type.STRING },
                  trivia: { type: Type.STRING },
                  tips: { type: Type.STRING },
                  estimatedStayMinutes: { type: Type.INTEGER },
                },
                required: ['title', 'subtitle', 'category', 'lat', 'lng', 'narrativeText', 'trivia', 'tips', 'estimatedStayMinutes'],
              },
            },
          },
          required: ['title', 'tagline', 'description', 'city', 'country', 'category', 'durationMinutes', 'distanceKm', 'difficulty', 'stops'],
        },
      },
    });

    const parsed = JSON.parse(response.text || '{}');
    res.json({ success: true, plan: parsed });
  } catch (error: any) {
    console.error('Error generating tour plan:', error);
    res.status(500).json({ success: false, error: error.message || 'Error al generar itinerario con IA' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ----------------------------------------------------
// VITE DEV MIDDLEWARE / STATIC ASSETS
// ----------------------------------------------------

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true, watch: { ignored: ['**/public/**'] } },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  await initData();
  console.log(`[storage] Datos cargados (${toursDatabase.length} tours) desde ${process.env.GCS_BUCKET ? 'GCS:' + process.env.GCS_BUCKET : 'archivo local'}`);

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`El Viaje Por Chile Platform Server running on http://0.0.0.0:${PORT}`);
    if (!process.env.GEMINI_API_KEY) console.warn('ADVERTENCIA: GEMINI_API_KEY no está configurada. Las funciones de IA no funcionarán.');
    if (!hasRealMpToken()) console.warn('AVISO: Mercado Pago en MODO DEMO. Configura MERCADOPAGO_ACCESS_TOKEN para cobros reales.');
  });
}

startServer();
