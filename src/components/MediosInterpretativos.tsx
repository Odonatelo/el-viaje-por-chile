import React, { useEffect, useRef, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useReducedMotion,
} from 'motion/react';
import {
  ArrowRight,
  Users,
  Accessibility,
  AudioLines,
  Map as MapIcon,
  Library,
  Landmark,
  Smartphone,
  X,
  Expand,
  Sparkles,
  Compass,
  Layers,
  Route,
  QrCode,
  Frame,
  Handshake,
} from 'lucide-react';

interface MediosInterpretativosProps {
  onBack: () => void;
}

const DEFINICIONES = [
  {
    autor: 'Freeman Tilden',
    obra: 'Interpreting Our Heritage · 1957',
    def: 'Al definir la interpretación, Tilden la describió como una actividad educativa que revela "significados e interrelaciones a través del uso de los objetos originales, de la experiencia directa y de medios ilustrativos". Desde la cuna de la disciplina, el medio —el soporte que hace llegar el mensaje— es parte constitutiva del método: sin vehículo, no hay revelación.',
  },
  {
    autor: 'Francisco J. Guerra Rosado',
    obra: 'Medios para la interpretación del patrimonio · Junta de Andalucía, 2022',
    def: 'Define el medio con precisión: "un medio interpretativo es el soporte o el vehículo a través del cual —en un programa, en un equipamiento— se entrega un mensaje a una audiencia". Y lo aclara con ejemplos: los audiovisuales de un centro de visitantes, las exhibiciones de un museo, o el guía intérprete que desarrolla su labor en un sendero. Un guía, pues, también es un medio.',
  },
  {
    autor: 'Jorge Morales Miranda',
    obra: 'Los medios interpretativos (1988) · Guía práctica (1998/2001)',
    def: 'Morales sistematizó en español la clasificación de los medios: los "personales" o atendidos por personas —guiado, animación, interpretación personalizada— frente a los "no personales" o autónomos: carteles, publicaciones, exhibiciones, senderos autoguiados. Su criterio: ningún medio es básico o complementario en abstracto; depende del lugar y del contexto (Guerra y Morales, 1996).',
  },
  {
    autor: 'Sam H. Ham',
    obra: 'Interpretación Ambiental (1992) · Interpretación (2014)',
    def: 'Ham distingue los "productos y servicios interpretativos": los atendidos por personas (visitas guiadas, charlas, animación) y los no personales o autoguiados (cartería, exhibiciones, publicaciones, audiovisuales). Regla de selección: el medio adecuado es el que mejor sirve al mensaje temático, a la audiencia y al presupuesto; la tecnología es un medio ilustrativo más, jamás el mensaje.',
  },
  {
    autor: 'Lillian Stewart',
    obra: 'Clasificación original · 1981',
    def: 'Autora de la clasificación primigenia —atendidos por personal frente a no atendidos o autónomos— que actualizaron Guerra, Sureda y Castells (2008). Sigue siendo el punto de partida de toda planificación de medios interpretativos.',
  },
  {
    autor: 'Larry Beck y Ted Cable',
    obra: 'The Gifts of Interpretation · 2011',
    def: 'Su principio 11 exige "variedad de técnicas y sentidos": interpretar con múltiples lenguajes —visual, sonoro, kinestésico, olfativo— y por tanto con múltiples medios. Elegir el medio es, antes que una decisión técnica, una decisión sobre cómo se conmueve y cómo se piensa.',
  },
];

const MEDIOS_PERSONALES = [
  {
    icon: <Users className="w-5 h-5" />,
    t: 'Guía intérprete',
    a: 'El medio por excelencia: una persona entrenada que lee al grupo, adapta el relato en vivo y convierte el paseo en conversación.',
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    t: 'Animador / mediador',
    a: 'Mediación cultural y animación con visitantes: juegos, dramatizaciones y dinámicas que vuelven protagonista al grupo.',
  },
  {
    icon: <Accessibility className="w-5 h-5" />,
    t: 'Guardaparque / educador',
    a: 'El profesional de terreno que interpreta in situ, atiende preguntas y es la memoria viva del recurso.',
  },
];

const MEDIOS_NO_PERSONALES = [
  {
    icon: <Frame className="w-5 h-5" />,
    t: 'Carteles y paneles',
    a: 'Mesas interpretativas, señalética y cartelería: el soporte clásico del recorrido autoguiado, resistente al clima y al tiempo.',
  },
  {
    icon: <Library className="w-5 h-5" />,
    t: 'Desplegables y publicaciones',
    a: 'Folletos plegables, guías de campo y mapas en papel: el patrimonio que cabe en la mochila y viaja contigo.',
  },
  {
    icon: <Landmark className="w-5 h-5" />,
    t: 'Exhibiciones y centros de visitantes',
    a: 'Museografías, vitrinas y centros de interpretación que ordenan el mensaje en un espacio dedicado a la experiencia.',
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    t: 'Medios virtuales',
    a: 'Audioguías GPS, códigos QR, realidad aumentada y web: la interpretación se digitaliza y se sincroniza con el terreno.',
  },
];

const CRITERIOS = [
  { icon: <Users className="w-5 h-5" />, t: 'Audiencia', a: 'Audiencias cautivas (colegios, grupos organizados) y no cautivas (el visitante espontáneo de fin de semana): cada una pide su medio (Ham).' },
  { icon: <Route className="w-5 h-5" />, t: 'Mensaje temático', a: 'El medio sirve al tema, no al revés: primero la historia, después el soporte que mejor la cuente.' },
  { icon: <Smartphone className="w-5 h-5" />, t: 'Presupuesto y mantención', a: 'Un panel se mantiene solo durante décadas; un dispositivo digital exige energía, contenidos y actualización permanente.' },
  { icon: <Handshake className="w-5 h-5" />, t: 'Accesibilidad universal', a: 'Medios multisensoriales e inclusivos: texto, audio, contraste y lenguajes para que la emoción llegue a todas las personas (principio 19).' },
];

const MAPA_COMPLEMENTOS = [
  { icon: <Frame className="w-5 h-5" />, t: 'Paneles', a: 'El mapa condensa la señalética: sobre su trama conviven los pictogramas, las leyendas y los hitos que, a gran escala, ocupan metros de panel.' },
  { icon: <Library className="w-5 h-5" />, t: 'Desplegables', a: 'El mapa ilustrado es el corazón del folleto plegable: se abre, orienta y se guarda en el bolsillo, llevando la interpretación de regreso a casa.' },
  { icon: <Smartphone className="w-5 h-5" />, t: 'Medios virtuales', a: 'QR y audioguías GPS anclan el mundo digital al papel: el mismo mapa escaneado despierta la voz del territorio en el lugar exacto.' },
];

const HALLAZGOS = [
  { icon: <AudioLines className="w-5 h-5" />, t: 'Parque Nacional Puyehue, 1971', a: 'El Centro de Visitantes de Aguas Calientes y sus senderos autoguiados figuran entre los primeros del país (Lovelady, 1972; documentado por la FAO en 1974). La disciplina deja de ser una idea y se vuelve instalación pública.' },
  { icon: <Landmark className="w-5 h-5" />, t: 'CONAF y la Universidad Austral', a: 'Oltremari, ingeniero forestal ligado a CONAF y a la Facultad de Ciencias Forestales, publica la primera investigación chilena sobre interpretación en la Revista Bosque: el registro oficial que abre el camino en Chile.' },
];

const TOURMAPS_GALERIA = [
  { src: '/images/medios/tourmaps/mapa-puerto-montt.jpg',
    alt: 'Mapa ilustrado e interpretativo de Puerto Montt, de Tourmaps',
    t: 'Puerto Montt',
    d: 'Mar, volcanes y patrimonio en la capital de Los Lagos: un mapa-ilustrado que invita a caminar con asombro por la ciudad y su fiordo.',
    tag: 'Mapa ilustrado' },
  { src: '/images/medios/tourmaps/mapa-rio-san-pedro.jpg',
    alt: 'Mapa ilustrado e interpretativo de la Ruta del Río San Pedro, de Tourmaps',
    t: 'Ruta del Río San Pedro',
    d: '"Los Lagos Invita": la cuenca narrada con hitos, relieves y señales — interpretación territorial hecha diseño.',
    tag: 'Mapa ilustrado' },
  { src: '/images/medios/tourmaps/mapa-maullin.jpg',
    alt: 'Mapa ilustrado e interpretativo de Maullín, de Tourmaps',
    t: 'Maullín · Naturaleza y entretención',
    d: 'Un estuario, su gente y sus historias convertidos en material de interpretación: el patrimonio como ribete del mapa.',
    tag: 'Mapa ilustrado' },
  { src: '/images/medios/tourmaps/mapa-valdivia.jpg',
    alt: 'Mapa ilustrado e interpretativo de Valdivia, de Tourmaps',
    t: 'Valdivia · la ciudad de los ríos',
    d: 'Ríos, fortificaciones españolas y bosque valdiviano en clave interpretativa: la historia como invitación a recorrer.',
    tag: 'Mapa ilustrado' },
  { src: '/images/medios/tourmaps/mapa-mural.jpg',
    alt: 'Mapa mural regional y comunal de la Oficina de Turismo de Puerto Montt, realizado por Tourmaps',
    t: 'Mapa mural en la oficina de turismo',
    d: 'Un mapa regional y comunal instalado como pieza de interpretación a gran escala en la Oficina de Turismo de Puerto Montt.',
    tag: 'En el terreno' },
  { src: '/images/medios/tourmaps/mapa-navimag.jpg',
    alt: 'Entrega de mapas ilustrados de Tourmaps a la empresa Navimag',
    t: 'De Tourmaps a la bahía',
    d: 'La interpretación viaja también en la empresa: entrega de mapas ilustrados que llevan el territorio a bordo.',
    tag: 'En el terreno' },
];

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

export const MediosInterpretativos: React.FC<MediosInterpretativosProps> = ({ onBack }) => {
  const reduce = useReducedMotion();

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const yDecorA = useTransform(scrollYProgress, (v) => (reduce ? 0 : v * 120));
  const yDecorB = useTransform(scrollYProgress, (v) => (reduce ? 0 : v * 240));

  const mapaRef = useRef<HTMLDivElement>(null);

  const [modalIdx, setModalIdx] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#F6F1E5] text-slate-900 pb-20 font-sans">
      {/* ===== HERO ===== */}
      <section
        ref={heroRef}
        className="relative bg-gradient-to-br from-[#14281C] via-[#1D3626] to-[#2E4E37] text-white overflow-hidden py-14 sm:py-24 px-4 sm:px-6 border-b border-[#2A4533]"
      >
        <motion.div className="absolute inset-0 opacity-15 bg-[radial-gradient(#E8A58B_1.4px,transparent_1.4px)] [background-size:22px_22px]" style={{ y: yDecorA }} />
        <motion.div className="absolute -right-12 -top-12 w-56 h-56 rounded-full bg-[#B04E2A]/25 blur-3xl" style={{ y: yDecorB }} />
        <motion.div className="absolute -left-20 bottom-0 w-72 h-72 rounded-full bg-[#D97706]/15 blur-3xl" style={{ y: yDecorB }} />

        <div className="relative max-w-5xl mx-auto space-y-7">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <motion.span
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#E8A58B] border border-[#B04E2A]/40 text-xs font-bold uppercase tracking-widest backdrop-blur-md"
            >
              <Layers className="w-4 h-4" />
              El cuerpo interpretativo del mensaje
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
              Los{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A58B] via-[#D97A46] to-[#FBBF24]">
                medios interpretativos
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="text-sm sm:text-lg text-slate-200 max-w-3xl leading-relaxed"
            >
              Del guía que conversa en el sendero al mapa ilustrado que cabe en la mochila: todo lo que hace
              llegar el mensaje interpretativo a la audiencia. Cómo definieron y clasificaron los autores lo que
              hoy llamamos “medios interpretativos” — y por qué un guía también es un medio.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-wrap gap-2"
          >
            {['Personales', 'No personales', 'Autoguiados', 'Virtuales', 'Mapa interpretativo'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-[11px] font-extrabold uppercase tracking-wider text-[#E8A58B]"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== ¿QUÉ ES UN MEDIO? ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-2"
        >
          <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md">
            <Layers className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Definición</p>
            <h2 className="text-2xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              ¿Qué es un medio interpretativo?
            </h2>
          </div>
        </motion.div>
        <p className="text-sm text-slate-600 max-w-4xl leading-relaxed mt-3 mb-8">
          Todo intento de interpretación precisa de un soporte que actúe de mediador entre el público y el
          patrimonio que se quiere revelar: ese soporte es el <strong>medio interpretativo</strong>. Puede ser una
          persona entrenada, un panel de madera en un mirador, un folleto desplegable, una exposición o una
          audioguía. Cualquiera sea su forma, su oficio es el mismo: <strong>entregar el mensaje en el momento y el
          lugar adecuados</strong>.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {DEFINICIONES.map((d, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: (i % 2) * 0.08, duration: 0.5, ease: 'easeOut' }}
              whileHover={{ y: -3 }}
              className="bg-white rounded-3xl border border-[#E4D8BF] shadow-sm hover:shadow-lg hover:border-[#B04E2A]/30 transition-all p-5 flex flex-col gap-2"
            >
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#B04E2A]">{d.autor}</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{d.obra}</p>
              <p className="text-xs text-slate-600 leading-relaxed">{d.def}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ===== CLASIFICACIÓN ===== */}
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
              <Compass className="w-5 h-5" />
            </span>
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8A58B]">Stewart (1981) · Morales · Ham</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
                Personales frente a no personales
              </h2>
            </div>
          </motion.div>
          <p className="text-sm text-[#E4D8BF] max-w-3xl mt-3 mb-3 leading-relaxed">
            La clasificación clásica —desde Lillian Stewart (1981), sistematizada en español por Jorge Morales y
            actualizada por Guerra, Sureda y Castells— separa los medios <strong>atendidos por personas</strong> de los{' '}
            <strong>no atendidos o autónomos</strong>. Ninguno es superior: en un lugar un medio es básico y en otro
            complementario (Guerra y Morales, 1996).
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="rounded-3xl border border-[#E8A58B]/30 bg-white/[0.04] p-5 sm:p-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B04E2A] text-white text-[10px] font-extrabold uppercase tracking-widest mb-4">
                <Users className="w-3 h-3" />
                Medios personales · guiados
              </span>
              <div className="space-y-4">
                {MEDIOS_PERSONALES.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: i * 0.08, duration: 0.45 }}
                    className="flex gap-3 items-start"
                  >
                    <span className="w-10 h-10 rounded-xl bg-[#E8A58B]/10 border border-[#E8A58B]/40 text-[#E8A58B] grid place-items-center flex-shrink-0">{m.icon}</span>
                    <div>
                      <h3 className="text-sm font-extrabold text-white">{m.t}</h3>
                      <p className="text-[12px] text-[#CDD9CF] leading-relaxed mt-0.5">{m.a}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E4E37] text-[#E8A58B] text-[10px] font-extrabold uppercase tracking-widest mb-4">
                <Frame className="w-3 h-3" />
                Medios no personales · autoguiados
              </span>
              <div className="space-y-4">
                {MEDIOS_NO_PERSONALES.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ delay: i * 0.08, duration: 0.45 }}
                    className="flex gap-3 items-start"
                  >
                    <span className="w-10 h-10 rounded-xl bg-[#E8A58B]/10 border border-[#E8A58B]/40 text-[#E8A58B] grid place-items-center flex-shrink-0">{m.icon}</span>
                    <div>
                      <h3 className="text-sm font-extrabold text-white">{m.t}</h3>
                      <p className="text-[12px] text-[#CDD9CF] leading-relaxed mt-0.5">{m.a}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Físicos · virtuales · híbridos */}
          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45 }}
              className="rounded-2xl bg-white/[0.04] border border-white/10 p-4"
            >
              <h3 className="text-[12px] font-extrabold uppercase tracking-wider text-[#E8A58B]">Medios físicos</h3>
              <p className="text-[11px] text-[#CDD9CF] leading-relaxed mt-1">Señalética y paneles, senderos, cartelería, publicaciones y mapas en papel, centros de visitantes.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: 0.08 }}
              className="rounded-2xl bg-white/[0.04] border border-white/10 p-4"
            >
              <h3 className="text-[12px] font-extrabold uppercase tracking-wider text-[#E8A58B]">Medios virtuales</h3>
              <p className="text-[11px] text-[#CDD9CF] leading-relaxed mt-1">Mapas digitales interactivos, audioguías, realidad aumentada, contenidos por QR, geolocalización.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="rounded-2xl bg-white/[0.04] border border-white/10 p-4"
            >
              <h3 className="text-[12px] font-extrabold uppercase tracking-wider text-[#D97706]">Medios híbridos</h3>
              <p className="text-[11px] text-[#CDD9CF] leading-relaxed mt-1">El QR que abre la audioguía del hito que estás tocando: lo físico y lo virtual entrelazados.</p>
            </motion.div>
          </div>

          {/* Criterios */}
          <div className="mt-6">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8A58B] mb-3">4 criterios para elegir el medio</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {CRITERIOS.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.07, duration: 0.45 }}
                  className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 hover:border-[#E8A58B]/40 transition-colors"
                >
                  <span className="w-9 h-9 rounded-xl bg-[#B04E2A]/30 text-[#E8A58B] grid place-items-center mb-2">{c.icon}</span>
                  <h3 className="text-[13px] font-extrabold text-white">{c.t}</h3>
                  <p className="text-[11px] text-[#CDD9CF] leading-relaxed mt-1">{c.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== EL MAPA INTERPRETATIVO ===== */}
      <section ref={mapaRef} className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-2"
        >
          <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#B04E2A] to-[#D97706] text-white grid place-items-center shadow-md">
            <MapIcon className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Un medio muy específico</p>
            <h2 className="text-2xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              El mapa interpretativo
            </h2>
          </div>
        </motion.div>
        <p className="text-sm text-slate-600 max-w-4xl leading-relaxed mt-3 mb-8">
          Entre los medios no personales destaca un soporte con una tarea doble: <strong>orientar y revelar</strong>.
          El mapa interpretativo no es un plano turístico común: selecciona contenidos, ordena el recorrido,
          incorpora pictogramas y textos interpretativos, y convierte la cartografía en narrativa de un territorio.
          Es, a la vez, un medio autónomo y un <strong>centro que complementa a otros medios</strong>:
        </p>

        {/* Diagrama: mapa central + satélites */}
        <div className="relative grid gap-4 md:grid-cols-3">
          {/* Núcleo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="md:col-span-1 order-1 relative rounded-3xl overflow-hidden border-2 border-[#B04E2A]/50 bg-[#14281C] text-white shadow-2xl p-6 flex flex-col items-center justify-center text-center"
          >
            <motion.span
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.2, ease: 'easeInOut' }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#B04E2A] to-[#D97706] text-white grid place-items-center shadow-lg mb-4"
            >
              <MapIcon className="w-8 h-8" />
            </motion.span>
            <h3 className="text-xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">El mapa interpretativo</h3>
            <p className="text-[11px] text-[#E4D8BF] leading-relaxed mt-2 max-w-xs">
              Orienta el cuerpo y siembra el asombro: integra señales, textos, pictogramas y rutas autoguiadas en
              un solo soporte portátil.
            </p>
            <span className="mt-3 text-[10px] font-extrabold uppercase tracking-widest text-[#E8A58B]">Se complementa con…</span>
          </motion.div>

          {/* Satélites */}
          {MAPA_COMPLEMENTOS.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.5 }}
              className="relative rounded-3xl border border-[#E4D8BF] bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all p-5 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md">{m.icon}</span>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">Complemento {i + 1}</span>
              </div>
              <h3 className="text-sm font-extrabold text-[#14281C]">{m.t}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{m.a}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-6 text-sm text-slate-600 max-w-4xl leading-relaxed"
        >
          En la práctica esto produce una <strong>experiencia en cadena</strong>: el mapa recibe al visitante y le da el
          hilo; los <strong>paneles</strong> profundizan los hitos del recorrido; el <strong>desplegable</strong> viaja con él y
          prolonga la historia en casa; y los <strong>medios virtuales</strong> (QR, audioguía GPS) despiertan la voz del
          lugar en el punto exacto. Cuatro medios, una sola interpretación — la misma que el guía hilvana cuando
          se suma al grupo.
        </motion.p>
      </section>

      {/* ===== CHILE PIONERO: OLTREMARI · CONAF ===== */}
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
              <Landmark className="w-5 h-5" />
            </span>
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8A58B]">Chile · Los primeros medios, en terreno</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
                La interpretación se instala en los parques chilenos
              </h2>
            </div>
          </motion.div>
          <p className="text-sm text-[#E4D8BF] max-w-3xl mt-3 mb-8 leading-relaxed">
            Los medios llegaron a Chile con la propia disciplina: en la década de 1970 CONAF y la Universidad
            Austral de Chile dieron los primeros pasos formales, y la FAO (1974) documentó su expansión.
            El registro pionero lo dejó <strong>Juan Oltremari</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {HALLAZGOS.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="rounded-3xl bg-white/[0.05] border border-white/10 p-5 sm:p-6 hover:border-[#E8A58B]/40 transition-colors"
              >
                <span className="w-11 h-11 rounded-2xl bg-[#E8A58B]/10 border border-[#E8A58B]/40 text-[#E8A58B] grid place-items-center mb-3">{h.icon}</span>
                <h3 className="text-base font-extrabold font-['Cormorant_Garamond',Georgia,serif]">{h.t}</h3>
                <p className="text-[12px] text-[#CDD9CF] leading-relaxed mt-1.5">{h.a}</p>
              </motion.div>
            ))}
          </div>

          {/* Tarjeta Oltremari */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55 }}
            className="mt-6 rounded-3xl overflow-hidden border border-[#B04E2A]/40 bg-[#14281C]"
          >
            <div className="p-6 sm:p-8 space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B04E2A] text-white text-[10px] font-extrabold uppercase tracking-widest">
                <AudioLines className="w-3 h-3" />
                El primer registro institucional
              </span>
              <h3 className="text-2xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
                Juan Oltremari: la interpretación entra a CONAF
              </h3>
              <p className="text-sm text-[#E4D8BF] max-w-3xl leading-relaxed">
                Ingeniero forestal ligado a <strong>CONAF</strong> y a la Facultad de Ciencias Forestales de la
                Universidad Austral de Chile, Oltremari publicó los primeros estudios chilenos sobre interpretación
                en la <em>Revista Bosque</em>. Sobre ellos, Jorge Morales —a propósito de la investigación de Juan C.
                Castaing para la National Association for Interpretation— destacó que el Centro de Visitantes
                Aguas Calientes del Parque Nacional Puyehue (1971) y sus senderos autoguiados fueron de los
                primeros del país (Lovelady, 1972; FAO, 1974). Con Oltremari, la interpretación deja en Chile su
                primera huella oficial: <strong>ya no era una palabra importada, sino una práctica documentada</strong>.
              </p>
              <div className="space-y-1.5">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8A58B]">Publicaciones</p>
                <ul className="space-y-1.5">
                  <li className="flex items-start gap-2 text-xs text-[#E4D8BF] leading-relaxed">
                    <QrCode className="w-3.5 h-3.5 text-[#E8A58B] flex-shrink-0 mt-0.5" />
                    Oltremari, J. (1975). La Interpretación y el Desarrollo de los Parques Nacionales. Revista BOSQUE, Universidad Austral de Chile.
                  </li>
                  <li className="flex items-start gap-2 text-xs text-[#E4D8BF] leading-relaxed">
                    <QrCode className="w-3.5 h-3.5 text-[#E8A58B] flex-shrink-0 mt-0.5" />
                    Oltremari, J. (1979). Los usuarios y las instalaciones interpretativas del Centro de Visitantes Aguas Calientes, Parque Nacional Puyehue. Revista BOSQUE, Universidad Austral de Chile.
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== CONCLUSIÓN: TOURMAPS EN CHILE ===== */}
      <section className="bg-[#F6F1E5] py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-2"
          >
            <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#B04E2A] to-[#D97706] text-white grid place-items-center shadow-md">
              <MapIcon className="w-5 h-5" />
            </span>
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Conclusión · El ejemplo chileno</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
                El mapa interpretativo, hoy: Tourmaps
              </h2>
            </div>
            <img
              src="/images/medios/tourmaps/TOURMAPS-LOGO-2022.png"
              alt="Logo de Tourmaps, Diseño y Marketing Turístico"
              className="h-7 sm:h-9 ml-auto"
            />
          </motion.div>
          <p className="text-sm text-slate-600 max-w-4xl mt-3 mb-2 leading-relaxed">
            La conclusión de este recorrido por la teoría es que el <strong>mapa interpretativo</strong> no reemplaza a
            ningún medio: los ordena. Y en Chile hay un ejemplo que lo encarna: <strong>Tourmaps</strong> (&ldquo;Conectamos
            personas con territorios&rdquo;) lleva dos décadas diseñando mapas ilustrados e interpretativos que
            dialogan con paneles, desplegables y medios virtuales.
          </p>
          <p className="text-sm text-slate-600 max-w-4xl mb-8 leading-relaxed">
            Sus mapas de Puerto Montt, la Ruta del Río San Pedro, Maullín y Valdivia condensan cartografía,
            señalética y narrativa en un solo soporte; su mapa mural es panel a escala monumental; y con la
            audioguía oficial <em>Iglesias de Chiloé</em> de esta plataforma, el papel escaneado despierta el medio
            virtual. Toca cada tarjeta: cada imagen emerge en grande.
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
                className="group relative text-left rounded-3xl overflow-hidden border border-[#E4D8BF] shadow-lg h-56 hover:border-[#B04E2A]/50 transition-colors bg-white"
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

          {/* Tarjeta aliado */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="mt-8 rounded-3xl overflow-hidden border border-[#B04E2A]/40 bg-[#14281C] text-white"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 sm:p-8">
              <div className="flex-1 space-y-2">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8A58B]">El medio en el territorio</p>
                <h3 className="text-xl sm:text-2xl font-extrabold font-['Cormorant_Garamond',Georgia,serif] max-w-2xl">
                  De los paneles de un centro de visitantes a la audioguía de Chiloé
                </h3>
                <p className="text-xs text-[#CDD9CF] leading-relaxed max-w-2xl">
                  Tourmaps reúne, en la cadena de medios que describen los autores, los cuatro eslabones: el mapa
                  que hilvana, el panel que profundiza, el desplegable que viaja y el medio virtual que suena.
                  La interpretación del patrimonio, hoy, se imprime, se instala, se despliega y se escucha a lo
                  largo de todo Chile.
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
      <section className="bg-[#14281C] text-[#F6F1E5] py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-5">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-extrabold font-['Cormorant_Garamond',Georgia,serif] max-w-lg"
          >
            Elegir el medio es decidir la emoción
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm text-[#E4D8BF] max-w-2xl leading-relaxed"
          >
            Desde Tilden hasta los mapas ilustrados, el medio nunca es un mero canal: es la mano que acerca el
            patrimonio. Un buen guía, un panel bien escrito, un desplegable que invita y un mapa que revela — todos
            persiguen lo mismo: que el visitante se lleve el significado, no solo la información. Y cuando el
            territorio chileno se interpreta, esa cadena de medios encuentra en Tourmaps a uno de sus mejores
            artesanos.
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
              Referencias teóricas: F. Tilden, <em>Interpreting Our Heritage</em> (1957); L. Stewart (1981),
              clasificación de medios según Guerra, Sureda y Castells (2008) y F. J. Guerra Rosado,
              <em> Medios para la interpretación del patrimonio. Planificación y gestión</em> (Junta de Andalucía,
              2022); J. Morales, <em>Los medios interpretativos</em> (1988) y <em>Guía práctica para la interpretación del
              patrimonio</em> (1998/2001); S. Ham, <em>Interpretación Ambiental</em> (1992) e <em>Interpretación</em> (2014);
              L. Beck &amp; T. Cable, <em>The Gifts of Interpretation</em> (2011). Los textos de Oltremari están citados en la
              investigación de J. C. Castaing, “Juan C. Castaing” (Legacy, National Association for Interpretation,
              2024/2025), que recoge la valoración de Jorge Morales sobre el Centro de Visitantes Aguas Calientes,
              P.N. Puyehue (Lovelady, 1972; FAO, 1974).
            </p>
            <p>
              Mapas ilustrados y fotografías de terreno: © Tourmaps, Diseño y Marketing Turístico
              (www.tourmaps.cl) — mapas ilustrados e interpretativos de Puerto Montt, Ruta del Río San Pedro,
              Maullín y Valdivia; mapa mural de la Oficina de Turismo de Puerto Montt; entrega institucional de
              mapas. Reproducidos con fines divulgativos sobre los medios de la interpretación del patrimonio y
              el trabajo de Tourmaps en Chile.
            </p>
          </div>
        </div>
      </section>

      {/* ===== MODAL DE GALERÍA ===== */}
      <AnimatePresence>
        {modalIdx !== null && (
          <GaleriaModal item={TOURMAPS_GALERIA[modalIdx]} onClose={() => setModalIdx(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};