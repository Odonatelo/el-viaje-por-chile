import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  Brain,
  Compass,
  Feather,
  Footprints,
  Globe,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Languages,
  Leaf,
  Lightbulb,
  Mountain,
  Network,
  Quote,
  Sparkles,
  Sprout,
  Target,
  TreePine,
  Wind,
} from 'lucide-react';

type Props = {
  onBack: () => void;
};

type Raiz = {
  icon: React.ComponentType<{ className?: string }>;
  epoca: string;
  titulo: string;
  autor: string;
  cuerpo: string;
};

const RAICES: Raiz[] = [
  {
    icon: TreePine,
    epoca: 'Miles y millones de años',
    titulo: 'La naturaleza como autora',
    autor: 'Ecología profunda · Arne Naess',
    cuerpo:
      'Antes de cualquier diseñador, es la propia tierra la que escribe: los ecosistemas que habitamos se formaron por deriva y selección a lo largo de cientos, miles y millones de años. Co-diseñar una experiencia no inventa un paisaje: se inscribe en uno ya escrito.',
  },
  {
    icon: Footprints,
    epoca: 'Nueva Inglaterra · 1840-1862',
    titulo: 'Caminar es interpretar',
    autor: 'Ralph Waldo Emerson · Henry David Thoreau · Walt Whitman',
    cuerpo:
      'Del trascendentalismo nacen a la vez la filosofía naturalista y la idea de que el paisaje se conoce paseando: Thoreau («en lo silvestre está la conservación del mundo») y Whitman («retumbo un viaje perpetuo»). Es el gesto fundacional de la interpretación del patrimonio.',
  },
  {
    icon: Sprout,
    epoca: 'Educación · 1907-1922',
    titulo: 'La pedagogía del asombro',
    autor: 'María Montessori · Gabriela Mistral',
    cuerpo:
      'Dos maestras, dos continentes, una misma intuición: el niño aprende con el cuerpo, los sentidos y la naturaleza, no solo con el pizarrón. Montessori hace de la naturaleza una segunda educadora; Mistral enseña «en el patio y en la calle como en la sala de clase». El visitante es siempre, de algún modo, un niño.',
  },
  {
    icon: Languages,
    epoca: 'Filosofía del lenguaje · 2011',
    titulo: 'El lenguaje es territorio',
    autor: 'Yuval Noah Harari',
    cuerpo:
      'Los relatos compartidos —ficciones, mitos, memorias— son lo que permite a una comunidad habitar y cuidar un lugar. Interpretar es poner palabras a un territorio para que otros puedan imaginarlo y, por lo tanto, protegerlo.',
  },
  {
    icon: Wind,
    epoca: 'Ecología material · 2010-2020',
    titulo: 'El material ya no es inerte',
    autor: 'Neri Oxman · MIT Media Lab',
    cuerpo:
      'La ecología material de Oxman muestra que forma, materia y entorno se diseñan como un continuo, tanto en la arquitectura física como en la virtual. Co-diseñar es también diseñar la vida útil, la degradación y el retorno del material al suelo.',
  },
  {
    icon: Brain,
    epoca: 'Biología y fenomenología · 1973-1984',
    titulo: 'Saber cómo sabemos',
    autor: 'Humberto Maturana y Francisco Varela',
    cuerpo:
      'Un ser vivo no conoce representando un mundo externo: conoce acoplándose a él. Toda experiencia es co-construida por el organismo y su entorno. La interpretación, entonces, no transmite: provoca una danza de mutua transformación.',
  },
  {
    icon: Network,
    epoca: 'Transdisciplina · 1977-1999',
    titulo: 'El pensamiento que religa',
    autor: 'Edgar Morin · UNESCO',
    cuerpo:
      'La complejidad exige unir lo que la academia separó: ciencia, arte, pedagogía y ética. El co-diseño es, en su método, una operación moriniana: religar saberes para atender un territorio completo.',
  },
  {
    icon: Lightbulb,
    epoca: 'Desde 1957',
    titulo: 'El diseño de experiencias',
    autor: 'Freeman Tilden · D. Larsen · Pine & Gilmore',
    cuerpo:
      'Tilden ya definía la interpretación como provocación (no instrucción) y el visitante como participante activo. La economía de la experiencia y el design thinking convierten esa intuición en método de prototipado rápido: audioguías, territorio aumentado, itinerarios vivos.',
  },
];

type LinkOficial = {
  nombre: string;
  url: string;
  descripcion: string;
};

const SITIOS: LinkOficial[] = [
  {
    nombre: 'Asociación para la Interpretación del Patrimonio (AIP)',
    url: 'https://www.interpretaciondelpatrimonio.com/',
    descripcion: 'Asociación iberoamericana de referencia en interpretación del patrimonio.',
  },
  {
    nombre: 'Boletín de Interpretación · AIP',
    url: 'https://www.interpretaciondelpatrimonio.com/boletin-de-interpretacion/',
    descripcion: 'Publicación semestral: teoría, casos y debates disciplinarios en español.',
  },
  {
    nombre: 'Boletín n.º 40 · Los orígenes de la interpretación en EE. UU. (1872-1920)',
    url: 'https://bit.ly/33GT7vv',
    descripcion:
      'Artículo monográfico de J. Morales Miranda sobre los orígenes de la profesión, entre la protección y la educación. Lectura sugerida en esta página.',
  },
  {
    nombre: 'National Association for Interpretation (NAI)',
    url: 'https://www.interpnet.com/',
    descripcion: 'La mayor asociación profesional del mundo en interpretación (EE. UU. y Canadá).',
  },
  {
    nombre: 'Interpret Europe',
    url: 'https://interpret-europe.net/',
    descripcion: 'Red europea de interpretación del patrimonio natural y cultural.',
  },
  {
    nombre: 'ICOMOS · Carta de Ename para la interpretación del patrimonio',
    url: 'https://www.icomos.org/charters/interpretation_sp.pdf',
    descripcion: 'Carta internacional sobre interpretación y presentación de sitios patrimoniales.',
  },
  {
    nombre: 'Servicio Nacional del Patrimonio Cultural · Chile',
    url: 'https://www.patrimoniocultural.gob.cl',
    descripcion: 'Institucionalidad chilena de la memoria y el patrimonio.',
  },
  {
    nombre: 'Memoria Chilena · Biblioteca Nacional de Chile',
    url: 'https://www.memoriachilena.gob.cl',
    descripcion: 'Pensamiento pedagógico de Gabriela Mistral y patrimonio digital chileno.',
  },
  {
    nombre: 'Ministerio de Educación · Educación Parvularia',
    url: 'https://parvularia.mineduc.cl',
    descripcion: 'Fundamentos educativos chilenos, incluidas las inspiraciones mistralianas.',
  },
  {
    nombre: 'MIT Media Lab · Material Ecology',
    url: 'https://www.media.mit.edu/groups/material-ecology/',
    descripcion: 'Grupo fundado por Neri Oxman sobre diseño computacional, fabricación y materia.',
  },
  {
    nombre: 'Environment & Society Portal · Arne Naess',
    url: 'https://www.environmentandsociety.org/tools/keywords/arne-naess-shallow-and-deep',
    descripcion: 'Ficha académica del racconto publicado en Inquiry (1973): lo superficial y lo profundo.',
  },
  {
    nombre: 'Edgar Morin Multiversidad',
    url: 'https://edgarmorinmultiversidad.org',
    descripcion: 'Pensamiento complejo y transdisciplinariedad: textos y documentos del autor.',
  },
  {
    nombre: 'Repositorio Académico U. de Chile · El árbol del conocimiento',
    url: 'https://repositorio.uchile.cl',
    descripcion: 'Registro bibliográfico de Maturana y Varela en la institucionalidad chilena.',
  },
  {
    nombre: 'Nobel Prize · Gabriel García Márquez',
    url: 'https://www.nobelprize.org/prizes/literature/1982/marquez/',
    descripcion: 'Discurso «La soledad de América Latina» (8 de diciembre de 1982).',
  },
  {
    nombre: 'Imagen de Chile · Elicura Chihuailaf',
    url: 'https://marcachile.cl',
    descripcion: 'Entrevistas sobre poesía, oralitura y la relación con la naturaleza.',
  },
  {
    nombre: 'Isabel Allende',
    url: 'https://www.isabelallende.com',
    descripcion: '«La palabra mágica»: reflexiones sobre escritura, memoria y creación.',
  },
];

type Referencia = {
  autores: string;
  titulo: string;
  editorial: string;
};

const REFERENCIAS: Referencia[] = [
  {
    autores: 'Beck, L., & Cable, T.',
    titulo: 'Interpretation for the 21st Century: Fifteen Guiding Principles (2002); The Gifts of Interpretation (2011).',
    editorial: 'Sagamore Publishing.',
  },
  {
    autores: 'Bertolino, F., & Filippa, M.',
    titulo: '«The Pedagogy of Nature according to Maria Montessori». Ricerche di Pedagogia e Didattica, 16(2), 133-147.',
    editorial: 'DOI: 10.6092/issn.1970-2221/12192',
  },
  {
    autores: 'Castaing, J. C.',
    titulo: 'Legado en español de la National Association for Interpretation: genealogía de la disciplina en Iberoamérica.',
    editorial: 'NAI / El Viaje Por Chile.',
  },
  {
    autores: 'Chihuailaf, E.',
    titulo: 'De sueños azules y contrasueños.',
    editorial: 'Editorial Universitaria, Santiago, 1995. Reseña en Anales de la Universidad de Chile, 6(4), 1996.',
  },
  {
    autores: 'Emerson, R. W.',
    titulo: 'Nature (1836).',
    editorial: 'Publicado de forma anónima, Boston.',
  },
  {
    autores: 'García Márquez, G.',
    titulo: '«La soledad de América Latina». Discurso Nobel de Literatura.',
    editorial: 'Estocolmo, 8 de diciembre de 1982.',
  },
  {
    autores: 'Harari, Y. N.',
    titulo: 'Sapiens: De animales a dioses. Breve historia de la humanidad.',
    editorial: 'Debate/Penguin Random House, 2011-2014.',
  },
  {
    autores: 'Maturana, H., & Varela, F.',
    titulo: 'Autopoiesis and Cognition: The Realization of the Living. Boston Studies in the Philosophy of Science.',
    editorial: 'D. Reidel / Springer, 1980.',
  },
  {
    autores: 'Maturana, H., & Varela, F.',
    titulo: 'El árbol del conocimiento: las bases biológicas del entendimiento humano.',
    editorial: 'Editorial Universitaria, Santiago, 1984; 19ª ed., 2009. ISBN 978-956-11-1978-9.',
  },
  {
    autores: 'Ministerio de Educación de Chile',
    titulo: 'Inspiraciones desde Gabriela Mistral: amor y aprendizajes en la primera infancia.',
    editorial: 'Subsecretaría de Educación Parvularia, 2025.',
  },
  {
    autores: 'Mistral, G.',
    titulo: 'Magisterio y niño; Decálogo del maestro (1922).',
    editorial: 'En Magisterio y niño, Editorial Andrés Bello, 1979.',
  },
  {
    autores: 'MoMA',
    titulo: 'Neri Oxman: Material Ecology. Catálogo de la exposición.',
    editorial: 'The Museum of Modern Art, Nueva York, 2020.',
  },
  {
    autores: 'Morales, J.',
    titulo: 'Manual para la Interpretación Ambiental en Áreas Silvestres Protegidas; Guía Práctica para la Interpretación del Patrimonio.',
    editorial: 'FAO/PNUMA, 1992; Junta de Andalucía/TREA, 1998-2001.',
  },
  {
    autores: 'Morales Miranda, J.',
    titulo: '«La interpretación de la naturaleza en los Estados Unidos (1872-1920). Los orígenes de la práctica profesional de la interpretación del patrimonio: entre la protección y la educación».',
    editorial: 'Boletín de Interpretación, AIP España, n.º 40, pp. 9-41. Acceso: bit.ly/33GT7vv',
  },
  {
    autores: 'Morales, J., & Ham, S.',
    titulo: '«¿A qué interpretación nos referimos?».',
    editorial: 'Boletín de Interpretación, AIP España, 2008.',
  },
  {
    autores: 'Morin, E.',
    titulo: 'Introducción al pensamiento complejo; La cabeza bien puesta: Repensar la reforma, reformar el pensamiento.',
    editorial: 'Gedisa, 1990-1999. Buenos Aires: Nueva Visión.',
  },
  {
    autores: 'Morin, E., et al.',
    titulo: 'Los siete saberes necesarios para la educación del futuro.',
    editorial: 'UNESCO, 1999.',
  },
  {
    autores: 'Naess, A.',
    titulo: '«The Shallow and the Deep, Long-Range Ecology Movements: A Summary». Inquiry, 16(1), 95-100.',
    editorial: '1973.',
  },
  {
    autores: 'Naess, A., & Sessions, G.',
    titulo: '«The Basic Principles of Deep Ecology». The Trumpeter, 3(4).',
    editorial: '1986.',
  },
  {
    autores: 'Oxman, N.',
    titulo: '«Material-Based Design Computation» y «Towards a Material Ecology».',
    editorial: 'MIT Media Lab, 2010.',
  },
  {
    autores: 'Thoreau, H. D.',
    titulo: 'Walden; or, Life in the Woods (1854); «Walking» (1862).',
    editorial: 'Cambridge/Boston.',
  },
  {
    autores: 'Tilden, F.',
    titulo: 'Interpreting Our Heritage.',
    editorial: 'University of North Carolina Press, 1957.',
  },
  {
    autores: 'Universidad de Valparaíso',
    titulo: 'Pasión de enseñar: pensamiento pedagógico de Gabriela Mistral.',
    editorial: 'UV, 2017. ISBN 978-956-214-174-1.',
  },
  {
    autores: 'Varela, F., Thompson, E., & Rosch, E.',
    titulo: 'The Embodied Mind: Cognitive Science and Human Experience.',
    editorial: 'MIT Press, 1991.',
  },
  {
    autores: 'Whitman, W.',
    titulo: 'Leaves of Grass; «Song of the Open Road» (1855-1881).',
    editorial: 'Brooklyn/Washington D.C.',
  },
];

export function FilosofiaPage({ onBack }: Props) {
  const link = (u: string, texto: string) => (
    <a
      href={u}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 font-bold text-[#B04E2A] hover:text-[#9A3F1E] underline decoration-[#B04E2A]/40 underline-offset-2 transition-colors"
    >
      {texto}
      <ArrowRight className="w-3 h-3" />
    </a>
  );

  return (
    <div className="min-h-screen bg-[#F1EAD9] text-[#14281C]">
      {/* ===== HERO / TESIS ===== */}
      <section className="relative bg-[#14281C] text-[#F6F1E5] px-4 sm:px-6 pt-10 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]" aria-hidden>
          <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-[#B04E2A] blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#2A4533] blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto space-y-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2A4533] text-[#E4D8BF] hover:border-[#B04E2A] hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Volver a la plataforma
          </button>

          <div className="space-y-5 max-w-4xl">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#E8A58B]">
              <Sparkles className="w-4 h-4" />
              Filosofía · Co-diseño
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Cormorant_Garamond',Georgia,serif] leading-[1.05]">
              De la interpretación del patrimonio al{' '}
              <span className="text-[#E8A58B]">co-diseño</span> de la experiencia
            </h1>
            <p className="text-base sm:text-lg text-[#E4D8BF] leading-relaxed max-w-3xl">
              Acumulación de experiencias, derivas orgánicas y raíces milenarias: una genealogía
              transdisciplinar que va de la naturaleza como autora hasta el diseño de experiencias, y
              que desemboca en una ética de restauración ecológica construida con el visitante y con
              la educación.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 max-w-4xl">
            {[
              { n: '1', t: 'No es velocidad', d: 'El co-diseño no es contenido generado en minutos por una IA: es decantación lenta de experiencias y saber acumulado.' },
              { n: '2', t: 'Es deriva orgánica', d: 'Co-diseñar es acompañar la forma que ya estaba germinando en el terreno, la memoria y la comunidad.' },
              { n: '3', t: 'Es acto educativo', d: 'El visitante aprende haciendo; el co-diseño lo vuelve co-autor del paisaje que restaura.' },
            ].map((c) => (
              <div key={c.n} className="rounded-2xl border border-[#2A4533] bg-[#14281C]/60 p-5 space-y-2">
                <span className="text-xs font-extrabold text-[#E8A58B]">0{c.n}</span>
                <p className="font-bold text-sm text-white">{c.t}</p>
                <p className="text-xs text-[#E4D8BF] leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EL MALENTENDIDO VELOZ ===== */}
      <section className="bg-[#F1EAD9] px-4 sm:px-6 py-14">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#B04E2A]">
            <Compass className="w-4 h-4" />
            Tesis
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
            El malentendido veloz
          </h2>
          <p className="text-[15px] leading-relaxed text-slate-700">
            Existe un malentendido en boga: que el co-diseño de experiencias es aquello que una
            inteligencia artificial genera en segundos pidiéndole «diseña un recorrido». Nada más
            lejos de su genealogía. Lo que hoy llamamos co-diseño es la <strong>acumulación</strong> de
            experiencias —de maestros, de paseantes, de comunidades— y la <strong>deriva orgánica</strong>{' '}
            con que esas experiencias se desplazan, se cruzan y maduran, tal como una especie se
            transforma a lo largo de generaciones.
          </p>
          <p className="text-[15px] leading-relaxed text-slate-700">
            El concepto de <em>deriva</em> proviene de la biología del conocimiento: para Humberto
            Maturana y Francisco Varela, la ontogenia de todo ser vivo —y de toda organización
            social— es una deriva estructural que no persigue un diseño previo (Maturana &amp;
            Varela, <em>El árbol del conocimiento</em>, 1984). El co-diseño no inventa desde cero:
            acompaña la forma que el territorio, la lengua y la memoria vienen escribiendo hace
            tiempo, y que la tecnología —hoy, acelerada por la IA— apenas vuelve visible y prototipable.
          </p>
          <p className="text-[15px] leading-relaxed text-slate-700">
            Esta página traza esa genealogía. Ocho tradiciones —de la filosofía naturalista del siglo
            XIX a la ecología material del MIT, del lenguaje compartido de Harari a la neurociencia de
            Maturana y Varela, de la pedagogía del asombro de Mistral y Montessori a la complejidad de
            Edgar Morin— confluyen en una sola propuesta: co-diseñar experiencias interpretativas como
            acto de restauración ecológica, centrado en el usuario y en la educación.
          </p>
        </div>
      </section>

      {/* ===== GENEALOGÍA ===== */}
      <section className="bg-[#F6F1E5] px-4 sm:px-6 py-14 border-y border-[#E4D8BF]">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="max-w-4xl space-y-4">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#B04E2A]">
              <Mountain className="w-4 h-4" />
              Genealogía transdisciplinar
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
              Ocho raíces, una sola copa
            </h2>
            <p className="text-[15px] leading-relaxed text-slate-700 max-w-3xl">
              El co-diseño de experiencias no nace en un laboratorio de Silicon Valley ni en un prompt.
              Nace donde la humanidad aprendió a mirar, caminar, contar y enseñar los lugares que ama.
              Estas son sus ocho raíces documentadas:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {RAICES.map((r) => (
              <div key={r.titulo} className="rounded-2xl bg-[#F1EAD9] border border-[#E4D8BF] p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-[#14281C] text-[#E8A58B] flex items-center justify-center shrink-0">
                      <r.icon className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-[#B04E2A]">{r.epoca}</p>
                      <p className="font-extrabold text-sm text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">{r.titulo}</p>
                    </div>
                  </div>
                </div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{r.autor}</p>
                <p className="text-[13px] leading-relaxed text-slate-700">{r.cuerpo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 1. THOREAU Y WHITMAN ===== */}
      <section className="bg-[#F1EAD9] px-4 sm:px-6 py-14">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#B04E2A]">
            <Footprints className="w-4 h-4" />
            01 · La raíz naturalista
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
            Caminar para interpretar: Thoreau, Whitman y la filosofía del paseo
          </h2>
          <p className="text-[15px] leading-relaxed text-slate-700">
            La filosofía naturalista que funda la interpretación del patrimonio es, en su raíz
            iberoamericana como en la del Parque Nacional, una filosofía del <strong>caminar</strong>.
            El trascendentalismo de Nueva Inglaterra —Ralph Waldo Emerson y su ensayo <em>Nature</em>{' '}
            (1836), Henry David Thoreau y <em>Walden</em> (1854)— propuso que la verdad no se revela en
            la abstracción sino en la experiencia sensible del bosque y del estanque. Thoreau lo
            condensó en su ensayo <em>Walking</em> (1862): «en lo silvestre está la conservación del
            mundo» (Thoreau, 1862; véase también la entrada «Transcendentalism», <em>Stanford
            Encyclopedia of Philosophy</em>).
          </p>
          <blockquote className="border-l-4 border-[#B04E2A] pl-5 py-2 space-y-2">
            <Quote className="w-5 h-5 text-[#B04E2A]" />
            <p className="text-lg italic font-['Cormorant_Garamond',Georgia,serif] text-[#14281C]">
              «Retumbo un viaje perpetuo» — I tramp a perpetual journey.
            </p>
            <cite className="text-xs text-slate-500 not-italic">Walt Whitman, «Song of the Open Road», <em>Leaves of Grass</em> (1855-1881).</cite>
          </blockquote>
          <p className="text-[15px] leading-relaxed text-slate-700">
            Walt Whitman convierte el caminar en acto democrático y poético: recorrer es conocer, y
            conocer es una forma de amor por el territorio. Poco después, esa misma combinación de
            paseo, geología y asombro dará origen al parque nacional y a la profesión de intérprete
            —de John Muir y Enos Mills a Freeman Tilden—, tal como documenta la{' '}
            {link('/historia', 'historia de la disciplina')} de esta misma plataforma. La
            interpretación del patrimonio es, en este sentido, un trascendentalismo aplicado: un
            método, hoy, para que caminar se convierta en cuidado.
          </p>
        </div>
      </section>

      {/* ===== 2. MISTRAL Y MONTESSORI ===== */}
      <section className="bg-[#F6F1E5] px-4 sm:px-6 py-14 border-y border-[#E4D8BF]">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#B04E2A]">
            <GraduationCap className="w-4 h-4" />
            02 · La raíz pedagógica
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
            Dos madres del asombro: Gabriela Mistral y María Montessori
          </h2>
          <p className="text-[15px] leading-relaxed text-slate-700">
            La educación chilena reconoce en Gabriela Mistral a su <strong>madre pedagógica</strong>:
            el académico Alejandro Salazar y la edición <em>Pasión de enseñar: pensamiento pedagógico
            de Gabriela Mistral</em> (Universidad de Valparaíso, 2017, ISBN 978-956-214-174-1) la
            consagran como la gran maestra rural de América. Su <em>Decálogo del maestro</em> (1922)
            lo anticipa todo: «Enseñar siempre: en el patio y en la calle como en la sala de clase»
            (Mistral, en <em>Magisterio y niño</em>, Andrés Bello, 1979). Ese patio, esa calle, esa
            naturaleza son la escuela: el primer aula de Mistral es el paisaje del valle de Elqui y de
            la patria rural.
          </p>
          <p className="text-[15px] leading-relaxed text-slate-700">
            En paralelo, en Europa, María Montessori construía su pedagogía científica sobre la misma
            intuición: el niño aprende con el cuerpo, los sentidos y el entorno. La investigación
            contemporánea ha sistematizado esa intuición en lo que hoy llamamos «pedagogía de la
            naturaleza»: la naturaleza como «segunda maestra», el ambiente como tercer educador y la
            educación al aire libre como fundamento del desarrollo (Bertolino &amp; Filippa, 2021,
            <em>«The Pedagogy of Nature according to Maria Montessori»</em>, Ricerche di Pedagogia e
            Didattica, 16(2), con DOI: 10.6092/issn.1970-2221/12192).
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-[#F1EAD9] border border-[#E4D8BF] p-5 space-y-2">
              <p className="font-extrabold text-sm text-[#14281C]">Gabriela Mistral · Chile</p>
              <p className="text-[13px] leading-relaxed text-slate-700">
                «El niño es un mundo abierto»: enseñar en el patio y en la calle; amor, oficio y la
                naturaleza como aula. Rescatada hoy por el MINEDUC (<em>Inspiraciones desde Gabriela
                Mistral</em>, 2025) y por el pensamiento pedagógico de la cultura chilena.
              </p>
            </div>
            <div className="rounded-2xl bg-[#F1EAD9] border border-[#E4D8BF] p-5 space-y-2">
              <p className="font-extrabold text-sm text-[#14281C]">María Montessori · Italia</p>
              <p className="text-[13px] leading-relaxed text-slate-700">
                «La naturaleza como segunda maestra»: pedagogía sensorial, vida práctica y educación
                cósmica al aire libre. El ambiente es el tercer educador (Montessori, <em>El
                método de la pedagogía científica</em>, 1912).
              </p>
            </div>
          </div>
          <p className="text-[15px] leading-relaxed text-slate-700">
            Mistral y Montessori se encontraron sin conocerse: ambas entendieron que nadie cuida lo
            que no aprendió a percibir. Co-diseñar una experiencia interpretativa es, antes que nada,
            pedagogía del asombro: diseñar las condiciones para <em>percibir</em> antes de explicar.
          </p>
        </div>
      </section>

      {/* ===== 3. HARARI ===== */}
      <section className="bg-[#F1EAD9] px-4 sm:px-6 py-14">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#B04E2A]">
            <Languages className="w-4 h-4" />
            03 · La raíz narrativa
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
            El lenguaje como territorio: Yuval Harari y los relatos compartidos
          </h2>
          <p className="text-[15px] leading-relaxed text-slate-700">
            Para Yuval Noah Harari, el rasgo que distingue a nuestra especie es la capacidad de
            cooperar en grandes grupos a través de <em>realidades ficcionales</em>: mitos, dioses,
            naciones, empresas, paisajes imaginados que millones de personas pueden compartir
            (Harari, <em>Sapiens</em>, 2011). El lenguaje no solo describe el mundo: crea territorios
            de pertenencia. Los pueblos que nombran sus cerros, sus ríos y sus cerros ancestrales
            están, literalmente, co-diseñando su paisaje desde la palabra.
          </p>
          <p className="text-[15px] leading-relaxed text-slate-700">
            La interpretación del patrimonio es la forma disciplinada de esa capacidad: un
            <em>tema</em> es un relato compartido que hace habitable y protegible un lugar. Co-diseñar
            un itinerario interpretativo es, por tanto, diseñar una ficción colectiva honesta: una que
            la comunidad reconoce como suya (de ahí el co-diseño) y que orienta el cuidado del
            territorio (de ahí la restauración). El visitante no consume el relato: entra en él y lo
            contagia.
          </p>
        </div>
      </section>

      {/* ===== 4. NAESS / ECOLOGÍA PROFUNDA ===== */}
      <section className="bg-[#F6F1E5] px-4 sm:px-6 py-14 border-y border-[#E4D8BF]">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#B04E2A]">
            <TreePine className="w-4 h-4" />
            04 · La raíz ecológica
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
            La naturaleza como autora: ecología profunda y el tiempo de los paisajes
          </h2>
          <p className="text-[15px] leading-relaxed text-slate-700">
            En 1973, el filósofo noruego Arne Naess bautizó la <strong>ecología profunda</strong> para
            distinguirla de la ecología «superficial» —la que usa la naturaleza como recurso para el
            desarrollo—. Su racconto <em>«The Shallow and the Deep, Long-Range Ecology Movements»</em>{' '}
            (en <em>Inquiry</em>, 16, 1973, pp. 95-100) propone una ética: los seres vivos tienen valor
            en sí mismos, y la riqueza y diversidad de las formas de vida —modeladas por cientos, miles
            y <strong>millones de años</strong> de evolución— son valores que preceden a cualquier
            diseño humano (Naess, 1973; Naess y Sessions, <em>Plataforma de ecología profunda</em>,
            1986).
          </p>
          <div className="rounded-2xl bg-[#F1EAD9] border border-[#E4D8BF] p-5 space-y-3">
            <p className="font-extrabold text-sm text-[#14281C]">Principios que importan al co-diseño</p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-[13px] text-slate-700 leading-relaxed list-none">
              <li className="flex gap-2"><Leaf className="w-4 h-4 text-[#2A4533] shrink-0 mt-0.5" />Bienestar y florecimiento de toda vida, no solo humana.</li>
              <li className="flex gap-2"><Leaf className="w-4 h-4 text-[#2A4533] shrink-0 mt-0.5" />Riqueza y diversidad: valores en sí mismos.</li>
              <li className="flex gap-2"><Leaf className="w-4 h-4 text-[#2A4533] shrink-0 mt-0.5" />Los seres humanos no deben reducir esa riqueza salvo satisfacción de necesidades vitales.</li>
              <li className="flex gap-2"><Leaf className="w-4 h-4 text-[#2A4533] shrink-0 mt-0.5" />Visión anti-clasista y tolerante; rechazo del dominio.</li>
            </ul>
          </div>
          <p className="text-[15px] leading-relaxed text-slate-700">
            La consecuencia para la interpretación es radical: <strong>el paisaje no es el escenario
            de la experiencia; es su co-autor</strong>. Un bosque de alerces es un documento escrito a
            lo largo de milenios; un humedal, una página que se reescribe cada estación. Co-diseñar un
            recorrido interpretativo con vocación restauradora es aprender a leer ese texto más largo
            que nuestra vida y a diseñar solo aquello que lo deje más legible.
          </p>
        </div>
      </section>

      {/* ===== 5. OXMAN ===== */}
      <section className="bg-[#F1EAD9] px-4 sm:px-6 py-14">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#B04E2A]">
            <Wind className="w-4 h-4" />
            05 · La raíz del diseño
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
            Lo físico y lo virtual: Neri Oxman y la ecología material
          </h2>
          <p className="text-[15px] leading-relaxed text-slate-700">
            Neri Oxman acuñó en el MIT Media Lab el concepto de <strong>ecología material</strong>:
            una aproximación al diseño donde computación, fabricación y material dejan de ser etapas
            separadas y pasan a ser un continuo co-evolutivo (Oxman, 2010; catálogo <em>Neri Oxman:
            Material Ecology</em>, MoMA, 2020). Lejos de la metáfora del diseñador como «autor
            exógeno», en esta escuela el material —seda, micelio, agua, grabado— participa activamente
            en la forma final, y esa forma incluye su propia degradación y retorno.
          </p>
          <p className="text-[15px] leading-relaxed text-slate-700">
            Esa idea tiene dos consecuencias para el co-diseño. La primera afecta a la{' '}
            <strong>arquitectura física</strong>: los dispositivos interpretativos —paneles, mobiliario,
            áreas de descanso— pueden diseñarse como estructuras vivas que se integran y se descomponen
            con el paisaje. La segunda afecta a la <strong>arquitectura virtual</strong>: la audioguía y
            la cartografía digital no son un «añadido» al lugar, sino una capa material más —una que
            también debe diseñarse para la obsolescencia y el retorno. Lo virtual es ecología, no
            teleprompter.
          </p>
        </div>
      </section>

      {/* ===== 6. BAJADA TERRITORIAL ===== */}
      <section className="bg-[#F6F1E5] px-4 sm:px-6 py-14 border-y border-[#E4D8BF]">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#B04E2A]">
            <Feather className="w-4 h-4" />
            06 · La raíz territorial latinoamericana
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
            Bajada territorial: Allende, Chihuailaf y García Márquez
          </h2>
          <p className="text-[15px] leading-relaxed text-slate-700">
            Nuestra genealogía iberoamericana del co-diseño no es importada: tiene voz propia en las
            tres escrituras que mejor narran Chile y América. <strong>Gabriel García Márquez</strong>{' '}
            definió en su discurso Nobel (1982) la materia de la que está hecha nuestra realidad —
            «la insuficiencia de los recursos convencionales para hacer creíble nuestra vida»— y
            propuso la solidaridad como reverso de la soledad del continente ({' '}
            {link('https://www.nobelprize.org/prizes/literature/1982/marquez/', 'La soledad de América Latina')}{' '}
            ). Esa realidad «desaforada» es exactamente la que el co-diseño debe poder contener sin
            traicionar.
          </p>
          <blockquote className="border-l-4 border-[#B04E2A] pl-5 py-2 space-y-2">
            <Quote className="w-5 h-5 text-[#B04E2A]" />
            <p className="text-lg italic font-['Cormorant_Garamond',Georgia,serif] text-[#14281C]">
              «Poetas y mendigos, músicos y profetas, guerreros y malandrines, todas las criaturas de
              aquella realidad desaforada hemos tenido que pedirle muy poco a la imaginación, porque
              el desafío mayor para nosotros ha sido la insuficiencia de los recursos convencionales
              para hacer creíble nuestra vida.»
            </p>
            <cite className="text-xs text-slate-500 not-italic">Gabriel García Márquez, discurso Nobel, 8 de diciembre de 1982.</cite>
          </blockquote>
          <p className="text-[15px] leading-relaxed text-slate-700">
            <strong>Elicura Chihuailaf</strong>, poeta mapuche y referente de la{' '}
            <em>oralitura</em> —la escritura que nace de la oralidad—, enseña que el relato del
            territorio no es propiedad de un autor: «somos apenas un fragmento, quizás una línea, de
            ese gran libro que es la naturaleza; no el centro» (trad. libre de entrevistas; véase
            también <em>De sueños azules y contrasueños</em>, Editorial Universitaria, 1995, y su
            reseña en <em>Anales de la Universidad de Chile</em>, n.º 4, 1996). El co-diseño mapuche,
            como la oralitura, es un relevo: el intérprete no es dueño de la palabra, es un eslabón.
          </p>
          <p className="text-[15px] leading-relaxed text-slate-700">
            <strong>Isabel Allende</strong> ha descrito el acto de crear como un encantamiento orgánico:
            «la literatura es mágica: urdir una historia es un proceso misterioso, orgánico e
            instintivo» (trad. libre de su <em>Story Telling</em> / <em>La palabra mágica</em>,
            Penguin Random House, 2026). Esa misma lógica vale para una audioguía o un sendero
            interpretativo: la historia que funciona no se ensambla, <em>germina</em>, como una deriva
            que se deja acompañar — memoria, pérdida y amor por el lugar.
          </p>
        </div>
      </section>

      {/* ===== 7. MATURANA Y VARELA ===== */}
      <section className="bg-[#F1EAD9] px-4 sm:px-6 py-14">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#B04E2A]">
            <Brain className="w-4 h-4" />
            07 · La raíz cognitiva
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
            Saber cómo sabemos: Maturana, Varela y la conciencia como fenómeno
          </h2>
          <p className="text-[15px] leading-relaxed text-slate-700">
            La biología del conocimiento de Humberto Maturana y Francisco Varela —formulada en{' '}
            <em>Autopoiesis and Cognition</em> (1980) y divulgada en <em>El árbol del conocimiento</em>{' '}
            (1984)— funda una epistemología en la que el observador no puede desprenderse del mundo que
            observa. Los seres vivos son sistemas que se producen a sí mismos (autopoiéticos) y cuyo
            conocer es un <em>acoplamiento estructural</em> con el entorno: «todo hacer es conocer;
            todo conocer es hacer» (Maturana y Varela, <em>El árbol del conocimiento</em>, 1984). En el
            plano de la conciencia, esa línea desemboca en la ciencia cognitiva enactiva —la mente
            encarnada— que Varela, Thompson y Rosch articulan en <em>The Embodied Mind</em> (MIT Press,
            1991) y que hoy dialoga con la fenomenología y el estudio del estar-en-el-mundo.
          </p>
          <p className="text-[15px] leading-relaxed text-slate-700">
            La traducción para la interpretación es directa y ya estaba anunciada por Tilden: el
            propósito de la interpretación «no es instruir, sino provocar» ({' '}
            {link('/historia', 'principios de Tilden')} , 1957). Si el visitante es un sistema
            autopoiético, la experiencia no puede «inyectar» significado: solo puede provocarlo. Y si
            conocer es co-hacer, entonces el visitante nunca es un receptor pasivo: es co-constructor
            del significado —y, en el acto de cuidar el lugar, co-restaurador del paisaje. La
            neurociencia y la fenomenología del siglo XX no contradicen la filosofía del paseo de
            Thoreau: la confirman a escala de sinapsis.
          </p>
        </div>
      </section>

      {/* ===== 8. MORIN ===== */}
      <section className="bg-[#F6F1E5] px-4 sm:px-6 py-14 border-y border-[#E4D8BF]">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#B04E2A]">
            <Network className="w-4 h-4" />
            08 · La raíz compleja
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
            El giro transdisciplinar: Edgar Morin
          </h2>
          <p className="text-[15px] leading-relaxed text-slate-700">
            Edgar Morin cierra la genealogía con un método: el <strong>pensamiento complejo</strong>.
            Ante un territorio, el cientificismo parcelado ve especies, geomorfología o demanda
            turística por separado; Morin exige <em>religar</em> —unir lo desunido— para conocer un
            sistema sin disolver sus contradicciones (<em>Introducción al pensamiento complejo</em>,
            1990; <em>La cabeza bien puesta</em>, 1999). Y en <em>Los siete saberes necesarios para la
            educación del futuro</em> (UNESCO, 1999), el mismo autor convierte esa epistemología en
            propuesta educativa: enseñar la condición humana, la identidad terrenal y la ética del
            género humano.
          </p>
          <p className="text-[15px] leading-relaxed text-slate-700">
            Para nuestra página, Morin es el puente entre todas las raíces. La transdisciplinariedad
            es la forma en que la ecología profunda (ética), la pedagogía de Mistral y Montessori
            (educación), la ecología material de Oxman (diseño), la narrativa de Harari (lenguaje) y
            la neurociencia de Maturana y Varela (cognición) pueden operar <em>juntas</em> sobre un
            solo lugar sin que ninguna reclame supremacía. Co-diseñar es, entonces, un oficio
            moriniano: sostener la complejidad del territorio mientras se actúa sobre él. Esa es la
            tesis de esta página: no hay co-diseño restaurador posible sin complejidad, ni
            complejidad operativa sin método de experiencia.
          </p>
        </div>
      </section>

      {/* ===== 9. EL MOMENTO CRUCIAL ===== */}
      <section className="bg-[#14281C] text-[#F6F1E5] px-4 sm:px-6 py-16">
        <div className="max-w-5xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#E8A58B]">
            <HeartHandshake className="w-4 h-4" />
            Conclusiones
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Cormorant_Garamond',Georgia,serif] max-w-3xl leading-tight">
            El momento crucial: co-diseño para la restauración ecológica, centrado en el usuario y en
            la educación
          </h2>
          <p className="text-[15px] sm:text-base text-[#E4D8BF] leading-relaxed max-w-3xl">
            El co-diseño de experiencias interpretativas no es una moda de producto: es una
            convergencia. Reúne la ética de la ecología profunda (la naturaleza como autora), el
            método de la transdisciplinariedad (Morin), la pedagogía del asombro (Mistral y
            Montessori), la ecología material (Oxman), la narrativa compartida (Harari) y una
            neurociencia que confirma que conocer es co-hacer (Maturana y Varela). Cuando esas ocho
            raíces operan juntas, el resultado deja de ser un tour para volverse un acto de{' '}
            <strong className="text-[#E8A58B]">restauración ecológica</strong>:
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: Landmark, t: 'Restaurar el territorio', d: 'Itinerarios que no explotan ni invaden: que devuelven. Paneles que se descomponen con el paisaje (Oxman); senderos que protegen el suelo y la fauna; relatos que amortiguan el impacto del visitante.' },
              { icon: GraduationCap, t: 'Educar al usuario', d: 'Diseñar para la percepción y el asombro antes que para la instrucción (Mistral, Montessori, Tilden): experiencias que el visitante «hace» y, al hacerlas, aprende a cuidar.' },
              { icon: Target, t: 'Co-diseñar con la comunidad', d: 'La comunidad local —y el visitante— participan del relato y de la decisión (Chihuailaf: nadie es dueño de la palabra). El tema se negocia, no se impone.' },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-[#2A4533] bg-[#14281C]/70 p-5 space-y-3">
                <span className="w-10 h-10 rounded-xl bg-[#B04E2A] text-white flex items-center justify-center">
                  <c.icon className="w-5 h-5" />
                </span>
                <p className="font-extrabold text-sm text-white">{c.t}</p>
                <p className="text-xs text-[#E4D8BF] leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] sm:text-base text-[#E4D8BF] leading-relaxed max-w-3xl">
            En la práctica, la plataforma de {' '}
            <strong className="text-[#E8A58B]">interpretación del patrimonio</strong> concreta este
            co-diseño como prototipado vivo: audioguías geolocalizadas, cartografía interactiva y
            guías de campo que permiten a cualquier operador, educador o comunidad{' '}
            <em>escribir, medir y corregir</em> su experiencia en días — no en meses. La tecnología
            (hoy acelerada por IA) es el medio de la deriva, no su autora: acelera la plausible, pero
            la genealogía la precede. Por eso esta página termina donde empezó: el co-diseño es la
            forma contemporánea de una sabiduría antigua que sabía que nadie restaura lo que no ama, y
            nadie ama lo que no ha aprendido a percibir caminando.
          </p>
        </div>
      </section>

      {/* ===== 10. BOLETÍN 40 AIP ===== */}
      <section className="bg-[#F1EAD9] px-4 sm:px-6 py-14">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#B04E2A]">
            <BookOpenCheck className="w-4 h-4" />
            Relectura sugerida
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
            Boletín de Interpretación n.º 40: los orígenes de la profesión
          </h2>
          <p className="text-[15px] leading-relaxed text-slate-700">
            Esta genealogía conecta con la investigación disciplinar de la{' '}
            <strong>Asociación para la Interpretación del Patrimonio (AIP)</strong>, cuya revista{' '}
            <em>Boletín de Interpretación</em> dedicó su n.º 40 al artículo monográfico de J. Morales
            Miranda, <em>«La interpretación de la naturaleza en los Estados Unidos (1872-1920). Los
            orígenes de la práctica profesional de la interpretación del patrimonio: entre la
            protección y la educación»</em> (pp. 9-41). El trabajo reconstruye el período fundacional
            en el que la joven profesión osciló —como hoy— entre proteger y educar: la misma tensión
            que este co-diseño restaurador intenta conciliar.
          </p>
          <div className="rounded-2xl bg-[#F6F1E5] border border-[#E4D8BF] p-5 flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[220px] space-y-1">
              <p className="font-extrabold text-sm text-[#14281C]">Lectura recomendada</p>
              <p className="text-xs text-slate-600">
                Acceso abierto del Boletín de Interpretación, AIP (España): textos fundacionales,
                casos y la monografía de los orígenes.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href="https://bit.ly/33GT7vv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#B04E2A] hover:bg-[#9A3F1E] text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Boletín n.º 40
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.interpretaciondelpatrimonio.com/boletin-de-interpretacion/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#14281C] text-[#14281C] hover:bg-[#14281C] hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Todos los boletines
                <ExternalLinkL />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 11. SITIOS OFICIALES ===== */}
      <section className="bg-[#F6F1E5] px-4 sm:px-6 py-14 border-t border-[#E4D8BF]">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="max-w-4xl space-y-4">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#B04E2A]">
              <Globe className="w-4 h-4" />
              Sitios oficiales
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
              Instituciones de la interpretación y del saber
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SITIOS.map((s) => (
              <a
                key={s.nombre}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl bg-[#F1EAD9] border border-[#E4D8BF] p-5 space-y-2 hover:border-[#B04E2A] hover:shadow-md transition-all"
              >
                <p className="font-extrabold text-sm text-[#14281C] group-hover:text-[#B04E2A] transition-colors">
                  {s.nombre}
                </p>
                <p className="text-xs text-slate-600 leading-relaxed">{s.descripcion}</p>
                <p className="text-[10px] font-mono text-slate-400 break-all">{s.url.replace(/^https?:\/\//, '')}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 12. REFERENCIAS ===== */}
      <section className="bg-[#14281C] text-[#F6F1E5] px-4 sm:px-6 py-14">
        <div className="max-w-5xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#E8A58B]">
            <Compass className="w-4 h-4" />
            Bibliografía académica
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
            Referencias
          </h2>
          <ol className="space-y-3">
            {REFERENCIAS.map((r, i) => (
              <li key={i} className="text-[13px] leading-relaxed text-[#E4D8BF]">
                <span className="text-[#E8A58B] font-bold mr-2">{i + 1}.</span>
                <strong className="text-white">{r.autores}</strong> {r.titulo}{' '}
                {r.editorial && <span className="text-slate-400">{r.editorial}</span>}
              </li>
            ))}
          </ol>
          <p className="text-[11px] text-slate-500 pt-4 border-t border-[#2A4533] leading-relaxed">
            Las citas de Thoreau, Whitman, Mistral, Allende y Chihuailaf son traducciones libres;
            consúltese siempre el texto original. Página redactada como ensayo académico-divulgativo:
            el co-diseño de experiencias interpretativas y su vínculo con la restauración ecológica.
          </p>
        </div>
      </section>

      {/* ===== CIERRE ===== */}
      <section className="bg-[#14281C] text-[#F6F1E5] px-4 sm:px-6 py-12 border-t border-[#2A4533]">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-xl sm:text-2xl font-extrabold font-['Cormorant_Garamond',Georgia,serif] max-w-2xl leading-snug">
            Ocho raíces, una sola copa. El co-diseño restaura porque antes enseña a percibir.
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B04E2A] hover:bg-[#9A3F1E] text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Volver a la plataforma
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href="https://www.interpretaciondelpatrimonio.com/boletin-de-interpretacion/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#2A4533] text-[#E4D8BF] hover:border-[#B04E2A] hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Boletín de Interpretación · AIP
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function ExternalLinkL() {
  return (
    <svg
      className="w-3.5 h-3.5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}