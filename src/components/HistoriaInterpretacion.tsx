import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  useReducedMotion,
} from 'motion/react';
import {
  ArrowRight,
  History,
  Feather,
  BookOpen,
  Compass,
  Users,
  Accessibility,
  HeartHandshake,
  Cpu,
  Clock,
  Waypoints,
  Rocket,
  CircleCheckBig,
  Leaf,
  Flag,
  Quote,
  Magnet,
  MapPinned,
  AudioLines,
  GraduationCap,
  BadgeCheck,
  MapPin,
  ChevronDown,
  X,
  Expand,
  Sparkles,
  MousePointerClick,
} from 'lucide-react';

interface HistoriaInterpretacionProps {
  onBack: () => void;
}

const FUNDADORES = [
  {
    img: '/images/historia/john-muir.jpg',
    alt: 'Retrato de John Muir conservado en la Biblioteca del Congreso de EE. UU.',
    nombre: 'John Muir',
    anios: '1838 – 1914',
    rol: 'El naturalista que hizo hablar a los bosques',
    aporte: 'Poeta, botánico y explorador escocés-americano. Convirtió Yosemite en símbolo, fundó el Sierra Club (1892) y llevó a Theodore Roosevelt a acampar bajo las secuoyas en 1903. Sus escritos revelaron la naturaleza como experiencia y no solo como recurso: sembró la idea de que el visitante merece un encuentro, no una lección.',
    cita: '“La montaña llama y debo ir, y trabajaré mientras pueda. La naturaleza me elegirá como portavoz y me dará la fuerza para escribir lo que hay en sus entrañas.”',
  },
  {
    img: '/images/historia/enos-mills-cabana-longs-peak.png',
    alt: 'Enos Mills en la puerta de su cabaña en Longs Peak, Colorado',
    nombre: 'Enos Mills',
    anios: '1870 – 1922',
    rol: 'El padre del guiado de naturaleza',
    aporte: 'Guía estadounidense que profesionalizó el acompañamiento: creó guías de naturaleza formados, una escuela en las montañas de Colorado y “The Adventures of a Nature Guide” (1920). Demostró que el paisaje se interpreta caminando y narrando, y que el guía es un facilitador del asombro. Padre del Parque Nacional de Rocky Mountain (1915).',
    cita: '“Un guía de la naturaleza debería hacer que sus huéspedes sientan el gran mundo de la montaña como una experiencia personal e íntima.”',
  },
  {
    img: '/images/historia/freeman-tilden.jpg',
    alt: 'Fotografía de Freeman Tilden, conservada por el Servicio de Parques Nacionales de EE. UU.',
    nombre: 'Freeman Tilden',
    anios: '1883 – 1980',
    rol: 'El teórico que la convirtió en disciplina',
    aporte: 'Autor y ensayista contratado por el Servicio de Parques Nacionales para poner en palabras lo que los rangers ya hacían. En 1957 publicó “Interpreting Our Heritage”, el texto fundacional que definió la interpretación del patrimonio y sus seis principios. A partir de entonces dejó de ser un oficio espontáneo para convertirse en una disciplina con método.',
    cita: '“La interpretación busca revelar significados y relaciones a través del uso de los objetos originales, de la experiencia directa y de medios ilustrativos, en lugar de comunicar simplemente información fáctica.”',
  },
];

const CRONOLOGIA = [
  { anio: '1864', titulo: 'Yosemite Grant Act',
    texto: 'Abraham Lincoln firma la cesión del valle de Yosemite al estado de California “para uso público, mezquino y recreativo”. Es el germen legal de la idea de áreas naturales diseñadas para la experiencia del visitante.' },
  { anio: '1872', titulo: 'Yellowstone: el primer parque nacional del mundo',
    texto: 'El Congreso estadounidense crea Yellowstone, reservando para siempre un territorio “para el beneficio y disfrute del pueblo”. Nace la noción de destino turístico protegido con pleno derecho.' },
  { anio: '1869 – 1892', titulo: 'John Muir y la voz de Yosemite',
    texto: 'Muir recorre y escribe sobre Yosemite, difunde sus vivencias en revistas de masas y funda el Sierra Club (1892). Convierte el paisaje protegido en narrativa pública y en invitación a visitarlo conscientemente.' },
  { anio: '1889 – 1901', titulo: 'Enos Mills comienza a guiar en Colorado',
    texto: 'Millar instalado en Longs Peak, Mills inicia las caminatas guiadas por las montañas y desarrolla lo que llamará “guiado de naturaleza”: caminar, observar, contar y hacer sentir.' },
  { anio: '1903', titulo: 'Muir acampa con Roosevelt en Yosemite',
    texto: 'El campamento de trece días bajo las secuoyas convierte al presidente Roosevelt en conservacionista activo. Es el símbolo de que la experiencia directa del territorio cambia decisiones.' },
  { anio: '1906 / 1915', titulo: 'Antiquities Act y Rocky Mountain Nacional Park',
    texto: 'La Ley de Antigüedades (1906) permite a los presidentes proteger monumentos directamente; Mills lidera la campaña que crea el Parque Nacional de Rocky Mountain (1915), cuna de la escuela de guías.' },
  { anio: '1916', titulo: 'Nace el National Park Service',
    texto: 'La Organic Act crea el Servicio de Parques Nacionales bajo dirección de Stephen Mather y Horace Albright. Su mandato es “conservar el paisaje y proveer el disfrute del mismo”: conservación y experiencia entrelazadas.' },
  { anio: '1918 – 1920', titulo: 'Los primeros guías-naturalistas',
    texto: 'El SNS inicia los servicios de guiado naturalista en los parques (Yosemite), y Mills publica “The Adventures of a Nature Guide” (1920): el manual pionero del oficio de interpretar.' },
  { anio: '1930s', titulo: 'Museos, senderos y el boom de la infraestructura',
    texto: 'El Civilian Conservation Corps construye senderos, miradores y museos de sitio. La interpretación comienza a institucionalizarse con pantallas, paneles y primeros textos guiados para el visitante.' },
  { anio: '1957', titulo: 'Tilden publica “Interpreting Our Heritage”',
    texto: 'Freeman Tilden compila la práctica de los rangers en seis principios inmortales. La interpretación se formaliza como disciplina: arte de revelar, provocar y conectar el recurso con la vida del visitante.' },
  { anio: '1960s – 1990s', titulo: 'Institucionalización y profesionalización',
    texto: 'Nacen textos formativos (Grant Sharpe, “Interpreting the Environment” 1976, y Sam Ham, “Environmental Interpretation”), programas de formación y la National Association for Interpretation (1988). La interpretación se extiende de los parques a museos, zoos, sitios históricos y destinos turísticos.' },
  { anio: '1988 – 1992', titulo: 'La interpretación llega a Iberoamérica: Morales y la FAO',
    texto: 'La FAO organiza en Chile el Taller de Interpretación Ambiental en Áreas Silvestres Protegidas (1988) y Jorge Morales Miranda publica el “Manual para la interpretación ambiental en áreas silvestres protegidas” (FAO/PNUMA, Santiago de Chile, 1992). El método de Tilden comienza a hablarse en español, desde los parques de Sudamérica.' },
  { anio: '1992', titulo: 'Sam Ham sistematiza la interpretación temática',
    texto: 'El profesor de la Universidad de Idaho publica “Environmental Interpretation: A Practical Guide for People with Big Ideas and Small Budgets”, el manual de interpretación más difundido del mundo (traducido al español como “Interpretación Ambiental”). Introduce el modelo temático TORE y vuelve la disciplina una práctica profesional accesible para cualquier área protegida.' },
  { anio: '1998 – 2008', titulo: 'La escuela hispana: la Guía Práctica de Morales',
    texto: 'Jorge Morales publica la “Guía Práctica para la Interpretación del Patrimonio” (1998), texto de referencia en español para guías, señales y centros de interpretación; junto a Sam Ham firma “¿A qué interpretación nos referimos?” (2008). Queda sellado el puente anglo-hispano de la disciplina.' },
  { anio: '1999 – 2011', titulo: 'Beck & Cable amplían los principios',
    texto: 'Larry Beck y Ted Cable sistematizan el legado de Tilden en “Interpretation for the 21st Century” (1999) y “The Gifts of Interpretation” (2011): de 6 principios a 21, sumando audiencias, sentidos, historias, tecnología y conservación.' },
  { anio: '2016', titulo: 'Centenario del National Park Service',
    texto: 'La celebración internacional coloca a la interpretación en el centro de la visita pública: el parque no es solo un paisaje, es un relato bien diseñado para cada visitante.' },
  { anio: 'Hoy', titulo: 'La interpretación se digitaliza y globaliza',
    texto: 'Audioguías GPS, realidad aumentada, inteligencia artificial y co-creación con comunidades llevan la disciplina a cada rincón del planeta — incluida esta plataforma, que interpreta el patrimonio chileno con métodos nacidos hace más de un siglo.' },
];

const TILDEN_6 = [
  { n: 1, t: 'Relaciona con la experiencia personal',
    a: 'Toda interpretación que no relacione lo que se muestra o describe con algo dentro de la personalidad o la experiencia del visitante será estéril.' },
  { n: 2, t: 'Información es distinta de interpretación',
    a: 'La información no es interpretación: la interpretación es revelación basada en información. Son cosas distintas, aunque toda interpretación incluye información.' },
  { n: 3, t: 'La interpretación es un arte',
    a: 'Es un arte que combina muchas artes, sea el material científico, histórico o arquitectónico. Y todo arte es, en cierta medida, enseñable y aprendible.' },
  { n: 4, t: 'Provocar, no instruir',
    a: 'El objetivo principal de la interpretación no es la instrucción sino la provocación: despertar la curiosidad y el deseo de saber más.' },
  { n: 5, t: 'Presentar el todo, no la parte',
    a: 'Debe aspirar a presentar una totalidad antes que una parte, y apelar al hombre completo antes que a una sola facultad.' },
  { n: 6, t: 'Los niños necesitan un enfoque propio',
    a: 'La interpretación dirigida a los niños no debe ser una dilución de la de los adultos: requiere un enfoque fundamentalmente distinto, con programa separado si es necesario.' },
];

const BECK_CABLE_15 = [
  { n: 7, t: 'Conexión intelectual y emocional',
    a: 'Provocar una conexión intelectual y emocional con los significados del recurso, no quedarse en el dato.' },
  { n: 8, t: 'Foco en el significado',
    a: 'La información por sí sola no basta: la interpretación trabaja con el significado que ese recurso tiene para la vida de las personas.' },
  { n: 9, t: 'Base en el conocimiento',
    a: 'Debe apoyarse en investigación rigurosa y en una mirada multidisciplinaria, cuidando la exactitud de lo que se comunica.' },
  { n: 10, t: 'Pasión del intérprete',
    a: 'La pasión del intérprete por el recurso es el combustible que enciende la curiosidad del visitante.' },
  { n: 11, t: 'Variedad de técnicas y sentidos',
    a: 'Usar múltiples técnicas y lenguajes -visual, sonoro, kinestésico, olfativo- para explorar significados de formas distintas.' },
  { n: 12, t: 'Toda la audiencia',
    a: 'Considerar la diversidad de edades, culturas, idiomas y estilos de aprendizaje; nadie sobra en la experiencia.' },
  { n: 13, t: 'Visitantes que vuelven',
    a: 'El visitante repetido merece otra experiencia: más profunda, más personalizada, que premie la curiosidad sostenida.' },
  { n: 14, t: 'La fuerza de la historia',
    a: 'Contar buenas historias: narrativas con personaje, conflicto y emoción que transportan al oyente al interior del relato.' },
  { n: 15, t: 'El recurso habla por sí mismo',
    a: 'Cuidar el objeto o el paisaje para que sea el protagonista: la interpretación lo enmarca, no lo eclipsa.' },
  { n: 16, t: 'Creatividad y artes',
    a: 'Incorporar creatividad, humor y artes escénicas como herramientas legítimas del oficio de interpretar.' },
  { n: 17, t: 'Vida cotidiana',
    a: 'Conectar el recurso con la experiencia cotidiana del visitante para que el descubrimiento trascienda el viaje.' },
  { n: 18, t: 'Exploración y co-creación',
    a: 'Dejar espacio al descubrimiento propio: el visitante co-construye el significado junto al intérprete.' },
  { n: 19, t: 'Inclusión y accesibilidad',
    a: 'Diseñar experiencias accesibles e inclusivas: la emoción del patrimonio debe llegar a todas las personas.' },
  { n: 20, t: 'Conservación en acción',
    a: 'Orientar la interpretación al cuidado: el visitante que ama lo que entiende, protege lo que ama.' },
  { n: 21, t: 'Mejora continua',
    a: 'La interpretación se aprende, se evalúa y se mejora en círculo: cada feedback del visitante afina la próxima experiencia.' },
];

const FIGURAS_IBEROAMERICA = [
  {
    icon: <MapPin className="w-5 h-5" />,
    ambito: 'España · Iberoamérica',
    nombre: 'Jorge Morales Miranda',
    rol: 'El puente hacia el mundo hispano',
    anos: 'Activo desde 1988',
    aporte: 'Consultor y docente con base en Algeciras (Cádiz), es la gran referencia en lengua española de la interpretación del patrimonio. Formó a generaciones de intérpretes en España y América Latina, y aterrizó a Tilden al terreno práctico del guiado, las señales, los senderos y los centros de interpretación.',
    obras: [
      'Manual para la Interpretación Ambiental en Áreas Silvestres Protegidas (FAO/PNUMA, 1992 — Santiago de Chile)',
      'Guía Práctica para la Interpretación del Patrimonio (1998/2001, Junta de Andalucía)',
      '“¿A qué interpretación nos referimos?”, junto a S. Ham (Boletín de Interpretación, 2008)',
    ],
    dato: 'La FAO organizó en Chile (1988) el taller regional de interpretación en áreas silvestres protegidas; la sistematización de Morales (1992) sigue siendo el texto base en español para parques y reservas de toda Sudamérica.',
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    ambito: 'Estados Unidos · El mundo',
    nombre: 'Dr. Sam H. Ham',
    rol: 'El sistematizador de la interpretación temática',
    anos: 'Activo desde 1992',
    aporte: 'Profesor emérito de la Universidad de Idaho (psicología de la comunicación). Publicó “Environmental Interpretation”, el manual de interpretación más difundido del planeta, y desarrolló el modelo TORE de comunicación temática —temática, organizada, relevante y amena— que hoy aplican áreas protegidas, museos, zoológicos y guías en más de 60 países.',
    obras: [
      'Environmental Interpretation: A Practical Guide for People with Big Ideas and Small Budgets (1992)',
      'Interpretation: Making a Difference on Purpose (2013), difundido en 12 idiomas',
      'Más de 400 publicaciones sobre interpretación y comunicación de la sostenibilidad',
    ],
    dato: 'Becario Fulbright y Fellow de la National Association for Interpretation; recibió el premio William C. Everhart (Clemson University) por su aporte mundial a la interpretación del patrimonio.',
  },
];

const TENDENCIAS = [
  { icon: <HeartHandshake className="w-5 h-5" />, t: 'Economía de la experiencia',
    a: 'Pine & Gilmore formalizaron en 1999 la “economía de la experiencia”; la interpretación llevaba décadas diseñando momentos memorables por un valor que no es solo entrada a un paisaje, sino acceso a un significado. La disciplina es el laboratorio histórico de lo que hoy se vende como “experiencia memorable”.' },
  { icon: <Compass className="w-5 h-5" />, t: 'Storytelling y marca destino',
    a: 'Las narrativas de destino copian hoy lo que los intérpretes sistematizaron desde los años 60: el territorio como narrador, los relatos locales como aire específico de cada lugar y la coherencia entre lo que se promete y lo que se cuenta.' },
  { icon: <Waypoints className="w-5 h-5" />, t: 'Diseño centrado en la persona',
    a: 'El design thinking descubre lo que Tilden ya sabía: el visitante trae su historia. La interpretación es service design adelantado: segmenta audiencias, define momentos, prototipa y evalúa el impacto de cada parada.' },
  { icon: <AudioLines className="w-5 h-5" />, t: 'Multisensorialidad e inmersión',
    a: 'Sight, sound, touch, aroma: Beck & Cable pidieron “variedad de técnicas y sentidos” antes de que la inmersión se llamara así. Las experiencias inmersivas actuales revalidan el método interpretativo con tecnología.' },
  { icon: <Accessibility className="w-5 h-5" />, t: 'Accesibilidad e inclusión',
    a: 'La reinterpretación de la experiencia para audiencias diversas -Ley 20.422 en Chile- encuentra en la interpretación su metodología: no se trata de adaptar la información sino de rediseñar la vivencia para cada persona.' },
  { icon: <Leaf className="w-5 h-5" />, t: 'Sostenibilidad, SBAP y conservación',
    a: 'La interpretación orientada a la conservación (principio 20) es el puente con el turismo regenerativo y la nueva institucionalidad del SBAP en Chile: el visitante informado y conmovido reduce su impacto y se vuelve defensor del área protegida.' },
  { icon: <Cpu className="w-5 h-5" />, t: 'Digital, IA y experiencias híbridas',
    a: 'Audioguías GPS, realidad aumentada, chatbots y generación de narrativa asistida por IA extienden el alcance de la interpretación sin traicionarla: la tecnología es un medio ilustrativo más, como ya previó el propio Tilden.' },
  { icon: <Users className="w-5 h-5" />, t: 'Co-creación con comunidades',
    a: 'ECMPO, turismo de base comunitaria y pueblos originarios: la interpretación de hoy es colaborativa. El conocimiento local se convierte en autoría, y el visitante transita de observador a invitado del territorio.' },
];

const CINTA = [
  '1864 · Yosemite Grant Act',
  '1872 · Yellowstone, primer parque nacional',
  '1892 · Nace el Sierra Club',
  '1903 · Muir acampa con Roosevelt',
  '1916 · National Park Service',
  '1920 · Guías naturalistas',
  '1957 · Tilden publica su método',
  '1988 · FAO, taller en Chile',
  '1992 · Morales y Ham',
  'Hoy · Audioguías y mapas ilustrados',
];

const ESTADISTICAS = [
  { v: 3, suf: '', l: 'Figuras fundadoras' },
  { v: 17, suf: '', l: 'Jalones de la cronología' },
  { v: 160, suf: '+', l: 'Años de método' },
  { v: 21, suf: '', l: 'Principios (Tilden + 15)' },
];

const SECCIONES = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'nacimiento', label: 'Nacimiento' },
  { id: 'cronologia', label: 'Cronología' },
  { id: 'iberoamerica', label: 'Morales & Ham' },
  { id: 'principios', label: 'Principios' },
  { id: 'tourmaps', label: 'Chile ilustrado' },
  { id: 'cierre', label: 'Cierre' },
];

const TOURMAPS_GALERIA = [
  { src: '/images/historia/tourmaps/mapa-puerto-montt.jpg',
    alt: 'Mapa ilustrado e interpretativo de Puerto Montt, de Tourmaps',
    t: 'Puerto Montt',
    d: 'Mar, volcanes y patrimonio en la capital de Los Lagos: un mapa-ilustrado que invita a caminar con asombro por la ciudad y su fiordo.',
    tag: 'Mapa ilustrado' },
  { src: '/images/historia/tourmaps/mapa-rio-san-pedro.jpg',
    alt: 'Mapa ilustrado e interpretativo de la Ruta del Río San Pedro, de Tourmaps',
    t: 'Ruta del Río San Pedro',
    d: '“Los Lagos Invita”: la cuenca narrada con hitos, relieves y señales — interpretación territorial hecha diseño.',
    tag: 'Mapa ilustrado' },
  { src: '/images/historia/tourmaps/mapa-maullin.jpg',
    alt: 'Mapa ilustrado e interpretativo de Maullín, de Tourmaps',
    t: 'Maullín · Naturaleza y entretención',
    d: 'Un estuario, su gente y sus historias convertidos en material de interpretación: el patrimonio como ribete del mapa.',
    tag: 'Mapa ilustrado' },
  { src: '/images/historia/tourmaps/mapa-valdivia.jpg',
    alt: 'Mapa ilustrado e interpretativo de Valdivia, de Tourmaps',
    t: 'Valdivia · la ciudad de los ríos',
    d: 'Ríos, fortificaciones españolas y bosque valdiviano en clave interpretativa: la historia como invitación a recorrer.',
    tag: 'Mapa ilustrado' },
  { src: '/images/historia/tourmaps/mapa-mural.jpg',
    alt: 'Mapa mural regional y comunal de la Oficina de Turismo de Puerto Montt, realizado por Tourmaps',
    t: 'Mapa mural en la oficina de turismo',
    d: 'Un mapa regional y comunal instalado como pieza de interpretación a gran escala en la Oficina de Turismo de Puerto Montt.',
    tag: 'En el terreno' },
  { src: '/images/historia/tourmaps/mapa-navimag.jpg',
    alt: 'Entrega de mapas ilustrados de Tourmaps a la empresa Navimag',
    t: 'De Tourmaps a la bahía',
    d: 'La interpretación viaja también en la empresa: entrega de mapas ilustrados que llevan el territorio a bordo.',
    tag: 'En el terreno' },
];

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1500;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const e = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * e));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <div ref={ref} className="text-center">
      <p className="font-['Cormorant_Garamond',Georgia,serif] text-4xl sm:text-5xl font-extrabold text-[#E8A58B] tabular-nums">
        {n}
        <span className="text-[#D97706]">{suffix}</span>
      </p>
      <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#CDD9CF] mt-1">{label}</p>
    </div>
  );
}

function GaleriaModal({
  item,
  onClose,
}: {
  item: (typeof TOURMAPS_GALERIA)[number];
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);
  return (
    <motion.div
      className="fixed inset-0 z-[90] bg-[#14281C]/85 backdrop-blur-sm flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <motion.div
        className="relative bg-white rounded-3xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-[#E4D8BF]"
        initial={{ scale: 0.9, y: 30, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.92, y: 20, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 26 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img src={item.src} alt={item.alt} className="w-full object-cover max-h-[58vh]" />
        <div className="p-5 sm:p-6 bg-[#F6F1E5]">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#14281C] text-[#E8A58B] text-[10px] font-extrabold uppercase tracking-widest mb-3">
            <Expand className="w-3 h-3" />
            {item.tag}
          </span>
          <h3 className="text-xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">{item.t}</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">{item.d}</p>
          <p className="text-[10px] text-slate-500 mt-3">
            Imagen: Tourmaps · Diseño y Marketing Turístico (www.tourmaps.cl)
          </p>
        </div>
        <button
          onClick={onClose}
          aria-label="Cerrar imagen"
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#14281C]/80 backdrop-blur text-white grid place-items-center hover:bg-[#14281C] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    </motion.div>
  );
}

export const HistoriaInterpretacion: React.FC<HistoriaInterpretacionProps> = ({ onBack }) => {
  const reduce = useReducedMotion();

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const yDecorA = useTransform(heroProgress, (v) => (reduce ? 0 : v * 120));
  const yDecorB = useTransform(heroProgress, (v) => (reduce ? 0 : v * 260));
  const heroFade = useTransform(heroProgress, [0, 0.8], [1, 0.25]);

  const { scrollYProgress: pageProgress } = useScroll();
  const barScale = useSpring(pageProgress, { stiffness: 120, damping: 30 });

  const cronRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: cronProgress } = useScroll({ target: cronRef, offset: ['start 80%', 'end 55%'] });
  const cronFill = useSpring(cronProgress, { stiffness: 90, damping: 30 });

  const [activeSec, setActiveSec] = useState('inicio');
  const [activeCrono, setActiveCrono] = useState(CRONOLOGIA[0].anio);
  const [openQuote, setOpenQuote] = useState<number | null>(null);
  const [modalIdx, setModalIdx] = useState<number | null>(null);

  useEffect(() => {
    const ids = SECCIONES.map((s) => s.id);
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSec(e.target.id);
        });
      },
      { rootMargin: '-25% 0px -65% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll('[data-cronojal]');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveCrono(e.target.getAttribute('data-anio') || CRONOLOGIA[0].anio);
        });
      },
      { rootMargin: '-30% 0px -55% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-[#F6F1E5] text-slate-900 pb-20 font-sans">
      {/* ===== BARRA DE PROGRESO + NAV STICKY ===== */}
      <div className="sticky top-0 z-40 bg-[#F6F1E5]/85 backdrop-blur-md border-b border-[#E4D8BF]/70">
        <div className="h-[3px] bg-[#E4D8BF]">
          <motion.div
            className="h-full bg-gradient-to-r from-[#B04E2A] via-[#D97706] to-[#E8A58B] origin-left"
            style={{ scaleX: barScale }}
          />
        </div>
        <nav className="no-scrollbar flex items-center gap-1.5 overflow-x-auto px-3 sm:px-6 py-2" aria-label="Secciones de la historia de la interpretación">
          {SECCIONES.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollToSection(s.id)}
              className={`whitespace-nowrap px-3 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider transition-all ${
                activeSec === s.id
                  ? 'bg-[#14281C] text-[#E8A58B] shadow-md'
                  : 'text-[#5A6B5E] hover:bg-white hover:text-[#14281C] border border-transparent'
              }`}
            >
              {s.label}
            </button>
          ))}
        </nav>
      </div>

      {/* ===== HERO ===== */}
      <section
        id="inicio"
        ref={heroRef}
        className="relative bg-gradient-to-br from-[#14281C] via-[#1D3626] to-[#2E4E37] text-white overflow-hidden py-14 sm:py-24 px-4 sm:px-6 border-b border-[#2A4533]"
      >
        <motion.div className="absolute inset-0 opacity-15 bg-[radial-gradient(#E8A58B_1.4px,transparent_1.4px)] [background-size:22px_22px]" style={{ y: yDecorA }} />
        <motion.div className="absolute -right-12 -top-12 w-56 h-56 rounded-full bg-[#B04E2A]/25 blur-3xl" style={{ y: yDecorB }} />
        <motion.div className="absolute -left-20 bottom-0 w-72 h-72 rounded-full bg-[#D97706]/15 blur-3xl" style={{ y: yDecorB }} />

        <div className="relative max-w-5xl mx-auto space-y-8" style={{ opacity: heroFade }}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <motion.span
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#E8A58B] border border-[#B04E2A]/40 text-xs font-bold uppercase tracking-widest backdrop-blur-md"
            >
              <History className="w-4 h-4" />
              100 años diseñando experiencias para visitantes
            </motion.span>
            <motion.button
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              onClick={onBack}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 transition-all"
            >
              <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              Volver a la plataforma
            </motion.button>
          </div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight font-['Cormorant_Garamond',Georgia,serif]"
            >
              La historia de la{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A58B] via-[#D97A46] to-[#FBBF24]">
                interpretación del patrimonio
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="text-sm sm:text-lg text-slate-200 max-w-3xl leading-relaxed"
            >
              Del campamento de John Muir y Theodore Roosevelt en Yosemite a las audioguías que recorren los
              cerros de Chile: el nacimiento de una disciplina que, durante más de un siglo, ha diseñado
              experiencias para visitantes — y que hoy dialoga directamente con las tendencias del turismo moderno.
            </motion.p>
          </div>

          {/* Cinta marquee */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="marquee-mask overflow-hidden py-1"
          >
            <div className="flex gap-10 w-max animate-marquee whitespace-nowrap">
              {[...CINTA, ...CINTA].map((c, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-10 text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#E8A58B]/80"
                >
                  {c}
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B04E2A]" />
                </span>
              ))}
            </div>
          </motion.div>

          {/* Sobre-línea de contadores + indicador de scroll */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-2">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full sm:w-auto">
              {ESTADISTICAS.map((s) => (
                <div key={s.l}>
                  <Stat value={s.v} suffix={s.suf} label={s.l} />
                </div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="self-center sm:self-end flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-widest text-[#E4D8BF]/80"
            >
              Sigue la línea
              <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}>
                <ChevronDown className="w-4 h-4 text-[#E8A58B]" />
              </motion.span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== NACIMIENTO EN EE.UU ===== */}
      <section id="nacimiento" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-2"
        >
          <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md">
            <Flag className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Estados Unidos · 1864 – 1957</p>
            <h2 className="text-2xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              El nacimiento de una disciplina
            </h2>
          </div>
        </motion.div>
        <p className="text-sm text-slate-600 max-w-4xl leading-relaxed mt-3 mb-8">
          La interpretación del patrimonio nace en los parques nacionales de Estados Unidos, donde la
          naturaleza protegida se volvió territorio de experiencia pública. Tres figuras trazaron su camino:
          un naturalista que la soñó, un guía que la convirtió en oficio y un autor que la transformó en método.
          De raíz, es la primera disciplina que se dedicó, de forma consciente, a <strong>diseñar experiencias
          significativas para visitantes</strong>.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="hidden md:block mb-8"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E4D8BF] group">
            <img
              src="/images/historia/muir-roosevelt-yosemite-1903.jpg"
              alt="John Muir y Theodore Roosevelt acampando en Yosemite en 1903 - Biblioteca del Congreso de EE. UU."
              className="w-full h-72 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#E8A58B] mb-1">1903 · Yosemite</p>
              <p className="font-['Cormorant_Garamond',Georgia,serif] text-xl sm:text-2xl font-semibold leading-snug max-w-2xl">
                El campamento de John Muir y Theodore Roosevelt: la experiencia directa del territorio
                cambió la política de conservación de un país.
              </p>
            </div>
          </div>
        </motion.div>
        <div className="md:hidden mb-4 rounded-3xl overflow-hidden border border-[#E4D8BF] shadow-lg">
          <img
            src="/images/historia/muir-roosevelt-yosemite-1903.jpg"
            alt="John Muir y Theodore Roosevelt en 1903 - Biblioteca del Congreso"
            className="w-full h-48 object-cover"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {FUNDADORES.map((f, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.09, duration: 0.55, ease: 'easeOut' }}
              className="relative bg-white rounded-3xl border border-[#E4D8BF] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <img src={f.img} alt={f.alt} className="w-full h-full object-cover object-top" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-3 right-3 flex items-end justify-between">
                  <p className="font-['Cormorant_Garamond',Georgia,serif] text-2xl font-semibold text-white">{f.nombre}</p>
                  <span className="px-2.5 py-1 rounded-full bg-[#B04E2A] text-white text-[10px] font-extrabold uppercase tracking-wider">{f.anios}</span>
                </div>
              </div>
              <div className="p-5 flex flex-col gap-3 flex-1">
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#B04E2A]">{f.rol}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{f.aporte}</p>
                <button
                  onClick={() => setOpenQuote(openQuote === i ? null : i)}
                  className="mt-auto inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#14281C] hover:bg-[#1D3626] text-[#E8A58B] text-[11px] font-extrabold uppercase tracking-wider transition-colors"
                >
                  <Quote className="w-3.5 h-3.5" />
                  {openQuote === i ? 'Ocultar su cita' : 'Leer su cita'}
                  <Sparkles className="w-3 h-3" />
                </button>
              </div>

              {/* Popover emergente: la cita en una tarjeta que brota sobre la foto */}
              <AnimatePresence>
                {openQuote === i && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 14 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: 10 }}
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                    className="absolute inset-0 z-20 flex flex-col justify-between gap-3 bg-[#14281C]/[0.97] backdrop-blur-sm p-5 rounded-3xl overflow-hidden"
                  >
                    <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-[#B04E2A]/25 blur-2xl" />
                    <div>
                      <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8A58B] mb-2">
                        {f.nombre} · {f.anios}
                      </p>
                      <blockquote className="relative">
                        <Quote className="w-6 h-6 text-[#B04E2A]/60 mb-2" />
                        <p className="text-sm italic text-[#F6F1E5] leading-relaxed relative">{f.cita}</p>
                      </blockquote>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-[#CDD9CF] uppercase tracking-widest font-bold">Cita de archivo</span>
                      <button
                        onClick={() => setOpenQuote(null)}
                        aria-label="Cerrar cita"
                        className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-[#E8A58B] grid place-items-center transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]"
        >
          <MousePointerClick className="w-3.5 h-3.5" />
          Toca cada tarjeta para ver la cita que brota
        </motion.p>
      </section>

      {/* ===== CRONOLOGÍA ===== */}
      <section id="cronologia" className="relative bg-gradient-to-b from-[#14281C] to-[#1D3626] text-white py-14 px-4 sm:px-6 scroll-mt-24 overflow-hidden">
        <motion.div
          className="absolute -left-24 top-1/3 w-72 h-72 rounded-full bg-[#B04E2A]/10 blur-3xl"
          animate={reduce ? undefined : { y: [0, -24, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: 'easeInOut' }}
        />
        <div ref={cronRef} className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-2"
          >
            <span className="w-11 h-11 rounded-2xl bg-white/10 text-[#E8A58B] border border-[#B04E2A]/40 grid place-items-center">
              <Clock className="w-5 h-5" />
            </span>
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8A58B]">Línea de tiempo</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
                Cronología de la interpretación
              </h2>
            </div>
          </motion.div>
          <p className="text-sm text-[#E4D8BF] max-w-3xl mt-3 mb-10 leading-relaxed">
            Desde la cesión de Yosemite hasta los principios de Tilden y de Cable &amp; Beck, pasando por figuras
            como Jorge Morales y Sam Ham que la llevaron a todo el mundo: más de un siglo de método y de
            expansión global. El rail se va llenando a medida que desciendes.
          </p>

          {/* Año activo flotante (escritorio) */}
          <div className="hidden lg:flex sticky top-24 z-10 justify-end mb-2 -mt-6 pointer-events-none">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8A58B]/10 border border-[#B04E2A]/40 text-[#E8A58B] font-['Cormorant_Garamond',Georgia,serif] font-extrabold text-xl backdrop-blur-md shadow-lg">
              {activeCrono}
              <span className="w-1.5 h-1.5 rounded-full bg-[#B04E2A] animate-pulse" />
            </span>
          </div>

          <div className="relative">
            {/* Rail base + relleno que crece con el scroll */}
            <div
              className="absolute left-[22px] md:left-1/2 top-3 bottom-3 w-[2px] rounded-full bg-gradient-to-b from-[#3A5A46] via-[#B04E2A]/30 to-[#3A5A46] md:-translate-x-1/2"
              aria-hidden="true"
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-b from-[#E8A58B] via-[#D97706] to-[#B04E2A] origin-top"
                style={{ scaleY: cronFill }}
              />
            </div>

            <div className="space-y-5 md:space-y-10">
              {CRONOLOGIA.map((c, i) => {
                const even = i % 2 === 0;
                return (
                  <div
                    key={i}
                    data-cronojal
                    data-anio={c.anio}
                    className={`relative flex items-start gap-4 sm:gap-6 md:flex-col md:gap-0 md:w-1/2 ${
                      even ? 'md:pr-10' : 'md:ml-auto md:pl-10'
                    }`}
                  >
                    {/* Nodo sobre el rail (solo escritorio) */}
                    <span
                      className={`absolute top-5 md:top-7 hidden md:block left-[22px] md:left-auto w-3.5 h-3.5 rounded-full bg-[#E8A58B] ring-4 ring-[#1D3626] z-10 ${
                        even ? 'md:right-0 md:translate-x-1/2' : 'md:left-0 md:-translate-x-1/2'
                      }`}
                    />

                    {/* Badge numérico (móvil) */}
                    <motion.span
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="md:hidden relative z-10 w-11 h-11 flex-shrink-0 rounded-full bg-gradient-to-br from-[#B04E2A] to-[#D97706] text-white text-xs font-extrabold grid place-items-center shadow-lg"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </motion.span>

                    {/* Tarjeta */}
                    <motion.article
                      initial={{ opacity: 0, y: 30, x: even ? -14 : 14 }}
                      whileInView={{ opacity: 1, y: 0, x: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.55, ease: 'easeOut' }}
                      className={`flex-1 min-w-0 rounded-3xl border border-white/10 bg-white/[0.04] p-4 sm:p-5 hover:border-[#E8A58B]/40 hover:bg-white/[0.07] transition-all ${
                        i === CRONOLOGIA.length - 1 ? 'border-[#B04E2A]/50' : ''
                      }`}
                    >
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B04E2A] text-white text-[10px] font-extrabold uppercase tracking-wider mb-2">
                        {c.anio}
                      </span>
                      <h3 className="text-base sm:text-lg font-extrabold text-white font-['Cormorant_Garamond',Georgia,serif] mb-1 leading-snug">
                        {c.titulo}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[#CDD9CF] leading-relaxed">{c.texto}</p>
                    </motion.article>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== FIGURAS CLAVE: JORGE MORALES Y SAM HAM ===== */}
      <section id="iberoamerica" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-2"
        >
          <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#B04E2A] to-[#D97706] text-white grid place-items-center shadow-md">
            <Users className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Iberoamérica · El mundo</p>
            <h2 className="text-2xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              Las voces que la llevaron a todos: Morales y Ham
            </h2>
          </div>
        </motion.div>
        <p className="text-sm text-slate-600 max-w-4xl leading-relaxed mt-3 mb-8">
          Si Freeman Tilden fue su fundador y Enos Mills su primer oficio, <strong>Jorge Morales</strong> y el{' '}
          <strong>Dr. Sam Ham</strong> fueron quienes hicieron de la interpretación una disciplina verdaderamente
          global: uno sembró la escuela de habla hispana —con un pie en Chile desde los talleres de la FAO— y el
          otro le dio método, alcance profesional y herramientas evaluables. Ambos firmaron juntos sus definiciones
          más citadas.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {FIGURAS_IBEROAMERICA.map((f, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.1, duration: 0.55, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl border border-[#E4D8BF] shadow-lg overflow-hidden flex flex-col"
            >
              <div className="bg-gradient-to-br from-[#14281C] to-[#2E4E37] p-5 sm:p-6 text-white relative overflow-hidden">
                <motion.div
                  className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-[#B04E2A]/20 blur-2xl"
                  animate={reduce ? undefined : { scale: [1, 1.35, 1] }}
                  transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                />
                <div className="flex items-center gap-3 relative">
                  <span className="w-12 h-12 rounded-2xl bg-[#B04E2A]/30 border border-[#B04E2A]/50 text-[#E8A58B] grid place-items-center flex-shrink-0">
                    {f.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8A58B]">{f.ambito}</p>
                    <h3 className="text-lg font-extrabold font-['Cormorant_Garamond',Georgia,serif] leading-tight break-words">
                      {f.nombre}
                    </h3>
                  </div>
                </div>
                <p className="mt-3 inline-block px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold">
                  {f.rol} <span className="text-[#E8A58B]">·</span> {f.anos}
                </p>
              </div>
              <div className="p-5 sm:p-6 flex flex-col gap-4 flex-1">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{f.aporte}</p>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#14281C] mb-2">Obras clave</p>
                  <ul className="space-y-1.5">
                    {f.obras.map((o, j) => (
                      <li key={j} className="flex items-start gap-2 text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                        <CircleCheckBig className="w-3.5 h-3.5 text-[#B04E2A] flex-shrink-0 mt-0.5" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-auto rounded-2xl bg-[#F6F1E5] border border-[#E4D8BF] p-3.5 text-[11px] sm:text-xs text-slate-700 leading-relaxed">
                  <BadgeCheck className="w-3.5 h-3.5 inline text-[#B04E2A] mr-1 -translate-y-0.5" />
                  {f.dato}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ===== LOS 6 DE TILDEN ===== */}
      <section id="principios" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-2"
        >
          <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md">
            <Feather className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Freeman Tilden · 1957</p>
            <h2 className="text-2xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              Los 6 principios de Tilden
            </h2>
          </div>
        </motion.div>
        <p className="text-sm text-slate-600 max-w-4xl leading-relaxed mt-3 mb-8">
          Publicados en <em>Interpreting Our Heritage</em> (1957), siguen vigentes y son el punto de
          partida de toda formación interpretativa. Adaptados al español a partir del texto original:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TILDEN_6.map((p, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 24, rotate: -1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.5, ease: 'easeOut' }}
              className="bg-white rounded-3xl border border-[#E4D8BF] shadow-sm hover:shadow-lg hover:border-[#B04E2A]/40 transition-all p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="w-9 h-9 rounded-2xl bg-gradient-to-br from-[#B04E2A] to-[#D97706] text-white grid place-items-center font-extrabold font-['Cormorant_Garamond',Georgia,serif]">{p.n}</span>
                <h3 className="text-sm font-extrabold text-[#14281C] leading-snug">{p.t}</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{p.a}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ===== LOS 21 DE BECK & CABLE ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden border border-[#E4D8BF] shadow-xl bg-white"
        >
          <div className="bg-gradient-to-r from-[#14281C] to-[#2E4E37] text-white p-6 sm:p-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B04E2A]/30 text-[#E8A58B] text-[10px] font-extrabold uppercase tracking-widest border border-[#B04E2A]/50 mb-3">
              <BookOpen className="w-3 h-3" />
              Larry Beck · Ted Cable
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
              Los 21 principios: Tilden + 15 (Beck &amp; Cable)
            </h2>
            <p className="text-xs text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Beck y Cable conservaron los seis de Tilden y los ampliaron en <em>Interpretation for the 21st Century</em>
              (1999) y <em>The Gifts of Interpretation</em> (2011). El resultado: 21 principios que dan cuerpo a la
              disciplina en la era de las audiencias globales, los sentidos y la tecnología.
            </p>
          </div>

          <div className="p-5 sm:p-8">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#14281C] mb-4">
              Los 6 de Tilden, reafirmados <span className="text-[#B04E2A]">(ver arriba)</span> · los 15 complementarios de Beck &amp; Cable:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {BECK_CABLE_15.map((p, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: (i % 3) * 0.06, duration: 0.45, ease: 'easeOut' }}
                  className="rounded-2xl bg-[#F6F1E5] border border-[#E4D8BF] hover:border-[#B04E2A]/50 hover:shadow-md transition-all p-4 flex gap-3"
                >
                  <span className="w-8 h-8 rounded-xl bg-[#1D3626] text-[#E8A58B] grid place-items-center font-extrabold text-xs flex-shrink-0">{p.n}</span>
                  <div>
                    <h3 className="text-[13px] font-extrabold text-[#14281C] leading-snug">{p.t}</h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed mt-1">{p.a}</p>
                  </div>
                </motion.article>
              ))}
            </div>
            <p className="text-[10px] text-slate-500 mt-5 max-w-3xl leading-relaxed">
              * Síntesis en español de los quince principios complementarios de Larry Beck y Ted Cable
              (<em>Interpretation for the 21st Century</em>, Sagamore, 1999/2002, y <em>The Gifts of Interpretation</em>, 2011);
              consulta los textos originales para el desarrollo completo de cada principio.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ===== TENDENCIAS / EXPERIENCIA TURÍSTICA ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-2"
        >
          <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#B04E2A] to-[#D97706] text-white grid place-items-center shadow-md">
            <Rocket className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">De 1864 al metaverso de los sentidos</p>
            <h2 className="text-2xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              La interpretación y el diseño de experiencias turísticas
            </h2>
          </div>
        </motion.div>
        <div className="mt-3 mb-8 space-y-4 max-w-5xl">
          <p className="text-sm text-slate-600 leading-relaxed">
            Antes del <em>experience design</em>, antes del <em>storytelling</em> de marca y antes del turismo
            experiencial, existió la interpretación del patrimonio. Durante más de cien años -desde los guías
            naturalistas de 1918 hasta los principios de Tilden y de Beck &amp; Cable- esta disciplina ha sido un
            <strong> laboratorio de diseño de experiencias para visitantes</strong>: define audiencias, provoca emociones,
            estructura momentos, cuenta historias y evalúa el impacto de cada encuentro con el territorio.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Por eso hoy dialoga de forma natural con las grandes tendencias del turismo moderno:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {TENDENCIAS.map((t, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: (i % 4) * 0.07, duration: 0.5, ease: 'easeOut' }}
              whileHover={{ y: -3 }}
              className="bg-white rounded-3xl border border-[#E4D8BF] shadow-sm hover:shadow-lg hover:border-[#B04E2A]/40 transition-all p-5 flex gap-4"
            >
              <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md flex-shrink-0 mt-0.5">{t.icon}</span>
              <div>
                <h3 className="text-sm font-extrabold text-[#14281C]">{t.t}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-1.5">{t.a}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Puente con esta plataforma */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-3xl overflow-hidden border border-[#E4D8BF] shadow-xl bg-white"
        >
          <div className="bg-gradient-to-r from-[#B04E2A] to-[#D97706] text-white p-6 sm:p-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/20 text-white text-[10px] font-extrabold uppercase tracking-widest border border-white/25 mb-3">
              <Magnet className="w-3 h-3" />
              Método en acción
            </span>
            <h3 className="text-2xl font-extrabold font-['Cormorant_Garamond',Georgia,serif] max-w-2xl">
              De Tilden a tu audioguía en el cerro: el método interpretativo en esta plataforma
            </h3>
          </div>
          <div className="p-6 sm:p-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: <Waypoints className="w-5 h-5" />, t: 'Paradas interpretativas', a: 'Cada parada es una unidad de provocación: un eje temático, un guion y un momento de asombro — como los "stops" de un ranger de Yosemite.' },
              { icon: <AudioLines className="w-5 h-5" />, t: 'Narrativa sonora', a: 'La voz, los silencios y la música despliegan el recurso con arte: información al servicio de la revelación (principio 2).' },
              { icon: <MapPinned className="w-5 h-5" />, t: 'Despliegue territorial', a: 'El paisaje real es el guion: orientación, distancia y contexto conectan cada relato con la experiencia corporal del lugar.' },
              { icon: <CircleCheckBig className="w-5 h-5" />, t: 'Seguridad y ética', a: 'Matriz IPER, normativas y protocolos de interpretación aseguran que el asombro no dañe el patrimonio que lo origina.' },
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="rounded-2xl bg-[#F6F1E5] border border-[#E4D8BF] p-4"
              >
                <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center mb-2">{m.icon}</span>
                <h4 className="text-[13px] font-extrabold text-[#14281C]">{m.t}</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed mt-1">{m.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ===== EL PATRIMONIO CHILENO ILUSTRADO · TOURMAPS ===== */}
      <section id="tourmaps" className="bg-gradient-to-b from-[#14281C] to-[#1D3626] text-white py-14 px-4 sm:px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-2"
          >
            <span className="w-11 h-11 rounded-2xl bg-white/10 text-[#E8A58B] border border-[#B04E2A]/40 grid place-items-center">
              <Compass className="w-5 h-5" />
            </span>
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8A58B]">Chile · 2022 — Hoy</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
                El patrimonio chileno ilustrado: Tourmaps
              </h2>
            </div>
            <img
              src="/images/historia/tourmaps/TOURMAPS-LOGO-2022-wh.png"
              alt="Logo de Tourmaps, Diseño y Marketing Turístico"
              className="h-7 sm:h-8 ml-auto opacity-90 hidden sm:block"
            />
          </motion.div>
          <p className="text-sm text-[#E4D8BF] max-w-3xl mt-3 mb-8 leading-relaxed">
            El método de Tilden no llegó a Chile solo en libros: llegó dibujado en mapas. <strong>Tourmaps</strong>
            (&ldquo;Conectamos personas con territorios&rdquo;) diseñó los mapas ilustrados e interpretativos de
            Puerto Montt, la Ruta del Río San Pedro, Maullín y Valdivia, y es el estudio detrás de la audioguía
            oficial <em>Iglesias de Chiloé</em> de esta plataforma. Toca las tarjetas: cada imagen emerge en grande.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TOURMAPS_GALERIA.map((g, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.5, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                onClick={() => setModalIdx(i)}
                className="group relative text-left rounded-3xl overflow-hidden border border-white/10 shadow-lg h-56 hover:border-[#E8A58B]/50 transition-colors"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent group-hover:from-black/90 transition-colors" />
                <span className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#E8A58B] text-[#14281C] grid place-items-center opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  <Expand className="w-4 h-4" />
                </span>
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#B04E2A] text-white text-[10px] font-extrabold uppercase tracking-wider">
                  {g.tag}
                </span>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-lg font-extrabold leading-tight">{g.t}</h3>
                  <p className="text-[11px] text-[#E4D8BF]/90 mt-1 line-clamp-2">{g.d}</p>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Tarjeta aliado emergente */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mt-8 rounded-3xl overflow-hidden border border-[#B04E2A]/40 bg-white/[0.05] backdrop-blur-sm"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 sm:p-8">
              <div className="flex-1 space-y-2">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8A58B]">El método en el territorio</p>
                <h3 className="text-xl sm:text-2xl font-extrabold font-['Cormorant_Garamond',Georgia,serif] max-w-xl">
                  De las secuoyas de 1903 a los mapas ilustrados de Chiloé
                </h3>
                <p className="text-xs text-[#CDD9CF] leading-relaxed max-w-2xl">
                  Tourmaps y El Viaje por Chile comparten ese mismo oficio centenario: diseñar la experiencia de
                  visitar un territorio, con mapa, señalética y audioguía. La interpretación del patrimonio, hoy,
                  se imprime y se escucha a lo largo de todo Chile.
                </p>
              </div>
              <a
                href="https://www.tourmaps.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#B04E2A] hover:bg-[#9A3F1E] text-white text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap"
              >
                Conocer Tourmaps
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CIERRE ===== */}
      <section id="cierre" className="bg-[#14281C] text-[#F6F1E5] py-12 px-4 sm:px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto space-y-5">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-extrabold font-['Cormorant_Garamond',Georgia,serif] max-w-lg"
          >
            Un siglo de método, ahora en tus manos
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm text-[#E4D8BF] max-w-2xl leading-relaxed"
          >
            Diseñar una experiencia turística hoy es, en gran parte, interpretar un territorio: saber qué
            contar, a quién, con qué tono y para despertar qué emoción. La interpretación del patrimonio no es
            una tendencia más: es la disciplina base que llevó más de cien años diseñando experiencias para
            visitantes, y que ahora se encuentra con el turismo del siglo XXI.
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            onClick={onBack}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B04E2A] hover:bg-[#9A3F1E] text-white text-xs font-bold uppercase tracking-wider transition-colors"
          >
            Volver a la plataforma
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.button>

          <div className="pt-6 border-t border-[#2A4533] text-[10px] text-slate-400 leading-relaxed space-y-1 max-w-4xl">
            <p>
              Imágenes de archivo de uso libre · dominio público: retrato de John Muir (Biblioteca del Congreso de
              EE. UU., colección Prints &amp; Photographs, digital ID cph.3b51655); John Muir y Theodore Roosevelt en
              Yosemite, 1903 (Biblioteca del Congreso de EE. UU., digital ID cph.3g04698); John Muir entre los pinos
              (Sierra Club Bulletin, vol. 10, n.º 1, enero 1916); Enos Mills junto a su cabaña en Longs Peak y papel
              fotográfico de Freeman Tilden (Servicio de Parques Nacionales de EE. UU.); Old Faithful (óleo de Albert
              Bierstadt, dominio público). Imágenes obtenidas de Wikimedia Commons.
            </p>
            <p>
              Mapas ilustrados y fotografías de terreno: © Tourmaps, Diseño y Marketing Turístico
              (www.tourmaps.cl) — mapas ilustrados e interpretativos de Puerto Montt, Ruta del Río San Pedro,
              Maullín y Valdivia; mapa mural de la Oficina de Turismo de Puerto Montt; entrega institucional de
              mapas. Reproducidos con fines divulgativos sobre la historia de la interpretación del patrimonio.
            </p>
            <p>
              Fuentes de referencia: F. Tilden, <em>Interpreting Our Heritage</em> (1957); L. Beck &amp; T. Cable,
              <em> Interpretation for the 21st Century</em> (1999/2002) y <em>The Gifts of Interpretation</em> (2011);
              J. Morales, <em>Manual para la Interpretación Ambiental en Áreas Silvestres Protegidas</em> (FAO/PNUMA,
              1992) y <em>Guía Práctica para la Interpretación del Patrimonio</em> (1998/2001); S. Ham,
              <em> Environmental Interpretation</em> (1992) e <em>Interpretation: Making a Difference on Purpose</em>
              (2013); J. Morales &amp; S. Ham, <em>"¿A qué interpretación nos referimos?"</em> (Boletín de Interpretación,
              AIP España, 2008); National Park Service. Las citas de Muir y Mills son traducciones libres; consulta
              los textos originales.
            </p>
          </div>
        </div>
      </section>

      {/* ===== MODAL DE GALERÍA (imágenes emergentes de Tourmaps) ===== */}
      <AnimatePresence>
        {modalIdx !== null && (
          <GaleriaModal item={TOURMAPS_GALERIA[modalIdx]} onClose={() => setModalIdx(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};