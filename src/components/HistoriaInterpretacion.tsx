import React from 'react';
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

export const HistoriaInterpretacion: React.FC<HistoriaInterpretacionProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#F6F1E5] text-slate-900 pb-20 font-sans">

      {/* ===== HERO ===== */}
      <section className="relative bg-gradient-to-br from-[#14281C] via-[#1D3626] to-[#2E4E37] text-white overflow-hidden py-14 sm:py-20 px-4 sm:px-6 border-b border-[#2A4533]">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#E8A58B_1.4px,transparent_1.4px)] [background-size:22px_22px]" />
        <div className="absolute -right-12 -top-12 w-56 h-56 rounded-full bg-[#B04E2A]/25 blur-3xl" />

        <div className="relative max-w-5xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#E8A58B] border border-[#B04E2A]/40 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              <History className="w-4 h-4" />
              100 años diseñando experiencias para visitantes
            </span>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 transition-all"
            >
              <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              Volver a la plataforma
            </button>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight font-['Cormorant_Garamond',Georgia,serif]">
            La historia de la{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A58B] via-[#D97A46] to-[#FBBF24]">
              interpretación del patrimonio
            </span>
          </h1>
          <p className="text-sm sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            Del campamento de John Muir y Theodore Roosevelt en Yosemite a las audioguías que recorren los
            cerros de Chile: el nacimiento de una disciplina que, durante más de un siglo, ha diseñado
            experiencias para visitantes — y que hoy dialoga directamente con las tendencias del turismo moderno.
          </p>
        </div>
      </section>

      {/* ===== NACIMIENTO EN EE.UU ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md">
            <Flag className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Estados Unidos · 1864 – 1957</p>
            <h2 className="text-2xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              El nacimiento de una disciplina
            </h2>
          </div>
        </div>
        <p className="text-sm text-slate-600 max-w-4xl leading-relaxed mt-3 mb-8">
          La interpretación del patrimonio nace en los parques nacionales de Estados Unidos, donde la
          naturaleza protegida se volvió territorio de experiencia pública. Tres figuras trazaron su camino:
          un naturalista que la soñó, un guía que la convirtió en oficio y un autor que la transformó en método.
          De raíz, es la primera disciplina que se dedicó, de forma consciente, a <strong>diseñar experiencias
          significativas para visitantes</strong>.
        </p>

        <div className="hidden md:block mb-8">
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
        </div>
        <div className="md:hidden mb-4 rounded-3xl overflow-hidden border border-[#E4D8BF] shadow-lg">
          <img
            src="/images/historia/muir-roosevelt-yosemite-1903.jpg"
            alt="John Muir y Theodore Roosevelt en 1903 - Biblioteca del Congreso"
            className="w-full h-48 object-cover"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {FUNDADORES.map((f, i) => (
            <article key={i} className="bg-white rounded-3xl border border-[#E4D8BF] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all overflow-hidden flex flex-col">
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
                <blockquote className="mt-auto rounded-2xl bg-[#F6F1E5] border border-[#E4D8BF] p-3.5">
                  <p className="text-[11px] italic text-slate-700 leading-relaxed">
                    <Quote className="w-3 h-3 inline text-[#B04E2A] mr-1 -translate-y-0.5" />
                    {f.cita}
                  </p>
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== CRONOLOGÍA ===== */}
      <section className="bg-gradient-to-b from-[#14281C] to-[#1D3626] text-white py-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-11 h-11 rounded-2xl bg-white/10 text-[#E8A58B] border border-[#B04E2A]/40 grid place-items-center">
              <Clock className="w-5 h-5" />
            </span>
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8A58B]">Línea de tiempo</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
                Cronología de la interpretación
              </h2>
            </div>
          </div>
          <p className="text-sm text-[#E4D8BF] max-w-3xl mt-3 mb-10 leading-relaxed">
            Desde la cesión de Yosemite hasta los principios de Tilden y de Cable & Beck: noventa años
            de método, y de ahí hasta hoy, de expansión global.
          </p>

          <div className="relative">
            <div className="absolute left-[19px] sm:left-1/2 top-0 bottom-0 w-px bg-[#3A5A46] sm:-translate-x-px" />
            <div className="space-y-6">
              {CRONOLOGIA.map((c, i) => (
                <div key={i} className={`relative flex gap-5 sm:gap-8 ${i % 2 === 0 ? '' : 'sm:flex-row-reverse'}`}>
                  <div className="hidden sm:block sm:w-1/2"></div>
                  <span className="absolute left-4 sm:left-1/2 top-3 w-2.5 h-2.5 rounded-full bg-[#E8A58B] ring-4 ring-[#1D3626] sm:-translate-x-1/2 z-10" />
                  <div className="w-10 h-10 sm:hidden flex-shrink-0 rounded-full bg-[#B04E2A]/25 border border-[#B04E2A]/50 text-[#E8A58B] text-[10px] font-extrabold grid place-items-center grid-cols-1 text-center leading-tight p-0">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <article className="flex-1 bg-white/[0.04] border border-white/10 rounded-3xl p-5 hover:border-[#E8A58B]/40 hover:bg-white/[0.07] transition-all">
                    <span className="inline-block px-3 py-1 rounded-full bg-[#B04E2A] text-white text-[10px] font-extrabold uppercase tracking-wider mb-2">
                      {c.anio}
                    </span>
                    <h3 className="text-base font-extrabold text-white font-['Cormorant_Garamond',Georgia,serif] mb-1">{c.titulo}</h3>
                    <p className="text-xs text-[#CDD9CF] leading-relaxed">{c.texto}</p>
                  </article>
                  <div className="hidden sm:block sm:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== LOS 6 DE TILDEN ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md">
            <Feather className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Freeman Tilden · 1957</p>
            <h2 className="text-2xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              Los 6 principios de Tilden
            </h2>
          </div>
        </div>
        <p className="text-sm text-slate-600 max-w-4xl leading-relaxed mt-3 mb-8">
          Publicados en <em>Interpreting Our Heritage</em> (1957), siguen vigentes y son el punto de
          partida de toda formación interpretativa. Adaptados al español a partir del texto original:
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TILDEN_6.map((p, i) => (
            <article key={i} className="bg-white rounded-3xl border border-[#E4D8BF] shadow-sm hover:shadow-lg hover:border-[#B04E2A]/40 transition-all p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-9 h-9 rounded-2xl bg-gradient-to-br from-[#B04E2A] to-[#D97706] text-white grid place-items-center font-extrabold font-['Cormorant_Garamond',Georgia,serif]">{p.n}</span>
                <h3 className="text-sm font-extrabold text-[#14281C] leading-snug">{p.t}</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{p.a}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== LOS 21 DE BECK & CABLE ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="rounded-3xl overflow-hidden border border-[#E4D8BF] shadow-xl bg-white">
          <div className="bg-gradient-to-r from-[#14281C] to-[#2E4E37] text-white p-6 sm:p-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B04E2A]/30 text-[#E8A58B] text-[10px] font-extrabold uppercase tracking-widest border border-[#B04E2A]/50 mb-3">
              <BookOpen className="w-3 h-3" />
              Larry Beck · Ted Cable
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
              Los 21 principios: Tilden + 15 (Beck & Cable)
            </h2>
            <p className="text-xs text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Beck y Cable conservaron los seis de Tilden y los ampliaron en <em>Interpretation for the 21st Century</em>
              (1999) y <em>The Gifts of Interpretation</em> (2011). El resultado: 21 principios que dan cuerpo a la
              disciplina en la era de las audiencias globales, los sentidos y la tecnología.
            </p>
          </div>

          <div className="p-5 sm:p-8">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#14281C] mb-4">
              Los 6 de Tilden, reafirmados <span className="text-[#B04E2A]">(ver arriba)</span> · los 15 complementarios de Beck & Cable:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {BECK_CABLE_15.map((p, i) => (
                <article key={i} className="rounded-2xl bg-[#F6F1E5] border border-[#E4D8BF] hover:border-[#B04E2A]/50 hover:shadow-md transition-all p-4 flex gap-3">
                  <span className="w-8 h-8 rounded-xl bg-[#1D3626] text-[#E8A58B] grid place-items-center font-extrabold text-xs flex-shrink-0">{p.n}</span>
                  <div>
                    <h3 className="text-[13px] font-extrabold text-[#14281C] leading-snug">{p.t}</h3>
                    <p className="text-[11px] text-slate-600 leading-relaxed mt-1">{p.a}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="text-[10px] text-slate-500 mt-5 max-w-3xl leading-relaxed">
              * Síntesis en español de los quince principios complementarios de Larry Beck y Ted Cable
              (<em>Interpretation for the 21st Century</em>, Sagamore, 1999/2002, y <em>The Gifts of Interpretation</em>, 2011);
              consulta los textos originales para el desarrollo completo de cada principio.
            </p>
          </div>
        </div>
      </section>

      {/* ===== TENDENCIAS / EXPERIENCIA TURÍSTICA ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#B04E2A] to-[#D97706] text-white grid place-items-center shadow-md">
            <Rocket className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">De 1864 al metaverso de los sentidos</p>
            <h2 className="text-2xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              La interpretación y el diseño de experiencias turísticas
            </h2>
          </div>
        </div>
        <div className="mt-3 mb-8 space-y-4 max-w-5xl">
          <p className="text-sm text-slate-600 leading-relaxed">
            Antes del <em>experience design</em>, antes del <em>storytelling</em> de marca y antes del turismo
            experiencial, existió la interpretación del patrimonio. Durante más de cien años -desde los guías
            naturalistas de 1918 hasta los principios de Tilden y de Beck & Cable- esta disciplina ha sido un
            <strong> laboratorio de diseño de experiencias para visitantes</strong>: define audiencias, provoca emociones,
            estructura momentos, cuenta historias y evalúa el impacto de cada encuentro con el territorio.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Por eso hoy dialoga de forma natural con las grandes tendencias del turismo moderno:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {TENDENCIAS.map((t, i) => (
            <article key={i} className="bg-white rounded-3xl border border-[#E4D8BF] shadow-sm hover:shadow-lg hover:border-[#B04E2A]/40 transition-all p-5 flex gap-4">
              <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md flex-shrink-0 mt-0.5">{t.icon}</span>
              <div>
                <h3 className="text-sm font-extrabold text-[#14281C]">{t.t}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-1.5">{t.a}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Puente con esta plataforma */}
        <div className="mt-8 rounded-3xl overflow-hidden border border-[#E4D8BF] shadow-xl bg-white">
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
              { icon: <Waypoints className="w-5 h-5" />, t: 'Paradas interpretativas', a: 'Cada parada es una unidad de provocación: un eje temático, un guion y un momento de asombro — como los “stops” de un ranger de Yosemite.' },
              { icon: <AudioLines className="w-5 h-5" />, t: 'Narrativa sonora', a: 'La voz, los silencios y la música despliegan el recurso con arte: información al servicio de la revelación (principio 2).' },
              { icon: <MapPinned className="w-5 h-5" />, t: 'Despliegue territorial', a: 'El paisaje real es el guion: orientación, distancia y contexto conectan cada relato con la experiencia corporal del lugar.' },
              { icon: <CircleCheckBig className="w-5 h-5" />, t: 'Seguridad y ética', a: 'Matriz IPER, normativas y protocolos de interpretación aseguran que el asombro no dañe el patrimonio que lo origina.' },
            ].map((m, i) => (
              <div key={i} className="rounded-2xl bg-[#F6F1E5] border border-[#E4D8BF] p-4">
                <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center mb-2">{m.icon}</span>
                <h4 className="text-[13px] font-extrabold text-[#14281C]">{m.t}</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed mt-1">{m.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CIERRE ===== */}
      <section className="bg-[#14281C] text-[#F6F1E5] py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-5">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-['Cormorant_Garamond',Georgia,serif] max-w-lg">
            Un siglo de método, ahora en tus manos
          </h3>
          <p className="text-sm text-[#E4D8BF] max-w-2xl leading-relaxed">
            Diseñar una experiencia turística hoy es, en gran parte, interpretar un territorio: saber qué
            contar, a quién, con qué tono y para despertar qué emoción. La interpretación del patrimonio no es
            una tendencia más: es la disciplina base que llevó más de cien años diseñando experiencias para
            visitantes, y que ahora se encuentra con el turismo del siglo XXI.
          </p>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B04E2A] hover:bg-[#9A3F1E] text-white text-xs font-bold uppercase tracking-wider transition-colors"
          >
            Volver a la plataforma
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <div className="pt-6 border-t border-[#2A4533] text-[10px] text-slate-400 leading-relaxed space-y-1 max-w-4xl">
            <p>
              Imágenes de archivo de uso libre · dominio público: retrato de John Muir (Biblioteca del Congreso de
              EE. UU., colección Prints & Photographs, digital ID cph.3b51655); John Muir y Theodore Roosevelt en
              Yosemite, 1903 (Biblioteca del Congreso de EE. UU., digital ID cph.3g04698); John Muir entre los pinos
              (Sierra Club Bulletin, vol. 10, n.º 1, enero 1916); Enos Mills junto a su cabaña en Longs Peak y papel
              fotográfico de Freeman Tilden (Servicio de Parques Nacionales de EE. UU.); Old Faithful (óleo de Albert
              Bierstadt, dominio público). Imágenes obtenidas de Wikimedia Commons.
            </p>
            <p>
              Fuentes de referencia: F. Tilden, <em>Interpreting Our Heritage</em> (1957); L. Beck & T. Cable,
              <em> Interpretation for the 21st Century</em> (1999/2002) y <em>The Gifts of Interpretation</em> (2011);
              National Park Service. Las citas de Muir y Mills son traducciones libres; consulta los textos originales.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};