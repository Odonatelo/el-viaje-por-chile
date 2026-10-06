import React, { useState } from 'react';
import {
  ArrowRight,
  Feather,
  Target,
  Sparkles,
  Users,
  Lightbulb,
  ScanLine,
  Milestone,
  Leaf,
  Dna,
  FlaskConical,
  Compass,
  LibraryBig,
  Quote,
  HeartHandshake,
  Globe,
  Map,
  TrainFront,
  Building2,
  Footprints,
  Droplets,
  Music2,
  Pencil,
  Ruler,
  Landmark,
  Download,
  ExternalLink,
  BookOpen,
  FileText,
  Brain,
  Headphones,
} from 'lucide-react';
import { VideoPopup } from './VideoPopup';
import { VideoTrigger } from './VideoTrigger';

interface DisenoExperienciasPageProps {
  onBack: () => void;
  onOpenTour?: (tourId: string) => void;
}

/* Estructuras biológicas procedimentales (diseño generativo SVG, estilo Material Ecology) */

function BranchPattern({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 640" fill="none" className={className} aria-hidden="true">
      {['#B04E2A', '#D97706', '#3F6B4A', '#E8A58B', '#1D3626'].map((c, i) => (
        <g key={i} opacity={0.5} stroke={c} strokeWidth={1.2} strokeLinecap="round">
          <path d={`
            M${20 + i * 6} ${20 + i * 10}
            C ${90 + i * 6} ${40 + i * 10}, ${150 + i * 8} ${110 + i * 4}, ${230 + i * 4} ${150 + i * 6}
            C ${310 + i * 2} ${190 + i * 8}, ${360 + i * 3} ${280 - i * 4}, ${430 - i * 2} ${300 + i * 6}
            C ${500 - i * 4} ${320 + i * 8}, ${560 - i * 6} ${360 - i * 4}, ${620 - i * 8} ${330 + i * 6}
          `} />
        </g>
      ))}
      {Array.from({ length: 46 }).map((_, i) => {
        const x = (i * 137) % 640;
        const y = (i * 97) % 640;
        const r = 1.5 + ((i * 13) % 4);
        const c = ['#E8A58B', '#B04E2A', '#6B8F71', '#D97706'][i % 4];
        return <circle key={i} cx={x} cy={y} r={r} fill={c} opacity={0.55} />;
      })}
    </svg>
  );
}

function goldenSpiralD(cx = 160, cy = 160, scale = 3, turns = 3.5) {
  const phi = 1.618033988749895;
  const pts: string[] = [];
  for (let t = 0; t <= Math.PI * 2 * turns; t += Math.PI / 120) {
    const r = scale * Math.pow(phi, t / (Math.PI / 2));
    const x = cx + r * Math.cos(t - Math.PI / 2);
    const y = cy + r * Math.sin(t - Math.PI / 2);
    pts.push(`${x.toFixed(1)} ${y.toFixed(1)}`);
  }
  return `M ${pts.join(' L ')}`;
}

function GoldenSpiralSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 320" fill="none" className={className} aria-hidden="true">
      {[140, 100, 60, 20].map((rr) => (
        <circle
          key={rr}
          cx="160"
          cy="160"
          r={rr}
          stroke="currentColor"
          strokeWidth="0.8"
          opacity="0.18"
          strokeDasharray="2 6"
        />
      ))}
      <path d={goldenSpiralD(160, 160, 3.4, 3.5)} stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" opacity="0.85" />
      <circle cx="160" cy="160" r="6" fill="currentColor" opacity="0.9" />
    </svg>
  );
}

function FlowerOfLifeSVG({ className }: { className?: string }) {
  const R = 34;
  const centers: Array<[number, number]> = [];
  for (let q = -2; q <= 2; q++) {
    for (let r = -2; r <= 2; r++) {
      if (Math.max(Math.abs(q), Math.abs(r), Math.abs(q + r)) > 2) continue;
      centers.push([160 + 1.5 * R * q, 160 + R * Math.sqrt(3) * (r + q / 2)]);
    }
  }
  return (
    <svg viewBox="0 0 320 320" fill="none" className={className} aria-hidden="true">
      {centers.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={R} stroke="currentColor" strokeWidth="1.1" opacity={i === 0 ? 0.9 : 0.5} />
      ))}
    </svg>
  );
}

function GoldenRuler({ className }: { className?: string }) {
  const fib = [1, 1, 2, 3, 5, 8, 13];
  let x = 0;
  return (
    <svg viewBox="0 0 660 64" fill="none" className={className} aria-hidden="true">
      {fib.map((n, i) => {
        const w = (n / 33) * 660;
        const seg = (
          <g key={`seg-${i}`}>
            <rect x={x} y="6" width={w - 1} height="40" fill={['#B04E2A', '#D97706', '#3F6B4A', '#2E4E37', '#14281C', '#6B8F71', '#B4572E'][i]} opacity="0.85" />
            <text x={x + (w - 1) / 2} y="31" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="800">
              {n}
            </text>
            <line x1={x} y1="6" x2={x} y2="46" stroke="#14281C" strokeWidth="1" opacity="0.7" />
          </g>
        );
        x += w;
        return seg;
      })}
      <line x1="0" y1="46" x2="660" y2="46" stroke="#14281C" strokeWidth="1.4" />
      <line x1={660} y1="6" x2={660} y2="46" stroke="#14281C" strokeWidth="1" opacity="0.7" />
      <text x="0" y="61" fill="#14281C" fontSize="11" fontWeight="800">
        Sucesión de Fibonacci 1+1+2+3+5+8+13 · φ ≈ 1,618
      </text>
    </svg>
  );
}

function goldenPoint(cx: number, cy: number, scale: number, t: number) {
  const phi = 1.618033988749895;
  const r = scale * Math.pow(phi, t / (Math.PI / 2));
  return { x: cx + r * Math.cos(t - Math.PI / 2), y: cy + r * Math.sin(t - Math.PI / 2) };
}

const HITOS = [
  {
    n: 1,
    fib: 1,
    titulo: 'Anticipación',
    frase: 'el deseo despierta antes de partir',
    color: '#B04E2A',
  },
  {
    n: 2,
    fib: 1,
    titulo: 'Desplazamiento',
    frase: 'el camino es la primera estación',
    color: '#D97706',
  },
  {
    n: 3,
    fib: 2,
    titulo: 'Llegada',
    frase: 'el umbral se abre: primera impresión',
    color: '#3F6B4A',
  },
  {
    n: 4,
    fib: 3,
    titulo: 'Inmersión',
    frase: 'el sitio se entrega: estaciones y pausas',
    color: '#2E4E37',
  },
  {
    n: 5,
    fib: 5,
    titulo: 'Encuentro central',
    frase: 'la revelación: el hito mayor del relato',
    color: '#14281C',
  },
  {
    n: 6,
    fib: 8,
    titulo: 'Recuerdo',
    frase: 'la memoria que viaja de vuelta contigo',
    color: '#B4572E',
  },
];

const RADIOS = [45, 60, 82, 110, 140, 165];

function TravelJourneySpiral({ className }: { className?: string }) {
  const cx = 170;
  const cy = 170;
  const scale = 26;
  const nodes = HITOS.map((h, i) => {
    const p = goldenPoint(cx, cy, scale, goldenTForRadius(RADIOS[i], scale));
    return { ...h, ...p };
  });
  return (
    <svg viewBox="0 0 340 340" fill="none" className={className} aria-label="Espiral del viaje del visitante: hitos sobre la geometría de Fibonacci">
      <circle cx={cx} cy={cy} r="150" stroke="#14281C" strokeWidth="0.8" opacity="0.15" strokeDasharray="2 8" />
      <circle cx={cx} cy={cy} r="108" stroke="#14281C" strokeWidth="0.8" opacity="0.15" strokeDasharray="2 8" />
      <circle cx={cx} cy={cy} r="66" stroke="#14281C" strokeWidth="0.8" opacity="0.15" strokeDasharray="2 8" />
      <circle cx={cx} cy={cy} r="24" stroke="#14281C" strokeWidth="0.8" opacity="0.15" strokeDasharray="2 8" />
      <path d={goldenSpiralD(cx, cy, scale, 1.98)} stroke="#B04E2A" strokeWidth="2.2" strokeLinecap="round" opacity="0.85" />
      {nodes.map((h) => (
        <g key={h.n}>
          <circle cx={h.x} cy={h.y} r="15" fill={h.color} stroke="#fff" strokeWidth="2.5" />
          <text x={h.x} y={h.y + 4.5} textAnchor="middle" fill="#fff" fontSize="12" fontWeight="800">
            {h.n}
          </text>
          <g>
            <rect x={h.x - 14} y={h.y - 40} width="28" height="16" rx="8" fill="#F6F1E5" stroke={h.color} strokeWidth="1" />
            <text x={h.x} y={h.y - 28.5} textAnchor="middle" fill={h.color} fontSize="9" fontWeight="800">
              φ·{h.fib}
            </text>
          </g>
        </g>
      ))}
      <circle cx={cx} cy={cy} r="5" fill="#14281C" opacity="0.85" />
    </svg>
  );
}

function goldenTForRadius(r: number, scale: number) {
  const phi = 1.618033988749895;
  return (Math.PI / 2) * (Math.log(r / scale) / Math.log(phi));
}

function KrebsCycle() {
  const quadrants = [
    { label: 'Arte', sub: 'cuestiona el comportamiento humano', color: '#B04E2A', angle: 225 },
    { label: 'Ciencia', sub: 'predice el mundo', color: '#2E4E37', angle: 315 },
    { label: 'Ingeniería', sub: 'utiliza el mundo', color: '#D97706', angle: 45 },
    { label: 'Diseño', sub: 'informa el mundo', color: '#14281C', angle: 135 },
  ];
  return (
    <svg viewBox="0 0 320 320" className="w-full max-w-sm mx-auto" aria-label="Ciclo de Krebs de la Creatividad de Neri Oxman">
      <defs>
        <radialGradient id="krebsbg" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#fff" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#F6F1E5" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="160" cy="160" r="150" fill="url(#krebsbg)" stroke="#1D3626" strokeWidth="2" />
      <circle cx="160" cy="160" r="150" fill="none" stroke="#1D3626" strokeWidth="2" strokeDasharray="3 7" opacity="0.35" transform="rotate(45 160 160)" />
      <path d={goldenSpiralD(160, 160, 4.2, 2.4)} fill="none" stroke="#B04E2A" strokeWidth="1.2" strokeDasharray="4 8" opacity="0.55" transform="rotate(90 160 160) scale(1.02)" />
      <circle cx="160" cy="160" r="148" fill="none" stroke="#B04E2A" strokeWidth="1" opacity="0.45" strokeDasharray="1.5 9" transform="rotate(20 160 160)" />
      <path d="M160 10 A150 150 0 0 1 310 160" fill="none" stroke="#B04E2A" strokeWidth="6" strokeLinecap="round" opacity="0.9" />
      <path d="M310 160 A150 150 0 0 1 160 310" fill="none" stroke="#2E4E37" strokeWidth="6" strokeLinecap="round" opacity="0.9" />
      <path d="M160 310 A150 150 0 0 1 10 160" fill="none" stroke="#D97706" strokeWidth="6" strokeLinecap="round" opacity="0.9" />
      <path d="M10 160 A150 150 0 0 1 160 10" fill="none" stroke="#14281C" strokeWidth="6" strokeLinecap="round" opacity="0.9" />
      {quadrants.map((q) => {
        const a = ((q.angle - 90) * Math.PI) / 180;
        const x = 160 + 112 * Math.cos(a);
        const y = 160 + 112 * Math.sin(a);
        return (
          <g key={q.label}>
            <circle cx={x} cy={y} r="30" fill={q.color} stroke="#fff" strokeWidth="3" />
            <text x={x} y={y + 4} textAnchor="middle" fill="#fff" fontSize="13" fontWeight="800">
              {q.label}
            </text>
            <text x={x - 92} y={y + ((q.angle === 45) ? 30 : -40)} textAnchor="middle" fill="#4b5563" fontSize="9" opacity="0.85">
              {q.sub}
            </text>
          </g>
        );
      })}
      <circle cx="160" cy="160" r="10" fill="#FBBF24" stroke="#14281C" strokeWidth="2" />
      <text x="160" y="172" textAnchor="middle" fontSize="7" fill="#14281C" fontWeight="700">CreATP</text>
    </svg>
  );
}

function DesignThinkingWheel() {
  const modes = [
    { label: 'Empatizar', sub: 'observar · escuchar · vivir', color: 'bg-[#B04E2A]', ring: '#B04E2A', icon: HeartHandshake },
    { label: 'Definir', sub: 'sintetizar · punto de vista', color: 'bg-[#D97706]', ring: '#D97706', icon: Target },
    { label: 'Idear', sub: 'abrir · divergir', color: 'bg-[#3F6B4A]', ring: '#3F6B4A', icon: Lightbulb },
    { label: 'Prototipar', sub: 'construir para pensar', color: 'bg-[#2E4E37]', ring: '#2E4E37', icon: Feather },
    { label: 'Probar', sub: 'testear como si supieras que estás mal', color: 'bg-[#14281C]', ring: '#14281C', icon: ScanLine },
  ];
  return (
    <div className="relative">
      <svg viewBox="0 0 320 320" className="w-full mx-auto max-w-sm" aria-hidden="true">
        <defs>
          <linearGradient id="wheel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#B04E2A" />
            <stop offset="50%" stopColor="#3F6B4A" />
            <stop offset="100%" stopColor="#14281C" />
          </linearGradient>
        </defs>
        <circle cx="160" cy="160" r="150" fill="none" stroke="url(#wheel)" strokeWidth="2" opacity="0.4" strokeDasharray="4 8" />
        <path d="M160 14 A148 148 0 0 1 296 174" fill="none" stroke="url(#wheel)" strokeWidth="2.4" opacity="0.7" strokeLinecap="round" />
        <text x="160" y="96" textAnchor="middle" fontSize="11" fill="#14281C" fontWeight="800">iteración</text>
        <path d="M150 82 l20 6 -12 16 z" fill="#3F6B4A" />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center bg-[#F6F1E5]/90 rounded-2xl px-4 py-3 border border-[#E4D8BF] shadow-sm">
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">d.school · Stanford</p>
          <p className="text-sm font-extrabold text-[#14281C]">Design Thinking</p>
        </div>
      </div>
      <svg viewBox="0 0 320 320" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <path d={goldenSpiralD(160, 160, 30, 1.1)} fill="none" stroke="#B04E2A" strokeWidth="1.2" strokeDasharray="4 8" opacity="0.35" transform="rotate(45 160 160)" />
        <circle cx="160" cy="160" r="150" fill="none" stroke="#B04E2A" strokeWidth="1" opacity="0.3" strokeDasharray="1 10" transform="rotate(90 160 160)" />
      </svg>
      {modes.map((m, i) => {
        const a = (i / modes.length) * Math.PI * 2 - Math.PI / 2;
        const x = 50 + 42 * Math.cos(a);
        const y = 50 + 42 * Math.sin(a);
        const Icon = m.icon;
        return (
          <div key={m.label} className="absolute grid place-items-center" style={{ left: `${x}%`, top: `${y}%` }}>
            <div className={`w-14 h-14 rounded-2xl ${m.color} text-white grid place-items-center shadow-lg`}>
              <Icon className="w-6 h-6" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

const D_SCHOOL_MODES = [
  {
    icon: HeartHandshake,
    modo: 'Empatizar',
    origen: 'Empathize',
    color: 'bg-[#B04E2A]',
    desc:
      'Observar, escuchar y vivir la experiencia del visitante en su contexto real. En interpretación: acompañar al excursionista en el cerro isla, no solo preguntarle en una sala.',
  },
  {
    icon: Target,
    modo: 'Definir',
    origen: 'Define',
    color: 'bg-[#D97706]',
    desc:
      'Sintetizar lo aprendido en un punto de vista y un desafío concreto. Equivale a definir el tema interpretativo: la idea central que la experiencia debe revelar.',
  },
  {
    icon: Lightbulb,
    modo: 'Idear',
    origen: 'Ideate',
    color: 'bg-[#3F6B4A]',
    desc:
      'Generar muchas y diversas opciones de mensaje y medio antes de elegir. Es el momento de "abrir"; una sola ruta nunca alcanza para una infinidad de públicos.',
  },
  {
    icon: Feather,
    modo: 'Prototipar',
    origen: 'Prototype',
    color: 'bg-[#2E4E37]',
    desc:
      'Construir para pensar: maquetar la señalética, el folleto, el mapa o el guion y experimentar la experiencia uno mismo antes de llevarla a terreno.',
  },
  {
    icon: ScanLine,
    modo: 'Probar',
    origen: 'Test',
    color: 'bg-[#14281C]',
    desc:
      'Probar prototipos con visitantes reales para refinar y ganar más empatía. "Prototipa como si supieras que estás en lo correcto; prueba como si supieras que estás equivocado".',
  },
];

const MEDIOS = [
  {
    icon: Map,
    grupo: 'Medios físicos',
    color: 'bg-[#B04E2A]',
    ejemplos: 'Señalética y paneles interpretativos, senderos y estaciones, cartería, publicaciones impresas, mapas en papel, centros de visitantes, guiones para guiado.',
  },
  {
    icon: Globe,
    grupo: 'Medios virtuales',
    color: 'bg-[#2E4E37]',
    ejemplos: 'Mapas digitales interactivos, audioguías y visitas virtuales, realidad aumentada sobre el paisaje real, contenidos por QR, redes y geolocalización.',
  },
  {
    icon: Dna,
    grupo: 'Medios híbridos',
    color: 'bg-[#D97706]',
    ejemplos: 'El QR que abre la audioguía del hito que estás tocando, el mapa que combina cartografía tradicional con contenido multimedia: lo físico y lo virtual entrelazados.',
  },
];

const BIBLIOGRAFIA = [
  'Benyus, J. M. (1997). Biomimicry: Innovation inspired by nature. William Morrow.',
  'Beck, L., y Cable, T. (2011). Interpretation for the 21st century: Fifteen guiding principles for interpreting nature and culture (3.ª ed.). Sagamore.',
  'Beck, L., Cable, T., y Knudson, D. M. (2018). Interpreting cultural and natural heritage for a diverse world. Sagamore.',
  'Design Thinking Bootleg (s/f). Hasso Plattner Institute of Design, Stanford University (d.school).',
  'Ham, S. H. (2013). Interpretation: Making a difference on purpose. Fulcrum.',
  'Morales Miranda, J. (2001). Guía práctica para la interpretación del patrimonio: El arte de acercar el legado natural y cultural al público visitante (2.ª ed.). Junta de Andalucía, Consejería de Cultura.',
  'National Park Service. (1998). Planning for interpretation and visitor experience. Harpers Ferry Center, Division of Interpretive Planning.',
  'Oxman, N. (2015). Design at the intersection of technology and biology [Video de TED]. TED Conferences.',
  'Oxman, N. (2016). El ciclo de Krebs de la creatividad. Journal of Design and Science, 1(1). https://doi.org/10.7551/mitpress/10612.001.0001',
  'Oxman, N., Laucks, J., Kayser, M., Duro-Royo, J., y Gonzales-Uribe, C. (2014). Silk Pavilion: A case study in fiber-based digital fabrication. En F. Gramazio, M. Kohler y S. Langenberg (Eds.), FABRICATE Conference Proceedings (pp. 248–255). ta Verla.',
  'Parks Canada / Subsecretaría de Turismo de Chile. (2017). Guía para la experiencia del visitante: Metodología de evaluación en áreas protegidas.',
  'Pine, B. J. y Gilmore, J. H. (1999). The experience economy. Harvard Business School Press.',
  'Plattner, H., Meinel, C., y Leifer, L. (Eds.). (2011). Design thinking: Understand – Improve – Apply. Springer.',
  'Tilden, F. (1957). Interpreting our heritage (reimpresión 2006, trad. al español). University of North Carolina Press.',
];

const REPOSITORIO: Array<{
  autor: string;
  rol: string;
  color: string;
  icon: React.ComponentType<{ className?: string }>;
  desc: string;
  textos: Array<{ titulo: string; anio: string; enlace?: string; etiqueta: string; libre: boolean }>;
}> = [
  {
    autor: 'Edgar Morin',
    rol: 'Pensamiento complejo',
    color: 'bg-[#B04E2A]',
    icon: Dna,
    desc: 'Enseña a pensar la realidad como red de relaciones en lugar de partes aisladas: el visitante, el recurso y el relato son un sistema vivo, no tres archivos.',
    textos: [
      {
        titulo: 'Los siete saberes necesarios para la educación del futuro',
        anio: 'UNESCO · 1999',
        enlace: 'https://www.ideassonline.org/public/pdf/LosSieteSaberesNecesariosParaLaEdudelFuturo.pdf',
        etiqueta: 'PDF · descarga directa (UNESCO)',
        libre: true,
      },
      {
        titulo: 'Los siete saberes necesarios para la educación del futuro',
        anio: 'UNESCO · espejo (UV México)',
        enlace: 'https://www.uv.mx/dgdaie/files/2012/11/CPP-DC-Morin-Los-siete-saberes-necesarios.pdf',
        etiqueta: 'PDF · descarga directa',
        libre: true,
      },
    ],
  },
  {
    autor: 'Humberto Maturana',
    rol: 'Biología del conocer',
    color: 'bg-[#2E4E37]',
    icon: Brain,
    desc: 'Explica que el lenguaje y las emociones construyen el mundo compartido: conocer es convivir. Substituir el paradigma del control por la biología del amor y la escucha.',
    textos: [
      {
        titulo: 'Emociones y lenguaje en educación y política',
        anio: 'Dolmen Ediciones · 1990',
        enlace:
          'https://des-juj.infd.edu.ar/sitio/upload/Maturana_Romesin_H_-_Emociones_Y_Lenguaje_En_Educacion_Y_Politica.pdf',
        etiqueta: 'PDF · edición académica',
        libre: true,
      },
    ],
  },
  {
    autor: 'Yuval Noah Harari',
    rol: 'Gran historia de la humanidad',
    color: 'bg-[#3F6B4A]',
    icon: Globe,
    desc: 'Pone al homo sapiens dentro de la gran historia: ficciones compartidas, tecnología y sentido. Contexto imprescindible para entender qué busca hoy un visitante.',
    textos: [
      {
        titulo: 'Sapiens: De animales a dioses',
        anio: 'Debate · 2014',
        enlace: 'https://www.ynharari.com/es/',
        etiqueta: 'Libro con derechos · sitio oficial',
        libre: false,
      },
      {
        titulo: '21 lecciones para el siglo XXI',
        anio: 'Debate · 2018',
        enlace: 'https://www.ynharari.com/es/',
        etiqueta: 'Libro con derechos · sitio oficial',
        libre: false,
      },
    ],
  },
];

const EXP_CHILE: Array<{
  src: string;
  file: string;
  titulo: string;
  plano: string;
  principe: string;
  caption: string;
  icon: React.ComponentType<{ className?: string }>;
  principios: string[];
  tourId: string;
}> = [
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Ramal_talca_constituci%C3%B3n_06.jpg',
    file: 'File:Ramal talca constitución 06.jpg',
    titulo: 'Tren del vino (EFE) · Ramal Talca-Constitución',
    plano: 'EX-1',
    principe: 'Escapismo',
    icon: TrainFront,
    caption:
      'Los ramales patrimoniales se reinventan como experiencia: viajar lento por el Maule degustando vinos convierte el traslado en el destino.',
    principios: [
      'Escapismo (Pine y Gilmore, 1999): el pasajero se sumerge en un mundo de paisaje, historia y sabor.',
      'Relevancia personal (Tilden, 1957): conecta con la memoria ferroviaria y la viticultura del Maule.',
      'Entretenimiento activo: recorridos temáticos, cuentos del ramal, paradas que encadenan sentido.',
    ],
    tourId: 'tour-ramal-talca-constitucion-tren-del-vino',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Museo_Interactivo_Mirador-01.jpg',
    file: 'File:Museo Interactivo Mirador-01.jpg',
    titulo: 'Museo Interactivo Mirador (MIM)',
    plano: 'EX-2',
    principe: 'Educación',
    icon: Building2,
    caption:
      'El MIM transformó la exhibición en interacción: cada sala y su parque convierten al visitante en protagonista del aprendizaje.',
    principios: [
      'Educación experiencial: aprender tocando, experimentando y preguntando (Dewey, 1938).',
      'Diseño universal: museo y parque abiertos, familiares y multigeneracionales.',
      'Escapismo y juego: la curiosidad se vuelve el hilo conductor del recorrido.',
    ],
    tourId: 'tour-museo-interactivo-mirador',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Parque_Nacional_Chilo%C3%A9_-_camino_de_madera.jpg',
    file: 'File:Parque Nacional Chiloé - camino de madera.jpg',
    titulo: 'Senderos interpretativos (pasarelas de turbera)',
    plano: 'EX-3',
    principe: 'Estética',
    icon: Footprints,
    caption:
      'Los senderos de CONAF en humedales chilenos enseñan a pisar suave: pasarelas que llevan al visitante adentro del paisaje sin dañarlo.',
    principios: [
      'Estética in situ (Pine y Gilmore, 1999): el recurso se revela a la vista del propio recurso.',
      'Interpretación in situ (Tilden, 1957): señalética que provoca, no que abruma.',
      'Sustentabilidad: baja intervención y capacidad de carga cuidada del sitio frágil.',
    ],
    tourId: 'tour-parque-nacional-chiloe-turberas',
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Rio_Clarillo.jpg/1280px-Rio_Clarillo.jpg',
    file: 'File:Rio Clarillo.jpg',
    titulo: 'Baños de naturaleza en Río Clarillo',
    plano: 'EX-4',
    principe: 'Escapismo',
    icon: Droplets,
    caption:
      'El bosque esclerófilo y las piscinas del río Clarillo ofrecen el "tiempo otro" del agua y el bosque: rituales de bienestar a minutos de Santiago.',
    principios: [
      'Escapismo inmersivo: el refugio selvático del río aísla del cotidiano urbano.',
      'Ritual de bienestar: el recorrido del sendero ordena la visita en estaciones de silencio y frescor.',
      'Placer sensorial: el baño de bosque conecta el cuerpo con el territorio mediterráneo.',
    ],
    tourId: 'tour-parque-nacional-rio-clarillo',
  },
];

const SummaryNote = () => (
  <p className="mt-5 text-sm text-slate-700 leading-relaxed text-justify max-w-4xl border-l-4 border-[#B04E2A] pl-4">
    Cuatro experiencias chilenas de vanguardia —{' '}
    <strong>un tren del vino, un museo interactivo, un sendero de humedal y un baño de naturaleza en el río Clarillo</strong>{' '}
    — que ya aplican los principios de la economía de la experiencia (Pine y Gilmore, 1999) y de la
    interpretación patrimonial (Tilden, 1957): estética, escapismo, educación y entretenimiento
    aplicados al turismo, al viaje y al visitante. Son el referente para el Valle y Cajón del Maipo.
  </p>
);

interface MethodologyVideo {
  clave: string;
  videoIdOrUrl: string;
  titulo: string;
  subtitulo: string;
}

/* Videos que ilustran cada metodología de diseño de experiencias.
   Suma nuevas entradas para incorporar más videos. */
const VIDEOS_METODOLOGIAS: MethodologyVideo[] = [
  {
    clave: 'design-thinking',
    videoIdOrUrl: 'slHP58WCXbc',
    titulo: 'Design Thinking: cinco modos para diseñar con el usuario',
    subtitulo: 'Hasso Plattner Institute of Design (d.school) · Stanford',
  },
  {
    clave: 'neri-oxman',
    videoIdOrUrl: 'QTWbAYYaxso',
    titulo: 'Neri Oxman: ecología material',
    subtitulo: 'MIT Media Lab · Mediated Matter',
  },
  {
    clave: 'arquitectura-experiencia',
    videoIdOrUrl: 'hjbfuZC2b88',
    titulo: 'La arquitectura de la experiencia',
    subtitulo: 'Proporción, ritmo y contrapunto · Lámina N.º 05 (φ 1,618)',
  },
  {
    clave: 'vangelis-musica',
    videoIdOrUrl: '24LIl1bW3ho',
    titulo: 'Vangelis: la música como experiencia',
    subtitulo: 'Un artista habla de lo que la música provoca',
  },
];

export const DisenoExperienciasPage: React.FC<DisenoExperienciasPageProps> = ({ onBack, onOpenTour }) => {
  const [activo, setActivo] = useState(0);
  // Videos emergentes que ilustran cada metodología de diseño de experiencias
  const [videoAbierto, setVideoAbierto] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#F6F1E5] text-slate-900 pb-20 font-sans">
      {/* ===== HERO BIO ===== */}
      <section className="relative bg-gradient-to-br from-[#0E2018] via-[#14281C] to-[#1D3626] text-white overflow-hidden py-14 sm:py-20 px-4 sm:px-6 border-b border-[#2A4533]">
        <BranchPattern className="absolute inset-0 w-full h-full opacity-25" />
        <GoldenSpiralSVG className="absolute -left-14 -bottom-24 w-96 h-96 opacity-[0.14] text-[#E8A58B]" />
        <FlowerOfLifeSVG className="absolute right-0 top-0 w-80 h-80 opacity-[0.08]" />
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-[#B04E2A]/25 blur-3xl" />
        <div className="absolute -left-20 bottom-0 w-72 h-72 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative max-w-5xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#E8A58B] border border-[#B04E2A]/40 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              <Sparkles className="w-4 h-4" />
              Toolbox de interpretación · El Viaje Por Chile
            </span>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 transition-all"
            >
              <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              Volver a la plataforma
            </button>
          </div>

          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B04E2A]/90 text-white text-[10px] font-extrabold uppercase tracking-widest">
            <Dna className="w-3.5 h-3.5" />
            Diseño bio-inspirado
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight font-['Cormorant_Garamond',Georgia,serif]">
            Diseño de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A58B] via-[#D97A46] to-[#FBBF24]">
              experiencias
            </span>
          </h1>
          <p className="text-sm sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            Del design thinking de Stanford a la ecología material de Neri Oxman en el MIT:
            metodologías de punta para diseñar experiencias que —como la naturaleza— no separan lo
            físico de lo virtual, y que la interpretación del patrimonio reconoce como{' '}
            <strong className="text-white">medios interpretativos</strong> en evolución constante:
            mapas turísticos y guías para una infinidad de temas, gustos, inquietudes y aficiones.
          </p>
        </div>
      </section>

      {/* ===== INTRO: PRINCIPIOS DEL DISEÑO DE EXPERIENCIAS ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md">
            <Milestone className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Dónde empieza todo</p>
            <h2 className="text-2xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              Principios del diseño de experiencias
            </h2>
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="bg-white border border-[#E4D8BF] rounded-2xl p-6 space-y-4">
            <div className="flex items-start gap-3">
              <span className="w-10 h-10 rounded-xl bg-[#B04E2A] text-white grid place-items-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-extrabold text-[#14281C]">La experiencia es el producto</h3>
                <p className="text-sm text-slate-700 leading-relaxed text-justify">
                  Pine y Gilmore (1999) describieron la <em>economía de la experiencia</em>: cuando las
                  materias primas, los bienes y los servicios se vuelven comoditizados, lo que la gente
                  paga con gusto es el <strong>recuerdo</strong>. Una visita al Cajón del Maipo no se
                  compra "por kilómetro de sendero"; se compra como momento memorable que conecta a la
                  persona con el territorio. Los cuatro reinos de la experiencia son{' '}
                  <strong>entretenimiento, educación, escapismo y estética</strong>.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {['Entretenimiento', 'Educación', 'Escapismo', 'Estética'].map((r, i) => (
                <div
                  key={r}
                  className={`rounded-xl px-3 py-2 text-xs font-bold text-white ${['bg-[#B04E2A]', 'bg-[#D97706]', 'bg-[#3F6B4A]', 'bg-[#14281C]'][i]}`}
                >
                  {r}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-[#E4D8BF] rounded-2xl p-6 space-y-4">
            <div className="flex items-start gap-3">
              <span className="w-10 h-10 rounded-xl bg-[#2E4E37] text-white grid place-items-center shrink-0">
                <Quote className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-extrabold text-[#14281C]">La interpretación ya era diseño de experiencias</h3>
                <p className="text-sm text-slate-700 leading-relaxed text-justify">
                  Para Tilden (1957), la interpretación revela significados{" "}
                  <em>"mediante el uso de objetos originales, experiencias de primera mano y medios
                    ilustrativos"</em>. Beck y Cable (2011) añaden: si la interpretación no conecta lo
                  que se muestra con algo de la personalidad o experiencia del visitante, es estéril.
                  Eso es, ni más ni menos, <strong>diseño centrado en el visitante</strong> — medio siglo
                  antes de que Stanford lo sistematizara.
                </p>
              </div>
            </div>
            <div className="text-xs text-slate-600 leading-relaxed bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl p-4">
              <p className="font-extrabold text-[#B04E2A] mb-1">Las 4 E de la experiencia & la interpretación</p>
              <p>
                Entretenimiento + Educación + Escapismo + Estética se mapean directamente con los
                principios interpretativos: provocar, relacionar, revelar, dirigirse al todo y lograr
                unidad de mensaje (Beck & Cable, 2011).
              </p>
            </div>
          </div>
        </div>

        {/* Puente conceptual */}
        <div className="mt-6 bg-[#14281C] text-white rounded-2xl p-6 sm:p-8 border border-[#2A4533] overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8A58B_1.4px,transparent_1.4px)] [background-size:22px_22px]" />
          <div className="relative space-y-4">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8A58B]">Fórmula del intérprete</p>
            <p className="text-lg sm:text-xl font-extrabold font-['Cormorant_Garamond',Georgia,serif] leading-snug">
              (Conocimiento del Destinatario + Conocimiento del Recurso) × Técnica Adecuada ={' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A58B] via-[#D97A46] to-[#FBBF24]">
                Oportunidad Interpretativa
              </span>
            </p>
            <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
              El diseño de experiencias se convierte entonces en el <strong>método</strong> para
              operacionalizar esta fórmula: los principios y metodologías que siguen (del design
              thinking al biomimetismo) son técnicas adecuadas que multiplican el valor de lo que
              sabemos del recurso y del visitante.
            </p>
          </div>
        </div>
      </section>

      {/* ===== METODOLOGÍAS DE STANFORD ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#B04E2A] to-[#D97706] text-white grid place-items-center shadow-md">
            <Feather className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Hasso Plattner Institute of Design</p>
            <h2 className="text-2xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              Metodologías de Stanford (d.school)
            </h2>
          </div>
        </div>

        <div className="mt-6 grid lg:grid-cols-5 gap-4">
          <div className="lg:col-span-2 bg-[#14281C] text-white rounded-2xl p-6 border border-[#2A4533] overflow-hidden relative">
            <DesignThinkingWheel />
            <p className="text-xs text-slate-300 leading-relaxed mt-4">
              El design thinking es un proceso <strong>centrado en el ser humano</strong>: cinco modos
              iterativos (Empatizar, Definir, Idear, Prototipar y Probar) que privilegian{' '}
              <strong>sesgo a la acción</strong> — aprender haciendo— y la creatividad con empatía
              profunda por el usuario real.
            </p>
            <div className="mt-4">
              <VideoTrigger
                onClick={() => setVideoAbierto('design-thinking')}
                label="Ver el design thinking en acción"
              />
            </div>
          </div>
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4 content-start">
            {D_SCHOOL_MODES.map((m, i) => {
              const Icon = m.icon;
              return (
                <div key={m.modo} className="bg-white border border-[#E4D8BF] rounded-2xl p-5 space-y-2.5">
                  <div className="flex items-center gap-3">
                    <span className={`w-10 h-10 rounded-xl ${m.color} text-white grid place-items-center shadow-sm`}>
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">{i + 1}</p>
                      <h3 className="font-extrabold text-[#14281C] leading-none">{m.modo} <span className="text-slate-400 font-semibold">· {m.origen}</span></h3>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Aplicación a la interpretación */}
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {[
            {
              t: 'Tema interpretativo',
              d: 'Del "Definir" nace el tema: la idea central que organiza todo el relato de la experiencia (Ham, 2013).',
            },
            {
              t: 'Perfil del visitante',
              d: 'El "Empatizar" es el hermano metodológico del análisis del usuario/destinatario y las encuestas de perfil.',
            },
            {
              t: 'Medios y soportes',
              d: 'El "Prototipar" y "Probar" testean señales, mapas y guiones con los visitantes antes de producirlos.',
            },
          ].map((b) => (
            <div key={b.t} className="bg-[#F6F1E5] border border-[#E4D8BF] rounded-2xl p-5">
              <p className="text-sm font-extrabold text-[#14281C] mb-1">{b.t}</p>
              <p className="text-xs text-slate-600 leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== MIT · NERI OXMAN ===== */}
      <section className="relative bg-gradient-to-br from-[#14281C] via-[#1D3626] to-[#0E2018] text-white overflow-hidden py-14 sm:py-20 px-4 sm:px-6 border-y border-[#2A4533]">
        <BranchPattern className="absolute inset-0 w-full h-full opacity-15" />
        <GoldenSpiralSVG className="absolute -right-20 top-6 w-80 h-80 opacity-[0.12] text-[#E8A58B]" />
        <FlowerOfLifeSVG className="absolute left-6 bottom-6 w-72 h-72 opacity-[0.07]" />
        <div className="relative max-w-7xl mx-auto space-y-10">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B04E2A]/90 text-white text-[10px] font-extrabold uppercase tracking-widest">
              <FlaskConical className="w-3.5 h-3.5" />
              MIT Media Lab · Mediated Matter
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-['Cormorant_Garamond',Georgia,serif] leading-tight">
              Neri Oxman: la{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A58B] via-[#D97A46] to-[#FBBF24]">
                ecología material
              </span>{' '}
              y experiencias que no están separadas del mundo físico
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed text-justify">
              Oxman, directora fundadora del grupo Mediated Matter del MIT, acuñó el término{' '}
              <strong className="text-white">Material Ecology</strong>: un campo donde{' '}
              <em>computation, fabricación y el propio material son dimensiones inseparables del
                diseño</em>. Sus proyectos —el Silk Pavilion (co-creado con 6.500 gusanos de seda) y
              Aguahoja (pabellones impresos en 3D con hojas, pieles de manzana y caparazones de
              camarón, programados para degradarse al final de su vida)— nacen y vuelven a la
              naturaleza. Para el diseño de experiencias, la lección es directa:{' '}
              <strong className="text-white">
                lo físico y lo virtual no son mundos separados
              </strong>
              : son un continuo que se adapta, como un organismo, al entorno y al visitante.
            </p>
            <div className="pt-1">
              <VideoTrigger
                onClick={() => setVideoAbierto('neri-oxman')}
                label="Ver a Neri Oxman explicar su metodología"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 border border-[#2A4533] shadow-xl">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A] mb-2">
                El ciclo de Krebs de la creatividad (2016)
              </p>
              <KrebsCycle />
              <p className="text-xs text-slate-600 leading-relaxed mt-3 text-center">
                Arte, ciencia, ingeniería y diseño como dominios sinérgicos: la salida de uno es la
                entrada del otro, generando "energía creativa" (CreATP). Es el esquema de la{' '}
                <strong>transdisciplina</strong>.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Dna,
                  t: '1 · Aprender de la biología',
                  ca: 'bg-[#B04E2A]',
                  d: 'Estudiar corteza de abedul, caparazones, seda y huesos para aplicar su sabiduría estructural y sistémica al diseño (Oxman; MoMA, 2020).',
                },
                {
                  icon: Leaf,
                  t: '2 · Co-crear con el entorno',
                  ca: 'bg-[#2E4E37]',
                  d: 'SilkWorm Pavilion: un andamiaje robótico, 6.500 organismos y humanos co-diseñan una cúpula con un solo hilo continuo.',
                },
                {
                  icon: FlaskConical,
                  t: '3 · Densidad variable',
                  ca: 'bg-[#D97706]',
                  d: 'Como la densidad de la seda según luz y calor, la experiencia se organiza en gradientes: una escala fina de intensidades para públicos distintos.',
                },
                {
                  icon: Compass,
                  t: '4 · Programar el ciclo de vida',
                  ca: 'bg-[#3F6B4A]',
                  d: 'Aguahoja se degrada en el agua al final de su vida. El diseño piensa también la salida: experiencias que no dejen huella negativa en el territorio.',
                },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.t} className="bg-white/95 text-slate-900 rounded-2xl p-5 space-y-2.5">
                    <span className={`w-10 h-10 rounded-xl ${c.ca} text-white grid place-items-center`}>
                      <Icon className="w-5 h-5" />
                    </span>
                    <p className="text-sm font-extrabold text-[#14281C]">{c.t}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{c.d}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
            <p className="text-sm leading-relaxed text-slate-100">
              <Quote className="w-4 h-4 inline -mt-1 mr-2 text-[#E8A58B]" />
              "Los sentidos del cuerpo son sus puertas de entrada a las emociones; envolver y estimular
              los sentidos ha estado siempre en el centro del buen diseño" — Neri Oxman. La
              interpretación patrimonial hace lo mismo con los medios: involucra, involucra e involucra.
            </p>
          </div>
        </div>
      </section>

      {/* ===== MEDIOS INTERPRETATIVOS ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#B04E2A] to-[#D97706] text-white grid place-items-center shadow-md">
            <Map className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Desde Tilden hasta hoy</p>
            <h2 className="text-2xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              Lo que la interpretación reconoce como medios
            </h2>
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {MEDIOS.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.grupo} className="bg-white border border-[#E4D8BF] rounded-2xl p-6 space-y-3">
                <span className={`w-11 h-11 rounded-2xl ${m.color} text-white grid place-items-center`}>
                  <Icon className="w-5 h-5" />
                </span>
                <h3 className="font-extrabold text-[#14281C]">{m.grupo}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{m.ejemplos}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 bg-white border border-[#E4D8BF] rounded-2xl p-6 sm:p-8">
          <h3 className="font-extrabold text-lg text-[#14281C] mb-3">
            De un solo mensaje a una infinidad de gustos y aficiones
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed text-justify">
            Los servicios de interpretación contemporáneos (Morales, 2001; NPS, 1998) entienden los
            medios como herramientas que <em>revelan</em> —no transmiten— significados. Hoy esos medios
            evolucionan hacia <strong>mapas turísticos</strong> y <strong>guías</strong> destinadas a
            visitantes con infinitos temas, gustos, inquietudes y aficiones: del senderista a la
            aficionada al vino, de la familia con niños al fotógrafo de aves. La planificación
            interpretativa moderna (Parks Canada, 2017) integra esos medios y los distintos perfiles en
            un sistema único: <strong>flexibilidad biológica</strong>, donde un solo territorio ofrece
            miles de experiencias posibles — como el girasol, que organiza cientos de semillas en un
            mismo patrón.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-bold">
            {['Senderismo', 'Enoturismo', 'Granjas educativas', 'Gastronomía Km 0', 'Kayak / aventura', 'Avistamiento de aves', 'Fotografía', 'Patrimonio industrial', 'Familia con niños', 'Turismo de proximidad'].map((t) => (
              <span key={t} className="px-3 py-1 rounded-full bg-[#F6F1E5] border border-[#E4D8BF] text-[#14281C]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CRITERIO CIENTÍFICO, MULTI Y TRANSDISCIPLINA ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md">
            <Users className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Reglas del método</p>
            <h2 className="text-2xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              Ciencia, multidisciplina y transdisciplina
            </h2>
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          <div className="bg-white border border-[#E4D8BF] rounded-2xl p-6 space-y-3">
            <span className="w-11 h-11 rounded-2xl bg-[#B04E2A] text-white grid place-items-center">
              <FlaskConical className="w-5 h-5" />
            </span>
            <h3 className="font-extrabold text-[#14281C]">Criterio basado en la ciencia</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Datos duros: encuestas, aforos, fenómenos hídricos y climáticos, biodiversidad
              registrada. El diseño de la experiencia parte de evidencia y se mide, como el
              biomimetismo que juzga cada innovación con la naturaleza como <em>medida</em>.
            </p>
          </div>
          <div className="bg-white border border-[#E4D8BF] rounded-2xl p-6 space-y-3">
            <span className="w-11 h-11 rounded-2xl bg-[#2E4E37] text-white grid place-items-center">
              <Users className="w-5 h-5" />
            </span>
            <h3 className="font-extrabold text-[#14281C]">Multidisciplina</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Ecólogos, historiadores, educadores, diseñadores, comunicadores y guardaparques
              suman saberes paralelos sobre el mismo territorio: cada disciplina aporta su lente
              sobre el recurso y el visitante.
            </p>
          </div>
          <div className="bg-white border border-[#E4D8BF] rounded-2xl p-6 space-y-3">
            <span className="w-11 h-11 rounded-2xl bg-[#D97706] text-white grid place-items-center">
              <Dna className="w-5 h-5" />
            </span>
            <h3 className="font-extrabold text-[#14281C]">Transdisciplina</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Más que sumar: disolver fronteras. Como en el ciclo de Krebs de la creatividad, la
              salida de una disciplina alimenta a la siguiente en un ciclo continuo de{' '}
              <em>design × science</em>, generando lo que Oxman llama energía creativa.
            </p>
          </div>
        </div>

        <div className="mt-6 bg-[#14281C] text-white rounded-2xl p-6 sm:p-8 border border-[#2A4533] overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8A58B_1.4px,transparent_1.4px)] [background-size:22px_22px]" />
          <div className="relative grid lg:grid-cols-2 gap-6 items-center">
            <BranchPattern className="w-full h-40 opacity-40 rounded-xl" />
            <div className="space-y-4">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8A58B]">
                Flexibilidad biológica
              </p>
              <h3 className="text-xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
                Diseñar como la naturaleza: modelo, medida y mentor
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed text-justify">
                Benyus (1997) propuso biomimetizar: usar la naturaleza como{' '}
                <strong>modelo</strong> (qué aprendemos), <strong>medida</strong> (qué juzga si es
                correcto) y <strong>mentor</strong> (qué abrimos a aprender). Aplicado a experiencias,
                equivale a construir sistemas interpretativos que se adaptan —como los organismos— a la
                estacionalidad, a los públicos y a las aficiones sin perder coherencia: un mismo
                territorio, infinitas experiencias, condiciones que propician la vida y la visita.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCIAS CHILENAS DE REFERENCIA ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="relative border-2 border-[#14281C] rounded-2xl overflow-hidden bg-[#FBF7EC] shadow-sm">
          <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#14281C_1.4px,transparent_1.4px)] [background-size:22px_22px]" />
          <GoldenSpiralSVG className="absolute bottom-4 right-4 w-56 h-56 opacity-[0.07] text-[#14281C] pointer-events-none" />
          <FlowerOfLifeSVG className="absolute -left-10 top-1/2 w-72 h-72 opacity-[0.05] text-[#B04E2A] pointer-events-none -translate-y-1/2" />
          <div className="absolute left-3 top-3 flex items-center gap-2 px-2.5 py-1 rounded-lg bg-white border border-[#14281C] font-mono text-[9px] font-extrabold uppercase tracking-widest text-[#14281C]">
            <Pencil className="w-3 h-3" /> Plano de paisajismo · E 1:1000
          </div>
          <div className="absolute right-3 top-3 px-2.5 py-1 rounded-lg bg-[#14281C] text-[#E8A58B] font-mono text-[9px] font-extrabold uppercase tracking-widest">
            Lámina N.º 04 · φ 1,618
          </div>

          <div className="relative p-6 sm:p-10 pt-14">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md">
                <Compass className="w-5 h-5" />
              </span>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Experiencias chilenas de referencia</p>
                <h2 className="text-2xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
                  Casos que ya diseñan la experiencia del visitante
                </h2>
              </div>
            </div>

            <SummaryNote />

            <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#14281C]">
              <Ruler className="w-4 h-4" />
              <span>Escala gráfica · cuadrícula áurea de Fibonacci</span>
            </div>
            <GoldenRuler className="mt-2 w-full max-w-2xl text-[#14281C]" />

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {EXP_CHILE.map((e, i) => (
                <figure
                  key={e.file}
                  className="group relative flex flex-col bg-white border border-[#E4D8BF] rounded-2xl overflow-hidden shadow-sm"
                >
                  <div className="relative h-44 overflow-hidden bg-[#1D3626]">
                    <img
                      src={e.src}
                      alt={e.titulo}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute left-[38.2%] top-0 bottom-0 w-px bg-white/50" />
                      <div className="absolute left-[61.8%] top-0 bottom-0 w-px bg-white/50" />
                      <div className="absolute top-[38.2%] left-0 right-0 h-px bg-white/50" />
                      <div className="absolute top-[61.8%] left-0 right-0 h-px bg-white/50" />
                    </div>
                    <span className="absolute left-3 top-3 px-2.5 py-1 rounded-full bg-white/90 text-[#14281C] text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-sm border border-[#14281C]/20">
                      {e.titulo}
                    </span>
                    <span className="absolute right-3 top-3 w-7 h-7 rounded-lg bg-[#14281C] text-[#E8A58B] font-mono text-[11px] font-extrabold grid place-items-center border border-[#E8A58B]/40">
                      {e.plano}
                    </span>
                    <span className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-[#14281C]/80 text-[#E8A58B] font-mono text-[9px] font-extrabold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      φ
                    </span>
                  </div>
                  <figcaption className="p-4 space-y-3 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-[#B04E2A]">
                      <e.icon className="w-4 h-4" />
                      <span className="rounded-md bg-[#B04E2A]/10 px-2 py-0.5 border border-[#B04E2A]/20">{e.principe}</span>
                    </div>
                    <h3 className="text-sm font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif] leading-snug">
                      {e.titulo}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify flex-1">{e.caption}</p>
                    <div className="rounded-xl border border-dashed border-[#B04E2A]/40 bg-[#F6F1E5] p-3 space-y-2">
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#14281C]">
                        Principios de la experiencia del visitante
                      </p>
                      <ul className="space-y-1.5">
                        {e.principios.map((p) => (
                          <li key={p} className="flex gap-1.5 items-start text-[11px] text-slate-700 leading-snug">
                            <span className="text-[#B04E2A] font-extrabold shrink-0">·</span>
                            <span className="pl-1 border-l border-[#E4D8BF]">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {onOpenTour && (
                      <button
                        type="button"
                        onClick={() => onOpenTour(e.tourId)}
                        className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[#14281C] text-[#E8A58B] text-[11px] font-extrabold uppercase tracking-widest border border-[#14281C] hover:bg-[#B04E2A] hover:border-[#B04E2A] transition-colors"
                      >
                        <Headphones className="w-3.5 h-3.5" />
                        Escuchar la audioguía
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                    <p className="text-[10px] font-mono text-slate-400">Wikimedia Commons · {e.file}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ARQUITECTURA DE LA EXPERIENCIA · FIBONACCI, GEOMETRÍA SAGRADA Y MÚSICA ANTIGUA ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <div className="relative border-2 border-[#14281C] rounded-2xl overflow-hidden bg-[#FBF7EC] shadow-sm">
          <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#14281C_1.4px,transparent_1.4px)] [background-size:22px_22px]" />
          <div className="absolute left-3 top-3 flex items-center gap-2 px-2.5 py-1 rounded-lg bg-white border border-[#14281C] font-mono text-[9px] font-extrabold uppercase tracking-widest text-[#14281C]">
            <Landmark className="w-3 h-3" /> Arquitectura de la experiencia
          </div>
          <div className="absolute right-3 top-3 px-2.5 py-1 rounded-lg bg-[#14281C] text-[#E8A58B] font-mono text-[9px] font-extrabold uppercase tracking-widest">
            Lámina N.º 05 · φ 1,618
          </div>

          <div className="relative p-6 sm:p-10 pt-14">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md">
                <Landmark className="w-5 h-5" />
              </span>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Proporción, ritmo y contrapunto</p>
                <h2 className="text-2xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
                  La arquitectura de la experiencia
                </h2>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-700 leading-relaxed text-justify max-w-4xl border-l-4 border-[#B04E2A] pl-4">
              <strong>La arquitectura es música congelada</strong> (Goethe), y la música, arquitectura
              que fluye. En esta lámina, la <strong>sucesión de Fibonacci</strong> y la{' '}
              <strong>geometría sagrada</strong> —la espiral áurea, la flor de la vida, la sección
              φ = 1,618— son el mismo andamiaje del que se sirve la arquitectura para ordenar espacios,
              y del que se sirve la <strong>música antigua y el Renacimiento</strong> —que Jordi Savall
              devolvió al mundo con Hesperion XXI— para construir{' '}
              <strong>la arquitectura del tiempo</strong>. Si la arquitectura distribuye la materia, la
              música distribuye el tiempo de la experiencia: lo fragmenta, lo ordena y le da forma, igual
              que un patio, una nave o un umbral ordenan el cuerpo del visitante. Por eso el nacimiento
              de la <strong>polifonía</strong> fue el primer intento de Occidente por envolver los
              sentidos en una sola experiencia envolvente: varias voces dejan de turnarse y se tejen en un
              mismo espacio-tiempo, y la música se vuelve <em>el verbo que se materializa en el eco de
              la vida</em>. La catedral, <strong>a la vez a escala humana y divina</strong>, articuló ese
              espacio con columnas, arcos y bóvedas: una morada del tiempo, habitada por quien la
              escucha.
            </p>

            <div className="mt-4">
              <VideoTrigger
                onClick={() => setVideoAbierto('arquitectura-experiencia')}
                label="Ver cómo se ordena la arquitectura de una experiencia"
              />
            </div>

            <div className="mt-8 grid lg:grid-cols-2 gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-[#E4D8BF] rounded-2xl p-5 space-y-3 flex flex-col">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Espiral de Fibonacci</p>
                  <GoldenSpiralSVG className="w-full text-[#B04E2A]" />
                  <p className="text-[11px] text-slate-600 leading-relaxed flex-1">
                    Cada cuarto de vuelta crece en la proporción áurea. La naturaleza la usa para
                    conchas, galaxias y girasoles; la arquitectura la usa para fachadas y plantas.
                    Una experiencia también necesita una escala: la del valor, la del asombro.
                  </p>
                </div>
                <div className="bg-white border border-[#E4D8BF] rounded-2xl p-5 space-y-3 flex flex-col">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Flor de la vida</p>
                  <FlowerOfLifeSVG className="w-full text-[#2E4E37]" />
                  <p className="text-[11px] text-slate-600 leading-relaxed flex-1">
                    Círculos que se superponen sin perder el centro: la <em>flor de la vida</em> es el
                    emblema de la geometría sagrada. En interpretación, es la metáfora de las{' '}
                    <strong>experiencias entramadas</strong>: medios que se tocan y se contienen,
                    revelando siempre el mismo centro —el territorio, el mensaje.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white border border-[#E4D8BF] rounded-2xl p-5 space-y-3">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Regla del armonista</p>
                  <GoldenRuler className="w-full text-[#14281C]" />
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    La sucesión 1, 1, 2, 3, 5, 8, 13… organiza la escala de una sala, de un plano o de un
                    recorrido. En diseño de experiencias equivale a <strong>gradar las intensidades</strong>:
                    qué se muestra primero, qué se deja para después, cuándo se abre el horizonte.
                  </p>
                </div>

                <div className="bg-[#14281C] text-white rounded-2xl p-5 sm:p-7 border border-[#2A4533] shadow-sm overflow-hidden relative">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8A58B_1.4px,transparent_1.4px)] [background-size:22px_22px]" />
                  <div className="relative space-y-3">
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8A58B] flex items-center gap-1.5">
                      <Music2 className="w-3.5 h-3.5" /> La música de esta arquitectura
                    </p>
                    <p className="text-sm sm:text-base font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
                      Jordi Savall y Hesperion XXI — la polifonía recuperada
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      La música antigua y el Renacimiento fueron los primeros intentos de Occidente
                      por crear una <strong className="text-white">experiencia envolvente para los
                      sentidos</strong>: al nacer la polifonía, varias voces dejan de cantar una tras
                      otra y se <strong className="text-white">entretejen en un mismo espacio-tiempo</strong>,
                      igual que los visitantes de una catedral. Savall lo devolvió con Hesperion XXI
                      (desde 1959). El resultado es una arquitectura sonora{' '}
                      <strong className="text-white">a escala humana y divina al mismo tiempo</strong>:
                      la misma lógica que ordena el espacio con columnas y arcos ordena el tiempo con
                      voces y gracia.
                    </p>
                    <p className="pt-1 text-[10px] font-mono text-slate-400">
                      Hesperion XXI · desde 1959 · la polifonía recuperada como experiencia sensible.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-[#E4D8BF] rounded-2xl p-5 space-y-3">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A] flex items-center gap-1.5">
                    <Music2 className="w-3.5 h-3.5" /> La experiencia de la música
                  </p>
                  <p className="text-sm font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
                    Un artista que habla de lo que la música provoca
                  </p>
                  <p className="text-[11px] text-slate-600 leading-relaxed">
                    Vangelis (1943–2022) hablaba de la música no como una estructura, sino como una{' '}
                    <strong>experiencia</strong>: qué ocurre en el cuerpo y en la memoria cuando un
                    sonido organiza el espacio alrededor de quien escucha. En{' '}
                    <strong>Blade Runner</strong> o <strong>Chariots of Fire</strong> cada tema arma un
                    lugar propio, y quien entra queda dentro de él. Es el ejemplo de que una experiencia
                    envolvente no exige más que un material bien elegido y una intención clara.
                  </p>
                  <div className="pt-1">
                    <VideoTrigger
                      onClick={() => setVideoAbierto('vangelis-musica')}
                      label="Ver a Vangelis hablar de la música"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t-2 border-dashed border-[#14281C]/20 pt-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#B04E2A] to-[#D97706] text-white grid place-items-center shadow-md shrink-0">
                  <Milestone className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">
                    El viaje como espiral áurea
                  </p>
                  <h3 className="text-lg font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
                    Los hitos del viaje del visitante
                  </h3>
                </div>
              </div>

              <p className="mt-3 text-sm text-slate-700 leading-relaxed text-justify max-w-4xl border-l-4 border-[#B04E2A] pl-4">
                Así como la espiral de Fibonacci ordena el espacio y la polifonía del Renacimiento
                construye la arquitectura del tiempo, el{' '}
                <strong>viaje del visitante</strong> se ordena en <strong>hitos</strong> que giran en
                espiral: cada vuelta crece en proporción áurea, y cada hito amplifica la intensidad del
                anterior. Un travel journey bien diseñado no es una línea recta — <strong>es una espiral
                que se expande</strong> desde la anticipación hasta el recuerdo. Los seis hitos del
                recorrido avanzan en la escala 1, 1, 2, 3, 5, 8… de Fibonacci:
              </p>

              <div className="mt-6 grid lg:grid-cols-5 gap-6 items-start">
                <div className="lg:col-span-2 bg-white border border-[#E4D8BF] rounded-2xl p-4">
                  <TravelJourneySpiral className="w-full text-[#B04E2A]" />
                  <p className="text-[10px] text-slate-500 text-center mt-2">
                    Cada hito (φ·1 a φ·8) se acomoda sobre un punto de la espiral: el radio crece φ≈1,618
                    veces por vuelta.
                  </p>
                </div>
                <div className="lg:col-span-3 grid sm:grid-cols-2 gap-3">
                  {HITOS.map((h) => (
                    <div key={h.n} className="bg-white border border-[#E4D8BF] rounded-2xl p-4 flex gap-3 items-start">
                      <span
                        className="w-9 h-9 rounded-full text-white grid place-items-center text-sm font-extrabold shrink-0 shadow-sm"
                        style={{ backgroundColor: h.color }}
                      >
                        {h.n}
                      </span>
                      <div className="min-w-0">
                        <p className="text-[11px] font-extrabold text-[#14281C] leading-tight">{h.titulo}</p>
                        <p className="text-[11px] text-slate-600 leading-snug mt-0.5">{h.frase}</p>
                        <span
                          className="inline-block mt-1.5 rounded-md px-1.5 py-0.5 font-mono text-[9px] font-extrabold"
                          style={{ backgroundColor: `${h.color}14`, color: h.color }}
                        >
                          escala φ·{h.fib}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CIERRE ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-4">
        <div className="bg-[#14281C] text-white rounded-3xl p-6 sm:p-10 border border-[#2A4533] shadow-lg overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8A58B_1.4px,transparent_1.4px)] [background-size:22px_22px]" />
          <div className="relative space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#B04E2A] to-[#D97706] grid place-items-center shadow-lg">
                <Compass className="w-5 h-5" />
              </span>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8A58B]">Síntesis</p>
                <h2 className="text-2xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
                  De Stanford a las dunas y los cerros isla
                </h2>
              </div>
            </div>

            <p className="text-sm text-slate-200 leading-relaxed max-w-4xl text-justify">
              Diseñar experiencias interpretativas de vanguardia es poner en marcha un ciclo: partir
              con empatía por el visitante (d.school, Stanford); organizar el relato con un tema claro
              (interpretación del patrimonio); concebir los medios como organismos flexibles que
              integran lo físico y lo virtual (ecología material de Neri Oxman, MIT); y juzgar cada
              decisión con la naturaleza como modelo, medida y mentor (biomimetismo). El resultado es
              una experiencia que —como el mangle, la seda o el girasol— se adapta, conecta y genera
              las condiciones para que la visita, y el territorio, florezcan.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={onBack}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#B04E2A] to-[#D97706] hover:from-[#9A3F1E] hover:to-[#B45309] text-white text-sm font-bold rounded-2xl shadow-lg shadow-[#B04E2A]/30 transition-all"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Volver a explorar rutas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== REPOSITORIO DE TEXTOS ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="relative border-2 border-[#14281C] rounded-2xl overflow-hidden bg-[#FBF7EC] shadow-sm">
          <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(#14281C_1.4px,transparent_1.4px)] [background-size:22px_22px]" />
          <div className="absolute left-3 top-3 flex items-center gap-2 px-2.5 py-1 rounded-lg bg-white border border-[#14281C] font-mono text-[9px] font-extrabold uppercase tracking-widest text-[#14281C]">
            <FileText className="w-3 h-3" /> Lámina N.º 06 · Biblioteca abierta
          </div>

          <div className="relative p-6 sm:p-10 pt-14">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#B04E2A] to-[#D97706] text-white grid place-items-center shadow-md">
                <BookOpen className="w-5 h-5" />
              </span>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Para ampliar el mundo interior</p>
                <h2 className="text-2xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
                  Repositorio de textos de la experiencia humana
                </h2>
              </div>
            </div>

            <p className="mt-4 text-sm text-slate-700 leading-relaxed text-justify max-w-4xl border-l-4 border-[#B04E2A] pl-4">
              Diseñar experiencias es diseñar <strong>mundos interiores</strong>. Por eso este repositorio
              reúne textos recomendados de tres pensadores que ampliaron el mundo de la experiencia
              humana: <strong>Edgar Morin</strong> (el pensamiento complejo),{' '}
              <strong>Yuval Harari</strong> (la gran historia de la humanidad) y{' '}
              <strong>Humberto Maturana</strong> (la biología del conocer y del amar). Los marcados como{' '}
              <strong>PDF</strong> se descargan directamente en su edición de libre consulta; los libros
              comerciales se enlazan a su fuente oficial para su consulta o préstamo en bibliotecas.
            </p>

            <div className="mt-8 grid md:grid-cols-3 gap-5">
              {REPOSITORIO.map((a) => {
                const Icon = a.icon;
                return (
                  <div key={a.autor} className="bg-white border border-[#E4D8BF] rounded-2xl p-6 space-y-4 flex flex-col shadow-sm">
                    <div className="flex items-center gap-3">
                      <span className={`w-11 h-11 rounded-2xl ${a.color} text-white grid place-items-center shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </span>
                      <div>
                        <h3 className="font-extrabold text-[#14281C] leading-none">{a.autor}</h3>
                        <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A] mt-1">
                          {a.rol}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed flex-1 text-justify">{a.desc}</p>
                    <ul className="space-y-2.5">
                      {a.textos.map((t) => (
                        <li key={t.titulo + t.anio} className="rounded-xl border border-dashed border-[#B04E2A]/40 bg-[#F6F1E5] p-3 space-y-2">
                          <p className="text-[11px] font-extrabold text-[#14281C] leading-snug">{t.titulo}</p>
                          <p className="text-[10px] font-mono text-slate-500">{t.anio}</p>
                          <a
                            href={t.enlace}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest rounded-lg px-2.5 py-1.5 transition-all ${
                              t.libre
                                ? 'bg-[#B04E2A] text-white hover:bg-[#9A3F1E]'
                                : 'bg-[#14281C] text-[#E8A58B] hover:bg-[#2E4E37]'
                            }`}
                          >
                            {t.libre ? <Download className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5" />}
                            {t.etiqueta}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <p className="mt-5 text-[10px] font-mono text-slate-500">
              Enlaces externos verificados con fecha de acceso • contenido respectivo a sus autores y
              editores • textos PDF en ediciones de libre consulta con fines educativos.
            </p>
          </div>
        </div>
      </section>

      {/* ===== BIBLIOGRAFÍA ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md">
            <LibraryBig className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Referencias</p>
            <h2 className="text-2xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              Bibliografía
            </h2>
          </div>
        </div>
        <div className="mt-5 bg-white border border-[#E4D8BF] rounded-2xl p-6">
          <ul className="space-y-2 text-xs text-slate-700 leading-relaxed">
            {BIBLIOGRAFIA.map((b, i) => (
              <li key={i} className="flex gap-2 items-start">
                <span className="text-[#B04E2A] font-extrabold shrink-0">{i + 1}.</span>
                <span className="pl-1 border-l-2 border-[#E4D8BF]">{b}</span>
              </li>
            ))}
          </ul>
          <p className="text-[11px] text-slate-500 mt-4">
            Imágenes: Wikimedia Commons (licencias libres; crédito por nombre de archivo en cada
            figura). El Viaje Por Chile · www.interpretaciondelpatrimonio.cl · Toolbox de
            interpretación del patrimonio — Diseño de experiencias.
          </p>
        </div>
      </section>

      {/* ===== VIDEOS EMERGENTES DE LAS METODOLOGÍAS =====
          Para sumar un video: agrega su entrada a VIDEOS_METODOLOGIAS y un
          VideoTrigger con setVideoAbierto('<clave>') junto al texto de la
          metodología correspondiente. */}
      {VIDEOS_METODOLOGIAS.filter((v) => v.clave === videoAbierto).map((v) => (
        <VideoPopup
          key={v.clave}
          videoIdOrUrl={v.videoIdOrUrl}
          title={v.titulo}
          subtitle={v.subtitulo}
          isOpen={videoAbierto === v.clave}
          onClose={() => setVideoAbierto(null)}
        />
      ))}
    </div>
  );
};