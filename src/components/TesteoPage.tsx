import React from 'react';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  Compass,
  Download,
  Eye,
  FileText,
  FlaskConical,
  Gauge,
  Lightbulb,
  ListChecks,
  MessageCircle,
  PenLine,
  Quote,
  Route,
  Scale,
  Sparkles,
  Target,
  X,
} from 'lucide-react';

interface TesteoPageProps {
  onBack: () => void;
  onOpenTour?: (tourId: string) => void;
  onOpenMatriz?: () => void;
  onOpenNormativas?: () => void;
}

type Foco = 'evalua' | 'mide';

const FOCO_META: Record<Foco, { label: string; clase: string }> = {
  evalua: { label: 'Evalúa', clase: 'bg-[#B04E2A] border-[#B04E2A] text-white' },
  mide: { label: 'Mide', clase: 'bg-[#2E4E37] border-[#2E4E37] text-white' },
};

const INSTRUMENTOS: {
  id: string;
  icono: React.ReactNode;
  nombre: string;
  clase: string;
  focos: Foco[];
  cuando: string;
  desc: string;
  ejemplo: { titulo: string; abierta?: string; cerrada?: string; nota?: string };
  tips: string[];
}[] = [
  {
    id: 'entrevista',
    icono: <MessageCircle className="w-5 h-5" />,
    nombre: 'Entrevista',
    clase: 'Evaluación en profundidad',
    focos: ['evalua'],
    cuando: 'Cuando la pregunta importante necesita profundidad y no un número.',
    desc: 'Es una conversación guiada, uno a uno, que se aplica después del recorrido. No interroga: presta atención. Busca comprender cómo se vivió la experiencia, y para eso exige un objetivo claro, una estructura pensada y tiempo suficiente para que la persona hable sin prisa. Su utilidad disminuye cuando lo que se busca son datos cuantificables.',
    ejemplo: {
      titulo: 'Ramal Talca–Constitución',
      abierta:
        'Cuando el tren bajaba la velocidad entre estaciones, ¿qué cambió en tu manera de mirar el valle?',
      nota: 'Una sola respuesta así puede revelar más que veinte puntajes.',
    },
    tips: [
      'Ordena el relato: quién llega, qué esperaba, qué vivió, qué se lleva y qué recomendaría.',
      'Trátala como una conversación guiada, respetuosa y enfocada en lo que se busca indagar.',
      'Úsala para interpretar; cede a la encuesta cuando el objetivo sea comparar.',
    ],
  },
  {
    id: 'encuesta',
    icono: <ClipboardList className="w-5 h-5" />,
    nombre: 'Encuesta',
    clase: 'Evaluación y medición',
    focos: ['evalua', 'mide'],
    cuando: 'Cuando hay que recoger muchas voces en poco tiempo, sin renunciar a la profundidad.',
    desc: 'Es el instrumento más versátil: se aplica generalmente al terminar la actividad y admite preguntas abiertas —para evaluar— o cerradas —para medir—, según la información que se busque levantar. Su virtud es la estructura: las mismas preguntas a todas las personas convierten opiniones distintas en información comparable y permiten reconocer patrones de comportamiento.',
    ejemplo: {
      titulo: 'Museo Interactivo del Mirador',
      abierta: '¿Qué fue lo que tocaste que no habrías tocado en un museo tradicional? ¿Por qué?',
      cerrada:
        'Del 1 al 10, ¿qué tan probable es que lleves a alguien a este museo mañana?',
      nota: 'La misma idea en dos formatos: una devuelve voz, la otra devuelve una escala.',
    },
    tips: [
      'Identificación básica del participante, experiencia vivida, satisfacción y un espacio libre para sugerencias.',
      'Responde siempre a un objetivo claro: cada pregunta debe poder usarse para decidir algo.',
      'Cierra preguntando siempre qué mejorarías; es la pregunta que más ajusta un prototipo.',
    ],
  },
  {
    id: 'cuestionario',
    icono: <ClipboardCheck className="w-5 h-5" />,
    nombre: 'Cuestionario',
    clase: 'Medición sistemática',
    focos: ['mide'],
    cuando: 'Cuando la comparación entre visitantes y entre salidas es el punto.',
    desc: 'Tiene la estructura de la encuesta, con la ventaja de que puede aplicarse en forma digital y diferida. Al llegar más tarde molesta menos: el visitante responde cuando la experiencia ya se ha sedimentado, y la información se tabula y analiza con facilidad. Es la vía natural para construir series comparables entre distintos usuarios.',
    ejemplo: {
      titulo: 'Turberas de Chiloé',
      cerrada:
        'Del 1 al 10, ¿qué tan claro te quedó que caminar sobre la turbera deja huella?',
      nota: 'Enviado esa misma noche, recoge la experiencia ya sedimentada.',
    },
    tips: [
      'Envíalo dentro de las 24 horas: después, el recuerdo ya no es el mismo.',
      'Mantén la misma escala en todas las salidas para que los datos se puedan comparar.',
      'Aprovecha la tabulación automática para dedicarle el tiempo a interpretar, no a contar.',
    ],
  },
  {
    id: 'tabla',
    icono: <ListChecks className="w-5 h-5" />,
    nombre: 'Tabla de cotejo',
    clase: 'Medición por observación',
    focos: ['mide'],
    cuando: 'Cuando hay que comprobar, sin interrumpir, que lo diseñado ocurrió en la realidad.',
    desc: 'Es el instrumento del observador. Se completa durante la propia ejecución de la experiencia y verifica el cumplimiento de criterios definidos previamente, sin necesidad de interactuar directamente con el visitante. Su trabajo es comparar la situación esperada —el diseño— con la efectivamente observada, y dejar por escrito las brechas y las desviaciones.',
    ejemplo: {
      titulo: 'Baños de bosque en Río Clarillo',
      cerrada:
        'Criterios: señalética legible en el acceso · tiempo real del tramo · información sobre la fragilidad del ecosistema · impacto observado en el playero.',
      nota: 'Puede apoyarse en la guía de evaluación de la experiencia del visitante (Subturismo, Sernatur y CONAF) y en el Manual de Diseño de Experiencias Turísticas de Sernatur, adaptados al contexto.',
    },
    tips: [
      'Define los criterios antes de salir; en terreno sólo se registra lo que se ve.',
      'Registra también lo no previsto: una tabla rígida no captura lo sorprendente.',
      'Úsala para contrastar lo prometido con lo vivido, sin molestar a quien recorre.',
    ],
  },
];

const RUTAS = [
  {
    id: 'tour-ramal-talca-constitucion-tren-del-vino',
    nombre: 'Ramal Talca–Constitución',
    territorio: 'Valle del Itata',
    evalua:
      'Si la lentitud del tren instala una lectura del paisaje que no existe a velocidad de auto.',
    mide:
      'Duración real del trayecto, comprensión del mensaje en el vagón y satisfacción con la hospitalidad a bordo.',
    instrumento: 'Entrevista al bajar del tren + tabla de cotejo de tiempos',
  },
  {
    id: 'tour-museo-interactivo-mirador',
    nombre: 'Museo Interactivo del Mirador',
    territorio: 'Santiago',
    evalua: 'Si tocar y jugar produce curiosidad genuina o sólo distracción.',
    mide:
      'Permanencia por sala, comprensión del mensaje y calidad percibida de la interacción.',
    instrumento: 'Encuesta de salida + cuestionario diferido',
  },
  {
    id: 'tour-parque-nacional-chiloe-turberas',
    nombre: 'Turberas de Chiloé',
    territorio: 'Parque Nacional Chiloé',
    evalua:
      'Si la fragilidad de la turbera queda grabada como imagen y no como una advertencia más.',
    mide:
      'Efecto de la señalética sobre la conducta real y huella observada fuera de los senderos.',
    instrumento: 'Tabla de cotejo + cuestionario digital posterior',
  },
  {
    id: 'tour-parque-nacional-rio-clarillo',
    nombre: 'Río Clarillo',
    territorio: 'Cordillera de los Andes',
    evalua: 'Si el silencio del bosque deja memoria o sólo deja frío.',
    mide:
      'Señalética, tiempos de tramo y percepción de seguridad y limpieza del entorno.',
    instrumento: 'Tabla de cotejo en recorrido + entrevista breve de salida',
  },
];

const CICLO = [
  {
    n: 1,
    icono: <Target className="w-5 h-5" />,
    titulo: 'Elegir qué se mira',
    desc: 'Identificar los componentes de la experiencia que pueden observarse y que de verdad informarán una decisión. No se evalúa todo: se evalúa lo que todavía está en juego.',
  },
  {
    n: 2,
    icono: <PenLine className="w-5 h-5" />,
    titulo: 'Diseñar el instrumento',
    desc: 'Escoger la herramienta que corresponde al objetivo y darle la estructura mínima para que el dato sirva. Un instrumento sin objetivo claro sólo produce ruido.',
  },
  {
    n: 3,
    icono: <Route className="w-5 h-5" />,
    titulo: 'Poner la experiencia en el mundo',
    desc: 'Ejecutar el prototipo aplicando los instrumentos definidos. El testeo ocurre con las personas adentro: sin terreno, el dato es una conjetura con formato.',
  },
  {
    n: 4,
    icono: <Gauge className="w-5 h-5" />,
    titulo: 'Leer los resultados',
    desc: 'Procesar y analizar lo recogido, transformando datos en información útil. La escala ordena; el relato explica. Un dato sin interpretación no orienta nada.',
  },
  {
    n: 5,
    icono: <Sparkles className="w-5 h-5" />,
    titulo: 'Ajustar antes de implementar',
    desc: 'Generar las adecuaciones y mejoras que el prototipo necesita antes de su versión definitiva. El testeo no juzga el diseño: lo afina. Después, el ciclo vuelve a empezar.',
  },
];

const CRITERIOS_TEMA = [
  {
    icono: <MessageCircle className="w-5 h-5" />,
    criterio: 'Es una oración completa',
    regla: 'Sujeto y verbo: una idea que se entiende y se lleva sola. No es un rótulo ni una frase nominal.',
    tipo: 'escritura',
  },
  {
    icono: <Target className="w-5 h-5" />,
    criterio: 'Responde al "¿y qué?" del público',
    regla:
      'Es la esencia del mensaje y explica por qué el recurso le importa a quien visita. Si no lo responde, es información, no interpretación.',
    tipo: 'escritura',
  },
  {
    icono: <PenLine className="w-5 h-5" />,
    criterio: 'Concisa y enunciable',
    regla:
      'Quince a veinte palabras como máximo, en presente y en lenguaje cotidiano: cabe en una pausa y se puede decir de viva voz.',
    tipo: 'escritura',
  },
  {
    icono: <Sparkles className="w-5 h-5" />,
    criterio: 'Verbos activos y visualizables',
    regla:
      'Evita el verbo "ser" y el sustantivo abstracto: la afirmación debe descansar en una acción que el visitante pueda imaginar.',
    tipo: 'escritura',
  },
  {
    icono: <BookOpen className="w-5 h-5" />,
    criterio: 'Análoga a un titular de prensa',
    regla:
      'Morales la compara con un titular: concisa, atractiva y provocadora, con verbos que inviten a seguir leyendo o caminando.',
    tipo: 'escritura',
  },
  {
    icono: <Eye className="w-5 h-5" />,
    criterio: 'Da cohesión a todo el mensaje',
    regla:
      'El relato, los medios y las paradas se ordenan en función del tema: el visitante sabe en todo momento de qué va la visita.',
    tipo: 'coherencia',
  },
  {
    icono: <CheckCircle2 className="w-5 h-5" />,
    criterio: 'Llega: se recuerda y se repite',
    regla:
      'Es el criterio de fondo. La evaluación comprueba qué recuerda, repite o se lleva el visitante (Morales): medir su retención es medir la eficacia de la interpretación.',
    tipo: 'resultado',
  },
];

const VEREDICTO_TEMA = [
  {
    ok: true,
    criterio: 'Es una oración completa',
    hallazgo:
      'Sí: "Pisar suave sobre la turbera" (sujeto) + "es la lección de Chiloé" (verbo). Se entiende sin contexto previo.',
  },
  {
    ok: true,
    criterio: 'Responde al "¿y qué?"',
    hallazgo:
      'Sí: conecta un gesto que todos hacemos —pisar— con la fragilidad del ecosistema.',
  },
  {
    ok: true,
    criterio: 'Concisa y enunciable',
    hallazgo: 'Veinte palabras exactas, dentro del rango, en presente y en voz alta.',
  },
  {
    ok: false,
    criterio: 'Verbos activos y visualizables',
    hallazgo:
      'No cumple: la afirmación descansa en la cópula "es". "Pisar suave" queda como una metáfora y no como una acción.',
  },
  {
    ok: true,
    criterio: 'Análoga a un titular de prensa',
    hallazgo:
      'Cumple en el tono, pero el punto y coma parte la frase en dos y debilita el titular.',
  },
  {
    ok: true,
    criterio: 'Da cohesión al mensaje',
    hallazgo:
      'Cumple: el relato del recorrido del turberal se organiza en torno a no dejar huella.',
  },
];

const RESULTADOS_TEMA = [
  {
    indicador: 'Recordación libre',
    desc: 'Enuncia el tema o su idea central sin ayuda ni opciones a la salida.',
    meta: '≥ 60%',
    instrumento: 'Entrevista de salida · pregunta abierta',
  },
  {
    indicador: 'Reconocimiento',
    desc: 'Identifica el tema entre cuatro frases distractoras de la misma ruta.',
    meta: '≥ 90%',
    instrumento: 'Cuestionario diferido',
  },
  {
    indicador: 'Transferencia',
    desc: 'Explica la idea con sus propias palabras y la ejemplo con algo del lugar.',
    meta: '≥ 50%',
    instrumento: 'Entrevista de salida',
  },
  {
    indicador: 'Retención a siete días',
    desc: 'Todavía recuerda la idea central del tema una semana después de la visita.',
    meta: '≥ 40%',
    instrumento: 'Cuestionario digital',
  },
  {
    indicador: 'Coherencia',
    desc: 'El relato, los medios y las paradas no contradicen el tema en ningún punto.',
    meta: '0 brechas',
    instrumento: 'Tabla de cotejo',
  },
];

export const TesteoPage: React.FC<TesteoPageProps> = ({ onBack, onOpenTour, onOpenMatriz, onOpenNormativas }) => {
  return (
    <div className="min-h-screen bg-[#F6F1E5] text-slate-900 pb-20 font-sans">
      {/* ===== Hero ===== */}
      <section className="relative bg-gradient-to-br from-[#14281C] via-[#1D3626] to-[#2E4E37] text-white overflow-hidden py-14 sm:py-20 px-4 sm:px-6 border-b border-[#2A4533]">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#E8A58B_1.4px,transparent_1.4px)] [background-size:22px_22px]" />
        <div className="absolute -right-12 -top-12 w-56 h-56 rounded-full bg-[#B04E2A]/25 blur-3xl" />

        <div className="relative max-w-5xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#E8A58B] border border-[#B04E2A]/40 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              <FlaskConical className="w-4 h-4" />
              Diseño de experiencias · Testeo
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
            Poner la experiencia{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A58B] via-[#D97A46] to-[#FBBF24]">
              a hablar
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            Ninguna experiencia turística se prueba sentada en una sala. Se prueba cuando el visitante entra al
            territorio, y es ahí —en el relato, en el tiempo, en el silencio, en la hospitalidad— donde se puede{' '}
            <strong className="text-white">escuchar lo que el diseño todavía no había dicho</strong>. Esta página
            reúne las herramientas para ese momento: las que <strong className="text-white">escuchan</strong> y las
            que <strong className="text-white">miden</strong>.
          </p>
        </div>
      </section>

      {/* ===== Evaluar y medir ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md">
            <Scale className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">
              Antes de salir a terreno
            </p>
            <h2 className="text-2xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              Dos preguntas antes de la primera pregunta
            </h2>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-[#E4D8BF] shadow-lg p-6 sm:p-8 space-y-4 max-w-4xl mb-8">
          <p className="text-sm text-slate-700 leading-relaxed">
            Evaluar un prototipo es <strong>analizar su desempeño mientras ocurre</strong>, contrastando lo que se
            observa con las expectativas que se definieron para la experiencia. Sirve para descubrir qué funciona,
            qué debe ajustarse y qué decisiones conviene tomar antes de la implementación definitiva. Por eso lo
            primero no es elegir una herramienta, sino <strong>reconocer los componentes más relevantes</strong>:
            aquellos que pueden observarse en terreno y que aportan información clave para mejorarla.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Y hay una distinción que ordena todo el trabajo. La <strong>evaluación</strong> recoge información
            cualitativa —percepción del usuario y observación directa—, y devuelve un relato subjetivo y
            contextual: cómo se vive la experiencia, dónde están sus fortalezas y dónde se abre una oportunidad de
            mejora. La <strong>medición</strong> aplica métodos cuantitativos para obtener datos objetivos sobre
            aspectos específicos, y con ellos permite comparar, refinar y decidir con precisión. Ambos se apoyan
            en los mismos fenómenos —satisfacción, hospitalidad, limpieza, seguridad, experiencia general, y
            también el impacto ambiental o los aspectos económicos—, y lo que cambia es{' '}
            <strong>el instrumento que se usa para levantarlos</strong>. Elegir mal la herramienta es la forma más
            común de perder información que ya estaba en el territorio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <article className="bg-white rounded-3xl border border-[#E4D8BF] shadow-sm hover:shadow-lg transition-all p-6 sm:p-7 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B04E2A] text-white text-[10px] font-extrabold uppercase tracking-widest">
                <Eye className="w-3.5 h-3.5" />
                Evalúa
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                Cualitativo
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif] leading-snug">
              La voz de quien recorrió
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Pregunta por la <strong>percepción</strong> y por la <strong>observación directa</strong>. Devuelve
              información subjetiva y contextual: el asombro que no estaba previsto, la parte del discurso que no se
              entendió, el gesto que delató interés donde el diseño sólo había puesto información.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed border-l-4 border-[#E8A58B] pl-3">
              En el Museo Interactivo, evaluar fue descubrir que las familias no recordaban la sala de láseres
              sino el olor del taller de construcción.
            </p>
          </article>

          <article className="bg-white rounded-3xl border border-[#E4D8BF] shadow-sm hover:shadow-lg transition-all p-6 sm:p-7 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E4E37] text-white text-[10px] font-extrabold uppercase tracking-widest">
                <Gauge className="w-3.5 h-3.5" />
                Mide
              </span>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">
                Cuantitativo
              </span>
            </div>
            <h3 className="text-xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif] leading-snug">
              La huella de lo que ocurrió
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Traduce la experiencia en <strong>cifras</strong> que pueden compararse entre salidas, entre meses y
              entre versiones del prototipo. Permite ajustar con precisión, en lugar de mejorar a intuición lo que
              un dato ya puede responder por sí solo.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed border-l-4 border-[#8FBC94] pl-3">
              En las turberas de Chiloé, medir fue contar cuántos visitantes se salían del sendero al ver la
              señalética: un dato que ningún relato habría cuantificado con precisión.
            </p>
          </article>
        </div>
      </section>

      {/* ===== Instrumentos ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md">
            <Compass className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">
              Las herramientas
            </p>
            <h2 className="text-2xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              Cuatro instrumentos para escuchar una experiencia
            </h2>
          </div>
        </div>

        <p className="text-sm text-slate-600 max-w-4xl leading-relaxed mb-6">
          Ninguno es mejor que otro: son cuatro maneras distintas de acercarse al mismo fenómeno. La elección depende
          de la pregunta que se quiere responder y del tipo de dato que hace falta para decidir.
        </p>

        <div className="grid lg:grid-cols-2 gap-5">
          {INSTRUMENTOS.map((inst) => (
            <article
              key={inst.id}
              className="bg-white rounded-3xl border border-[#E4D8BF] shadow-sm hover:shadow-lg hover:border-[#B04E2A]/40 transition-all overflow-hidden flex flex-col"
            >
              <div className="flex items-start gap-3 p-5 sm:p-6 border-b border-[#E4D8BF] bg-[#FBF8F1]">
                <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md flex-shrink-0">
                  {inst.icono}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif] leading-snug">
                    {inst.nombre}
                  </h3>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#B04E2A] mt-0.5">
                    {inst.clase}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-1.5 leading-relaxed">{inst.cuando}</p>
                </div>
                <div className="flex flex-col gap-1 flex-shrink-0">
                  {inst.focos.map((f) => (
                    <span
                      key={f}
                      className={`px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider border ${FOCO_META[f].clase}`}
                    >
                      {FOCO_META[f].label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col">
                <p className="text-sm text-slate-600 leading-relaxed">{inst.desc}</p>

                <div className="rounded-2xl bg-[#F6F1E5] border border-[#E4D8BF] p-4 space-y-2">
                  <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A] flex items-center gap-1.5">
                    <FileText className="w-3 h-3" />
                    Ejemplo en la plataforma
                  </p>
                  <p className="text-[11px] font-bold text-slate-500">{inst.ejemplo.titulo}</p>
                  {inst.ejemplo.abierta && (
                    <p className="text-xs text-slate-700 leading-relaxed italic border-l-2 border-[#E8A58B] pl-3">
                      <span className="not-italic font-extrabold text-[#B04E2A] text-[10px] uppercase tracking-wider mr-1.5">
                        Abierta
                      </span>
                      {inst.ejemplo.abierta}
                    </p>
                  )}
                  {inst.ejemplo.cerrada && (
                    <p className="text-xs text-slate-700 leading-relaxed border-l-2 border-[#8FBC94] pl-3">
                      <span className="font-extrabold text-[#2E4E37] text-[10px] uppercase tracking-wider mr-1.5">
                        Cerrada
                      </span>
                      {inst.ejemplo.cerrada}
                    </p>
                  )}
                  {inst.ejemplo.nota && (
                    <p className="text-[11px] text-slate-500 leading-relaxed pt-1">{inst.ejemplo.nota}</p>
                  )}
                </div>

                <ul className="space-y-2 mt-auto pt-2">
                  {inst.tips.map((t, ti) => (
                    <li key={ti} className="flex gap-2 text-xs text-slate-600 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#3F6B4A] flex-shrink-0 mt-px" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== El tema interpretativo según Morales ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md">
            <Quote className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">
              Caso de estudio · Jorge Morales
            </p>
            <h2 className="text-2xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              Cómo se evalúa un tema interpretativo
            </h2>
          </div>
        </div>

        <p className="text-sm text-slate-600 max-w-4xl leading-relaxed mb-6">
          De los cuatro instrumentos, hay uno que no se aplica al servicio sino al <strong>mensaje</strong>. Si el
          tema interpretativo es el núcleo cognitivo de una experiencia —la idea que el visitante debe llevarse
          grabada—, entonces <strong>evaluar el tema es medir la eficacia de la interpretación</strong>, y esa
          medición tiene una metodología y una literatura propia.
        </p>

        {/* Referencia */}
        <div className="bg-gradient-to-r from-[#14281C] to-[#2E4E37] text-white rounded-3xl shadow-xl p-6 sm:p-8 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B04E2A]/30 text-[#E8A58B] text-[10px] font-extrabold uppercase tracking-widest border border-[#B04E2A]/50 mb-3">
            <BookOpen className="w-3 h-3" />
            La referencia
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold font-['Cormorant_Garamond',Georgia,serif] max-w-3xl">
            Jorge Morales Miranda: la metodología del tema en castellano
          </h3>
          <p className="text-sm text-[#E4D8BF] max-w-3xl mt-3 leading-relaxed">
            Morales es nuestra guía principal: define la <strong>oración-tema</strong> —el punto principal del
            mensaje que el público debe recordar— y fija sus propiedades. Su aporte no es un dato nuevo: es el
            criterio que permite decidir si la interpretación funcionó.
          </p>
          <div className="mt-5 space-y-2.5">
            <p className="text-sm text-[#F6F1E5] leading-relaxed border-l-4 border-[#E8A58B] pl-4">
              «El tema debe responder al ¿y qué? del público: ser la esencia del mensaje, formulada como una oración
              completa, análoga a un titular de prensa.»
              <span className="block mt-1 text-[11px] text-[#CDD9CF]">
                Morales Miranda, J. (2001). <em>Guía práctica para la interpretación del patrimonio</em> (2.ª ed.).
                Junta de Andalucía.
              </span>
            </p>
            <p className="text-sm text-[#F6F1E5] leading-relaxed border-l-4 border-[#E8A58B] pl-4">
              La evaluación comprueba si el tema llegó: qué recuerda, repite o se lleva el visitante.
              <span className="block mt-1 text-[11px] text-[#CDD9CF]">
                Criterio de cierre del método de interpretación temática, recogido por la plataforma en{' '}
                <em>Interpretación temática</em>.
              </span>
            </p>
          </div>
          <div className="mt-5 grid sm:grid-cols-3 gap-2.5">
            {[
              { n: '1992', t: 'Manual para la interpretación ambiental en áreas silvestres protegidas', a: 'FAO/PNUMA, Santiago de Chile' },
              { n: '1998 · 2001', t: 'Guía práctica para la interpretación del patrimonio', a: 'Junta de Andalucía, 2.ª ed.' },
              { n: '2008', t: '¿A qué interpretación nos referimos?', a: 'Boletín de Interpretación, AIP (con S. Ham)' },
            ].map((o) => (
              <div key={o.n} className="bg-white/5 border border-white/10 rounded-2xl p-3.5">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8A58B]">{o.n}</p>
                <p className="text-[11px] text-[#F6F1E5] leading-snug mt-1">{o.t}</p>
                <p className="text-[10px] text-[#CDD9CF] mt-1">{o.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Su metodología, en dos niveles */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <article className="bg-white rounded-3xl border border-[#E4D8BF] shadow-sm p-6 space-y-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14281C] text-white text-[10px] font-extrabold uppercase tracking-widest">
              <PenLine className="w-3.5 h-3.5" />
              Nivel 1 · Escritura
            </span>
            <h4 className="text-lg font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              ¿El tema está bien escrito?
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Se verifica sobre el texto, antes de publicar nada, contra los criterios de Morales. Es una revisión de
              mesa: rápida, gratuita y con alta capacidad de corregir. Si el tema falla aquí, todo el testeo posterior
              estará midiendo un mensaje defectuoso.
            </p>
          </article>
          <article className="bg-white rounded-3xl border border-[#E4D8BF] shadow-sm p-6 space-y-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B04E2A] text-white text-[10px] font-extrabold uppercase tracking-widest">
              <Gauge className="w-3.5 h-3.5" />
              Nivel 2 · Llegada
            </span>
            <h4 className="text-lg font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              ¿El tema llegó al visitante?
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Se mide en terreno, con los mismos instrumentos de esta página: entrevista, encuesta, cuestionario y
              tabla de cotejo aplicados a la pregunta "¿qué recuerdas de esto?". Un tema perfecto que nadie recuerda
              es un tema que no hizo su trabajo.
            </p>
          </article>
        </div>

        {/* Criterios de escritura */}
        <div className="mb-6">
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A] mb-3">
            Los criterios de verificación, según Morales
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {CRITERIOS_TEMA.map((c) => (
              <div
                key={c.criterio}
                className="bg-white rounded-2xl border border-[#E4D8BF] shadow-sm p-4 space-y-2 flex flex-col"
              >
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center flex-shrink-0">
                    {c.icono}
                  </span>
                  <span
                    className={`ml-auto px-2 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wider border ${
                      c.tipo === 'resultado'
                        ? 'bg-[#B04E2A] border-[#B04E2A] text-white'
                        : c.tipo === 'coherencia'
                          ? 'bg-[#D97706] border-[#D97706] text-white'
                          : 'bg-[#F6F1E5] border-[#E4D8BF] text-slate-500'
                    }`}
                  >
                    {c.tipo}
                  </span>
                </div>
                <p className="text-xs font-extrabold text-[#14281C] leading-snug">{c.criterio}</p>
                <p className="text-[11px] text-slate-600 leading-relaxed flex-1">{c.regla}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ejemplo trabajado */}
        <div className="bg-white rounded-3xl border border-[#E4D8BF] shadow-xl overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-[#14281C] to-[#2E4E37] text-white p-6 sm:p-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B04E2A]/30 text-[#E8A58B] text-[10px] font-extrabold uppercase tracking-widest border border-[#B04E2A]/50 mb-3">
              <FileText className="w-3 h-3" />
              Ejemplo trabajado
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
              Turberas de Chiloé · tema en revisión
            </h3>
            <p className="text-xs text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Aplicamos el Nivel 1 al tema real de la audioguía de las turberas, sin más contexto que sus propios
              criterios.
            </p>
            <p className="mt-4 text-sm sm:text-base text-[#F6F1E5] italic leading-relaxed border-l-4 border-[#E8A58B] pl-4 max-w-3xl">
              «Pisar suave sobre la turbera es la lección de Chiloé: el paisaje más frágil enseña a caminar sin dejar
              huella.»
            </p>
          </div>

          <div className="p-5 sm:p-8 space-y-6">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A] mb-3">
                Veredicto por criterio
              </p>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {VEREDICTO_TEMA.map((v) => (
                  <div
                    key={v.criterio}
                    className={`rounded-2xl border p-4 ${
                      v.ok ? 'bg-[#F6F9F4] border-[#CFE0CC]' : 'bg-[#FBF1EC] border-[#E8C4B4]'
                    }`}
                  >
                    <div className="flex items-start gap-2.5">
                      <span
                        className={`w-6 h-6 rounded-full grid place-items-center flex-shrink-0 mt-px ${
                          v.ok ? 'bg-[#3F6B4A] text-white' : 'bg-[#B04E2A] text-white'
                        }`}
                      >
                        {v.ok ? (
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        ) : (
                          <X className="w-3.5 h-3.5" />
                        )}
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-extrabold text-[#14281C] leading-snug">
                          {v.criterio}
                          <span
                            className={`ml-2 text-[9px] font-extrabold uppercase tracking-wider ${
                              v.ok ? 'text-[#3F6B4A]' : 'text-[#B04E2A]'
                            }`}
                          >
                            {v.ok ? 'Cumple' : 'No cumple'}
                          </span>
                        </p>
                        <p className="text-[11px] text-slate-600 leading-relaxed mt-1">{v.hallazgo}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-[#F6F1E5] border border-[#E4D8BF] p-5 space-y-3">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">
                Tema revisado según los criterios
              </p>
              <p className="text-sm sm:text-base text-[#14281C] italic leading-relaxed border-l-4 border-[#B04E2A] pl-4">
                «Pisar suave sobre la turbera enseña a caminar sin dejar huella en el paisaje más frágil de Chiloé.»
              </p>
              <div className="grid sm:grid-cols-3 gap-2.5 pt-1">
                {[
                  { k: '18 palabras', v: 'dentro del rango de 15 a 20' },
                  { k: 'Verbo activo', v: '"enseña": una acción visualizable' },
                  { k: 'Una sola cláusula', v: 'sin punto y coma que parta el titular' },
                ].map((x) => (
                  <div key={x.k} className="bg-white border border-[#E4D8BF] rounded-xl px-3 py-2">
                    <p className="text-[11px] font-extrabold text-[#2E4E37]">{x.k}</p>
                    <p className="text-[10px] text-slate-500 leading-snug mt-0.5">{x.v}</p>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed pt-1">
                Se conserva el contenido y el concepto universal —la fragilidad que enseña a cuidar— y sólo se
                cambia la forma. Ése es el orden correcto: primero se arregla el texto, después se mide.
              </p>
            </div>
          </div>
        </div>

        {/* Resultados esperados */}
        <div className="bg-[#14281C] text-[#F6F1E5] rounded-3xl p-6 sm:p-8">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-11 h-11 rounded-2xl bg-white/10 text-[#E8A58B] grid place-items-center flex-shrink-0">
              <Gauge className="w-5 h-5" />
            </span>
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8A58B]">
                Resultados esperados
              </p>
              <h3 className="text-xl sm:text-2xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
                Qué debe devolver un testeo de tema bien hecho
              </h3>
            </div>
          </div>
          <p className="text-sm text-[#E4D8BF] max-w-3xl leading-relaxed mb-5">
            Morales entrega el <strong className="text-white">criterio</strong> —si el tema llegó o no—. Los umbrales
            concretos son los que la plataforma propone para sus rutas: son metas de trabajo, no cifras del autor,
            y se ajustan según el tamaño del grupo y el tipo de visita.
          </p>
          <div className="space-y-2">
            {RESULTADOS_TEMA.map((r) => (
              <div
                key={r.indicador}
                className="grid sm:grid-cols-[1fr_auto] gap-3 items-center bg-white/5 border border-white/10 rounded-2xl p-4"
              >
                <div className="min-w-0">
                  <p className="text-sm font-extrabold text-white leading-snug">{r.indicador}</p>
                  <p className="text-[11px] text-[#CDD9CF] leading-relaxed mt-0.5">{r.desc}</p>
                  <p className="text-[10px] text-[#E8A58B] uppercase tracking-wider font-bold mt-1.5">
                    {r.instrumento}
                  </p>
                </div>
                <span className="font-['Cormorant_Garamond',Georgia,serif] text-2xl font-semibold text-[#E8A58B] whitespace-nowrap self-center">
                  {r.meta}
                </span>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#E4D8BF] leading-relaxed mt-5 border-l-4 border-[#E8A58B] pl-4">
            El resultado más valioso, sin embargo, no es una cifra: es <strong className="text-white">la frase
            exacta que el visitante repite</strong>. Esa frase es la prueba de que el tema se árrancó del relato y
            pasó a ser del visitante.
          </p>
        </div>
      </section>

      {/* ===== Aplicado a las rutas ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="bg-white rounded-3xl border border-[#E4D8BF] shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#14281C] to-[#2E4E37] text-white p-6 sm:p-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B04E2A]/30 text-[#E8A58B] text-[10px] font-extrabold uppercase tracking-widest border border-[#B04E2A]/50 mb-3">
              <BookOpen className="w-3 h-3" />
              Del papel al territorio
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
              El testeo aplicado a las rutas de la plataforma
            </h2>
            <p className="text-xs text-slate-300 mt-2 max-w-2xl leading-relaxed">
              Cada audioguía de <em>El Viaje por Chile</em> tiene algo distinto que poner a prueba. Estos son los
              componentes que conviene observar y evaluar en cada una, con el instrumento que mejor encaja.
            </p>
          </div>

          <div className="p-5 sm:p-8 grid gap-3">
            {RUTAS.map((r) => (
              <button
                key={r.id}
                type="button"
                onClick={() => onOpenTour && onOpenTour(r.id)}
                disabled={!onOpenTour}
                className="group grid sm:grid-cols-[1fr_auto] gap-3 items-center p-4 sm:p-5 rounded-2xl bg-[#F6F1E5] border border-[#E4D8BF] hover:border-[#B04E2A] hover:shadow-lg transition-all text-left disabled:hover:border-[#E4D8BF] disabled:hover:shadow-none disabled:cursor-default"
              >
                <span className="min-w-0 space-y-2">
                  <span className="flex flex-wrap items-center gap-2">
                    <span className="font-['Cormorant_Garamond',Georgia,serif] text-lg sm:text-xl font-semibold text-[#14281C] leading-snug group-hover:text-[#B04E2A] transition-colors">
                      {r.nombre}
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-white border border-[#E4D8BF] text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {r.territorio}
                    </span>
                  </span>
                  <span className="block text-xs text-slate-600 leading-relaxed">
                    <span className="font-extrabold text-[#B04E2A]">Evaluar: </span>
                    {r.evalua}
                  </span>
                  <span className="block text-xs text-slate-600 leading-relaxed">
                    <span className="font-extrabold text-[#2E4E37]">Medir: </span>
                    {r.mide}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-[#E4D8BF] text-[11px] font-semibold text-slate-600 mt-1">
                    <FileText className="w-3 h-3 text-[#B04E2A]" />
                    {r.instrumento}
                  </span>
                </span>
                {onOpenTour && (
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#B04E2A] text-white text-[11px] font-bold uppercase tracking-wider group-hover:bg-[#9A3F1E] transition-colors whitespace-nowrap justify-center self-center">
                    Abrir ruta
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Ciclo ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md">
            <Lightbulb className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">El método</p>
            <h2 className="text-2xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              El ciclo del testeo, en cinco tiempos
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CICLO.map((c) => (
            <article
              key={c.n}
              className="bg-white rounded-3xl border border-[#E4D8BF] shadow-sm hover:shadow-lg hover:border-[#B04E2A]/40 transition-all p-5 space-y-3 flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md">
                  {c.icono}
                </span>
                <span className="font-['Cormorant_Garamond',Georgia,serif] text-3xl font-semibold text-[#E4D8BF] leading-none">
                  {String(c.n).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-sm font-extrabold text-[#14281C] leading-snug">{c.titulo}</h3>
              <p className="text-xs text-slate-600 leading-relaxed flex-1">{c.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-6 bg-[#14281C] text-[#F6F1E5] rounded-3xl px-6 sm:px-8 py-7 flex flex-col sm:flex-row gap-5 sm:items-center">
          <Quote className="w-8 h-8 text-[#E8A58B] flex-shrink-0" />
          <p className="text-sm sm:text-base leading-relaxed text-[#E4D8BF] flex-1">
            El ciclo no se cierra: al ajustar y volver a salir a terreno, la segunda vuelta ya no prueba la misma
            experiencia. Como en la <strong className="text-white">interpretación del patrimonio</strong>,{' '}
            <em className="text-[#E8A58B]">el diseño del mensaje nunca es definitivo</em>: se afina en el encuentro
            con quien lo recorre.
          </p>
        </div>
      </section>

      {/* ===== Nota y referencias ===== */}
      <section className="bg-[#14281C] text-[#F6F1E5] py-12 px-4 sm:px-6 border-t border-[#2A4533]">
        <div className="max-w-7xl mx-auto space-y-5">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-['Cormorant_Garamond',Georgia,serif] max-w-md">
            Instrumentos de referencia
          </h3>
          <p className="text-sm text-[#E4D8BF] max-w-3xl leading-relaxed">
            El diseño de la tabla de cotejo y de los instrumentos de evaluación se apoya en la{' '}
            <strong className="text-white">guía de evaluación de la experiencia del visitante</strong> elaborada por
            Parks Canada y adaptada en Chile por la Subsecretaría de Turismo, Sernatur y la{' '}
            <strong className="text-white">CONAF</strong>, y en el{' '}
            <strong className="text-white">Manual de Diseño de Experiencias Turísticas</strong> del Sernatur. Ambos
            documentos se pueden descargar aquí y adaptarse al contexto del prototipo. La plataforma incluye además
            la <strong className="text-white">Matriz de Riesgo IPER</strong> para el componente de seguridad y la{' '}
            <strong className="text-white">biblioteca normativa</strong> para el cumplimiento legal del recorrido:
            dimensiones que nunca deben quedar fuera de un buen testeo.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="/pdf/guia-evaluacion-experiencia-del-visitante-subturismo-sernatur-conaf.pdf"
              download
              className="group flex flex-col gap-2 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#E8A58B]/60 p-5 transition-colors"
            >
              <Download className="w-5 h-5 text-[#E8A58B] group-hover:scale-110 transition-transform" />
              <span className="text-sm font-bold text-white leading-snug">
                Guía de evaluación de la experiencia del visitante
              </span>
              <span className="text-xs text-[#E4D8BF] leading-relaxed">
                Texto de Parks Canada adaptado por Subsecretaría de Turismo, Sernatur y CONAF. 1.ª ed., diciembre 2017
                · 36 pp.
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8A58B] mt-1">
                Descargar PDF · 10,1 MB
              </span>
            </a>

            <a
              href="/pdf/sernatur-manual-diseno-experiencias-turisticas.pdf"
              download
              className="group flex flex-col gap-2 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#E8A58B]/60 p-5 transition-colors"
            >
              <Download className="w-5 h-5 text-[#E8A58B] group-hover:scale-110 transition-transform" />
              <span className="text-sm font-bold text-white leading-snug">
                Manual de Diseño de Experiencias Turísticas
              </span>
              <span className="text-xs text-[#E4D8BF] leading-relaxed">
                Sernatur, Subdirección de Desarrollo. Metodología de diseño de la oferta turística diversificada,
                sustentable y de calidad · 104 pp.
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8A58B] mt-1">
                Descargar PDF · 7,6 MB
              </span>
            </a>

            <button
              onClick={onOpenMatriz}
              disabled={!onOpenMatriz}
              className="group flex flex-col gap-2 text-left rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#E8A58B]/60 p-5 transition-colors disabled:opacity-60 disabled:cursor-default"
            >
              <Scale className="w-5 h-5 text-[#E8A58B] group-hover:scale-110 transition-transform" />
              <span className="text-sm font-bold text-white leading-snug">Matriz de Riesgo IPER</span>
              <span className="text-xs text-[#E4D8BF] leading-relaxed">
                Evaluación de peligros, riesgos y controles para el componente de seguridad del recorrido.
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8A58B] mt-1">
                Abrir en la plataforma
              </span>
            </button>

            <button
              onClick={onOpenNormativas}
              disabled={!onOpenNormativas}
              className="group flex flex-col gap-2 text-left rounded-2xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#E8A58B]/60 p-5 transition-colors disabled:opacity-60 disabled:cursor-default"
            >
              <FileText className="w-5 h-5 text-[#E8A58B] group-hover:scale-110 transition-transform" />
              <span className="text-sm font-bold text-white leading-snug">Biblioteca normativa</span>
              <span className="text-xs text-[#E4D8BF] leading-relaxed">
                NCh, resoluciones del Sernatur y reglamentos vigentes para el cumplimiento legal del tour.
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#E8A58B] mt-1">
                Abrir en la plataforma
              </span>
            </button>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B04E2A] hover:bg-[#9A3F1E] text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              Volver a la plataforma
            </button>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/15 text-[#E4D8BF] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#E8A58B]" />
              El Viaje por Chile
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
