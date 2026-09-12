@echo off
REM ============================================================
REM  Despliegue de "El Viaje Por Chile" en Google Cloud Run
REM  Requisitos: gcloud CLI instalado y autenticado (gcloud auth login)
REM  Uso: edita PROJECT_ID abajo y ejecuta este archivo.
REM ============================================================
setlocal
set PROJECT_ID=TU_PROJECT_ID
set REGION=southamerica-west1
set SERVICE=elviaje

REM 1) Seleccionar proyecto
call gcloud config set project %PROJECT_ID%

REM 2) (Opcional pero recomendado) Crear los secretos en Secret Manager
REM    antes del deploy. Ejemplo para cada uno:
REM      gcloud secrets create gemini-key --data-file=-   (pega la key, luego Ctrl+Z)
REM      gcloud secrets create google-id --data-file=- ...
REM      gcloud secrets create google-secret --data-file=- ...
REM      gcloud secrets create mp-token --data-file=- ...
REM      gcloud secrets create session-secret --data-file=- ...
REM    En modo demo puedes usar --set-env-vars en claro en su lugar.

REM 2b) Bucket de persistencia durable (Google Cloud Storage).
REM     Las rutas y usuarios se guardan aquí y sobreviven reinicios de Cloud Run.
set BUCKET=%PROJECT_ID%-data
echo Creando bucket de persistencia: %BUCKET%
call gcloud storage buckets create gs://%BUCKET% --location=%REGION% --uniform-bucket-level-access 2>nul || echo (bucket ya existe)
FOR /F "tokens=*" %%p IN ('gcloud projects describe %PROJECT_ID% --format "value(projectNumber)"') DO SET PN=%%p
set DEFAULT_SA=%PN%-compute@developer.gserviceaccount.com
call gcloud storage buckets add-iam-policy-binding gs://%BUCKET% --member=serviceAccount:%DEFAULT_SA% --role=roles/storage.objectAdmin 2>nul || echo (asigna Storage Object Admin manualmente a la cuenta de servicio por defecto: %DEFAULT_SA%)
set GCS_BUCKET=%BUCKET%

REM 3) Desplegar (build automatico con el Dockerfile del proyecto)
call gcloud run deploy %SERVICE% ^
  --source . ^
  --region %REGION% ^
  --platform managed ^
  --allow-unauthenticated ^
  --port 3000 ^
  --set-env-vars "OWNER_EMAIL=juancarlos.castaing@gmail.com" ^
  --set-env-vars "GCS_BUCKET=%GCS_BUCKET%" ^
  --set-secrets "GEMINI_API_KEY=gemini-key:latest,GOOGLE_CLIENT_ID=google-id:latest,GOOGLE_CLIENT_SECRET=google-secret:latest,MERCADOPAGO_ACCESS_TOKEN=mp-token:latest,SESSION_SECRET=session-secret:latest"

REM 4) Obtener la URL y fijar APP_URL + redirect de OAuth (Google)
FOR /F "tokens=*" %%u IN ('gcloud run services describe %SERVICE% --region %REGION% --format "value(status.url)"') DO SET URL=%%u
echo URL del servicio: %URL%
call gcloud run services update %SERVICE% --region %REGION% --set-env-vars "APP_URL=%URL%,GOOGLE_OAUTH_REDIRECT=%URL%/api/auth/google/callback"

echo.
echo Despliegue completo. Abre: %URL%
endlocal
