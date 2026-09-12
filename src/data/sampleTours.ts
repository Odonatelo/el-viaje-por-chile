import { Tour } from '../types';

export const INITIAL_TOURS: Tour[] = [
  {
    id: 'tour-patagonia-carrerabaker',
    title: 'Travesía Carretera Austral & Capillas de Mármol: La Joya de Aysén',
    tagline: 'Audioguía Oficial El Viaje Por Chile • Cavernas esculpidas en el Lago General Carrera y la fuerza de la Patagonia',
    description: 'Audioguía producida por El Viaje Por Chile (www.elviaje.cl). Explora los parajes más sobrecogedores de la Carretera Austral: desde las translúcidas aguas turquesa del Lago General Carrera que esculpen las Catedrales y Capillas de Mármol, pasando por la confluencia de los Ríos Baker y Neff, hasta las pasarelas de ciprés de Caleta Tortel y el imponente Ventisquero Colgante Queulat.',
    coverImage: 'https://images.unsplash.com/photo-1544085311-11a028465b03?auto=format&fit=crop&w=1200&q=80',
    city: 'Carretera Austral / Aysén',
    country: 'Chile',
    category: 'nature',
    language: 'Español',
    durationMinutes: 145,
    distanceKm: 42.0,
    difficulty: 'moderate',
    rating: 5.0,
    reviewsCount: 380,
    featured: true,
    published: true,
    createdAt: '2026-02-15T08:00:00Z',
    updatedAt: '2026-02-28T14:00:00Z',
    author: {
      name: 'Juan Carlos Castaing',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
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
        id: 'doc-mapa-carretera-austral',
        name: 'Guía de Ruta: Carretera Austral y Cuenca del Lago General Carrera.pdf',
        type: 'pdf',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        size: '6.8 MB',
        description: 'Mapa hidrográfico, tiempos de navegación lacustre, estaciones de combustible y miradores panorámicos.'
      },
      {
        id: 'doc-geologia-marmol',
        name: 'Ficha Científica: Geomorfología y Cavernas de Carbonato de Calcio.pdf',
        type: 'guide',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        size: '3.4 MB',
        description: 'Estudio de los minerales, cambios de nivel del lago y conservación del Santuario de la Naturaleza.'
      }
    ],
    stops: [
      {
        id: 'stop-marmol-1',
        order: 1,
        title: 'Santuario de la Naturaleza Capillas y Catedral de Mármol',
        subtitle: 'Esculturas minerales flotando sobre las aguas turquesa del Lago General Carrera',
        category: 'nature',
        location: {
          lat: -46.65417,
          lng: -72.63056,
          address: 'Puerto Río Tranquilo, Lago General Carrera, Región de Aysén'
        },
        triggerRadiusMeters: 50,
        narrativeText: 'Nos encontramos navegando frente a la Catedral de Mármol en el Lago General Carrera, el segundo lago más grande de Sudamérica. Durante más de 6.000 años, el oleaje constante de aguas de deshielo glaciar ha disuelto los estratos de carbonato de calcio, puliendo columnas, bóvedas y túneles laberínticos con vetas de colores blancos, celestes, amarillos y rosas que se reflejan en el agua con una luminosidad sobrenatural.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 160,
          voiceName: 'Puck',
          transcript: 'Observa cómo la luz del sol se filtra entre las bóvedas de mármol. El tono turquesa del agua proviene de la harina glaciar suspendida...'
        },
        images: [
          {
            id: 'img-marmol-1',
            url: 'https://images.unsplash.com/photo-1544085311-11a028465b03?auto=format&fit=crop&w=1000&q=80',
            caption: 'Bóvedas y columnas esculpidas de la Catedral de Mármol en Puerto Río Tranquilo',
            isPrimary: true
          },
          {
            id: 'img-marmol-2',
            url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
            caption: 'Interior de la Caverna de Mármol reflejando el agua glaciar',
            isPrimary: false
          }
        ],
        youtubeUrl: 'https://www.youtube.com/watch?v=0w5M4M3nKqg',
        socialLinks: {
          website: 'https://www.tiendaelviaje.cl'
        },
        documents: [],
        tips: 'Realiza la navegación temprano por la mañana cuando el viento puelche amaina y las aguas del lago están en calma de espejo.',
        trivia: 'El yacimiento contiene más de 5.000 millones de toneladas de mármol de alta pureza.',
        estimatedStayMinutes: 45
      },
      {
        id: 'stop-baker-2',
        order: 2,
        title: 'Confluencia de los Ríos Baker y Neff',
        subtitle: 'El choque titánico de dos gigantes de agua en el corazón de Aysén',
        category: 'nature',
        location: {
          lat: -47.12139,
          lng: -72.78472,
          address: 'Ruta 7 Carretera Austral Km 75, Cochrane / Aysén'
        },
        triggerRadiusMeters: 45,
        narrativeText: 'El Río Baker es el río más caudaloso de Chile, descargando un promedio de 870 metros cúbicos por segundo de aguas azul turquesa. Aquí en la confluencia, se estrella con el Río Neff, que desciende lechoso y grisáceo cargado de sedimentos del Glaciar Neff. El estruendo de la cascada y la violencia con que se mezclan las aguas crean una energía telúrica inolvidable.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 145,
          voiceName: 'Fenrir',
          transcript: 'Siente la brisa helada cargada de rocío que asciende del cañón. La potencia del Baker es el pulso vivo de la Patagonia salvaje...'
        },
        images: [
          {
            id: 'img-baker-neff',
            url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80',
            caption: 'Cascada en la confluencia de los Ríos Baker y Neff en la Carretera Austral',
            isPrimary: true
          }
        ],
        socialLinks: {
          website: 'https://www.conaf.cl'
        },
        documents: [],
        tips: 'Sigue el sendero señalizado de 800 metros entre bosques de lengas y ñirres hasta el mirador de la pasarela.',
        trivia: 'El río Baker nace directamente en el Lago Bertrand y desemboca en el Océano Pacífico cerca de Caleta Tortel.',
        estimatedStayMinutes: 30
      },
      {
        id: 'stop-queulat-3',
        order: 3,
        title: 'Ventisquero Colgante del Parque Nacional Queulat',
        subtitle: 'Una muralla de hielo eterno suspendida a 300 metros de altura',
        category: 'nature',
        location: {
          lat: -44.46667,
          lng: -72.53333,
          address: 'Parque Nacional Queulat, Puyuhuapi, Aysén'
        },
        triggerRadiusMeters: 60,
        narrativeText: 'El Ventisquero Colgante es una de las postales más imponentes del planeta. Una masa de hielo glaciar de miles de años asoma sobre el borde de un farallón rocoso vertical, alimentando dos cascadas monumentales de casi 300 metros de caída libre que desaguan en la Laguna Témpanos en medio de la densa selva patagónica.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 155,
          voiceName: 'Charon',
          transcript: 'Escucha con atención. Cada cierto tiempo, el rugido de un desprendimiento de hielo retumba como un trueno en el valle...'
        },
        images: [
          {
            id: 'img-queulat-1',
            url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=80',
            caption: 'Glaciar colgante con cascada sobre la Laguna Témpanos en Queulat',
            isPrimary: true
          }
        ],
        socialLinks: {
          website: 'https://parquequeulat.cl'
        },
        documents: [],
        tips: 'Lleva capa impermeable para la lluvia; Queulat es una de las zonas con mayor precipitación anual del sur de Chile.',
        trivia: 'El explorador jesuita Nicolás Mascardi avistó por primera vez este ventisquero en el siglo XVII en busca de la mítica Ciudad de los Césares.',
        estimatedStayMinutes: 40
      },
      {
        id: 'stop-tortel-4',
        order: 4,
        title: 'Caleta Tortel: El Pueblo de las Pasarelas de Ciprés',
        subtitle: '7 kilómetros de escaleras de madera aromática sobre el fiordo del río Baker',
        category: 'history',
        location: {
          lat: -47.79444,
          lng: -73.53333,
          address: 'Caleta Tortel, Desembocadura del Río Baker, Aysén'
        },
        triggerRadiusMeters: 40,
        narrativeText: 'Caleta Tortel es un pueblo único en el mundo: no existen calles para automóviles, ni asfalto ni cemento. Toda la circulación se realiza sobre un intrincado laberinto de más de 7 kilómetros de pasarelas, escalinatas y puentes peatonales construidos artesanalmente con madera incorruptible de Ciprés de las Guaitecas.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 150,
          voiceName: 'Zephyr',
          transcript: 'Siente el aroma resinoso y envolvente del ciprés. El crujir rítmico de tus botas sobre los tablones húmedos es la banda sonora de Tortel...'
        },
        images: [
          {
            id: 'img-tortel-1',
            url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80',
            caption: 'Pasarelas de ciprés bajando hacia el Fiordo Steffen en Caleta Tortel',
            isPrimary: true
          }
        ],
        socialLinks: {
          website: 'https://municipalidaddetortel.cl'
        },
        documents: [],
        tips: 'Camina despacio en días lluviosos ya que las maderas húmedas pueden ser resbaladizas; utiliza calzado con suela de buen agarre.',
        trivia: 'El pueblo fue fundado en 1955 para explotar la madera de ciprés, y hasta hace pocas décadas solo se podía acceder por mar o hidroavión.',
        estimatedStayMinutes: 35
      }
    ],
    routePolyline: [
      [-46.65417, -72.63056],
      [-47.12139, -72.78472],
      [-44.46667, -72.53333],
      [-47.79444, -73.53333]
    ]
  },
  {
    id: 'tour-valparaiso-bohemio',
    title: 'Valparaíso Bohemio: Cerros Alegre, Concepción y Ascensores Patrimoniales',
    tagline: 'Un viaje sonoro por pasajes empedrados, murales a cielo abierto y miradores al Pacífico',
    description: 'Descubre la magia de la "Joya del Pacífico", declarada Patrimonio de la Humanidad por la UNESCO. Recorre los coloridos cerros Alegre y Concepción a través de sus centenarios funiculares, escaleras pintadas por artistas urbanos, casonas victorianas de inmigrantes europeos y la vista infinita a la bahía de Valparaíso.',
    coverImage: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80',
    city: 'Valparaíso',
    country: 'Chile',
    category: 'walking',
    language: 'Español',
    durationMinutes: 90,
    distanceKm: 2.6,
    difficulty: 'easy',
    rating: 4.9,
    reviewsCount: 168,
    featured: true,
    published: true,
    createdAt: '2026-01-15T10:00:00Z',
    updatedAt: '2026-02-20T14:30:00Z',
    author: {
      name: 'Rodrigo Astudillo & Tienda El Viaje',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      role: 'Especialista en Patrimonio y Rutas de Chile (CMS 37121)',
      bio: 'Divulgador del patrimonio porteño y cartografía ilustrada de Chile en Tienda El Viaje.',
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
        id: 'doc-mapa-valpo',
        name: 'Mapa Ilustrado y Guía de Cerros de Valparaíso.pdf',
        type: 'pdf',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        size: '4.2 MB',
        description: 'Plano con arquitectura de chapa, ubicación de funiculares y miradores icónicos.'
      },
      {
        id: 'doc-fauna-costa',
        name: 'Guía de Campo: Aves Costeras y Flora Urbana de Chile Central.pdf',
        type: 'guide',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        size: '2.1 MB',
        description: 'Ficha de campo de Tienda El Viaje sobre gaviotas, pelícanos y árboles patrimoniales.'
      }
    ],
    stops: [
      {
        id: 'stop-valpo-1',
        order: 1,
        title: 'Ascensor Reina Victoria y Plaza Aníbal Pinto',
        subtitle: 'El portal mecánico al Cerro Concepción',
        category: 'monument',
        location: {
          lat: -33.04278,
          lng: -71.62472,
          address: 'Elias 126, Cerro Alegre, Valparaíso'
        },
        triggerRadiusMeters: 35,
        narrativeText: 'Bienvenido a la entrada del Ascensor Reina Victoria, inaugurado en 1902 y bautizado en honor a la monarca británica. Este funicular salva una pendiente vertiginosa de casi 40 metros en menos de un minuto. Al subir a sus carros de madera de roble, siente el crujir de los cables de acero que durante más de un siglo han conectado el ajetreado plan de la ciudad con la tranquilidad de las alturas del Cerro Concepción.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 135,
          voiceName: 'Puck',
          transcript: 'Observa la maquinaria expuesta en la estación superior. Los contrapesos de agua originales fueron reemplazados por motores eléctricos a inicios del siglo XX...'
        },
        images: [
          {
            id: 'img-valpo-rv-1',
            url: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1000&q=80',
            caption: 'Estación superior del Ascensor Reina Victoria en Cerro Alegre',
            isPrimary: true
          }
        ],
        youtubeUrl: 'https://www.youtube.com/watch?v=kYvC33P6z5c',
        socialLinks: {
          instagram: 'https://instagram.com/tiendaelviaje',
          website: 'https://www.tiendaelviaje.cl'
        },
        documents: [],
        tips: 'Ten a mano monedas en efectivo para pagar el boleto de ascenso (aprox. $100-$300 CLP).',
        trivia: 'Valparaíso llegó a tener más de 30 ascensores en funcionamiento simultáneo; hoy 16 de ellos son Monumentos Históricos Nacionales.',
        estimatedStayMinutes: 15
      },
      {
        id: 'stop-valpo-2',
        order: 2,
        title: 'Paseo Gervasoni y Casa Mirador Lukas',
        subtitle: 'Balcón colonial con vista a los buques de la bahía',
        category: 'viewpoint',
        location: {
          lat: -33.04167,
          lng: -71.62611,
          address: 'Paseo Gervasoni 448, Cerro Concepción, Valparaíso'
        },
        triggerRadiusMeters: 30,
        narrativeText: 'El Paseo Gervasoni es uno de los paseos peatonales más fotogénicos de la costa chilena. Pavimentado con adoquines traídos como lastre en veleros del siglo XIX, ofrece una panorámica despejada del puerto mercante. En el extremo se encuentra la Casa Mirador Lukas, museo dedicado a Renzo Pecchenino (Lukas), el célebre caricaturista que retrató con maestría el humor, los oficios y el alma de Valparaíso.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 150,
          voiceName: 'Charon',
          transcript: 'Detente junto a la baranda de hierro forjado. Si afinas el oído, escucharás el graznido de las gaviotas y las sirenas de los remolcadores...'
        },
        images: [
          {
            id: 'img-valpo-gerv-1',
            url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
            caption: 'Vista de los barcos y tejados de Valparaíso desde Paseo Gervasoni',
            isPrimary: true
          }
        ],
        socialLinks: {
          website: 'https://www.lukas.cl'
        },
        documents: [],
        tips: 'La luz de la tarde (Golden Hour) ilumina las fachadas de calamina con tonos dorados excepcionales para fotografía.',
        trivia: 'Muchas casonas de este cerro fueron construidas con maderas de pino oregón importadas desde Norteamérica.',
        estimatedStayMinutes: 20
      }
    ],
    routePolyline: [
      [-33.04278, -71.62472],
      [-33.04167, -71.62611]
    ]
  },
  {
    id: 'tour-santiago-patrimonial',
    title: 'Santiago Histórico: Cerro Santa Lucía, Plaza de Armas y La Moneda',
    tagline: 'De la fundación prehispánica y colonial a la arquitectura cívica republicana',
    description: 'Recorre el casco fundacional de la capital de Chile. Desde la roca sagrada del cerro Huelén (Santa Lucía), pasando por la vibrante Plaza de Armas, la Catedral Metropolitana y el Palacio de la Real Audiencia, hasta culminar en el Palacio de La Moneda.',
    coverImage: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80',
    city: 'Santiago',
    country: 'Chile',
    category: 'history',
    language: 'Español',
    durationMinutes: 100,
    distanceKm: 3.2,
    difficulty: 'easy',
    rating: 4.8,
    reviewsCount: 134,
    featured: true,
    published: true,
    createdAt: '2026-01-20T11:00:00Z',
    updatedAt: '2026-02-15T09:15:00Z',
    author: {
      name: 'Equipo Cartografía Tienda El Viaje',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      role: 'Investigadores de Historia y Geografía (CMS 37121)',
      bio: 'Creadores de mapas patrimoniales y guías de viaje por Chile.',
      verified: true
    },
    socialLinks: {
      instagram: 'https://instagram.com/tiendaelviaje',
      website: 'https://www.tiendaelviaje.cl'
    },
    generalDocuments: [
      {
        id: 'doc-plano-stgo-colonial',
        name: 'Plano del Santiago Colonial y Cuadrícula Damero.pdf',
        type: 'pdf',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        size: '3.1 MB',
        description: 'Evolución del trazado urbano ideado por Pedro de Gamboa en 1541.'
      }
    ],
    stops: [
      {
        id: 'stop-stgo-1',
        order: 1,
        title: 'Cerro Santa Lucía (Huelén) y Terraza Neptuno',
        subtitle: 'El hito fundacional de Santiago de la Nueva Extremadura',
        category: 'monument',
        location: {
          lat: -33.44111,
          lng: -70.64389,
          address: 'Av. Libertador Bernardo O\'Higgins 499, Santiago'
        },
        triggerRadiusMeters: 40,
        narrativeText: 'Conocido como cerro Huelén ("dolor" o "melancolía" en mapudungun), fue aquí donde el conquistador Pedro de Valdivia fundó la ciudad de Santiago el 12 de febrero de 1541. Durante el siglo XIX, el intendente Benjamín Vicuña Mackenna transformó este peñón rocoso en un parque neoclásico con fuentes ornamentales, castillos almenados y miradores a la Cordillera de los Andes.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 160,
          voiceName: 'Puck',
          transcript: 'Nos encontramos en la imponente entrada de la Terraza Neptuno en el Cerro Santa Lucía...'
        },
        images: [
          {
            id: 'img-stgo-sl-1',
            url: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1000&q=80',
            caption: 'Fuente monumental de la Terraza Neptuno en el Cerro Santa Lucía',
            isPrimary: true
          }
        ],
        youtubeUrl: 'https://www.youtube.com/watch?v=JmU74k6wL_k',
        socialLinks: {
          website: 'https://www.santiagoturismo.cl'
        },
        documents: [],
        tips: 'Sube hasta la Torre Mirador del Castillo Hidalgo al mediodía para escuchar el cañonazo de las 12:00 hrs.',
        trivia: 'Bajo el cerro descansan los restos de Benjamín Vicuña Mackenna en la capilla que él mismo mandó edificar.',
        estimatedStayMinutes: 30
      }
    ],
    routePolyline: [
      [-33.44111, -70.64389]
    ]
  },
  {
    id: 'tour-san-pedro-atacama',
    title: 'San Pedro de Atacama: Valle de la Luna y la Cordillera de la Sal',
    tagline: 'Geología cósmica, dunas milenarias y arqueología en el desierto más árido del mundo',
    description: 'Adéntrate en el místico desierto de Atacama. Visita el pueblo colonial de adobe de San Pedro, la Iglesia de San Pedro con vigas de cactus cardón, las formaciones de sal de Las Tres Marías y la mítica Duna Mayor del Valle de la Luna mientras el atardecer tiñe de púrpura la Cordillera de los Andes y el volcán Licancabur.',
    coverImage: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    city: 'San Pedro de Atacama',
    country: 'Chile',
    category: 'nature',
    language: 'Español',
    durationMinutes: 120,
    distanceKm: 14.5,
    difficulty: 'moderate',
    rating: 5.0,
    reviewsCount: 220,
    featured: true,
    published: true,
    createdAt: '2026-01-10T08:00:00Z',
    updatedAt: '2026-02-18T16:45:00Z',
    author: {
      name: 'Guías del Altiplano & Tienda El Viaje',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      role: 'Guías Especializados en Desierto y Astronomía (CMS 37121)',
      bio: 'Divulgadores de la naturaleza, geología y saberes ancestrales atacameños.',
      verified: true
    },
    socialLinks: {
      instagram: 'https://instagram.com/tiendaelviaje',
      website: 'https://www.tiendaelviaje.cl'
    },
    generalDocuments: [
      {
        id: 'doc-guia-geologia-atacama',
        name: 'Guía Geológica del Desierto de Atacama y Cordillera de la Sal.pdf',
        type: 'guide',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        size: '5.8 MB',
        description: 'Explicación de minerales, evaporitas, estratigrafía y fauna del altiplano chileno.'
      }
    ],
    stops: [
      {
        id: 'stop-spa-1',
        order: 1,
        title: 'Pueblo de San Pedro e Iglesia de San Pedro',
        subtitle: 'Arquitectura de adobe, algarrobo y madera de cactus',
        category: 'church',
        location: {
          lat: -22.91111,
          lng: -68.20028,
          address: 'Plaza de San Pedro de Atacama, Antofagasta'
        },
        triggerRadiusMeters: 30,
        narrativeText: 'San Pedro de Atacama es el oasis más célebre del desierto chileno. En su plaza principal se encuentra la Iglesia de San Pedro, Monumento Histórico Nacional levantado en el siglo XVII. Observa sus muros de adobe encalado de más de un metro de espesor, su techumbre amarrada con cuero de llama y vigas de madera de cardón (cactus chañar) que han resistido siglos de sequedad extrema.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 140,
          voiceName: 'Zephyr',
          transcript: 'Respira el aire seco del desierto de Atacama. Estás a 2.400 metros de altitud sobre el nivel del mar...'
        },
        images: [
          {
            id: 'img-spa-iglesia',
            url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1000&q=80',
            caption: 'Muros blancos de adobe y campanil de la Iglesia de San Pedro',
            isPrimary: true
          }
        ],
        youtubeUrl: 'https://www.youtube.com/watch?v=0k2ZzkwbF8E',
        socialLinks: {
          website: 'https://www.sanpedrodeatacama.org'
        },
        documents: [],
        tips: 'Mantente muy bien hidratado y utiliza sombrero y bloqueador solar en todo momento.',
        trivia: 'El pueblo fue un enclave estratégico de las caravanas que comerciaban entre el altiplano boliviano y la costa del Pacífico.',
        estimatedStayMinutes: 20
      }
    ],
    routePolyline: [
      [-22.91111, -68.20028]
    ]
  },
  {
    id: 'tour-torres-del-paine',
    title: 'Torres del Paine: Sendero de los Glaciares y Lagos Patagónicos',
    tagline: 'Naturaleza salvaje, témpanos azul turquesa y las agujas de granito de la Patagonia Austral',
    description: 'Explora la Octava Maravilla del Mundo en la Región de Magallanes. Una ruta sonora por el Parque Nacional Torres del Paine bordeando el Lago Pehoé, el estruendoso Salto Grande con vista a los Cuernos del Paine y los desprendimientos milenarios del Glaciar Grey.',
    coverImage: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1200&q=80',
    city: 'Torres del Paine',
    country: 'Chile',
    category: 'nature',
    language: 'Español',
    durationMinutes: 150,
    distanceKm: 8.0,
    difficulty: 'moderate',
    rating: 5.0,
    reviewsCount: 340,
    featured: true,
    published: true,
    createdAt: '2026-01-05T07:00:00Z',
    updatedAt: '2026-02-22T12:00:00Z',
    author: {
      name: 'Expedición Tienda El Viaje Patagonia',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      role: 'Guías de Montaña & Guardaparques (CMS 37121)',
      bio: 'Apasionados por la preservación de los Campos de Hielo Sur y la fauna patagónica.',
      verified: true
    },
    socialLinks: {
      instagram: 'https://instagram.com/tiendaelviaje',
      website: 'https://www.tiendaelviaje.cl'
    },
    generalDocuments: [
      {
        id: 'doc-mapa-paine',
        name: 'Mapa Topográfico y Guía de Senderos Torres del Paine.pdf',
        type: 'pdf',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        size: '6.4 MB',
        description: 'Mapas de circuitos W y O, tiempos de marcha, refugios y normas CONAF.'
      }
    ],
    stops: [
      {
        id: 'stop-paine-1',
        order: 1,
        title: 'Mirador Cuernos del Paine y Cascada Salto Grande',
        subtitle: 'El encuentro de las aguas glaciares entre los lagos Nordenskjöld y Pehoé',
        category: 'nature',
        location: {
          lat: -51.10000,
          lng: -73.00000,
          address: 'Sector Pehoé, Parque Nacional Torres del Paine, Magallanes'
        },
        triggerRadiusMeters: 50,
        narrativeText: 'El Salto Grande es una impetuosa caída de agua de más de 10 metros que canaliza el desagüe del lago Nordenskjöld hacia el lago Pehoé. Al fondo se alzan majestuosos los Cuernos del Paine, con sus distintivos estratos geológicos bicolores.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 150,
          voiceName: 'Fenrir',
          transcript: 'Siente la fuerza incontenible del viento patagónico y el estruendo del agua cayendo con furia...'
        },
        images: [
          {
            id: 'img-paine-1',
            url: 'https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1000&q=80',
            caption: 'Los imponentes Cuernos del Paine sobre el Lago Pehoé',
            isPrimary: true
          }
        ],
        youtubeUrl: 'https://www.youtube.com/watch?v=5rT8ZkYm1V4',
        socialLinks: {
          website: 'https://parquetorresdelpaine.cl'
        },
        documents: [],
        tips: 'Lleva ropa técnica por capas (cortaviento indispensable).',
        trivia: 'El macizo del Paine tiene apenas 12 millones de años de antigüedad.',
        estimatedStayMinutes: 35
      }
    ],
    routePolyline: [
      [-51.10000, -73.00000]
    ]
  },
  {
    id: 'tour-valle-colchagua',
    title: 'Ruta del Vino & Tradición Campesina del Valle de Colchagua',
    tagline: 'Parrones centenarios, pueblos típicos de adobe y la cuna del Carménère chileno',
    description: 'Recorre el corazón vitivinícola y cultural de Chile Central. Descubre la arquitectura colonial de Santa Cruz, el Pueblo Típico de Lolol con sus corredores de tejas de arcilla, las viñas de renombre internacional y las tradiciones del huaso chileno.',
    coverImage: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=80',
    city: 'Santa Cruz',
    country: 'Chile',
    category: 'food',
    language: 'Español',
    durationMinutes: 110,
    distanceKm: 22.0,
    difficulty: 'easy',
    rating: 4.9,
    reviewsCount: 95,
    featured: true,
    published: true,
    createdAt: '2026-01-25T09:00:00Z',
    updatedAt: '2026-02-24T10:00:00Z',
    author: {
      name: 'Tienda El Viaje • Rutas del Vino',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      role: 'Sommeliers e Investigadores del Patrimonio Agrícola (CMS 37121)',
      bio: 'Especialistas en enoturismo, paisajes rurales y cultura campesina chilena.',
      verified: true
    },
    socialLinks: {
      instagram: 'https://instagram.com/tiendaelviaje',
      website: 'https://www.tiendaelviaje.cl'
    },
    generalDocuments: [
      {
        id: 'doc-guia-colchagua',
        name: 'Guía de Enoturismo y Terroirs del Valle de Colchagua.pdf',
        type: 'guide',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        size: '3.8 MB',
        description: 'Mapa de bodegas, cepas patrimoniales (País, Carménère, Syrah) y gastronomía criolla.'
      }
    ],
    stops: [
      {
        id: 'stop-colchagua-1',
        order: 1,
        title: 'Plaza de Armas de Santa Cruz y Museo de Colchagua',
        subtitle: 'El epicentro de la historia y el coleccionismo patrimonial',
        category: 'museum',
        location: {
          lat: -34.63917,
          lng: -71.36472,
          address: 'Plaza de Armas, Santa Cruz, Región de O\'Higgins'
        },
        triggerRadiusMeters: 40,
        narrativeText: 'Santa Cruz es la capital enoturística de Chile. En torno a su arbolada Plaza de Armas se encuentra el afamado Museo de Colchagua, una de las mayores colecciones privadas de América del Sur que resguarda fósiles de ámbar, paleontología, piezas de la cultura Diaguita e Inca, y la historia minera e independentista de Chile.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 155,
          voiceName: 'Kore',
          transcript: 'Camina bajo la sombra de las palmeras chilenas de la plaza. El aire tiene un sutil aroma a mosto fermentado y tierra regada...'
        },
        images: [
          {
            id: 'img-colchagua-1',
            url: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1000&q=80',
            caption: 'Viñedos de Carménère en los lomajes de Colchagua',
            isPrimary: true
          }
        ],
        socialLinks: {
          website: 'https://rutadelvino.cl'
        },
        documents: [],
        tips: 'Degusta una copa de Carménère reserva maridada con empanadas de pino en los restaurantes locales.',
        trivia: 'La cepa Carménère, originaria de Burdeos y extinguida por la filoxera en Europa en el siglo XIX, fue redescubierta intacta en Chile en 1994.',
        estimatedStayMinutes: 30
      },
      {
        id: 'stop-colchagua-2',
        order: 2,
        title: 'Pueblo Típico de Lolol y Casa de la Cultura',
        subtitle: 'Arquitectura colonial de adobe y corredores campesinos',
        category: 'monument',
        location: {
          lat: -34.72694,
          lng: -71.64444,
          address: 'Centro Histórico de Lolol, O\'Higgins'
        },
        triggerRadiusMeters: 35,
        narrativeText: 'Declarado Zona Típica por el Consejo de Monumentos Nacionales, Lolol conserva intacto el trazado de un pueblo colonial chileno. Sus calles con acequias de regadío, largas fachadas continuas de adobe y amplios corredores exteriores protegían a los transeúntes del sol de verano y las lluvias de invierno.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 140,
          voiceName: 'Charon',
          transcript: 'Toca las paredes de adobe de más de doscientos años de antigüedad. Mezcla de barro, paja y agua...'
        },
        images: [
          {
            id: 'img-colchagua-lolol',
            url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80',
            caption: 'Corredor techado con tejas coloniales en Lolol',
            isPrimary: true
          }
        ],
        socialLinks: {},
        documents: [],
        tips: 'Visita los talleres de artesanos en cestería de mimbre y cantería en piedra.',
        trivia: 'El nombre Lolol proviene del mapudungun "lolo", que significa tierra de zanjas o cangrejeras.',
        estimatedStayMinutes: 25
      }
    ],
    routePolyline: [
      [-34.63917, -71.36472],
      [-34.72694, -71.64444]
    ]
  },
  {
    id: 'tour-alerce-costero',
    title: 'Alerces Milenarios y Selva Valdiviana: El Sendero del Alerce Abuelo',
    tagline: 'Bosques templados lluviosos, helechos gigantes y árboles de 3.500 años de vida',
    description: 'Sumérgete en la asombrosa biodiversidad del Parque Nacional Alerce Costero en la Región de Los Ríos. Conoce al Gran Abuelo Alerce (Fitzroya cupressoides), uno de los seres vivos más antiguos del planeta Tierra, y siente la atmósfera mística de la lluvia entre canelos, arrayanes y líquenes barbudos.',
    coverImage: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    city: 'La Unión / Valdivia',
    country: 'Chile',
    category: 'nature',
    language: 'Español',
    durationMinutes: 130,
    distanceKm: 5.5,
    difficulty: 'moderate',
    rating: 5.0,
    reviewsCount: 180,
    featured: true,
    published: true,
    createdAt: '2026-01-28T08:30:00Z',
    updatedAt: '2026-02-25T11:20:00Z',
    author: {
      name: 'Guardaparques & Tienda El Viaje',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      role: 'Conservacionistas de Bosque Nativo (CMS 37121)',
      bio: 'Divulgadores de la flora endémica y humedales de la Selva Valdiviana.',
      verified: true
    },
    socialLinks: {
      instagram: 'https://instagram.com/tiendaelviaje',
      website: 'https://www.tiendaelviaje.cl'
    },
    generalDocuments: [
      {
        id: 'doc-flora-selva-valdiviana',
        name: 'Guía Botánica: Especies Endémicas de la Selva Valdiviana.pdf',
        type: 'guide',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        size: '4.7 MB',
        description: 'Ficha de identificación de Alerce, Coigüe, Mañío, Chucao y Monito del Monte.'
      }
    ],
    stops: [
      {
        id: 'stop-alerce-1',
        order: 1,
        title: 'El Gran Abuelo: Alerce Milenario de 3.500 años',
        subtitle: 'Testigo vivo de la historia de la humanidad',
        category: 'nature',
        location: {
          lat: -40.16667,
          lng: -73.58333,
          address: 'Parque Nacional Alerce Costero, Corral / La Unión'
        },
        triggerRadiusMeters: 45,
        narrativeText: 'Ante tus ojos se alza el Alerce Milenario o "Gran Abuelo", cuyo tronco supera los 4 metros de diámetro. Estudios dendrocronológicos sugieren que germinó hace más de 3.500 años, antes de la construcción de las pirámides de Egipto. Su madera rojiza es impermeable y resistente a la pudrición, razón por la cual los antiguos colonos e indígenas la utilizaban como moneda de cambio.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 170,
          voiceName: 'Puck',
          transcript: 'Guarda silencio unos segundos. Escucha el canto inconfundible del Chucao entre los matorrales de quila...'
        },
        images: [
          {
            id: 'img-alerce-abuelo',
            url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80',
            caption: 'Tronco monumental del Alerce Abuelo en el bosque húmedo',
            isPrimary: true
          }
        ],
        socialLinks: {
          website: 'https://conaf.cl'
        },
        documents: [],
        tips: 'Camina exclusivamente por las pasarelas de madera elevadas para no compactar las raíces superficiales del árbol.',
        trivia: 'El alerce crece a un ritmo extremadamente lento: tan solo 1 milímetro de diámetro por año.',
        estimatedStayMinutes: 40
      }
    ],
    routePolyline: [
      [-40.16667, -73.58333]
    ]
  },
  {
    id: 'tour-chiloe-magico',
    title: 'Chiloé Mágico: Arquitectura en Madera UNESCO, Palafitos y Mitos',
    tagline: 'Tejuelas de alerce, iglesias sin clavos de metal y la cosmovisión del archipiélago',
    description: 'Descubre la magia única del Archipiélago de Chiloé. Desde las icónicas casas sobre pilotes en el Fiordo Gamboa de Castro, hasta las centenarias Iglesias de Madera Patrimonio de la Humanidad en Dalcahue y Achao, pasando por la leyenda del Caleuche y el Trauco.',
    coverImage: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
    city: 'Castro / Chiloé',
    country: 'Chile',
    category: 'history',
    language: 'Español',
    durationMinutes: 140,
    distanceKm: 18.0,
    difficulty: 'easy',
    rating: 4.9,
    reviewsCount: 210,
    featured: true,
    published: true,
    createdAt: '2026-02-01T10:00:00Z',
    updatedAt: '2026-02-26T14:10:00Z',
    author: {
      name: 'Culturas del Sur & Tienda El Viaje',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      role: 'Investigadores de Tradición Chilota (CMS 37121)',
      bio: 'Promotores de la carpintería de ribera y la mitología de Chiloé.',
      verified: true
    },
    socialLinks: {
      instagram: 'https://instagram.com/tiendaelviaje',
      website: 'https://www.tiendaelviaje.cl'
    },
    generalDocuments: [
      {
        id: 'doc-mapa-iglesias-chiloe',
        name: 'Guía Arquitectónica: Las 16 Iglesias de Madera UNESCO de Chiloé.pdf',
        type: 'guide',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        size: '5.2 MB',
        description: 'Tipologías de ensambles en madera, tejuelas cortadas a mano y estilos jesuítico-franciscanos.'
      }
    ],
    stops: [
      {
        id: 'stop-chiloe-1',
        order: 1,
        title: 'Palafitos de Gamboa y el Borde Costero de Castro',
        subtitle: 'Vida sobre el agua al compás de las mareas del Pacífico',
        category: 'monument',
        location: {
          lat: -42.48278,
          lng: -73.76694,
          address: 'Calle Ernesto Riquelme, Castro, Isla Grande de Chiloé'
        },
        triggerRadiusMeters: 40,
        narrativeText: 'Los palafitos de Castro son la estampa más célebre de Chiloé. Construidos sobre pilotes de maderas duras de luma y ciprés de las Guaitecas anclados al fondo marino, permiten a los habitantes pescar directamente desde sus balcones durante la marea alta y acceder a pie durante la bajamar.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 145,
          voiceName: 'Zephyr',
          transcript: 'Observa la oscilación de la marea. En Chiloé, la diferencia entre marea alta y baja puede superar los 6 metros...'
        },
        images: [
          {
            id: 'img-chiloe-palafitos',
            url: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1000&q=80',
            caption: 'Coloridos palafitos sobre el Fiordo de Castro reflejados en el agua',
            isPrimary: true
          }
        ],
        socialLinks: {
          website: 'https://castromunicipio.cl'
        },
        documents: [],
        tips: 'Prueba la gastronomía tradicional en los cafés y bistrós ubicados dentro de los propios palafitos.',
        trivia: 'Las tejuelas de alerce en las fachadas tienen diseños decorativos variados: punta de flecha, cola de castor y media luna.',
        estimatedStayMinutes: 30
      }
    ],
    routePolyline: [
      [-42.48278, -73.76694]
    ]
  },
  {
    id: 'tour-lota-carbon',
    title: 'Lota y la Epopeya del Carbón: Chiflón del Diablo y Parque Cousiño',
    tagline: 'Memoria obrera, galerías submarinas y el esplendor del siglo XIX en el Golfo de Arauco',
    description: 'Conoce la historia que forjó la Revolución Industrial en Chile. Desciende a las entrañas del Chiflón del Diablo guiado por ex mineros del carbón y recorre el romántico Parque Isidora Cousiño con sus esculturas francesas y árboles traídos de los cinco continentes.',
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80',
    city: 'Lota / Concepción',
    country: 'Chile',
    category: 'history',
    language: 'Español',
    durationMinutes: 120,
    distanceKm: 4.2,
    difficulty: 'moderate',
    rating: 4.9,
    reviewsCount: 112,
    featured: true,
    published: true,
    createdAt: '2026-02-05T11:00:00Z',
    updatedAt: '2026-02-27T15:30:00Z',
    author: {
      name: 'Memoria del Carbón & Tienda El Viaje',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      role: 'Historiadores y Guías de Lota (CMS 37121)',
      bio: 'Preservadores del patrimonio industrial y la novela Sub Terra de Baldomero Lillo.',
      verified: true
    },
    socialLinks: {
      instagram: 'https://instagram.com/tiendaelviaje',
      website: 'https://www.tiendaelviaje.cl'
    },
    generalDocuments: [
      {
        id: 'doc-historia-lota',
        name: 'Guía del Patrimonio Industrial: El Circuito del Carbón de Lota.pdf',
        type: 'guide',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        size: '3.9 MB',
        description: 'Historia del pique minero, la familia Cousiño Goyenechea y la arquitectura de pabellones.'
      }
    ],
    stops: [
      {
        id: 'stop-lota-1',
        order: 1,
        title: 'Mina Chiflón del Diablo: Descenso a las Galerías Submarinas',
        subtitle: 'La única mina de carbón submarina del mundo abierta al turismo',
        category: 'monument',
        location: {
          lat: -37.09167,
          lng: -73.16111,
          address: 'Sector El Silencio, Lota, Región del Biobío'
        },
        triggerRadiusMeters: 35,
        narrativeText: 'Colócate la lámpara minera y el casco de seguridad. Te encuentras a punto de descender en una jaula mecánica a más de 50 metros bajo tierra y avanzar por túneles que se internan por debajo del fondo del Océano Pacífico. Esta mina operó durante más de un siglo y fue inmortalizada por el escritor Baldomero Lillo en su célebre libro "Sub Terra".',
        audio: {
          type: 'ai_generated',
          durationSeconds: 165,
          voiceName: 'Fenrir',
          transcript: 'Siente el aire húmedo y el eco de los pasos en la galería de carbón. Los guías que te acompañan son auténticos mineros...'
        },
        images: [
          {
            id: 'img-lota-mina',
            url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
            caption: 'Túneles de piedra y vigas de eucalipto en el Chiflón del Diablo',
            isPrimary: true
          }
        ],
        socialLinks: {
          website: 'https://lotasorprendente.cl'
        },
        documents: [],
        tips: 'Usa calzado cómodo y cerrado con buena adherencia para caminar por las galerías húmedas.',
        trivia: 'El Chiflón del Diablo no sufrió derrumbes catastróficos debido a la excelente calidad de la roca y la ingeniería de soporte en madera.',
        estimatedStayMinutes: 45
      }
    ],
    routePolyline: [
      [-37.09167, -73.16111]
    ]
  },
  {
    id: 'tour-valle-elqui',
    title: 'Cielo Limpio de Gabriela Mistral & Valle del Elqui: Astronomía y Poesía',
    tagline: 'El cielo más transparente del hemisferio sur, huertos de papayas y destilerías artesanales',
    description: 'Recorre el místico Valle del Elqui en la Región de Coquimbo. Sigue la huella de la Premio Nobel Gabriela Mistral en Montegrande y Vicuña, visita destilerías pisqueras centenarias y contempla las constelaciones desde los observatorios astronómicos turísticos.',
    coverImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
    city: 'Vicuña / Valle del Elqui',
    country: 'Chile',
    category: 'history',
    language: 'Español',
    durationMinutes: 115,
    distanceKm: 25.0,
    difficulty: 'easy',
    rating: 5.0,
    reviewsCount: 142,
    featured: true,
    published: true,
    createdAt: '2026-02-10T12:00:00Z',
    updatedAt: '2026-02-28T09:00:00Z',
    author: {
      name: 'Astro-Turismo & Tienda El Viaje',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      role: 'Divulgadores Astronómicos y Literarios (CMS 37121)',
      bio: 'Guías de los cielos oscuros protegidos y la poesía mistraliana.',
      verified: true
    },
    socialLinks: {
      instagram: 'https://instagram.com/tiendaelviaje',
      website: 'https://www.tiendaelviaje.cl'
    },
    generalDocuments: [
      {
        id: 'doc-guia-cielos-elqui',
        name: 'Guía de Astroturismo y Mapa Estelar del Valle del Elqui.pdf',
        type: 'guide',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        size: '4.5 MB',
        description: 'Carta celeste de constelaciones australes, nebulosas y observatorios científicos y turísticos.'
      }
    ],
    stops: [
      {
        id: 'stop-elqui-1',
        order: 1,
        title: 'Mausoleo y Casa Escuela de Gabriela Mistral en Montegrande',
        subtitle: 'La tierra natal que inspiró "Desolación" y "Tala"',
        category: 'monument',
        location: {
          lat: -30.04694,
          lng: -70.49611,
          address: 'Ruta D-485, Montegrande, Paihuano, Región de Coquimbo'
        },
        triggerRadiusMeters: 35,
        narrativeText: 'En el pequeño pueblo de Montegrande, resguardado por cerros áridos y viñedos de uva moscatel, creció Lucila Godoy Alcayaga, Gabriela Mistral. En la colina frente al pueblo descansa su tumba según su propia voluntad testamentaria: "Es mi deseo que mi cuerpo sea enterrado en mi amado pueblo de Montegrande del Valle de Elqui".',
        audio: {
          type: 'ai_generated',
          durationSeconds: 150,
          voiceName: 'Kore',
          transcript: 'Mira los cerros que enmarcan el valle. Gabriela escribió: "Pégate a la tierra, que te dé la fuerza..."'
        },
        images: [
          {
            id: 'img-elqui-montegrande',
            url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
            caption: 'Valle del Elqui con parrones y cerros bajo un cielo azul profundo',
            isPrimary: true
          }
        ],
        socialLinks: {
          website: 'https://www.gabrielamistral.uchile.cl'
        },
        documents: [],
        tips: 'Planifica una sesión nocturna de observación telescópica en el Observatorio Mamalluca en Vicuña.',
        trivia: 'El Valle del Elqui ostenta más de 300 noches despejadas al año, siendo declarado el primer Santuario Internacional de Cielos Oscuros.',
        estimatedStayMinutes: 30
      }
    ],
    routePolyline: [
      [-30.04694, -70.49611]
    ]
  }
];

export const sampleTours = INITIAL_TOURS;
