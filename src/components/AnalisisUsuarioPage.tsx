import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import {
  ArrowRight,
  Target,
  SearchCheck,
  MessagesSquare,
  ClipboardList,
  UserRoundSearch,
  MessageSquareText,
  ScanLine,
  Download,
  Users,
  Lightbulb,
  Milestone,
  Quote,
  LibraryBig,
  Sparkles,
  HeartHandshake,
  Compass,
} from 'lucide-react';

interface AnalisisUsuarioPageProps {
  onBack: () => void;
}

const FORMULA = {
  cd: 'Conocimiento del Destinatario',
  cr: 'Conocimiento del Recurso',
  ta: 'Técnica Adecuada',
  oi: 'Oportunidad Interpretativa',
};

const METODOLOGIAS = [
  {
    icon: <SearchCheck className="w-5 h-5" />,
    titulo: 'Needfinding (búsqueda de necesidades)',
    autores: 'Patnaik & Becker, 1999',
    resumen:
      'Metodología de diseño centrado en el usuario, originada en el programa de diseño de producto de Stanford. Consiste en observar a las personas en su contexto real y descubrir necesidades no expresadas —y a menudo ocultas e incluso inconscientes— antes de definir soluciones. No pregunta qué producto quiere, sino qué necesidad busca satisfacer en su actividad cotidiana.',
    pasos: [
      'Observación en contexto (no encuesta de laboratorio).',
      'Formulación de hipótesis sobre necesidades latentes.',
      'Contraste con entrevistas para validar lo observado.',
      'Traducción de las necesidades en oportunidades de diseño.',
    ],
  },
  {
    icon: <MessageSquareText className="w-5 h-5" />,
    titulo: 'Entrevistas en profundidad',
    autores: 'Kvale, 1996',
    resumen:
      'Conversación guiada, semiestructurada y a profundidad con un número reducido de participantes. Su objetivo es comprender el mundo desde la perspectiva del entrevistado: motivaciones, miedos, recuerdos y expectativas. Son la herramienta natural para construir arquetipos y personas, porque revelan el "por qué" detrás de las respuestas y las decisiones de viaje.',
    pasos: [
      'Guion semiestructurado (temas abiertos, sin respuestas cerradas).',
      'Muestreo intencional: diversidad de perfiles y de comunas del sector.',
      'Entrevistas de 60–90 min, registro y transcripción.',
      'Análisis temático: patrones, contradicciones y necesidades latentes.',
    ],
  },
  {
    icon: <ClipboardList className="w-5 h-5" />,
    titulo: 'Encuestas de perfil y satisfacción',
    autores: 'Dillman, Smyth & Christian, 2014',
    resumen:
      'Instrumento cuantitativo que permite medir la distribución de percepciones, motivaciones y niveles de satisfacción en una muestra representativa. Complementa lo cualitativo con evidencia numérica: ¿cuántos viajeros priorizan la desconexión?, ¿cuál es la nota promedio de conectividad entre comunas? Es la base para segmentar y priorizar.',
    pasos: [
      'Diseño de preguntas cerradas y escalas de evaluación.',
      'Aplicación en terreno y online (QR accesible al móvil).',
      'Análisis estadístico descriptivo (frecuencias, promedios, cruces).',
      'Trazabilidad de la satisfacción antes / durante / después del viaje.',
    ],
  },
];

const ARQUETIPOS = [
  {
    nombre: 'Explorador de Naturaleza',
    emoji: '⛰️',
    frase: '"Vengo por el aire de los cerros, el trekking y los hitos naturales."',
    motivaciones: ['Deporte y salud', 'Contacto directo con la naturaleza', 'Aire puro y escape del ruido'],
    senales: ['Actividades de aventura', 'Fotografía de paisaje', 'Dificultad técnica preferida'],
    diseno: ['Rutas de trekking señalizadas', 'Hitos naturales interpretados', 'Mapas e información de esfuerzo físico'],
    color: 'from-[#2E4E37] to-[#1D3626]',
  },
  {
    nombre: 'Enoturista / Winelover',
    emoji: '🍷',
    frase: '"Busco la cultura del vino, la bodega y el descanso en el Valle del Maipo."',
    motivaciones: ['Cultura del vino y gastronomía', 'Lujo, exclusividad y tranquilidad', 'Maridajes y cocina criolla'],
    senales: ['Tour en bodega con cata', 'Aprendizaje técnico del vino', 'Historia y arquitectura de viñas'],
    diseno: ['Catas y maridajes', 'Relatos de historia y leyendas', 'Circuitos entre viñas con traslado'],
    color: 'from-[#7B2D26] to-[#B04E2A]',
  },
  {
    nombre: 'Familia Recreativa',
    emoji: '👨‍👩‍👧',
    frase: '"Quiero un picnic, un parque seguro y actividades para mis hijos."',
    motivaciones: ['Tiempo en familia', 'Esparcimiento infantil', 'Espacios abiertos y sombra'],
    senales: ['Picnics y parques', 'Baños públicos', 'Zonas de descanso'],
    diseno: ['Senderos fáciles y demarcados', 'Zonas de picnic y sombra', 'Actividades guiadas para niñez'],
    color: 'from-[#C97A2E] to-[#D97706]',
  },
  {
    nombre: 'Aventurero Activo',
    emoji: '🧗',
    frase: '"Vine por la adrenalina: rafting, canopy, escalada y alta montaña."',
    motivaciones: ['Adrenalina y deporte exigente', 'Escape urbano', 'Superación personal'],
    senales: ['Rafting / Canopy / Escalada', 'Trekking de exigencia', 'Deportes de agua'],
    diseno: ['Opciones de aventura certificadas', 'Seguridad y equipamiento', 'Rutas combinadas con gastronomía'],
    color: 'from-[#B04E2A] to-[#7B2D26]',
  },
];

const BIBLIOGRAFIA = [
  'Beck, L., & Cable, T. T. (2002). Interpretation for the 21st century: Fifteen guiding principles for interpreting nature and culture (2nd ed.). Sagamore Publishing.',
  'Beck, L., Cable, T. T., & Knudson, D. M. (2018). Interpreting cultural and natural heritage for a better world. Sagamore-Venture Publishing.',
  'Dillman, D. A., Smyth, J. D., & Christian, L. M. (2014). Internet, phone, mail, and mixed-mode surveys: The tailored design method (4th ed.). John Wiley & Sons.',
  'Hammitt, W. E. (1984). Cognitive processes involved in environmental interpretation. Journal of Environmental Education, 15(4), 11–15.',
  'Hammitt, W. E., & Cole, D. N. (1998). Wildland recreation: Ecology and management (2nd ed.). John Wiley & Sons.',
  'Kvale, S. (1996). Interviews: An introduction to qualitative research interviewing. Sage Publications.',
  'Maslow, A. H. (1943). A theory of human motivation. Psychological Review, 50(4), 370–396.',
  'Morales Miranda, J. (2001). Guía práctica para la interpretación del patrimonio: El arte de acercar el legado natural y cultural al público visitante (2nd ed.). Junta de Andalucía, Consejería de Agricultura y Pesca.',
  'Patnaik, D., & Becker, R. (1999). Needfinding: The why and how of uncovering people’s needs. Design Management Journal, 10(2), 37–43.',
  'Pine, B. J., II, & Gilmore, J. H. (1999). The experience economy: Work is theatre and every business a stage. Harvard Business School Press.',
  'Tilden, F. (1957). Interpreting our heritage (1st ed.). University of North Carolina Press.',
];

export const AnalisisUsuarioPage: React.FC<AnalisisUsuarioPageProps> = ({ onBack }) => {
  const [mostrarEncuesta, setMostrarEncuesta] = useState(false);
  const encuestaUrl = `${window.location.origin}/api/encuestas/encuesta-valle-del-maipo`;

  return (
    <div className="min-h-screen bg-[#F6F1E5] text-slate-900 pb-20 font-sans">

      {/* ===== HERO ===== */}
      <section className="relative bg-gradient-to-br from-[#14281C] via-[#1D3626] to-[#2E4E37] text-white overflow-hidden py-14 sm:py-20 px-4 sm:px-6 border-b border-[#2A4533]">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#E8A58B_1.4px,transparent_1.4px)] [background-size:22px_22px]" />
        <div className="absolute -right-12 -top-12 w-56 h-56 rounded-full bg-[#B04E2A]/25 blur-3xl" />
        <div className="absolute -left-16 bottom-0 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative max-w-5xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#E8A58B] border border-[#B04E2A]/40 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              <Target className="w-4 h-4" />
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
            <UserRoundSearch className="w-3.5 h-3.5" />
            Diseño centrado en el visitante
          </span>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight font-['Cormorant_Garamond',Georgia,serif]">
            Análisis del{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A58B] via-[#D97A46] to-[#FBBF24]">
              usuario / destinatario
            </span>
          </h1>
          <p className="text-sm sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            Para que una Oportunidad Interpretativa ocurra no basta con conocer el
            recurso: hay que conocer a la persona que lo visita. Esta página reúne la
            teoría que sostiene ese principio —desde los pilares de la interpretación
            patrimonial hasta las metodologías actuales de investigación de usuario— y
            te entrega una encuesta de perfil y satisfacción lista para aplicar en
            terreno, descargable desde el móvil con un código QR.
          </p>
        </div>
      </section>

      {/* ===== ECUACIÓN DE LA INTERPRETACIÓN ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md">
            <Milestone className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">La fórmula del intérprete</p>
            <h2 className="text-2xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              (CD + CR) × TA = OI
            </h2>
          </div>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="bg-white border border-[#E4D8BF] rounded-2xl p-5 space-y-3">
            <p className="text-sm text-slate-700 leading-relaxed">
              La interpretación del patrimonio es una <strong>disciplina de diseño de experiencias</strong>:
              no comunica información, provoca conexiones entre el recurso y la vida del visitante. Para
              que esa conexión ocurra, el intérprete opera con tres insumos, resumidos en la fórmula:
            </p>
            <div className="space-y-2.5">
              <div className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-xl bg-[#1D3626] text-[#E8A58B] grid place-items-center font-extrabold shrink-0">CD</span>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#B04E2A]">Conocimiento del Destinatario</p>
                  <p className="text-xs text-slate-600">Quién visita: edad, procedencia, motivaciones, estilo de viaje, cultura y expectativas.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-xl bg-[#1D3626] text-[#E8A58B] grid place-items-center font-extrabold shrink-0">CR</span>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#B04E2A]">Conocimiento del Recurso</p>
                  <p className="text-xs text-slate-600">Qué se interpreta: la historia, la ecología, los significados del cerro, la viña o el casco histórico.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-9 h-9 rounded-xl bg-[#B04E2A] text-white grid place-items-center font-extrabold shrink-0">TA</span>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#B04E2A]">Técnica Adecuada</p>
                  <p className="text-xs text-slate-600">El medio: visita guiada, panel, audioguía, señalética, ruta QR o experiencia inmersiva.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-white rounded-2xl p-5 space-y-3">
            <div className="flex items-center justify-center gap-3 text-sm font-bold font-['Cormorant_Garamond',Georgia,serif]">
              <span className="flex-1 text-center border border-white/20 rounded-xl py-3 bg-white/5">CD + CR</span>
              <span className="text-[#E8A58B] text-xl">×</span>
              <span className="flex-1 text-center border border-white/20 rounded-xl py-3 bg-white/5">TA</span>
              <span className="text-[#E8A58B] text-xl">=</span>
              <span className="flex-1 text-center border border-[#B04E2A]/60 rounded-xl py-3 bg-[#B04E2A]/20 text-[#FBBF24]">OI</span>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed text-center">
              La <strong>Oportunidad Interpretativa</strong> surge solo cuando el conocimiento del destinatario
              se multiplica por una técnica adecuada. Sin destinatario conocido, la técnica adecuada no
              existe: no se puede elegir un medio, un tono ni un mensaje para un visitante desconocido.
            </p>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#E8A58B]">Por qué importa el CR</p>
                <p className="text-xs text-slate-300 leading-relaxed">Sin recurso sólido, la interpretación es entretenimiento vacío.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#E8A58B]">Por qué importa el CD</p>
                <p className="text-xs text-slate-300 leading-relaxed">Sin destinatario conocido, la interpretación es monólogo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== INTRODUCCIÓN FUNDAMENTADA ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#B04E2A] to-[#D97706] text-white grid place-items-center shadow-md">
            <LibraryBig className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Fundamento teórico</p>
            <h2 className="text-2xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              Por qué el destinatario es el primer recurso de la interpretación
            </h2>
          </div>
        </div>

        <div className="mt-5 grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 bg-white border border-[#E4D8BF] rounded-2xl p-6 space-y-4 text-sm text-slate-700 leading-relaxed">
            <div className="flex gap-3">
              <Quote className="w-5 h-5 text-[#B04E2A] shrink-0 mt-0.5" />
              <p>
                Desde sus orígenes, la interpretación del patrimonio se concibió como una actividad
                <strong> relacional</strong>: su materia prima no es el objeto, sino el encuentro entre el objeto
                y la persona. Freeman Tilden (1957) la definió como "una actividad educativa que aspira a
                revelar significados y relaciones mediante el uso de objetos originales, por experiencia
                directa y por medios ilustrativos, en lugar de simplemente comunicar información fáctica".
                Esa revelación nunca es unidireccional: depende de <strong>qué significa el recurso para quien lo
                visita</strong>.
              </p>
            </div>
            <p>
              La tradición anglosajona de la disciplina lo ha dicho con claridad. Hammitt (1984), en su
              estudio pionero de los procesos cognitivos implicados en la interpretación ambiental,
              documentó que los visitantes no procesan la información de manera pasiva: la interpretan a
              partir de sus propios marcos mentales, experiencias previas y estados afectivos. Para
              Hammitt y Cole (1998), conocer al destinatario no es un refinamiento posterior al diseño de
              un programa interpretativo, sino una <strong>condición previa</strong>: si se ignora cómo piensa y
              siente el receptor, el mensaje "no existe" como tal, por muy rigurosa que sea la ciencia del
              recurso. En la misma línea, Beck y Cable (2002; 2018) levantaron la relevancia del visitante
              al rango de principio fundacional al afirmar que la interpretación debe "relacionar el
              sujeto con la vida del visitante", y que las técnicas fracasan si no se ajustan a los
              distintos públicos (niñez, adolescentes, adultos mayores y audiencias diversas).
            </p>
            <p>
              Este énfasis en el destinatario tiene una genealogía más amplia en la psicología y el
              diseño. Abraham Maslow (1943) mostró que la conducta humana es impulsada por una jerarquía
              de necesidades —fisiológicas, de seguridad, de pertenencia, de estima y de autorrealización—,
              y que un mismo bien satisface necesidades distintas según la persona y su momento de vida.
              Un cerro isla puede ser, para un mismo grupo familiar, un lugar de seguridad y juego para la
              niñez, de pertenencia para los adultos y de autorrealización para quien busca un desafío
              físico: la interpretación solo funciona si reconoce esa diversidad motivacional. La economía
              de la experiencia de Pine y Gilmore (1999) continuó esta línea al demostrar que los
              visitantes ya no compran bienes ni servicios sino <strong>experiencias memorables y personalizadas</strong>,
              y que el diseño de esas experiencias debe partir de los cuatro reinos (entretenimiento,
              educación, evasión y estética) que el propio visitante valora. Así, "conocer al usuario" pasó
              de ser una nota de pie de la interpretación a ser el corazón del diseño de experiencias
              turísticas contemporáneas.
            </p>
            <div className="relative rounded-2xl bg-[#14281C] text-white p-5 overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8A58B_1.4px,transparent_1.4px)] [background-size:22px_22px]" />
              <p className="relative text-sm leading-relaxed">
                <span className="text-[#E8A58B] font-bold">Síntesis: </span>
                conocer al destinatario es la condición de posibilidad de toda Oportunidad Interpretativa.
                Las metodologías de investigación de usuario —needfinding, entrevistas en profundidad y
                encuestas— son el puente operativo entre esta teoría y el diseño de la experiencia. Y los
                perfiles que construyen (buyer personas y arquetipos) son el instrumento concreto que
                traduce ese conocimiento en decisiones de interpretación.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white border border-[#E4D8BF] rounded-2xl p-5">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A] mb-3">De Maslow a la experiencia del turista</p>
              <div className="space-y-3 text-xs">
                {[
                  { anio: '1943', texto: 'Maslow: jerarquía de necesidades — la motivación humana es diversa y situacional.', icon: 'Maslow' },
                  { anio: '1957', texto: 'Tilden: la interpretación revela significados a partir de la experiencia del visitante.', icon: 'Tilden' },
                  { anio: '1984', texto: 'Hammitt: el visitante interpreta activamente con sus marcos cognitivos previos.', icon: 'Hammitt' },
                  { anio: '1999', texto: 'Pine & Gilmore: economía de la experiencia — el turista compra memorias, no servicios.', icon: 'P&E' },
                  { anio: '2002–2018', texto: 'Beck & Cable (Knudson): "relacionar con la vida del visitante" es principio fundacional.', icon: 'B&C' },
                  { anio: 'Hoy', texto: 'UX turística: perfiles, arquetipos y encuestas para diseñar cada detalle del viaje.', icon: 'UX' },
                ].map((item) => (
                  <div key={item.anio} className="flex gap-3 items-start">
                    <span className="w-14 shrink-0 text-[10px] font-extrabold text-[#B04E2A] pt-0.5">{item.anio}</span>
                    <p className="text-slate-600 leading-relaxed">{item.texto}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#B04E2A] to-[#7B2D26] text-white rounded-2xl p-5 space-y-2">
              <HeartHandshake className="w-5 h-5 text-amber-200" />
              <p className="text-sm font-bold font-['Cormorant_Garamond',Georgia,serif]">
                "Interpretación sin destinatario conocido es un monólogo"
              </p>
              <p className="text-xs text-orange-200 leading-relaxed">
                La pirámide de Maslow, los principios de Tilden y los textos de Hammitt confluyen en una
                misma lección: la excelencia interpretativa nace del conocimiento profundo de la persona.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BUYER PERSONAS Y ARQUETIPOS ===== */}
      <section className="bg-white border-y border-[#E4D8BF] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="flex items-center gap-3">
            <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md">
              <Users className="w-5 h-5" />
            </span>
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Perfiles de visitante</p>
              <h2 className="text-2xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
                Buyer personas y arquetipos del Valle del Maipo
              </h2>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-4">
            <div className="bg-[#F6F1E5] border border-[#E4D8BF] rounded-2xl p-5 text-sm text-slate-700 space-y-2">
              <p className="font-bold text-[#14281C] flex items-center gap-2">
                <Target className="w-4 h-4 text-[#B04E2A]" /> Buyer persona
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Perfil semificticio basado en datos reales (entrevistas y encuestas): nombre, edad, lugar de
                residencia, motivaciones, frustraciones, canales de información y estilo de viaje. Es una
                herramienta de precisión del marketing y el diseño de servicio: al "personificar" al segmento,
                el equipo interpreta para alguien concreto y no para una estadística.
              </p>
              <p className="text-[11px] text-slate-500 italic pt-1">
                Ejemplo: "Camila, 34, San Bernardo. Familia recreativa. Busca parques seguros con sombra,
                baños y senderos fáciles para sus dos hijos; descubre destinos por Instagram."
              </p>
            </div>
            <div className="bg-[#F6F1E5] border border-[#E4D8BF] rounded-2xl p-5 text-sm text-slate-700 space-y-2">
              <p className="font-bold text-[#14281C] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#B04E2A]" /> Arquetipos de viajero
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                Modelos reconocibles de motivación y comportamiento, útiles cuando aún no se tienen datos
                cuantitativos. En el sector del Maipo y su entorno periurbano destacan cuatro arquetipos
                a partir de la literatura de turismo y de observación de terreno. Cada uno sugiere una
                estrategia interpretativa distinta.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {ARQUETIPOS.map((a) => (
              <div key={a.nombre} className="rounded-2xl border border-[#E4D8BF] bg-white overflow-hidden flex flex-col">
                <div className={`bg-gradient-to-br ${a.color} text-white p-4`}>
                  <div className="text-3xl">{a.emoji}</div>
                  <p className="font-extrabold font-['Cormorant_Garamond',Georgia,serif] text-lg mt-1">{a.nombre}</p>
                </div>
                <div className="p-4 space-y-4 flex-1 text-xs">
                  <p className="text-[11px] text-slate-500 italic leading-relaxed">{a.frase}</p>
                  <div>
                    <p className="font-extrabold uppercase tracking-wider text-[10px] text-[#B04E2A] mb-1">Motivaciones</p>
                    <ul className="space-y-1 text-slate-600">
                      {a.motivaciones.map((m) => (
                        <li key={m} className="flex gap-1.5 items-start"><span className="mt-1 w-1 h-1 rounded-full bg-[#B04E2A] shrink-0" />{m}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-extrabold uppercase tracking-wider text-[10px] text-[#B04E2A] mb-1">En la encuesta</p>
                    <ul className="space-y-1 text-slate-600">
                      {a.senales.map((s) => (
                        <li key={s} className="flex gap-1.5 items-start"><span className="mt-1 w-1 h-1 rounded-full bg-[#1D3626] shrink-0" />{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-extrabold uppercase tracking-wider text-[10px] text-[#B04E2A] mb-1">Diseño interpretativo</p>
                    <ul className="space-y-1 text-slate-600">
                      {a.diseno.map((d) => (
                        <li key={d} className="flex gap-1.5 items-start"><span className="mt-1 w-1 h-1 rounded-full bg-emerald-600 shrink-0" />{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== METODOLOGÍAS DE INDAGACIÓN ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md">
            <MessagesSquare className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Investigar antes de interpretar</p>
            <h2 className="text-2xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              Metodologías de indagación con el usuario
            </h2>
          </div>
        </div>
        <p className="text-sm text-slate-600 max-w-4xl leading-relaxed mt-3 mb-8">
          Tres técnicas se complementan para conocer al destinatario: la observación con nuevas
          preguntas (needfinding), la conversación profunda (entrevistas en profundidad) y la medición
          a escala (encuestas). Encuestas y entrevistas son "la base" — pero el needfinding define qué
          preguntar.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {METODOLOGIAS.map((m) => (
            <div key={m.titulo} className="bg-white border border-[#E4D8BF] rounded-2xl p-5 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#14281C] text-[#E8A58B] grid place-items-center">{m.icon}</div>
              <div>
                <h3 className="font-extrabold text-[#14281C]">{m.titulo}</h3>
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#B04E2A]">({m.autores})</p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{m.resumen}</p>
              <ol className="space-y-1.5 text-xs text-slate-700 flex-1">
                {m.pasos.map((p, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-[#F6F1E5] border border-[#CDBA95] text-[#B04E2A] text-[10px] font-extrabold grid place-items-center">{i + 1}</span>
                    <span className="leading-relaxed">{p}</span>
                  </li>
                ))}
              </ol>
              <div className="rounded-xl bg-[#14281C]/5 border border-[#CDBA95] px-3 py-2 text-[10px] text-slate-500">
                Aporte: {m.icon} {m.titulo.split(' ')[0]} → información para perfiles y diseño.
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ENCUESTA ===== */}
      <section className="bg-gradient-to-br from-[#14281C] via-[#1D3626] to-[#2E4E37] text-white py-14 border-t border-[#2A4533]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#B04E2A] to-[#D97706] text-white grid place-items-center shadow-md">
                  <ClipboardList className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8A58B]">Instrumento listo para aplicar</p>
                  <h2 className="text-2xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
                    Encuesta de perfil y satisfacción: Valle del Maipo
                  </h2>
                </div>
              </div>
              <p className="text-sm text-slate-200 leading-relaxed max-w-2xl">
                La encuesta parte con <strong>datos demográficos y metodológicos</strong> (fecha, lugar,
                encuestador/a, comuna, edad, grupo de viaje) para dar rigor a la muestra; luego conecta
                <strong> motivaciones con tendencias</strong> de viaje (enoturismo, granjas educativas,
                gastronomía, kayak/aventura, senderismo) y las cruza con el <strong>territorio</strong> —
                Sur de Santiago, Cajón del Maipo y Valle del Maipo—, y continúa con
                <strong> preferencias por entornos</strong>, <strong>logística y ruta integrada</strong> y una
                <strong> evaluación de satisfacción</strong>. Está diseñada para aplicarse en terreno —en
                cerros isla, parques periurbanos, viñas y puntos de la ruta— tanto en papel como digital.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={encuestaUrl}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#B04E2A] to-[#D97706] hover:from-[#9A3F1E] hover:to-[#B45309] text-white text-sm font-bold rounded-2xl shadow-lg shadow-[#B04E2A]/30 transition-all"
                >
                  <Download className="w-4 h-4" />
                  Descargar encuesta (TXT)
                </a>
                <button
                  onClick={() => setMostrarEncuesta((v) => !v)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-sm font-bold rounded-2xl border border-white/20 transition-all"
                >
                  {mostrarEncuesta ? 'Ocultar encuesta' : 'Ver encuesta en pantalla'}
                </button>
              </div>

              {/* QR descarga móvil */}
              <div className="bg-white rounded-3xl p-5 flex flex-col sm:flex-row items-center gap-5 mt-4">
                <div className="bg-white p-3 rounded-2xl border border-[#E4D8BF] shadow-sm shrink-0">
                  <QRCodeSVG value={encuestaUrl} size={180} level="M" includeMargin={false} />
                </div>
                <div className="space-y-2 text-left">
                  <p className="text-[#14281C] font-extrabold flex items-center gap-2">
                    <ScanLine className="w-4 h-4 text-[#B04E2A]" />
                    Descarga directa al móvil
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Escanea este código con la cámara de tu celular y la encuesta se descargará
                    automáticamente a tu dispositivo, lista para imprimir, compartir o aplicar en terreno.
                  </p>
                  <p className="text-[10px] font-mono text-slate-500 break-all bg-[#F6F1E5] border border-[#E4D8BF] rounded-lg px-2 py-1">
                    {encuestaUrl}
                  </p>
                </div>
              </div>
            </div>

            {mostrarEncuesta && (
              <div className="bg-[#F6F1E5] text-slate-900 rounded-3xl p-5 sm:p-6 border border-[#E4D8BF] shadow-2xl">
                <pre className="whitespace-pre-wrap text-[11px] font-mono leading-relaxed text-slate-700 max-h-[560px] overflow-y-auto">
                  {`ENCUESTA DE PERFIL Y SATISFACCIÓN: VALLE DEL MAIPO Y SECTOR SUR
Marque con una X. Donde se indique "círculo", encierre TODAS las que apliquen.

I. DATOS DEMOGRÁFICOS Y METODOLÓGICOS

A1. Fecha de aplicación: ____ / ____ / ______
A2. Lugar de aplicación: ______________________
A3. Encuestador/a (si es asistida): ___________
A4. Comuna de residencia (1)
   [ ] Santiago centro/pericentral
   [ ] Sur de Santiago (San Bernardo, Buin, Pirque, C. de Tango, La Pintana, El Bosque…)
   [ ] Cordillera / Puente Alto-La Florida
   [ ] Otra comuna de la RM / Fuera de la RM
A5. Rango de edad (1)
   [ ] 15-24 [ ] 25-34 [ ] 35-44 [ ] 45-54 [ ] 55-64 [ ] 65+
A6. Género: [ ] F [ ] M [ ] No binario [ ] Prefiero no responder
A7. Nivel educativo (1)
   [ ] Básica/media incompleta [ ] Media completa
   [ ] Técnico [ ] Universitaria [ ] Postgrado
A8. Ocupación (1)
   [ ] Estudiante [ ] Dependiente [ ] Independiente/Emprende
   [ ] Dueña/o de casa [ ] Jubilado/a [ ] Cesante
A9. Grupo con el que sale (1)
   [ ] Solo/a [ ] Pareja [ ] Fam. con niños [ ] Fam. sin niños
   [ ] Amigos [ ] Grupo organizado

II. MOTIVACIONES Y TENDENCIAS (haga un círculo)

B1. Experiencias que le interesarían en este territorio (círculo):
   (1) Enoturismo / catas en bodegas
   (2) Granjas educativas (huertos, animales, talleres infantiles)
   (3) Gastronomía local y Km 0
   (4) Kayak / turismo aventura (rafting, canopy, MTB)
   (5) Senderismo / naturaleza (cerros isla, aves)
   (6) Ninguna

B2. Tendencias que explican su motivación (círculo):
   (1) Escapada fin de semana / turismo de proximidad
   (2) Experiencias educativas familiares
   (3) Desconexión y contacto con la naturaleza
   (4) Gastronomía local Km 0
   (5) Deporte y aventura
   (6) Paisaje / fotografía / redes sociales

B3. Motivación × Territorio (círculo en cada fila; puede marcar varios)
   S = Sur de Santiago · C = Cajón del Maipo · V = Valle del Maipo

   Experiencia            |   S |   C |   V
   -----------------------+-----+-----+-----
   Enoturismo             | [S] | [C] | [V]
   Granjas educativas     | [S] | [C] | [V]
   Gastronomía local      | [S] | [C] | [V]
   Kayak / tur. aventura  | [S] | [C] | [V]
   Senderismo / naturaleza| [S] | [C] | [V]

III. PERFIL DE VIAJE Y MOTIVACIÓN

1. Motivación principal del viaje (1)
   [ ] Desconexión del estrés urbano   [ ] Naturaleza y aire puro
   [ ] Tiempo en familia               [ ] Aprendizaje cultural/patrimonial
   [ ] Ejercicio y superación personal

2. Estilo de viajero (1)
   [ ] Explorador de Naturaleza   [ ] Enoturista / Winelover
   [ ] Familia Recreativa         [ ] Aventurero Activo

3. Actividades de interés en la zona (múltiple)
   [ ] Aventura (Rafting, Canopy…) [ ] Fotografía de naturaleza
   [ ] Flora/fauna y aves          [ ] Patrimonio histórico/cultural
   [ ] Artesanía y agroecología

IV. PREFERENCIAS POR ENTORNOS Y SERVICIOS

4. ¿Cómo percibe los Cerros Isla y parques periurbanos? (1)
   [ ] Deporte [ ] Contemplación [ ] Educación ambiental [ ] Encuentro social
5. Servicios indispensables (máx. 2)
   [ ] Senderos   [ ] Sombra/picnic [ ] Seguridad   [ ] Transporte público
   [ ] Baños/agua [ ] Tours guiados
6. ¿Qué busca en una viña del Valle del Maipo? (1)
   [ ] Lujo/descanso [ ] Aprendizaje del vino [ ] Historia/leyendas
   [ ] Ambiente familiar [ ] Maridaje y gastronomía criolla
7. Nivel de dificultad (1)
   [ ] Recreativo / amateur   [ ] Deportista / intensivo   [ ] No hago aventura

V. LOGÍSTICA, CONECTIVIDAD Y RUTA INTEGRADA

8. ¿Combinaría catas en Pirque/Buin con caminata en cerro isla el mismo día?
   [ ] Sí      [ ] No      [ ] Solo con transporte coordinado
9. Facilidad de desplazamiento entre comunas (1)
   [ ] Muy fácil  [ ] Aceptable  [ ] Difícil  [ ] Muy difícil
10. Experiencia INFALTABLE en la Ruta Integrada (1)
   [ ] Senderismo cerros isla  [ ] Bodega con cata
   [ ] Almuerzo gastronomía    [ ] Aventura (Rafting/Canopy/MTB)

VI. EVALUACIÓN DE SATISFACCIÓN (1 = Pésimo · 10 = Excelente)

   Señalética y facilidades en cerros isla y parques …… [  ]
   Estado y limpieza de espacios naturales / parques … [  ]
   Oferta gastronómica y enoturística ………………… [  ]
   Seguridad percibida en el destino …………………… [  ]
   Conectividad y transporte entre comunas …………… [  ]
   Información turística antes y durante el viaje …… [  ]

Respuestas anónimas y agregadas con fines de diseño de experiencias de
interpretación del patrimonio.
www.interpretaciondelpatrimonio.cl`}
                </pre>
              </div>
            )}
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
              Bibliografía (APA 7ª edición)
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
            El Viaje Por Chile · www.interpretaciondelpatrimonio.cl · Toolbox de interpretación del
            patrimonio — Análisis del usuario / destinatario.
          </p>
        </div>
      </section>

      {/* ===== CIERRE ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-4">
        <div className="bg-[#14281C] text-white rounded-3xl p-6 sm:p-8 border border-[#2A4533] shadow-lg overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8A58B_1.4px,transparent_1.4px)] [background-size:22px_22px]" />
          <div className="relative space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#B04E2A] to-[#D97706] grid place-items-center shadow-lg">
                <Compass className="w-5 h-5" />
              </span>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8A58B]">Cierre</p>
                <h2 className="text-xl sm:text-2xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
                  Del destinatario al diseño interpretativo
                </h2>
              </div>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed max-w-3xl">
              Conocer al destinatario no es un paso administrativo: es el acto interpretativo
              fundacional. Apliquen la encuesta, entrevisten en profundidad y observen sin ideas
              preconcebidas. Con esos datos construirán perfiles sólidos y elegirán la técnica adecuada.
              Solo entonces, (CD + CR) × TA = OI se cumplirá para cada visitante.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};