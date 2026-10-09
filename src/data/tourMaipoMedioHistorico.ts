import { Tour } from '../types';
import { MAIPO_IMG } from './maipoMedia';

export const tourMaipoMedioHistorico: Tour = {
  id: 'tour-maipo-central-historico',
  title: 'Ruta 2 · Maipo Central Histórico: Casonas y Carruajes del Siglo XIX',
  tagline:
    'Ruta conectada • Buin, Paine y Talagante: 7 casas fundacionales entre casonas toscanas, parques centenarios, una colección precolombina y un carruaje francés de 1915',
  description:
    'Segunda ruta conectada del valle del Maipo. Recorre el Maipo Central, el corazón histórico y cálido del valle, donde el siglo XIX sigue vivo. Reúne 7 viñas: Santa Rita y Carmen en Buin, Undurraga en Talagante, Tarapacá en Isla de Maipo y los proyectos de autor Chateau Potrero Seco, Caviahue y Ricardo Lowick. Experiencias clave: paseos en el carruaje francés Brick de 1915, la inmersión en el Museo Andino con más de 3.000 piezas precolombinas, la casona toscana de Tarapacá en un anfiteatro natural de viñedos, y asados campestres de tres tiempos maridados con los potentes Carmenère de Buin.',
  theme:
    'El Maipo Central es la cámara del tiempo del vino chileno: aquí el siglo XIX sigue vivo en cada casona, parque y carruaje.',
  tora: {
    tematica:
      'Interpreta el Maipo Central como un archivo vivo del siglo XIX chileno: arquitectura, museos y carruajes que narran la fundación del vino nacional.',
    organizada:
      'Ordena las casas históricas por municipio —Buin, Talagante e Isla de Maipo— alternando patrimonio, paisajismo y cata para dar ritmo a la jornada.',
    relevante:
      'Aterriza la gran historia en objetos concretos, como un carruaje francés de 1915 o una casona toscana, para que el visitante sienta el siglo XIX como algo cercano.',
    amena:
      'Relatos de independencia, museos con piezas precolombinas y asados campestres mantienen la jornada entretenida y sensorial de principio a fin.'
  },
  coverImage: MAIPO_IMG.santaRita,
  city: 'Buin, Paine y Talagante, Valle del Maipo',
  country: 'Chile',
  category: 'history',
  language: 'Español',
  durationMinutes: 420,
  distanceKm: 68,
  difficulty: 'easy',
  rating: 4.8,
  reviewsCount: 34,
  featured: false,
  relatedTourIds: [
    'tour-valle-del-maipo',
    'tour-maipo-alto-andino',
    'tour-maipo-pacific-costa'
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
  generalDocuments: [],
  stops: [
    {
      id: 'stop-central-santa-rita',
      order: 1,
      title: 'Viña Santa Rita (1880): Casona Pompeyana, Museo Andino y un Carruaje de 1915',
      subtitle: 'Buin, el patrimonio de excepción del Maipo Central',
      category: 'museum',
      location: {
        lat: -33.733,
        lng: -70.744,
        address: 'Camino a Santa Rita, Buin (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 130,
      narrativeText:
        'Santa Rita, fundada en 1880, es el gran arcón patrimonial del Maipo Central. En su finca de Buin late la historia de Chile: durante la independencia, más de 120 patriotas se refugiaron en sus bodegas, episodio que la viña honra con su vino «120». Hoy resguarda la Casona Pompeyana —convertida en el Hotel Casa Real—, el Parque Renner de estilo neoclásico francés y el Museo Andino, con más de 3.000 piezas precolombinas. Su etiqueta ícono es Casa Real Cabernet Sauvignon. Y hay un detalle que transporta: los visitantes pueden pasear en el histórico carruaje francés Brick de 1915. Empieza la ruta por aquí, con tiempo: entre el museo, el parque y las bodegas, Santa Rita exige una jornada completa. Pregunta por la historia de los 120 y por el patrimonio vitivinícola que la viña certifica como 100 % sostenible.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 160,
        voiceName: 'Kore',
        transcript:
          'Santa Rita, fundada en mil ochocientos ochenta, es el gran arcón patrimonial del Maipo Central. En su finca de Buin, durante la independencia, más de ciento veinte patriotas se refugiaron en sus bodegas, episodio que la viña honra con su vino ciento veinte. Hoy resguarda la Casona Pompeyana, convertida en el Hotel Casa Real, el Parque Renner de estilo neoclásico francés y el Museo Andino, con más de tres mil piezas precolombinas. Su etiqueta ícono es Casa Real Cabernet Sauvignon. Y los visitantes pueden pasear en el histórico carruaje francés Brick de mil novecientos quince.'
      },
      images: [
        {
          id: 'img-central-santarita-1',
          url: MAIPO_IMG.santaRita,
          caption: 'Viña Santa Rita, en Buin, corazón patrimonial del Maipo Central',
          isPrimary: true
        },
        {
          id: 'img-central-santarita-2',
          url: MAIPO_IMG.santaRitaTres,
          caption: 'Parques y viñedos del fundo Santa Rita',
          isPrimary: false
        }
      ],
      socialLinks: { website: 'https://www.santarita.com' },
      documents: [],
      tips: 'Reserva con antelación el paseo en carruaje y la visita al Museo Andino: son las experiencias más demandadas y de cupo limitado.',
      trivia:
        'El vino «120» conmemora a los patriotas que se refugiaron en las bodegas de Santa Rita durante la independencia de Chile.',
      estimatedStayMinutes: 120
    },
    {
      id: 'stop-central-carmen',
      order: 2,
      title: 'Viña Carmen (1850): la Primera Bodega de Chile',
      subtitle: 'Buin, la cuna del redescubrimiento del Carmenère',
      category: 'history',
      location: {
        lat: -33.74,
        lng: -70.72,
        address: 'Buin, Maipo Central (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 120,
      narrativeText:
        'Carmen es la primera bodega fundada en Chile, en 1850, y por eso su nombre es un hito del enoturismo. Aquí ocurrió uno de los episodios más notables de la historia del vino mundial: en 1994, el ampelógrafo francés Jean-Michel Boursiquot redescubrió la cepa Carmenère en estos viñedos, cuando se creía extinta a nivel global desde la crisis filoxérica europea. La parada es, por tanto, doblemente simbólica: estás en el origen de la industria vitivinícola nacional y en el lugar donde volvió a la vida una variedad que hoy es emblema de Chile. Recorre sus viñedos y pregunta por los bloques antiguos. Probar un Carmenère en el sitio de su redescubrimiento es una de esas coincidencias que el vino regala al viajero.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 130,
        voiceName: 'Puck',
        transcript:
          'Carmen es la primera bodega fundada en Chile, en mil ochocientos cincuenta, y por eso su nombre es un hito del enoturismo. Aquí ocurrió uno de los episodios más notables de la historia del vino mundial: en mil novecientos noventa y cuatro, el ampelógrafo francés Jean-Michel Boursiquot redescubrió la cepa Carmenère en estos viñedos, cuando se creía extinta a nivel global. Estás en el origen de la industria vitivinícola nacional y en el lugar donde volvió a la vida una variedad que hoy es emblema de Chile.'
      },
      images: [
        {
          id: 'img-central-carmen-1',
          url: MAIPO_IMG.uvasCarmenere,
          caption: 'Racimos de Carmenère, la cepa redescubierta en Chile',
          isPrimary: true
        },
        {
          id: 'img-central-carmen-2',
          url: MAIPO_IMG.carmenere,
          caption: 'La Carmenère, hoy emblema nacional',
          isPrimary: false
        }
      ],
      socialLinks: { website: 'https://www.carmen.cl' },
      documents: [],
      tips: 'Pide una cata enfocada en Carmenère: entender el redescubrimiento de 1994 cambia por completo la forma de probar esta cepa.',
      trivia:
        'Antes de 1994, en Chile el Carmenère solía confundirse con el Merlot por su parecido: el redescubrimiento en estos viñedos reescribió la ampelografía chilena.',
      estimatedStayMinutes: 70
    },
    {
      id: 'stop-central-undurraga',
      order: 3,
      title: 'Viña Undurraga (1885): el Parque de un Paisajista Francés',
      subtitle: 'Talagante, jardines botánicos y vocación exportadora',
      category: 'monument',
      location: {
        lat: -33.65,
        lng: -70.92,
        address: 'Camino a Melipilla, Talagante (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 130,
      narrativeText:
        'Undurraga, fundada en 1885, es una de las viñas más antiguas y queridas de Chile, y su mayor tesoro no está en la cava sino en el jardín. Su parque centenario fue diseñado por el afamado paisajista francés George Henry Dubois, e incluye especies botánicas de todo el mundo y esculturas que convierten el paseo en una experiencia de jardinería histórica. La casa también fue pionera: tuvo una vocación exportadora temprana hacia Estados Unidos, y sus vinos se cuentan entre los pioneros del vino chileno en el mundo. Recorre el parque con calma, visita las cavas y prueba sus tintos clásicos. Es una parada que combina naturaleza, arquitectura y memoria: uno de esos lugares donde el patrimonio no es un letrero, sino un árbol que creció durante más de un siglo.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 125,
        voiceName: 'Fenrir',
        transcript:
          'Undurraga, fundada en mil ochocientos ochenta y cinco, es una de las viñas más antiguas y queridas de Chile, y su mayor tesoro está en el jardín. Su parque centenario fue diseñado por el afamado paisajista francés George Henry Dubois, e incluye especies botánicas de todo el mundo y esculturas. La casa también fue pionera, con una vocación exportadora temprana hacia Estados Unidos. Es una parada que combina naturaleza, arquitectura y memoria.'
      },
      images: [
        {
          id: 'img-central-undurraga-1',
          url: MAIPO_IMG.undurraga,
          caption: 'Viña Undurraga, en Talagante',
          isPrimary: true
        },
        {
          id: 'img-central-undurraga-2',
          url: MAIPO_IMG.undurragaCava,
          caption: 'Interior y cavas de Undurraga',
          isPrimary: false
        }
      ],
      socialLinks: { website: 'https://www.undurraga.cl' },
      documents: [],
      tips: 'El parque merece tiempo aparte: calcula al menos 30 minutos solo para el jardín antes o después de la cata.',
      trivia:
        'George Henry Dubois, autor del parque, fue un paisajista francés que dejó en Undurraga una de las colecciones botánicas más ricas de la zona central de Chile.',
      estimatedStayMinutes: 90
    },
    {
      id: 'stop-central-tarapaca',
      order: 4,
      title: 'Viña Tarapacá (1874): Casona Toscana en Isla de Maipo',
      subtitle: 'Un anfiteatro natural de viñedos y tintos de guarda',
      category: 'history',
      location: {
        lat: -33.755,
        lng: -70.95,
        address: 'Isla de Maipo (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 120,
      narrativeText:
        'Tarapacá, fundada en 1874, se distingue por su casona de estilo toscano, convertida en el corazón de un anfiteatro natural de viñedos en Isla de Maipo. El paisaje es una de las postales más reconocibles del valle: las hileras suben suavemente alrededor de la casa, como gradas verdes. La viña es conocida por elaborar tintos de gran concentración y vocación de guarda, con el Cabernet Sauvignon y la Carmenère como ejes. Detente frente a la fachada toscana y mira cómo el terreno diseña el recorrido. Esta parada funciona también como puente: conecta el Maipo Central Histórico con el Pacific Maipo e Isla de Maipo, la siguiente ruta. Aprovecha para almorzar en la casona si está disponible: la cocina de valle marida a la perfección con sus vinos.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 120,
        voiceName: 'Charon',
        transcript:
          'Tarapacá, fundada en mil ochocientos setenta y cuatro, se distingue por su casona de estilo toscano, convertida en el corazón de un anfiteatro natural de viñedos en Isla de Maipo. Las hileras suben suavemente alrededor de la casa, como gradas verdes. La viña es conocida por elaborar tintos de gran concentración y vocación de guarda, con el Cabernet Sauvignon y la Carmenère como ejes. Esta parada conecta el Maipo Central Histórico con el Pacific Maipo de Isla de Maipo.'
      },
      images: [
        {
          id: 'img-central-tarapaca-1',
          url: MAIPO_IMG.islaDeMaipo,
          caption: 'Isla de Maipo, donde se levanta la casona toscana de Tarapacá',
          isPrimary: true
        }
      ],
      socialLinks: { website: 'https://www.tarapaca.cl' },
      documents: [],
      tips: 'Isla de Maipo es ideal al mediodía: combina la visita a Tarapacá con un almuerzo maridado en la casona o en los restaurantes del pueblo.',
      trivia:
        'El estilo toscano de la casona es una rareza arquitectónica en el valle: imita las villas del centro de Italia, región de origen de muchas tradiciones vitícolas.',
      estimatedStayMinutes: 80
    },
    {
      id: 'stop-central-potrero-seco',
      order: 5,
      title: 'Chateau Potrero Seco: Proyecto Boutique de Talagante',
      subtitle: 'Producción limitada y trato directo en el valle',
      category: 'gastronomy',
      location: {
        lat: -33.66,
        lng: -70.95,
        address: 'Talagante, Maipo Central (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 110,
      narrativeText:
        'Chateau Potrero Seco pertenece a esa constelación de pequeños proyectos que dan textura al Maipo Central. Su escala humana permite algo que las grandes casas no siempre ofrecen: conversar con quien hace el vino, entender las decisiones de un bloque concreto y, muchas veces, catar directo desde el barril. El nombre «potrero seco» remite al paisaje rural de campos y canales que rodea Talagante. Es la parada ideal para bajar el ritmo de la ruta histórica y apreciar el trabajo artesanal. Pregunta por sus añadas y por la historia del predio. Aquí la experiencia no está en la monumentalidad, sino en la cercanía: el vino como conversación.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 95,
        voiceName: 'Puck',
        transcript:
          'Chateau Potrero Seco pertenece a esa constelación de pequeños proyectos que dan textura al Maipo Central. Su escala humana permite algo que las grandes casas no siempre ofrecen: conversar con quien hace el vino y, muchas veces, catar directo desde el barril. El nombre potrero seco remite al paisaje rural de campos y canales que rodea Talagante. Aquí la experiencia no está en la monumentalidad, sino en la cercanía: el vino como conversación.'
      },
      images: [
        {
          id: 'img-central-potrero-1',
          url: MAIPO_IMG.talaganteRio,
          caption: 'Paisaje rural de Talagante, en el Maipo Central',
          isPrimary: true
        }
      ],
      socialLinks: { website: 'https://www.elviaje.cl' },
      documents: [],
      tips: 'Los proyectos boutique suelen atender con reserva previa y horarios acotados: confirma por teléfono antes de sumar la parada a tu ruta.',
      trivia:
        'El valle de Talagante conserva canales y potreros que recuerdan su pasado agrícola previo a la expansión urbana de Santiago.',
      estimatedStayMinutes: 45
    },
    {
      id: 'stop-central-caviahue',
      order: 6,
      title: 'Caviahue Wines: Vinos de Autor en Talagante',
      subtitle: 'Pequeñas partidas y expresión de terroir central',
      category: 'gastronomy',
      location: {
        lat: -33.67,
        lng: -70.93,
        address: 'Talagante, Maipo Central (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 110,
      narrativeText:
        'Caviahue es un proyecto de autor asentado en Talagante que apuesta por partidas pequeñas y vinos que buscan expresar el Maipo Central sin maquillaje. Su nombre evoca el paisaje de la montaña y el agua, y su filosofía se apoya en la observación del viñedo: menos intervención, más lugar. En una ruta dominada por grandes casonas históricas, Caviahue aporta el contrapunto contemporáneo: la misma tierra, otra mirada. Aprovecha la visita para comparar un tinto de autor con los grandes ensambles que probaste antes. Es el tipo de parada que enseña a distinguir el estilo de quien firma el vino. Pregunta por sus variedades y por los viñedos que abastecen la bodega.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 95,
        voiceName: 'Fenrir',
        transcript:
          'Caviahue es un proyecto de autor asentado en Talagante que apuesta por partidas pequeñas y vinos que buscan expresar el Maipo Central sin maquillaje. Su filosofía se apoya en la observación del viñedo: menos intervención, más lugar. En una ruta dominada por grandes casonas históricas, Caviahue aporta el contrapunto contemporáneo: la misma tierra, otra mirada. Pregunta por sus variedades y por los viñedos que abastecen la bodega.'
      },
      images: [
        {
          id: 'img-central-caviahue-1',
          url: MAIPO_IMG.carmenere,
          caption: 'Vinos de autor del Maipo Central',
          isPrimary: true
        }
      ],
      socialLinks: { website: 'https://www.elviaje.cl' },
      documents: [],
      tips: 'Si viajas en grupo, pregunta por catas guiadas: en proyectos pequeños la experiencia suele adaptarse al número de visitantes.',
      trivia:
        'Los proyectos de «autor» se caracterizan por firmar un estilo propio: el enólogo asume el rol de intérprete del terroir más que de productor industrial.',
      estimatedStayMinutes: 45
    },
    {
      id: 'stop-central-ricardo-lowick',
      order: 7,
      title: 'Ricardo Lowick Wines: el Cierre Artesanal de Talagante',
      subtitle: 'Boutique familiar y el adiós del Maipo Central',
      category: 'gastronomy',
      location: {
        lat: -33.68,
        lng: -70.94,
        address: 'Talagante, Maipo Central (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 110,
      narrativeText:
        'Ricardo Lowick Wines cierra la ruta con la escala más íntima: un proyecto boutique familiar donde el vino se piensa como oficio. Es el broche artesanal del Maipo Central Histórico, después de las casonas, los museos y los parques. Aquí conviene sentarse, probar con calma y conversar sobre lo recorrido: has pasado del origen del vino chileno (Carmen, 1850) al redescubrimiento del Carmenère, de los carruajes de 1915 a los jardines de un paisajista francés. Talagante, con sus canales y potreros, cierra la jornada con la calma del campo. Desde aquí puedes volver a Santiago o enlazar con la Ruta 3, el Pacific Maipo e Isla de Maipo, que arranca muy cerca, en De Martino y TerraMater. El valle sigue abierto.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 100,
        voiceName: 'Kore',
        transcript:
          'Ricardo Lowick Wines cierra la ruta con la escala más íntima: un proyecto boutique familiar donde el vino se piensa como oficio. Es el broche artesanal del Maipo Central Histórico, después de las casonas, los museos y los parques. Talagante, con sus canales y potreros, cierra la jornada con la calma del campo. Desde aquí puedes enlazar con la Ruta tres, el Pacific Maipo e Isla de Maipo, que arranca muy cerca. El valle sigue abierto.'
      },
      images: [
        {
          id: 'img-central-lowick-1',
          url: MAIPO_IMG.talagantePlaza,
          caption: 'Plaza de Talagante, cierre del Maipo Central Histórico',
          isPrimary: true
        }
      ],
      socialLinks: { website: 'https://www.elviaje.cl' },
      documents: [],
      tips: 'Buin, Paine y Talagante quedan próximos entre sí: define el orden de visita según los horarios de reserva de cada viña para aprovechar el día.',
      trivia:
        'El nombre Ricardo Lowick pertenece a un enólogo que ha trabajado en varias casas del valle: uno de esos hilos humanos que conectan proyectos grandes y pequeños.',
      estimatedStayMinutes: 45
    }
  ]
};
