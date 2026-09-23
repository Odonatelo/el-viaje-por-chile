import React from 'react';
import {
  ArrowRight,
  Library,
  BookOpen,
  Landmark,
  Mountain,
  ShieldAlert,
  TreePine,
  Shell,
  Scale,
  Users,
  Briefcase,
  UtensilsCrossed,
  Bus,
  MapPinned,
  Fish,
  Accessibility,
  PawPrint,
  FileText,
  Download,
  ExternalLink,
} from 'lucide-react';

const DOCS = [
  {
    nr: 'NCh 2975',
    titulo: 'Senderismo o Hiking — Requisitos',
    meta: 'Instituto Nacional de Normalización · Requisitos de la actividad de senderismo',
    tags: ['Senderismo', 'Hiking'],
    pdf: '/pdf/NCh2975_Senderismo_o_Hiking_Requisitos.pdf',
  },
  {
    nr: 'NCh 2985',
    titulo: 'Excursionismo o Trekking — Requisitos',
    meta: 'Instituto Nacional de Normalización · Requisitos de la actividad de excursionismo',
    tags: ['Excursionismo', 'Trekking'],
    pdf: '/pdf/NCh2985_Excursionismo_o_Trekking_Requisitos.pdf',
  },
  {
    nr: 'NCh 2962',
    titulo: 'Montaña — Requisitos',
    meta: 'Instituto Nacional de Normalización · Requisitos de la actividad de montaña',
    tags: ['Montaña'],
    pdf: '/pdf/NCh2962_Montana_Requisitos.pdf',
  },
  {
    nr: 'NCh 2951',
    titulo: 'Alta Montaña — Requisitos',
    meta: 'Instituto Nacional de Normalización · Requisitos de la actividad de alta montaña',
    tags: ['Alta montaña'],
    pdf: '/pdf/NCh2951_Alta_Montana_Requisitos.pdf',
  },
  {
    nr: 'NCh 2950',
    titulo: 'Guías de Turismo Especializados — Requisitos',
    meta: 'Instituto Nacional de Normalización · Competencias y formación de guías',
    tags: ['Guías', 'Turismo'],
    pdf: '/pdf/NCh2950_Guias_Turismo_Especializados_Requisitos.pdf',
  },
  {
    nr: 'Res. 271',
    titulo: 'Resolución Exenta 271 (2026) — Actualiza Normas de Turismo Aventura',
    meta: 'Servicio Nacional de Turismo (Sernatur) · Marco normativo vigente del turismo aventura',
    tags: ['Turismo aventura', 'Sernatur'],
    pdf: '/pdf/Resolucion_Exenta_271_2026_Actualiza_Normas_Turismo_Aventura.pdf',
  },
  {
    nr: 'Guía',
    titulo: 'Guía para la Interpretación en Áreas Protegidas',
    meta: 'Subsecretaría de Turismo de Chile · Guía metodológica de interpretación del patrimonio en áreas protegidas',
    tags: ['Interpretación del patrimonio', 'Áreas protegidas', 'Subturismo'],
    pdf: '/pdf/guia-para-la-interpretacion-en-areas-protegidas.pdf',
  },
  {
    nr: 'NCh 3067',
    titulo: 'Tour Operadores u Operadores Mayoristas — Requisitos',
    meta: 'Instituto Nacional de Normalización · Requisitos de gestión, calidad y competencias para tour operadores',
    tags: ['Operadores', 'Turismo'],
    pdf: '/pdf/NCh3067_Tour_Operadores_Requisitos.pdf',
  },
  {
    nr: 'NCh 3068',
    titulo: 'Agencias de Viajes — Requisitos',
    meta: 'Instituto Nacional de Normalización · Requisitos de gestión, calidad y competencias para agencias de viajes',
    tags: ['Operadores', 'Agencias'],
    pdf: '/pdf/NCh3068_Agencias_de_Viajes_Requisitos.pdf',
  },
];

const CATEGORIAS = [
  {
    icon: <Briefcase className="w-5 h-5" />,
    titulo: 'Marco institucional del turismo',
    desc: 'La Ley 20.423 crea el Sistema Institucional para el Desarrollo del Turismo y las Zonas de Interés Turístico (ZOIT). Define cómo se ordena, promueve y regula la actividad a nivel nacional y regional.',
    ejemplos: ['Ley 20.423', 'Sernatur y Subsecretaría de Turismo', 'Registro de Prestadores de Servicios Turísticos', 'Sello S de Sustentabilidad'],
  },
  {
    icon: <Mountain className="w-5 h-5" />,
    titulo: 'Normas técnicas de actividades (INN)',
    desc: 'Las normas del Instituto Nacional de Normalización fijan requisitos mínimos de seguridad, señalética y competencia para cada actividad: senderismo, trekking, montaña, alta montaña, guías y operadores.',
    ejemplos: ['NCh 2975 · Senderismo', 'NCh 2985 · Excursionismo', 'NCh 2962 · Montaña', 'NCh 2951 · Alta montaña'],
  },
  {
    icon: <ShieldAlert className="w-5 h-5" />,
    titulo: 'Turismo aventura y resoluciones Sernatur',
    desc: 'Resoluciones del Sernatur actualizan periódicamente las normas aplicables a los servicios de turismo aventura, incorporando las versiones vigentes de las NCh y las exigencias de operación.',
    ejemplos: ['Res. Exenta 271 (2026)', 'Res. Exenta 51 (2006)', 'Oficinas locales de turismo aventura'],
  },
  {
    icon: <TreePine className="w-5 h-5" />,
    titulo: 'Áreas silvestres protegidas (SNASPE · SBAP)',
    desc: 'Parques, reservas y monumentos naturales se rigen por el Sistema Nacional de Áreas Silvestres Protegidas del Estado; la nueva institucionalidad los administra junto a servicios ecosistémicos y planes de uso público.',
    ejemplos: ['Ley 18.362 (SNASPE)', 'Ley 21.600 (Servicio de Biodiversidad y Áreas Protegidas, SBAP)', 'Reglamento de uso público CONAF', 'Pase de Parques'],
  },
  {
    icon: <Landmark className="w-5 h-5" />,
    titulo: 'Patrimonio cultural y monumentos',
    desc: 'La Ley de Monumentos Nacionales protege sitios históricos, arqueológicos, paleontológicos y conjuntos declarados. Intervenir, transitar o interpretar en ellos exige autorización del Consejo de Monumentos Nacionales.',
    ejemplos: ['Ley 17.288', 'Autorizaciones CMN', 'Protección a sitios arqueológicos', 'Pueblos originarios (Ley 19.253)'],
  },
  {
    icon: <Scale className="w-5 h-5" />,
    titulo: 'Medio ambiente',
    desc: 'Leyes ambientales condicionan la operación turística: evaluación de impacto, emisiones, ruido y gestión de residuos. Relevante para proyectos en áreas sensibles o de alto flujo.',
    ejemplos: ['Ley 19.300 (Bases del Medio Ambiente)', 'Sistema de Evaluación de Impacto Ambiental (SEIA)', 'Ley 21.600 (SBAP)', 'Ordenanzas de residuos'],
  },
  {
    icon: <PawPrint className="w-5 h-5" />,
    titulo: 'Fauna y flora',
    desc: 'La caza, captura y manipulación de especies se regula; la observación de fauna silvestre debe seguir protocolos para no alterar su comportamiento ni su hábitat.',
    ejemplos: ['Ley 19.473 (SAG)', 'CITES', 'Protocolos de avistamiento responsable', 'Especies exóticas invasoras'],
  },
  {
    icon: <Shell className="w-5 h-5" />,
    titulo: 'Costas, mares y pueblos costeros',
    desc: 'Espacios costeros marinos de pueblos originarios (ECMPO), caletas y áreas marinas protegidas regulan el desarrollo turístico costero y náutico en territorio de comunidades.',
    ejemplos: ['Ley 20.249 (ECMPO)', 'Áreas marinas costeras protegidas', 'Zonas de caletas y borde costero'],
  },
  {
    icon: <Users className="w-5 h-5" />,
    titulo: 'Consumidores y empresas turísticas',
    desc: 'La ley de protección al consumidor obliga a información clara, cumplimiento de lo prometido y garantías ante cancelaciones o fallas del servicio, base de la confianza de cualquier experiencia.',
    ejemplos: ['Ley 19.496', 'SERNAC', 'Publicidad y condiciones claras', 'Reembolsos y reprogramaciones'],
  },
  {
    icon: <UtensilsCrossed className="w-5 h-5" />,
    titulo: 'Alimentos y sanidad',
    desc: 'Servicios de alimentación, agua y manipulación de alimentos siguen el reglamento sanitario; claves en turismo rural, campamentos y operación de lodge o picnics patrimoniales.',
    ejemplos: ['DS 977/96 (Reglamento Sanitario de Alimentos)', 'Manipulación y transporte de alimentos', 'Etiquetado (Ley 20.606)', 'Agua potable en faenas'],
  },
  {
    icon: <Bus className="w-5 h-5" />,
    titulo: 'Transporte y tránsito',
    desc: 'Traslados de pasajeros por tierra, mar y aire tienen su propio marco: condiciones de los vehículos, licencias, navegación y operación de embarcaciones turísticas.',
    ejemplos: ['Ley 18.290 (Tránsito)', 'Directemar (navegación y buceo)', 'Autoridad Aeronáutica', 'Rutas y terminales'],
  },
  {
    icon: <MapPinned className="w-5 h-5" />,
    titulo: 'Municipal y territorial',
    desc: 'Los permisos municipales, patentes y ordenanzas locales definen dónde y cómo puede operar un servicio turístico en el territorio, incluidos usos de suelo para ferias, mercados o infraestructura.',
    ejemplos: ['Patentes comerciales', 'Ordenanzas locales', 'Uso de suelo', 'Permisos de actividades'],
  },
  {
    icon: <Fish className="w-5 h-5" />,
    titulo: 'Pesca recreativa y náutica',
    desc: 'La pesca recreativa y actividades náuticas regulan cuotas, tamaños, embarcaciones y áreas permitidas, con reglas especiales por cuerpo de agua.',
    ejemplos: ['Reglamento de pesca recreativa', 'Cuotas y vedas', 'Buceo y trolling (Directemar)'],
  },
  {
    icon: <Accessibility className="w-5 h-5" />,
    titulo: 'Accesibilidad e inclusión',
    desc: 'La normativa de inclusión obliga al diseño accesible de espacios, servicios e información, permitiendo que la experiencia patrimonial sea universalmente compartida.',
    ejemplos: ['Ley 20.422', 'Accesibilidad universal en espacios', 'Servicios e información accesibles'],
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    titulo: 'Ética e interpretación',
    desc: 'Guías y protocolos de interpretación del patrimonio orientan cómo narrar, cautelar y comunicar el valor natural y cultural, evitando la banalización y el daño al lugar.',
    ejemplos: ['Guía para la Interpretación en Áreas Protegidas', 'Protocolos de avistamiento (pumas, cetáceos)', 'Códigos de conducta en áreas protegidas'],
  },
];

interface NormativasPageProps {
  onBack: () => void;
}

export const NormativasPage: React.FC<NormativasPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#F6F1E5] text-slate-900 pb-20 font-sans">

      {/* ===== Hero ===== */}
      <section className="relative bg-gradient-to-br from-[#14281C] via-[#1D3626] to-[#2E4E37] text-white overflow-hidden py-14 sm:py-20 px-4 sm:px-6 border-b border-[#2A4533]">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#E8A58B_1.4px,transparent_1.4px)] [background-size:22px_22px]" />
        <div className="absolute -right-12 -top-12 w-56 h-56 rounded-full bg-[#B04E2A]/25 blur-3xl" />

        <div className="relative max-w-5xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#E8A58B] border border-[#B04E2A]/40 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              <Library className="w-4 h-4" />
              Biblioteca técnica · Normativas
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
            Normativas que afectan las{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A58B] via-[#D97A46] to-[#FBBF24]">
              actividades turísticas en Chile
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            Normas oficiales del Instituto Nacional de Normalización (INN), resoluciones del Sernatur
            y el ecosistema legal chileno que define cómo diseñar, operar y comunicar una experiencia
            turística: <strong className="text-white">seguridad, patrimonio, medio ambiente, consumidores y territorio</strong>.
            Esta página migra y amplía la biblioteca técnica de la plataforma.
          </p>
        </div>
      </section>

      {/* ===== Intro ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="bg-white rounded-3xl border border-[#E4D8BF] shadow-lg p-6 sm:p-8 space-y-4 max-w-4xl">
          <p className="text-sm text-slate-700 leading-relaxed">
            Estas normas definen los <strong>requisitos mínimos de seguridad, señalética y competencia</strong> en las
            actividades de senderismo (hiking) y excursionismo (trekking) en Chile, junto con la operación de los
            servicios de intermediación turística. La <strong>Resolución 271 (2026)</strong> actualiza el marco normativo
            vigente del turismo aventura, incorporando las normas más recientes del INN.
          </p>
          <p className="text-sm text-slate-700 leading-relaxed">
            Toda iniciativa turística que quiera ofrecer un producto o una experiencia de calidad parte por conocer
            el marco normativo que le corresponde: las normas técnicas son la base sobre la que se diseñan servicios
            seguros, consistentes y memorables, desde la operación de un tour operador hasta la atención en un servicio
            de alimentación o transporte. Conocerlas en detalle no es un trámite, sino el <strong>primer paso del
            proceso de diseño</strong> de cualquier producto o experiencia turística.
          </p>
        </div>
      </section>

      {/* ===== Ecosistema normativo ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md">
            <Scale className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Panorama general</p>
            <h2 className="text-2xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              La variada gama de normativas que pueden afectar una actividad turística
            </h2>
          </div>
        </div>
        <p className="text-sm text-slate-600 max-w-4xl leading-relaxed mb-6">
          La biblioteca descargable de abajo reúne <strong>solo algunas</strong> de las normas aplicables. En Chile, una
          experiencia turística convive con un ecosistema legal amplio y transversal. Estos son los frentes que
          conviene revisar al diseñar, prototipar y operar:
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {CATEGORIAS.map((c, i) => (
            <details
              key={i}
              className="group bg-white rounded-3xl border border-[#E4D8BF] shadow-sm hover:shadow-lg hover:border-[#B04E2A]/40 transition-all open:shadow-lg open:border-[#B04E2A]/40 overflow-hidden"
            >
              <summary className="flex items-center gap-3 p-5 cursor-pointer list-none marker:hidden select-none">
                <span className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md flex-shrink-0">
                  {c.icon}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-extrabold text-[#14281C]">{c.titulo}</h3>
                  <p className="text-[11px] text-slate-500 mt-0.5">Explorar este frente normativo</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#B04E2A] flex-shrink-0 transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-5 pb-5 space-y-3">
                <p className="text-xs text-slate-600 leading-relaxed">{c.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {c.ejemplos.map((e, ei) => (
                    <span key={ei} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F6F1E5] border border-[#E4D8BF] text-[11px] font-semibold text-slate-600">
                      <FileText className="w-3 h-3 text-[#B04E2A]" />
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* ===== Biblioteca documental ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="bg-white rounded-3xl border border-[#E4D8BF] shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#14281C] to-[#2E4E37] text-white p-6 sm:p-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B04E2A]/30 text-[#E8A58B] text-[10px] font-extrabold uppercase tracking-widest border border-[#B04E2A]/50 mb-3">
              <Download className="w-3 h-3" />
              Descarga libre
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
              Normativas de trekking, hiking y operación turística
            </h2>
            <p className="text-xs text-slate-300 mt-2 max-w-2xl">
              Documentos oficiales del Instituto Nacional de Normalización (INN) y resoluciones del Sernatur
              aplicables al excursionismo, montaña, guías de turismo, turismo de aventura y operación de
              servicios turísticos. Disponibles para guías, operadores y visitantes.
            </p>
          </div>

          <div className="p-5 sm:p-8 grid gap-3">
            {DOCS.map((d, i) => (
              <a
                key={i}
                href={d.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid sm:grid-cols-[7rem_1fr_auto] gap-3 sm:gap-5 items-center p-4 sm:p-5 rounded-2xl bg-[#F6F1E5] border border-[#E4D8BF] hover:border-[#B04E2A] hover:shadow-lg transition-all"
              >
                <span className="font-['Cormorant_Garamond',Georgia,serif] text-xl sm:text-2xl font-semibold text-[#B04E2A]">
                  {d.nr}
                </span>
                <span className="min-w-0">
                  <span className="block font-['Cormorant_Garamond',Georgia,serif] text-lg sm:text-xl font-semibold text-[#14281C] leading-snug">
                    {d.titulo}
                  </span>
                  <span className="block text-xs text-slate-500 mt-0.5">{d.meta}</span>
                  <span className="flex flex-wrap gap-1.5 mt-2">
                    {d.tags.map((t, ti) => (
                      <span key={ti} className="px-2 py-0.5 rounded-full bg-white border border-[#E4D8BF] text-[10px] font-bold uppercase tracking-wider text-slate-500">
                        {t}
                      </span>
                    ))}
                  </span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#B04E2A] text-white text-[11px] font-bold uppercase tracking-wider group-hover:bg-[#9A3F1E] transition-colors whitespace-nowrap justify-center">
                  <Download className="w-3.5 h-3.5" />
                  Descargar PDF
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Nota ===== */}
      <section className="bg-[#14281C] text-[#F6F1E5] py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-5">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-['Cormorant_Garamond',Georgia,serif] max-w-md">
            Documentos de referencia libre
          </h3>
          <p className="text-sm text-[#E4D8BF] max-w-2xl leading-relaxed">
            Los textos completos de las normas NCh son publicados por el Instituto Nacional de Normalización;
            esta biblioteca reúne las versiones de acceso público difundidas por el Sernatur en su portal de
            servicios turísticos. Consulta siempre la versión vigente en el organismo oficial. Las descripciones
            de esta página son orientativas y no constituyen asesoría legal.
          </p>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B04E2A] hover:bg-[#9A3F1E] text-white text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Volver a la plataforma
          </button>
        </div>
      </section>
    </div>
  );
};