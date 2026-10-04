import React, { useRef, useState } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'motion/react';
import {
  ArrowRight,
  Target,
  Layers,
  Compass,
  Feather,
  Sparkles,
  PenLine,
  MessageSquare,
  Brain,
  Lightbulb,
  Quote,
  Users,
  ListChecks,
  ClipboardCheck,
  Globe,
  Mountain,
  Waves,
  Star,
  Route,
  Pin,
  Heart,
  Puzzle,
  ShoppingBag,
  MapPin,
  BookOpen,
} from 'lucide-react';

interface TematicaInterpretacionProps {
  onBack: () => void;
}

const TORA = [
  { icon: <Target className="w-5 h-5" />, t: 'Temática', a: 'Se construye en torno a una idea principal —el tema u oración-tema— que da cohesión a todo el mensaje y que el público debe recordar. Sin tema no hay interpretación temática.' },
  { icon: <Layers className="w-5 h-5" />, t: 'Organizada', a: 'El mensaje se presenta con una estructura fácil de seguir: un principio, un desarrollo y un final. La información se organiza en pocas ideas (idealmente, cuatro o menos) que la mente pueda retener y ordenar.' },
  { icon: <Sparkles className="w-5 h-5" />, t: 'Relevante', a: 'Toca el ego del visitante: conecta el recurso con lo que le importa y con su propia experiencia. Ham la llama la “vitamina R”: la relevancia personal es lo que sostiene la atención en una audiencia no cautiva.' },
  { icon: <Heart className="w-5 h-5" />, t: 'Amena', a: 'Es disfrutable: emotiva, variada, entretenida. Lo ameno no es un adorno sino una condición de la efectividad: el entretenimiento mantiene viva la atención el tiempo que toma dejar el mensaje.' },
];

const PASOS = [
  { n: 1, icon: <Route className="w-5 h-5" />, t: 'Del tópico al tema', a: 'Primero se define el tópico, el motivo general (una frase nominal: “los bosques de alerce”). Luego se formula el tema: una oración completa —sujeto y verbo— que afirma qué quiere el público llevarse a casa.' },
  { n: 2, icon: <MessageSquare className="w-5 h-5" />, t: 'Preguntar el “y qué”', a: 'El tema responde a la pregunta que el visitante hace en silencio: “¿y qué?”, “¿y a mí qué?”. Si no lo responde, es información, no interpretación. Ham lo resume con la prueba del Big Deal: “es realmente importante que entienda que…”' },
  { n: 3, icon: <PenLine className="w-5 h-5" />, t: 'Redactar la oración-tema', a: 'Se escribe como un titular de prensa, con lenguaje cotidiano, en presente de vos dicho: 15 a 20 palabras máximo, con un concepto universal, evitando el verbo “ser” y eligiendo verbos activos que se puedan visualizar.' },
  { n: 4, icon: <Puzzle className="w-5 h-5" />, t: 'Empaquetar el mensaje', a: 'Con el tema claro se elige el formato de empaquetado temático de Ham: paquete único (un solo tema), paquetes en serie (varios temas sucesivos) o paquetes anidados (temas anidados bajo un tema global).' },
  { n: 5, icon: <ListChecks className="w-5 h-5" />, t: 'Estructurar el guion', a: 'El desarrollo sigue un formato reconocible —sándwich (tema al inicio y al final), emergente (el tema se revela al cierre) o implícito (se refuerza sin frase literal)— para que el público siga el hilo sin perderse.' },
  { n: 6, icon: <ClipboardCheck className="w-5 h-5" />, t: 'Evaluar “qué queda del tema”', a: 'La evaluación comprueba si el tema llegó: qué recuerda, repite o se lleva el visitante (Morales). El tema es el núcleo cognitivo del mensaje; medir su retención es medir la eficacia de la interpretación.' },
];

const COMPONENTES_TEMA = [
  { icon: <MessageSquare className="w-5 h-5" />, t: 'Es una oración completa', a: 'Con sujeto y verbo, no una frase nominal ni un rótulo: “La piedra caliza y el agua han esculpido este paisaje” — no “el relieve kárstico”.' },
  { icon: <Lightbulb className="w-5 h-5" />, t: 'Responde al “¿y qué?” del público', a: 'Explica por qué el recurso importa para el visitante: es la esencia del mensaje, no un dato más que se suma a la colección.' },
  { icon: <Target className="w-5 h-5" />, t: 'Idea completa con significado', a: 'Expresa una idea acabada que pueda ser entendida y recordada por sí sola; no es un título ni un eslogan, sino el punto principal de la presentación.' },
  { icon: <Star className="w-5 h-5" />, t: 'Análoga a un titular de prensa', a: 'Morales recomienda redactarla como titular: concisa, atractiva, provocadora, con verbos que inviten a seguir leyendo (o caminando).' },
  { icon: <Globe className="w-5 h-5" />, t: 'Más potente con un concepto universal', a: 'Cuando conecta con valores humanos amplios —supervivencia, libertad, memoria, identidad, transformación— el tema resonará más allá del lugar concreto.' },
  { icon: <Layers className="w-5 h-5" />, t: 'Da cohesión a todo el mensaje', a: 'Sirve de referente durante la presentación: el público sabe en todo momento “de qué va”, y los contenidos se ordenan en función de él.' },
];

const EVOLUCION = [
  { anio: '1957', t: 'Tilden · Interpreting Our Heritage', a: 'Freeman Tilden funda la disciplina y define sus seis principios; ya habla de revelar significados “a través de los objetos originales, la experiencia directa y los medios ilustrativos”. El germen del tema es la provocación.' },
  { anio: '1992', t: 'Sam Ham · Environmental Interpretation', a: 'Ham publica el manual de interpretación temática y presenta el marco EROT: Entretenida, Relevante, Organizada y Temática, apoyado en la psicología cognitiva y la comunicación persuasiva (audiencias cautivas y no cautivas).' },
  { anio: '1998 / 2001', t: 'Jorge Morales · Guía práctica para la interpretación del patrimonio', a: 'Morales traduce y sistematiza la metodología en castellano: define la frase-tema u oración-tema, sus componentes y criterios de redacción, y la integra a la planificación en el marco del Índice del Potencial Interpretativo.' },
  { anio: '2008', t: 'Morales & Ham · ¿A qué interpretación nos referimos?', a: 'El acuerdo hispano-anglosajón define la interpretación efectiva como un proceso creativo de comunicación estratégica y explica el modelo TORA (Temática, Organizada, Relevante, Amena) en español.' },
  { anio: '2013 / 2014', t: 'Sam Ham · Interpretación. Para marcar la diferencia intencionadamente', a: 'La obra magna de Ham presenta el modelo TORE maduro (el Tema va primero), la redacción de temas fuertes, la relevancia como “vitamina R” y los formatos de empaquetado temático. Es la síntesis más pura de la metodología.' },
  { anio: '1997 → 2019', t: 'PUP → Mayorga & Kohl · Esencia de la interpretación del patrimonio', a: 'El mismo salto de escala: del tema de un programa (Ham) al marco interpretativo de un lugar o una ruta (Kohl): temas, procesos universales y esencia de un territorio, construidos en talleres participativos y volcados en una sola hoja.' },
  { anio: '2016', t: 'Kohl & McCool · The Future Has Other Plans', a: 'La planificación holística de patrimonio enmarca la interpretación temática: el tema interpretativo no es un ejercicio aislado, sino parte de un sistema de gestión, de audiencia y de conservación (PUP Global Heritage Consortium).' },
];

const MARCO_ELEMENTOS = [
  { icon: <Pin className="w-5 h-5" />, t: 'Elementos patrimoniales destacados', a: 'Los rasgos visibles y singulares del lugar que dan pie a la historia: qué es lo que hay que mirar y tocar.' },
  { icon: <Target className="w-5 h-5" />, t: 'Temas interpretativos', a: 'Las oraciones-tema a escala del lugar o de la ruta: no uno solo, sino un sistema coherente de temas con sentido territorial.' },
  { icon: <Waves className="w-5 h-5" />, t: 'Procesos y fuerzas universales', a: 'Las fuerzas que crearon el sitio y lo siguen transformando —geológicas, históricas, sociales—; el puente entre lo tangible y lo universal que recomienda Ham.' },
  { icon: <Mountain className="w-5 h-5" />, t: 'Esencia del lugar', a: 'La idea sintética que lo define y lo distingue: la “big idea” del territorio, el norte al que obedecen todos los temas y todos los medios.' },
];

export const TematicaInterpretacion: React.FC<TematicaInterpretacionProps> = ({ onBack }) => {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const barScale = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const yDec = useTransform(heroProgress, (v) => (reduce ? 0 : v * 120));
  const heroFade = useTransform(heroProgress, [0, 0.8], [1, 0.3]);

  const [openQuote, setOpenQuote] = useState<number | null>(null);

  const CITAS = [
    { autor: 'Freeman Tilden', obra: 'Interpreting Our Heritage (1957)', cita: '“El objetivo principal de la interpretación no es la instrucción, sino la provocación.”' },
    { autor: 'Sam H. Ham', obra: 'Interpretación. Para marcar la diferencia (2013), ed. AIP (2014)', cita: '“TORE significa que tienes un tema fuerte, comunicado de forma organizada, relevante y amena.”' },
    { autor: 'Jorge Morales Miranda', obra: 'Guía práctica para la interpretación del patrimonio (2001)', cita: '“El tema debe responder al ¿y qué? del público: ser la esencia del mensaje, formulada como una oración completa, análoga a un titular de prensa.”' },
    { autor: 'Marisol Mayorga y Jon Kohl', obra: 'Esencia de la interpretación del patrimonio (UNED, 2019)', cita: '“El marco interpretativo traduce el tema de Ham a la escala de un lugar o de una ruta: un sistema de temas, fuerzas universales y esencia, construido con su comunidad.”' },
  ];

  return (
    <div className="min-h-screen bg-[#F6F1E5] text-[#14281C]">
      {/* Barra de progreso */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-transparent">
        <motion.div className="h-full bg-gradient-to-r from-[#B04E2A] via-[#D97706] to-[#E8A58B] origin-left" style={{ scaleX: barScale }} />
      </div>

      {/* ===== HERO ===== */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-[#14281C] via-[#1D3626] to-[#2E4E37] text-white overflow-hidden py-16 sm:py-24 px-4 sm:px-6 border-b border-[#2A4533]">
        <motion.div className="absolute inset-0 opacity-15 bg-[radial-gradient(#E8A58B_1.4px,transparent_1.4px)] [background-size:24px_24px]" style={{ y: yDec }} />
        <motion.div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-[#B04E2A]/25 blur-3xl" style={{ y: yDec }} />
        <div className="relative max-w-5xl mx-auto space-y-8" style={{ opacity: heroFade }}>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <motion.span
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#E8A58B] border border-[#B04E2A]/40 text-xs font-bold uppercase tracking-widest backdrop-blur-md"
            >
              <Feather className="w-3.5 h-3.5" />
              Metodología · Teoría y práctica
            </motion.span>
            <motion.button
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={onBack}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 transition-all"
            >
              <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              Volver a la plataforma
            </motion.button>
          </div>

          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-['Cormorant_Garamond',Georgia,serif] text-4xl sm:text-6xl font-extrabold leading-[1.05]"
            >
              Interpretación temática:
              <span className="text-[#E8A58B]"> el arte de decir una sola cosa, bien dicha</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-[#CDD9CF] max-w-3xl leading-relaxed"
            >
              La metodología de <strong className="text-[#E8A58B]">Sam H. Ham</strong> —sistematizada en español por{' '}
              <strong className="text-[#E8A58B]">Jorge Morales Miranda</strong>— convierte la interpretación del patrimonio
              en un acto de comunicación con propósito: organizar cada esfuerzo en torno a una <strong>idea central</strong> que el
              visitante pueda comprender, recordar y sentir. Esta página recorre su teoría y su práctica: cómo se elabora un tema,
              cuáles son sus componentes en castellano, y cómo el concepto evolucionó hasta el <strong>marco interpretativo</strong> de
              Mayorga y Kohl y la planificación interpretativa.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-2"
          >
            {['Modelo TORA', 'Oración-tema · frase-tema', 'Núcleo cognitivo', 'Empaquetado temático', 'Marco interpretativo', 'PUP Consorcio'].map((ch) => (
              <span key={ch} className="px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-[11px] font-extrabold uppercase tracking-wider text-[#E8A58B]">
                {ch}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== QUÉ ES / TEORÍA Y PRÁCTICA ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-3"
        >
          <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md">
            <Brain className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Teoría y práctica</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
              Una metodología que se aprende haciendo
            </h2>
          </div>
        </motion.div>
        <p className="text-sm text-slate-600 max-w-4xl leading-relaxed mt-3">
          La interpretación temática no es un estilo ni una opinión: es un <strong>procedimiento</strong>. Su base teórica reúne
          dos siglos de investigación sobre la comunicación persuasiva y la psicología cognitiva (Ham, 2013) —cómo se capta y
          retiene la atención de una audiencia no cautiva que puede irse en cualquier momento— y su práctica se domina{' '}
          <strong>redactando, ordenando y probando mensajes</strong> frente a audiencias reales. El corazón del método es el{' '}
          <strong>tema interpretativo</strong>: el núcleo cognitivo del mensaje, la afirmación única que el visitante se lleva
          a casa.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-8">
          {[
            { icon: <Compass className="w-5 h-5" />, t: 'El tema como núcleo cognitivo', a: 'El tema es la idea que la mente retiene y reconstruye: la “moraleja de la historia”. Ham trabaja sobre los hallazgos de la psicología del procesamiento de la información para que ese núcleo sea fácil de procesar y difícil de olvidar.' },
            { icon: <Users className="w-5 h-5" />, t: 'Audiencias cautivas y no cautivas', a: 'A diferencia del aula, el visitante no está obligado a escuchar. La metodología está diseñada para la audiencia no cautiva: por eso exige relevancia personal y amenidad (Ham, 2005).' },
            { icon: <Sparkles className="w-5 h-5" />, t: 'Provocar, no instruir', a: 'Como pedía Tilden, el tema no enseña un dato: provoca una conexión. “Hacer una diferencia intencionadamente” significa lograr que el visitante genere sus propios significados sobre el recurso.' },
          ].map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl border border-[#E4D8BF] shadow-sm hover:shadow-lg hover:border-[#B04E2A]/30 transition-all p-5"
            >
              <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md mb-3">
                {c.icon}
              </span>
              <h3 className="text-sm font-extrabold text-[#14281C]">{c.t}</h3>
              <p className="text-xs text-slate-600 leading-relaxed mt-1.5">{c.a}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== MODELO TORA ===== */}
      <section className="bg-gradient-to-b from-[#14281C] to-[#1D3626] text-white py-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-2"
          >
            <span className="w-11 h-11 rounded-2xl bg-white/10 text-[#E8A58B] border border-[#B04E2A]/40 grid place-items-center">
              <Target className="w-5 h-5" />
            </span>
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8A58B]">Sam H. Ham · 1992 / 2013</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
                El modelo TORA: cuatro cualidades de la interpretación efectiva
              </h2>
            </div>
          </motion.div>
          <p className="text-sm text-[#E4D8BF] max-w-3xl mt-3 mb-8 leading-relaxed">
            Para Ham la interpretación es efectiva cuando cumple cuatro cualidades —<strong>temática, organizada,
            relevante y amena</strong>—: lo que en su primer manual (1992) presentó como el marco <strong>EROT</strong> y que
            desde sus refinamientos tempranos del 2000 se practica como <strong>TORA</strong> —el tema va primero, y luego
            se organiza, se hace relevante y se vuelve ameno (Ham, 2013; traducción de la obra mayor editada por la AIP en
            2014).
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TORA.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 hover:border-[#E8A58B]/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#E8A58B]">{c.icon}</span>
                  <span className="w-8 h-8 rounded-full bg-[#B04E2A] text-white text-[11px] font-extrabold grid place-items-center">
                    {['T', 'O', 'R', 'A'][i]}
                  </span>
                </div>
                <h3 className="text-[15px] font-extrabold">{c.t}</h3>
                <p className="text-[12px] text-[#CDD9CF] leading-relaxed mt-1.5">{c.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CÓMO SE APLICA ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-2"
        >
          <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#B04E2A] to-[#D97706] text-white grid place-items-center shadow-md">
            <PenLine className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Procedimiento</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
              Cómo se aplica la metodología, paso a paso
            </h2>
          </div>
        </motion.div>
        <p className="text-sm text-slate-600 max-w-4xl leading-relaxed mt-3 mb-8">
          El camino práctico propuesto por Ham y Morales se puede recorrer en seis pasos, del tópico a la evaluación.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          {PASOS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: (i % 2) * 0.08, duration: 0.5 }}
              className="bg-white rounded-3xl border border-[#E4D8BF] shadow-sm hover:shadow-lg hover:border-[#B04E2A]/30 transition-all p-5 flex gap-4"
            >
              <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shrink-0">
                {p.icon}
              </span>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Paso {p.n}</p>
                <h3 className="text-sm font-extrabold text-[#14281C]">{p.t}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-1">{p.a}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ejemplo de redacción */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mt-8 rounded-3xl overflow-hidden border border-[#E4D8BF] bg-[#14281C] text-white"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-6 sm:p-8 space-y-3">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8A58B]">Del tópico al tema · ejemplo de redacción</p>
              <ul className="space-y-3 text-[13px] leading-relaxed">
                <li className="flex gap-2"><span className="text-[#B04E2A] font-extrabold">1.</span><span><strong>Tópico</strong> (frase nominal): “El relieve kárstico”. ¿De qué trata?</span></li>
                <li className="flex gap-2"><span className="text-[#B04E2A] font-extrabold">2.</span><span><strong>Más concreto</strong>: “Qué queremos explicar del relieve kárstico: la relación entre la roca caliza y el agua”.</span></li>
                <li className="flex gap-2"><span className="text-[#B04E2A] font-extrabold">3.</span><span><strong>Tema</strong> (oración con sujeto y verbo): “<em>La disolución de la roca caliza por el agua ha esculpido estas formas de relieve</em>”.</span></li>
                <li className="flex gap-2"><span className="text-[#B04E2A] font-extrabold">4.</span><span><strong>Fortaleciendo</strong> (concepto universal y “vos”): “La misma agua que bebemos talla paisajes que duran milenios”.</span></li>
              </ul>
              <p className="text-[10px] text-[#CDD9CF]">Ejemplo adaptado de la metodología expuesta en curso de interpretación en línea dictado por Jorge Morales (2026), sobre la base de la Guía práctica para la interpretación del patrimonio.</p>
            </div>
            <div className="p-6 sm:p-8 bg-white/[0.04] border-t md:border-t-0 md:border-l border-white/10 space-y-3">
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8A58B]">Formatos de empaquetado temático (Ham)</p>
              <div className="space-y-3">
                <div className="rounded-2xl bg-white/[0.05] p-4">
                  <h4 className="text-[13px] font-extrabold">Paquete único</h4>
                  <p className="text-[12px] text-[#CDD9CF] leading-relaxed mt-1">Un solo tema con introducción, cuerpo y conclusión: típico de una charla o un panel.</p>
                </div>
                <div className="rounded-2xl bg-white/[0.05] p-4">
                  <h4 className="text-[13px] font-extrabold">Paquetes en serie</h4>
                  <p className="text-[12px] text-[#CDD9CF] leading-relaxed mt-1">Varios temas sucesivos, cada uno de un solo mensaje: típico de un sendero o una visita guiada con paradas.</p>
                </div>
                <div className="rounded-2xl bg-white/[0.05] p-4">
                  <h4 className="text-[13px] font-extrabold">Paquetes anidados</h4>
                  <p className="text-[12px] text-[#CDD9CF] leading-relaxed mt-1">Dos o más temas anidados bajo un tema global que los aúna: típico de una exhibición o un centro de visitantes.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ===== COMPONENTES DEL TEMA (MORALES) ===== */}
      <section className="bg-gradient-to-b from-[#14281C] to-[#1D3626] text-white py-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-2"
          >
            <span className="w-11 h-11 rounded-2xl bg-white/10 text-[#E8A58B] border border-[#B04E2A]/40 grid place-items-center">
              <Quote className="w-5 h-5" />
            </span>
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8A58B]">Jorge Morales Miranda · en castellano</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
                Los componentes de un tema según Morales
              </h2>
            </div>
          </motion.div>
          <p className="text-sm text-[#E4D8BF] max-w-3xl mt-3 mb-8 leading-relaxed">
            Morales llevó la metodología de Ham al español con terminología propia y precisa. Para él el{' '}
            <strong>tópico</strong> es el motivo general (una frase nominal), y el <strong>tema</strong> —también llamado{' '}
            <strong>oración-tema o frase-tema</strong>— es el punto principal del mensaje: la idea que el intérprete quiere
            tratar y el público debe recordar. Estas son sus características distintivas (Morales, 1998/2001; Morales y Ham,
            2008).
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {COMPONENTES_TEMA.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: (i % 3) * 0.08, duration: 0.45 }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 hover:border-[#E8A58B]/40 transition-colors"
              >
                <span className="w-10 h-10 rounded-xl bg-[#E8A58B]/10 border border-[#E8A58B]/40 text-[#E8A58B] grid place-items-center mb-3">{c.icon}</span>
                <h3 className="text-[14px] font-extrabold">{c.t}</h3>
                <p className="text-[12px] text-[#CDD9CF] leading-relaxed mt-1.5">{c.a}</p>
              </motion.div>
            ))}
          </div>

          {/* Citas */}
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {CITAS.map((q, i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: (i % 2) * 0.08, duration: 0.5 }}
                className="relative bg-white rounded-3xl border border-[#E4D8BF] shadow-lg p-5 flex flex-col gap-2"
              >
                <span className="absolute top-4 right-4 text-[#B04E2A]/20">
                  <Quote className="w-8 h-8" />
                </span>
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">{q.autor}</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{q.obra}</p>
                <p className="text-sm italic text-slate-700 leading-relaxed mt-1">{q.cita}</p>
                <button
                  onClick={() => setOpenQuote(openQuote === i ? null : i)}
                  className="mt-auto inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#14281C] hover:bg-[#1D3626] text-[#E8A58B] text-[11px] font-extrabold uppercase tracking-wider transition-colors self-start"
                >
                  <Quote className="w-3.5 h-3.5" />
                  {openQuote === i ? 'Ocultar contexto' : '¿Por qué importa?'}
                </button>
                {openQuote === i && (
                  <div className="rounded-2xl bg-[#F6F1E5] border border-[#E4D8BF] p-3.5 text-[11px] text-slate-600 leading-relaxed animate-fadeIn">
                    {i === 0 && 'Tilden sitúa la provocación como objetivo: el tema es el instrumento con que la interpretación provoca el pensamiento, antes que transmitir datos.'}
                    {i === 1 && 'La frase condensa el modelo TORE: el tema (T) es el punto medio; organizado (O), relevante (R) y ameno (A) es el modo de decirlo. Manual traducido por la AIP como “Interpretación. Para marcar la diferencia intencionadamente” (Valladolid).'}
                    {i === 2 && 'Morales fija las características del tema en castellano: oración completa, respuesta al “y qué”, esencia del mensaje y analogía con el titular de prensa, en su Guía práctica (1998; 2ª ed. 2001, Junta de Andalucía–TRAGSA).'}
                    {i === 3 && 'El libro universitario de Mayorga y Kohl (UNED, 2019), escrito desde América Latina, y la Guía de campo para escribir temas interpretativos de Kohl, de la mano del Consorcio PUP para el Patrimonio Global.'}
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EVOLUCIÓN DEL CONCEPTO ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-2"
        >
          <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#B04E2A] to-[#D97706] text-white grid place-items-center shadow-md">
            <Layers className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Evolución del concepto</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
              Del tema de Ham al marco interpretativo de Mayorga y Kohl
            </h2>
          </div>
        </motion.div>
        <p className="text-sm text-slate-600 max-w-4xl leading-relaxed mt-3 mb-8">
          El tema interpretativo nació como la unidad mínima de un programa (Ham); Morales le dio forma académica en español;
          y con la planificación interpretativa el concepto creció hasta convertirse en un <strong>sistema de temas</strong> que
          ordena la interpretación de un lugar entero —o de una ruta—: el <strong>marco interpretativo</strong> de Mayorga y Kohl.
        </p>

        <div className="relative space-y-6 pl-6 sm:pl-8 border-l-2 border-[#E4D8BF]">
          {EVOLUCION.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
              className="relative"
            >
              <span className={`absolute -left-[31px] sm:-left-[39px] top-2 w-4 h-4 rounded-full border-4 border-[#F6F1E5] ${i === EVOLUCION.length - 1 ? 'bg-[#B04E2A]' : 'bg-[#D97706]'}`} />
              <div className="bg-white rounded-3xl border border-[#E4D8BF] shadow-sm hover:shadow-lg hover:border-[#B04E2A]/30 transition-all p-5">
                <p className="inline-block px-3 py-1 rounded-full bg-[#14281C] text-[#E8A58B] text-[10px] font-extrabold uppercase tracking-widest">
                  {e.anio}
                </p>
                <h3 className="text-sm sm:text-base font-extrabold text-[#14281C] mt-2">{e.t}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-1.5">{e.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== MARCO INTERPRETATIVO (MAYORGA & KOHL) ===== */}
      <section className="bg-gradient-to-br from-[#14281C] via-[#1D3626] to-[#2E4E37] text-white py-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-2"
          >
            <span className="w-11 h-11 rounded-2xl bg-white/10 text-[#E8A58B] border border-[#B04E2A]/40 grid place-items-center">
              <Mountain className="w-5 h-5" />
            </span>
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8A58B]">Marisol Mayorga y Jon Kohl · PUP</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
                El marco interpretativo: el tema a la escala del lugar
              </h2>
            </div>
          </motion.div>
          <p className="text-sm text-[#E4D8BF] max-w-3xl mt-3 mb-8 leading-relaxed">
            En <em>Esencia de la interpretación del patrimonio</em> (Mayorga y Kohl, UNED, 2019) el concepto de Ham escala
            desde el programa hasta el <strong>territorio</strong>. Un <strong>marco interpretativo</strong> es el paraguas narrativo
            de un lugar o una ruta: un sistema de temas y de esencia que da coherencia a toda su interpretación, habitualmente
            resumido en <strong>una sola hoja</strong> —el lienzo del marco— acompañada de narrativas extendidas. Se construye con la
            comunidad mediante <strong>talleres participativos de consenso</strong>, metodología que el Consorcio PUP desarrolla desde
            1997 y que en Colombia, junto a OpEPA, se ha aplicado a la Ruta Libertadora de Simón Bolívar con siete marcos
            regionales integrados por un marco general (Kohl, 2025).
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MARCO_ELEMENTOS.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 hover:border-[#E8A58B]/40 transition-colors"
              >
                <span className="w-11 h-11 rounded-2xl bg-[#B04E2A]/30 text-[#E8A58B] grid place-items-center mb-3">{c.icon}</span>
                <h3 className="text-[14px] font-extrabold">{c.t}</h3>
                <p className="text-[12px] text-[#CDD9CF] leading-relaxed mt-1.5">{c.a}</p>
              </motion.div>
            ))}
          </div>

          {/* Puente con la planificación interpretativa */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mt-8 rounded-3xl overflow-hidden border border-[#B04E2A]/40 bg-white/[0.05] backdrop-blur-sm"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 sm:p-8">
              <div className="flex-1 space-y-2">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8A58B]">Del núcleo cognitivo a la planificación</p>
                <h3 className="text-xl sm:text-2xl font-extrabold font-['Cormorant_Garamond',Georgia,serif] max-w-2xl">
                  El tema no termina en la frase: termina en el visitante
                </h3>
                <p className="text-xs text-[#CDD9CF] leading-relaxed max-w-2xl">
                  La cadena completa va del <strong>núcleo cognitivo</strong> —el tema que la mente del visitante retiene
                  (Ham)— a la <strong>evaluación</strong> —qué queda de ese tema en la mente de la gente (Morales)— y de ahí
                  a la <strong>planificación interpretativa</strong>: un plan que ordena misión, objetivos, temas, audiencias,
                  medios y evaluación, porque “toda práctica interpretativa debería provenir de un plan” (AIP, 2006; Morales,
                  2009). El marco interpretativo de Mayorga y Kohl es la expresión territorial de esa planificación: el sistema
                  de temas que hace que un lugar o una ruta entera cuente una historia coherente (Kohl y McCool, 2016).
                </p>
              </div>
              <div className="flex flex-col gap-2 shrink-0">
                <a
                  href="https://www.pupconsortium.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#B04E2A] hover:bg-[#9A3F1E] text-white text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap"
                >
                  Consorcio PUP
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={onBack}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wider border border-white/15 transition-colors whitespace-nowrap"
                >
                  Volver a la plataforma
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== RECOMENDACIÓN DE LECTURA ===== */}
      <section className="bg-[#F6F1E5] py-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-2"
          >
            <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#B04E2A] to-[#D97706] text-white grid place-items-center shadow-md">
              <ShoppingBag className="w-5 h-5" />
            </span>
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Recomendación de lectura</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
                Para comprender la metodología en profundidad
              </h2>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mt-8 rounded-3xl overflow-hidden border border-[#E4D8BF] bg-white shadow-lg hover:shadow-2xl transition-shadow"
          >
            <div className="grid md:grid-cols-[300px_1fr]">
              <div className="relative p-0">
                <img
                  src="https://cdnx.jumpseller.com/el-viaje/image/71659863/thumb/1440/1889?1767901498"
                  alt="Portada de Esencia de la Interpretación del Patrimonio, de Marisol Mayorga y Jon Kohl"
                  className="w-full h-full object-cover min-h-[320px]"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#14281C]/90 text-[#E8A58B] text-[10px] font-extrabold uppercase tracking-widest backdrop-blur-sm">
                  <MapPin className="w-3.5 h-3.5" />
                  Exclusivo en Chile
                </span>
              </div>
              <div className="p-6 sm:p-8 flex flex-col gap-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold font-['Cormorant_Garamond',Georgia,serif] text-[#14281C]">
                    Esencia de la Interpretación del Patrimonio
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    <strong>Marisol Mayorga</strong> y <strong>Jon Kohl</strong> · Editorial EUNED, Costa Rica · Edición 2021 ·
                    distribución exclusiva en Chile en <a href="https://www.tiendaelviaje.cl" target="_blank" rel="noopener noreferrer" className="text-[#B04E2A] hover:underline font-bold">Tienda El Viaje</a>.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {['Tapa blanda', '20 × 26,5 cm', '518 páginas', '1,1 kg', 'Español'].map((c) => (
                    <span key={c} className="px-3 py-1.5 rounded-full bg-[#F6F1E5] border border-[#E4D8BF] text-[11px] font-extrabold text-[#2E4E37]">
                      {c}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  La obra latinoamericana que da cuerpo al <strong>marco interpretativo</strong>: recorre los cuatro bloques que
                  estructuran el método —<em>fundamentos</em>, <em>análisis interpretativo</em> del recurso, diseño del{' '}
                  <em>experiencia del público</em> y <em>gestión de medios</em>— con ejercicios de autoevaluación, actividades de
                  campo y el hilo didáctico de <strong>“Armando y Lucía”</strong>, dos intérpretes que diseñan un producto real en
                  el transcurso del libro. Es el complemento ideal a esta página: donde aquí se resume la metodología, el libro la
                  profundiza con la base pedagógica del <strong>Consorcio PUP</strong>, con el respaldo mencionado por Ted Cable.
                </p>

                <div className="mt-auto flex flex-wrap gap-3">
                  <a
                    href="https://www.tiendaelviaje.cl/esencia-de-la-interpretacion-del-patrimonio-marisol-mayorga-jon-kohl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#B04E2A] hover:bg-[#9A3F1E] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Adquirir en Tienda El Viaje
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://www.tiendaelviaje.cl/esencia-de-la-interpretacion-del-patrimonio-marisol-mayorga-jon-kohl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#14281C] hover:bg-[#1D3626] text-[#E8A58B] text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    Ver ficha completa
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CIERRE / FUENTES ===== */}
      <section className="bg-[#14281C] text-[#F6F1E5] py-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-5">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-extrabold font-['Cormorant_Garamond',Georgia,serif] max-w-lg"
          >
            Lo más puro de la metodología: lo que hay que recordar
          </motion.h3>
          <div className="grid sm:grid-cols-2 gap-3 max-w-3xl">
            {[
              { t: 'El tema es una oración, no un rótulo', a: 'Sujeto + verbo: una idea completa que se puede llevar a casa (Morales, 2001).' },
              { t: 'El tema responde al “y qué”', a: 'Conecta con el visitante: si no, es información, no interpretación (Ham, 2013).' },
              { t: 'Un tema, muchos formatos', a: 'Único, en serie o anidado; siempre organizado, relevante y ameno (TORA).' },
              { t: 'El tema es la semilla del plan', a: 'Del núcleo cognitivo a la evaluación y a la planificación; del programa al marco interpretativo del territorio (Mayorga y Kohl).' },
            ].map((c, i) => (
              <div key={i} className="rounded-2xl bg-white/[0.04] border border-[#2A4533] p-4">
                <h4 className="text-[13px] font-extrabold text-[#E8A58B]">{c.t}</h4>
                <p className="text-[12px] text-[#CDD9CF] leading-relaxed mt-1">{c.a}</p>
              </div>
            ))}
          </div>
          <div className="pt-6 border-t border-[#2A4533] text-[10px] text-slate-400 leading-relaxed space-y-1 max-w-4xl">
            <p>
              Referencias teóricas: F. Tilden, <em>Interpreting Our Heritage</em> (1957; trad. AIP 2006); S. H. Ham,
              <em> Environmental Interpretation: A Practical Guide for People with Big Ideas and Small Budgets</em> (1992) y
              <em> Interpretation: Making a Difference on Purpose</em> (Golden, CO: Fulcrum, 2013; ed. en español
              <em> Interpretación. Para marcar la diferencia intencionadamente</em>, Asociación para la Interpretación del
              Patrimonio – AIP, Valladolid, 2014); J. Morales, <em>Guía práctica para la interpretación del patrimonio</em>
              (Junta de Andalucía–TRAGSA, 1998; 2ª ed. 2001) y <em>La planificación interpretativa asegura la excelencia</em>
              (2009); J. Morales y S. H. Ham, <em>¿A qué interpretación nos referimos?</em> (Boletín de Interpretación, AIP,
              n.º 19, 2008); M. Mayorga y J. Kohl, <em>Esencia de la interpretación del patrimonio: una visión holística para
              experimentar y conservar el patrimonio natural y cultural de América Latina</em> (Editorial UNED, Costa Rica,
              2019); J. Kohl, <em>Guía de campo para escribir temas interpretativos</em> (PUP); J. Kohl y S. F. McCool,
              <em> The Future Has Other Plans</em> (Fulcrum, 2016); PUP Collaboratory (pupconsortium.net, 1997–2025);
              F. J. Guerra Rosado, <em>La comunicación en interpretación del patrimonio</em> (CENEAM, 2017). Las citas de
              Tilden, Ham, Morales y Mayorga y Kohl son traducciones libres; consúltese el original.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};