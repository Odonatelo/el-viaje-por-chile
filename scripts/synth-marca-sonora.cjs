/*
 * Marca sonora del viaje (El Viaje por Chile).
 * Mezcla un pad ambiental (Re mayor add9, al estilo Coldplay) con un arpegio
 * sintético robótico y pulso (al estilo Daft Punk), y una grabación REAL de
 * arpa de boca (jaw harp) para el trompe mapuche, ya que el trompe es un arpa
 * de boca.
 * Fuente de la muestra: Wikimedia Commons — "Klangdemonstration einer
 * jakutischen Maultrommel - der Khomus aus Sibirien.wav" (mismo instrumento).
 * El canto de chucao (tapaculo chileno) de fondo proviene del soundscape libre
 * "Chucao" de Internet Archive (archive.org/details/Chucao, 60s).
 * Uso: node scripts/synth-marca-sonora.cjs <salida.wav>
 */
const fs = require('fs');
const SR = 22050;
const DUR = 16.0;
const N = Math.floor(DUR * SR);
const buf = new Float64Array(N);

const F = {
  D2: 73.42, A2: 110.0, D3: 146.83, Fs3: 185.0, A3: 220.0, B3: 246.94,
  D4: 293.66, Fs4: 369.99, A4: 440.0, B4: 493.88, D5: 587.33, E5: 659.26, Fs5: 739.99, A5: 880.0,
};

/* ---------- utilidades ---------- */
function env(t0, dur, att, rel) {
  return (i) => {
    const t = (i / SR) - t0;
    if (t < 0 || t > dur) return 0;
    let g = 1;
    if (t < att) g = t / att;
    const rt = dur - t;
    if (rt < rel) g *= rt / rel;
    return g;
  };
}

/* ---------- carga de la muestra real (jaw harp / trompe) mono PCM 16 bits ---------- */
function loadMono16(rel) {
  const src = fs.readFileSync(rel);
  const ch = src.readUInt16LE(22);
  const srate = src.readUInt32LE(24);
  const bits = src.readUInt16LE(34);
  const data = src.readUInt32LE(40);
  if (bits !== 16) throw new Error('se necesita audio PCM de 16 bits');
  const n = Math.floor(data / 2);
  const mono = new Float64Array(Math.floor(n / ch));
  for (let i = 0; i < n; i++) {
    const v = src.readInt16LE(44 + i * 2) / 32767;
    const c = i % ch;
    mono[(i - c) / ch] += v / ch;
  }
  return { buf: mono, sr: srate };
}
const JAW = loadMono16(__dirname + '/assets/jawharp-src.wav');
const nSamp = Math.floor(JAW.buf.length / (JAW.sr / SR));
const SAMPLE_22050 = new Float64Array(nSamp);
for (let i = 0; i < nSamp; i++) {
  const p = i * (JAW.sr / SR);
  const i0 = Math.floor(p);
  const f = p - i0;
  const a = JAW.buf[i0];
  const b = JAW.buf[Math.min(i0 + 1, JAW.buf.length - 1)];
  SAMPLE_22050[i] = a + (b - a) * f;
}

function placeSample(t0, offsetSec, dur, gain, chopHz) {
  const g = env(t0, dur, 0.02, 0.16);
  const n0 = Math.floor(t0 * SR);
  const n1 = Math.min(N, n0 + Math.floor(dur * SR));
  const s0 = Math.floor(offsetSec * SR);
  for (let i = n0; i < n1; i++) {
    const si = s0 + (i - n0);
    if (si >= SAMPLE_22050.length) break;
    const t = (i / SR) - t0;
    let am = 1;
    if (chopHz > 0) am = 0.72 + 0.28 * (((t * chopHz) % 1) < 0.5 ? 1 : -1);
    buf[i] += SAMPLE_22050[si] * g(i) * am * gain;
  }
}

/* ---------- canto de chucao (fondo de selva valdiviana) ---------- */
const CHUCAO = loadMono16(__dirname + '/assets/chucao-src.wav');
const CHUCAO_HI = new Float64Array(CHUCAO.buf.length);
const ACT = new Float64Array(N);
const CHUC_MIX = new Float64Array(N);
{
  const fc = 900;
  const A = Math.exp(-2 * Math.PI * fc / SR);
  let y = 0;
  for (let i = 0; i < CHUCAO.buf.length; i++) {
    y = A * (y + CHUCAO.buf[i] - (i > 0 ? CHUCAO.buf[i - 1] : 0));
    CHUCAO_HI[i] = y;
  }
}
function placeChucao(t0, offsetSec, dur, gain) {
  const g = env(t0, dur, 0.02, 0.2);
  const n0 = Math.floor(t0 * SR);
  const n1 = Math.min(N, n0 + Math.floor(dur * SR));
  const s0 = Math.floor(offsetSec * SR);
  for (let i = n0; i < n1; i++) {
    const si = s0 + (i - n0);
    if (si >= CHUCAO.buf.length) break;
    const v = CHUCAO.buf[si] + 0.6 * CHUCAO_HI[si];
    CHUC_MIX[i] += v * g(i) * gain;
    ACT[i] += g(i);
    const e1 = i + Math.floor(SR * 0.8);
    if (e1 < N && si + Math.floor(SR * 0.8) < CHUCAO.buf.length) {
      CHUC_MIX[e1] += v * g(i) * gain * 0.3;
      ACT[e1] = Math.max(ACT[e1], g(i) * 0.6);
    }
    const e2 = i + Math.floor(SR * 1.6);
    if (e2 < N && si + Math.floor(SR * 1.6) < CHUCAO.buf.length) {
      CHUC_MIX[e2] += v * g(i) * gain * 0.18;
      ACT[e2] = Math.max(ACT[e2], g(i) * 0.4);
    }
  }
}

/* ---------- sintesis de instrumentos ---------- */
function pluckAt(t0, dur, freq, gain, decay) {
  const g = env(t0, dur, 0.004, 0.012);
  const n0 = Math.floor(t0 * SR);
  const n1 = Math.min(N, n0 + Math.floor(dur * SR));
  for (let i = n0; i < n1; i++) {
    const t = (i / SR) - t0;
    const dec = Math.exp(-t * decay);
    const ph = freq * t;
    const v = 0.72 * Math.sin(2 * Math.PI * ph) + 0.22 * Math.sin(2 * Math.PI * ph * 2) + 0.06 * Math.sin(2 * Math.PI * ph * 3);
    buf[i] += v * g(i) * dec * gain;
  }
}

function padAt(t0, dur, freqs, gain, att, rel, detune) {
  const g = env(t0, dur, att, rel);
  const swells = (t) => 0.72 + 0.28 * Math.sin((2 * Math.PI * t) / 3.6);
  for (const f0 of freqs) {
    const n0 = Math.floor(t0 * SR);
    const n1 = Math.min(N, n0 + Math.floor(dur * SR));
    for (let i = n0; i < n1; i++) {
      const t = (i / SR) - t0;
      const ph = f0 * t;
      const s =
        Math.sin(2 * Math.PI * ph) * 0.5 +
        Math.sin(2 * Math.PI * ph * (1 - detune)) * 0.3 +
        Math.sin(2 * Math.PI * ph * (1 + detune)) * 0.2;
      buf[i] += s * g(i) * swells(t) * gain;
    }
  }
}

function bassAt(t0, dur, freq, gain) {
  const g = env(t0, dur, 0.006, 0.06);
  const n0 = Math.floor(t0 * SR);
  const n1 = Math.min(N, n0 + Math.floor(dur * SR));
  for (let i = n0; i < n1; i++) {
    const t = (i / SR) - t0;
    const ph = freq * t;
    const v = 0.6 * Math.sin(2 * Math.PI * ph) + 0.35 * Math.sin(2 * Math.PI * ph * 2) + 0.15 * Math.sin(2 * Math.PI * ph * 3);
    buf[i] += v * g(i) * gain;
  }
}

function kickAt(t0, gain) {
  const n0 = Math.floor(t0 * SR);
  const n1 = Math.min(N, n0 + Math.floor(0.25 * SR));
  for (let i = n0; i < n1; i++) {
    const t = (i / SR) - t0;
    const f = 120 * Math.exp(-t * 22) + 44;
    const v = Math.sin(2 * Math.PI * f * t) * Math.exp(-t * 18);
    buf[i] += v * gain;
  }
}

/* ---------- arreglo ---------- */
const eighth = 0.3;
// trompe mapuche (arpa de boca real) — apertura orgánica sobre el pad
placeSample(0.5, 0.3, 1.7, 0.1, 0);
placeSample(2.7, 3.2, 1.6, 0.08, 0);
// chucao (tapaculo chileno) — capa continua de bosque: llamadas distantes por todo el tema
const chucaoT = [0.7, 2.0, 3.3, 4.6, 5.9, 7.2, 8.5, 9.8, 11.1, 12.4, 13.7, 15.0];
const chucaoOff = [42.4, 50.9, 54.2, 46.4, 57.6, 23.2, 44.6, 29.2, 39.6, 12.8, 54.2, 42.4];
chucaoT.forEach((t, k) => {
  placeChucao(t, chucaoOff[k % chucaoOff.length], 1.4, k % 3 === 0 ? 0.55 : 0.45);
});
// pad: Dmaj add9 (ambiental, estilo Coldplay)
padAt(0, 14.6, [F.D4, F.Fs4, F.A4, F.E5, F.D3, F.Fs3, F.B3], 0.11, 1.4, 2.2, 0.001);
// bajo pulsante (estilo Daft Punk)
const bassPat = [F.D3, F.D3, F.D3, F.A2, F.D3, F.D3, F.A2, F.A2, F.D3, F.D3, F.D3, F.A2, F.D3, F.D3, F.B3, F.A2];
for (let s = 0; s < Math.floor((13.2 - 2.4) / eighth); s++) {
  const t0 = 2.4 + s * eighth;
  if (t0 > 13.4) break;
  bassAt(t0, 0.42, bassPat[s % bassPat.length], 0.12);
}
// bombo en negras
for (let t = 2.4; t <= 12.6; t += 0.6) kickAt(t, 0.42);
// arpegio sintético robótico (dos compases)
const arpNotes = [
  F.D4, F.Fs4, F.A4, F.D5, F.B4, F.A4, F.Fs4, F.A4,
  F.D4, F.Fs4, F.A4, F.D5, F.E5, F.D5, F.B4, F.Fs4,
];
const arpVel = [
  1.0, 0.65, 0.8, 1.0, 0.9, 0.7, 0.7, 0.8,
  1.0, 0.65, 0.8, 1.0, 0.55, 0.9, 0.8, 0.7,
];
for (let cycle = 0; cycle < 3; cycle++) {
  const base = 4.8 + cycle * 4.8;
  arpNotes.forEach((f, s) => {
    const t0 = base + s * eighth;
    if (t0 < 2.4 || t0 > 13.6) return;
    pluckAt(t0, 0.9, f, 0.1 * arpVel[s], 5.5);
    if (s % 4 === 3) pluckAt(t0, 0.9, f * 2, 0.05 * arpVel[s], 5.5);
  });
}
// campanillas tipo Coldplay (muy sutiles, para no competir con el bosque)
const bells = [
  [4.8, F.E5, 0.028], [7.2, F.B4, 0.02], [9.6, F.E5, 0.028], [12.0, F.Fs4, 0.018],
];
bells.forEach(([t0, f, g]) => { pluckAt(t0, 3.0, f, g, 1.6); });
// trompe real mezclado sobre el groove (llamada-respuesta con el arpegio)
placeSample(6.2, 7.2, 1.7, 0.12, 5);
placeSample(9.0, 4.1, 1.5, 0.11, 5);
placeSample(11.4, 9.4, 1.6, 0.12, 0);
// resolución final
padAt(13.6, 2.4, [F.D4, F.Fs4, F.A4, F.D5], 0.16, 0.12, 1.6, 0.001);

/* ---------- delay espacial y master ---------- */
const delayS = Math.floor(SR * 0.42);
const master = new Float64Array(N);
// los instrumentos ceden 55% mientras canta el chucao; el chucao sigue intacto
for (let i = 0; i < N; i++) master[i] = buf[i] * (1 - 0.55 * Math.min(1, ACT[i])) + CHUC_MIX[i];
for (let i = 0; i + delayS < N; i++) master[i + delayS] += buf[i] * 0.28;

// diagnóstico: nivel de aves vs mezcla
let sMix = 0, mN = 0, sChuc = 0;
for (let i = 0; i < N; i++) { sMix += buf[i] * buf[i]; sChuc += CHUC_MIX[i] * CHUC_MIX[i]; mN++; }
console.log('rms mezcla: ' + (Math.sqrt(sMix / mN)).toFixed(4) + ' | rms aves: ' + (Math.sqrt(sChuc / mN)).toFixed(4));

let peak = 0;
for (let i = 0; i < N; i++) peak = Math.max(peak, Math.abs(master[i]));
const norm = 0.92 / (peak || 1);
for (let i = 0; i < N; i++) {
  master[i] *= norm;
  if (master[i] > 0.98) master[i] = 0.98;
  if (master[i] < -0.98) master[i] = -0.98;
}

/* ---------- escritura WAV 16-bit mono ---------- */
const dataSize = N * 2;
const out = Buffer.alloc(44 + dataSize);
out.write('RIFF', 0);
out.writeUInt32LE(36 + dataSize, 4);
out.write('WAVE', 8);
out.write('fmt ', 12);
out.writeUInt32LE(16, 16);
out.writeUInt16LE(1, 20);
out.writeUInt16LE(1, 22);
out.writeUInt32LE(SR, 24);
out.writeUInt32LE(SR * 2, 28);
out.writeUInt16LE(2, 32);
out.writeUInt16LE(16, 34);
out.write('data', 36);
out.writeUInt32LE(dataSize, 40);
for (let i = 0; i < N; i++) out.writeInt16LE(Math.round(master[i] * 32767), 44 + i * 2);
fs.writeFileSync(process.argv[2], out);
console.log('marca sonora escrita: ' + (N / SR).toFixed(1) + 's, ' + Math.round((out.length / 1024)) + 'KB');