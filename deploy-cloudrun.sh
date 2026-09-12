#!/usr/bin/env bash
# ============================================================
#  Despliegue de "El Viaje Por Chile" en Google Cloud Run
#  Requisitos: gcloud CLI instalado y autenticado (gcloud auth login)
#  Uso: PROJECT_ID=tu-proyecto ./deploy-cloudrun.sh
# ============================================================
set -euo pipefail

PROJECT_ID="${PROJECT_ID:-TU_PROJECT_ID}"
REGION="${REGION:-southamerica-west1}"
SERVICE="${SERVICE:-elviaje}"

gcloud config set project "$PROJECT_ID"

# (Opcional pero recomendado) Crear los secretos en Secret Manager antes del deploy:
#   echo -n "TU_KEY" | gcloud secrets create gemini-key --data-file=-
#   ... google-id, google-secret, mp-token, session-secret

# Bucket de persistencia durable (las rutas/usuarios sobreviven reinicios de Cloud Run)
BUCKET="${PROJECT_ID}-data"
echo "Creando bucket de persistencia: $BUCKET"
gcloud storage buckets create "gs://${BUCKET}" --location="$REGION" --uniform-bucket-level-access 2>/dev/null || echo "(bucket ya existe)"
PN=$(gcloud projects describe "$PROJECT_ID" --format "value(projectNumber)")
DEFAULT_SA="${PN}-compute@developer.gserviceaccount.com"
gcloud storage buckets add-iam-policy-binding "gs://${BUCKET}" \
  --member="serviceAccount:${DEFAULT_SA}" --role=roles/storage.objectAdmin 2>/dev/null \
  || echo "(asigna Storage Object Admin manualmente a: $DEFAULT_SA)"

gcloud run deploy "$SERVICE" \
  --source . \
  --region "$REGION" \
  --platform managed \
  --allow-unauthenticated \
  --port 3000 \
  --set-env-vars "OWNER_EMAIL=juancarlos.castaing@gmail.com" \
  --set-env-vars "GCS_BUCKET=${BUCKET}" \
  --set-secrets "GEMINI_API_KEY=gemini-key:latest,GOOGLE_CLIENT_ID=google-id:latest,GOOGLE_CLIENT_SECRET=google-secret:latest,MERCADOPAGO_ACCESS_TOKEN=mp-token:latest,SESSION_SECRET=session-secret:latest"

URL=$(gcloud run services describe "$SERVICE" --region "$REGION" --format "value(status.url)")
echo "URL del servicio: $URL"

gcloud run services update "$SERVICE" --region "$REGION" \
  --set-env-vars "APP_URL=$URL,GOOGLE_OAUTH_REDIRECT=$URL/api/auth/google/callback"

echo "Despliegue completo. Abre: $URL"
