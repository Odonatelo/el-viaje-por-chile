import { Tour } from '../types';
import { MAIPO_IMG } from './maipoMedia';

export const tourMaipoGrandesCasas: Tour = {
  id: 'tour-maipo-grandes-casas',
  title: 'Ruta 4 · Grandes Casas y Patrimonio del Vino Chileno',
  tagline:
    'Ruta conectada • San Pedro, Santa Carolina, Cono Sur y Terranova/Escudo Rojo: la columna vertebral exportadora del vino chileno y su epicentro simbólico en el Maipo',
  description:
    'Cuarta ruta conectada del valle del Maipo. Reúne a las grandes casas y proyectos emblemáticos que construyeron la reputación internacional del vino chileno: San Pedro (1865) y Santa Carolina (1875), baluartes del patrimonio vitivinícola nacional; Cono Sur (1993), ejemplo de la nueva generación exportadora; y Terranova Wines / Escudo Rojo, el proyecto chileno del grupo Baron Philippe de Rothschild. Una ruta para entender la industria desde sus marcas fundacionales, con el Maipo como epicentro simbólico de la viticultura sudamericana.',
  theme:
    'Las grandes casas del vino chileno son la columna vertebral de su reputación mundial: el Maipo es su epicentro simbólico.',
  tora: {
    tematica:
      'Interpreta las grandes casas y los proyectos de escala como la columna vertebral exportadora del vino chileno, con el Maipo como epicentro histórico y simbólico.',
    organizada:
      'Ordena las casas por antigüedad y por tipo de proyecto —fundacional, patrimonial, exportador moderno y de inspiración francesa— para mostrar la evolución de la industria.',
    relevante:
      'Vincula la historia del vino con lo cotidiano: son las marcas que el visitante encuentra en su mesa y en el mundo, ahora con su historia detrás.',
    amena:
      'Combina relatos de fundación, cavas históricas y catas de líneas reconocidas para que lo familiar se transforme en descubrimiento.'
  },
  coverImage: MAIPO_IMG.vinoBotella,
  city: 'Valle del Maipo y Santiago, Región Metropolitana',
  country: 'Chile',
  category: 'history',
  language: 'Español',
  durationMinutes: 330,
  distanceKm: 55,
  difficulty: 'easy',
  rating: 4.7,
  reviewsCount: 22,
  featured: false,
  relatedTourIds: [
    'tour-valle-del-maipo',
    'tour-maipo-alto-andino',
    'tour-maipo-boutique-autor'
  ],
  published: true,
  createdAt: '2026-10-09T12:00:00Z',
  updatedAt: '2026-10-09T12:00:00Z',
  author: {
    name: 'Equipo El Viaje',
    avatar: '/entorno/Recurso-6.png',
    role: 'Plataforma Oficial de Interpretación del Patrimonio',
    bio: 'Audioguías y rutas autoguiadas diseñadas por El Viaje Por Chile.',
    verified: true
  },
  socialLinks: {
    instagram: 'https://instagram.com/elviaje.cl',
    website: 'https://www.elviaje.cl'
  },
  generalDocuments: [
    {
      id: 'doc-guia-definitiva-valle-del-maipo',
      name: 'Guía Definitiva del Valle del Maipo - El Viaje del Explorador por la Cuna del Vino Chileno.pdf',
      type: 'guide',
      url: '/pdf/guia-definitiva-valle-del-maipo.pdf',
      size: '237 KB',
      description: 'Guía oficial de la plataforma: terroir del Alto Maipo, Central y Pacific Maipo, la historia de la cuna del vino chileno y las 36 viñas abiertas al enoturismo.'
    }
  ],
  stops: [
    {
      id: 'stop-casas-san-pedro',
      order: 1,
      title: 'Viña San Pedro (1865): Baluarte del Patrimonio Vitivinícola Nacional',
      subtitle: 'Una línea que cruza fronteras y una historia fundacional',
      category: 'history',
      location: {
        lat: -33.445,
        lng: -70.655,
        address: 'Presencia en el valle y Santiago, Región Metropolitana (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 120,
      narrativeText:
        'San Pedro, fundada en 1865, es un baluarte del patrimonio vitivinícola nacional. Su historia corre en paralelo a la construcción del Chile moderno: un proyecto que nació en el siglo XIX y que, generación tras generación, se convirtió en una de las marcas más influyentes y exportadas del país, con líneas emblemáticas como 1865. En el relato del valle del Maipo, San Pedro representa la escala industrial que llevó el vino chileno al mundo, y su presencia en el ecosistema enoturístico del valle la vuelve una parada obligada para entender cómo se profesionalizó la industria. Recorre sus instalaciones y prueba sus vinos de guarda. Pregunta por la historia de la línea 1865: es un buen ejemplo de cómo una empresa convierte su fecha de fundación en su propia etiqueta.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 125,
        voiceName: 'Kore',
        transcript:
          'San Pedro, fundada en mil ochocientos sesenta y cinco, es un baluarte del patrimonio vitivinícola nacional. Su historia corre en paralelo a la construcción del Chile moderno: un proyecto que nació en el siglo diecinueve y se convirtió en una de las marcas más influyentes y exportadas del país, con líneas emblemáticas como mil ochocientos sesenta y cinco. Representa la escala industrial que llevó el vino chileno al mundo.'
      },
      images: [
        {
          id: 'img-casas-sanpedro-1',
          url: MAIPO_IMG.vinoBotella,
          caption: 'El vino chileno de guarda en botella',
          isPrimary: true
        }
      ],
      socialLinks: { website: 'https://www.sanpedro.cl' },
      documents: [],
      tips: 'Consulta los horarios de visita: muchas grandes casas ofrecen recorridos solo con reserva previa y en días específicos.',
      trivia:
        'La línea 1865 de San Pedro toma su nombre del año de fundación de la viña: una convención común en las casas históricas para bautizar sus vinos ícono.',
      estimatedStayMinutes: 75
    },
    {
      id: 'stop-casas-santa-carolina',
      order: 2,
      title: 'Viña Santa Carolina (1875): Cavas Históricas y una Marca Fundacional',
      subtitle: 'Patrimonio del vino chileno y guarda de larga tradición',
      category: 'monument',
      location: {
        lat: -33.49,
        lng: -70.61,
        address: 'Santiago, Región Metropolitana (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 120,
      narrativeText:
        'Santa Carolina, fundada en 1875, es otro de los baluartes del patrimonio vitivinícola nacional. Su nombre pertenece a la primera generación de marcas que definieron el vino chileno, y sus cavas históricas son testimonio de una continuidad poco común en la industria. En esta ruta, Santa Carolina aporta la dimensión arquitectónica y memorial del vino: la bodega entendida como monumento, no solo como planta productiva. Recorre sus espacios patrimoniales y prueba sus vinos de guarda. Fíjate en cómo la etiqueta ha atravesado generaciones: las marcas fundacionales son, en el fondo, archivos de la memoria colectiva. Pregunta por los hitos de la casa y por las añadas que marcaron su historia.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 115,
        voiceName: 'Fenrir',
        transcript:
          'Santa Carolina, fundada en mil ochocientos setenta y cinco, es otro de los baluartes del patrimonio vitivinícola nacional. Su nombre pertenece a la primera generación de marcas que definieron el vino chileno, y sus cavas históricas son testimonio de una continuidad poco común. Aquí la bodega se entiende como monumento, no solo como planta productiva. Las marcas fundacionales son, en el fondo, archivos de la memoria colectiva.'
      },
      images: [
        {
          id: 'img-casas-santacarolina-1',
          url: MAIPO_IMG.barricas,
          caption: 'Cavas y barricas: la guarda histórica del vino chileno',
          isPrimary: true
        }
      ],
      socialLinks: { website: 'https://www.santacarolina.cl' },
      documents: [],
      tips: 'Pregunta específicamente por las cavas patrimoniales: no siempre están incluidas en el recorrido estándar y son el mayor atractivo histórico.',
      trivia:
        'Santa Carolina pertenece al selecto grupo de marcas chilenas con más de un siglo de historia continua: su nombre es sinónimo de tradición vitivinícola.',
      estimatedStayMinutes: 70
    },
    {
      id: 'stop-casas-cono-sur',
      order: 3,
      title: 'Viña Cono Sur (1993): la Nueva Generación Exportadora',
      subtitle: 'Vinos frutales y una apuesta por la sustentabilidad',
      category: 'gastronomy',
      location: {
        lat: -33.6,
        lng: -70.7,
        address: 'Sede en el valle, Región Metropolitana (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 120,
      narrativeText:
        'Cono Sur, fundada en 1993, representa a la generación de viñas que renovó la imagen del vino chileno en el mundo. Su estilo busca vinos frutales, accesibles y consistentes, con una fuerte apuesta por la sustentabilidad y la viticultura de bajo impacto, incluida la tracción animal en algunos de sus viñedos. En esta ruta, Cono Sur aporta el presente: la industria como exportadora global y como sector que busca reducir su huella. Prueba sus líneas y observa cómo una bodega moderna comunica su identidad. Es una parada útil para cerrar el arco histórico: de las casas fundacionales del siglo XIX a los proyectos que hoy compiten en los mercados internacionales.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 110,
        voiceName: 'Puck',
        transcript:
          'Cono Sur, fundada en mil novecientos noventa y tres, representa a la generación de viñas que renovó la imagen del vino chileno en el mundo. Su estilo busca vinos frutales, accesibles y consistentes, con una fuerte apuesta por la sustentabilidad y la viticultura de bajo impacto. Aquí la industria se muestra como exportadora global y como sector que busca reducir su huella. Es el presente del vino chileno.'
      },
      images: [
        {
          id: 'img-casas-conosur-1',
          url: MAIPO_IMG.cata,
          caption: 'Cata de vinos de la nueva generación exportadora',
          isPrimary: true
        }
      ],
      socialLinks: { website: 'https://www.conosur.com' },
      documents: [],
      tips: 'Pregunta por sus prácticas sustentables: es uno de los ejes de comunicación de la viña y un buen tema para entender el vino chileno actual.',
      trivia:
        'Cono Sur fue pionera en adoptar la bicicleta como símbolo de su compromiso ambiental, imagen que acompaña a varias de sus etiquetas.',
      estimatedStayMinutes: 65
    },
    {
      id: 'stop-casas-terranova',
      order: 4,
      title: 'Terranova Wines / Escudo Rojo: la Mirada de los Rothschild en Chile',
      subtitle: 'El sello francés aplicado a los vinos nacionales',
      category: 'gastronomy',
      location: {
        lat: -33.61,
        lng: -70.7,
        address: 'Proyecto chileno del grupo Rothschild (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 120,
      narrativeText:
        'Terranova Wines produce Escudo Rojo, la marca chilena del prestigioso grupo Baron Philippe de Rothschild, la misma familia que dio origen a Almaviva junto a Concha y Toro. Es, por tanto, el otro rostro de la alianza franco-chilena en el valle: un proyecto de estilo bordelés pensado para el mercado global pero elaborado con uvas chilenas. En esta ruta, Terranova/Escudo Rojo cierra el círculo: has visto las casas fundacionales nacionales, la generación exportadora moderna y ahora la mirada europea sobre el terroir chileno. Prueba sus vinos y compara con los ensambles que conociste en el Alto Maipo. Es una buena manera de entender cómo el capital y la técnica internacionales se integraron a la viticultura nacional.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 120,
        voiceName: 'Charon',
        transcript:
          'Terranova Wines produce Escudo Rojo, la marca chilena del prestigioso grupo Baron Philippe de Rothschild, la misma familia que dio origen a Almaviva junto a Concha y Toro. Es el otro rostro de la alianza franco-chilena en el valle: un proyecto de estilo bordelés pensado para el mercado global pero elaborado con uvas chilenas. Cierra el círculo: las casas fundacionales nacionales, la generación exportadora moderna y la mirada europea sobre el terroir chileno.'
      },
      images: [
        {
          id: 'img-casas-terranova-1',
          url: MAIPO_IMG.casillero,
          caption: 'Vinos de inspiración bordelesa elaborados en Chile',
          isPrimary: true
        }
      ],
      socialLinks: { website: 'https://www.escudorojo.com' },
      documents: [],
      tips: 'Compara un Escudo Rojo con un Almaviva del Alto Maipo: ambos nacen del sello Rothschild en Chile, pero en terroirs y escalas distintas.',
      trivia:
        'Escudo Rojo toma su nombre del escudo de armas de la familia Rothschild: la heráldica francesa aplicada a una etiqueta chilena.',
      estimatedStayMinutes: 65
    }
  ]
};
