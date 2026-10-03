import React from 'react';
import {
  ArrowRight,
  BookOpen,
  Compass,
  Download,
  ExternalLink,
  FileText,
  Globe,
  Landmark,
  Library,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';

interface OrgDoc {
  titulo: string;
  desc: string;
  ano?: string;
  tipo: 'pdf' | 'web';
  url: string;
}

interface Org {
  id: string;
  nombre: string;
  region: string;
  fundada: string;
  enfoque: string;
  sitio: string;
  logo: string;
  descripcion: string;
  docs: OrgDoc[];
}

const ORGS: Org[] = [
  {
    id: 'nai',
    nombre: 'National Association for Interpretation',
    region: 'Estados Unidos y Norteamérica',
    fundada: '1954',
    enfoque: 'Asociación profesional y académica',
    sitio: 'https://www.nai-us.org/',
    logo: '/images/organizaciones/nai.png',
    descripcion:
      'La asociación profesional de interpretación más grande y antigua del mundo. NAI consolidó la disciplina tras la obra de Freeman Tilden mediante la certificación de intérpretes (CIT y CIG), la investigación académica y publicaciones de referencia como el Journal of Interpretation Research y la revista Legacy (con ediciones en español). Su red de intérpretes, museólogos, diseñadores y gestores de áreas protegidas es referente mundial para la museografía y el diseño de experiencias.',
    docs: [
      {
        titulo: 'De la interpretación a la protección: ¿existe una base teórica?',
        desc: 'Sam H. Ham expone en el Journal of Interpretation Research los fundamentos teóricos de la interpretación ambiental y su vínculo con la conservación.',
        ano: '2009',
        tipo: 'pdf',
        url: '/pdf/organizaciones/nai/NAI_JIR_14-2_2009.pdf',
      },
      {
        titulo: 'Estándares de la interpretación de NAI',
        desc: 'Conjunto de estándares profesionales que orientan la práctica del intérprete, la gestión de programas y la evaluación de resultados.',
        ano: '2019',
        tipo: 'pdf',
        url: '/pdf/organizaciones/nai/Standards_2019.pdf',
      },
      {
        titulo: 'Informe Anual NAI 2020-21',
        desc: 'Memoria institucional: membresía, certificación, publicaciones y alcance internacional de la asociación.',
        ano: '2021',
        tipo: 'pdf',
        url: '/pdf/organizaciones/nai/Annual_Report_202021.pdf',
      },
      {
        titulo: 'Informe Anual NAI 2023-24',
        desc: 'Última memoria publicada por NAI con la evolución de sus programas, convenciones y presencia global.',
        ano: '2024',
        tipo: 'pdf',
        url: '/pdf/organizaciones/nai/Annual_Report_202324.pdf',
      },
      {
        titulo: 'Legacy Magazine · edición en español',
        desc: 'La revista bimensual de referencia de la interpretación, con una edición periódica en español para la comunidad iberoamericana.',
        tipo: 'web',
        url: 'https://www.nai-us.org/Member_Area/Legacy/legacy_en_espanol_25.aspx',
      },
      {
        titulo: 'Portal de publicaciones NAI',
        desc: 'Acceso a Legacy, Journal of Interpretation Research, InterpPress y los recursos de certificación de la asociación.',
        tipo: 'web',
        url: 'https://www.nai-us.org/',
      },
    ],
  },
  {
    id: 'aip',
    nombre: 'Asociación para la Interpretación del Patrimonio',
    region: 'España e Iberoamérica',
    fundada: '1993',
    enfoque: 'La interpretación en castellano',
    sitio: 'https://www.interpretaciondelpatrimonio.com/',
    logo: '/images/organizaciones/aip.png',
    descripcion:
      'La asociación pionera de la interpretación del patrimonio en lengua española. Publica el Boletín de Interpretación, la revista donde la disciplina debate su teoría y su práctica en castellano desde la década de 1990, y organiza encuentros, cursos y el Festival de Intérpretes del Patrimonio. Su trabajo es el puente anglo-hispano del método y un referente para la museografía, la mediación cultural y el turismo patrimonial en España y América Latina.',
    docs: [
      {
        titulo: 'Boletín de Interpretación N.º 33',
        desc: 'La disciplina en español: comunicación, patrimonio y diseño interpretativo.',
        ano: '2008',
        tipo: 'pdf',
        url: '/pdf/organizaciones/aip/AIP_Boletin_33.pdf',
      },
      {
        titulo: 'Boletín de Interpretación N.º 34',
        desc: 'Interpretación temática, guionización y aproximaciones para entornos naturales.',
        ano: '2008',
        tipo: 'pdf',
        url: '/pdf/organizaciones/aip/AIP_Boletin_34.pdf',
      },
      {
        titulo: 'Boletín de Interpretación N.º 36',
        desc: 'Buenas prácticas, evaluación de programas y el oficio del intérprete.',
        ano: '2009',
        tipo: 'pdf',
        url: '/pdf/organizaciones/aip/AIP_Boletin_36.pdf',
      },
      {
        titulo: 'Boletín de Interpretación N.º 37',
        desc: 'Interpretación del patrimonio, turismo y gestión de sitios con vocación pública.',
        ano: '2009',
        tipo: 'pdf',
        url: '/pdf/organizaciones/aip/AIP_Boletin_37.pdf',
      },
      {
        titulo: 'Boletín de Interpretación N.º 38',
        desc: 'Mediación, comunicación patrimonial y experiencias interpretativas.',
        ano: '2010',
        tipo: 'pdf',
        url: '/pdf/organizaciones/aip/AIP_Boletin_38.pdf',
      },
      {
        titulo: 'Boletín de Interpretación N.º 40',
        desc: 'La profesión del intérprete del patrimonio: formación, estándares y desafíos.',
        ano: '2010',
        tipo: 'pdf',
        url: '/pdf/organizaciones/aip/AIP_Boletin_40.pdf',
      },
      {
        titulo: 'Hemeroteca del Boletín de Interpretación',
        desc: 'Todos los números publicados por la AIP, con acceso en línea desde su sitio oficial.',
        tipo: 'web',
        url: 'https://www.interpretaciondelpatrimonio.com/boletin-de-interpretacion/',
      },
    ],
  },
  {
    id: 'interpret-europe',
    nombre: 'Interpret Europe',
    region: 'Europa',
    fundada: '2010',
    enfoque: 'Red paneuropea de intérpretes',
    sitio: 'https://interpret-europe.net/',
    logo: '/images/organizaciones/interpret-europe.png',
    descripcion:
      'Asociación paneuropea (e.V., con sede en Alemania) que agrupa a intérpretes, instituciones y universidades de toda Europa. Organiza conferencias anuales, mantiene los boletines IE y el European Journal of Interpretation, y colabora con ICOMOS, UNESCO y el Consejo de Europa para alinear la interpretación con las políticas de patrimonio, paisaje y desarrollo sostenible del continente.',
    docs: [
      {
        titulo: 'Boletín IE · Primavera 2020',
        desc: 'Edición que abre la década: la red europea, sus proyectos y la interpretación en territorio.',
        ano: '2020',
        tipo: 'pdf',
        url: '/pdf/organizaciones/interpret-europe/IE_2020-1_spring.pdf',
      },
      {
        titulo: 'Boletín IE · Primavera 2021',
        desc: 'Conferencia anual IE 2021, premios y reflexiones sobre la interpretación durante la pandemia.',
        ano: '2021',
        tipo: 'pdf',
        url: '/pdf/organizaciones/interpret-europe/IE_2021-1_spring.pdf',
      },
      {
        titulo: 'Boletín IE · Invierno 2022',
        desc: 'Balance del año europeo y la interpretación como herramienta de cohesión cultural.',
        ano: '2022',
        tipo: 'pdf',
        url: '/pdf/organizaciones/interpret-europe/IE_2022-4_winter.pdf',
      },
      {
        titulo: 'Boletín IE · Primavera 2023',
        desc: 'Interpretación del patrimonio natural, áreas protegidas y turismo regenerativo.',
        ano: '2023',
        tipo: 'pdf',
        url: '/pdf/organizaciones/interpret-europe/IE_2023-1_spring.pdf',
      },
      {
        titulo: 'Boletín IE · Primavera 2024',
        desc: 'Conferencia IE 2024, redes nacionales y la voz de los intérpretes de toda Europa.',
        ano: '2024',
        tipo: 'pdf',
        url: '/pdf/organizaciones/interpret-europe/IE_2024-1_spring.pdf',
      },
      {
        titulo: 'Boletín IE · Primavera 2025',
        desc: 'Conferencia IE 2025, alianzas con ICOMOS y la agenda interpretativa del continente.',
        ano: '2025',
        tipo: 'pdf',
        url: '/pdf/organizaciones/interpret-europe/IE_2025-1_spring.pdf',
      },
      {
        titulo: 'Archivo de boletines IE',
        desc: 'Todas las ediciones del boletín de Interpret Europe disponibles en su sitio oficial.',
        tipo: 'web',
        url: 'https://interpret-europe.net/newsletter-archive/',
      },
    ],
  },
  {
    id: 'pup',
    nombre: 'PUP Consortium · PUP Global Heritage Consortium',
    region: 'Global (con foco iberoamericano)',
    fundada: '2015',
    enfoque: 'Gestión holística del patrimonio',
    sitio: 'https://pupconsortium.net/',
    logo: '/images/organizaciones/pup.jpg',
    descripcion:
      'Consorcio global dedicado a la gestión holística del patrimonio: unir la conservación con la experiencia del visitante para que el patrimonio se convierta en un motor de cambio social y ambiental. Impulsa el «marco interpretativo» (interpretive framework) y ha publicado libros clave para Latinoamérica como Esencia de la Interpretación del Patrimonio (UNED) y la Guía de campo para escribir temas interpretativos. Su boletín PUPdates conecta experiencias de Colombia, Costa Rica, Chile, México y otros países.',
    docs: [
      {
        titulo: 'PUPdates · boletín del consorcio',
        desc: 'Actualizaciones permanentes: proyectos, marcos interpretativos y noticias del consorcio y su red.',
        tipo: 'web',
        url: 'https://pupconsortium.net/pupdates',
      },
      {
        titulo: 'Esencia de la Interpretación del Patrimonio',
        desc: 'Mayorga y Kohl (2021, UNED). Visión holística para experimentar y conservar el patrimonio natural y cultural de América Latina.',
        ano: '2021',
        tipo: 'web',
        url: 'https://pupconsortium.net/2021-publications',
      },
      {
        titulo: 'Guía de campo para escribir temas interpretativos',
        desc: 'Jon Kohl. El compañero de bolsillo del libro de Sam Ham, adaptado para Iberoamérica (2.ª edición, 2024).',
        ano: '2024',
        tipo: 'web',
        url: 'https://pupconsortium.net/pupdates/13382844',
      },
      {
        titulo: 'Publicaciones destacadas del consorcio',
        desc: 'Artículos, libros y textos del consorcio y sus autores miembros, seleccionados por PUP.',
        tipo: 'web',
        url: 'https://pupconsortium.net/featured-publications',
      },
      {
        titulo: 'Informes anuales',
        desc: 'Memorias del consorcio: proyectos, membresías y avance de la gestión holística del patrimonio.',
        tipo: 'web',
        url: 'https://pupconsortium.net/annualreports',
      },
    ],
  },
];

const PILARES = [
  {
    icon: ShieldCheck,
    titulo: 'Estándares internacionales',
    texto:
      'La interpretación del patrimonio no es improvisación: tiene documentos normativos, cartas y estándares profesionales que definen cómo se interpreta un sitio sin banalizarlo.',
  },
  {
    icon: BookOpen,
    titulo: 'Acervo metodológico propio',
    texto:
      'Posee un cuerpo de método consolidado: el tema interpretativo, los principios de Tilden y los modelos de Ham y Beck & Cable, que se enseñan, investigan y publican.',
  },
  {
    icon: Compass,
    titulo: 'Historia en común',
    texto:
      'De los guardas naturalistas de los Parques Nacionales de Estados Unidos a los intérpretes de Europa, España y Latinoamérica: una misma genealogía profesional compartida.',
  },
  {
    icon: Landmark,
    titulo: 'Influye en museografía, mediación y diseño',
    texto:
      'Sus principios atraviesan los guiones museográficos, la mediación cultural y el diseño de experiencias turísticas: cualquier espacio que comunica patrimonio interpreta.',
  },
];

const ESTANDARES = [
  {
    icon: Sparkles,
    titulo: 'Carta de Interpretación y Presentación de Sitios Patrimoniales',
    org: 'ICOMOS · ENESÍ (Consejo Internacional de Monumentos y Sitios)',
    ano: '2008',
    desc:
      'El documento normativo de mayor alcance para la interpretación del patrimonio a nivel mundial. Define principios como el acceso, el respeto por el lugar, la sostenibilidad y la veracidad de las fuentes, y orienta la práctica de museógrafos, mediadores y diseñadores de experiencias.',
    tipo: 'pdf' as const,
    url: '/pdf/organizaciones/global/ICOMOS_2008_Carta_Interpretacion_ES.pdf',
  },
  {
    icon: Compass,
    titulo: 'Historia de la interpretación del patrimonio',
    org: 'El Viaje por Chile · Plataforma de Interpretación',
    ano: 'Línea de tiempo',
    desc:
      'De John Muir y Enos Mills a Freeman Tilden (Interpreting Our Heritage, 1957) y los modelos contemporáneos de Ham y Beck & Cable. La historia común que explica por qué estas organizaciones comparten método y vocación.',
    tipo: 'link' as const,
    url: '/historia',
  },
  {
    icon: Landmark,
    titulo: 'Diseño de experiencias interpretativas',
    org: 'El Viaje por Chile · Biblioteca abierta',
    ano: 'Guía práctica',
    desc:
      'Cómo los estándares de estas organizaciones se aplican al diseñar una audioguía, una ruta patrimonial o una experiencia turística: del tema interpretativo al recorrido geolocalizado por el territorio.',
    tipo: 'link' as const,
    url: '/disenodeexperiencias',
  },
];

interface OrganizacionesPageProps {
  onBack: () => void;
}

export const OrganizacionesPage: React.FC<OrganizacionesPageProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#F6F1E5] text-slate-900 pb-20 font-sans">

      {/* ===== Hero ===== */}
      <section className="relative bg-gradient-to-br from-[#14281C] via-[#1D3626] to-[#2E4E37] text-white overflow-hidden py-14 sm:py-20 px-4 sm:px-6 border-b border-[#2A4533]">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#E8A58B_1.4px,transparent_1.4px)] [background-size:22px_22px]" />
        <div className="absolute -right-12 -top-12 w-56 h-56 rounded-full bg-[#B04E2A]/25 blur-3xl" />
        <div className="absolute -left-16 bottom-0 w-72 h-72 rounded-full bg-[#2E4E37]/40 blur-3xl" />

        <div className="relative max-w-5xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#E8A58B] border border-[#B04E2A]/40 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              <Globe className="w-4 h-4" />
              Red global · Disciplina profesional
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
            La Interpretación del Patrimonio{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A58B] via-[#D97A46] to-[#FBBF24]">
              en el Mundo
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            La interpretación del patrimonio es una{' '}
            <strong className="text-white">disciplina profesional y académica</strong> con estándares
            internacionales, un acervo metodológico propio y una historia en común que une a intérpretes
            de todo el planeta. Mucho antes de la «narración», los intérpretes ya diseñaban experiencias
            con método: hoy esa disciplina{' '}
            <strong className="text-white">influye en la museografía, la mediación cultural y el diseño de experiencias</strong>{' '}
            en museos, parques y ciudades de Chile y del mundo.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href="#red"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#B04E2A] to-[#D97A46] text-white text-sm font-bold shadow-lg hover:opacity-95 transition-all"
            >
              <Users className="w-4 h-4" />
              Conocer las organizaciones
            </a>
            <a
              href="#estandares"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-bold border border-white/15 transition-all"
            >
              <BookOpen className="w-4 h-4" />
              Estándares internacionales
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
            {[
              { n: '4', t: 'organizaciones de referencia' },
              { n: '25+', t: 'boletines y publicaciones' },
              { n: '4', t: 'continentes' },
              { n: '1', t: 'disciplina con método' },
            ].map((s) => (
              <div key={s.t} className="rounded-2xl bg-white/5 border border-white/10 px-4 py-3 text-center backdrop-blur-md">
                <div className="text-2xl font-extrabold text-[#FBBF24]">{s.n}</div>
                <div className="text-[11px] uppercase tracking-wide text-slate-300 font-semibold">{s.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Pilares ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div className="max-w-2xl space-y-2">
            <span className="inline-flex items-center gap-1.5 text-[#B04E2A] text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4" />
              Por qué es una disciplina
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
              Una práctica con identidad propia
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-sm">
            No es storytelling: es <strong>comunicación patrimonial con método</strong>, investigación y
            estándares acordados por las organizaciones que integran a los intérpretes del mundo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PILARES.map((p) => (
            <div key={p.titulo} className="group bg-white rounded-3xl border border-[#E4D8BF] shadow-sm hover:shadow-lg hover:border-[#B04E2A]/40 transition-all p-6">
              <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md mb-4">
                <p.icon className="w-5 h-5" />
              </span>
              <h3 className="font-bold text-slate-900 mb-2">{p.titulo}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{p.texto}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Red de organizaciones ===== */}
      <section id="red" className="max-w-7xl mx-auto px-4 sm:px-6 py-8 scroll-mt-24">
        <div className="space-y-2 mb-8">
          <span className="inline-flex items-center gap-1.5 text-[#B04E2A] text-xs font-bold uppercase tracking-widest">
            <Globe className="w-4 h-4" />
            La red mundial de intérpretes
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
            Cuatro organizaciones, una misma disciplina
          </h2>
          <p className="text-sm text-slate-600 max-w-3xl">
            Estas organizaciones reúnen a intérpretes del patrimonio de todo el mundo, publican sus
            investigaciones y definen los estándares de la profesión. Cada una conserva su logotipo,
            su sitio oficial y su acervo documental.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {ORGS.map((org) => (
            <a
              key={org.id}
              href={`#${org.id}`}
              className="group bg-white rounded-3xl border border-[#E4D8BF] shadow-sm hover:shadow-xl hover:border-[#B04E2A]/40 transition-all p-6 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-white border border-[#E4D8BF] grid place-items-center p-2 shadow-sm">
                  <img src={org.logo} alt={`Logo de ${org.nombre}`} className="max-w-full max-h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 leading-snug">{org.nombre}</h3>
                  <p className="text-xs text-slate-500 font-semibold">
                    {org.region} · {org.enfoque}
                  </p>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-4">{org.descripcion}</p>
              <div className="mt-4 pt-4 border-t border-[#E4D8BF] flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#F6F1E5] border border-[#E4D8BF] text-[11px] font-semibold text-slate-600">
                  <FileText className="w-3 h-3" />
                  {org.docs.length} documentos y recursos
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#B04E2A] group-hover:gap-2 transition-all">
                  Explorar <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ===== Detalle por organización ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-10">
        {ORGS.map((org, oi) => (
          <div key={org.id} id={org.id} className="scroll-mt-24 bg-white rounded-3xl border border-[#E4D8BF] shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#14281C] to-[#2E4E37] text-white p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                <div className="w-20 h-20 rounded-2xl bg-white grid place-items-center p-2.5 shadow-md">
                  <img src={org.logo} alt={`Logo de ${org.nombre}`} className="max-w-full max-h-full object-contain" />
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 border border-white/15">
                      <MapPin className="w-3 h-3" /> {org.region}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 border border-white/15">
                      <Sparkles className="w-3 h-3" /> Desde {org.fundada}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 border border-white/15">
                      <Compass className="w-3 h-3" /> {org.enfoque}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold leading-snug">
                    {String(oi + 1).padStart(2, '0')} · {org.nombre}
                  </h3>
                  <p className="text-sm text-slate-200 leading-relaxed max-w-4xl">{org.descripcion}</p>
                  <a
                    href={org.sitio}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 mt-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 transition-all"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    Sitio oficial
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <h4 className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 mb-4">
                <Library className="w-4 h-4 text-[#B04E2A]" />
                Documentos y publicaciones de {org.nombre.split(' · ')[0]}
                <span className="text-xs font-semibold text-slate-500">({org.docs.length})</span>
              </h4>
              <div className="grid md:grid-cols-2 gap-3">
                {org.docs.map((doc) => (
                  <DocRow key={doc.titulo} doc={doc} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ===== Estándares internacionales ===== */}
      <section id="estandares" className="max-w-7xl mx-auto px-4 sm:px-6 py-10 scroll-mt-24">
        <div className="space-y-2 mb-8">
          <span className="inline-flex items-center gap-1.5 text-[#B04E2A] text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            Normas y referentes
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
            Estándares y textos fundacionales
          </h2>
          <p className="text-sm text-slate-600 max-w-3xl">
            Más allá de cada organización, la disciplina se sostiene en documentos normativos
            internacionales y en una historia común. Estos referentes explican por qué la interpretación
            influye hoy en la museografía, la mediación y el diseño de experiencias.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          {ESTANDARES.map((e) => (
            <div key={e.titulo} className="bg-white rounded-3xl border border-[#E4D8BF] shadow-sm hover:shadow-lg hover:border-[#B04E2A]/40 transition-all p-6 flex flex-col">
              <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#B04E2A] to-[#D97A46] text-white grid place-items-center shadow-md mb-4">
                <e.icon className="w-5 h-5" />
              </span>
              <p className="text-[11px] font-bold uppercase tracking-wide text-[#B04E2A] mb-1">
                {e.org} {e.ano ? `· ${e.ano}` : ''}
              </p>
              <h3 className="font-bold text-slate-900 mb-2 leading-snug">{e.titulo}</h3>
              <p className="text-sm text-slate-600 leading-relaxed flex-1">{e.desc}</p>
              <a
                href={e.url}
                {...(e.tipo === 'pdf' ? { download: true } : {})}
                target={e.tipo === 'link' ? undefined : '_blank'}
                rel={e.tipo === 'link' ? undefined : 'noreferrer'}
                className="inline-flex items-center gap-1.5 mt-4 px-4 py-2 rounded-xl bg-[#14281C] hover:bg-[#1D3626] text-white text-xs font-bold transition-all self-start"
              >
                {e.tipo === 'pdf' ? (
                  <>
                    <Download className="w-3.5 h-3.5" /> Descargar documento
                  </>
                ) : (
                  <>
                    <Compass className="w-3.5 h-3.5" /> Ver página
                  </>
                )}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Cierre ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="rounded-3xl bg-gradient-to-br from-[#14281C] via-[#1D3626] to-[#2E4E37] text-white p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8A58B_1.4px,transparent_1.4px)] [background-size:22px_22px]" />
          <div className="relative space-y-4">
            <span className="mx-auto w-14 h-14 rounded-2xl bg-white/10 border border-white/15 grid place-items-center">
              <Compass className="w-6 h-6 text-[#FBBF24]" />
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
              Cuando recorres una ruta patrimonial, estás entrando a esta disciplina
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Cada audioguía de El Viaje por Chile aplica estos estándares: un tema interpretativo,
              una historia verificada y un diseño que conecta a las personas con el patrimonio.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <a
                href="/explorar"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#B04E2A] to-[#D97A46] text-white text-sm font-bold shadow-lg hover:opacity-95 transition-all"
              >
                Navegar las rutas interpretativas
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Nota ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-xs text-slate-500 leading-relaxed text-center">
          Logotipos, nombres y sitios pertenecen a cada organización. Los documentos aquí alojados se
          incluyen con fines educativos y de difusión de la interpretación del patrimonio, citando su
          autoría original; los enlaces externos abren el sitio oficial de cada organización.
        </p>
      </div>
    </div>
  );
};

function DocRow(props: { doc: OrgDoc; key?: string | number }) {
  const { doc } = props;
  const isPdf = doc.tipo === 'pdf';
  return (
    <a
      href={doc.url}
      {...(isPdf ? { download: true } : {})}
      target={isPdf ? undefined : '_blank'}
      rel={isPdf ? undefined : 'noreferrer'}
      className="group flex flex-col bg-[#F6F1E5] border border-[#E4D8BF] hover:border-[#B04E2A]/40 hover:shadow-md transition-all rounded-2xl p-4"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <span className="w-9 h-9 rounded-xl bg-white border border-[#E4D8BF] grid place-items-center text-[#B04E2A] shadow-sm shrink-0">
          <FileText className="w-4 h-4" />
        </span>
        <span
          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${
            isPdf
              ? 'bg-[#14281C] text-[#E8A58B]'
              : 'bg-white text-slate-600 border border-[#E4D8BF]'
          }`}
        >
          {isPdf ? <Download className="w-3 h-3" /> : <Globe className="w-3 h-3" />}
          {isPdf ? 'PDF descargable' : 'En línea'}
        </span>
      </div>
      <h5 className="font-bold text-slate-900 text-sm leading-snug group-hover:text-[#B04E2A] transition-colors">
        {doc.titulo}
        {doc.ano ? <span className="text-slate-400 font-semibold"> · {doc.ano}</span> : null}
      </h5>
      <p className="text-xs text-slate-600 leading-relaxed mt-1.5 flex-1">{doc.desc}</p>
      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#B04E2A] mt-3">
        {isPdf ? (
          <>
            Descargar PDF <Download className="w-3 h-3" />
          </>
        ) : (
          <>
            Abrir recurso <ExternalLink className="w-3 h-3" />
          </>
        )}
      </span>
    </a>
  );
}