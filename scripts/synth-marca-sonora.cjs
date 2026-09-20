const fs = require('fs');
const SR = 22050;
const DUR = 16.0;
const N = Math.floor(DUR * SR);
const buf = new Float64Array(N);

const F = {
  D2: 73.42, A2: 110.0, D3: 146.83, Fs3: 185.0, A3: 220.0, B3: 246.94,
  D4: 293.66, Fs4: 369.99, A4: 440.0, B4: 493.88, D5: 587.33, E5: 659.26, Fs5: 739.99, A5: 880.0,
};

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

function pluckAt(t0, dur, freq, gain, decay) {
  const g = env(t0, dur, 0.004, 0.012);
  const n0 = Math.floor(t0 * SR);
  const n1 = Math.min(N, n0 + Math.floor(dur * SR));
  const w = (phase) => {
    const p = phase % 1;
    return p < 0.28 ? 1 : p < 0.5 ? -0.55 : p < 0.78 ? 0.7 : -0.45;
  };
  for (let i = n0; i < n1; i++) {
    const t = (i / SR) - t0;
    const dec = Math.exp(-t * decay);
    const ph = freq * t;
    const v = 0.55 * w(ph) + 0.3 * Math.sin(2 * Math.PI * ph * 2) + 0.15 * Math.sin(2 * Math.PI * ph * 3);
    buf[i] += v * g(i) * dec * gain;
  }
}

function padAt(t0, dur, freqs, gain, att, rel, detune) {
  const g = env(t0, dur, att, rel);
  const beat = 0.6;
  const swells = (t) => 0.72 + 0.28 * Math.sin(2 * Math.PI * t / 3.6);
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

// Trompe mapuche (arpa de boca): zumbido metálico, púa de lengua/carrillo y brillo que abre/cierra
function trompeAt(t0, dur, freq, gain) {
  const g = env(t0, dur, 0.02, 0.08);
  const n0 = Math.floor(t0 * SR);
  const n1 = Math.min(N, n0 + Math.floor(dur * SR));
  for (let i = n0; i < n1; i++) {
    const t = (i / SR) - t0;
    const bend = 0.97 + 0.06 * Math.min(1, t / dur);
    const f = freq * bend;
    const ph = f * t;
    const chop = (t * 5.5) % 1 < 0.5 ? 1 : 0.2;
    const bright = 0.55 + 0.45 * Math.sin(2 * Math.PI * t * 1.3);
    const v =
      0.3 * Math.sin(2 * Math.PI * ph) +
      0.45 * Math.sin(2 * Math.PI * ph * 2) +
      0.55 * bright * Math.sin(2 * Math.PI * ph * 3) +
      0.3 * bright * Math.sin(2 * Math.PI * ph * 4) +
      0.18 * Math.sin(2 * Math.PI * ph * 5) +
      0.1 * Math.sin(2 * Math.PI * ph * 6) +
      0.06 * Math.sin(2 * Math.PI * ph * 7.3);
    buf[i] += v * chop * g(i) * gain;
  }
}

const eighth = 0.3;
// trompe mapuche — apertura orgánica (solo con el pad)
trompeAt(0.5, 2.0, F.D3, 0.1);
trompeAt(2.7, 1.5, F.A2, 0.08);
// piano pad: Dmaj add9 (Coldplay warm pad)
padAt(0, 14.6, [F.D4, F.Fs4, F.A4, F.E5, F.D3, F.Fs3, F.B3], 0.11, 1.4, 2.2, 0.001);
// bass pulse en 8as (daft punk groove)
const bassPat = [F.D3, F.D3, F.D3, F.A2, F.D3, F.D3, F.A2, F.A2, F.D3, F.D3, F.D3, F.A2, F.D3, F.D3, F.B3, F.A2];
for (let s = 0; s < Math.floor((13.2 - 2.4) / eighth); s++) {
  const t0 = 2.4 + s * eighth;
  if (t0 > 13.4) break;
  bassAt(t0, 0.42, bassPat[s % bassPat.length], 0.16);
}
// kick en negras, punch suave
for (let t = 2.4; t <= 12.6; t += 0.6) kickAt(t, 0.5);
// arpegio sintético robótico (Daft Punk), 2 compases
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
    pluckAt(t0, 0.9, f, 0.2 * arpVel[s], 5.5);
    if (s % 4 === 3) pluckAt(t0, 0.9, f * 2, 0.1 * arpVel[s], 5.5);
  });
}
// campanillas tipo Coldplay (shimmer)
const bells = [
  [4.8, F.E5, 0.1], [7.2, F.B4, 0.08], [9.6, F.E5, 0.1], [12.0, F.Fs4, 0.07],
];
bells.forEach(([t0, f, g]) => { pluckAt(t0, 3.0, f, g, 1.6); });
// trompe mapuche mezclado sobre el groove (llamada-respuesta con el arpegio)
trompeAt(6.2, 1.7, F.D3, 0.11);
trompeAt(9.0, 1.5, F.A2, 0.1);
trompeAt(11.4, 1.6, F.D3, 0.12);
// resolución final (arranque de acorde mayor)
padAt(13.6, 2.4, [F.D4, F.Fs4, F.A4, F.D5], 0.16, 0.12, 1.6, 0.001);

// delay espacial (una tap) + master
const delayS = Math.floor(SR * 0.42);
const master = new Float64Array(N);
for (let i = 0; i < N; i++) master[i] = buf[i];
for (let i = 0; i + delayS < N; i++) master[i + delayS] += buf[i] * 0.28;

let peak = 0;
for (let i = 0; i < N; i++) peak = Math.max(peak, Math.abs(master[i]));
const norm = 0.92 / (peak || 1);
let maxAbs = 0;
for (let i = 0; i < N; i++) {
  master[i] *= norm;
  maxAbs = Math.max(maxAbs, Math.abs(master[i]));
}
// soft clip
for (let i = 0; i < N; i++) {
  let s = master[i];
  if (s > 0.98) s = 0.98;
  if (s < -0.98) s = -0.98;
  master[i] = s;
}

// WAV 16-bit mono
const dataSize = N * 2;
const out = Buffer.alloc(44 + dataSize);
out.write('RIFF', 0);
out.writeUInt32LE(36 + dataSize, 4);
out.write('WAVE', 8);
out.write('fmt ', 12);
out.writeUInt32LE(16, 16);
out.writeUInt16LE(1, 20);       // PCM
out.writeUInt16LE(1, 22);       // mono
out.writeUInt32LE(SR, 24);
out.writeUInt32LE(SR * 2, 28);
out.writeUInt16LE(2, 32);
out.writeUInt16LE(16, 34);
out.write('data', 36);
out.writeUInt32LE(dataSize, 40);
for (let i = 0; i < N; i++) {
  out.writeInt16LE(Math.round(master[i] * 32767), 44 + i * 2);
}
fs.writeFileSync(process.argv[2], out);
const secs = (N / SR).toFixed(1);
const kb = (out.length / 1024).toFixed(0);
console.log(`wav escrita: ${secs}s, ${kb}KB, peak=${maxAbs.toFixed(3)}`);