// Post-proceso del build estático para GitHub Pages.
// Vite reescribe los assets que importa, pero las rutas a archivos de /public
// quedan como literales absolutos ("/images/...", "/pdf/...", etc.).
// Este script les antepone el prefijo base del sitio y genera el 404.html
// que GitHub Pages usa como fallback para los deep links de la SPA.

import fs from 'node:fs';
import path from 'node:path';

const base = (process.argv[2] || '/').replace(/\/+$/, '');
const dist = path.resolve('dist');
const publicDirs = 'images|pdf|sound|hero|entorno|audio';

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function patchJs(file) {
  const src = fs.readFileSync(file, 'utf8');
  // Coincide con literales "/images/...", '/pdf/...' y `/sound/...`
  const re = new RegExp(`(["'\`])/(${publicDirs})/`, 'g');
  const out = src.replace(re, (_m, quote, dir) => `${quote}${base}/${dir}/`);
  if (out !== src) {
    fs.writeFileSync(file, out);
    return (src.match(re) || []).length;
  }
  return 0;
}

function patchHtml(file) {
  const src = fs.readFileSync(file, 'utf8');
  const re = new RegExp(`(href|src)="/(${publicDirs})/`, 'g');
  const out = src.replace(re, `$1="${base}/$2/`);
  if (out !== src) fs.writeFileSync(file, out);
  return out;
}

let changed = 0;
const assetsDir = path.join(dist, 'assets');
if (fs.existsSync(assetsDir)) {
  for (const name of fs.readdirSync(assetsDir)) {
    if (name.endsWith('.js')) changed += patchJs(path.join(assetsDir, name));
  }
}

const indexHtml = path.join(dist, 'index.html');
if (!fs.existsSync(indexHtml)) {
  console.error('[static] No existe dist/index.html; ¿falló el build?');
  process.exit(1);
}
const html = patchHtml(indexHtml);

// Fallback de GitHub Pages: sirve la SPA en cualquier ruta profunda.
fs.writeFileSync(path.join(dist, '404.html'), html);
fs.writeFileSync(path.join(dist, '.nojekyll'), '');

console.log(`[static] Prefijo "${base}" aplicado a ${changed} rutas de assets.`);
console.log('[static] 404.html y .nojekyll generados.');
