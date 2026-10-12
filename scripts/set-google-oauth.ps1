# ============================================================
#  Configura Google OAuth para "Interpretacion del Patrimonio"
#  Proyecto GCP: el-viaje-por-chile-app  |  Servicio: elviaje
#
#  Uso (desde la raiz del repo):
#    powershell -ExecutionPolicy Bypass -File .\scripts\set-google-oauth.ps1 `
#      -ClientId "XXXX.apps.googleusercontent.com" -ClientSecret "GOCSPX-..."
#
#  O de forma interactiva:
#    powershell -ExecutionPolicy Bypass -File .\scripts\set-google-oauth.ps1
# ============================================================
param(
  [string]$ClientId,
  [string]$ClientSecret
)

$ErrorActionPreference = 'Continue'
$PROJECT  = 'el-viaje-por-chile-app'
$SERVICE  = 'elviaje'
$REGIONS  = @('southamerica-west1', 'us-central1')

$gcloud = Join-Path $env:LOCALAPPDATA 'Google\Cloud SDK\google-cloud-sdk\bin\gcloud.cmd'
if (-not (Test-Path -LiteralPath $gcloud)) {
  throw "No se encontro gcloud en: $gcloud"
}

if (-not $ClientId)     { $ClientId = Read-Host 'Client ID (termina en .apps.googleusercontent.com)' }
if (-not $ClientSecret) { $ClientSecret = Read-Host 'Client Secret (GOCSPX-...)' }

$ClientId     = $ClientId.Trim()
$ClientSecret = $ClientSecret.Trim()

if ($ClientId -notmatch '\.apps\.googleusercontent\.com$') {
  Write-Warning "El Client ID no termina en '.apps.googleusercontent.com'. Verifica el valor."
}
if ([string]::IsNullOrWhiteSpace($ClientId) -or [string]::IsNullOrWhiteSpace($ClientSecret)) {
  throw 'Client ID y Client Secret son obligatorios.'
}

# Se escriben sin salto de linea (un '\n' final rompe el valor del secreto).
$tmpId     = Join-Path $env:TEMP 'gid.txt'
$tmpSecret = Join-Path $env:TEMP 'gsecret.txt'
[System.IO.File]::WriteAllText($tmpId, $ClientId)
[System.IO.File]::WriteAllText($tmpSecret, $ClientSecret)

Write-Host '1/3  Cargando nuevas versiones de los secretos google-id / google-secret...'
& $gcloud secrets versions add google-id     --data-file="$tmpId"     --project $PROJECT
if ($LASTEXITCODE -ne 0) { throw 'Fallo al actualizar el secreto google-id.' }
& $gcloud secrets versions add google-secret --data-file="$tmpSecret" --project $PROJECT
if ($LASTEXITCODE -ne 0) { throw 'Fallo al actualizar el secreto google-secret.' }
Remove-Item -LiteralPath $tmpId, $tmpSecret -Force -ErrorAction SilentlyContinue

Write-Host '2/3  Forzando nueva revision en Cloud Run (resuelve los secretos :latest)...'
foreach ($reg in $REGIONS) {
  & $gcloud run services update $SERVICE --region $reg --project $PROJECT `
    --update-secrets "GOOGLE_CLIENT_ID=google-id:latest,GOOGLE_CLIENT_SECRET=google-secret:latest" --quiet
  if ($LASTEXITCODE -ne 0) { Write-Warning "No se pudo actualizar la region $reg." }
  else { Write-Host "     OK  $reg" }
}

Write-Host '3/3  Listo. Prueba el flujo en:'
Write-Host '     https://www.interpretaciondelpatrimonio.cl/api/auth/google'
Write-Host '     (debe redirigir a accounts.google.com en lugar de dar invalid_client)'
