import { Tour } from '../types';

export const tourParqueNacionalChiloeTurberas: Tour = {
  id: 'tour-parque-nacional-chiloe-turberas',
  title: 'Turberas y Tepuales de Cucao: Pisar Suave en el Parque Nacional Chiloé',
  tagline:
    'Audioguía Oficial El Viaje Por Chile • Pasarelas sobre el bosque pantanoso, la turbera de sphagnum y la playa del Pacífico: cómo la estética del paisaje educa sin destruir',
  description:
    'Audioguía producida por el Equipo El Viaje Por Chile (www.elviaje.cl). El sector Cucao del Parque Nacional Chiloé resguarda uno de los ecosistemas más frágiles y bellos del sur de Chile: el bosque pantanoso de tepú (el tepual) y las grandes turberas de musgo Sphagnum magellanicum, que cubren una parte importante del territorio chilote. Creado en 1982, con cerca de 42.567 hectáreas, el parque administrado por CONAF protege, en su ribera occidental del lago Cucao, dos senderos emblemáticos: El Tepual y Dunas–Playa Cucao, ambos con pasarelas de madera que permiten caminar sobre el humedal sin dañarlo. Este circuito de siete paradas interpreta cómo un espacio altamente sensible se convierte en experiencia estética sin dejar huella, y reúne las claves para tu visita: control de acceso, tejido de pasarelas, mirador del lago Huelde, la ciencia de la turbera, dunas, playa y el cierre en el Desaguadero.',
  theme:
    'Pisar suave sobre la turbera es la lección de Chiloé: el paisaje más frágil enseña a caminar sin dejar huella.',
  coverImage:
    'https://upload.wikimedia.org/wikipedia/commons/9/9b/Parque_Nacional_Chilo%C3%A9_-_camino_de_madera.jpg',
  city: 'Sector Cucao, comuna de Chonchi, Chiloé',
  country: 'Chile',
  category: 'nature',
  language: 'Español',
  durationMinutes: 210,
  distanceKm: 6.5,
  difficulty: 'easy',
  rating: 5.0,
  reviewsCount: 42,
  featured: true,
  published: true,
  createdAt: '2026-10-04T12:00:00Z',
  updatedAt: '2026-10-04T12:00:00Z',
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
  generalDocuments: [
    {
      id: 'doc-chiloe-parque',
      name: 'Dossier: Parque Nacional Chiloé y sus senderos.pdf',
      type: 'guide',
      url: '/pdf/doc-chiloe-parque.pdf',
      size: '74 KB',
      description: 'Historia del parque (DS 734 de 1982), las 42.567 hectáreas, el sector Cucao y los senderos El Tepual y Dunas–Playa Cucao.'
    },
    {
      id: 'doc-chiloe-turberas',
      name: 'Guía: Tepuales y Turberas de Sphagnum.pdf',
      type: 'pdf',
      url: '/pdf/doc-chiloe-turberas.pdf',
      size: '70 KB',
      description: 'Diferencia entre el bosque pantanoso de tepú y la turbera de Sphagnum magellanicum, con las claves para recorrerlos sin dañarlos.'
    }
  ],
  stops: [
    {
      id: 'stop-chiloe-control-acceso',
      order: 1,
      title: 'Control de Acceso de Chanquín: la Puerta del Turismo Suave',
      subtitle: 'Registro, guardaparques y las reglas de un paisaje que se protege',
      category: 'nature',
      location: {
        lat: -42.6191,
        lng: -74.1023,
        address: 'Control de acceso de Chanquín, sector Cucao, Parque Nacional Chiloé (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 80,
      narrativeText:
        'El primer consejo de este parque se da antes de entrar: aquí no se corre, se camina; no se grita, se escucha. En el control de acceso de Chanquín, los guardaparques de CONAF registran a cada visitante, explican las reglas del humedal y entregan el mapa de los senderos. El Parque Nacional Chiloé fue creado el 17 de noviembre de 1982, mediante el Decreto Supremo 734, y protege cerca de 42.567 hectáreas de bosque valdiviano del norte, bosque siempreverde, tepuales, turberas, playas y el lago Cucao en su ribera occidental. El registro no es un trámite: es la manera en que la administración protege un ecosistema donde cada pisada cuenta. Antes de continuar, decide la forma de tu visita: el sendero El Tepual, una pasarela de unos 1,1 kilómetros en circuito, o el sendero Dunas–Playa Cucao, que conecta con el mar. Si vienes en temporada alta, llega temprano: el suelo de madera tiene capacidad de carga y el parque regula los flujos.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 180,
        voiceName: 'Kore',
        transcript:
          'El primer consejo de este parque se da antes de entrar: aquí no se corre, se camina; no se grita, se escucha. En el control de acceso de Chanquín, los guardaparques registran a cada visitante, explican las reglas del humedal y entregan el mapa de los senderos. El Parque Nacional Chiloé fue creado el diecisiete de noviembre de mil novecientos ochenta y dos, y protege cerca de cuarenta y dos mil quinientas hectáreas de bosque, tepuales, turberas y el lago Cucao. El registro no es un trámite: es como un ecosistema donde cada pisada cuenta. Decide la forma de tu visita: el sendero El Tepual, de unos mil cien metros en circuito, o el sendero Dunas–Playa Cucao. En temporada alta llega temprano: el suelo de madera tiene capacidad de carga.'
      },
      images: [
        {
          id: 'img-chiloe-control-1',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Inicio_Sendero_El_Tepual.jpg/1280px-Inicio_Sendero_El_Tepual.jpg',
          caption: 'El inicio del sendero El Tepual, la puerta del bosque pantanoso del parque',
          isPrimary: true
        },
        {
          id: 'img-chiloe-control-2',
          url: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Parque_Nacional_Chilo%C3%A9_-_camino_de_madera.jpg',
          caption: 'La pasarela de madera: la manera del parque de pisar suave',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://www.conaf.cl/parques/parque-nacional-chiloe/'
      },
      documents: [],
      tips: 'Lleva calzado cerrado y ropa impermeable: el clima de Cucao cambia en minutos y la pasarela mojada se vuelve resbaladiza. Consulta el estado de los senderos en el control antes de partir.',
      trivia:
        'El parque protege el paisaje cultural huilliche: la palabra Chiloé viene de la lengua de los pueblos originarios de la isla y el territorio de Cucao conserva décadas de vida lacustre.',
      estimatedStayMinutes: 20
    },
    {
      id: 'stop-chiloe-el-tepual',
      order: 2,
      title: 'Sendero El Tepual: Bosque Pantanoso sobre las Aguas',
      subtitle: 'Tepú, pilpiles y la pasarela que cruza el humedal',
      category: 'nature',
      location: {
        lat: -42.6176,
        lng: -74.1006,
        address: 'Sendero El Tepual, sector Cucao, Parque Nacional Chiloé (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 80,
      narrativeText:
        'Aquí la teoría de la pasarela se vuelve cuerpo: el sendero El Tepual es un circuito de madera elevado sobre el bosque pantanoso, un ecosistema dominado por el tepú (Tepualia stipularis), ese árbol de troncos finos y flores blancas que ama el agua. Bajo la pasarela el suelo es un colchón flotante de musgo, raíces y agua estancada: el humedal forestal que en Chiloé se conoce como tepual y que no es lo mismo que la turbera, aunque a veces conviven. Mientras caminas, observa las plantas epífitas, los helechos que trepan y, si tienes suerte, escucha el canto del chucao, ese pájaro misterioso que los chilotas consideran mensajero del bosque. El sendero va rodeando lagunas internas y termina en un sector de bosque más alto. La experiencia es puramente estética, en el sentido de Pine y Gilmore: aquí el recurso se revela delante del propio recurso, sin pantallas ni maquetas, porque el paisaje habla por sí mismo.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 175,
        voiceName: 'Puck',
        transcript:
          'Aquí la teoría de la pasarela se vuelve cuerpo: el sendero El Tepual es un circuito de madera elevado sobre el bosque pantanoso dominado por el tepú, un árbol de troncos finos y flores blancas que ama el agua. Bajo la pasarela el suelo es un colchón flotante de musgo, raíces y agua estancada: el humedal forestal que en Chiloé se conoce como tepual. Mientras caminas, mira las plantas epífitas, los helechos que trepan y, con suerte, escucha al chucao. La experiencia es puramente estética: el recurso se revela delante del propio recurso, sin pantallas ni maquetas, porque el paisaje habla por sí mismo.'
      },
      images: [
        {
          id: 'img-chiloe-tepual-1',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Pasarela_sendero_El_Tepual.jpg/1280px-Pasarela_sendero_El_Tepual.jpg',
          caption: 'Pasarela del sendero El Tepual: caminar sobre el humedal sin hundirse',
          isPrimary: true
        },
        {
          id: 'img-chiloe-tepual-2',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8a/Pasarelas_de_madera_en_sendero_El_Tepual.jpg/1280px-Pasarelas_de_madera_en_sendero_El_Tepual.jpg',
          caption: 'El entramado de tablas que protege las raíces y la flora del bosque pantanoso',
          isPrimary: false
        }
      ],
      socialLinks: {},
      documents: [],
      tips: 'El circuito de El Tepual toma unos 45 minutos y es de baja dificultad: perfecto para familias. No salgas de la pasarela: el musgo y las turberas no se recuperan de una pisada.',
      trivia:
        'El tepú es una especie emblemática del bosque de Chiloé: sus flores blancas, muy visitadas por abejas nativas, convierten el tepual en un jardín sonoro cuando florece.',
      estimatedStayMinutes: 45
    },
    {
      id: 'stop-chiloe-mirador-cucao',
      order: 3,
      title: 'Mirador del Sendero: el Lago Cucao desde la Altura',
      subtitle: 'La vista de los humedales y la silueta de la isla',
      category: 'viewpoint',
      location: {
        lat: -42.6248,
        lng: -74.0873,
        address: 'Mirador sendero El Tepual, sector Cucao (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 60,
      narrativeText:
        'Al final del sendero, una pequeña elevación abre el paisaje: el mirador. Desde aquí tienes, de una sola mirada, la lección completa del parque. Abajo se extienden los humedales y las lagunas del tepual; al oeste, la gran lámina del lago Cucao, el lago más grande de la isla de Chiloé y el único de origen no glaciar de su tamaño en el sur de Chile; y al fondo, las dunas y el mar Pacífico que aparece y desaparece según la luz. Los días despejados se alcanza a divisar la cordillera de la costa y, hacia el sur, el brazo de mar que cierra la isla. Respira: estás en el punto donde el bosque, el agua dulce y el agua salada se disputan el territorio. Es el momento perfecto para entender por qué este parque fue creado: proteger el paisaje, sí, pero también enseñarlo desde la mirada de quien llega. Detente varios minutos. No hay apuro: el lento, en estos paisajes, nunca sobra.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 160,
        voiceName: 'Charon',
        transcript:
          'Al final del sendero, una pequeña elevación abre el paisaje: el mirador. Desde aquí tienes, de una sola mirada, la lección completa del parque. Abajo, los humedales del tepual; al oeste, la gran lámina del lago Cucao, el lago más grande de la isla; y al fondo, las dunas y el mar Pacífico que aparece y desaparece según la luz. Este es el punto donde el bosque, el agua dulce y el agua salada se disputan el territorio. Respira: el lento, en estos paisajes, nunca sobra.'
      },
      images: [
        {
          id: 'img-chiloe-mirador-1',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Mirador_Sendero_El_Tepual.jpg/1280px-Mirador_Sendero_El_Tepual.jpg',
          caption: 'El mirador del sendero El Tepual: la vista de humedales y lagos',
          isPrimary: true
        },
        {
          id: 'img-chiloe-mirador-2',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/Lago_Cucao_desde_mirador_sendero_El_Tepual.jpg/1280px-Lago_Cucao_desde_mirador_sendero_El_Tepual.jpg',
          caption: 'El lago Cucao desde el mirador: el agua dulce que se encuentra con el mar',
          isPrimary: false
        }
      ],
      socialLinks: {},
      documents: [],
      tips: 'En días nublados la vista del mar puede cerrarse: el lago Cucao se aprecia igual con nubarrones bajos, que aquí son parte de la atmósfera del parque.',
      trivia:
        'El lago Cucao es el mayor lago de Chiloé y por su ribera occidental corre el sendero que hoy interpreta el parque: agua de lento movimiento que alimenta los humedales.',
      estimatedStayMinutes: 20
    },
    {
      id: 'stop-chiloe-turbera',
      order: 4,
      title: 'La Turbera de Sphagnum: Carbono, Agua y Memoria',
      subtitle: 'Ciencia de la turbera y la diferencia con el tepual',
      category: 'nature',
      location: {
        lat: -42.6255,
        lng: -74.0895,
        address: 'Sector de turberas entre El Tepual y las dunas (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 70,
      narrativeText:
        'Tómala como una parada de comprensión: aunque el sendero no atraviesa una turbera pura, el paisaje que ves alrededor del parque es uno de los mayores reservorios de turberas de Sphagnum magellanicum del mundo. La turbera es un humedal en el que la materia vegetal muerta se acumula por siglos sin descomponerse del todo: por eso la turba es un archivo de botánicas, un espejo de agua y el mayor depósito de carbono del sur de Chile. Estamos, sencillamente, sobre una de las esponjas más grandes del planeta, una que regula el agua de las lluvias y que ha sido sobreexplotada por décadas para champa de horticultura. Por eso la pasarela no es una opción, es una obligación: caminar sobre la turbera es romper un sistema que tardó miles de años en formarse. El parque, junto a la ciencia y las comunidades huilliches, trabaja hoy para que estos humedales se protejan y se estudien. Ser turista aquí es tomar partido: por la pasarela, por la lentitud y por el respeto.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 170,
        voiceName: 'Fenrir',
        transcript:
          'Tómala como una parada de comprensión: aunque el sendero no atraviesa una turbera pura, el paisaje que ves alrededor es uno de los mayores reservorios de turberas de Sphagnum magellanicum del mundo. La turbera es un humedal donde la materia vegetal muerta se acumula por siglos: por eso es un archivo de botánicas, un espejo de agua y el mayor depósito de carbono del sur de Chile. Estamos sobre una de las esponjas más grandes del planeta. Por eso la pasarela no es una opción, es una obligación: caminar sobre la turbera es romper un sistema que tardó miles de años en formarse. Ser turista aquí es tomar partido: por la pasarela, por la lentitud y por el respeto.'
      },
      images: [
        {
          id: 'img-chiloe-turbera-1',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6a/Humedal_en_el_Parque_Nacional_Chilo%C3%A9_A74109320240108.jpg/1280px-Humedal_en_el_Parque_Nacional_Chilo%C3%A9_A74109320240108.jpg',
          caption: 'Humedal del Parque Nacional Chiloé: imagen ilustrativa del ecosistema de turbera protegido',
          isPrimary: true
        },
        {
          id: 'img-chiloe-turbera-2',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Lago_Huelde_desde_mirador_01.jpg/1280px-Lago_Huelde_desde_mirador_01.jpg',
          caption: 'El lago Huelde desde el mirador: el humedal y el agua que se conectan en la cuenca',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://mma.gob.cl/humedales/'
      },
      documents: [],
      tips: 'No busques caminar sobre la turbera: aunque el musgo parezca firme, una pisada destruye décadas de crecimiento. El parque indica siempre las superficies autorizadas.',
      trivia:
        'Se estima que las turberas de Chile cubren más de dos millones de hectáreas y concentran gran parte del carbón orgánico del país: futuros grandes del clima guardados bajo el musgo.',
      estimatedStayMinutes: 15
    },
    {
      id: 'stop-chiloe-dunas',
      order: 5,
      title: 'Dunas de Cucao: el Sendero que Camina hacia el Mar',
      subtitle: 'El campo de dunas, el viento y la transición al Pacífico',
      category: 'nature',
      location: {
        lat: -42.6283,
        lng: -74.0974,
        address: 'Sendero Dunas–Playa Cucao, Parque Nacional Chiloé (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 80,
      narrativeText:
        'Más allá del tepual, el paisaje cambia y se vuelve arena: el sendero Dunas–Playa Cucao atraviesa el campo de dunas de Cucao, una de las más herbáceas y fotografiadas de Chiloé. Aquí el viento del Pacífico es el gran escultor: las dunas se forman, migran y se fijan sobre la vegetación, creando formas que se renuevan cada estación. El sendero, que bordea la laguna y avanza entre médanos, es una clase abierta de geografía: izás la vista, ves la arena subiendo y, a la vuelta del cerro, el mar. Las dunas son un ecosistema de transición: hacia adentro, el agua dulce de la cuenca; hacia afuera, la inmensidad salada. Para quienes eligen este sendero, la recomendación es clara: hazlo con tiempo, con agua, y respeta las zonas señalizadas, porque aquí las dunas se conservan vivas gracias a la pasarela y a la vegetación que nadie debe pisar.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 160,
        voiceName: 'Zephyr',
        transcript:
          'Más allá del tepual, el paisaje cambia y se vuelve arena: el sendero Dunas–Playa Cucao atraviesa el campo de dunas, una de las más fotografiadas de Chiloé. Aquí el viento del Pacífico es el gran escultor: las dunas migran y se fijan sobre la vegetación, creando formas que se renuevan cada estación. El sendero bordea la laguna y avanza entre médanos: una clase abierta de geografía. Hacia adentro, el agua dulce; hacia afuera, la inmensidad salada. Corre con tiempo y agua, y respeta las zonas señalizadas: las dunas se conservan vivas gracias a la pasarela y a la vegetación que nadie debe pisar.'
      },
      images: [
        {
          id: 'img-chiloe-dunas-1',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/Parque_nacional_Chiloe-_Sendero_dunas-playa_Cucao.jpg/1280px-Parque_nacional_Chiloe-_Sendero_dunas-playa_Cucao.jpg',
          caption: 'El sendero que cruza las dunas de Cucao camino a la playa del Pacífico',
          isPrimary: true
        },
        {
          id: 'img-chiloe-dunas-2',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Lago_Huelde_desde_mirador_01.jpg/1280px-Lago_Huelde_desde_mirador_01.jpg',
          caption: 'El lago de la cuenca: agua dulce que acompaña el camino de arena',
          isPrimary: false
        }
      ],
      socialLinks: {},
      documents: [],
      tips: 'Lleva agua y algo de abrigo: el viento en las dunas acelera la sensación térmica incluso en verano. El sendero completo, entre dunas y playa, toma unas dos horas ida y vuelta.',
      trivia:
        'Las dunas de Cucao se mueven: su forma cambia con cada temporal, y por eso el sendero, la vegetación y las pasarelas se reajustan año a año.',
      estimatedStayMinutes: 40
    },
    {
      id: 'stop-chiloe-playa',
      order: 6,
      title: 'Playa Cucao: el Pacífico que se Escucha',
      subtitle: 'La playa oceánica, el mar de ripio y el respeto por las corrientes',
      category: 'nature',
      location: {
        lat: -42.6236,
        lng: -74.1138,
        address: 'Playa Cucao, borde oeste del Parque Nacional Chiloé (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 90,
      narrativeText:
        'La playa de Cucao es la culminación del sendero de las dunas: un territorio abierto del océano Pacífico donde el mar rueda piedras en vez de arena fina, con un sonido grave y poderoso que ya oías a lo lejos. Aquí cabe la advertencia que repiten los guardaparques: no bañarse. Las corrientes de esta costa son fuertes e impredecibles, y el mar del Pacífico en Chiloé no perdona la imprudencia: mucho menos en un lugar sin salvavidas. La playa es, entonces, un monumento a la contemplación: se camina, se observa, se fotografían las piedras verdes y grises pulidas por las olas, y se escucha. Es el punto donde la experiencia estética del parque se completa: no se necesita tocar el agua para sentir su inmensidad. Fíjate en las rocas: los cantos que el mar arrastra son el sedimento de miles de años. El cierre de esta parada es simplemente quedarse un rato, en silencio, frente a lo que Chile llama «el mar de las islas».',
      audio: {
        type: 'ai_generated',
        durationSeconds: 160,
        voiceName: 'Kore',
        transcript:
          'La playa de Cucao es la culminación del sendero de las dunas: un territorio abierto del océano Pacífico donde el mar rueda piedras en vez de arena fina, con un sonido grave que ya oías a lo lejos. Aquí cabe la advertencia de los guardaparques: no bañarse. Las corrientes de esta costa son fuertes e impredecibles y el mar no perdona la imprudencia. La playa es entonces un monumento a la contemplación: se camina, se observan las piedras pulidas por las olas y se escucha. No se necesita tocar el agua para sentir su inmensidad. Quédate un rato, en silencio, frente al mar de las islas de Chiloé.'
      },
      images: [
        {
          id: 'img-chiloe-playa-1',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5f/Playa_Cucao_Parque_Nacional_Chilo%C3%A9_13.jpg/1280px-Playa_Cucao_Parque_Nacional_Chilo%C3%A9_13.jpg',
          caption: 'La playa de Cucao: el Pacífico entre piedras, viento y silencio',
          isPrimary: true
        },
        {
          id: 'img-chiloe-playa-2',
          url: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/Parque_Nacional_Chilo%C3%A9_-_camino_de_madera.jpg',
          caption: 'El camino de regreso entre la arena y el bosque',
          isPrimary: false
        }
      ],
      socialLinks: {},
      documents: [],
      tips: 'No te bañes: la playa no es apta para el baño y las corrientes han causado accidentes. Disfrútala caminando, mirando o simplemente escuchando el mar.',
      trivia:
        'Fauna como el chungungo (nutria de mar) y las aves playeras frecuentan estas costas: con paciencia y silencio, es posible divisarlas en la línea de marea.',
      estimatedStayMinutes: 25
    },
    {
      id: 'stop-chiloe-desaguadero-cierre',
      order: 7,
      title: 'El Desaguadero y la Herencia Huilliche: Cierre del Circuito',
      subtitle: 'El río Cucao, la historia de la isla y la despedida',
      category: 'history',
      location: {
        lat: -42.6114,
        lng: -74.0998,
        address: 'Sector del Desaguadero, Cucao, Parque Nacional Chiloé (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 80,
      narrativeText:
        'Cerramos donde el agua del lago encuentra el camino al mar: el Desaguadero, el tramo del río Cucao que conecta la laguna con la bahía. Este rincón condensa la historia de Chiloé: el agua, el bosque y la comunidad. Los primeros habitantes huilliches vivieron en la ribera del lago Cucao, y su cosmovisión sigue presente en los nombres del territorio y en la custodia de estos humedales. En 1835, durante su viaje por Sudamérica, Charles Darwin visitó Chiloé y describió asombrado la combinación de bosques vírgenes, mareas enormes y una isla que parecía flotar en la lluvia; los paisajes que hoy protege este parque cambiaron poco desde entonces. Al volver al control, guarda una última imagen: el río silencioso, el tepual en penumbra, la turbera guardando su carbono. Has caminado sobre uno de los ecosistemas más frágiles y generosos del planeta, y lo has hecho sin dejar rastro. Así termina el circuito de Cucao y, con él, la lección del parque: la mejor experiencia es la que se marcha sin pisar.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 180,
        voiceName: 'Fenrir',
        transcript:
          'Cerramos donde el agua del lago encuentra el camino al mar: el Desaguadero, el tramo del río Cucao que conecta la laguna con la bahía. Este rincón condensa la historia de Chiloé. Los primeros habitantes huilliches vivieron en la ribera del lago, y su cosmovisión sigue presente en los nombres y en la custodia de los humedales. En mil ochocientos treinta y cinco, Darwin visitó Chiloé y describió los bosques vírgenes y las mareas enormes: el paisaje del parque cambió poco desde entonces. Al volver, guarda una última imagen: el río silencioso, el tepual en penumbra, la turbera guardando su carbono. Has caminado sin dejar rastro sobre uno de los ecosistemas más frágiles del planeta. Así termina la lección del parque: la mejor experiencia es la que se marcha sin pisar.'
      },
      images: [
        {
          id: 'img-chiloe-cierre-1',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/14/Cucao_y_Desaguadero.jpg/1280px-Cucao_y_Desaguadero.jpg',
          caption: 'Cucao y el Desaguadero: el río que une el lago con la bahía',
          isPrimary: true
        },
        {
          id: 'img-chiloe-cierre-2',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Lago_Huelde_desde_mirador_01.jpg/1280px-Lago_Huelde_desde_mirador_01.jpg',
          caption: 'El lago Huelde desde el mirador: agua y bosque en la cuenca del parque',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://www.conaf.cl/parques/parque-nacional-chiloe/'
      },
      documents: [],
      tips: 'Antes de salir, agradece al parque: el aporte de la entrada financia el mantenimiento de las pasarelas y el trabajo de los guardaparques que custodian la turbera.',
      trivia:
        'Darwin describió Chiloé en su «Diario de viaje» como una isla cubierta de bosques impenetrables y junto a mares de mareas gigantes: casi dos siglos después, el parque nacional protege gran parte de esa misma epidermis.',
      estimatedStayMinutes: 25
    }
  ]
};