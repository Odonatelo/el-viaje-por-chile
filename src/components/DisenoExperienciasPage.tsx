import React, { useRef, useState } from 'react';
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
  Play,
  Pause,
  Volume2,
  Pencil,
} from 'lucide-react';

interface DisenoExperienciasPageProps {
  onBack: () => void;
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

const PALESTRINA_URL =
  'https://upload.wikimedia.org/wikipedia/commons/d/de/Palestrina_-_Vestiva_i_colli_-_Prima_parte.ogg';

const EXP_CHILE: Array<{
  src: string;
  file: string;
  titulo: string;
  plano: string;
  principe: string;
  caption: string;
  icon: React.ComponentType<{ className?: string }>;
  principios: string[];
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
  },
  {
    src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Termas_de_Chill%C3%A1n%2C_Chile.jpg/640px-Termas_de_Chill%C3%A1n%2C_Chile.jpg',
    file: 'File:Termas de Chillán, Chile.jpg',
    titulo: 'Parques termales de la Cordillera',
    plano: 'EX-4',
    principe: 'Escapismo',
    icon: Droplets,
    caption:
      'Los parques termales andinos ofrecen el "tiempo otro" del agua y la nieve: rituales de bienestar anclados en un paisaje de alta montaña.',
    principios: [
      'Escapismo inmersivo: el paisaje nevado y las aguas volcánicas aíslan del cotidiano.',
      'Ritual de bienestar: el circuito termal ordena la visita en estaciones de silencio y calor.',
      'Placer sensorial: el contraste frío-calor conecta el cuerpo con el territorio.',
    ],
  },
];

const SummaryNote = () => (
  <p className="mt-5 text-sm text-slate-700 leading-relaxed text-justify max-w-4xl border-l-4 border-[#B04E2A] pl-4">
    Cuatro experiencias chilenas de vanguardia —{' '}
    <strong>un tren del vino, un museo interactivo, un sendero de humedal y un parque termal</strong>{' '}
    — que ya aplican los principios de la economía de la experiencia (Pine y Gilmore, 1999) y de la
    interpretación patrimonial (Tilden, 1957): estética, escapismo, educación y entretenimiento
    aplicados al turismo, al viaje y al visitante. Son el referente para el Valle y Cajón del Maipo.
  </p>
);

export const DisenoExperienciasPage: React.FC<DisenoExperienciasPageProps> = ({ onBack }) => {
  const [activo, setActivo] = useState(0);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const toggleAudio = async () => {
    const a = audioRef.current;
    if (!a) return;
    try {
      if (playing) {
        a.pause();
        setPlaying(false);
      } else {
        await a.play();
        setPlaying(true);
      }
    } catch {
      setPlaying(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F1E5] text-slate-900 pb-20 font-sans">
      {/* ===== HERO BIO ===== */}
      <section className="relative bg-gradient-to-br from-[#0E2018] via-[#14281C] to-[#1D3626] text-white overflow-hidden py-14 sm:py-20 px-4 sm:px-6 border-b border-[#2A4533]">
        <BranchPattern className="absolute inset-0 w-full h-full opacity-25" />
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
          <div className="absolute left-3 top-3 flex items-center gap-2 px-2.5 py-1 rounded-lg bg-white border border-[#14281C] font-mono text-[9px] font-extrabold uppercase tracking-widest text-[#14281C]">
            <Pencil className="w-3 h-3" /> Plano de paisajismo · E 1:1000
          </div>
          <div className="absolute right-3 top-3 px-2.5 py-1 rounded-lg bg-[#14281C] text-[#E8A58B] font-mono text-[9px] font-extrabold uppercase tracking-widest">
            Lámina N.º 04
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
                    <span className="absolute left-3 top-3 px-2.5 py-1 rounded-full bg-white/90 text-[#14281C] text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-sm border border-[#14281C]/20">
                      {e.titulo}
                    </span>
                    <span className="absolute right-3 top-3 w-7 h-7 rounded-lg bg-[#14281C] text-[#E8A58B] font-mono text-[11px] font-extrabold grid place-items-center border border-[#E8A58B]/40">
                      {e.plano}
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
                    <p className="text-[10px] font-mono text-slate-400">Wikimedia Commons · {e.file}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== AMBIENTE SONORO: PALESTRINA ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-4">
        <div className="bg-[#14281C] text-white rounded-2xl p-5 sm:p-7 border border-[#2A4533] shadow-sm overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8A58B_1.4px,transparent_1.4px)] [background-size:22px_22px]" />
          <div className="relative flex flex-wrap items-center gap-4">
            <button
              onClick={toggleAudio}
              className="w-14 h-14 rounded-full bg-gradient-to-r from-[#B04E2A] to-[#D97706] hover:from-[#9A3F1E] hover:to-[#B45309] text-white grid place-items-center shadow-lg shadow-[#B04E2A]/30 transition-all cursor-pointer"
              aria-label={playing ? 'Pausar música de ambiente' : 'Reproducir música de ambiente'}
            >
              {playing ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
            </button>
            <div className="w-14 h-14 rounded-full border border-[#E8A58B]/40 text-[#E8A58B] grid place-items-center shrink-0">
              <Volume2 className="w-6 h-6 animate-pulse" style={{ animationDuration: playing ? '2s' : '0s' }} />
            </div>
            <div className="min-w-0 flex-1 space-y-1">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8A58B] flex items-center gap-1.5">
                <Music2 className="w-3.5 h-3.5" /> Música para ambientar el diseño
              </p>
              <p className="text-sm sm:text-base font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
                Giovanni Pierluigi da Palestrina — polifonía renacentista
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Palestrina (c. 1525–1594) compuso la polifonía que por siglos definió las catedrales:
                voces en contrapunto que se entretejen como los hilos de una red. Escuchar su música
                sitúa el diseño de experiencias en una escala humana y atemporal — igual que este
                valle, sus cerros isla y sus dunas.
              </p>
            </div>
            <audio
              ref={audioRef}
              src={PALESTRINA_URL}
              loop
              preload="none"
              className="hidden"
              onEnded={() => setPlaying(false)}
              onPause={() => setPlaying(false)}
              onPlay={() => setPlaying(true)}
            />
            <p className="w-full text-[10px] font-mono text-slate-400">
              Wikimedia Commons · dominio público · se descarga y reproduce al presionar ▶ · sin
              rastreo, el archivo se carga directo de Commons.
            </p>
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

      {/* ===== BIBLIOGRAFÍA ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md">
            <LibraryBig className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Referencias</p>
            <h2 className="text-2xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              Bibliografía (APA 7.ª edición)
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
    </div>
  );
};