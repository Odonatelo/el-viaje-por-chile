# El Viaje Por Chile - Audioguías y rutas autoguiadas

Plataforma web full-stack (Express + React/Vite) de audioguías y rutas patrimoniales
de Chile, con generación de guiones y audio por IA (Gemini) y cobros reales vía
Mercado Pago (CLP).

## Características
- Catálogo de rutas con mapa (Leaflet/OpenStreetMap), geolocalización y QR por ruta.
- Studio de creación/edición de rutas (paradas, audio, imágenes, documentos).
- Generación de guiones y audio TTS con Gemini.
- Membresías y publicación de audioguías de pago con Mercado Pago (Chile).
- Persistencia de rutas en `data/tours.json` (sobrevive reinicios).

## Puesta en marcha local
```bash
npm install
cp .env.example .env   # completa GEMINI_API_KEY (y Mercado Pago si quieres cobros reales)
npm run dev            # http://localhost:3000
```

## Build y producción
```bash
npm run build          # genera dist/ (frontend) y dist/server.cjs (backend)
npm start              # sirve la app en modo producción (NODE_ENV=production)
```

## Despliegue en un servidor / PaaS
La app es un único proceso Node que sirve el frontend y la API.
Variables mínimas: `PORT`, `GEMINI_API_KEY`, `APP_URL`. Para cobros reales añade
`MERCADOPAGO_ACCESS_TOKEN` y `MERCADOPAGO_PUBLIC_KEY`.

### Docker
```bash
docker build -t el-viaje-por-chile .
docker run -d --name elviaje -p 3000:3000 --env-file .env el-viaje-por-chile
```

### Plataformas compatibles
- Render / Railway / Fly.io: usa `npm run build` y `npm start`.
- VPS (PM2): `pm2 start dist/server.cjs --name elviaje`.

## Notas
- Sin `MERCADOPAGO_ACCESS_TOKEN` la pasarela queda en MODO DEMO (no aprueba pagos reales).
- Los pagos reales se registran sólo vía webhook IPN de Mercado Pago.
- El dueño ve el historial de cobros autenticándose con `OWNER_EMAIL`.

## Login con Google OAuth (real)
1. En [Google Cloud Console](https://console.cloud.google.com/apis/credentials) crea un "ID de cliente de OAuth 2.0" de tipo Aplicación web.
2. Orígenes autorizados de JavaScript: `https://www.elviaje.cl` (y `http://localhost:3000` para dev).
3. URI de redirección autorizada: `https://www.elviaje.cl/api/auth/google/callback`.
4. Define en `.env`: `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` y un `SESSION_SECRET` seguro.
5. El flujo: `/api/auth/google` → consentimiento de Google → `/api/auth/google/callback` (verifica el ID token, crea sesión y redirige a `/`). La sesión viaja en cookie httpOnly; el frontend la consulta en `/api/auth/me`.

## Seguridad de la versión servidor
- Crear/editar/eliminar rutas y usar la IA requieren sesión (`requireAuth`).
- Configurar la pasarela y ver el historial de cobros requiere ser el `OWNER_EMAIL`.
- Las membresías (fee anual / consultoría) se guardan en `data/users.json` y se activan sólo con un pago real aprobado vía webhook o con un código válido de `VALID_VOUCHER_CODES`.

## Sesiones en Redis
En producción con varias instancias (o serverless) define `REDIS_URL` (p. ej. `redis://localhost:6379`).
La sesión se guarda en Redis vía `connect-redis` ( TTL de 7 días alineado con la cookie).
Si `REDIS_URL` no está definida, cae a `MemoryStore` (válido sólo para una sola instancia).

