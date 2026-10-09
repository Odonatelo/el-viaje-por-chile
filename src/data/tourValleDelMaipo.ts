import { Tour } from '../types';
import { MAIPO_IMG } from './maipoMedia';

export const tourValleDelMaipo: Tour = {
  id: 'tour-valle-del-maipo',
  title: 'Valle del Maipo: la Cuna del Vino Chileno',
  tagline:
    'Audioguía Oficial El Viaje Por Chile • La cuenca que fundó la vitivinicultura sudamericana, su río, sus tres subregiones y el secreto de una vid que nunca conoció la filoxera',
  description:
    'Audioguía central del proyecto «El Viaje del Explorador por la Cuna del Vino Chileno». El valle del Maipo no es una denominación de origen más del mapa: es el núcleo fundacional de la vitivinicultura sudamericana y el custodio de una riqueza genética única en el mundo, con viñedos centenarios cultivados sobre sus propias raíces. Esta audioguía interpreta el valle completo antes de entrar en las viñas: el río Maipo como espina dorsal, la hazaña del pie franco, las tres subregiones con identidad propia —Alto Maipo andino, Central Maipo cálido y Pacific Maipo costero— y la mesa y la vendimia que cierran el viaje. Es el portal desde el cual se ramifican las cinco rutas conectadas de la plataforma.',
  theme:
    'El valle del Maipo es la cuna del vino chileno: una cuenca donde el agua andina, el suelo y una vid que nunca conoció la filoxera escribieron la identidad de todo un país.',
  tora: {
    tematica:
      'El valle se interpreta como una sola obra: el río Maipo ordena el terroir, la historia y las comunidades, de modo que cada copa remite a un lugar concreto.',
    organizada:
      'El relato avanza de lo general a lo particular: primero la cuenca y el río, luego el milagro del pie franco, después las tres subregiones una a una y, al final, la mesa y la vendimia como cierre.',
    relevante:
      'Vuelve tangible lo que el visitante bebe: cada aroma (cassis, menta, sal) se ancla a un suelo y a un clima del valle, y el vino deja de ser producto para volverse territorio.',
    amena:
      'Se apoya en relatos breves, en leyendas como la del Casillero del Diablo y en pistas sensoriales simples, para que mirar, oler y probar sea parte del paseo y no una clase.'
  },
  coverImage: MAIPO_IMG.valleMaipo,
  city: 'Valle del Maipo, Región Metropolitana',
  country: 'Chile',
  category: 'food',
  language: 'Español',
  durationMinutes: 360,
  distanceKm: 95,
  difficulty: 'easy',
  rating: 4.9,
  reviewsCount: 58,
  featured: true,
  relatedTourIds: [
    'tour-maipo-alto-andino',
    'tour-maipo-central-historico',
    'tour-maipo-pacific-costa',
    'tour-maipo-grandes-casas',
    'tour-maipo-boutique-autor'
  ],
  published: true,
  createdAt: '2026-10-09T12:00:00Z',
  updatedAt: '2026-10-09T12:00:00Z',
  author: {
    name: 'Equipo El Viaje',
    avatar: '/entorno/Recurso-6.png',
    role: 'Plataforma Oficial de Interpretación del Patrimonio',
    bio: 'Audioguías y rutas autoguiadas diseñadas por El Viaje Por Chile: interpretamos cada lugar como una obra única y diseñamos la experiencia que cabe para quien la vive.',
    verified: true
  },
  socialLinks: {
    instagram: 'https://instagram.com/elviaje.cl',
    youtube: 'https://youtube.com/@elviajecl',
    website: 'https://www.elviaje.cl'
  },
  generalDocuments: [],
  stops: [
    {
      id: 'stop-maipo-portal',
      order: 1,
      title: 'El Portal del Valle: Santiago se Abre a la Cuenca',
      subtitle: 'De la ciudad al pie de monte: el umbral de la cuna del vino',
      category: 'viewpoint',
      location: {
        lat: -33.6119,
        lng: -70.5756,
        address: 'Acceso al valle por Puente Alto, Región Metropolitana (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 150,
      narrativeText:
        'En menos de una hora desde el centro de Santiago, la ciudad se desarma y aparece el valle. Ese es el primer privilegio del Maipo: la inmediatez. Aquí el explorador deja atrás el ruido financiero y entra a una cuenca encajonada entre la Cordillera de los Andes y los cordones de la Cordillera de la Costa. Piensa el paisaje como una gran sala de maduración natural: el clima mediterráneo semiárido del valle, con apenas 313 a 350 milímetros de lluvia al año concentrados entre abril y septiembre, una media anual de 15 °C y veranos de 25 °C con máximas de 29 a 30 °C, ofrece las métricas que la vid necesita. Esta geografía no es un decorado: es el motor de todo lo que viene. Antes de bajar a las viñas, respira y ubícate: estás entrando al núcleo fundacional de la vitivinicultura de Sudamérica.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 150,
        voiceName: 'Kore',
        transcript:
          'En menos de una hora desde el centro de Santiago, la ciudad se desarma y aparece el valle. Ese es el primer privilegio del Maipo: la inmediatez. Entramos a una cuenca encajonada entre la Cordillera de los Andes y los cordones de la Cordillera de la Costa. El clima mediterráneo semiárido, con apenas trescientos a trescientos cincuenta milímetros de lluvia al año, una media de quince grados y veranos de veinticinco, ofrece las métricas que la vid necesita. Respira: estás entrando al núcleo fundacional de la vitivinicultura de Sudamérica.'
      },
      images: [
        {
          id: 'img-maipo-portal-1',
          url: MAIPO_IMG.valleMaipo,
          caption: 'El valle del Maipo visto desde el umbral de la cuenca',
          isPrimary: true
        }
      ],
      socialLinks: {},
      documents: [],
      tips: 'Sal temprano desde Santiago: en hora punta el acceso por Puente Alto se congestiona y se pierde la mejor luz de la mañana, la preferida para fotografiar los viñedos.',
      trivia:
        'El Maipo concentra la oferta enológica más densa de Chile: 36 viñas abiertas formalmente al enoturismo en una sola denominación de origen.',
      estimatedStayMinutes: 20
    },
    {
      id: 'stop-maipo-rio-espina',
      order: 2,
      title: 'El Río Maipo: la Espina Dorsal del Terroir',
      subtitle: 'Agua andina, canales ancestrales y el riego que ordena el valle',
      category: 'nature',
      location: {
        lat: -33.639,
        lng: -70.577,
        address: 'Ribera del río Maipo, sector Pirque (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 140,
      narrativeText:
        'Todo el valle se explica por este río. El Maipo nace a 900 metros sobre el nivel del mar, en las laderas del volcán Maipú, y recorre 250 kilómetros hasta el océano Pacífico; su principal afluente, el río Mapocho, le entrega el agua que desciende de la cordillera frente a Santiago. Mira el cauce: es la columna vertebral que organiza los suelos, los pueblos y las viñas. Mucho antes de los châteaux bordeleses, los picunches cultivaban estas riberas y el Imperio Inca complicó su agricultura con un entramado de canales de riego que sentó las bases hidráulicas del territorio. Esa obra sobrevive: hoy riega los mismos cuadros que dan el Cabernet Sauvignon más reputado de Chile. Detente en la ribera y escucha: el sonido del agua andina es, literalmente, la materia prima del vino que vas a probar.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 145,
        voiceName: 'Fenrir',
        transcript:
          'Todo el valle se explica por este río. El Maipo nace a novecientos metros sobre el nivel del mar, en las laderas del volcán Maipú, y recorre doscientos cincuenta kilómetros hasta el Pacífico; su afluente, el río Mapocho, le entrega el agua de la cordillera. Es la columna vertebral que organiza suelos, pueblos y viñas. Los picunches cultivaban estas riberas y los incas tejieron canales de riego que sentaron las bases hidráulicas del valle. El sonido del agua andina es, literalmente, la materia prima del vino que vas a probar.'
      },
      images: [
        {
          id: 'img-maipo-rio-1',
          url: MAIPO_IMG.rioMaipo,
          caption: 'El río Maipo, espina dorsal de la cuenca vitivinícola',
          isPrimary: true
        },
        {
          id: 'img-maipo-rio-2',
          url: MAIPO_IMG.rioMaipoDesembocadura,
          caption: 'La desembocadura del Maipo: el valle entrega sus aguas al océano',
          isPrimary: false
        }
      ],
      socialLinks: {},
      documents: [],
      tips: 'No te bañes: el Maipo es un río de régimen andino, frío y de caudal variable. Disfrútalo desde la ribera y respeta los senderos habilitados.',
      trivia:
        'El régimen de riego heredado de los canales prehispánicos convive hoy con más de 10.000 hectáreas tecnificadas con goteo de alta precisión para enfrentar la megasequía.',
      estimatedStayMinutes: 25
    },
    {
      id: 'stop-maipo-pie-franco',
      order: 3,
      title: 'El Milagro del Pie Franco: la Vid que Nunca Conoció la Filoxera',
      subtitle: 'De la misa de 1555 a las uvas nobles de 1851 y un blindaje natural',
      category: 'history',
      location: {
        lat: -33.6455,
        lng: -70.585,
        address: 'Viñedo histórico del valle, sector Pirque–Puente Alto (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 120,
      narrativeText:
        'Párate junto a una parra vieja y mira sus raíces: aquí está el tesoro del Maipo. La historia comienza en 1540, cuando llegaron las primeras vides de Vitis vinifera para abastecer el vino de misa; en 1555 se registró la primera acta oficial de producción vitivinícola de Chile. Durante los siglos XVII y XVIII, la Orden Jesuita establecida en Buin impulsó las bodegas hasta su expulsión en 1767. Pero la gran metamorfosis llegó en 1851, cuando Don Silvestre Ochagavía introdujo desde Francia las uvas nobles —Cabernet Sauvignon, Merlot, Carmenère, Pinot Noir, Sauvignon Blanc y Semillón— y transformó para siempre la vocación del valle. Y entonces ocurrió el milagro: a partir de 1860, la filoxera arrasó los viñedos de Europa. Chile, blindado por el desierto al norte, los glaciares al sur, los Andes al este y el Pacífico al oeste, quedó libre del insecto. Sus parras siguieron creciendo sobre sus propias raíces: cultivo «en pie franco». Ese privilegio biológico, único en el mundo del vino, es la razón por la que hoy puedes tocar una vid centenaria sin injerto.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 175,
        voiceName: 'Puck',
        transcript:
          'Párate junto a una parra vieja y mira sus raíces: aquí está el tesoro del Maipo. En mil quinientos cuarenta llegaron las primeras vides para el vino de misa; en mil quinientos cincuenta y cinco se registró la primera acta vitivinícola de Chile. La gran metamorfosis llegó en mil ochocientos cincuenta y uno, cuando Silvestre Ochagavía introdujo desde Francia las uvas nobles. Y entonces ocurrió el milagro: a partir de mil ochocientos sesenta, la filoxera arrasó los viñedos de Europa, pero Chile, blindado por el desierto al norte, los glaciares al sur, los Andes y el Pacífico, quedó libre del insecto. Sus parras siguieron creciendo sobre sus propias raíces: cultivo en pie franco. Ese privilegio biológico es la razón por la que hoy puedes tocar una vid centenaria sin injerto.'
      },
      images: [
        {
          id: 'img-maipo-piefranco-1',
          url: MAIPO_IMG.maipoVinas,
          caption: 'Viñedo de parras en pie franco: vides sobre sus propias raíces',
          isPrimary: true
        },
        {
          id: 'img-maipo-piefranco-2',
          url: MAIPO_IMG.uvasCarmenere,
          caption: 'Racimos de Carmenère, la cepa redescubierta en el valle',
          isPrimary: false
        }
      ],
      socialLinks: {},
      documents: [],
      tips: 'Cuando visites una viña, pide expresamente ver sus «parras antiguas» o bloques «ungrafted»: suelen albergar las cepas históricas y son el mejor lugar para entender esta historia.',
      trivia:
        'En 1994, el ampelógrafo francés Jean-Michel Boursiquot redescubrió la cepa Carmenère en el Maipo, creyéndose extinta en el mundo desde la crisis filoxérica europea.',
      estimatedStayMinutes: 25
    },
    {
      id: 'stop-maipo-alto',
      order: 4,
      title: 'Alto Maipo: el Piedemonte Andino',
      subtitle: 'Suelos coluviales, amplitud térmica y la cuna del Cabernet Sauvignon',
      category: 'viewpoint',
      location: {
        lat: -33.6,
        lng: -70.58,
        address: 'Piedemonte andino, Puente Alto–Pirque (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 160,
      narrativeText:
        'Sube la vista: el Alto Maipo, o Maipo Andes, se levanta entre los 400 y 800 metros de altitud, justo al pie de la montaña. Aquí ocurre un fenómeno clave: las brisas térmicas circulan entre el plano del valle y las laderas, refrescando la primavera y el verano y atemperando el invierno. Súmale baja humedad relativa y alta radiación solar, y tendrás una sanidad foliar excepcional, ideal incluso para el cultivo orgánico. Los suelos son de origen coluvial —depósitos angulares que la gravedad dejó al pie del monte— y aluvial, marcadamente rocosos y pobres en materia orgánica: el estrés hídrico perfecto para concentrar antocianos y taninos. El rey aquí es el Cabernet Sauvignon, que representa el 52 % de la superficie total del valle con más de 6.400 hectáreas, y encuentra su feudo indiscutido en estas terrazas de Puente Alto y Pirque. En la copa lo reconocerás por el cassis, el higo maduro, el grafito y ese característico matiz mentolado o de cedro fresco que solo da la montaña.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 165,
        voiceName: 'Charon',
        transcript:
          'Sube la vista: el Alto Maipo se levanta entre los cuatrocientos y los ochocientos metros de altitud, al pie de la montaña. Las brisas térmicas circulan entre el valle y las laderas, refrescando el verano. Sus suelos coluviales, rocosos y pobres en materia orgánica, imponen el estrés hídrico perfecto para concentrar antocianos y taninos. Aquí reina el Cabernet Sauvignon, que ocupa el cincuenta y dos por ciento de la superficie del valle, con más de seis mil cuatrocientas hectáreas, y encuentra su feudo en Puente Alto y Pirque. En la copa lo reconocerás por el cassis, el higo maduro, el grafito y ese matiz mentolado que solo da la montaña.'
      },
      images: [
        {
          id: 'img-maipo-alto-1',
          url: MAIPO_IMG.andes,
          caption: 'Viñedos del Alto Maipo al pie de la Cordillera de los Andes',
          isPrimary: true
        }
      ],
      socialLinks: {},
      documents: [],
      tips: 'En el Alto Maipo las noches son notablemente más frías que el día: lleva una capa de abrigo incluso en verano para los atardeceres con maridaje.',
      trivia:
        'La rotundone, el compuesto que da el aroma a pimienta negra al Syrah, se potencia en el Alto Maipo gracias a las frías corrientes nocturnas que bajan de la cordillera.',
      estimatedStayMinutes: 30
    },
    {
      id: 'stop-maipo-central',
      order: 5,
      title: 'Central Maipo: el Corazón Cálido del Carmenère',
      subtitle: 'Buin, Paine y Talagante: la depresión intermedia y sus suelos aluviales',
      category: 'history',
      location: {
        lat: -33.7329,
        lng: -70.7419,
        address: 'Sector Buin, Central Maipo (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 160,
      narrativeText:
        'Baja del piedemonte y entra al Central Maipo, o Maipo Medio: la depresión intermedia, a unos 550 metros de altitud, donde viven Buin, Paine y Talagante. Este es el microclima más cálido y soleado de todo el valle, y aquí la protagonista absoluta es la Carmenère. Al ser una cepa de ciclo fenólico largo y maduración tardía, necesita el calor acumulado de la depresión para degradar sus metoxipirazinas y suavizar sus taninos. Cuando alcanza la madurez justa entrega vinos aterciopelados, con ciruela negra, chocolate amargo y especias dulces. Los suelos también cambian: son aluviales profundos, creados por el arrastre histórico de los ríos, y su formación estelar es la tercera y cuarta terraza aluvial de cantos rodados. Esa combinación es la responsable de la redondez y la elegancia tánica del Cabernet Sauvignon de la denominación, y del perfil carnoso, frutal y de taninos pulidos de sus tintos. Aquí el Burdeos se siente cómodo: también hay Merlot y Malbec.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 165,
        voiceName: 'Kore',
        transcript:
          'Baja del piedemonte y entra al Central Maipo, la depresión intermedia, a unos quinientos cincuenta metros, donde viven Buin, Paine y Talagante. Es el microclima más cálido y soleado del valle, y aquí la protagonista absoluta es la Carmenère. Al ser una cepa de maduración tardía, necesita este calor para suavizar sus taninos. Cuando madura bien entrega vinos aterciopelados, con ciruela negra, chocolate amargo y especias dulces. Los suelos son aluviales profundos, con la tercera y cuarta terraza de cantos rodados que dan al Cabernet Sauvignon del valle su redondez y elegancia tánica.'
      },
      images: [
        {
          id: 'img-maipo-central-1',
          url: MAIPO_IMG.maipoCarmenere,
          caption: 'Viñas del Central Maipo: el corazón cálido del Carmenère',
          isPrimary: true
        },
        {
          id: 'img-maipo-central-2',
          url: MAIPO_IMG.carmenere,
          caption: 'La Carmenère, cepa emblema del Maipo Medio',
          isPrimary: false
        }
      ],
      socialLinks: {},
      documents: [],
      tips: 'Combina la visita a Buin o Paine con un almuerzo campestre: los Carmenère del Maipo Medio piden platos de sabor intenso, como asados de tres tiempos.',
      trivia:
        'La tercera y cuarta terraza aluvial de cantos rodados se formó por el arrastre milenario de los ríos: es la firma geológica detrás de los grandes Cabernet del valle.',
      estimatedStayMinutes: 30
    },
    {
      id: 'stop-maipo-pacific',
      order: 6,
      title: 'Pacific Maipo: la Brisa del Océano',
      subtitle: 'Isla de Maipo y Melipilla: frescura, salinidad y las cepas blancas',
      category: 'nature',
      location: {
        lat: -33.75,
        lng: -70.92,
        address: 'Isla de Maipo, Pacific Maipo (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 160,
      narrativeText:
        'Hacia el oeste el valle se abre y llega la brisa. El Pacific Maipo, también llamado Maipo Costa o Maipo Bajo, ocupa las estribaciones de la Cordillera de la Costa y las localidades de Isla de Maipo y Melipilla. Recibe las brisas marinas y las neblinas matinales del Pacífico, lo que genera un régimen térmico más fresco y suelos sedimentario-aluviales con mayores contenidos de arena, limo y arcilla. Aquí cambia el color del vino: es el reino de los blancos. El Chardonnay, con alrededor de 950 hectáreas, logra un equilibrio notable entre piña fresca, cítricos y manzana verde, con una textura cremosa atravesada por acidez mineral. El Sauvignon Blanc muestra un perfil afilado, marcadamente cítrico, con pomelo blanco y un sutil pimentón verde. Y hay una joya histórica: el Semillón, que vive un renacimiento en Isla de Maipo con parras ancestrales en pie franco, dando blancos de acidez salina y una capacidad de guarda de décadas. Los tioles volátiles de los blancos costeros se preservan gracias a las frías neblinas matinales.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 165,
        voiceName: 'Puck',
        transcript:
          'Hacia el oeste el valle se abre y llega la brisa. El Pacific Maipo ocupa las estribaciones de la Cordillera de la Costa, en Isla de Maipo y Melipilla. Recibe las brisas marinas y las neblinas matinales del Pacífico, lo que genera un régimen más fresco y suelos con más arena, limo y arcilla. Aquí cambia el color del vino: es el reino de los blancos. El Chardonnay logra piña fresca, cítricos y manzana verde; el Sauvignon Blanc es afilado y cítrico. Y hay una joya histórica: el Semillón, con parras ancestrales en pie franco que dan blancos de acidez salina y guarda de décadas.'
      },
      images: [
        {
          id: 'img-maipo-pacific-1',
          url: MAIPO_IMG.islaDeMaipo,
          caption: 'Isla de Maipo, puerta del Pacific Maipo y sus cepas blancas',
          isPrimary: true
        }
      ],
      socialLinks: {},
      documents: [],
      tips: 'Si tu ruta incluye el Pacific Maipo, reserva la cata de blancos para la mañana: las neblinas costeras y la luz fresca realzan su tensión cítrico-salina.',
      trivia:
        'El Semillón, hoy casi olvidado en el mundo, registra en Isla de Maipo un renacimiento a partir de parras ancestrales en pie franco: un fósil vivo del vino chileno.',
      estimatedStayMinutes: 30
    },
    {
      id: 'stop-maipo-mesa-vendimia',
      order: 7,
      title: 'La Mesa y la Vendimia: el Cierre del Viaje',
      subtitle: 'Gastronomía, fiestas de la vendimia y el valle sostenible',
      category: 'gastronomy',
      location: {
        lat: -33.664,
        lng: -70.927,
        address: 'Talagante / Isla de Maipo, cierre del circuito (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 160,
      narrativeText:
        'El recorrido se cierra a la mesa. El vino del Maipo no se entiende sin su cocina: asados campestres de tres tiempos, almuerzos maridados, micro-apicultores, talleres de chocolatería artesanal y las centenarias bodegas de chicha de uva de Isla de Maipo. Y una vez al año todo esto estalla en las Fiestas de la Vendimia, cuando el valle celebra la recolección de los racimos: en 2026 se esperan la Vendimia San Francisco de El Monte (7 y 8 de marzo), la Fiesta de la Vendimia Isla de Maipo (28 y 29 de marzo), la Fiesta del Vino de Pirque por sus 100 años (11 y 12 de abril) y la IV Vendimia del Valle del Maipo (17, 18 y 19 de abril), entre otras. Detrás de la fiesta hay un compromiso: el Sello Vendimia ordena la sostenibilidad en seis ámbitos, y la industria ha tecnificado más de 10.000 hectáreas con riego por goteo de alta precisión en el marco del Fondo de Agua Santiago-Maipo. Concha y Toro restaura con más de 7.000 árboles nativos; Santa Rita certifica el 100 % de sus viñedos; De Martino cultiva en mínima intervención. Brinda por el valle: has recorrido su geografía y su historia en una copa.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 180,
        voiceName: 'Kore',
        transcript:
          'El recorrido se cierra a la mesa. El vino del Maipo no se entiende sin su cocina: asados campestres, almuerzos maridados, chocolatería artesanal y las centenarias bodegas de chicha de uva de Isla de Maipo. Una vez al año todo estalla en las Fiestas de la Vendimia, cuando el valle celebra la recolección de los racimos. Y detrás de la fiesta hay un compromiso: el Sello Vendimia ordena la sostenibilidad, y más de diez mil hectáreas se han tecnificado con riego por goteo. Concha y Toro restaura con árboles nativos, Santa Rita certifica sus viñedos, De Martino cultiva con mínima intervención. Brinda por el valle: has recorrido su geografía y su historia en una copa.'
      },
      images: [
        {
          id: 'img-maipo-mesa-1',
          url: MAIPO_IMG.cata,
          caption: 'La cata y la mesa: el cierre gastronómico del valle del Maipo',
          isPrimary: true
        },
        {
          id: 'img-maipo-mesa-2',
          url: MAIPO_IMG.barricas,
          caption: 'Barricas de roble en una bodega del valle',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://www.elviaje.cl'
      },
      documents: [],
      tips: 'Si viajas en marzo o abril, revisa las fechas de las vendimias: son la mejor puerta de entrada a la cultura del valle, pero conviene reservar con anticipación.',
      trivia:
        'Las Fiestas de la Vendimia del Maipo se rigen por el Manual de Buenas Prácticas de las Vendimias de Chile, que otorga el Sello Vendimia según seis ámbitos obligatorios.',
      estimatedStayMinutes: 40
    }
  ]
};
