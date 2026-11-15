# Despliegue seguro (HTTPS) en Cloudflare Pages

Este proyecto es un sitio estático (SPA). La opción recomendada para HTTPS seguro,
gratuito y con headers de seguridad es **Cloudflare Pages**.

## 1) Configurar secretos en GitHub (una sola vez)

En el repo de GitHub: **Settings → Secrets and variables → Actions → New repository secret**

- `CLOUDFLARE_API_TOKEN` — token de Cloudflare con permiso "Cloudflare Pages: Edit".
- `CLOUDFLARE_ACCOUNT_ID` — ID de tu cuenta de Cloudflare.

## 2) Desplegar

El workflow `.github/workflows/deploy-cloudflare-pages.yml` se ejecuta en cada push a `main`
(o manualmente desde Actions → "Deploy to Cloudflare Pages (static)").

## 3) Apuntar el dominio a Cloudflare Pages

En Cloudflare (DNS del dominio `interpretaciondelpatrimonio.cl`):

- Crea un registro CNAME para `www` apuntando al proyecto de Pages (ej. `el-viaje-por-chile.pages.dev`).
- (Opcional) Redirige el apex `interpretaciondelpatrimonio.cl` a `www` con una regla de redirección o un CNAME flattening.

Cloudflare emitirá automáticamente el certificado HTTPS para `www.interpretaciondelpatrimonio.cl`.

## 4) Headers de seguridad

El archivo `public/_headers` se copia al build (`dist/_headers`) y Cloudflare Pages
aplica automáticamente: HSTS, CSP, X-Frame-Options, nosniff, Referrer-Policy,
Permissions-Policy, COOP y caché diferenciado para assets/HTML.

## 5) Verificación

- Navegador: candado verde en `https://www.interpretaciondelpatrimonio.cl`.
- `curl -I https://www.interpretaciondelpatrimonio.cl` debe devolver `strict-transport-security`.

## Alternativa: GitHub Pages (gratis)

Si prefieres seguir en GitHub Pages, configura en el repo:
**Settings → Pages → Custom domain = `www.interpretaciondelpatrimonio.cl`** y marca **Enforce HTTPS**.
Espera hasta 24 h para la emisión del certificado de Let's Encrypt.
