import { Tour } from '../types';

export const tourFelinosChile: Tour = {
  id: 'tour-felinos-de-chile',
  title: 'Felinos de Chile: De la Puna al Paine, Una Expedición Felina',
  tagline: 'Audioguía Oficial El Viaje Por Chile • Gato andino, güiña y puma: 3.800 km por los santuarios de los cuatro felinos silvestres',
  description: 'Audioguía producida por El Viaje Por Chile (www.elviaje.cl). Un recorrido de norte a sur por los ecosistemas que albergan a los cuatro felinos silvestres de Chile: el enigmático gato andino de los bofedales de la puna, el colocolo del secano, la güiña o kodkod —el felino más pequeño de América— y el puma, señor de la estepa patagónica. Siete paradas desde el Lago Chungará hasta Torres del Paine, con protocolos de avistamiento responsable, ciencia y conservación de la mano de SERNATUR, CONAF y los guías rastreadores locales.',
  coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Puma_-_49044464307.jpg/1280px-Puma_-_49044464307.jpg',
  city: 'Ruta de los Felinos de Chile',
  country: 'Chile',
  category: 'nature',
  language: 'Español',
  durationMinutes: 300,
  distanceKm: 3870.0,
  difficulty: 'challenging',
  rating: 5.0,
  reviewsCount: 210,
  featured: true,
  published: true,
  createdAt: '2026-09-21T09:00:00Z',
  updatedAt: '2026-09-21T09:00:00Z',
  author: {
    name: 'Juan Carlos Castaing',
    avatar: '/images/juan-carlos-castaing.png',
    role: 'Especialista en Patrimonio y Rutas de Chile',
    bio: 'Guía de expedición en Patagonia, consultor de interpretación del patrimonio natural y creador en El Viaje Por Chile.',
    verified: true
  },
  socialLinks: {
    instagram: 'https://instagram.com/tiendaelviaje',
    youtube: 'https://youtube.com/@tiendaelviaje',
    website: 'https://www.tiendaelviaje.cl',
    twitter: 'https://x.com/tiendaelviaje'
  },
  generalDocuments: [
    {
      id: 'doc-guia-felinos',
      name: 'Guía de Campo: Los 4 Felinos Silvestres de Chile.pdf',
      type: 'guide',
      url: '/pdf/doc-guia-felinos.pdf',
      size: '72 KB',
      description: 'Fichas de campo del puma, gato andino, güiña y colocolo: identificación, huellas, hábitat y estatus de conservación.'
    },
    {
      id: 'doc-protocolo-avistamiento',
      name: 'Protocolo de Avistamiento Responsable de Pumas (Reserva de la Biósfera Torres del Paine).pdf',
      type: 'pdf',
      url: '/pdf/doc-protocolo-avistamiento.pdf',
      size: '68 KB',
      description: 'Buenas prácticas de distancia, silencio y comportamiento acordadas por la municipalidad, Panthera, TNC, Legacy Fund y SERNATUR.'
    }
  ],
  stops: [
    {
      id: 'stop-felinos-lauca-1',
      order: 1,
      title: 'Lago Chungará y Bofedales del Parque Nacional Lauca',
      subtitle: 'El reino a 4.500 metros del gato andino (Leopardus jacobita)',
      category: 'nature',
      location: {
        lat: -18.2481,
        lng: -69.1694,
        address: 'Parque Nacional Lauca, Lago Chungará, Región de Arica y Parinacota'
      },
      triggerRadiusMeters: 60,
      narrativeText: 'Estamos frente al Lago Chungará, a 4.517 metros de altitud, entre los lagos más altos del planeta. Rodeados de bofedales, tolares y los volcanes Parinacota y Pomerape, este es uno de los mejores territorios para buscar al gato andino, el felino más raro de América: una silueta de cola anillada que caza vizcachas y charcas al amanecer. Con un poco de calma andina, la puna también revelará vicuñas, flamencos y, con suerte, la mirada breve del colocolo.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 165,
        voiceName: 'Kore',
        transcript: 'Respira el aire fino de la puna y recorre con la vista los bofedales del Chungará. Aquí, a más de cuatro mil quinientos metros, reina el gato andino, el felino más raro de América...'
      },
      images: [
        {
          id: 'img-felinos-chungara',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Chungara_Lake_and_Volcan_Sajama_Chile_Luca_Galuzzi_2006.jpg/1280px-Chungara_Lake_and_Volcan_Sajama_Chile_Luca_Galuzzi_2006.jpg',
          caption: 'El Lago Chungará y el Volcán Sajama al fondo, corazón del altiplano de Parinacota',
          isPrimary: true
        },
        {
          id: 'img-felinos-gatoandino',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Gato_andino.jpg/1280px-Gato_andino.jpg',
          caption: 'El gato andino (Leopardus jacobita), el felino más raro de América, habita solo sobre los 4.000 metros',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://www.conaf.cl'
      },
      documents: [],
      tips: 'Aclimatiza una o dos noches en Putre (3.500 m) antes de subir; hidrátate y protégé la piel. La entrada al parque se reserva con Pase de Parques CONAF.',
      trivia: 'Se estiman menos de 2.500 gatos andinos en toda la cordillera de los Andes, y Chile es uno de sus últimos refugios.',
      estimatedStayMinutes: 35
    },
    {
      id: 'stop-felinos-frayjorge-2',
      order: 2,
      title: 'Parque Nacional Bosque Fray Jorge',
      subtitle: 'Una isla de bosque valdiviano en pleno secano, territorio del puma norteño',
      category: 'nature',
      location: {
        lat: -30.6625,
        lng: -71.68278,
        address: 'Parque Nacional Bosque Fray Jorge, Comuna de Ovalle, Región de Coquimbo'
      },
      triggerRadiusMeters: 60,
      narrativeText: 'Sobre los cerros costeros del secano de Coquimbo, a solo 100 kilómetros de La Serena, se levanta un milagro: un bosque valdiviano de olivillos y canelos sostenido por la camanchaca, la niebla del Pacífico que condensa más de 3.000 milímetros al año. Este relicto, Reserva de la Biósfera de la UNESCO desde 1977, custodia una pequeña pero estable población de pumas que caza quiques, pudúes y guanacos en los quebrados. Es el bosque más seco de América y, a la vez, una vitrina única del puma de la zona norte.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 158,
        voiceName: 'Puck',
        transcript: 'Camina por el sendero del bosque envuelto en niebla. Los troncos cubiertos de musgo ocultan los pasos del puma norteño, que aquí encuentra agua, sombra y alimento...'
      },
      images: [
        {
          id: 'img-felinos-frayjorge',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/FrayJorge.JPG/1280px-FrayJorge.JPG',
          caption: 'El bosque relicto de Fray Jorge, una isla verde en el desierto semiárido de Coquimbo',
          isPrimary: true
        },
        {
          id: 'img-felinos-puma',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Puma_-_49044464307.jpg/1280px-Puma_-_49044464307.jpg',
          caption: 'El puma (Puma concolor), presente en Fray Jorge y en toda la cordillera de Chile',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://www.conaf.cl'
      },
      documents: [],
      tips: 'Lleva abrigo para la niebla y recorre los senderos El Bosque y la cumbre del Cerro Fray Jorge; los mejores avistamientos ocurren al amanecer.',
      trivia: 'La camanchaca entrega en verano más humedad que la lluvia misma, manteniendo vivo un bosque valdiviano en pleno ambiente semiárido.',
      estimatedStayMinutes: 40
    },
    {
      id: 'stop-felinos-rioclarillo-3',
      order: 3,
      title: 'Parque Nacional Río Clarillo',
      subtitle: 'La güiña, el felino más pequeño de América, a las puertas de Santiago',
      category: 'nature',
      location: {
        lat: -33.76667,
        lng: -70.45,
        address: 'Parque Nacional Río Clarillo, Comuna de Pirque, Región Metropolitana'
      },
      triggerRadiusMeters: 50,
      narrativeText: 'A media hora de Santiago custodian uno de los tesoros mejor guardados del bosque esclerófilo: el único parque nacional de la Región Metropolitana. Sus quebradas de boldo, quillay y peumo son refugio de la güiña, el felino más pequeño de América, apenas dos kilos de sigilo que duerme la siesta entre las ramas. En el crepúsculo, el puma del monte baja a beber al estero mientras los cóndores dan vueltas sobre el cerro Apoquindo. Una invitación a mirar a Santiago con otros ojos.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 160,
        voiceName: 'Zephyr',
        transcript: 'Detente y escucha. En la espesura de boldos y peumos, la güiña se desplaza sin hacer ruido: hoy la capital comparte su aires con el felino más pequeño de América...'
      },
      images: [
        {
          id: 'img-felinos-clarillo',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/R%C3%ADo_Clarillo.jpg/1280px-R%C3%ADo_Clarillo.jpg',
          caption: 'El estero y el bosque esclerófilo del Parque Nacional Río Clarillo',
          isPrimary: true
        },
        {
          id: 'img-felinos-guina',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Leopardus_guigna.jpeg/1280px-Leopardus_guigna.jpeg',
          caption: 'La güiña o kodkod (Leopardus guigna), fragmentada entre Coquimbo y Chiloé',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://www.conaf.cl'
      },
      documents: [],
      tips: 'Reserva tu ingreso con el Pase de Parques CONAF y llega temprano; la güiña se mueve al amanecer y el atardecer, siempre en silencio.',
      trivia: 'La güiña es el único felino endémico de Chile y un símbolo de la conservación del bosque mediterráneo.',
      estimatedStayMinutes: 40
    },
    {
      id: 'stop-felinos-alerceandino-4',
      order: 4,
      title: 'Parque Nacional Alerce Andino',
      subtitle: 'Puma y alerces milenarios en los bosques lluviosos de Los Lagos',
      category: 'nature',
      location: {
        lat: -41.57795,
        lng: -72.54414,
        address: 'Parque Nacional Alerce Andino, Sector Correntoso, Región de Los Lagos'
      },
      triggerRadiusMeters: 60,
      narrativeText: 'En los faldeos del volcán Calbuco se desliza uno de los bosques más antiguos del planeta: alerces de más de 3.000 años, el segundo árbol más longevo de la Tierra, con sus copas enredadas en la lluvia y la niebla valdiviana. Bajo esa catedral de fibras vive el puma, que aquí se gana el sustento cazando pudúes entre los helechos gigantes. Es uno de los mejores rincones del sur para intentar ver al felino, aunque el verdadero regalo sea caminar bajo la sombra de organismos que ya existían cuando nació Roma.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 162,
        voiceName: 'Fenrir',
        transcript: 'Sigue el sonido del agua entre los alerces. Este bosque milenario es el hogar del puma del sur, un cazador silencioso entre las sombras verdes de Los Lagos...'
      },
      images: [
        {
          id: 'img-felinos-alerce',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Alerce_Andino_National_Park.jpg/1280px-Alerce_Andino_National_Park.jpg',
          caption: 'Alerces milenarios del Parque Nacional Alerce Andino',
          isPrimary: true
        },
        {
          id: 'img-felinos-puma-sur',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Puma_-_49044464307.jpg/1280px-Puma_-_49044464307.jpg',
          caption: 'El puma transita los bosques templados en busca de pudúes',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://www.conaf.cl'
      },
      documents: [],
      tips: 'Usa ropa impermeable: es una de las zonas más lluviosas de Chile. El sendero desde Correntoso hacia el Lago Sargo exige buen estado físico.',
      trivia: 'El alerce (Fitzroya cupressoides) puede superar los 3.600 años de vida, siendo uno de los seres vivos más longevos del planeta.',
      estimatedStayMinutes: 45
    },
    {
      id: 'stop-felinos-tepuhueico-5',
      order: 5,
      title: 'Parque Tepuhueico (Chiloé)',
      subtitle: 'El refugio sureño del kodkod melánico, inmortalizado por los guardaparques',
      category: 'nature',
      location: {
        lat: -42.77,
        lng: -73.95,
        address: 'Parque Tepuhueico, Comuna de Chonchi, Isla de Chiloé, Región de Los Lagos'
      },
      triggerRadiusMeters: 60,
      narrativeText: 'Entre la ribera del lago Tepuhueico y el océano Pacífico, la cordillera de Pirulil resguarda 20.000 hectáreas de bosque nativo en el corazón de Chiloé. Este parque privado es uno de los mejores lugares del mundo para buscar a la subespecie insular de la güiña, que aquí incluye un morfo negro casi mítico. Sus guardaparques conducen el programa "5 pequeños gigantes", una búsqueda crepuscular de kodkod, pudú, zorro chilote y el monito del monte, con el sonido del curanto y la marea como telón de fondo.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 158,
        voiceName: 'Charon',
        transcript: 'El bosque de Chiloé guarda uno de los secretos mejor guardados: la güiña negra, el kodkod melánico. Camina despacio, con los ojos en los troncos caídos y la mente en silencio...'
      },
      images: [
        {
          id: 'img-felinos-guina-chiloe',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Leopardus_guigna.jpeg/1280px-Leopardus_guigna.jpeg',
          caption: 'La güiña (Leopardus guigna) de Chiloé, codiciada por fotógrafos de fauna silvestre',
          isPrimary: true
        }
      ],
      socialLinks: {
        website: 'https://tepuhueico.com'
      },
      documents: [],
      tips: 'Reserva con anticipación el programa guiado por guardaparques; lleva linterna roja y cámara con teleobjetivo para el avistamiento nocturno.',
      trivia: 'En Chiloé existe un morfo melánico de la güiña totalmente negro, que los lugareños llaman "gato montés" y que rara vez se deja ver.',
      estimatedStayMinutes: 45
    },
    {
      id: 'stop-felinos-cerrocastillo-6',
      order: 6,
      title: 'Reserva Nacional Cerro Castillo',
      subtitle: 'Puma y huemul comparten la cordillera de granito de Aysén',
      category: 'nature',
      location: {
        lat: -46.05,
        lng: -72.18333,
        address: 'Reserva Nacional Cerro Castillo, Villa Cerro Castillo, Región de Aysén'
      },
      triggerRadiusMeters: 60,
      narrativeText: 'Al sur del río Ibáñez se levanta la fortaleza de granito del Cerro Castillo, con su laguna turquesa en forma de corazón al pie del glaciar. Esta reserva es un cruce de caminos de la estepa y el bosque: el puma de Aysén acecha guanacos en los valles abiertos, mientras el huemul, el ciervo del escudo nacional en peligro de extinción, se mueve tímido entre las lengas. Los guardaparques y guías locales lideran el trekking emblemático de dos días, una de las rutas más deseadas de la región.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 155,
        voiceName: 'Kore',
        transcript: 'Mira la cara de granito del Cerro Castillo reflejada en la laguna. Entre esos paredones, el puma y el huemul escriben la historia más antigua de la Patagonia chilena...'
      },
      images: [
        {
          id: 'img-felinos-cerrocastillo',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Portezuelo_Ib%C3%A1%C3%B1ez%2C_Cerro_Castillo.jpg/1280px-Portezuelo_Ib%C3%A1%C3%B1ez%2C_Cerro_Castillo.jpg',
          caption: 'La cordillera de granito del Cerro Castillo al este de Villa Cerro Castillo',
          isPrimary: true
        },
        {
          id: 'img-felinos-puma-aysen',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Puma_-_49044464307.jpg/1280px-Puma_-_49044464307.jpg',
          caption: 'El puma de la estepa de Aysén, depredador tope de la reserva',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://www.conaf.cl'
      },
      documents: [],
      tips: 'La ruta a la Laguna Cerro Castillo exige condición media-alta y un cruce a los 1.550 metros; informa tu itinerario en la administración CONAF de la reserva.',
      trivia: 'El huemul, en peligro de extinción desde el escudo nacional, encuentra aquí uno de sus últimos refugios junto al puma.',
      estimatedStayMinutes: 50
    },
    {
      id: 'stop-felinos-torresdelpaine-7',
      order: 7,
      title: 'Parque Nacional Torres del Paine',
      subtitle: 'La mayor densidad de pumas de Sudamérica y su protocolo de avistamiento responsable',
      category: 'nature',
      location: {
        lat: -50.98306,
        lng: -72.96639,
        address: 'Parque Nacional Torres del Paine, Sector Laguna Amarga, Región de Magallanes'
      },
      triggerRadiusMeters: 60,
      narrativeText: 'El último horizonte del viaje es la Reserva de la Biósfera de Torres del Paine, el lugar con mayor densidad de pumas de Sudamérica. En las pampas doradas, los felinos cazan guanacos a plena luz, y las pumas han protagonizado los documentales de vida silvestre más famosos del mundo. Desde 2025, la reserva cuenta con el primer protocolo mundial de avistamiento responsable de pumas, promovido por la municipalidad, Panthera, The Nature Conservancy, Legacy Fund y SERNATUR, que convierte el encuentro en un acto de conservación: distancia, silencio, vehículo como escondite y guías rastreadores certificados.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 170,
        voiceName: 'Zephyr',
        transcript: 'Respira la estepa austral y recuerda las reglas: distancia, silencio y espera. El puma de Torres del Paine es la culminación de cuatro mil kilómetros de naturaleza chilena...'
      },
      images: [
        {
          id: 'img-felinos-torresdelpaine',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Torres_del_Paine_y_cuernos_del_Paine%2C_montaje.jpg/1280px-Torres_del_Paine_y_cuernos_del_Paine%2C_montaje.jpg',
          caption: 'Las Torres y los Cuernos del Paine, escenario de la mayor densidad de pumas del continente',
          isPrimary: true
        },
        {
          id: 'img-felinos-puma-paine',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Puma_-_49044464307.jpg/1280px-Puma_-_49044464307.jpg',
          caption: 'El puma de la estepa patagónica, protagonista de los cielos abiertos del Paine',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://www.conaf.cl'
      },
      documents: [],
      tips: 'Busca pumas al amanecer y el crepúsculo con guías rastreadores autorizados del sector Laguna Amarga; respeta siempre el protocolo de avistamiento responsable.',
      trivia: 'Torres del Paine alberga la mayor concentración de pumas de Sudamérica y, desde 2025, el primer protocolo mundial de avistamiento responsable de estos felinos.',
      estimatedStayMinutes: 45
    }
  ]
};