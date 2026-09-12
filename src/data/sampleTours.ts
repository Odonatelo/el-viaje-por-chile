import { Tour } from '../types';

export const INITIAL_TOURS: Tour[] = [
  {
    id: 'tour-patagonia-carrerabaker',
    title: 'Travesía Carretera Austral & Capillas de Mármol: La Joya de Aysén',
    tagline: 'Audioguía Oficial El Viaje Por Chile • Cavernas esculpidas en el Lago General Carrera y la fuerza de la Patagonia',
    description: 'Audioguía producida por El Viaje Por Chile (www.elviaje.cl). Explora los parajes más sobrecogedores de la Carretera Austral: desde las translúcidas aguas turquesa del Lago General Carrera que esculpen las Catedrales y Capillas de Mármol, pasando por la confluencia de los Ríos Baker y Neff, hasta las pasarelas de ciprés de Caleta Tortel y el imponente Ventisquero Colgante Queulat.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Capillas_de_M%C3%A1rmol_afuera.JPG',
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
            url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Capillas_de_M%C3%A1rmol_adentro.JPG',
            caption: 'Interior de la Caverna de Mármol con las vetas blancas, celestes y rosas del carbonato de calcio',
            isPrimary: true
          },
          {
            id: 'img-marmol-2',
            url: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Capillas_de_M%C3%A1rmol_cueva.JPG',
            caption: 'Las bóvedas y el agua turquesa del Lago General Carrera al interior de las capillas',
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
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/R%C3%ADo_Baker%2C_sector_Balsa_Baker.jpg/1280px-R%C3%ADo_Baker%2C_sector_Balsa_Baker.jpg',
            caption: 'El Río Baker turquesa en el sector Balsa Baker, junto a la confluencia con el Neff',
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
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Ventisquero_Colgante_Parque_Nacional_Queulat.jpg/1280px-Ventisquero_Colgante_Parque_Nacional_Queulat.jpg',
            caption: 'El Ventisquero Colgante sobre la Laguna Témpanos en el Parque Nacional Queulat',
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
            url: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Pasarelas_de_Caleta_Tortel.jpg',
            caption: 'Pasarelas de ciprés de las Guaitecas bajando hacia la desembocadura del Baker en Caleta Tortel',
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
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Vista_panor%C3%A1mica_de_Valpara%C3%ADso_1.jpg/1280px-Vista_panor%C3%A1mica_de_Valpara%C3%ADso_1.jpg',
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
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Ascensor_Reina_Victoria2.JPG/1280px-Ascensor_Reina_Victoria2.JPG',
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
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Paseo_gervasoni_-_Valpara%C3%ADso.jpg/1280px-Paseo_gervasoni_-_Valpara%C3%ADso.jpg',
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
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Fuente_Neptuno_en_la_Terraza_del_Cerro_Santa_Luc%C3%ADa_II.jpg/1280px-Fuente_Neptuno_en_la_Terraza_del_Cerro_Santa_Luc%C3%ADa_II.jpg',
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
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Vista_de_Santiago_desde_el_cerro_Santa_Luc%C3%ADa.jpg/1280px-Vista_de_Santiago_desde_el_cerro_Santa_Luc%C3%ADa.jpg',
            caption: 'Vista panorámica de la ciudad desde la Terraza del Cerro Santa Lucía',
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
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Anfiteatro%2C_Valle_de_la_Luna%2C_San_Pedro_de_Atacama%2C_Chile%2C_2016-02-01%2C_DD_149.JPG/1280px-Anfiteatro%2C_Valle_de_la_Luna%2C_San_Pedro_de_Atacama%2C_Chile%2C_2016-02-01%2C_DD_149.JPG',
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
            url: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Iglesia_de_San_Pedro_de_Atacama_01.JPG',
            caption: 'Muros blancos de adobe y campanil de la Iglesia de San Pedro de Atacama',
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
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Cuernos_del_Paine%2C_Parque_Nacional_Torres_del_Paine%2C_Chile1.jpg/1280px-Cuernos_del_Paine%2C_Parque_Nacional_Torres_del_Paine%2C_Chile1.jpg',
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
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Torres_del_Paine%2C_Salto_Grande_1.jpg/1280px-Torres_del_Paine%2C_Salto_Grande_1.jpg',
            caption: 'La Cascada Salto Grande entre los lagos Nordenskjöld y Pehoé',
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
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Vi%C3%B1a_Montes_%2820348984418%29.jpg/1280px-Vi%C3%B1a_Montes_%2820348984418%29.jpg',
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
            url: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Museo_Colchagua_Santa_Cruz_2.jpg',
            caption: 'Museo de Colchagua junto a la Plaza de Armas de Santa Cruz',
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
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Centro_hist%C3%B3rico_de_Lolol_06.jpg/1280px-Centro_hist%C3%B3rico_de_Lolol_06.jpg',
            caption: 'Centro histórico de Lolol, Zona Típica con corredores de tejas de arcilla',
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
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Sendero_Alerces_Milenarios.jpg/1280px-Sendero_Alerces_Milenarios.jpg',
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
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/%22El_Gran_Abuelo%22._Alerce_Milenario_de_3.500_a%C3%B1os_aprox.jpg/1280px-%22El_Gran_Abuelo%22._Alerce_Milenario_de_3.500_a%C3%B1os_aprox.jpg',
            caption: 'El tronco monumental del Alerce Milenario de 3.500 años en el sendero del Gran Abuelo',
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
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Palafitos_de_Castro%2C_Chilo%C3%A9.jpg/1280px-Palafitos_de_Castro%2C_Chilo%C3%A9.jpg',
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
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Palafitos_De_Castro_%2872870335%29.jpeg/1280px-Palafitos_De_Castro_%2872870335%29.jpeg',
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
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Cauria%2C_Pique_Carlos_Cousi%C3%B1o%2C_Lota%2C_Octava_Regi%C3%B3n%2C_Chile.jpg/1280px-Cauria%2C_Pique_Carlos_Cousi%C3%B1o%2C_Lota%2C_Octava_Regi%C3%B3n%2C_Chile.jpg',
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
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Mina_Chifl%C3%B3n_del_Diablo%2C_veta_carb%C3%B3n.JPG/1280px-Mina_Chifl%C3%B3n_del_Diablo%2C_veta_carb%C3%B3n.JPG',
            caption: 'Veta de carbón expuesta en las galerías del Chiflón del Diablo',
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
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Monumento_a_Gabriela_Mistral%2C_Monte_Grande%2C_Valle_del_Elqui.jpg/1280px-Monumento_a_Gabriela_Mistral%2C_Monte_Grande%2C_Valle_del_Elqui.jpg',
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
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Casa_Escuela_Gabriela_Mistral.jpg/1280px-Casa_Escuela_Gabriela_Mistral.jpg',
            caption: 'La Casa Escuela de Gabriela Mistral en Montegrande, Valle del Elqui',
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
  },
  {
    id: 'tour-santiago-cerro-chena',
    title: 'Cerro Chena: Pucará de Chena, Huaca Inca y Parque Metropolitano Sur',
    tagline: 'La montaña sagrada de San Bernardo y la puerta del proyecto Cerros Isla',
    description: 'Audioguía de interpretación sobre el macizo de Cerros de Chena, en las comunas de San Bernardo y Calera de Tango (Región Metropolitana, 952 msnm). Recorre la huaca o pucará inca de la punta Catemito, el observatorio astronómico del solsticio de invierno, la vocación agrícola decimonónica de sus laderas y el naciente Parque Metropolitano Sur Cerros de Chena, el gran parque público de la zona sur de Santiago, con sus nuevas lagunas de 10.600 m². Esta ruta se inspira en la investigación y los proyectos de la Fundación Cerros Isla (www.fundacioncerrosisla.cl).',
    coverImage: 'https://static.wixstatic.com/media/8e4003_7577c81c5d2c48be856c83529ec1c4bc~mv2_d_5616_3744_s_4_2.jpg/v1/fill/w_1200,h_750,al_c,q_80/chena-cover.jpg',
    city: 'San Bernardo / Calera de Tango',
    country: 'Chile',
    category: 'history',
    language: 'Español',
    durationMinutes: 130,
    distanceKm: 8.5,
    difficulty: 'moderate',
    rating: 4.8,
    reviewsCount: 116,
    featured: true,
    published: true,
    createdAt: '2026-03-05T10:00:00Z',
    updatedAt: '2026-04-30T17:00:00Z',
    author: {
      name: 'Fundación Cerros Isla & Equipo Cartografía El Viaje',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      role: 'Interpretación del Patrimonio Natural y Arqueológico de los Cerros Isla de Santiago',
      bio: 'Investigación y proyectos para la conservación de los 26 cerros isla de Santiago. www.fundacioncerrosisla.cl y www.elviaje.cl.',
      verified: true
    },
    socialLinks: {
      website: 'https://www.fundacioncerrosisla.cl/chena',
      instagram: 'https://www.instagram.com/cerrosisla/',
      youtube: 'https://www.youtube.com/@fundacioncerrosisla'
    },
    generalDocuments: [
      {
        id: 'doc-ficha-chena',
        name: 'Ficha técnica Cerros de Chena (PRMS 8.3.1.3 · Área de Rehabilitación Ecológica).pdf',
        type: 'guide',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        size: '2.9 MB',
        description: 'Altitud 952 msnm, superficie 1.390 ha, cobertura arbórea 30-40% y normativa PRC San Bernardo y Calera de Tango.'
      },
      {
        id: 'doc-huaca-chena',
        name: 'Estudio: La huaca del cerro Chena, arquitectura sagrada del pueblo inca (Bustamante, 1996).pdf',
        type: 'archive',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        size: '4.7 MB',
        description: 'El sitio inca de Chena: semblanza de un puma hermafrodita sagrado y su orientación astronómica hacia los solsticios, según Rubén Stehberg.'
      }
    ],
    stops: [
      {
        id: 'stop-chena-1',
        order: 1,
        title: 'Acceso Parque Metropolitano Sur Cerro Chena',
        subtitle: 'El nuevo parque público de la zona sur, inaugurado para el Bicentenario',
        category: 'nature',
        location: {
          lat: -33.596,
          lng: -70.7365,
          address: 'Acceso Parque Metropolitano Sur Cerro Chena, Camino a Catemito, San Bernardo'
        },
        triggerRadiusMeters: 60,
        narrativeText: 'Estás en la entrada del Parque Metropolitano Sur Cerros de Chena. En el año 2002, 38 hectáreas de la propiedad del Ejército fueron donadas al entonces Parque Metropolitano de Santiago, y el 2010, para el Bicentenario de la República, se inauguró este parque público. Tras el concurso Cerros Isla de 2014 —que premió a Chena con el primer lugar— la inversión superó los 40 mil millones de pesos: hoy vemos sus lagunas de 10.600 m², sus plazas de juegos y la reforestación de 16 hectáreas, en la zona de Santiago con menos áreas verdes por habitante.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 170,
          voiceName: 'Kore',
          transcript: 'Mira hacia el oriente: la silueta de Chena se recorta contra la cordillera. Este cerro fue elegido entre los 26 cerros isla para convertirse en el primer gran parque natural urbano del sur de Santiago...'
        },
        images: [
          {
            id: 'img-chena-entrada',
            url: 'https://static.wixstatic.com/media/8e4003_99bb54820c2b4ebbab4cc43257327dc8~mv2_d_2229_1549_s_2.jpg/v1/fill/w_1200,h_750,al_c,q_80/chena-parque.jpg',
            caption: 'Cerros de Chena desde el entorno agrícola de San Bernardo',
            isPrimary: true
          }
        ],
        socialLinks: {
          website: 'https://www.fundacioncerrosisla.cl/parque-natural-urbano'
        },
        documents: [],
        tips: 'Lleva agua y protector solar: en verano la ladera norte supera con facilidad los 30 °C al mediodía.',
        trivia: 'El menor Índice de Calidad de Vida Urbana (ICVU) de la región hizo de esta zona la prioridad número uno para áreas verdes.',
        estimatedStayMinutes: 35
      },
      {
        id: 'stop-chena-2',
        order: 2,
        title: 'Lagunas y plaza de juegos de agua',
        subtitle: 'El corazón recreativo del nuevo parque, en pleno llenado desde 2026',
        category: 'plaza',
        location: {
          lat: -33.5935,
          lng: -70.734,
          address: 'Sector recreativo del Parque Metropolitano Sur, San Bernardo'
        },
        triggerRadiusMeters: 40,
        narrativeText: 'Frente a ti se extienden las nuevas lagunas del parque, con 10.600 m² destinados a la recreación y el encuentro. Su diseño resguarda la ladera del cerro como zona de conservación ambiental, integrando senderos y paisajismo que dialogan con la vegetación nativa mediterránea. Las obras mayores del plan maestro, adjudicadas a Urbana E&D y al arquitecto Teodoro Fernández, apuntan a abrir al público durante 2026, marcando un hito para las 259.000 personas de San Bernardo.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 155,
          voiceName: 'Kore',
          transcript: 'Las lagunas son un espejo del cielo mediterráneo. En invierno, las lluvias transforman este paisaje en un jardín de especies nativas que despiertan con la primavera...'
        },
        images: [
          {
            id: 'img-chena-laguna',
            url: 'https://static.wixstatic.com/media/8e4003_6f767f37374041ff8845e2085c60f2cb~mv2_d_3680_2456_s_4_2.jpg/v1/fill/w_1200,h_750,al_c,q_80/chena-lagunas.jpg',
            caption: 'Formaciones del macizo de Chena y su entorno de conservación',
            isPrimary: true
          }
        ],
        socialLinks: {},
        documents: [],
        tips: 'Los atardeceres de primavera, cuando el cerro florece tras las lluvias invernales, son imperdibles.',
        trivia: 'Los circuitos de motocross iniciados en los años 70 degradaron amplias laderas; hoy los senderos buscan recuperar el suelo y la vegetación.',
        estimatedStayMinutes: 30
      },
      {
        id: 'stop-chena-3',
        order: 3,
        title: 'Santuario a la Virgen de Chena',
        subtitle: 'Un siglo de peregrinaciones de Semana Santa a la ladera del cerro',
        category: 'church',
        location: {
          lat: -33.599,
          lng: -70.741,
          address: 'Santuario a la Virgen de Chena, faldeo del cerro, San Bernardo'
        },
        triggerRadiusMeters: 50,
        narrativeText: 'Inmediato al parque se alza el Santuario a la Virgen, propiedad del Obispado. Cada Semana Santa, miles de peregrinos suben su sendero en una de las celebraciones religiosas más masivas del sector sur de la capital. El santuario es parte de la condición de "cerro vivo": junto a las ruinas incas, Chena congrega capas de memoria prehispánica, colonial, agrícola y religiosa que conviven en la misma montaña.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 140,
          voiceName: 'Kore',
          transcript: 'El Camino de la Virgen se integra a los antiguos senderos del cerro. Cada rito que suma el cerro también lo protege del abandono urbano...'
        },
        images: [
          {
            id: 'img-chena-santuario',
            url: 'https://static.wixstatic.com/media/8e4003_2bba4aff937b47bc908d3e795d852663~mv2_d_3759_2817_s_4_2.jpg/v1/fill/w_1200,h_750,al_c,q_80/chena-virgen.jpg',
            caption: 'Los muros de piedra y la vegetación del faldeo sur de Chena',
            isPrimary: true
          }
        ],
        socialLinks: {},
        documents: [],
        tips: 'Consulta el calendario parroquial de San Bernardo antes de tu visita: en Semana Santa el acceso se llena.',
        trivia: 'El nombre Chena proviene de la familia de Don José de Perochena, regidor del cabildo de Santiago en 1722.',
        estimatedStayMinutes: 20
      },
      {
        id: 'stop-chena-4',
        order: 4,
        title: 'Cima de Cerro Chena (952 msnm)',
        subtitle: 'El mirador de la cuenca del Maipo y el detonante del corredor ecológico',
        category: 'viewpoint',
        location: {
          lat: -33.595447,
          lng: -70.730883,
          address: 'Cumbre del cerro Chena, San Bernardo'
        },
        triggerRadiusMeters: 40,
        narrativeText: 'Has alcanzado la cumbre, a 952 metros sobre el nivel del mar. Desde aquí se abarca toda la cuenca del río Maipo: hacia el norte la ciudad de Santiago, hacia el sur la cordillera de la Costa, y junto a ti, hacia el oriente, la Autopista Central que desde 1960 dividió antiguos fundos y segregó del Chena al cerrillo de Hasbún, hoy llamado Cerro La Cantera. Este panorama explica por qué los incas eligieron estas cumbres: la altura de los cerros estaba cargada de contenido simbólico de poder, convirtiéndolos en focos de la incaización del valle (Stehberg, 2006).',
        audio: {
          type: 'ai_generated',
          durationSeconds: 180,
          voiceName: 'Kore',
          transcript: 'Respira el aire seco de la cuenca. Observa cómo el valle del Maipo se ordena a tus pies: esa misma lectura del paisaje guió a los incas y, siglos después, al concurso Cerros Isla para convertir estos montes en parques...'
        },
        images: [
          {
            id: 'img-chena-cumbre',
            url: 'https://static.wixstatic.com/media/8e4003_7577c81c5d2c48be856c83529ec1c4bc~mv2_d_5616_3744_s_4_2.jpg/v1/fill/w_1200,h_750,al_c,q_80/chena-cumbre.jpg',
            caption: 'El macizo de Chena visto desde sus laderas de pastizal nativo',
            isPrimary: true
          }
        ],
        socialLinks: {
          website: 'https://www.fundacioncerrosisla.cl/chena'
        },
        documents: [],
        tips: 'El tramo final es pedregoso; calzado de trekking y bastones recomendados en verano.',
        trivia: 'La prominencia es de apenas 111 m respecto a Cerros San Jorge, su vecino occidental de 954 msnm.',
        estimatedStayMinutes: 40
      },
      {
        id: 'stop-chena-5',
        order: 5,
        title: 'Huaca de Chena / Pucará',
        subtitle: 'El santuario inca: observatorio del solsticio de invierno con forma de puma',
        category: 'monument',
        location: {
          lat: -33.61512,
          lng: -70.74692,
          address: 'Camino Catemito 1910-1914, San Bernardo'
        },
        triggerRadiusMeters: 55,
        narrativeText: 'Estás en el sitio arqueológico más importante de la zona sur de Santiago: la Huaca de Chena, antiguamente llamada Pucará. Las investigaciones de Rubén Stehberg y Patricio Bustamante demostraron que estos muros no eran una simple fortaleza defensiva, sino una ushnu o espacio sagrado inca: su disposición imita al puma hermafrodita sagrado que equilibra los principios masculino y femenino, a semejanza de la ciudad del Cusco. Desde su recinto ceremonial, el amanecer del solsticio de invierno se alinea con los hitos del horizonte, evidenciando una astronomía solar de precisión.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 195,
          voiceName: 'Kore',
          transcript: 'Camina en silencio entre los muros. Este no fue un fuerte de guerra: fue un lugar donde el sol, la montaña y los principios del cosmos inca se encontraban cada solsticio de junio...'
        },
        images: [
          {
            id: 'img-chena-huaca',
            url: 'https://static.wixstatic.com/media/8e4003_6f767f37374041ff8845e2085c60f2cb~mv2_d_3680_2456_s_4_2.jpg/v1/fill/w_1200,h_750,al_c,q_80/huaca-chena.jpg',
            caption: 'El recinto ceremonial de la Huaca de Chena en la punta Catemito',
            isPrimary: true
          }
        ],
        socialLinks: {
          website: 'https://en.wikipedia.org/wiki/Huaca_de_Chena'
        },
        documents: [
          {
            id: 'doc-huaca-chena-stop',
            name: 'Planimetría y orientaciones astronómicas de la Huaca de Chena.pdf',
            type: 'sheet',
            url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            size: '2.2 MB',
            description: 'Carta con la planta del sitio, la morfología de puma y las visuales de los solsticios.'
          }
        ],
        tips: 'Respeta el vallado y no muevas piedras: el sitio sufre abandono y vandalismo y requiere protección.',
        trivia: 'Aunque se escribió "pucará", significa "fortaleza"; la comunidad científica prefiere "huaca" (waka), lugar sagrado.',
        estimatedStayMinutes: 45
      }
    ],
    routePolyline: [
      [-33.596, -70.7365],
      [-33.5935, -70.734],
      [-33.599, -70.741],
      [-33.595447, -70.730883],
      [-33.61512, -70.74692]
    ]
  },
  {
    id: 'tour-santiago-cerro-la-cantera',
    title: 'Cerro Escuela La Cantera: el aula al aire libre de San Bernardo',
    tagline: '7 hectáreas de bosque, cuatro canteras y la memoria del corredor ecológico junto al Chena y el Quimey',
    description: 'Audioguía de interpretación del Cerro La Cantera —también conocido como Cerro Hasbún— en San Bernardo (51 msnm y 7 hectáreas). Descubre el eslabón del corredor verde que vincula los cerros Chena, Quimey, Negro, Los Morros y el río Maipo: caminos accesibles, canteras ocultas bajo la fronda, la flora de huilli y lirio de campo, el canto del chercán y el sueño de la Fundación Cerro Escuela La Cantera de transformar esta loma en un parque educativo abierto a toda la comunidad.',
    coverImage: 'https://static.wixstatic.com/media/8e4003_4bd1b4a81db1482381362d81dca4c75a~mv2.jpg/v1/fill/w_1200,h_750,al_c,q_80/cantera-cover.jpg',
    city: 'San Bernardo',
    country: 'Chile',
    category: 'nature',
    language: 'Español',
    durationMinutes: 60,
    distanceKm: 3.2,
    difficulty: 'easy',
    rating: 4.9,
    reviewsCount: 64,
    featured: true,
    published: true,
    createdAt: '2026-03-10T10:00:00Z',
    updatedAt: '2026-04-25T12:30:00Z',
    author: {
      name: 'Fundación Cerro Escuela La Cantera & El Viaje Por Chile',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      role: 'Educación ambiental y diseño participativo de senderos (Cerros Isla)',
      bio: 'Proyecto educativo, social y ecológico para conservar, restaurar y valorar el Cerro La Cantera. www.fundacioncerrosisla.cl/cerroescuelalacantera.',
      verified: true
    },
    socialLinks: {
      website: 'https://www.fundacioncerrosisla.cl/cerroescuelalacantera',
      instagram: 'https://www.instagram.com/cerrosisla/'
    },
    generalDocuments: [
      {
        id: 'doc-ficha-cantera',
        name: 'Ficha del proyecto: Cerro Escuela La Cantera (plan maestro).pdf',
        type: 'guide',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        size: '5.1 MB',
        description: 'Altura 51 msnm, superficie aproximada 7 ha, densa cobertura vegetal y 4 canteras en su interior.'
      },
      {
        id: 'doc-guia-florafauna-cantera',
        name: 'Guía de flora y fauna: Huilli, Lirio de campo y Chercán.pdf',
        type: 'brochure',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        size: '3.3 MB',
        description: 'Fichas ilustradas de las especies que se protegerán y propagarán en el vivero del cerro.'
      }
    ],
    stops: [
      {
        id: 'stop-cantera-1',
        order: 1,
        title: 'Centro de Visitantes y Acceso Principal',
        subtitle: 'La puerta del futuro parque educativo, en la avenida Jorge Alessandri',
        category: 'plaza',
        location: {
          lat: -33.60739,
          lng: -70.71584,
          address: 'Pasaje Eyzaguirre 1701, El Barrancón Norte, San Bernardo'
        },
        triggerRadiusMeters: 40,
        narrativeText: 'Estás en el Centro de Visitantes del Cerro Escuela La Cantera. El plan maestro proyecta aquí el acceso principal, con estacionamientos para bicicletas, autos y buses, y un segundo acceso peatonal sobre el canal Espejino que cruzará el cerro en dirección al Chena. La loma que se alza frente a ti es un "cerro isla": un remanente natural completamente rodeado por usos urbanos, agrícolas o industriales, y un eslabón del corredor ecológico de San Bernardo que también integra a los cerros Chena, Quimey, Negro y Los Morros.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 150,
          voiceName: 'Puck',
          transcript: 'Frente a ti, el cerro isla más discreto de San Bernardo. Solo 51 metros de altura y 7 hectáreas, pero una densa alfombra de vegetación que pocos cerros urbanos pueden presumir...'
        },
        images: [
          {
            id: 'img-cantera-acceso',
            url: 'https://static.wixstatic.com/media/8e4003_a3a3a77d280a48ab8ffa234d5d110916~mv2.jpg/v1/fill/w_1200,h_750,al_c,q_80/cantera-acceso.jpg',
            caption: 'La masa vegetal del Cerro La Cantera vista desde El Barrancón Norte',
            isPrimary: true
          }
        ],
        socialLinks: {},
        documents: [],
        tips: 'El ascenso es de baja dificultad y apto para familias; el circuito completo demora cerca de una hora.',
        trivia: 'El cerro también se conoce como Cerro Hasbún, el cerrillo que la Carretera Panamericana segregó del Chena en 1960.',
        estimatedStayMinutes: 15
      },
      {
        id: 'stop-cantera-2',
        order: 2,
        title: 'Sendero educativo de ascenso',
        subtitle: 'Huilli, lirio de campo y el canto del chercán',
        category: 'nature',
        location: {
          lat: -33.60775,
          lng: -70.71609,
          address: 'Sendero Cerro Escuela La Cantera, San Bernardo'
        },
        triggerRadiusMeters: 35,
        narrativeText: 'Subes por el sendero educativo proyectado por la Fundación Cerro Escuela La Cantera. En primavera, el suelo se llena de huillis (Leucocoryne ixioides) y lirios de campo (Alstroemeria angustifolia), flores nativas de bajo requerimiento hídrico que protagonizarán la restauración ecológica del cerro: se extraerán los eucaliptos y pinos introducidos para sustituirlos por estas especies mediterráneas, propagadas en un vivero de la cima. Desde los matorrales escucharás al chercán (Troglodytes aedon), uno de los pájaros más confiados y cantores del valle central.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 150,
          voiceName: 'Puck',
          transcript: 'Agáchate y observa: entre las piedras crecen bulbos de huilli que florecen apenas pasa el frío. Este es el plan del cerro escuela: aprender de lo que crece, no solo verlo...'
        },
        images: [
          {
            id: 'img-cantera-huilli',
            url: 'https://static.wixstatic.com/media/8e4003_4e8629949dd14541bffce50e3e79865f~mv2.jpg/v1/fill/w_900,h_650,al_c,q_80/cantera-huilli.jpg',
            caption: 'Huilli (Leucocoryne ixioides), flor nativa del sendero',
            isPrimary: true
          },
          {
            id: 'img-cantera-lirio',
            url: 'https://static.wixstatic.com/media/8e4003_0478e5942fbb402b9df014a706753575~mv2.jpg/v1/fill/w_900,h_650,al_c,q_80/cantera-lirio.jpg',
            caption: 'Lirio de campo (Alstroemeria angustifolia)',
            isPrimary: false
          },
          {
            id: 'img-cantera-chercan',
            url: 'https://static.wixstatic.com/media/8e4003_cbe93c4111b54d2e93fbe14c59197293~mv2.jpg/v1/fill/w_900,h_650,al_c,q_80/cantera-chercan.jpg',
            caption: 'Chercán (Troglodytes aedon), el ave cantora del cerro',
            isPrimary: false
          }
        ],
        socialLinks: {},
        documents: [],
        tips: 'No arranques bulbos: la restauración ecológica depende de cada ejemplar de flora nativa.',
        trivia: 'Una alstroemeria roja adorna el billete chileno; estas flores son el orgullo de la flora mediterránea de Chile.',
        estimatedStayMinutes: 25
      },
      {
        id: 'stop-cantera-3',
        order: 3,
        title: 'Canteras ocultas y mirador a cielo abierto',
        subtitle: 'Las antiguas extracciones de piedra que se transformarán en salas de observación',
        category: 'secret',
        location: {
          lat: -33.609,
          lng: -70.7138,
          address: 'Sector de canteras, Cerro La Cantera, San Bernardo'
        },
        triggerRadiusMeters: 35,
        narrativeText: 'Bajo la sombra de la forestación se esconden cuatro canteras, cicatrices de la antigua extracción de piedra que dieron nombre al cerro. El proyecto de Cerro Escuela busca recuperarlas y transformarlas en miradores a cielo abierto: aulas en el aire donde los estudiantes podrán leer la geología del lugar, la historia de la extracción y las soluciones basadas en la naturaleza que hoy restauran el suelo.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 135,
          voiceName: 'Puck',
          transcript: 'Una cantera es una herida que la naturaleza empezó a sanar sola. El proyecto no la tapa: la convierte en ventana para mirar el cielo y la historia de la piedra...'
        },
        images: [
          {
            id: 'img-cantera-piedra',
            url: 'https://static.wixstatic.com/media/8e4003_a5b8c799ddbb4b8fa2d43177ff707c05~mv2.jpg/v1/fill/w_900,h_1150,al_c,q_80/cantera-mirador.jpg',
            caption: 'Propuesta de mirador a cielo abierto en las canteras del cerro',
            isPrimary: true
          }
        ],
        socialLinks: {
          website: 'https://www.fundacioncerrosisla.cl/cerroescuelalacantera'
        },
        documents: [],
        tips: 'El sector de canteras puede estar lleno de hojas sueltas; pisa con cuidado.',
        trivia: 'Cada cantera conserva marcas de corte que cuentan la historia de la construcción de San Bernardo.',
        estimatedStayMinutes: 20
      },
      {
        id: 'stop-cantera-4',
        order: 4,
        title: 'Cima del Cerro La Cantera (51 msnm)',
        subtitle: 'El mirador del paisaje de Santiago y el futuro vivero',
        category: 'viewpoint',
        location: {
          lat: -33.6094593,
          lng: -70.7149726,
          address: 'Cima del Cerro La Cantera, San Bernardo'
        },
        triggerRadiusMeters: 35,
        narrativeText: 'Desde la cima, solo 51 metros sobre el terreno, se domina el paisaje del valle central. Estos miradores estarán orientados a Santiago y a la Cordillera de los Andes. En este punto se instalarán los prototipos de restauración ecológica —jardines experimentales— y el vivero comunitario donde se propagarán las especies nativas que luego se plantarán en el cerro. La idea es que la cima sea, literalmente, la sala de clases más alta y verde de San Bernardo.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 140,
          voiceName: 'Puck',
          transcript: 'Estás a 51 metros... pero se sienten como mil. La cercanía del valle te recuerda que la naturaleza no necesita una cordillera entera para educar: una loma basta...'
        },
        images: [
          {
            id: 'img-cantera-cima',
            url: 'https://static.wixstatic.com/media/8e4003_4bd1b4a81db1482381362d81dca4c75a~mv2.jpg/v1/fill/w_1200,h_700,al_c,q_80/cantera-cima.jpg',
            caption: 'La copa de los árboles del Cerro La Cantera, la cima más verde de su comuna',
            isPrimary: true
          }
        ],
        socialLinks: {},
        documents: [],
        tips: 'Atardecer recomendado: la luz dorada baja del cordón de la Costa hacia el corredor verde.',
        trivia: 'La Fundación prevé un parque educativo de 8 hectáreas que integra el cerro y su entorno inmediato.',
        estimatedStayMinutes: 30
      },
      {
        id: 'stop-cantera-5',
        order: 5,
        title: 'Canal Espejino y el umbral del Cerro Chena',
        subtitle: 'El corredor ecológico que une la Cantera, el Chena y el Quimey',
        category: 'nature',
        location: {
          lat: -33.6125,
          lng: -70.7175,
          address: 'Borde del canal Espejino, San Bernardo'
        },
        triggerRadiusMeters: 40,
        narrativeText: 'Finalizamos en el canal Espejino, la cinta de agua que separa y a la vez conecta a La Cantera con el gran macizo del Chena al poniente. Aquí se habilita el acceso peatonal previsto en el plan maestro, permitiendo cruzar de un cerro al otro y articular el corredor verde de San Bernardo con el Quimey. Este corredor permite que la biodiversidad no sea una isla dentro de la ciudad: aves, polinizadores y semillas viajan de cerro en cerro gracias a estos vínculos.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 130,
          voiceName: 'Puck',
          transcript: 'El agua y el verde siempre tienden a unirse. El canal que ves frente a ti es el hilo que cose La Cantera al Chena, y al Quimey, y al resto del archipiélago verde de Santiago...'
        },
        images: [
          {
            id: 'img-cantera-espejino',
            url: 'https://static.wixstatic.com/media/8e4003_a3a3a77d280a48ab8ffa234d5d110916~mv2.jpg/v1/fill/w_1200,h_750,al_c,q_80/cantera-espejino.jpg',
            caption: 'El paisaje de borde entre la ciudad y el corredor verde de San Bernardo',
            isPrimary: true
          }
        ],
        socialLinks: {
          website: 'https://www.fundacioncerrosisla.cl/corredor-verde-de-san-bernardo'
        },
        documents: [],
        tips: 'En horarios de alta demanda riega el canal; mantén la distancia de seguridad en el borde.',
        trivia: 'El Corredor Verde de San Bernardo nació como concurso de arquitectura en 2015, ganando el primer lugar en Cerros Isla.',
        estimatedStayMinutes: 15
      }
    ],
    routePolyline: [
      [-33.60739, -70.71584],
      [-33.60775, -70.71609],
      [-33.609, -70.7138],
      [-33.6094593, -70.7149726],
      [-33.6125, -70.7175]
    ]
  },
  {
    id: 'tour-los-muermos-paraiso-perdido',
    title: 'Sumérgete en el paraíso perdido de Los Muermos',
    tagline: 'La verdadera aventura no tiene un mapa fijo, tiene tu propio ritmo',
    description: 'Audioguía producida por El Viaje Por Chile (www.elviaje.cl) para la comuna de Los Muermos, en la costa del sur de Chile. Esta no es la típica excursión con horarios estrictos ni rutas obligatorias; es una experiencia autoguiada que te entrega las llaves de Los Muermos con total libertad. A través de audioguías personalizadas, tú decides el camino: ingresa desde el Aeropuerto El Tepual por la Ruta V-60, conecta desde Puerto Varas por la Ruta V-50 o aventúrate hacia los místicos rincones de Lolcura y Quenuir. La tecnología es tu brújula y la flexibilidad tu único itinerario: descubre la historia de la comuna, las pasarelas de Estaquilla, las dunas de Hua Huar y el paraíso gastronómico muermino.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Camino_A_Los_Muermos.jpg/1280px-Camino_A_Los_Muermos.jpg',
    city: 'Los Muermos',
    country: 'Chile',
    category: 'history',
    language: 'Español',
    durationMinutes: 255,
    distanceKm: 52.0,
    difficulty: 'moderate',
    rating: 4.9,
    reviewsCount: 96,
    featured: true,
    published: true,
    createdAt: '2026-05-01T09:00:00Z',
    updatedAt: '2026-09-01T15:30:00Z',
    author: {
      name: 'Juan Carlos Castaing',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      role: 'Creador de rutas autoguiadas y audioguías en El Viaje Por Chile',
      bio: 'Autor de la audioguía "Sumérgete en el paraíso perdido de Los Muermos" publicada en izi.TRAVEL y gestor de www.elviaje.cl.',
      verified: true
    },
    socialLinks: {
      website: 'https://www.elviaje.cl',
      instagram: 'https://instagram.com/tiendaelviaje',
      youtube: 'https://youtube.com/@tiendaelviaje'
    },
    generalDocuments: [
      {
        id: 'doc-ruta-gastronomica-muermina',
        name: 'Ruta Gastronómica y Patrimonial de Los Muermos.pdf',
        type: 'guide',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        size: '4.2 MB',
        description: 'Mapa de la ruta autoguiada: accesos por las rutas V-50 y V-60, caletas, dunas y los restaurantes del circuito muermino.'
      },
      {
        id: 'doc-chungungo',
        name: 'Ficha de conservación: El chungungo (Lontra felina).pdf',
        type: 'brochure',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        size: '2.9 MB',
        description: 'Guía de avistamiento responsable de la nutria marina más pequeña del mundo en la costa de Hua Huar.'
      }
    ],
    stops: [
      {
        id: 'stop-muermos-1',
        order: 1,
        title: 'Comuna de Los Muermos',
        subtitle: 'Del bosque de alerces al pueblo fundado por cuatro hombres',
        category: 'history',
        location: {
          lat: -41.39556,
          lng: -73.46237,
          address: 'Plaza de Armas de Los Muermos, Antonio Varas 498, Región de Los Lagos'
        },
        triggerRadiusMeters: 60,
        narrativeText: 'Hubo un tiempo en que este lugar no figuraba en ningún mapa. Era un reino de sombras perpetuas, custodiado por un ejército de ulmos colosales y una vegetación tan densa que la luz del sol rara vez lograba tocar el suelo. Solo los hacheros más audaces se atrevían a internarse en esta selva indómita, desafiando el silencio imponente del bosque.\n\nPero el destino de este territorio estaba a punto de cambiar.\n\nEn 1933, el murmullo de los árboles fue interrumpido por los primeros pasos de colonos decididos a reclamar estas tierras. Un año después, en 1934, cuatro hombres grabaron sus nombres en el corazón de la madera: Vicente Uribe, Vicente Torres, Gabriel Vásquez y Damián Vargas. Ellos no solo fundaron un pueblo; desafiaron a la naturaleza misma. Entre la niebla y el barro, levantaron la primera escuela y un retén policial, como estacas de civilización en medio de lo desconocido.\n\nEl bosque, sin embargo, guardaba un tesoro codiciado: el alerce, el gigante eterno de los Andes australes.\n\nLa llegada del gigante de hierro\n\nPara extraer los secretos de la selva, la comunidad necesitaba fuerza. En 1936, las campanas de una nueva iglesia comenzaron a resonar entre los cerros, uniendo las voluntades de los pobladores. Pero el verdadero hito que fracturó el aislamiento ocurrió en 1940. A través de los caminos de tierra, un monstruo de metal comenzó a abrirse paso rugiendo: el ferrocarril.\n\nEl tren no solo traía progreso; se llevaba el alma del bosque. Sus vagones partían cargados de alerce, esa madera incorruptible que construyó los techos y las iglesias de todo el sur de Chile. Cada viaje era una victoria del hombre sobre la geografía.\n\nPoco a poco, la oscuridad del bosque retrocedió para dar paso a la luz de los servicios básicos, a la vida, a la comunidad. El pequeño asentamiento de hacheros creció tanto que su antigua dependencia de Maullín ya no podía sostenerse. La identidad de este lugar era demasiado fuerte para ser una sombra.\n\nAsí, en el amanecer del 1 de enero de 1962, Los Muermos rompió sus cadenas y renació oficialmente como una comuna autónoma.\n\nTu ruta comienza aquí\n\nHoy, cuando recorras estas rutas y mires los campos abiertos, recuerda que bajo tus pies descansan las raíces de un bosque milenario que una vez lo cubrió todo. Los caminos que hoy transitas con total libertad fueron tallados a golpe de hacha y sudor.\n\nAbre bien los ojos, enciende tu audioguía y afina tu cámara... porque la historia de Los Muermos aún se respira en el aire. ¿Estás listo para descubrirla?',
        audio: {
          type: 'ai_generated',
          durationSeconds: 205,
          voiceName: 'Kore',
          transcript: 'Hubo un tiempo en que este lugar no figuraba en ningún mapa. Era un reino de sombras perpetuas, custodiado por ulmos colosales. En 1933 llegaron los primeros colonos y en 1934 cuatro hombres fundaron el pueblo: Vicente Uribe, Vicente Torres, Gabriel Vásquez y Damián Vargas. El alerce era el tesoro codiciado, y en 1940 el ferrocarril rompió el aislamiento, llevando cargamentos de esa madera incorruptible que construyó los techos e iglesias del sur de Chile. El 1 de enero de 1962, Los Muermos renació como comuna autónoma. Hoy, bajo tus pies descansan las raíces de un bosque milenario. Abre bien los ojos, enciende tu audioguía y afina tu cámara: la historia de Los Muermos aún se respira en el aire.'
        },
        images: [
          {
            id: 'img-muermos-comuna',
            url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/ac90e04b-8940-4e0f-a6c8-b312182e3cf8_120x90.jpg',
            caption: 'Los Muermos: la comuna fundada en el corazón del bosque de alerce',
            isPrimary: true
          }
        ],
        socialLinks: {
          website: 'https://www.elviaje.cl'
        },
        documents: [],
        tips: 'Visita la Plaza de Armas y la parroquia: la historia de la comuna se lee en sus calles.',
        trivia: 'Los Muermos fue creada como comuna autónoma el 1 de enero de 1962, desligándose de Maullín.',
        estimatedStayMinutes: 40
      },
      {
        id: 'stop-muermos-2',
        order: 2,
        title: 'La costa de Los Muermos: el pasado y el presente de Estaquilla',
        subtitle: 'Hacheros chilotes, el alerce y el renacer pesquero de la caleta',
        category: 'history',
        location: {
          lat: -41.39401,
          lng: -73.83589,
          address: 'Caleta Estaquilla, Los Muermos, Región de Los Lagos'
        },
        triggerRadiusMeters: 60,
        narrativeText: 'Los secretos del Pacífico: la epopeya de Estaquilla\n\nMucho antes de que los caminos pavimentados existieran, el oeste de la comuna de Los Muermos no era más que un murmullo salvaje. A finales del siglo XIX y principios del XX, la indómita selva valdiviana caía de golpe sobre el Océano Pacífico, resguardando en su interior un secreto milenario: bosques infinitos de alerce, el gigante incorruptible del sur.\n\nPara desenterrar ese tesoro, hombres curtidos por el frío y la lluvia se adentraron en el misterio verde. Eran los hacheros chilotes, navegantes de la madera que cruzaron los canales desafiando tormentas. Armados solo con su fuerza y sus herramientas, abrieron las primeras heridas en la espesura de sectores indómitos como Hua-huar y Estaquilla. En la niebla de una costa casi inexplorada, la masiva extracción y comercio del alerce se convirtió en un faro viviente, atrayendo las primeras almas y levantando los cimientos humanos de la zona. Aquella vieja estirpe chilote se asentó firmemente en la zona alta, mirando siempre de reojo el imponente mar que un día los vio llegar.\n\nEl bosque cedió, pero la historia guardaba una transformación magnífica para este rincón del mundo.\n\nEl renacer de la costa: oro rojo y pasarelas de madera\n\nCon el paso de las décadas, los hacheros de la zona alta bajaron la mirada hacia el océano. Aquella caleta solitaria mutó en un santuario marino. Los hombres del hacha se convirtieron en hombres de mar, descubriendo un nuevo tesoro oculto en las profundidades de sus templos de roca: el loco. El cotizado molusco transformó a Estaquilla en el polo pesquero y costero más dinámico de la provincia.\n\nHoy, el misterio del bosque se une con la imponencia del Pacífico en una de las caletas más modernas de la región, pero que se niega a perder su alma mística.\n\nTu bitácora turística hoy: lo que te espera en la ruta\n\nAl explorar Estaquilla a tu propio ritmo, el viaje del pasado se conecta directamente con tu cámara y tus sentidos:\n\nEl anfiteatro de roca y sus pasarelas: las icónicas pasarelas de madera de Estaquilla te guiarán por encima de imponentes acantilados verdes que caen directo al mar, ofreciéndote encuadres fotográficos perfectos donde la Cordillera de la Costa se ahoga en el océano.\n\nSabores del océano: en julio, la caleta se enciende con la famosa Fiesta del Loco, una celebración gastronómica organizada por los mismos pescadores que mantiene viva la herencia comunitaria.\n\nHacia la inmensidad de Hua-huar: a solo 7 kilómetros, la ruta te invita a conectar con la Playa de Hua-Huar, «lugar de animales indómitos», una extensión mística de dunas colosales rodeada de alerces que sobrevivieron a la historia.\n\nDonde antes hubo una selva impenetrable transitada solo por hacheros solitarios, hoy hay un camino de libertad. Sintoniza tus redes, dale play a la ruta y déjate atrapar por la magia costera de Estaquilla.\n\nPuedes complementar tu recorrido con el video explicativo de las Pasarelas de Estaquilla, que te mostrará tomas aéreas y la infraestructura de madera que conecta los miradores sobre los imponentes acantilados de la caleta.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 225,
          voiceName: 'Kore',
          transcript: 'Mucho antes de los caminos pavimentados, el oeste de Los Muermos era selva valdiviana cayendo sobre el Pacífico, guardando bosques infinitos de alerce. Los hacheros chilotes abrieron las primeras heridas en sectores como Hua-huar y Estaquilla. Con las décadas, los hombres del hacha se volvieron hombres de mar: el loco, molusco cotizado, transformó a Estaquilla en el polo pesquero más dinámico de la provincia. Hoy, las pasarelas de madera te guían sobre acantilados que caen al mar; en julio se celebra la Fiesta del Loco; y a solo 7 kilómetros te esperan las dunas de Hua-Huar, «lugar de animales indómitos». Donde antes hubo selva impenetrable, hoy hay un camino de libertad: déjate atrapar por la magia costera de Estaquilla.'
        },
        images: [
          {
            id: 'img-muermos-estaquilla',
            url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/fc6fb165-8c6e-474a-bc4a-7d655e7b6e81_120x90.jpg',
            caption: 'Las pasarelas de madera de Caleta Estaquilla sobre los acantilados del Pacífico',
            isPrimary: true
          }
        ],
        socialLinks: {
          website: 'https://www.elviaje.cl'
        },
        documents: [],
        tips: 'En julio se celebra la Fiesta del Loco: es la mejor fecha para conocer la tradición pesquera de la caleta.',
        trivia: 'El "loco" (Concholepas concholepas) convirtió a Estaquilla en el polo pesquero y costero más dinámico de la provincia de Llanquihue.',
        estimatedStayMinutes: 55
      },
      {
        id: 'stop-muermos-3',
        order: 3,
        title: 'Estaquilla y Dunas de Hua Huar',
        subtitle: 'El encuentro del río y el mar, custodiado por el chungungo',
        category: 'nature',
        location: {
          lat: -41.34692,
          lng: -73.81723,
          address: 'Playa y dunas de Hua-Huar, Ruta V-496, Los Muermos, Región de Los Lagos'
        },
        triggerRadiusMeters: 60,
        narrativeText: 'Bienvenido a un rincón del mundo donde la tierra y el agua juegan a transformarse constantemente. Detén tu paso por un momento. Siente el viento en tu rostro y respira profundo: estás en Estaquilla y Hua Huar, un tesoro escondido en la costa de la indómita Cordillera del Sarao.\n\nSi te detienes frente al mar verás la majestuosidad de Hua Huar. Deja que tus ojos viajen por sus arenas doradas y sus dunas únicas, verdaderas esculturas vivientes que el viento modela día tras día. Estas dunas no son solo arena; son el testimonio de miles de años de paciencia de la naturaleza, un escudo que protege la biodiversidad de esta cordillera costera.\n\nPero gira un poco más. Aquí, donde te encuentras, ocurre un fenómeno mágico: el encuentro de dos mundos acuáticos. Frente a ti se despliega la inmensidad del mar de Estaquilla, con su oleaje indomable, mientras que a su lado, de forma casi sutil, un río de aguas tranquilas y frescas busca su descanso final desembocando en el océano.\n\nUn refugio de vida y calma\n\nEste lugar te invita a vivirlo con todos los sentidos:\n\nEl abrazo del río: fíjate en el contraste. Mientras el mar brama con fuerza, el río te ofrece un refugio templado. Es el lugar perfecto para sumergir los pies, refrescarse y sentir la calma del agua dulce antes de que se mezcle con la sal.\n\nEl juego del chungungo: abre bien los ojos y mantén el silencio por un instante. Si prestas atención a las rocas donde rompen las olas, podrías ser testigo de un milagro cotidiano: el nado ágil del chungungo. Esta pequeña nutria marina, una de las más compactas y fascinantes del mundo, se encuentra en grave peligro de extinción. Verla jugar entre el huirillo o buscar su alimento es un recordatorio de que somos huéspedes en su hogar.\n\nEl latido de Estaquilla\n\nEste lugar no es solo un paisaje para una fotografía; es un ecosistema vivo y frágil. Cada grano de arena de estas dunas y cada rincón de este río albergan historias de supervivencia.\n\nAl caminar hoy por Estaquilla y Hua Huar, te conviertes en parte de su historia. Te invitamos a recorrer este espacio con respeto, a disfrutar de la calidez de su río y a custodiar el hogar del chungungo para que las futuras generaciones también puedan escuchar el susurro de este encuentro entre el río y el mar.\n\n¿Qué es lo que más te asombra de este paisaje: la imponente fuerza de sus dunas o la tranquilidad del río que se entrega al mar?',
        audio: {
          type: 'ai_generated',
          durationSeconds: 195,
          voiceName: 'Puck',
          transcript: 'Estás en Estaquilla y Hua Huar, un tesoro escondido en la costa de la Cordillera del Sarao. Frente a ti, las dunas de Hua Huar son esculturas vivientes que el viento modela día tras día, un escudo que protege la biodiversidad. Aquí ocurre un fenómeno mágico: el encuentro del mar con un río de aguas tranquilas que busca su descanso final en el océano. Escucha el silencio: entre las rocas podría nadar el chungungo, la nutria marina más pequeña del mundo, en grave peligro de extinción. Somos huéspedes en su hogar. Recorre este espacio con respeto y custodiemos juntos el encuentro entre el río y el mar.'
        },
        images: [
          {
            id: 'img-muermos-huahuar',
            url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/040a6550-a32d-4013-bf35-fc924ee6d5f7_120x90.jpg',
            caption: 'Dunas y costa de Hua Huar, custodiadas por alerces sobrevivientes',
            isPrimary: true
          }
        ],
        socialLinks: {
          website: 'https://www.elviaje.cl'
        },
        documents: [],
        tips: 'Mantén el silencio y no te acerques a las rocas donde rompen las olas: el chungungo cría en el borde costero.',
        trivia: 'Hua-Huar significa "lugar de animales indómitos" (huahuales); la localidad costera tiene menos de 150 habitantes dedicados a la pesca.',
        estimatedStayMinutes: 65
      },
      {
        id: 'stop-muermos-4',
        order: 4,
        title: 'Gastronomía Muermina: recuerdos para el paladar',
        subtitle: 'Una ruta de sabores del Pacífico entre Estaquilla y Los Muermos',
        category: 'gastronomy',
        location: {
          lat: -41.40279,
          lng: -73.80446,
          address: 'Istmo de Punta Estaquilla, Los Muermos, Región de Los Lagos'
        },
        triggerRadiusMeters: 80,
        narrativeText: 'Cierra los ojos e inhala profundo: sientes la sal, el yodo y el perfume de la tierra mojada donde la selva fría de Chile se encuentra con el inmenso Océano Pacífico. En la comuna de Los Muermos se esconde un paraíso perdido de sabores ancestrales, un reino custodiado por los imponentes acantilados de Estaquilla. Aquí, las aguas heladas obsequian una abundancia mítica de pulpos de carne suave, locos carnosos, almejas jugosas y picorocos que concentran el alma pura del mar.\n\nNuestra travesía comienza frente a las olas en la Hostería y Cabañas Punta Estaquilla, el Restaurante Rincón del Pacífico y el pintoresco Food Truck El Pulpito, donde la pesca del día se transforma en banquetes sencillos y frescos. Siguiendo el rastro de la bruma costera encontramos las propuestas de Joyas del Mar, el sazón casero de Donde Doña Nubia y el aroma a pan caliente de la Amasandería Cordillera.\n\nAl adentrarnos en el valle hacia el centro de Los Muermos, la riqueza marina se celebra en comedores cálidos de madera. En el célebre Restaurante Congrio con Agallas desfilan las grandes especialidades de la zona: la versión frita tradicional del pescado servida en fuente blanca; la pieza entera rebozada y dorada, típica chilota presentada con limón y perejil; y el filete crujiente acompañado de papas y ensalada fresca del sur. Para disfrutar en comunidad, la mesa ofrece preparaciones recién hechas para compartir, así como versiones empanizadas servidas sobre madera rústica.\n\nLa ruta gastronómica se extiende por la cocina sureña de los restaurantes Entre Esteros, La Madrina y Manhattan, la vanguardia de Maguro Sushi, la calidez artesanal de Bar Restaurante Pizzería Rustik y Pizzería Ofenashes, y la elegancia de Casa Notro. Al atardecer, la sobremesa dulce florece en las cafeterías Meli, Aniccolato, Paihuén, Divina, Summer Love y las delicias de Waff Haus.\n\nCuando la noche cae sobre el Pacífico, el viaje culmina en el refugio acogedor de las cabañas y tinajas de Estaquilla y sus alrededores, como Cabañas Acantilados, Río Juancho, Raíz Alerce, Las Vertientes, Alterwald, Eben Ezer, Las Malvinas, Sur Mediterráneas, El Valle y Salto Las Rocas. Los Muermos no es solo un destino en el mapa; es la memoria de un océano generoso que se queda grabado para siempre en el paladar.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 210,
          voiceName: 'Kore',
          transcript: 'Cierra los ojos e inhala la sal, el yodo y el perfume de la selva fría que encuentra al Pacífico. La costa de Los Muermos es un paraíso de sabores: pulpos, locos carnosos, almejas y picorocos. La travesía comienza en la Hostería y Cabañas Punta Estaquilla, Rincón del Pacífico y El Pulpito, pasa por Joyas del Mar, Donde Doña Nubia y la Amasandería Cordillera. En Los Muermos, el Restaurante Congrio con Agallas ofrece el congrio frito en fuente blanca, la pieza entera rebozada a la chilota y el filete crujiente. La ruta continúa en Entre Esteros, La Madrina, Manhattan, Maguro Sushi, Rustik, Ofenashes y Casa Notro, para terminar el día con las cafeterías Meli, Aniccolato, Paihuén, Divina, Summer Love y Waff Haus. Cuando cae la noche, las tinajas de Estaquilla te esperan: Los Muermos es la memoria de un océano generoso que queda grabada para siempre en el paladar.'
        },
        images: [
          {
            id: 'img-muermos-gastronomia',
            url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/8fcc8905-1703-4dbb-a1c0-c7f1402e3156_120x90.jpg',
            caption: 'La gastronomía del Pacífico: especies y sabores de la cocina muermina',
            isPrimary: true
          }
        ],
        socialLinks: {
          website: 'https://www.elviaje.cl'
        },
        documents: [],
        tips: 'Prueba el congrio "con agallas" en Los Muermos: es la especialidad insignia de la cocina local.',
        trivia: 'La ruta une más de veinte mesas y cafeterías entre la costa de Estaquilla y el centro de Los Muermos.',
        estimatedStayMinutes: 80
      }
    ],
    routePolyline: [
      [-41.39556, -73.46237],
      [-41.39401, -73.83589],
      [-41.34692, -73.81723],
      [-41.40279, -73.80446]
    ]
  },
  {
    id: 'tour-puerto-montt-bizarro',
    title: 'Puerto Montt Bizarro: experimentando curiosidades, miedos y misterios',
    tagline: 'Historias oscuras, misteriosas... y también extrañas',
    description: 'Audioguía producida por El Viaje Por Chile (www.elviaje.cl) y publicada originalmente en izi.TRAVEL. Puerto Montt te revelará sus historias oscuras, misteriosas y también extrañas: la fundación secreta de Vicente Pérez Rosales, exorcismos en la Catedral, los fantasmas de Casa Pauly, el Ovni de Pelluco, las animitas de Bellavista y los nombres prohibidos que se quisieron borrar del mapa. Trece paradas autoguiadas recorren el centro histórico, la costanera, Pelluco y el borde costero, cada una con su audio original, fotografías reales y las coordenadas exactas del lugar. Ponte los auriculares y atrévete a mirar la ciudad con otros ojos.',
    coverImage: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/815682dc-c64b-426e-b950-e23773916ccf_800x600.jpg',
    city: 'Puerto Montt',
    country: 'Chile',
    category: 'secrets',
    language: 'Español',
    durationMinutes: 190,
    distanceKm: 9.0,
    difficulty: 'moderate',
    rating: 4.9,
    reviewsCount: 78,
    featured: false,
    published: true,
    createdAt: '2026-08-15T10:00:00Z',
    updatedAt: '2026-09-12T12:00:00Z',
    author: {
      name: 'Juan Carlos Castaing',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      role: 'Creador de rutas autoguiadas y audioguías en El Viaje Por Chile',
      bio: 'Autor de la audioguía "Puerto Montt Bizarro" publicada en izi.TRAVEL y gestor de www.elviaje.cl.',
      verified: true
    },
    socialLinks: {
      website: 'https://www.elviaje.cl',
      instagram: 'https://instagram.com/tiendaelviaje',
      youtube: 'https://youtube.com/@tiendaelviaje'
    },
    generalDocuments: [
      {
        id: 'doc-guia-puerto-montt-bizarro',
        name: 'Guía de la Ruta Bizarra de Puerto Montt.pdf',
        type: 'guide',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
        size: '3.4 MB',
        description: 'Mapa de las 13 paradas: fundación, Plaza de Armas, Catedral, Casa Pauly, costanera, Casa del Arte, Pelluco y la animita de Bellavista.'
      }
    ],
    stops: [
      {
        id: 'stop-puertomontt-1',
        order: 1,
        title: 'La fundación de Vicente Pérez Rosales',
        subtitle: 'El Astillero de Melipulli, donde el 12 de febrero de 1853 renació una ciudad',
        category: 'history',
        location: {
          lat: -41.4747,
          lng: -72.9391,
          address: 'Paseo borde costero, frente al antiguo Astillero de Melipulli, Puerto Montt'
        },
        triggerRadiusMeters: 60,
        narrativeText: 'En este lugar, el sitio donde se re-fundó Puerto Montt, puedes recordar su historia e imaginar sus pasos cuando caminaba por el Astillero de Melipulli, soñando con reclamar un trozo de historia en nuestro país y refundar la ciudad que hoy conoces.\n\nEl historiador Emilio Held, al referirse a los descendientes de los primeros colonizadores, hace referencia al acta fundacional de 1853, donde Vicente Pérez Rosales da cuenta de la ubicación de la nueva ciudad y el nombre que llevarían sus calles.\n\nPérez Rosales parecerá un misterioso artista para algunos y un heroico aventurero para otros. Además de nombrar esta ciudad y sus calles, fue también cronista y dibujante. En su poderío republicano no se le conocen vínculos directos con la masonería, aunque sí existen algunas líneas de investigación bizarras y dudosas que lo vinculan con sociedades secretas, conspiraciones, asesinatos y hasta con los famosos Iluminati de Baviera, el mundo de Dan Brown. Sobre ello, sobra la fantasía y falta la evidencia.\n\nUn dato relevante es que Rosales pertenecía al Clan de los Ochocientos, al Club Otomano y a la familia de los Larraín, un clan colonial anexado al poder de la Iglesia Católica. En su libro Recuerdos del Pasado destaca su visión fundacional de Chile, a veces progresista y otras colonialista. El escritor argentino César Aira lo consideró uno de los libros más bellos de nuestras literaturas; se difundió como folletín en el diario santiaguino La Época en 1882.\n\n¿Qué nombres secretos, posteriormente prohibidos, tuvimos antes de Rosales? Dos ejemplos: Cayenel y Melipulli. ¿Habrá otras toponimias olvidadas, secretas o prohibidas en Chile? Una parte de esta historia la seguiremos contando en la calle Antonio Varas.',
        audio: {
          type: 'uploaded_mp3',
          url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/21b1a163-448d-4b42-9118-72f7a4a5dfd8.m4a',
          durationSeconds: 210,
          transcript: 'Estás en el sitio donde se re-fundó Puerto Montt, el antiguo Astillero de Melipulli. Aquí, el 12 de febrero de 1853, Vicente Pérez Rosales dio cuenta de la ubicación de la nueva ciudad y del nombre de sus calles. Rosales, cronista y dibujante, ha sido vinculado por teorías dudosas a sociedades secretas e incluso a los Iluminati, aunque la evidencia falta. Lo real: perteneció al Clan de los Ochocientos y a la familia Larraín. Sus Recuerdos del Pasado fueron considerados por César Aira uno de los libros más bellos de nuestras literaturas. Antes de Rosales, esta tierra tuvo nombres prohibidos: Cayenel y Melipulli. La historia continúa en la calle Antonio Varas.'
        },
        images: [
          {
            id: 'img-puertomontt-1-a',
            url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/502dc2df-2248-4ec7-83f7-11deddf3a47d_800x600.jpg',
            caption: 'El borde del Seno de Reloncaví, donde Pérez Rosales fundó la nueva ciudad',
            isPrimary: true
          },
          {
            id: 'img-puertomontt-1-b',
            url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/5c554cce-1ff4-4797-9cb8-e0511027a41c_800x600.jpg',
            caption: 'De la playa de Melipulli a la ciudad: el paisaje del Astillero de Melipulli'
          }
        ],
        socialLinks: {
          website: 'https://www.elviaje.cl'
        },
        documents: [],
        tips: 'Sitúa tu mirada en el borde costero: en 1853 la bahía llegaba casi hasta la Plaza de Armas y las embarcaciones varaban en la playa del Astillero.',
        trivia: 'El 12 de febrero de 1853, Vicente Pérez Rosales fundó Puerto Montt en la playa de Melipulli, acompañado por José Ramírez, Buenaventura Martínez, el párroco Miguel Sevilla y el alemán Santiago Foltz.',
        estimatedStayMinutes: 30
      },
      {
        id: 'stop-puertomontt-2',
        order: 2,
        title: 'Un Monumento a la Colonización: Significados Ocultos',
        subtitle: 'El bronce de los colonos alemanes y la misteriosa leyenda de Pichi Juan',
        category: 'monument',
        location: {
          lat: -41.4733,
          lng: -72.941,
          address: 'Plaza del Monumento a la Colonización Alemana, calle Antonio Varas, Puerto Montt'
        },
        triggerRadiusMeters: 60,
        narrativeText: 'Los significados ocultos de edificios y monumentos históricos son ampliamente estudiados por los semiólogos, quienes estudian los símbolos y buscan sus significados ocultos. Así como en una película inspirada en Robert Langdon, el investigador protagonista del Código Da Vinci, hoy puedes desentrañar el misterio del Monumento a la Colonización Alemana.\n\n¿Por qué podemos decir que este monumento tiene múltiples significados? Entre 1846 y 1880, más de cinco mil alemanes llegaron a esta zona. Durante el proceso de inmigración alemana se llevó a cabo una importante transformación del paisaje natural, la ecología y el clima del territorio, al talarse el bosque nativo, dedicarse las tierras a la agricultura y a la ganadería, y movilizarse luego los colonos hacia Llanquihue, Osorno y el resto del sur hasta el Canal de Chacao y el Estuario de Reloncaví. La Ley de Colonización de 1845 buscaba que llegaran profesionales y gente que no tuviera mucho que perder, pero sí mucho que ganar, porque se prometió paz y prosperidad.\n\nAl observar este monumento con detención, verás que una figura destaca: la de Pichi Juan, un hombre con un hacha junto a un pequeño perro. Hoy los mapas nos guían sobre un terreno seguro, pero a los alemanes que llegaron se les dijo que encontrarían un poco más que un poblado y un poco menos que el camino directo a su casa en el lago. ¿Quién los pudo guiar? Aquí toma forma la enigmática leyenda recogida por Oreste Plath.\n\nPichi Juan era un famoso talador mapuche de mediana estatura, de tez morena y labios gruesos, de pelo negro y ojos brillantes, ansiosos de paisajes. Extraordinariamente listo, tal cual el puma. Conocía todos los vericuetos del bosque y siempre estaba pronto para sacar de apuros; muchas veces arrebataba vidas a la turbulencia de los ríos. Orientó a los colonos y les descubrió los misterios de la selva. Vicente Pérez Rosales, jefe de la Colonización, se dio cuenta de que este mapuche valía, lo invitó a integrar una caravana de exploración y le ofreció treinta pesos para que incendiara los bosques. Las llamas devoraron leguas y, durante un mes, el sol se oscureció al horizonte. La muerte del bosque ofreció a los primeros colonos los campos. Y Pichi Juan, hijo de la naturaleza bravía, fue dejado al margen por las ciudades: no se oye hablar más de él ni se sabe la fecha de su muerte. Valdivia, Osorno, Llanquihue... y hoy Puerto Montt lo tienen en su folklore.',
        audio: {
          type: 'uploaded_mp3',
          url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/103094eb-1381-4a72-a719-8ba5bc3acbf4.m4a',
          durationSeconds: 235,
          transcript: 'Este monumento tiene múltiples significados ocultos. Entre 1846 y 1880 más de cinco mil alemanes llegaron a la zona, transformando el paisaje natural: se taló el bosque nativo y la tierra se dedicó a la agricultura y la ganadería. Escondido en el bronce está Pichi Juan, el talador mapuche que guió a los colonos por la selva. Oreste Plath contó su leyenda: imprescindible para Pérez Rosales, a quien vendió la destrucción del bosque por treinta pesos. Las llamas devoraron leguas y el sol se oscureció un mes. Pichi Juan, el guía de los pioneros, terminó olvidado: no se sabe la fecha de su muerte. Hoy vive en el folklore de Puerto Montt.'
        },
        images: [
          {
            id: 'img-puertomontt-2-a',
            url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/36584e76-c841-428b-a585-241e0854fcaf_800x600.jpg',
            caption: 'El Monumento a la Colonización Alemana y la plaza que lo acoge',
            isPrimary: true
          },
          {
            id: 'img-puertomontt-2-b',
            url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/98074fab-29be-4051-95c3-c01a2fc5d5f4_800x600.jpg',
            caption: 'Los significados ocultos del bronce: colonos, leyenda y memoria'
          }
        ],
        socialLinks: {
          website: 'https://www.elviaje.cl'
        },
        documents: [],
        tips: 'Detente frente al grupo de bronce y busca a Pichi Juan: lleva un hacha y acompaña a un pequeño perro.',
        trivia: 'La leyenda de Pichi Juan, el talador mapuche guía de los colonos, fue recogida por el folclorólogo Oreste Plath en su obra sobre mitos del sur de Chile.',
        estimatedStayMinutes: 35
      },
      {
        id: 'stop-puertomontt-3',
        order: 3,
        title: 'De la Gobernación a la Plaza: Refugios y sombras',
        subtitle: 'La Gobernación, los aleros que dan refugio y la sombra de la memoria',
        category: 'history',
        location: {
          lat: -41.47184,
          lng: -72.94062,
          address: 'Gobernación Provincial, calle San Martín (Antonio Varas 410), Puerto Montt'
        },
        triggerRadiusMeters: 60,
        narrativeText: 'Gran parte de las calles de la ciudad están cubiertas con algún alero o techumbre para prestar el servicio de refugio. En la calle San Martín es la misma Gobernación la que puede ofrecer un pequeño refugio, y por cierto, es un edificio de acceso público.\n\nLa entrega definitiva de la Gobernación Provincial fue en 1950, de estilo moderno y con formas muy austeras y limpias, destacando sobre el resto porque fue uno de los primeros edificios en altura de la terraza fundacional. Este ángulo de la calle San Martín es el que permite apreciar, tal vez de mejor manera, la Plaza de Armas. Este edificio también es parte de la Ruta de la Memoria de la Región de Los Lagos (calle Antonio Varas 410).\n\nEl mismo Vicente Pérez Rosales decía que la primera plaza pública que tuvo en Chile jardín fue la de Puerto Montt, y que no lucían en ella los árboles exóticos tan codiciados en el día, sino los vistosos de permanente verde y las no comunes flores que han adornado nuestras selvas. Esta plaza ha sufrido tantas remodelaciones como intentos ha tenido el hombre por doblegar a la naturaleza. El historiador local Pablo Fábrega Zelada cuenta que en 1892 este lugar vivió una gran transformación, al construirse la Plaza Manuel José Irarrázabal, que instaló un kiosko y una glorieta, reemplazados en 1943 por un nuevo estrado para la banda de músicos, en el costado sur.\n\nEste edificio, si bien es parte de la arquitectura y el legado histórico de la ciudad, muchos lo recuerdan con recelo y temor, porque también fue el lugar donde se detuvo y se juzgó a opositores de la dictadura de Augusto Pinochet en los años setenta y ochenta. Desde aquí se puede ver la catedral, la plaza y su nueva glorieta que data del año 2003, una suerte de odeón de pequeñas dimensiones destinada a espectáculos musicales y reuniones sociales. Fue ese mismo año que la plaza retomó su nombre original: Buenaventura Martínez, el capitán de fragata que fundó Puerto Montt junto a Vicente Pérez Rosales.',
        audio: {
          type: 'uploaded_mp3',
          url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/ea9ca46f-88a3-47b9-94a9-a6c984cc0779.m4a',
          durationSeconds: 195,
          transcript: 'Frente a ti, la Gobernación Provincial: entregada en 1950, uno de los primeros edificios en altura de la terraza fundacional, de estética moderna y austera. Desde este ángulo de calle San Martín se aprecia la Plaza de Armas, la primera plaza pública de Chile que tuvo jardín, según Vicente Pérez Rosales. En 1892 se construyó la Plaza Manuel José Irarrázabal con kiosko y glorieta. Pero este edificio también guarda sombra: durante la dictadura se detuvo y juzgó aquí a opositores, y por eso hoy es parte de la Ruta de la Memoria. Desde 2003 la plaza volvió a llamarse Buenaventura Martínez, en honor al capitán que fundó la ciudad.'
        },
        images: [
          {
            id: 'img-puertomontt-3-a',
            url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/1e3344f9-251d-4315-97f3-ad7c2f8e2b57_800x600.jpg',
            caption: 'La Gobernación Provincial y el ángulo de calle San Martín que mira a la plaza',
            isPrimary: true
          },
          {
            id: 'img-puertomontt-3-b',
            url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/cdc85739-c464-432e-a651-51c2a4918e5e_800x600.jpg',
            caption: 'Refugios y sombras: los aleros del centro histórico de Puerto Montt'
          }
        ],
        socialLinks: {
          website: 'https://www.elviaje.cl'
        },
        documents: [],
        tips: 'Es un edificio público: puedes asomarte a su planta baja para conocer el patrimonio institucional de la provincia.',
        trivia: 'La Plaza de Armas de Puerto Montt fue la primera plaza pública de Chile en tener jardín, según lo registró el propio Vicente Pérez Rosales.',
        estimatedStayMinutes: 30
      },
      {
        id: 'stop-puertomontt-4',
        order: 4,
        title: 'Una Plaza... aeterna transitus',
        subtitle: 'La plaza que Rosales soñó y que más ha cambiado de Chile',
        category: 'plaza',
        location: {
          lat: -41.47179,
          lng: -72.93964,
          address: 'Plaza de Armas Capitán de Fragata Buenaventura Martínez, Puerto Montt'
        },
        triggerRadiusMeters: 60,
        narrativeText: 'Da mucho que pensar, sin pensar en conspiraciones, que Vicente Pérez Rosales, buen soñador, además de re-fundar una ciudad que ya tenía nombres, buscó remodelar y re-bautizar una plaza un tanto vaga, pero que de alguna forma ya existía con anterioridad: no se tiene una fecha clara de cómo era ni desde cuándo estaba allí.\n\nLa evidencia de sus sueños progresistas se conserva en los archivos de la colonia de Llanquihue, en la carta de don Vicente Pérez Rosales al Ministerio del Interior redactada el 18 de febrero de 1853. Allí expresa que la futura ciudad se llamará Puerto Montt y que la plaza central en cuya cabecera se colocó la primera piedra del templo dedicado al Santísimo Sacramento, obtuvo el nombre de Plaza Martínez, por ser este el primer marino chileno que tuvo la honra de anclar en un buque de guerra nacional en el citado puerto. Lo escrito fue aprobado oficialmente por el gobierno mediante un decreto supremo.\n\nAños más tarde, una nueva carta de Rosales expresaba la idea de un espacio en transición permanente: hablaba de dos plazas, una donde se encuentran la intendencia y la parroquia, y otra donde se alza el hospital y la capilla protestante. En la plaza se observaba una plantación de árboles y, en el centro, una hermosa reja circular para proteger un jardín.\n\nYa en 1872, una información oficial describe la plaza cerrada al Oeste por la intendencia y aduana, al Norte por la iglesia vice-parroquial en construcción, al Este por elegantes edificios particulares y abierta al Sur: no existía otro paseo público más que la Plaza de que acaba de hablarse. La denominación Plaza Martínez fue cambiada en 1892 por la de Manuel José Irarrázabal, aunque para la mayoría seguía siendo la Plaza de Armas.\n\n¿Cuántas veces ha cambiado este paisaje que llamamos Plaza? Esta ha sido la que más modificaciones o remodelaciones ha tenido en el tiempo desde la declaración de independencia en todo el territorio nacional. Muchos la han llamado hermosa, horrible, moderna, extraña, remodelada, indescifrable, bella y cambiante. La última remodelación responde a una iniciativa municipal y participativa llamada Plan Centro. ¿Qué te parece este lugar el día de hoy?',
        audio: {
          type: 'uploaded_mp3',
          url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/ff4a4dd8-a618-485e-8817-72e66c4eacf4.m4a',
          durationSeconds: 205,
          transcript: 'Estás en la Plaza de Armas de Puerto Montt, un espacio en transición permanente según el propio Vicente Pérez Rosales. En su carta al Ministerio del Interior de 1853 propuso llamarla Plaza Martínez, honor al primer marino chileno en anclar en el puerto. Con el tiempo fue Manuel José Irarrázabal en 1892 y, para la mayoría, siempre Plaza de Armas. Esta es la plaza que más remodelaciones ha tenido en Chile desde la independencia: la han llamado hermosa, horrible, moderna, extraña, indescifrable y cambiante. La última remodelación responde al Plan Centro. Hoy, desde tu posición, puedes juzgar este aeterna transitus con tus propios ojos.'
        },
        images: [
          {
            id: 'img-puertomontt-4-a',
            url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/89f04678-f3e0-4520-b2ae-052018befe24_800x600.jpg',
            caption: 'La Plaza de Armas de Puerto Montt, el aeterna transitus de la ciudad',
            isPrimary: true
          },
          {
            id: 'img-puertomontt-4-b',
            url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/afb3ccef-2d9c-4fef-a9b9-2c5799181f01_800x600.jpg',
            caption: 'Jardín, glorieta y kiosko: las caras de una plaza siempre remodelada'
          }
        ],
        socialLinks: {
          website: 'https://www.elviaje.cl'
        },
        documents: [],
        tips: 'Busca la glorieta que data de 2003: desde ese año la plaza recuperó oficialmente el nombre de Buenaventura Martínez.',
        trivia: 'Desde la declaración de independencia, esta plaza es la que ha sufrido más remodelaciones en todo el territorio nacional.',
        estimatedStayMinutes: 35
      },
      {
        id: 'stop-puertomontt-5',
        order: 5,
        title: 'La Catedral y los Exorcismos',
        subtitle: 'El templo de alerce, la visita papal y la "endemoniada puertomontina"',
        category: 'church',
        location: {
          lat: -41.47062,
          lng: -72.93994,
          address: 'Catedral de Puerto Montt, calle Urmeneta, Puerto Montt'
        },
        triggerRadiusMeters: 60,
        narrativeText: 'Según el libro 150 años Catedral de Puerto Montt, el historiador jesuita Eduardo Tampe establece que la primera piedra de la Catedral fue puesta en el año 1856, y prevalece como el único edificio de la época en pie hasta nuestros días.\n\nLos años no han pasado en vano: su arquitectura neoclásica ha sido testigo de importantes eventos, como la visita del Papa Juan Pablo II en el año 1987, y de otros más paranormales, como al enfrentar y combatir posesiones malignas. Su imponente frontis es el vivo ejemplo de una iglesia presente por generaciones en la vida espiritual y social de la ciudad, con un tímpano en relieve, torre hexagonal de tejuelas de cobre, madera expuesta y cuatro columnas dóricas que asemejan al Partenón de Atenas.\n\nSu torre fue construida a comienzos del siglo XX, y toda la estructura principal está compuesta por maderas nativas, conformando un sistema planar de vigas que descansan sobre 12 columnas de madera de alerce. Cuando el edificio aún no se terminaba también sirvió de teatro, y en 1880 fue ocupado como cuartel de tropas para la Guerra del Pacífico: muchos soldados que se embarcaron en un vapor de la carrera despidieron aquí a sus familias para siempre.\n\nCon la creación de la Diócesis de Puerto Montt en 1939, por el Papa Pío XII, la iglesia fue elevada a catedral. Luego, en los años sesenta, fue dañada por el terremoto de 1960, y su interior debió ser restaurado en 1975 y, por completo, en el año 2003.\n\nLo que pocos saben es que fue la misma Diócesis de Puerto Montt la que tuvo que enfrentar un episodio que conmocionó a la ciudad el año 2004: una niña mostraba claros síntomas de posesión demoníaca y el párroco Nelson González fue enviado en una misión que muchos devotos recuerdan hasta hoy como el caso de la endemoniada puertomontina. El caso dio cabida a innumerables notas de prensa, artículos y programas de televisión como El Día Menos Pensado, de Carlos Pinto.',
        audio: {
          type: 'uploaded_mp3',
          url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/f417ad7a-3fb6-4d0a-8fd9-93e24ebe80ea.m4a',
          durationSeconds: 220,
          transcript: 'La primera piedra de la Catedral se puso en 1856 y prevalece como el único edificio de la época fundacional en pie hasta hoy. De arquitectura neoclásica, fue testigo de la visita del Papa Juan Pablo II en 1987 y de eventos más paranormales. Observa sus cuatro columnas dóricas que asemejan al Partenón y sus 12 columnas de alerce. Antes de ser catedral, en 1880 fue teatro y cuartel de tropas para la Guerra del Pacífico. En 2004 conmocionó a la ciudad el caso de la endemoniada puertomontina: el párroco Nelson González fue enviado a enfrentar una presunta posesión que llenó portadas y programas como El Día Menos Pensado de Carlos Pinto.'
        },
        images: [
          {
            id: 'img-puertomontt-5-a',
            url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/057233fa-c0a2-4167-b67d-62bb59733b9d_800x600.jpg',
            caption: 'La Catedral de Puerto Montt: frontis neoclásico y torre de tejuelas de cobre',
            isPrimary: true
          },
          {
            id: 'img-puertomontt-5-b',
            url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/84ee5cf8-f1c7-4204-a391-20c4a75aecde_800x600.jpg',
            caption: 'El templo de maderas nativas que enfrentó posesiones y terremotos'
          }
        ],
        socialLinks: {
          website: 'https://www.elviaje.cl'
        },
        documents: [],
        tips: 'Entra a la catedral y observa las 12 columnas de alerce: las maderas nativas sostienen todo el peso del edificio.',
        trivia: 'El caso de la "endemoniada puertomontina" (2004) llegó a inspirar programas de televisión como El Día Menos Pensado, de Carlos Pinto.',
        estimatedStayMinutes: 35
      },
      {
        id: 'stop-puertomontt-6',
        order: 6,
        title: 'Los Fantasmas de Casa Pauly',
        subtitle: 'La mansión de 1903 que vio a Claudio Arrau y que hoy guarda misterios',
        category: 'secret',
        location: {
          lat: -41.47085,
          lng: -72.94084,
          address: 'Casa Pauly (Centro de Interpretación Cultural), Rancagua 220, Puerto Montt'
        },
        triggerRadiusMeters: 60,
        narrativeText: 'Aquí puedes conocer una de las edificaciones más antiguas de la ciudad y una de las mejor conservadas. Pero no solo verás un edificio: la historia de la familia Pauly está rodeada de tragedia, misterios y fenómenos paranormales.\n\nLa Casa Pauly fue una de las construcciones más imponentes de la ciudad en su época. Construida en 1903 para el matrimonio de Guillermo Pauly Gleisner y Teresa O\'elckers Emhard, los investigadores dicen que se veía desde la lejanía del mar al llegar en una embarcación. Posee un valor arquitectónico e histórico que la hace parte del casi extinto paisaje chilote-alemán de la época, y por ello fue declarada Monumento Nacional el año 2009.\n\nSus tres pisos superan los tres metros de altura. Su exterior se encuentra recubierto por hojalatería en cortes verticales, proveniente del viejo continente. Se ubica en la esquina de una manzana con tipología de fachada continua, ganando presencia ante las otras casas. Su decoración interior consistía en pinturas y esculturas que la convirtieron en un pequeño museo de arte.\n\nCon el tiempo, la casa se transformó en un centro social y artístico para Puerto Montt. En el sector del salón se habilitó un espacio para conciertos, con hasta 100 sillas para los invitados. Entre sus grandes eventos se encuentra el concierto realizado por el pianista Claudio Arrau en 1921, recordado como la visita más importante. El maestro Arrau realizó dos conciertos en la casa; al llegar en su segunda ocasión, ocho años después, se enteró de la trágica muerte de Ostrudis, hija mayor del matrimonio Pauly O\'elckers, envenenada por mariscos el mismo día de su boda, y por ello interpretó la Marcha Fúnebre de Chopin en su honor.\n\nEn 1947, don Guillermo Pauly fundó la Sociedad Musical de Puerto Montt, destinada a la formación de conjuntos musicales y a financiar becas para los mejores estudiantes de música de la zona. Tras años de deterioro, la casa fue sometida a una profunda restauración concluida a fines de 2024, abriendo sus puertas como Centro Cultural en febrero de 2025, con salas de exposiciones, un espacio museográfico y una sala de conciertos. Pero más allá de su legado cultural, se afirma que en este lugar se han visto fantasmas y experimentado fenómenos inexplicables.',
        audio: {
          type: 'uploaded_mp3',
          url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/0d6b2bb2-671f-48f7-bf38-12bb698e339f.m4a',
          durationSeconds: 240,
          transcript: 'Estás frente a la Casa Pauly, construida en 1903 para Guillermo Pauly Gleisner y Teresa O\'elckers. Era tan imponente que se veía desde el mar, y en 2009 fue declarada Monumento Nacional. Su salón de conciertos acogió hasta 100 invitados: allí tocó el pianista Claudio Arrau en 1921. En su segunda visita, el maestro supo de la muerte de Ostrudis Pauly, envenenada por mariscos el día de su boda, y tocó la Marcha Fúnebre de Chopin en su honor. Tras la restauración de 2024, hoy es un centro cultural público. Pero se afirma que en este lugar hay fantasmas y fenómenos inexplicables: decide tú si son sombras del pasado o algo más.'
        },
        images: [
          {
            id: 'img-puertomontt-6-a',
            url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/54044219-9e53-4dbb-a3c9-774e695c35cf_800x600.jpg',
            caption: 'Casa Pauly: la mansión de 1903 convertida en centro cultural',
            isPrimary: true
          },
          {
            id: 'img-puertomontt-6-b',
            url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/c99bb062-9a7f-4b1d-ab9e-d32bd2e414ad_800x600.jpg',
            caption: 'La casa que vio concertear a Claudio Arrau y que hoy guarda misterios'
          }
        ],
        socialLinks: {
          website: 'https://www.elviaje.cl'
        },
        documents: [],
        tips: 'Hoy es un centro cultural de acceso público: revisa la programación de salas de exposiciones y de la sala de conciertos.',
        trivia: 'Claudio Arrau tocó la Marcha Fúnebre de Chopin en Casa Pauly en honor a Ostrudis, la hija del matrimonio fallecida envenenada el día de su boda.',
        estimatedStayMinutes: 40
      },
      {
        id: 'stop-puertomontt-7',
        order: 7,
        title: 'El misterioso muelle que mira al Sur',
        subtitle: 'Un muelle de madera para mirar el sur que pobló América',
        category: 'history',
        location: {
          lat: -41.4769,
          lng: -72.9371,
          address: 'Muelle de Paseo de Puerto Montt, Paseo de la Costanera'
        },
        triggerRadiusMeters: 60,
        narrativeText: '¿Te has dado cuenta de que todo siempre mira al Norte? Desde este muelle puedes invertir un polo magnético y mirar al mar, imaginando a quienes navegaron aquí por cientos de años... mirando al sur. ¿Cuántas embarcaciones han tocado estas aguas? ¿Quiénes fueron ellas?\n\nConstruido inicialmente en madera, frente a la plaza, este moderno muelle nos muestra el sumergido recuerdo de lo que hace más de 15.000 años fue un paisaje de gigantescos bosques de alerces y cipreses que tocaban el hielo de los glaciares. Ese bosque cubrió gran parte del territorio, desde la costa hasta algunos valles interiores, y luego se hundió. Hasta mediados del siglo XIX, lo que quedó fue quemado y también extraído.\n\nA partir de 1977, el antropólogo estadounidense Tom Dillehay publicó que el sitio de Monte Verde posiblemente cambió toda forma de comprender el poblamiento. Anterior a ello se creía que el hombre había llegado únicamente por el norte de Asia. Pero hoy ya se habla de un Monte Verde de 14.500 años atrás, tal vez más antiguo, poblado por posibles navegantes provenientes del Océano Pacífico. Sin lugar a dudas ha surgido un debate científico que dice que este sitio tal vez no tiene más de 8.000 años. Lo que está claro es que sobre este tema no está todo dicho.\n\nSobre los primeros habitantes, podemos decir que su relación con el bosque y el mar fue algo fundamental. Eran nómades, y aunque aún no sabemos cómo se relacionan directamente con la cultura williche, sabemos que utilizaban medicinas similares y compartían el uso de una farmacopea botánica que ha perdurado hasta hoy.\n\nDurante los años 2011 y 2013, un equipo de arqueólogos inspeccionó el área de Pichiquillaipe, en la Carretera Austral: se registró un conchal arqueológico, además de restos de estructuras vinculables a corrales de pesca, y se advirtió la presencia de un corral de pesca de grandes dimensiones. Los vecinos del bordemar hicieron un informe enviado al Consejo de Monumentos Nacionales para postular los sitios a Monumento Histórico, valorando evidencia arqueológica que podría tener más de 6.000 años. Los herederos de este borde costero, pescadores artesanales y habitantes de la Carretera Austral, al mirar al sur se hicieron una pregunta que hoy puedes hacerte tú: ¿acaso no vendré también de este mismo lugar?',
        audio: {
          type: 'uploaded_mp3',
          url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/c907c37b-93f8-407e-9945-fd2bab03e8cd.m4a',
          durationSeconds: 225,
          transcript: 'Desde este muelle puedes invertir el polo magnético: mirar al sur, hacia donde navegaron miles de embarcaciones. Hace 15.000 años esto era un paisaje de gigantescos bosques sumergidos. Y aquí cerca se juega uno de los grandes misterios del poblamiento americano: Monte Verde, con posible presencia humana de 14.500 años, tal vez navegantes del Pacífico. En Pichiquillaipe, en la Carretera Austral, los arqueólogos registraron conchales y corrales de pesca de miles de años, postulados a Monumento Histórico. Pescadores y habitantes del borde costero se preguntan al mirar el sur: ¿no vendré también de este mismo lugar?'
        },
        images: [
          {
            id: 'img-puertomontt-7-a',
            url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/6cf0ca45-06ec-4144-84e2-90c8150ef02f_800x600.jpg',
            caption: 'El muelle de madera que mira al sur, hacia el Seno de Reloncaví',
            isPrimary: true
          },
          {
            id: 'img-puertomontt-7-b',
            url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/8ec6f7fc-c2cd-48ce-8a86-cfbb1a564129_800x600.jpg',
            caption: 'Bajo el muelle se esconde un paisaje de bosques sumergidos desde hace 15.000 años'
          }
        ],
        socialLinks: {
          website: 'https://www.elviaje.cl'
        },
        documents: [],
        tips: 'Recorre el paseo del muelle hacia el mar: en días despejados verás la isla Tenglo y, hacia el sur, el golfo de Reloncaví.',
        trivia: 'El sitio de Monte Verde, al sur de Puerto Montt, sugirió presencia humana en América de unos 14.500 años, probablemente navegantes del Pacífico.',
        estimatedStayMinutes: 40
      },
      {
        id: 'stop-puertomontt-8',
        order: 8,
        title: 'Una escultura un tanto bizarra',
        subtitle: '"Sentados frente al mar", el ícono kitsch que sobrevivió al plebiscito',
        category: 'art',
        location: {
          lat: -41.47333,
          lng: -72.94182,
          address: 'Paseo Costanera, escultura "Sentados frente al mar", Puerto Montt'
        },
        triggerRadiusMeters: 50,
        narrativeText: 'Sentados frente al mar se ha convertido en un ícono de Puerto Montt. Los pololos que se abrazan en la costanera son visitados a diario. Podrán generar risas en algunos, pero detrás de los rostros de triste expresión hay más preguntas que respuestas.\n\nRobinson Barría, su escultor, reveló la historia de su creación: No es linda y nunca lo fue, no quedé conforme con el trabajo, declaró al diario La Tercera. Con el tiempo, la obra ha generado más de una polémica: estuvo a punto de ser destruida y ganó un plebiscito local. Hoy es parada obligada de cualquier visita a la ciudad, donde los que alguna vez la quisieron derribar hoy la defienden.\n\nLa gente ha expresado su cariño. Cuando su creador va al supermercado lo reconocen y él sonríe contento, pero cree que el principal cariño se refleja cuando los niños juegan sobre la escultura, cuando turistas de todas partes del mundo se llevan un recuerdo o cuando los artesanos se inspiran en ella para crear.\n\nA pesar de las críticas a su particular estética, la obra se ha convertido en uno de los lugares más fotografiados de la ciudad: el actor Ewan McGregor, Obi-Wan Kenobi, se tomó la selfie de rigor. Durante su existencia también ha sido vandalizada en diversas ocasiones: en 2011 la pareja fue encapuchada y rayada durante la movilización estudiantil chilena de ese año, y en octubre de 2019 los rostros fueron pintados de rojo, para simular pañoletas, durante el estallido nacional.\n\nHoy es un ejemplo de la estética kitsch y surrealista, o sur-realista como dicen algunos artistas locales, una propuesta que abunda en muchos rincones de esta extraña y pintoresca ciudad. La canción que inspiró al artista es de Los Iracundos: Puerto Montt, compuesta por el vocalista Eduardo Franco y el mánager Cacho Valdez, grabada el 16 de octubre de 1968 en los estudios de la RCA Víctor en Argentina. La lírica original decía por tu amor, pero quedó definitivamente como Puerto Montt luego de algunos conciertos en que era coreada de esta manera por los fanáticos. Lo curioso: Franco compuso esta canción sin haber estado jamás en Puerto Montt y murió en 1989 sin haber conocido la ciudad. Un hecho que podemos interpretar como irónico o simplemente como otro dato bizarro que aporta a la estética de nuestro relato.',
        audio: {
          type: 'uploaded_mp3',
          url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/c626b666-cdea-4f81-a3b1-10da4499343f.m4a',
          durationSeconds: 215,
          transcript: 'La escultura Sentados frente al mar se ha convertido en el ícono kitsch de Puerto Montt. Su creador, Robinson Barría, lo admitió sin rodeos: no es linda y nunca lo fue. Estuvo a punto de ser demolida y ganó un plebiscito local: hoy la defienden quienes quisieron derribarla. Ha sido una de las más fotografiadas, incluso por Ewan McGregor. Fue vandalizada en 2011, encapuchada, y en 2019 con los rostros pintados de rojo. La inspiró la canción Puerto Montt de Los Iracundos, compuesta por Eduardo Franco, quien nunca visitó la ciudad y murió en 1989 sin conocerla. Otro hecho bizarro más para nuestra ruta.'
        },
        images: [
          {
            id: 'img-puertomontt-8-a',
            url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/5146f7e4-8307-40e9-ad9b-d9b2a7a73216_800x600.jpg',
            caption: 'Los "pololos" de la costanera: el ícono fotografiado de Puerto Montt',
            isPrimary: true
          },
          {
            id: 'img-puertomontt-8-b',
            url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/bcc1c936-45e7-4995-8e8a-f31a3b5fabaf_800x600.jpg',
            caption: 'Kitsch, surrealista y absurdamente querido: la escultura del Paseo Costanera'
          }
        ],
        socialLinks: {
          website: 'https://www.elviaje.cl'
        },
        documents: [],
        tips: 'Súmate a la foto clásica: es la escultura más fotografiada de la ciudad, incluso por celebridades internacionales.',
        trivia: 'La canción "Puerto Montt" de Los Iracundos se llamó originalmente "Por tu amor"; su autor, Eduardo Franco, murió sin haber visitado nunca la ciudad.',
        estimatedStayMinutes: 30
      },
      {
        id: 'stop-puertomontt-9',
        order: 9,
        title: 'Casa de Arte Diego Rivera y los edificios fantasma',
        subtitle: 'Diego Rivera, los Temporales Teatrales y las casonas fantasma del centro',
        category: 'art',
        location: {
          lat: -41.4709,
          lng: -72.93825,
          address: 'Casa del Arte Diego Rivera, Quillota 116, Puerto Montt'
        },
        triggerRadiusMeters: 60,
        narrativeText: 'El terremoto del 22 de mayo de 1960 destruyó una buena parte de la ciudad: casas familiares, la estación de trenes y también la Casa de Botes, donde pintores y artistas de la ciudad se reunían. Desde hace décadas, la Casa del Arte Diego Rivera ya existe: fue inaugurada el 16 de noviembre de 1964 con la concurrencia de la esposa del Presidente de México, Eva Sámano de López Mateos.\n\nEste edificio frente a la calle Antonio Varas lleva el nombre del famoso pintor y muralista mexicano Diego Rivera, en agradecimiento al pueblo de México por su generosa colaboración al construirlo como recinto para artistas y pintores de la zona. El edificio reemplazó a la fragmentada Casa de Botes; su arquitectura fue encargada a Sergio Soza, quien la terminó en 1964. Hoy es una parada obligada para apreciar sus llamativas exposiciones y para disfrutar de eventos como los Temporales Teatrales.\n\nPero tal vez te preguntarás qué había aquí antes. Puerto Montt fue fundada hace más de cien años antes del terremoto del sesenta, y sus cambios han sido muy dramáticos y rápidos. Podemos recordar a algunos de los fantasmas que deambulan por sus calles aledañas, como en su calle paralela, Urmeneta. A modo de ejemplo, donde hoy se ubica el Mall Paseo Costanera, antiguamente teníamos una estación de trenes, la estación más austral de Chile, construida en 1913 y hoy sepultada en el concreto. Tampoco podemos olvidar a los que aquí habitaron hace más de cien años y que hoy vemos como sombras, en el repicar del viento y en las gotas de lluvia resonando en los techos.\n\nEs el caso de antiguas casonas, como donde hoy está el edificio de la Cámara Chilena de la Construcción o la Caja de Compensación Los Héroes. En este último edificio, una casona alemana de tejuelas de alerce, se encontraba el restaurante de mis padres, el Balzac, fundado a comienzos de los años noventa en honor al escritor francés. Un espacio dedicado a la gastronomía local y también donde se reunía una sociedad secreta, o no tanto: el Club de la Patagonia, un grupo de amigos de tradicionales tertulias. Lo que pocos sabían era que la casa en que se reunían era habitada por los fantasmas de Decher y Geise, los topógrafos alemanes que hicieron el trazado de la ciudad.\n\nMuchas casas se las han llevado los incendios, que como viejos alerces quemados han servido para construir el bizarro progreso de una peculiar ciudad. Algunos edificios han perdurado, y puedes ver el arte de sus arquitectos plasmado por el pintor Eduardo Rosas.',
        audio: {
          type: 'uploaded_mp3',
          url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/29821c59-6242-46d9-8204-aaca9bfb2f0a.m4a',
          durationSeconds: 250,
          transcript: 'La Casa del Arte Diego Rivera fue inaugurada en 1964, en agradecimiento al pueblo de México, reemplazando a la Casa de Botes destruida por el terremoto de 1960. Su arquitectura la encargó Sergio Soza. Pero qué había aquí antes: donde hoy está el Mall Paseo Costanera funcionó la estación de trenes más austral de Chile, construida en 1913 y sepultada por el terremoto. En antiguas casonas, como donde está la Caja de Compensación Los Héroes, se reunía el Club de la Patagonia, en una casa habitada por los fantasmas de Decher y Geise, los topógrafos alemanes que trazaron la ciudad. Los incendios y el progreso se han llevado muchas casas, pero la memoria de sus fantasmas sigue entre susurros.'
        },
        images: [
          {
            id: 'img-puertomontt-9-a',
            url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/8d1957c1-cf2f-4411-865a-6229cb5d8f6d_800x600.jpg',
            caption: 'La Casa del Arte Diego Rivera, el centro cultural regalo de México a Puerto Montt',
            isPrimary: true
          },
          {
            id: 'img-puertomontt-9-b',
            url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/b8c892e5-e308-4645-b1f6-844a64fc9ada_800x600.jpg',
            caption: 'Los edificios fantasma del centro: donde hubo estación de trenes hoy hay mall'
          }
        ],
        socialLinks: {
          website: 'https://www.elviaje.cl'
        },
        documents: [],
        tips: 'Entra y pregunta por los Temporales Teatrales: es la fiesta de las artes escénicas más tradicional del sur de Chile.',
        trivia: 'Donde hoy está el Mall Paseo Costanera funcionó hasta 1960 la estación de trenes más austral de Chile, construida en 1913.',
        estimatedStayMinutes: 40
      },
      {
        id: 'stop-puertomontt-10',
        order: 10,
        title: 'El nombre secreto y profano de esta ciudad',
        subtitle: 'Cayenel, Melipulli y el nombre que se quiso hacer olvidar',
        category: 'secret',
        location: {
          lat: -41.4716,
          lng: -72.939,
          address: 'Calle Antonio Varas, barrio Cayenel, Puerto Montt'
        },
        triggerRadiusMeters: 60,
        narrativeText: 'Estás visitando una calle que hoy es lo que históricamente siempre ha sido: el barrio de la actividad económica y social de la ciudad. Antonio Varas fue ministro de Manuel Montt, y Vicente Pérez Rosales, en su libro Recuerdos del Pasado, nos hablará sobre esta extraña fundación.\n\nLo raro, o no tanto, fue nombrar calles que aparentemente ya existían con los nombres de dirigentes de la época, diciendo que Melipulli era un pedazo de tierra impreciso y que semejante denominación de ciudad no se encuentra en mapa geográfico ninguno. Melipulli es un territorio en la costa norte del Seno de Reloncaví que fue re-fundado, bautizado como el Puerto Montt que conocemos. Lo curioso es que la fundación es casi secreta y el nombre profano pasa con el tiempo a ser el nombre secreto de la ciudad de las cuatro colinas. El plan de Rosales funcionó a la perfección.\n\nRosales se refiere al nombre prohibido de Cayenel, o Callenel, como aquel donde se echaron los cimientos de ese pueblo cuyo nombre se quiere en vano hacer olvidar, y culmina el tema con una frase enigmática y casi críptica: Llámese, pues, Callenel y no Melipulli, si se quiere perpetuar el sistema español, y con él negar al César lo que sólo al César pertenece. Callenel debía ser innombrable.\n\nFue en una ceremonia en la que participaron Vicente Pérez Rosales, el comandante gobernador de Chiloé José Ramírez, el capitán de fragata Buenaventura Martínez, el párroco Miguel Sevilla y el alemán Santiago Foltz donde se tomó la iniciativa de fundar Puerto Montt en los márgenes de la bahía de esas cuatro colinas, el 12 de febrero de 1853. Cuatro meses y medio después, el 27 de junio, mediante dos decretos de gobierno, el Presidente Manuel Montt creó el Territorio de Colonización de Llanquihue y fundó oficialmente el poblado Astillero de Melipulli, en la misma fundación del Puerto Montt de Rosales. Al parecer todavía era apresurado decir a viva voz que la futura ciudad llevaría el nombre del actual presidente... aunque ese era el verdadero plan.\n\nMelipulli fue establecido como cabecera de la nueva división administrativa y Rosales quedó designado como intendente, cargo que mantuvo hasta 1854. El historiador Pablo Fábrega señala que Callenel era el nombre original que tuvo hasta 1930 el sector de calle Antonio Varas, entre calle Chillán y la subida de Vicente Pérez Rosales, que en ese entonces era el camino a Maullín, con pobladores de origen chilote que parecían perpetuar el nombre prohibido de Cayenel. Según la leyenda, provendría de un lonko mapuche-huilliche que habría vivido aquí en la época del levantamiento indígena contra los españoles, a fines del siglo XVI.',
        audio: {
          type: 'uploaded_mp3',
          url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/165e6503-6dfa-4183-80fa-413505a77341.m4a',
          durationSeconds: 230,
          transcript: 'Estás en el barrio Cayenel, el antiguo nombre secreto de este sector de la calle Antonio Varas. Rosales llamó a Melipulli un pedazo de tierra impreciso y quiso hacer olvidar el nombre de Callenel: Llámese Callenel y no Melipulli, escribió en Recuerdos del Pasado. El 12 de febrero de 1853 fundó Puerto Montt en la bahía de las cuatro colinas, y meses después el gobierno lo confirmó como Astillero de Melipulli. Hasta 1930, este tramo de Antonio Varas se llamó Callenel, hogar de pobladores chilotes y de una leyenda: la de un lonko mapuche-huilliche que vivió aquí a fines del siglo XVI. El nombre prohibido, aun así, sigue vivo.'
        },
        images: [
          {
            id: 'img-puertomontt-10-a',
            url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/9661f130-c217-4865-bdd5-4dee79af6c41_800x600.jpg',
            caption: 'La calle Antonio Varas y el barrio que guardó el nombre prohibido de la ciudad',
            isPrimary: true
          },
          {
            id: 'img-puertomontt-10-b',
            url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/abeda478-8a57-4b37-882e-63b2f9ec703b_800x600.jpg',
            caption: 'Melipulli, Callenel y Puerto Montt: los tres nombres de una misma ciudad'
          }
        ],
        socialLinks: {
          website: 'https://www.elviaje.cl'
        },
        documents: [],
        tips: 'Camina el tramo de Varas entre Chillán y la subida de Vicente Pérez Rosales: hasta 1930 esta zona se llamó Callenel.',
        trivia: 'Según la leyenda, Cayenel proviene de un lonko mapuche-huilliche que vivió en este sector a fines del siglo XVI.',
        estimatedStayMinutes: 35
      },
      {
        id: 'stop-puertomontt-11',
        order: 11,
        title: 'La Intendencia y la Morgue',
        subtitle: 'El ex hospital regional que guarda una morgue y altas jerarquías',
        category: 'secret',
        location: {
          lat: -41.4722,
          lng: -72.9401,
          address: 'Edificio del Gobierno Regional (ex Hospital Regional), Antonio Varas 410, Puerto Montt'
        },
        triggerRadiusMeters: 60,
        narrativeText: 'Dicen que aquí no solo encontrarás reparticiones públicas del gobierno: aquí habitaron los muertos de una ciudad. Son los fantasmas que no siempre se pueden ver, aunque si esto es posible, puede ser porque desean ser recordados.\n\nTe recordamos que si bien la Intendencia Regional de Los Lagos es un edificio público, siempre debes pedir autorización y ser respetuoso si deseas realizar una investigación paranormal. Es un edificio visible desde muchos puntos de la ciudad: hemos llegado a un justo equilibrio entre austeridad y necesidad, fueron las palabras del intendente Leonardo de la Prida en 2018, cuando se realizó su última remodelación. Aunque este edificio no siempre albergó a la alta jerarquía del Gobierno Regional: a veces olvidamos que este lugar también fue un hospital.\n\nFue aquí que el primero de febrero de 1938 se inauguraba el Hospital Regional de Puerto Montt, una moderna construcción con capacidad para 200 camas, ubicada en el área de la actual Intendencia Regional. En 1942 ya lo describían como un amplio edificio de arquitectura moderna, proyectado teniendo en cuenta todos los adelantos en materia de construcción hospitalaria. En él, 10 religiosas de la Inmaculada Concepción se encargaban de la capilla, cocina, lavandería y ropería, cuidando además el orden, el aseo y la moralidad del establecimiento. En el segundo cuerpo del edificio, de tres pisos, estaban los servicios de hospitalización: medicina en el primer piso, maternidad y niños en el segundo, cirugía en el tercero, y la morgue, como es habitual, en el subterráneo.\n\nEste hospital, gravemente dañado por el terremoto de 1960, contaba entre sus directores al Dr. Juan Hollstein. Fue abandonado entre el 11 y 12 de febrero de 1972, pero antes de ello sucedió un trágico acontecimiento que merece ser recordado. La Intendencia Regional solo se reubicaría aquí en los años ochenta, pero la morgue de la ciudad funcionó aquí hasta los setenta. Fueron años complejos para el servicio de salud, si consideramos lo acontecido desde el terremoto de 1960 hasta la Matanza de Pampa Irigoin de 1969, cuando gran parte de las casas lucían banderas a media asta y crespones negros, expresando el luto al paso de un cortejo fúnebre acompañado por miles de personas en silencio. Hoy recordamos a todos los muertos que han habitado este lugar.',
        audio: {
          type: 'uploaded_mp3',
          url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/ca07261d-b4ed-4827-a7ef-e1a25be3af0c.m4a',
          durationSeconds: 240,
          transcript: 'Este edificio hoy alberga reparticiones públicas, pero aquí habitaron los muertos de una ciudad. En 1938 se inauguró el Hospital Regional, con capacidad para 200 camas: medicina en el primer piso, maternidad y niños en el segundo, cirugía en el tercero y la morgue en el subterráneo. Gravemente dañado por el terremoto de 1960, fue abandonado en febrero de 1972, y la morgue funcionó aquí hasta los años setenta. La Intendencia y el Gobierno Regional llegaron en los ochenta. Fueron años donde la muerte rondó la ciudad, desde el terremoto hasta la Matanza de Pampa Irigoin de 1969. Los fantasmas de este edificio, dicen, se pasean de lado a lado, deseando ser recordados. Hoy recordamos a todos los muertos que lo habitaron.'
        },
        images: [
          {
            id: 'img-puertomontt-11-a',
            url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/8d9de1c8-8e03-4c9e-9ee8-3b0ed2acb095_800x600.jpg',
            caption: 'El edificio del Gobierno Regional, sede del ex Hospital Regional de 1938',
            isPrimary: true
          },
          {
            id: 'img-puertomontt-11-b',
            url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/912e6757-ebb8-487e-a0ed-18d652b58dc4_800x600.jpg',
            caption: 'Un lugar de altas jerarquías que guardó una morgue en su subterráneo'
          }
        ],
        socialLinks: {
          website: 'https://www.elviaje.cl'
        },
        documents: [],
        tips: 'Es un edificio público: aprecia su arquitectura desde la vereda y solicita autorización para cualquier actividad especial.',
        trivia: 'El hospital de 1938 tenía la morgue en el subterráneo; fue abandonado en febrero de 1972 y la Intendencia se instaló aquí en los años ochenta.',
        estimatedStayMinutes: 35
      },
      {
        id: 'stop-puertomontt-12',
        order: 12,
        title: 'El "Caso Roswell" de Puerto Montt',
        subtitle: 'El Ovni de Pelluco: la gran luz violácea del 31 de julio de 1965',
        category: 'secret',
        location: {
          lat: -41.4874,
          lng: -72.8993,
          address: 'Balneario Pelluco, borde costero, Puerto Montt'
        },
        triggerRadiusMeters: 80,
        narrativeText: 'Si continúas por el camino a Pelluco por el bordemar verás un ejemplo de cómo se ha conectado un pequeño balneario con el centro de la ciudad. Aquí descubrirás que la Plaza de Armas es el kilómetro cero de la Carretera Austral. Por tanto, si caminas por la costanera podrías llegar hasta Pelluco, su primer poblado enigmático, disfrutando del paisaje.\n\nHay relatos de antiguos parroquianos que aseveran haber sido contactados o abducidos por ovnis en este camino, que antiguamente conectaba la línea férrea y que hoy acompaña un sendero para bicicletas y transeúntes. La mayor evidencia hasta hoy es el caso del ovni de Pelluco, que aquí podemos llamar el Roswell de Puerto Montt, aunque los hechos son muy diferentes a los de ese emblemático caso ufológico.\n\nEn la madrugada del viernes 31 de julio de 1965, recién pasada la medianoche, un fuerte estruendo se sintió sobre el cielo de Puerto Montt y sus alrededores. En el balneario de Pelluco, un nutrido grupo de personas que asistía al velatorio de Carolina Proeschle, una adolescente perteneciente a una distinguida familia de la zona que había fallecido dos días antes en un accidente automovilístico, también escuchó el ruido. Al salir a ver de qué se trataba, vieron algo inexplicable y sorprendente.\n\nLos numerosos testigos hablaban de una gran luz violácea y palpitante, además de interesantes detalles de su forma y movimiento que quedaron registrados en entrevistas y documentos. Este caso ha sido tan emblemático que fue parte del programa OVNIS de TVN entre 1999 y 2000, con los testimonios de un carabinero y de un veterinario que vivía ahí. Son numerosas las evidencias de este misterioso encuentro del segundo tipo, que según los ufólogos no han dejado de ser claves en la búsqueda por una respuesta a este enigmático fenómeno.\n\nDesde la perspectiva antropológica se cree que puede ser una forma más moderna de enfrentar algunos fenómenos naturales inexplicables, que antiguamente pueden haber estado asociados a la brujería, en especial por estas latitudes. Lo cierto es que los acontecimientos y sus repercusiones sociales no tienen una clara explicación hasta el día de hoy. ¿Para qué un ovni succionaría tierra de ese lugar y se la llevaría a quién sabe dónde? La investigación tampoco ha sido fácil para el antropólogo local Wladimir Soto, porque ciertos testigos son reacios a hablar. Su libro Lo extraño es nuestro: El caso Pelluco 1965 y el encuentro que no fue en isla Tenglo 1978 puede ayudarte a ahondar en este misterio.',
        audio: {
          type: 'uploaded_mp3',
          url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/d240ca7d-9f6b-4b1c-bf3d-39fb9f3cdab5.m4a',
          durationSeconds: 205,
          transcript: 'Estás en el camino a Pelluco, donde la Plaza de Armas es el kilómetro cero de la Carretera Austral. En la madrugada del 31 de julio de 1965, un estruendo sacudió el cielo de Puerto Montt. En el velatorio de Carolina Proeschle, los presentes vieron algo inexplicable: una gran luz violácea y palpitante sobre el balneario. El caso se conoció como el Roswell de Puerto Montt y llegó al programa OVNIS de TVN con el testimonio de un carabinero y un veterinario. Los ufólogos hablan de un encuentro del segundo tipo; los antropólogos, de otra forma de explicar lo natural. ¿Para qué un ovni succionaría tierra del lugar? El misterio sigue sin respuesta: decide tú qué viste esta noche en el cielo de Pelluco.'
        },
        images: [
          {
            id: 'img-puertomontt-12-a',
            url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/245d1def-2660-482f-a2ba-304f0cfc130e_800x600.jpg',
            caption: 'El balneario de Pelluco: el cielo del "Caso Roswell" de Puerto Montt',
            isPrimary: true
          },
          {
            id: 'img-puertomontt-12-b',
            url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/8399d918-98ad-4082-a265-166bde7004ea_800x600.jpg',
            caption: 'El bordemar hacia Pelluco, escenario del ovni de 1965'
          }
        ],
        socialLinks: {
          website: 'https://www.elviaje.cl'
        },
        documents: [],
        tips: 'Recorre el sendero peatonal que antiguamente unía la línea férrea: el borde costero a Pelluco es ideal para el atardecer.',
        trivia: 'El caso llegó al programa OVNIS de TVN (1999-2000), con los testimonios de un carabinero y un veterinario que vivía en el sector.',
        estimatedStayMinutes: 45
      },
      {
        id: 'stop-puertomontt-13',
        order: 13,
        title: 'Animita Fortuoso o Fructuoso Soto',
        subtitle: 'La animita de Bellavista y el fervor popular de las ánimas',
        category: 'secret',
        location: {
          lat: -41.4738,
          lng: -72.918,
          address: 'Sector Bellavista, altura calle Las Quemas, cerca de la iglesia Santo Toribio de Mogrovejo, Puerto Montt'
        },
        triggerRadiusMeters: 60,
        narrativeText: 'Hoy puedes descubrir las animitas que se ven en todo el continente latinoamericano. Aquí podrás asombrarte con expresiones de devoción y fe popular. El culto latente de las ánimas es para todos: nos revela la mezcla de las religiones propias de los pueblos originarios junto a las viejas creencias de colonos y visitantes.\n\nSe cuenta que por el año 1920, en la ciudad de Puerto Montt, más precisamente en el sector alto denominado Las Quemas, hoy calle Las Quemas, aconteció el asesinato de Fructuoso Soto, un joven agricultor de tan sólo 19 años. Se señala que Fructuoso se encontraba enamorado de una lugareña, pero sufría el rechazo de los familiares de la muchacha. Aquella noche, el joven cruzaba los oscuros parajes del sector cuando se le vinieron encima dos bribones que lo truncaron del caballo. Una vez en el suelo, lo patearon, lo apalearon y lo acuchillaron hasta dejarlo agónico. Se dice que agonizó 48 horas, hasta que fue descubierto por algún alma piadosa que recorría la zona, aunque esta no pudo más que brindarle consuelo en su hora final.\n\nEsta versión de los hechos responde a la investigación de Oreste Plath sobre la animita de Fructuoso Soto. Vale la pena reflexionar sobre la importancia que tienen las animitas para el imaginario colectivo y la cosmovisión popular: bastó que alguien le pidiera un favor o milagro a este espíritu en pena, muerto trágicamente, para que su respuesta satisfactoria fuera recompensada con una casita, una placa o una vela para que su alma encuentre el camino, todo en eterno agradecimiento.\n\nHoy sabemos que las animitas que visitamos guardan al menos tres versiones de una leyenda urbana que ha ido creciendo con el tiempo. Por ello han sido foco de estudios sociales, como el del estudiante Mauro Solís Cabrera, que ejecutó un Fondart para su puesta en valor, instalando el concepto de paisaje cultural-patrimonial. Las animitas, además, fueron protagonistas de un radioteatro producido por Teatro Infinito en la popular Radio Cuarta Colina de esta misma ciudad.\n\nEstá ubicada en el sector Bellavista, cercana a la iglesia Santo Toribio de Mogrovejo. Desde el terminal de buses pasan los colectivos Bellavista-Miraflores y puedes pedir que te dejen en el sector de la animita.',
        audio: {
          type: 'uploaded_mp3',
          url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/db657cb4-c733-49fa-8983-a07ba8933d80.m4a',
          durationSeconds: 220,
          transcript: 'Estás frente a la animita de Fructuoso Soto, el joven agricultor de 19 años asesinado cerca de 1920 en el sector alto de Las Quemas. Enamorado y rechazado, fue tumbado del caballo, apaleado y acuchillado, y agonizó 48 horas. La versión la recogió Oreste Plath. Bastó que alguien le pidiera un favor al espíritu en pena para que su hogar se llenara de casitas, placas y velas: la devoción popular crece con cada milagro. Hoy existen al menos tres versiones de su leyenda, y la animita es un paisaje cultural-patrimonial digno de estudio, protagonista incluso de un radioteatro. Las ánimas mezclan la fe de los pueblos originarios con las creencias de colonos y visitantes: mira la casita y decide si pides un favor.'
        },
        images: [
          {
            id: 'img-puertomontt-13-a',
            url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/1f2f987d-acd0-41cd-8d22-1d5f65bc9726_800x600.jpg',
            caption: 'La animita de Bellavista: devoción popular y fe de las ánimas',
            isPrimary: true
          },
          {
            id: 'img-puertomontt-13-b',
            url: 'https://media.izi.travel/8644e3da-5d68-4ec5-b191-3b789bb05899/d06b3e83-f28f-4251-ab1f-30399147c047_800x600.jpg',
            caption: 'Casitas, placas y velas: el eterno agradecimiento al espíritu de Fructuoso Soto'
          }
        ],
        socialLinks: {
          website: 'https://www.elviaje.cl'
        },
        documents: [],
        tips: 'Si vienes desde el terminal de buses, los colectivos Bellavista-Miraflores te dejan en el sector de la animita.',
        trivia: 'Bastó que alguien pidiera un favor al espíritu en pena para que su hogar se colmara de casitas, placas y velas: la devoción popular crece con cada milagro.',
        estimatedStayMinutes: 30
      }
    ],
    routePolyline: [
      [-41.4747, -72.9391],
      [-41.4733, -72.941],
      [-41.47184, -72.94062],
      [-41.47179, -72.93964],
      [-41.47062, -72.93994],
      [-41.47085, -72.94084],
      [-41.4769, -72.9371],
      [-41.47333, -72.94182],
      [-41.4709, -72.93825],
      [-41.4716, -72.939],
      [-41.4722, -72.9401],
      [-41.4874, -72.8993],
      [-41.4738, -72.918]
    ]
  }
];

export const sampleTours = INITIAL_TOURS;
