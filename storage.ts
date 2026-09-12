import fs from 'fs';
import path from 'path';
import { Storage } from '@google-cloud/storage';

// Persistencia duradera: si GCS_BUCKET está definido (producción en Cloud Run),
// los archivos data/*.json se leen/escriben en Google Cloud Storage y sobreviven
// reinicios y reescalados. Si no, se usa el sistema de archivos local (dev).
const BUCKET = process.env.GCS_BUCKET || '';
const gcs: Storage | null = BUCKET ? new Storage() : null;
if (gcs) console.log('[storage] Persistencia en Google Cloud Storage (bucket):', BUCKET);

export async function readJson(relPath: string, fallback: any): Promise<any> {
  if (gcs) {
    try {
      const [data] = await gcs.bucket(BUCKET).file(relPath).download();
      return JSON.parse(data.toString('utf-8'));
    } catch (e: any) {
      if (e?.code === 404) return fallback;
      console.warn('[storage] GCS lectura falló, usando local:', e?.message);
    }
  }
  const full = path.join(process.cwd(), relPath);
  if (fs.existsSync(full)) {
    try {
      return JSON.parse(fs.readFileSync(full, 'utf-8'));
    } catch {
      return fallback;
    }
  }
  return fallback;
}

export function writeJson(relPath: string, data: any): void {
  const content = JSON.stringify(data, null, 2);
  const full = path.join(process.cwd(), relPath);
  try {
    fs.mkdirSync(path.dirname(full), { recursive: true });
    fs.writeFileSync(full, content);
  } catch (e: any) {
    console.warn('[storage] No se pudo escribir localmente:', e?.message);
  }
  if (gcs) {
    gcs
      .bucket(BUCKET)
      .file(relPath)
      .save(content, { resumable: false })
      .catch((err: any) => console.warn('[storage] GCS escritura falló:', err?.message));
  }
}

export async function writeBuffer(relPath: string, buffer: Buffer): Promise<void> {
  const full = path.join(process.cwd(), relPath);
  try {
    fs.mkdirSync(path.dirname(full), { recursive: true });
    fs.writeFileSync(full, buffer);
  } catch (e: any) {
    console.warn('[storage] No se pudo escribir binario localmente:', e?.message);
  }
  if (gcs) {
    try {
      await gcs.bucket(BUCKET).file(relPath).save(buffer, { resumable: false });
    } catch (err: any) {
      console.warn('[storage] GCS escritura binaria falló:', err?.message);
    }
  }
}

export async function readBuffer(relPath: string): Promise<Buffer | null> {
  if (gcs) {
    try {
      const [data] = await gcs.bucket(BUCKET).file(relPath).download();
      return data;
    } catch (e: any) {
      if (e?.code === 404) return null;
      console.warn('[storage] GCS lectura binaria falló:', e?.message);
    }
  }
  const full = path.join(process.cwd(), relPath);
  if (!fs.existsSync(full)) return null;
  try {
    return fs.readFileSync(full);
  } catch {
    return null;
  }
}
