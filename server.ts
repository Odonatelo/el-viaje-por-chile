import express from 'express';
import fs from 'fs';
import os from 'os';
import path from 'path';
import crypto from 'crypto';
import session from 'express-session';
import RedisStore from 'connect-redis';
import { createClient } from 'redis';
import { OAuth2Client } from 'google-auth-library';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Modality, Type } from '@google/genai';
import { EdgeTTS } from 'node-edge-tts';
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
const OWNER_NAME = process.env.OWNER_NAME || 'El Viaje SPA';
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
  achpiStatus?: 'none' | 'pending' | 'approved';
  achpiCode?: string;
};
let usersStore: Record<string, StoredUser> = {};

function saveUsers() {
  writeJson('data/users.json', usersStore);
}

// ----------------------------------------------------
// ACHPI PERSISTENCE (inscripciones + notificaciones al administrador)
// ----------------------------------------------------

interface AchpiInscription {
  id: string;
  name: string;
  email: string;
  region: string;
  experience: string;
  courseWithElViaje?: string;
  motivation: string;
  status: 'pending' | 'approved' | 'rejected';
  memberCode?: string;
  createdAt: string;
  reviewedAt?: string;
}

interface AdminNotification {
  id: string;
  recipient: string;
  subject: string;
  body: string;
  createdAt: string;
}

let achpiStore: { inscriptions: AchpiInscription[]; notifications: AdminNotification[] } = {
  inscriptions: [],
  notifications: [],
};

function saveAchpi() {
  writeJson('data/achpi.json', achpiStore);
}

function notifyAdmin(subject: string, body: string) {
  const n: AdminNotification = {
    id: `notif-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    recipient: OWNER_EMAIL,
    subject,
    body,
    createdAt: new Date().toISOString(),
  };
  achpiStore.notifications.unshift(n);
  saveAchpi();
  console.log(`[notify:admin] To: ${OWNER_EMAIL} — ${subject}: ${body}`);
}

function generateMemberCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const block = () =>
    Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  return `ACHPI-${block()}-${block()}`;
}

function getUserByEmail(email: string): StoredUser {
  const key = email.toLowerCase();
  return usersStore[key] || { email: key, memberType: 'none', achpiStatus: 'none' };
}

async function initData() {
  toursDatabase = await readJson('data/tours.json', JSON.parse(JSON.stringify(INITIAL_TOURS)));
  usersStore = await readJson('data/users.json', {});
  achpiStore = await readJson('data/achpi.json', { inscriptions: [], notifications: [] });
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

// Límite de rutas publicables por cuenta:
//  - Gratis: 1 ruta por cuenta
//  - Miembro ACHPI (con código): hasta 10 rutas
//  - Membresía de plataforma o consultoría: hasta 50 rutas
function routeLimitFor(email: string): number {
  const m = getUserMembership(email.toLowerCase());
  if (m.memberType === 'annual_paid' || m.memberType === 'consulting_free') return 50;
  if (m.achpiStatus === 'approved' && m.achpiCode) return 10;
  return 1;
}

function routeUsageFor(email: string): number {
  const key = email.toLowerCase();
  return toursDatabase.filter((t) => (t.authorEmail || '').toLowerCase() === key).length;
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
  const limit = routeLimitFor(u.email);
  res.json({
    success: true,
    user: {
      ...u,
      isMember: m.memberType !== 'none',
      memberType: m.memberType,
      membershipExpiresAt: m.membershipExpiresAt,
      achpiStatus: m.achpiStatus || 'none',
      achpiCode: m.achpiCode,
      routeLimit: limit,
      routeUsage: routeUsageFor(u.email),
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
// SPEECHIFY TTS (voces premium; fallback automático a Gemini)
// Crea tu API key en https://platform.speechify.ai
// ----------------------------------------------------

interface SpeechifyVoice {
  id: string;
  display_name: string;
  gender: string;
  locale: string;
}

const SPEECHIFY_API_KEY = process.env.SPEECHIFY_API_KEY || '';
const SPEECHIFY_VOICE_ID = process.env.SPEECHIFY_VOICE_ID || '';
const SPEECHIFY_MODEL = process.env.SPEECHIFY_MODEL || 'simba-3.0';

// Plan B: Microsoft Edge TTS (gratuito, sin API key) con voces chilenas neurales.
const EDGE_TTS_ENABLED = process.env.EDGE_TTS_DISABLED !== '1';
const EDGE_TTS_VOICE_ID = process.env.EDGE_TTS_VOICE_ID || '';
const EDGE_TTS_TIMEOUT_MS = Number(process.env.EDGE_TTS_TIMEOUT_MS) || 20000;
const EDGE_TTS_OUTPUT_FORMAT = 'audio-24khz-48kbitrate-mono-mp3';

export const GEMINI_TTS_VOICES = ['Kore', 'Fenrir', 'Zephyr', 'Puck', 'Charon'];

// Instrucción de estilo en español para entonar las voces Gemini (audioguía patrimonial)
const GEMINI_STYLE_PROMPT = 'Habla en español de Chile, con un tono cautivador, cálido y profesional de audioguía patrimonial, claro y pausado. Texto: ';

function voiceIsFemale(voiceName: string): boolean {
  return !['Fenrir', 'Zephyr', 'Charon'].includes(voiceName);
}

let speechifyVoicesCache: SpeechifyVoice[] | null = null;

async function listSpeechifyVoices(): Promise<SpeechifyVoice[]> {
  if (speechifyVoicesCache) return speechifyVoicesCache;
  const headers = { Authorization: `Bearer ${SPEECHIFY_API_KEY}` };
  let voices: SpeechifyVoice[] = [];
  try {
    const res = await fetch('https://api.speechify.ai/v1/voices?limit=200&locale=es', { headers });
    if (!res.ok) throw new Error(`Speechify /v1/voices responded ${res.status}`);
    const data: any = await res.json();
    voices = (data.voices || []).filter((v: any) => typeof v.id === 'string');
    if (voices.length === 0) {
      const res2 = await fetch('https://api.speechify.ai/v1/voices?limit=200', { headers });
      const data2: any = await res2.json();
      voices = (data2.voices || []).filter((v: any) => typeof v.id === 'string');
    }
  } catch (e) {
    console.warn('No se pudieron listar voces de Speechify:', e);
  }
  speechifyVoicesCache = voices;
  return voices;
}

let speechifyPickCounter = 0;

async function pickSpeechifyVoice(voiceName: string): Promise<string> {
  if (SPEECHIFY_VOICE_ID) return SPEECHIFY_VOICE_ID;
  const voices = await listSpeechifyVoices();
  // Prioridad: español de México (neutro latinoamericano); luego el resto del español.
  const es = voices.filter(v => (v.locale || '').toLowerCase().startsWith('es'));
  let pool = es.filter(v => (v.locale || '').toLowerCase().startsWith('es-mx'));
  if (pool.length === 0) pool = es;
  if (pool.length === 0) pool = voices;
  // Excluir variantes "-agent" cuando existan alternativas narrativas.
  const main = pool.filter(v => !/-agent$/.test(v.id || ''));
  if (main.length > 0) pool = main;
  // Si se indica una voz original, respetar su género; si no, alternar variado (m/f).
  let candidates = pool;
  if (voiceName) {
    const gendered = pool.filter(v => v.gender === (voiceIsFemale(voiceName) ? 'female' : 'male'));
    if (gendered.length > 0) candidates = gendered;
  }
  if (candidates.length === 0) candidates = pool;
  const chosen = candidates[speechifyPickCounter % candidates.length];
  speechifyPickCounter++;
  if (SPEECHIFY_API_KEY && !chosen) {
    throw new Error('Speechify no devolvió voces disponibles para esta cuenta');
  }
  return chosen?.id || SPEECHIFY_VOICE_ID || '';
}

async function speechifyVoiceDisplayName(voiceId: string): Promise<string> {
  const voices = await listSpeechifyVoices();
  return voices.find(v => v.id === voiceId)?.display_name || voiceId;
}

async function speechifySynthesize(text: string, voiceId: string): Promise<{ base64: string; mimeType: string; voiceId: string }> {
  const res = await fetch('https://api.speechify.ai/v1/audio/speech', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${SPEECHIFY_API_KEY}`,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      input: text,
      voice_id: voiceId,
      audio_format: 'mp3',
      model: SPEECHIFY_MODEL,
    }),
  });
  if (!res.ok) {
    const body = await res.text().catch(() => '');
    throw new Error(`Speechify ${res.status}: ${body.slice(0, 300)}`);
  }
  const data: any = await res.json();
  if (!data.audio_data) {
    throw new Error('Speechify no devolvió audio en la respuesta');
  }
  return {
    base64: data.audio_data,
    mimeType: data.audio_format === 'wav' ? 'audio/wav' : 'audio/mpeg',
    voiceId,
  };
}

function edgeVoiceFor(voiceName: string): string {
  if (EDGE_TTS_VOICE_ID) return EDGE_TTS_VOICE_ID;
  return voiceIsFemale(voiceName) ? 'es-CL-CatalinaNeural' : 'es-CL-LorenzoNeural';
}

function edgeVoiceDisplayName(voiceId: string): string {
  return voiceId === 'es-CL-LorenzoNeural' ? 'Lorenzo' : 'Catalina';
}

async function edgeSynthesize(text: string, voiceId: string): Promise<{ base64: string; mimeType: string }> {
  const lang = voiceId.split('-').slice(0, 2).join('-');
  const tmpDir = path.join(os.tmpdir(), 'elviaje-tts');
  await fs.promises.mkdir(tmpDir, { recursive: true });
  const tmpFile = path.join(tmpDir, `${crypto.randomUUID()}.mp3`);
  const tts = new EdgeTTS({ voice: voiceId, lang, outputFormat: EDGE_TTS_OUTPUT_FORMAT, timeout: EDGE_TTS_TIMEOUT_MS });
  try {
    await tts.ttsPromise(text, tmpFile);
    const buf = await fs.promises.readFile(tmpFile);
    return { base64: buf.toString('base64'), mimeType: 'audio/mpeg' };
  } finally {
    fs.promises.unlink(tmpFile).catch(() => {});
  }
}

interface TtsResult {
  base64: string;
  mimeType: string;
  engine: 'speechify' | 'edge' | 'gemini';
  voiceName: string;
  voiceId?: string;
}

function currentTtsEngine(): 'speechify' | 'edge' | 'gemini' {
  if (SPEECHIFY_API_KEY) return 'speechify';
  if (EDGE_TTS_ENABLED) return 'edge';
  return 'gemini';
}

async function synthesizeTts(text: string, voiceName: string): Promise<TtsResult> {
  if (SPEECHIFY_API_KEY) {
    try {
      const voiceId = await pickSpeechifyVoice(voiceName);
      const voiceLabel = await speechifyVoiceDisplayName(voiceId);
      const audio = await speechifySynthesize(text, voiceId);
      return { base64: audio.base64, mimeType: audio.mimeType, engine: 'speechify', voiceName: voiceLabel, voiceId: audio.voiceId };
    } catch (speechifyErr) {
      console.warn('Speechify falló, probando Edge TTS:', speechifyErr);
      if (!EDGE_TTS_ENABLED) throw speechifyErr;
    }
  }
  if (EDGE_TTS_ENABLED) {
    try {
      const voiceId = edgeVoiceFor(voiceName);
      const audio = await edgeSynthesize(text, voiceId);
      return { base64: audio.base64, mimeType: audio.mimeType, engine: 'edge', voiceName: edgeVoiceDisplayName(voiceId), voiceId };
    } catch (edgeErr) {
      console.warn('Edge TTS falló, probando Gemini:', edgeErr);
    }
  }
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: GEMINI_TTS_MODEL,
    contents: [{ parts: [{ text: `${GEMINI_STYLE_PROMPT}${text}` }] }],
    config: {
      responseModalities: [Modality.AUDIO],
      speechConfig: {
        voiceConfig: {
          prebuiltVoiceConfig: { voiceName },
        },
      },
    },
  });
  const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  const mimeType = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.mimeType || 'audio/pcm;rate=24000';
  if (!base64Audio) {
    throw new Error('No se pudo generar el audio TTS');
  }
  return { base64: base64Audio, mimeType, engine: 'gemini', voiceName };
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
                description: `Cobro oficial recaudado por ${mercadoPagoConfig.ownerName}`,
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

    const user = getCurrentUser(req) as SessionUser;
    const newId = tourData.id || `tour-${Date.now()}`;

    // Límite de rutas por cuenta (el propietario queda exento)
    if (!user.isOwner) {
      const existing = toursDatabase.filter(
        (t) => (t.authorEmail || '').toLowerCase() === user.email.toLowerCase() && t.id !== newId,
      );
      const limit = routeLimitFor(user.email);
      if (existing.length >= limit) {
        const m = getUserMembership(user.email);
        return res.status(403).json({
          success: false,
          error:
            m.achpiStatus === 'approved'
              ? `Alcanzaste tu límite de ${limit} rutas como miembro ACHPI. Contrata una membresía de plataforma o una consultoría para publicar hasta 50 rutas.`
              : `Tu cuenta gratuita permite 1 ruta. Inscríbete en la Asociación ACHPI (código de miembro = 10 rutas) o contrata membresía/consultoría (50 rutas) para publicar más.`,
        });
      }
    }

    const newTour: Tour = {
      ...tourData,
      id: newId,
      authorEmail: user.email,
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
      authorEmail: toursDatabase[index].authorEmail || (getCurrentUser(req) as SessionUser).email,
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
// ACHPI — Asociación Chilena Para La Interpretación del Patrimonio
// ----------------------------------------------------

// Solicitud de inscripción (público)
app.post('/api/achpi/inscriptions', async (req, res) => {
  try {
    const { name, email, region, experience, courseWithElViaje, motivation } = req.body || {};
    if (!name || !email || !region || !motivation) {
      return res.status(400).json({ success: false, error: 'Completa nombre, correo, región y motivación.' });
    }
    const key = String(email).trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(key)) {
      return res.status(400).json({ success: false, error: 'Correo electrónico no válido.' });
    }

    const existing = achpiStore.inscriptions.find(
      (i) => i.email === key && i.status !== 'rejected',
    );
    if (existing) {
      return res
        .status(409)
        .json({ success: false, error: `Ya existe una solicitud ${existing.status} para ${key}.` });
    }

    const inscription: AchpiInscription = {
      id: `achpi-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      name: String(name).trim(),
      email: key,
      region: String(region).trim(),
      experience: String(experience || '').trim(),
      courseWithElViaje: String(courseWithElViaje || '').trim(),
      motivation: String(motivation).trim(),
      status: 'pending',
      createdAt: new Date().toISOString(),
    };

    // Marca también estado pendiente en users.json (si la persona ya tiene cuenta)
    const userKey = key;
    const current = getUserMembership(userKey);
    usersStore[userKey] = { ...current, achpiStatus: 'pending' };
    saveUsers();

    achpiStore.inscriptions.unshift(inscription);
    saveAchpi();
    notifyAdmin(
      `Nueva solicitud de inscripción ACHPI: ${inscription.name}`,
      `Correo: ${inscription.email} | Región: ${inscription.region} | Curso o taller con El Viaje: ${inscription.courseWithElViaje || 'No indicado'} | Experiencia: ${inscription.experience || 'No indicada'} | Motivación: ${inscription.motivation} | Aprobar en: https://www.interpretaciondelpatrimonio.cl/ (panel ACHPI)`,
    );

    res.status(201).json({ success: true, data: inscription });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Listado + notificaciones (solo propietario)
app.get('/api/achpi/inscriptions', requireAuth, (req, res) => {
  const user = getCurrentUser(req) as SessionUser;
  if (!user.isOwner) {
    return res.status(403).json({ success: false, error: 'Solo el administrador puede ver este panel.' });
  }
  res.json({
    success: true,
    inscriptions: achpiStore.inscriptions,
    notifications: achpiStore.notifications,
    ownerEmail: OWNER_EMAIL,
  });
});

// Aprobar una solicitud → genera el código de miembro y lo entrega al usuario y al correo del administrador
app.post('/api/achpi/inscriptions/:id/approve', requireAuth, (req, res) => {
  const user = getCurrentUser(req) as SessionUser;
  if (!user.isOwner) {
    return res.status(403).json({ success: false, error: 'Solo el administrador puede aprobar inscripciones.' });
  }
  const inscription = achpiStore.inscriptions.find((i) => i.id === req.params.id);
  if (!inscription) {
    return res.status(404).json({ success: false, error: 'Inscripción no encontrada.' });
  }
  if (inscription.status === 'approved') {
    return res.json({ success: true, data: inscription });
  }

  const memberCode = inscription.memberCode || generateMemberCode();
  inscription.status = 'approved';
  inscription.memberCode = memberCode;
  inscription.reviewedAt = new Date().toISOString();

  // Entrega el código al usuario (aparece en su panel /auth/me y en la plataforma)
  const userKey = inscription.email;
  const current = getUserMembership(userKey);
  usersStore[userKey] = { ...current, achpiStatus: 'approved', achpiCode: memberCode };
  saveUsers();

  saveAchpi();
  notifyAdmin(
    `Código de miembro ACHPI entregado: ${memberCode}`,
    `Inscripción aprobada para ${inscription.name} (${inscription.email}). Código de miembro: ${memberCode}. El código quedó activo en la cuenta ${inscription.email} y eleva su límite de rutas de 1 a 10. Enviar copia al correo del solicitante para notificación final.`,
  );

  res.json({ success: true, data: inscription });
});

// Rechazar una solicitud
app.post('/api/achpi/inscriptions/:id/reject', requireAuth, (req, res) => {
  const user = getCurrentUser(req) as SessionUser;
  if (!user.isOwner) {
    return res.status(403).json({ success: false, error: 'Solo el administrador puede rechazar inscripciones.' });
  }
  const inscription = achpiStore.inscriptions.find((i) => i.id === req.params.id);
  if (!inscription) {
    return res.status(404).json({ success: false, error: 'Inscripción no encontrada.' });
  }
  inscription.status = 'rejected';
  inscription.reviewedAt = new Date().toISOString();
  saveAchpi();
  notifyAdmin(
    `Inscripción ACHPI rechazada: ${inscription.name}`,
    `Se rechazó la solicitud de ${inscription.name} (${inscription.email}).`,
  );
  res.json({ success: true, data: inscription });
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

    const prompt = `Eres un reputado creador de audioguías patrimoniales de excelencia para la plataforma oficial de Interpretación del Patrimonio Natural y Cultural (www.interpretaciondelpatrimonio.cl), plataforma editorial del consultor El Viaje Por Chile (www.elviaje.cl).
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
    const { text, voiceName = 'Kore', persist = false } = req.body;

    if (!text || typeof text !== 'string' || text.trim() === '') {
      return res.status(400).json({ success: false, error: 'Texto para audio requerido' });
    }

    const chosenVoice = GEMINI_TTS_VOICES.includes(voiceName) ? voiceName : 'Kore';

    const result = await synthesizeTts(text, chosenVoice);

    let url: string | undefined;
    if (persist) {
      if (result.mimeType === 'audio/mpeg' || result.mimeType === 'audio/wav') {
        const ext = result.mimeType.includes('wav') ? 'wav' : 'mp3';
        const fileName = `tts-${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
        await writeBuffer(`${AUDIO_DIR}/${fileName}`, Buffer.from(result.base64, 'base64'));
        url = `/api/uploads/audio/${fileName}`;
      } else {
        const sampleRate = result.mimeType.includes('32000') ? 32000 : 24000;
        const wavBuffer = pcmBase64ToWavBuffer(result.base64, sampleRate);
        const fileName = `tts-${Date.now()}-${Math.random().toString(36).slice(2, 8)}.wav`;
        await writeBuffer(`${AUDIO_DIR}/${fileName}`, wavBuffer);
        url = `/api/uploads/audio/${fileName}`;
      }
    }

    res.json({
      success: true,
      audioBase64: result.base64,
      mimeType: result.mimeType,
      engine: result.engine,
      voiceName: chosenVoice,
      voiceId: result.voiceId,
      url,
    });
  } catch (error: any) {
    console.error('Error generating audio TTS:', error);
    res.status(500).json({ success: false, error: error.message || 'Error al generar audio TTS' });
  }
});

// ----------------------------------------------------
// TTS PÚBLICO (voces premium para las audioguías de muestra)
// ----------------------------------------------------

const TTS_CACHE_DIR = 'data/tts-cache';
const TTS_MAX_INPUT_CHARS = 4000;
const TTS_RATE_LIMIT_PER_MIN = 15;

const ttsHitTimes = new Map<string, number[]>();

function clientIp(req: any): string {
  const fwd = req.headers['x-forwarded-for'];
  if (typeof fwd === 'string') return fwd.split(',')[0].trim();
  return req.ip || 'unknown';
}

function allowPublicTts(ip: string): boolean {
  const now = Date.now();
  const recent = (ttsHitTimes.get(ip) || []).filter(t => now - t < 60_000);
  recent.push(now);
  ttsHitTimes.set(ip, recent);
  return recent.length <= TTS_RATE_LIMIT_PER_MIN;
}

app.get('/api/tts/voices', async (req, res) => {
  try {
    let speechifyVoices: SpeechifyVoice[] = [];
    let defaultSpeechifyVoiceId: string | null = null;
    if (SPEECHIFY_API_KEY) {
      speechifyVoices = await listSpeechifyVoices();
      defaultSpeechifyVoiceId = await pickSpeechifyVoice('Kore').catch(() => null);
    }
    res.json({
      success: true,
      engine: currentTtsEngine(),
      geminiVoices: GEMINI_TTS_VOICES,
      speechifyVoices: speechifyVoices
        .map(v => ({ id: v.id, name: v.display_name, gender: v.gender, locale: v.locale }))
        .slice(0, 100),
      defaultSpeechifyVoiceId,
      edgeEnabled: EDGE_TTS_ENABLED,
      edgeVoiceId: EDGE_TTS_VOICE_ID || 'es-CL-CatalinaNeural',
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message || 'Error al listar voces TTS' });
  }
});

app.post('/api/tts/audio', async (req, res) => {
  try {
    const { text, voiceName = 'Kore' } = req.body;
    if (!text || typeof text !== 'string' || text.trim() === '') {
      return res.status(400).json({ success: false, error: 'Texto requerido' });
    }
    if (text.trim().length > TTS_MAX_INPUT_CHARS) {
      return res.status(400).json({ success: false, error: `Máximo ${TTS_MAX_INPUT_CHARS} caracteres por síntesis` });
    }

    const ip = clientIp(req);
    if (!allowPublicTts(ip)) {
      return res.status(429).json({ success: false, error: 'Demasiadas solicitudes de audio. Intenta de nuevo en un minuto.' });
    }

    const chosenVoice = GEMINI_TTS_VOICES.includes(voiceName) ? voiceName : 'Kore';
    const result = await synthesizeTts(text, chosenVoice);

    // Caché persistente en disco: mismo contenido + voz + motor => mismo audio (sin costo ni latencia)
    const cacheKey = crypto.createHash('sha256').update(`${result.engine}|${result.voiceId || ''}|${text}`).digest('hex');
    let cachedRaw: Buffer | null = null;
    const ext = result.mimeType.includes('wav') ? 'wav' : 'mp3';
    try {
      cachedRaw = await readBuffer(`${TTS_CACHE_DIR}/${cacheKey}.${ext}`);
    } catch (e) {
      cachedRaw = null;
    }
    if (cachedRaw && cachedRaw.length > 0) {
      return res.json({
        success: true,
        audioBase64: cachedRaw.toString('base64'),
        mimeType: result.mimeType,
        engine: result.engine,
        voiceName: result.voiceName,
        voiceId: result.voiceId,
        cached: true,
      });
    }

    try {
      await writeBuffer(`${TTS_CACHE_DIR}/${cacheKey}.${ext}`, Buffer.from(result.base64, 'base64'));
    } catch (e) {
      console.warn('No se pudo cachear el audio TTS:', e);
    }

    res.json({
      success: true,
      audioBase64: result.base64,
      mimeType: result.mimeType,
      engine: result.engine,
      voiceName: result.voiceName,
      voiceId: result.voiceId,
      cached: false,
    });
  } catch (error: any) {
    console.error('Error generating public TTS audio:', error);
    res.status(500).json({ success: false, error: error.message || 'Error al generar audio TTS' });
  }
});

app.post('/api/gemini/generate-tour-plan', requireAuth, async (req, res) => {
  try {
    const { topic, city, stopsCount = 4, language = 'Español' } = req.body;

    if (!topic || !city) {
      return res.status(400).json({ success: false, error: 'Tema y ciudad son requeridos' });
    }

    const ai = getAI();

    const prompt = `Crea un tour patrimonial y autoguiado completo para la plataforma de Interpretación del Patrimonio Natural y Cultural (www.interpretaciondelpatrimonio.cl), plataforma editorial del consultor El Viaje Por Chile (www.elviaje.cl), sobre "${topic}" en la ciudad o destino "${city}".
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
