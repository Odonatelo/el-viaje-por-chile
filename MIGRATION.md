# Migracion a un servidor gratuito (Render.com)

El sitio esta en Google Cloud Run y el bucket de persistencia (GCS) esta en estado
"delinquent" (facturacion deshabilitada), lo que provoca HTTP 500 en /api/tours.
Esta guia migra la app a **Render.com (plan free)** manteniendo el codigo intacto.

## 0) Rescatar los datos ANTES de migrar (recomendado)
Los datos (usuarios y rutas creadas) viven en el bucket `el-viaje-por-chile-app-data`.
Con la facturacion deshabilitada no se puede descargar nada.

1. En Google Cloud Console -> Facturacion, **reactiva la cuenta de facturacion**
   (basta con un cargo minimo; el bucket es de pocos KB).
2. Descarga los archivos:
   ```bash
   gcloud storage cp gs://el-viaje-por-chile-app-data/data/users.json ./data/users.json
   gcloud storage cp gs://el-viaje-por-chile-app-data/data/tours.json ./data/tours.json
   ```
3. (Opcional) Desactiva la facturacion de nuevo.
4. **Haz commit de esos archivos** al repo (`git add data/users.json data/tours.json && git commit && git push`)
   para que sobrevivan en Render (el disco de Render es efimero).

Si no puedes reactivar la facturacion, los datos se pierden pero el catalogo base
(sampleTours) sigue en el codigo y el sitio funciona sin usuarios/rutas creadas.

## 1) Crear el servicio en Render
1. Crea cuenta en https://render.com (gratis, con GitHub).
2. Dashboard -> **New +** -> **Blueprint** -> conecta el repo `Odonatelo/el-viaje-por-chile`.
   Render lee `render.yaml` y crea el Web Service en plan free.
3. En el servicio -> **Environment**, rellena los valores marcados `sync: false`:
   - `APP_URL` = `https://el-viaje-por-chile.onrender.com` (o tu dominio)
   - `GOOGLE_OAUTH_REDIRECT` = `https://<tu-dominio>/api/auth/google/callback`
   - `GEMINI_API_KEY`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`
   - `MERCADOPAGO_ACCESS_TOKEN`, `MERCADOPAGO_PUBLIC_KEY`
   - `SESSION_SECRET` (cadena larga aleatoria)
   - `SPEECHIFY_API_KEY` (opcional)
4. **NO** definas `GCS_BUCKET` (asi la app usa disco local).
5. Deploy. El primer build tarda ~5-8 min. URL: `https://el-viaje-por-chile.onrender.com`.

## 2) Dominio propio (opcional)
Render -> servicio -> **Settings -> Custom Domains** -> anade `www.interpretaciondelpatrimonio.cl`
y sigue las instrucciones de DNS (CNAME a `el-viaje-por-chile.onrender.com`).
Render emite el certificado SSL automaticamente.

## 3) Persistencia de datos en Render (importante)
El plan free tiene disco **efimero**: los datos sobreviven sleep/wake pero se borran
en cada redeploy. Opciones:
- **Simple (gratis):** mantener `data/*.json` commiteados en el repo. Las ediciones
  en runtime se pierden al redeploy, pero el catalogo base siempre vuelve.
- **Persistencia real gratis:** migrar `storage.ts` a Cloudflare R2 (free tier,
  10 GB + egress gratis) o a un Postgres gratuito (Neon). Requiere refactor.
- **Persistencia real barata:** Render Disk (1 GB) por ~7 USD/mes.

## 4) Notas
- El plan free "duerme" tras 15 min de inactividad (cold start ~30-60s).
- El modo estatico de GitHub Pages (`npm run build:static`) sigue disponible como
  alternativa gratuita sin backend: https://odonatelo.github.io/el-viaje-por-chile/
- Google OAuth: si usas dominio propio, actualiza el redirect URI en Google Cloud
  Console y vuelve a correr `scripts/set-google-oauth.ps1`.
