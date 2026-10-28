import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  BookOpenCheck,
  Brain,
  Compass,
  ExternalLink,
  Feather,
  Frame,
  Globe,
  HeartHandshake,
  Landmark,
  Mountain,
  Quote,
  Sparkles,
  Target,
  TreePine,
} from 'lucide-react';

type Props = {
  onBack: () => void;
};

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
    url: 'https://www.interpretaciondelpatrimonio.com/wp-content/uploads/2025/02/boletin_de_interpretacion_40.pdf',
    descripcion:
      'Todo método gana al conocer sus orígenes. La investigación disciplinar de la AIP dedicó su boletín número 40 al artículo acerca de los orígenes de la interpretación del patrimonio en los Estados Unidos (1872-1920). Artículo de Marta Brunelli, «La interpretación de la naturaleza en los Estados Unidos (1872-1920). Los orígenes de la práctica profesional de la interpretación del patrimonio: entre la protección y la educación» (pp. 9-41). Editado por Morales y Guerra. El trabajo reconstruye el período en el que la joven profesión osciló —como hoy— entre proteger, entretener y educar: exactamente la tensión que el paraguas interpretativo pretende conciliar, porque restaurar requiere proteger, apreciar y aprender.',
  },
  {
    nombre: 'National Association for Interpretation (NAI)',
    url: 'https://www.interpnet.com/',
    descripcion: 'La mayor asociación profesional del mundo en interpretación; edita InterpPress y el modelo de planificación 5-M.',
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
    nombre: 'Institute for Earth Education',
    url: 'https://www.ieetree.org',
    descripcion: 'Movimiento de «educación de la tierra» fundado por Steve Van Matre.',
  },
  {
    nombre: 'PUP Collaboratory',
    url: 'https://www.pupconsortium.net',
    descripcion: 'Consorcio holístico para la gestión del patrimonio natural-cultural fundado por Jon Kohl.',
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
    autores: 'Allende, I.',
    titulo: 'Story Telling / La palabra mágica',
    editorial: 'Penguin Random House, 2026.',
  },
  {
    autores: 'Beck, L., & Cable, T.',
    titulo: 'Interpretation for the 21st Century: Fifteen Guiding Principles for Interpreting Nature and Culture (2002); The Gifts of Interpretation (3ª ed., 2011).',
    editorial: 'Sagamore Publishing, Champaign, IL. ISBN 978-1-57167-636-8.',
  },
  {
    autores: 'Bertolino, F., & Filippa, M.',
    titulo: '«The Pedagogy of Nature according to Maria Montessori». Ricerche di Pedagogia e Didattica, 16(2), 133-147.',
    editorial: 'DOI: 10.6092/issn.1970-2221/12192',
  },
  {
    autores: 'Brochu, L.',
    titulo: 'Interpretive Planning: The 5-M Model for Successful Planning Projects (2ª ed.), 2013.',
    editorial: 'National Association for Interpretation / InterpPress, Fort Collins, CO.',
  },
  {
    autores: 'Brochu, L., & Merriman, T.',
    titulo: 'Personal Interpretation: Connecting Your Audience to Heritage Resources (2ª ed.), 2008.',
    editorial: 'National Association for Interpretation / InterpPress.',
  },
  {
    autores: 'Caputo, P., Lewis, S., & Brochu, L.',
    titulo: 'Interpretation by Design: Graphic Design Basics for Heritage Interpreters, 2008.',
    editorial: 'InterpPress / Bloomsbury. ISBN 978-1538196014.',
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
    autores: 'García Márquez, G.',
    titulo: '«La soledad de América Latina». Discurso Nobel de Literatura.',
editorial: 'Estocolmo, 8 de diciembre de 1982.',
  },
  {
    autores: 'Ham, S.',
    titulo: 'Environmental Interpretation: A Practical Guide for People with Big Ideas and Small Budgets (1992); Interpretation: Making a Difference on Purpose (2013).',
    editorial: 'Fulcrum/North American Press, Golden, CO.',
  },
  {
    autores: 'Harari, Y. N.',
    titulo: 'Sapiens: De animales a dioses. Breve historia de la humanidad.',
    editorial: 'Debate/Penguin Random House, 2011-2014.',
  },
  {
    autores: 'Kohl, J.',
    titulo: 'Guía de campo para escribir temas interpretativos: un compañero de bolsillo para el libro de Sam Ham (2024); «La planificación interpretativa efectiva», Boletín de Interpretación (2017).',
    editorial: 'PUP Collaboratory / AIP.',
  },
  {
    autores: 'Knudson, D., Cable, T., & Beck, L.',
    titulo: 'Interpreting Cultural and Natural Resources for Recreation and Tourism (2ª ed.), 2003.',
    editorial: 'Venture/Sagamore Publishing.',
  },
  {
    autores: 'Maturana, H., & Varela, F.',
    titulo: 'Autopoiesis and Cognition (1980); El árbol del conocimiento: las bases biológicas del entendimiento humano (1984, 19ª ed. 2009).',
    editorial: 'D. Reidel / Springer; Editorial Universitaria, Santiago. ISBN 978-956-11-1978-9.',
  },
  {
    autores: 'Mayorga, M., & Kohl, J.',
    titulo: 'Esencia de la interpretación del patrimonio: una visión holística para experimentar y conservar el patrimonio natural y cultural de América Latina, 2021.',
    editorial: 'Editorial UNED, San José. ISBN 978-9968-48-896-9.',
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
    titulo: 'Introducción al pensamiento complejo (1990); La cabeza bien puesta (1999); Los siete saberes necesarios para la educación del futuro.',
    editorial: 'Gedisa; UNESCO, 1999.',
  },
  {
    autores: 'Naess, A.',
    titulo: '«The Shallow and the Deep, Long-Range Ecology Movements: A Summary». Inquiry, 16(1), 95-100.',
    editorial: '1973.',
  },
  {
    autores: 'National Association for Interpretation (NAI)',
    titulo: 'Definición oficial de interpretación, aprobada por la Junta Directiva en agosto de 2021.',
    editorial: 'nai-us.org.',
  },
  {
    autores: 'Oxman, N.',
    titulo: '«Material-Based Design Computation» y «Towards a Material Ecology»; catálogo Neri Oxman: Material Ecology.',
    editorial: 'MIT Media Lab, 2010; MoMA, 2020.',
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
    autores: 'Van Matre, S.',
    titulo: 'Acclimatizing (1974); Sunship Earth (1979); Earth Education: A New Beginning (1990); Interpretive Design… and the Dance of Experience (2009).',
    editorial: 'Institute for Earth Education, Greenville, WV.',
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

  const epigrafe = (cita: string, fuente: string) => (
    <blockquote className="border-l-4 border-[#B04E2A] pl-5 py-2 space-y-2">
      <Quote className="w-5 h-5 text-[#B04E2A]" />
      <p className="text-lg italic font-['Cormorant_Garamond',Georgia,serif] text-[#14281C]">{cita}</p>
      <cite className="text-xs text-slate-500 not-italic">{fuente}</cite>
    </blockquote>
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
              Ensayo · Interpretación y co-diseño
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-['Cormorant_Garamond',Georgia,serif] leading-[1.05]">
              El paraguas interpretativo: patrimonio y diseño de experiencias para visitantes como{' '}
              <span className="text-[#E8A58B]">método de co-diseño</span>
            </h1>
            <p className="text-base sm:text-lg text-[#E4D8BF] leading-relaxed max-w-3xl">
              Este ensayo no es una revisión de autores: es un argumento. Sostiene que la
              interpretación del patrimonio y el diseño de experiencias para visitantes —una sola tradición que el
              canon disciplinar reconoce como tal— forman el paraguas metodológico bajo el cual es
              posible diseñar, por fin, medios interpretativos y experiencias para visitantes de
              manera intencionada, medible y restauradora. En este contexto, el diseño de experiencias para visitantes tiene un foco distinto y un <em>know-how</em> particular: no se orienta al entretenimiento por sí mismo, sino a facilitar una conexión significativa, ética y transformadora con el patrimonio.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 max-w-4xl">
            {[
              { n: '1', t: 'El oficio es viejo', d: 'Tilden (1957) ya diseñaba experiencias cuando no existía el término. La interpretación es la primera disciplina del diseño de experiencias.' },
              { n: '2', t: 'El canon ya planifica', d: 'Del modelo 5-M (Brochu, Caputo, Merriman) a los principios-don de Beck y Cable: el método existe. Falta volverlo operativo en medios y audioguías.' },
              { n: '3', t: 'Co-diseñar es educar', d: 'De la pedagogía del asombro (Mistral, Montessori) a la educación de la tierra (Van Matre): la experiencia que se hace enseña a cuidar.' },
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

      {/* ===== MOVIMIENTO I · TESIS ===== */}
      <section className="bg-[#F1EAD9] px-4 sm:px-6 py-14">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#B04E2A]">
            <Landmark className="w-4 h-4" />
            Movimiento I · La tesis
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
            Un oficio que precedió a la palabra «experiencia»
          </h2>
          <p className="text-[15px] leading-relaxed text-slate-700">
            Mucho antes de que el <em>design thinking</em> y la «economía de la experiencia» nombraran
            lo que hacen, un maestro de guías rurales había publicado su método. En{' '}
            <em>Interpreting Our Heritage</em> (1957), Freeman Tilden fijó los seis principios que
            siguen siendo el piso de la profesión, y en particular el cuarto: «el propósito de la
            interpretación no es la instrucción, sino la provocación» (Tilden, 1957). Que una
            disciplina fundacional defina su objetivo como <em>provocar</em>, y no como informar, es
            ya la declaración de principios del diseño de experiencias: diseñar estados de ánimo,
            vínculos y decisiones, no transmisiones de datos.
          </p>
          {epigrafe(
            'Interpretation is a purposeful approach to communication that facilitates meaningful, relevant, and inclusive experiences that deepen understanding, broaden perspectives, and inspire engagement with the world around us.',
            'Definición oficial de interpretación, National Association for Interpretation (NAI), 2021.',
          )}
          <p className="text-[15px] leading-relaxed text-slate-700">
            Setenta años después de Tilden, la propia asociación profesional definió la interpretación
            en el idioma del diseño de experiencias: como un enfoque comunicativo deliberado que
            <strong> facilita experiencias</strong> significativas, relevantes e inclusivas (NAI, 2021;
            véanse también las reflexiones de Jon Kohl sobre esta definición). La tesis de este ensayo
            es que esa convergencia no es casual ni cosmética: la interpretación del patrimonio{' '}
            <em>es</em> el diseño de experiencias con más historia, más evidencia y más rigor ético que
            existen, y por eso es el <strong>paraguas</strong> metodológico idóneo para una nueva
            metodología de diseño de medios interpretativos y experiencias para visitantes.
          </p>
          <p className="text-[15px] leading-relaxed text-slate-700">
            Esa herencia no nació en la oficina: nació caminando. La filosofía naturalista del
            trascendentalismo —Thoreau, cuya máxima «en lo silvestre está la conservación del mundo»
            (Thoreau, <em>Walking</em>, 1862) es la primera hipótesis de trabajo de la interpretación;
            Whitman, que «retumbó un viaje perpetuo» (<em>Song of the Open Road</em>, 1855)— enseñó
            que el paisaje se conoce (y se cuida) paseando. De Muir y Mills a Tilden, la interpretación
            es ese trascendentalismo llevado a método ({' '}
            {link('/historia', 'historia de la disciplina')} ). Todo lo que sigue en este ensayo
            presupone ese gesto fundacional.
          </p>
          <p className="text-[15px] leading-relaxed text-slate-700">
            Una precisión antes de avanzar, para no confundir co-diseño con atajo: lo que hoy suele
            llamarse co-diseño —ese contenido generado en minutos, en el mejor de los casos acelerado
            por inteligencia artificial— no es más que una extrapolación de la <em>deriva</em> que
            Maturana y Varela describieron en la biología del conocimiento: las organizaciones vivas
            no se diseñan desde cero, <em>derivan</em> sobre la historia de sus interacciones (Maturana
            y Varela, 1984). El co-diseño genuino es la <strong>acumulación de experiencias</strong> y
            la <strong>deriva orgánica</strong> de un canon que lleva más de un siglo madurando. Cuando
            la IA acelera la aplicación de ese canon, hace bien; cuando lo suplanta, hace ruido.
          </p>
        </div>
      </section>

      {/* ===== MOVIMIENTO II · LA PLANIFICACIÓN ===== */}
      <section className="bg-[#F6F1E5] px-4 sm:px-6 py-14 border-y border-[#E4D8BF]">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#B04E2A]">
            <Compass className="w-4 h-4" />
            Movimiento II · La planificación
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
            Un canon que ya planea, en lugar de improvisar
          </h2>
          <p className="text-[15px] leading-relaxed text-slate-700">
            La objeción habitual a la interpretación es que sería «solo paneles y folletos». El canon
            responde hace décadas con la planificación interpretativa. En{' '}
            <em>Interpretive Planning: The 5-M Model for Successful Planning Projects</em> (2003; 2ª
            ed. 2013), Lisa Brochu sistematizó —desde la experiencia acumulada en la National
            Association for Interpretation— el proceder profesional en cinco variables: <strong>Management</strong>{' '}
            (gestión y objetivos de la organización), <strong>Markets</strong> (los públicos),
            <strong> Messages</strong> (los mensajes y el tema), <strong>Mechanics</strong> (las
            condiciones de implementación) y <strong>Media</strong> (los medios interpretativos)
            (Brochu, 2013). Es la arquitectura de una metodología, no una ocurrencia: antes de
            preguntar «¿qué panel pongo?», pregunta «¿para quién, con qué propósito y en qué
            condiciones?».
          </p>
          {epigrafe(
            'Personal Interpretation: Connecting Your Audience to Heritage Resources.',
            'Título de Lisa Brochu y Tim Merriman (2002; 2ª ed., NAI/InterpPress, 2008).',
          )}
          <p className="text-[15px] leading-relaxed text-slate-700">
            El verbo decisivo de esa escuela es <strong>«conectar»</strong>: Merriman y Brochu
            titularon su manual de interpretación personal así, <em>conectando a la audiencia con los
            recursos patrimoniales</em>. La interpretación no gestiona objetos: gestiona relaciones
            entre personas y lugares. Tim Merriman, director ejecutivo de la NAI durante diecisiete
            años, y Lisa Brochu sumaban más de cinco décadas de oficio entre ambos (NAI/InterpPress,
            2008), y esa experiencia se tradujo en libros que son, literalmente, diseño de
            experiencias aplicado a museos, parques, zoológicos, sitios patrimoniales, centros
            de visitantes y —por extensión lógica— a cualquier espacio que quiera que alguien
            perciba, comprenda y recuerde. El «paraguas» del que habla este ensayo no es una
            promesa: es una escuela con manuales, planos y evaluación.
          </p>
          <p className="text-[15px] leading-relaxed text-slate-700">
            Desde América Latina, ese mismo impulso toma forma holística en <em>Esencia de la
            interpretación del patrimonio</em> (Editorial UNED, 2021), de Marisol Mayorga y Jon Kohl,
            «escrito desde América Latina para América Latina» y articulado con el Consorcio PUP para
            el Patrimonio Global, del que Kohl es fundador. La planificación interpretativa, verá el
            lector, no es un detalle administrativo: es la columna vertebral de cualquier metodología
            de co-diseño de medios y experiencias —ya sea en un sendero, en una sala de museo, en
            una bodega, en un restaurante o en cualquier otro espacio de hospitalidad.
          </p>
        </div>
      </section>

      {/* ===== MOVIMIENTO III · EL TEMA ===== */}
      <section className="bg-[#F1EAD9] px-4 sm:px-6 py-14">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#B04E2A]">
            <Feather className="w-4 h-4" />
            Movimiento III · La idea
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
            El tema: la frase que unifica el medio y la experiencia
          </h2>
          <p className="text-[15px] leading-relaxed text-slate-700">
            Si la planificación es la columna vertebral, el <strong>tema</strong> es el corazón. Sam
            Ham demostró que la interpretación solo cambia conductas si es temática, organizada,
            relevante y placentera (Ham, 1992; 2013), y que el tema no debe ser un tópico sino una{' '}
            <em>frase declarativa con mensaje</em>: una idea que dice algo sobre el mundo. Sobre esa
            base, Jon Kohl escribió la única obra dedicada por completo al arte de construir temas:{' '}
            <em>Guía de campo para escribir temas interpretativos</em>, compañera de bolsillo del
            libro de Ham (Kohl, 2024).
          </p>
          {epigrafe(
            'El tema interpretativo es la frase más importante que un intérprete puede plasmar en papel.',
            'Jon Kohl, Guía de campo para escribir temas interpretativos (2024).',
          )}
          <p className="text-[15px] leading-relaxed text-slate-700">
            Jorge Morales trasladó ese aparato al mundo de habla hispana —distinguiendo entre
            informar, comunicar e interpretar (Morales y Ham, 2008)— y su <em>Manual para la
            Interpretación Ambiental</em> (FAO/PNUMA, 1992) se escribió desde Chile para todo
            Iberoamérica. El tema, entonces, opera exactamente como la <em>idea rectora</em> de un
            proyecto de diseño: de él dependen la selección de historias, la tono del relato, el
            trazado del recorrido y el soporte que lo porta. En una metodología de diseño de medios,
            el tema es el primer entregable.
          </p>
        </div>
      </section>

      {/* ===== MOVIMIENTO IV · LOS MEDIOS ===== */}
      <section className="bg-[#F6F1E5] px-4 sm:px-6 py-14 border-y border-[#E4D8BF]">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#B04E2A]">
            <Frame className="w-4 h-4" />
            Movimiento IV · La materia
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
            Diseñar la materia que comunica: los medios interpretativos
          </h2>
          <p className="text-[15px] leading-relaxed text-slate-700">
            Aquí el canon cruza, por primera vez, con el diseño propiamente dicho. En{' '}
            <em>Interpretation by Design: Graphic Design Basics for Heritage Interpreters</em>{' '}
            (2008), Paul Caputo, Shea Lewis y Lisa Brochu escribieron para quien debe decidir sobre
            tipografía, color y composición de los <em>medios no personales</em> —exhibiciones,
            folletos, señalética, sitios web— con una advertencia: «los intérpretes usan exhibiciones,
            folletos, señales, publicaciones y otros medios visuales para contar sus historias»
            (Caputo, Lewis y Brochu, 2008). El medio interpretativo es un <em>artefacto de diseño</em>,
            y su diseño no es decoración: es interpretación.
          </p>
          <p className="text-[15px] leading-relaxed text-slate-700">
            Larry Beck y T. Ted Cable, en sus quince principios —que retitularon{' '}
            <em>gifts</em>, dones: de la chispa, de la historia, de la provocación, de la escritura
            interpretativa, de la iluminación mediante la tecnología, de la belleza, del gozo, de la
            pasión—, plantearon que la interpretación debe «infundir en las personas la capacidad y
            el deseo de sentir la belleza de su entorno», y que la pasión es el ingrediente esencial
            de una interpretación poderosa (Beck y Cable, 2002; 2011). Ese repertorio de dones es,
            traducido, la paleta de un diseñador de experiencias: qué medio despierta la chispa,
            cuál provoca, cuál conmueve, cuál ilumina con tecnología.
          </p>
          <p className="text-[15px] leading-relaxed text-slate-700">
            La <strong>audioguía geolocalizada</strong> y la cartografía interactiva de esta misma
            plataforma son la forma contemporánea de ese diseño de medios: una <em>materia</em> que
            cruza lo físico y lo digital y que puede prototiparse, publicarse y corregirse en días. Es —con el paraguas en la mano— el modelo
            operativo del paraguas interpretativo.
          </p>
          <p className="text-[15px] leading-relaxed text-slate-700">
            Una voz exterior, para no encerrarnos en el canon: la ecología material de Neri Oxman (MIT
            Media Lab) recuerda que el medio es también <em>materia</em>, y que la fibra, la madera, el
            silicio y el micelio tienen lógica propia; un panel que se descompone con el humedal es
            diseño interpretativo tanto como un tipo de letra legible (Oxman, 2010). Es una
            confirmación exterior, no un fundamento: el canon interpretativo ya sabía que el medio
            debe ocuparse de su entorno.
          </p>
        </div>
      </section>

      {/* ===== MOVIMIENTO V · DE LA CONDUCTA ===== */}
      <section className="bg-[#F1EAD9] px-4 sm:px-6 py-14">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#B04E2A]">
            <TreePine className="w-4 h-4" />
            Movimiento V · La conducta
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
            De la información a la conducta: la escuela de la tierra
          </h2>
          <p className="text-[15px] leading-relaxed text-slate-700">
            Steve Van Matre —profesor de interpretación en George Williams College y fundador del
            movimiento de la <em>educación de la tierra</em>— formuló la crítica más incómoda al
            oficio: la interpretación y la educación ambiental habían caído en transferir{' '}
            <em>información</em> en vez de transformar <em>conductas</em>. Su respuesta fueron los
            programas de inmersión (<em>Acclimatizing</em>, 1974; <em>Sunship Earth</em>, 1979) y el
            manifiesto <em>Earth Education: A New Beginning</em> (1990), cuya meta es, en sus palabras,
            «ayudar a las personas a mejorar su relación cognitiva y afectiva con las comunidades
            naturales y los sistemas de vida de la Tierra, y comenzar a construir estilos de vida que
            reduzcan su impacto» (Van Matre, 1990). Incluso tituló su última contribución{' '}
            <em>Interpretive Design… and the Dance of Experience</em> (2009): el diseñador interpretativo
            como coreógrafo de una experiencia completa, no como locutor.
          </p>
          <div className="rounded-2xl bg-[#F6F1E5] border border-[#E4D8BF] p-5 space-y-3">
            <p className="font-extrabold text-sm text-[#14281C]">Principio de aclimatación</p>
            <p className="text-[13px] text-slate-700 leading-relaxed">
              «Empieza donde están tus aprendices, no donde estás tú» — <em>Start where your learners
              are, not where you are</em>. La regla de Van Matre que convierte a cualquier medio
              interpretativo en una puerta, en vez de una clase (Van Matre, 1974). Ese criterio no
              solo sirve en un parque: sirve para hablarle a un visitante de museo, a un comensal de
              restaurante o a un huésped de una bodega.
            </p>
          </div>
          <p className="text-[15px] leading-relaxed text-slate-700">
La ecología profunda de Arne Naess resuena aquí como eco intertextual: los ecosistemas que se
            restauran fueron escritos por la naturaleza a lo largo de cientos, miles y millones de años
            de deriva y selección — la «riqueza y diversidad de las formas de vida» que Naess (1973)
            postuló como valor en sí mismo. Si el co-diseño quiere
            restaurar, no puede tratar la naturaleza como escenario decorativo: debe aprender a leerla
            como autora, tesis que el propio Van Matre vivió como «el ala de la ecología profunda dentro
            de la educación ambiental» (Institute for Earth Education).
          </p>
          <p className="text-[15px] leading-relaxed text-slate-700">
            Ese giro hacia la conducta tiene una raíz pedagógica que América Latina ya había plantado
            por otros caminos: Gabriela Mistral, madre de la pedagogía chilena, ordenaba «enseñar
            siempre: en el patio y en la calle como en la sala de clase» (Mistral, 1922/1979), y su
            rescate institucional reciente confirma su vigencia (MINEDUC, 2025; Universidad de
            Valparaíso, 2017). En paralelo, María Montessori hizo de la naturaleza una «segunda
            maestra» y del ambiente un tercer educador (Bertolino y Filippa, 2021). Interpretar a la
            Van Matre es, en el fondo, la pedagogía del asombro de Mistral y Montessori puesta a
            trabajar en el terreno: diseñar condiciones para percibir antes de explicar.
          </p>
        </div>
      </section>

      {/* ===== MOVIMIENTO VI · SABER CÓMO SABEMOS ===== */}
      <section className="bg-[#F6F1E5] px-4 sm:px-6 py-14 border-y border-[#E4D8BF]">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#B04E2A]">
            <Brain className="w-4 h-4" />
            Movimiento VI · La cognición
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
            Saber cómo sabemos: el visitante como co-autor
          </h2>
          <p className="text-[15px] leading-relaxed text-slate-700">
            El co-diseño encuentra su fundamento científico en la biología del conocimiento: los seres
            vivos somos sistemas autopoiéticos que se producen a sí mismos en interacción con el
            entorno, y nuestro conocer es un acoplamiento estructural donde «todo hacer es conocer;
            todo conocer es hacer» (Maturana y Varela, 1984). Ese postulado —el «objetividad entre
            paréntesis»— desmonta el modelo de transmisión: el visitante no <em>recibe</em> un
            significado; lo <em>hace</em>, en una danza con el lugar, la guía y el medio. La ciencia
            cognitiva enactiva continuó esa línea hacia la conciencia encarnada (Varela, Thompson y
            Rosch, 1991).
          </p>
          {epigrafe(
            'El propósito de la interpretación no es la instrucción, sino la provocación; el que interpreta provoca a su auditorio para que descubra por sí mismo.',
            'Paráfrasis del cuarto principio de Freeman Tilden, Interpreting Our Heritage (1957).',
          )}
          <p className="text-[15px] leading-relaxed text-slate-700">
            Dicho con el canon: si el visitante es un sistema que co-construye, la interpretación debe
            provocar (Tilden), conectar (Merriman y Brochu) y convocar su propia experiencia (NAI,
            2021). El co-diseño no es, entonces, una cesión de autoría del intérprete al visitante: es
            el reconocimiento de lo que Maturana describió hace décadas —todo conocer es co-fundar.
          </p>
          <p className="text-[15px] leading-relaxed text-slate-700">
            Una segunda voz exterior, también breve: la filosofía del lenguaje de Yuval Noah Harari
            recuerda que las comunidades cooperan a través de relatos compartidos (Harari, 2011), que
            es exactamente lo que hace un tema interpretativo —una ficción colectiva honesta que una
            comunidad reconoce como suya y cuyo cuidado orienta. Harari no es un teórico de la
            interpretación; traduce, para el mundo contemporáneo, lo que el don de la historia de Beck
            y Cable ya encerraba (Beck y Cable, 2011).
          </p>
        </div>
      </section>

      {/* ===== MOVIMIENTO VII · TERRITORIO ===== */}
      <section className="bg-[#F1EAD9] px-4 sm:px-6 py-14">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#B04E2A]">
            <Mountain className="w-4 h-4" />
            Movimiento VII · El territorio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
            Bajada a Chile y América Latina: memoria, oralitura y relato
          </h2>
          <p className="text-[15px] leading-relaxed text-slate-700">
            El paraguas interpretativo, cuando aterriza en Chile y en América Latina, se apoya en una
            tradición que no necesita importarse: la tradición de contar el territorio. Gabriel García
            Márquez definió en su discurso Nobel (1982) la materia de nuestra realidad —la
            «insuficiencia de los recursos convencionales para hacer creíble nuestra vida»— y ofreció
            la solidaridad como reverso de la soledad del continente ({' '}
            {link('https://www.nobelprize.org/prizes/literature/1982/marquez/', 'La soledad de América Latina')}{' '}
            ). Esa realidad desaforada es la que el co-diseño debe poder contener sin traicionar.
          </p>
          {epigrafe(
            'Somos apenas un fragmento, quizás una línea, de ese gran libro que es la naturaleza; no el centro.',
            'Elicura Chihuailaf, poeta mapuche y referente de la oralitura (trad. libre de entrevistas; vid. De sueños azules y contrasueños, 1995).',
          )}
          <p className="text-[15px] leading-relaxed text-slate-700">
            Elicura Chihuailaf enseña que el relato del territorio no pertenece a un autor: en la
            <em> oralitura</em> —la escritura que nace de la oralidad— el intérprete es un eslabón, no
            un dueño. Isabel Allende describe el acto de tejer una historia como «un proceso
            misterioso, orgánico e instintivo» (trad. libre de <em>Story Telling</em> /{' '}
            <em>La palabra mágica</em>, Penguin Random House, 2026). Ambas intuiciones son el diseño de
            experiencias hecho palabra: la historia que funciona no se ensambla, germina. Y con esto,
            el ensayo ha girado: partió del canon angloamericano, pasó por la escuela española e
            iberoamericana (Morales; Mayorga y Kohl) y aterrizó en el sur, donde la interpretación ya
            tiene genealogía propia —del <em>Manual</em> de Morales, gestado entre Chile y la FAO, al
            legado de Castaing en la NAI ({' '}
            {link('/historia', 'historia de la disciplina en Chile')} ). El mismo principio vale para
            un sendero, para una sala de museo, para una bodega, para un restaurante o para un espacio
            de hospitalidad: toda experiencia de calidad nace de una historia que se deja contar.
          </p>
        </div>
      </section>

      {/* ===== MOVIMIENTO VIII · EL PARAGUAS ===== */}
      <section className="bg-[#14281C] text-[#F6F1E5] px-4 sm:px-6 py-16">
        <div className="max-w-5xl mx-auto space-y-8">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#E8A58B]">
            <HeartHandshake className="w-4 h-4" />
            Movimiento VIII · El paraguas en acción
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-['Cormorant_Garamond',Georgia,serif] max-w-3xl leading-tight">
            Una metodología para diseñar medios interpretativos y experiencias de visitantes
          </h2>
          <p className="text-[15px] sm:text-base text-[#E4D8BF] leading-relaxed max-w-3xl">
            Reunidos los movimientos, el canon entrega, en vasos comunicantes, una metodología
            completa. No la inventa este ensayo: la hace explícita, para que cualquier equipo —parque,
            museo, comunidad, operador turístico, bodega, restaurante u hotel— pueda aplicarla sobre
            el terreno. Cinco tiempos:
          </p>
          <ol className="space-y-4 max-w-3xl">
            {[
              { e: '1', t: 'Define el tema', d: 'Escribe la frase que unifica: qué dices y por qué importa. El tema condiciona todo lo demás (Ham, 1992; Kohl, 2024; Morales y Ham, 2008).' },
              { e: '2', t: 'Planifica con las 5-M', d: 'Gestión, públicos, mensajes, mecánicas y medios. El esquema de Brochu, Caputo y Merriman como columna del proceso (Brochu, 2013).' },
              { e: '3', t: 'Diseña la materia', d: 'Paneles, señalética, cartografía, audio: medios no personales con gramática interpretativa propia tipo, color y composición (Caputo, Lewis y Brochu, 2008; Beck y Cable, 2011).' },
              { e: '4', t: 'Prototipa la experiencia', d: 'Audioguías geolocalizadas y recorridos narrados como prototipo vivo: conectar a la audiencia con el recurso y medirlo en el terreno (Merriman y Brochu, 2008).' },
              { e: '5', t: 'Evalúa la conducta', d: 'De la información a la conducta: evalúa si la experiencia cambia maneras de habitar y cuidar (Van Matre, 1990; Kohl, 2017).' },
            ].map((p) => (
              <li key={p.e} className="flex gap-4">
                <span className="w-9 h-9 rounded-xl bg-[#B04E2A] text-white font-extrabold text-sm flex items-center justify-center shrink-0 mt-0.5">
                  {p.e}
                </span>
                <div className="space-y-1">
                  <p className="font-extrabold text-white text-sm">{p.t}</p>
                  <p className="text-[13px] text-[#E4D8BF] leading-relaxed">{p.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="text-[15px] sm:text-base text-[#E4D8BF] leading-relaxed max-w-3xl">
            Con ese método, la <strong>restauración ecológica</strong> deja de ser un costado del
            proyecto y se vuelve su razón de ser: el tema se elige para proteger (Tilden; Beck y
            Cable), la conducta se diseña para reducir el impacto (Van Matre), y el co-diseño garantiza
            que la comunidad —y el visitante— se reconozcan en el relato (Chihuailaf; Morin). El
            pensamiento complejo de Edgar Morin es la cinta que une los cinco tiempos: religa
            pedagogía, ecología, diseño, memoria y <strong>hospitalidad</strong> en un solo sistema,
            sin que ninguna disciplina reclame supremacía (Morin, 1990/1999). El paraguas
            interpretativo está abierto; solo falta que cada proyecto lo sostenga —desde un circuito
            natural hasta una sala de museo o el salón de un restaurante.
          </p>
          <div className="rounded-2xl border border-[#2A4533] bg-[#14281C]/70 p-6 space-y-3 max-w-3xl">
            <p className="font-extrabold text-white text-sm uppercase tracking-wider text-[#E8A58B]">
              Aplicación práctica (ejemplos)
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-[13px] text-[#E4D8BF] leading-relaxed">
              <li className="flex gap-2"><span className="text-[#E8A58B]">•</span><span><strong>Museos:</strong> tema por exposición, audio por zonas, conexión entre objeto y visitante (Caputo, Merriman & Brochu).</span></li>
              <li className="flex gap-2"><span className="text-[#E8A58B]">•</span><span><strong>Restaurantes:</strong> origen del plato/ingrediente, historia del cocinero/localidad, hilo narrativo que trasciende la carta (Beck & Cable).</span></li>
              <li className="flex gap-2"><span className="text-[#E8A58B]">•</span><span><strong>Bodegas:</strong> cepa, terroir, trabajo, recorrido que conecta tierra-copa sin didactismo.</span></li>
              <li className="flex gap-2"><span className="text-[#E8A58B]">•</span><span><strong>Hoteles:</strong> sentido de lugar, barrio, memoria viva, experiencia de bienvenida.</span></li>
              <li className="flex gap-2"><span className="text-[#E8A58B]">•</span><span><strong>Parques/Áreas protegidas:</strong> conducta/restauración (Van Matre) + tema (Ham).</span></li>
              <li className="flex gap-2"><span className="text-[#E8A58B]">•</span><span><strong>Patrimonio urbano:</strong> oralitura (Chihuailaf) + planificación (Brochu).</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== MOVIMIENTO IX · BOLETÍN 40 ===== */}
      <section className="bg-[#F1EAD9] px-4 sm:px-6 py-14">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#B04E2A]">
            <BookOpenCheck className="w-4 h-4" />
            Movimiento IX · La relectura
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
            Boletín de Interpretación n.º 40: los orígenes como método
          </h2>
          <p className="text-[15px] leading-relaxed text-slate-700">
            Todo método gana al conocer sus orígenes. La investigación disciplinar de la AIP dedicó su
            boletín número 40 al artículo monográfico de J. Morales Miranda,{' '}
            <em>«La interpretación de la naturaleza en los Estados Unidos (1872-1920). Los orígenes de
            la práctica profesional de la interpretación del patrimonio: entre la protección y la
            educación»</em> (pp. 9-41). El trabajo reconstruye el período en el que la joven profesión
            osciló —como hoy— entre proteger y educar: exactamente la tensión que el paraguas
            interpretativo pretende conciliar, porque restaurar requiere proteger aprender.
          </p>
          <div className="rounded-2xl bg-[#F6F1E5] border border-[#E4D8BF] p-5 flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[220px] space-y-1">
              <p className="font-extrabold text-sm text-[#14281C]">Lectura sugerida a la AIP</p>
              <p className="text-xs text-slate-600">
                Acceso abierto del Boletín de Interpretación, AIP (España): los orígenes de la
                profesión en EE. UU. (Muir, Mills y el servicio de parques), entre la protección y la
                educación.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href="https://www.interpretaciondelpatrimonio.com/wp-content/uploads/2025/02/boletin_de_interpretacion_40.pdf"
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
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SITIOS OFICIALES ===== */}
      <section className="bg-[#F6F1E5] px-4 sm:px-6 py-14 border-t border-[#E4D8BF]">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="max-w-4xl space-y-4">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#B04E2A]">
              <Globe className="w-4 h-4" />
              Sitios oficiales
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
              El canon, en sus propias instituciones
            </h2>
            <p className="text-[15px] leading-relaxed text-slate-700 max-w-3xl">
              Para sostener la rigurosidad de este ensayo, se remite al lector a las fuentes
              institucionales y textuales del canon interpretativo:
            </p>
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

      {/* ===== REFERENCIAS ===== */}
      <section className="bg-[#14281C] text-[#F6F1E5] px-4 sm:px-6 py-14">
        <div className="max-w-5xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#E8A58B]">
            <Target className="w-4 h-4" />
            Referencias
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
            Bibliografía académica del ensayo
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
            Texto redactado como ensayo académico-divulgativo: las citas de Thoreau, Whitman, Mistral,
            Allende y Chihuailaf son traducciones libres; consúltese siempre el texto original. Las
            citas del canon interpretativo (Tilden, Ham, Beck y Cable, Brochu, Merriman, Caputo, Kohl,
            Mayorga, Van Matre, Morales) provienen de las ediciones y páginas institucionales citadas.
            El ensayo no busca justificar autores: utiliza sus obras como intertexto al servicio de la
            tesis central —la interpretación del patrimonio y el diseño de experiencias como paraguas
            metodológico para el diseño de medios interpretativos y experiencias de visitantes.
          </p>
        </div>
      </section>

      {/* ===== CIERRE ===== */}
      <section className="bg-[#14281C] text-[#F6F1E5] px-4 sm:px-6 py-12 border-t border-[#2A4533]">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="space-y-3">
            <LayerRow />
            <p className="text-xl sm:text-2xl font-extrabold font-['Cormorant_Garamond',Georgia,serif] max-w-2xl leading-snug">
              Interpretar es co-diseñar: dar al visitante la experiencia que lo haga, si quererlo,
              co-autor del paisaje que restaura. El paraguas está abierto; solo falta sostenerlo.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B04E2A] hover:bg-[#9A3F1E] text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Volver a la plataforma
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href="https://www.interpnet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#2A4533] text-[#E4D8BF] hover:border-[#B04E2A] hover:text-white text-xs font-bold uppercase tracking-wider transition-colors"
            >
              National Association for Interpretation
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function LayerRow() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {[Landmark, Compass, Feather, Frame, TreePine, Brain, Mountain, HeartHandshake].map((Icon, i) => (
        <span key={i} className="w-8 h-8 rounded-lg bg-[#2A4533] text-[#E8A58B] flex items-center justify-center">
          <Icon className="w-4 h-4" />
        </span>
      ))}
      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">
        tema · 5-M · medios · conducta · cognición · territorio · paraguas
      </span>
    </div>
  );
}