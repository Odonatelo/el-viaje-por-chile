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
        url: '/pdf/doc-mapa-carretera-austral.pdf',
        size: '75 KB',
        description: 'Mapa hidrográfico, tiempos de navegación lacustre, estaciones de combustible y miradores panorámicos.'
      },
      {
        id: 'doc-geologia-marmol',
        name: 'Ficha Científica: Geomorfología y Cavernas de Carbonato de Calcio.pdf',
        type: 'guide',
        url: '/pdf/doc-geologia-marmol.pdf',
        size: '68 KB',
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
    wikilocRoute: {
      name: 'Carretera Austral (Chile) - Ruta MTB',
      url: 'https://es.wikiloc.com/rutas-mountain-bike/carretera-austral-chile-2590269'
    }
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
        url: '/pdf/doc-mapa-valpo.pdf',
        size: '69 KB',
        description: 'Plano con arquitectura de chapa, ubicación de funiculares y miradores icónicos.'
      },
      {
        id: 'doc-fauna-costa',
        name: 'Guía de Campo: Aves Costeras y Flora Urbana de Chile Central.pdf',
        type: 'guide',
        url: '/pdf/doc-fauna-costa.pdf',
        size: '69 KB',
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
    wikilocRoute: {
      name: 'Cerro Concepcion - Valparaiso (recorrido a pie)',
      url: 'https://es.wikiloc.com/rutas-senderismo/cerro-concepcion-valparaiso-150774033'
    }
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
        url: '/pdf/doc-plano-stgo-colonial.pdf',
        size: '609 KB',
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
        url: '/pdf/doc-guia-geologia-atacama.pdf',
        size: '69 KB',
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
    wikilocRoute: {
      name: 'Ruta Valle de la Luna (ciclismo)',
      url: 'https://es.wikiloc.com/rutas-ciclismo/valle-de-la-luna-9465370'
    }
  },
  {
    id: 'tour-torres-del-paine',
    title: 'Circuito W de Torres del Paine: Base Torres · Valle Francés · Glaciar Grey',
    tagline: 'La travesía clásica de la Patagonia chilena, con datos actualizados 2026, refugios, entradas en línea y la opción del Circuito O',
    description: 'Audioguía producida por El Viaje Por Chile (www.elviaje.cl) en colaboración con guías de montaña y guardaparques CMS 37121, con información validada con CONAF, el portal oficial pasesparques.cl y los operadores Las Torres Patagonia y Vertice Patagonia (temporada 2025–2026). Diez hitos imprescindibles del Circuito W, la ruta más popular del Parque Nacional Torres del Paine: la entrada de Laguna Amarga, el sector de Las Torres y su subida por el valle del Ascencio hasta la laguna de morrena, los Cuernos del Paine, el Campamento Italiano y el Valle del Francés, el Refugio Paine Grande con el lago Pehoé, el Salto Grande y el mirador del Glaciar Grey. Junto con las referencias de temporada, viento, descensos y reserva de camas y campings. El circuito "W" se muestra en detalle y se menciona la alternativa integral del Circuito "O" (El Macizo del Paine), de 130 kilómetros alrededor de la Cordillera de Paine.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Cuernos_del_Paine%2C_Parque_Nacional_Torres_del_Paine%2C_Chile1.jpg/1280px-Cuernos_del_Paine%2C_Parque_Nacional_Torres_del_Paine%2C_Chile1.jpg',
    city: 'Torres del Paine',
    country: 'Chile',
    category: 'nature',
    language: 'Español',
    durationMinutes: 7200,
    distanceKm: 85.0,
    difficulty: 'moderate',
    rating: 5.0,
    reviewsCount: 580,
    featured: true,
    published: true,
    createdAt: '2026-01-05T07:00:00Z',
    updatedAt: '2026-09-12T10:00:00Z',
    author: {
      name: 'Expedición Tienda El Viaje Patagonia',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
      role: 'Guías de Montaña & Guardaparques (CMS 37121)',
      bio: 'Apasionados por la preservación de los Campos de Hielo Sur y la fauna patagónica. Colaboran con CONAF y los operadores del parque: Las Torres Patagonia y Vertice Patagonia, validando información 2025–2026 sobre entradas, refugios y trazados de los circuitos W y O.',
      verified: true
    },
    socialLinks: {
      instagram: 'https://instagram.com/tiendaelviaje',
      website: 'https://www.tiendaelviaje.cl'
    },
    generalDocuments: [
      {
        id: 'doc-entradas-w',
        name: 'Entradas y Reservas Torres del Paine 2025-2026 (pasesparques.cl).pdf',
        type: 'pdf',
        url: '/pdf/doc-entradas-w.pdf',
        size: '70 KB',
        description: 'Nuevo sistema de tickets sectoriales vigente desde el 1 de mayo de 2026: pases por sector (Full Day vehículo, Base Torres, Circuito W, Circuito Macizo Paine), multitarifa según nacionalidad, descuentos residentes chilenos, exenciones y cupos diarios por sector. Incluye cómo reservar refugios y campings con Las Torres Patagonia y Vertice Patagonia, y del catamarán Pudeto-Paine Grande.'
      },
      {
        id: 'doc-w-vs-o',
        name: 'Circuito W vs O: trazados, distancias y dónde dormir.pdf',
        type: 'guide',
        url: '/pdf/doc-w-vs-o.pdf',
        size: '72 KB',
        description: 'La W en detalle (4–6 días, 63–85 km): Base Torres (20 km ida y vuelta, 8 h, +780 m), Valle del Francés y Glaciar Grey, con tiempos y desniveles por tramo. La O (7–10 días, ~130 km) con el tramo unidireccional Paso John Gardner (1.200 msnm) entre Los Perros y Guardería Paso, y campamentos Dickson, Los Perros y Serón. Estado actual: campamentos CONAF Italiano y Paso cerrados, temporada de refugios oct–abril.'
      },
      {
        id: 'doc-clima-seguridad',
        name: 'Clima, Seguridad y Equipamiento Patagónico.pdf',
        type: 'guide',
        url: '/pdf/doc-clima-seguridad.pdf',
        size: '58 KB',
        description: 'Las cuatro estaciones en un día, vientos de 50 a 100 km/h en los pasos abiertos, heladas sobre la morrena de Base Torres y el frente de Grey. Recomendaciones: sistema de capas, cortaviento y agua, bastones, microspikes temprana temporada, reservas con meses de anticipación para dic–feb, registro obligatorio en guarderías, prohibición de fuego y de acampar fuera de áreas habilitadas, y respeto por los cierres climáticos que CONAF declara (como el que afectó al Paso John Gardner en diciembre de 2025).'
      }
    ],
    stops: [
      {
        id: 'stop-paine-1',
        order: 1,
        title: 'Laguna Amarga: la Puerta del Parque',
        subtitle: 'Registro, entradas en línea y el primer mirador del macizo',
        category: 'nature',
        location: {
          lat: -50.975385,
          lng: -72.746718,
          address: 'Guardería Laguna Amarga, acceso norte del Parque Nacional Torres del Paine, Ruta Y-150'
        },
        triggerRadiusMeters: 80,
        narrativeText: 'Bienvenido al Parque Nacional Torres del Paine. Este puesto de control de CONAF, a orillas de la laguna que da nombre a la entrada, es el punto de registro del sector norte del parque. Aquí se valida la entrada comprada en línea en pasesparques.cl y se entrega el mapa oficial de senderos.\n\nDesde el 1 de mayo de 2026 rige el nuevo sistema de tickets sectoriales: existen pases de un día para miradores accesibles en vehículo y pases multi-día para los circuitos de trekking como la W o la O, con cupos diarios limitados por sector, descuentos para residentes chilenos, y menores de 12 y mayores de 60 years exentos. Lleva siempre tu cédula de identidad, pasaporte o documento de extranjería: te lo pedirán en cada guardería del recorrido.\n\nDesde la laguna, de aguas variables y salobres donde suelen avistarse flamencos chilenos, el camino se adentra entre bosques de ñirre y coigüe hacia el valle del río Ascensio. Los buses del Terminal de Puerto Natales (2½ horas) te dejan aquí, y los shuttles del sector te acercan hasta el Hotel y sector Las Torres. Los vehículos privados se estacionan en este sector: más allá no hay paso vehicular sin permiso.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 160,
          voiceName: 'Zephyr',
          transcript: 'Estás en Laguna Amarga, la puerta de entrada del sector norte del Parque Nacional Torres del Paine. Registro de CONAF: tu entrada comprada en línea con la validación, de ach a La andas pero el nuevo sistema sectorial en pasesparques.cl. Desde mayo 2026 hay pases de un día y pases multi-día para circuitos como la W, con cupos diarios. Lleva siempre tu documento de identidad. Desde aquí, los buses y shuttles te adentran al valle del río Ascensio, entre bosques de ñirre, coigüe y flamencos estacionales.'
        },
        images: [
          {
            id: 'img-paine-cap-1',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Laguna_Amarga%2C_Torres_Del_Paine%2C_Chile_%2840227664191%29.jpg/1280px-Laguna_Amarga%2C_Torres_Del_Paine%2C_Chile_%2840227664191%29.jpg',
            caption: 'Laguna Amarga, la entrada clásica del sector norte del parque',
            isPrimary: true
          },
          {
            id: 'img-paine-cap-2',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Torres_del_Paine_massif_from_Laguna_Amarga.jpg/1280px-Torres_del_Paine_massif_from_Laguna_Amarga.jpg',
            caption: 'El macizo del Paine asomando tras la laguna'
          }
        ],
        youtubeUrl: 'https://www.youtube.com/watch?v=5rT8ZkYm1V4',
        socialLinks: {
          website: 'https://pasesparques.cl'
        },
        documents: [],
        tips: 'Compra tu entrada online antes de salir de Puerto Natales: en vacaciones los cupos por sector se agotan con días de anticipación y la portada móvil del ticket es válida en cada guardería.',
        trivia: 'El parque recibe entre 250 y 300 mil visitantes por temporada; la entrada de Laguna Amarga concentra la mayor parte del flujo del sector noreste.',
        estimatedStayMinutes: 30
      },
      {
        id: 'stop-paine-2',
        order: 2,
        title: 'Sector Las Torres y Valle del Ascencio',
        subtitle: 'El corazón logístico de la W orienta',
        category: 'nature',
        location: {
          lat: -50.973160,
          lng: -72.874976,
          address: 'Hotel Las Torres y refugios Central y Norte, inicio del sendero Base Torres, valle del río Ascensio'
        },
        triggerRadiusMeters: 80,
        narrativeText: 'Sector Las Torres, el corazón logístico de la W oriental. Aquí conviven el Hotel Las Torres, los refugios Central y Norte y el EcoCamp, todos operados por Las Torres Patagonia, y desde aquí parten la mayoría de los recorridos. El sendero más famoso de la W es el de Base Torres: 20 kilómetros ida y vuelta, unas 8 horas de caminata y 780 metros de desnivel positivo, con altitud máxima de 870 msnm en el mirador.\n\nArranca remontando el valle del río Ascensio, cruzando pasarelas sobre el agua que baja fundida de los glaciares de Torres y las laderas del monte Almirante Nieto, por un bosque nativo de lenga, coigüe y ñirre: la ruta que completarás en dos horas y media hasta Refugio Chileno y, más allá, hasta la morrena.\n\nEn términos de planificación, este es también el punto de donde parten los buses y shuttles de regreso a Puerto Natales o Punta Arenas al final de la travesía. Si tu opción es el Circuito O, ten presente que el tramo continuo a la W sale de aquí hacia el campamento Serón, donde el pase del Casa Macizo Paine exige registro y cupos.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 155,
          voiceName: 'Puck',
          transcript: 'Sector Las Torres, el corazón de la W oriental: Hotel Las Torres, refugios Central y Norte y EcoCamp. Aquí empieza el sendero Base Torres: veinte kilómetros ida y vuelta, ocho horas y setecientos ochenta metros de desnivel, subiendo por el valle del río Ascensio y el Almirante Nieto, entre lengas y coigües. En dos horas y media llegas a Refugio Chileno, y de ahí, la morrena final. Regresarás aquí desde Puerto Natales al terminar la W.'
        },
        images: [
          {
            id: 'img-paine-lt-1',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Torres_del_Paine_%282051943559%29.jpg/1280px-Torres_del_Paine_%282051943559%29.jpg',
            caption: 'Las Torres del Paine asomando sobre el valle del sector Las Torres',
            isPrimary: true
          }
        ],
        socialLinks: {
          website: 'https://lastorres.com'
        },
        documents: [],
        tips: 'Planifícate para salir al amanecer: la ida y vuelta a Base Torres toma todo el día y conviene marchar con luz de sobra.',
        trivia: 'Los nombres "Torre Sur, Central y Norte" corresponden a las tres agujas de granito que dominan el circo del valle del Ascencio, de 2.600 a 2.850 msnm.',
        estimatedStayMinutes: 60
      },
      {
        id: 'stop-paine-3',
        order: 3,
        title: 'Refugio Chileno: el último techo de la subida',
        subtitle: 'Bosque de lenga, pasarelas y la antesala de la morrena',
        category: 'nature',
        location: {
          lat: -50.957245,
          lng: -72.910648,
          address: 'Refugio y Camping Chileno, sendero Base Torres, valle del Ascencio'
        },
        triggerRadiusMeters: 70,
        narrativeText: 'A cuatro kilómetros del sector Las Torres, tras cerca de dos horas y media de marcha, llegas a Refugio y Camping Chileno, gestionado por Las Torres Patagonia. Es el último lugar techado antes del ascenso final a la base de las torres: un camping pequeño, con pocos sitios de tienda y servicio de cocina, que por eso hay que reservar con mucha antelación.\n\nEl camino entre bosque de lenga gana altura mientras el rugido del río Ascensio se pierde bajo el dosel de hojas. Este tramo es el favorito de la fauna: carpinteros magallánicos, churrines y la inconfundible caiquén arriba del valle.\n\nDesde Chileno comienza el tramo más duro del día: un kilómetro y medio de ascenso rocoso por la morrena, con las agujas recortándose cada vez más arriba. Aquí es donde más se nota el viento de la tarde: lo ideal es coronar la base de las torres a media mañana y comenzar el descenso antes de que las rachas se intensifiquen.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 150,
          voiceName: 'Charon',
          transcript: 'Refugio Chileno, el último techo antes de la morrena. Un camping pequeño y muy cotizado: reserva con meses. El sendero sube entre lengas mientras el río Ascensio queda abajo. Desde aquí, el tramo duro: kilómetro y medio de roca hasta la base de las torres. Consejo de guardaparque: corona a media mañana y baja antes de que el viento de la tarde te haga firmar la morrena.'
        },
        images: [
          {
            id: 'img-paine-ch-1',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Caballos_ante_los_Cuernos_del_Paine%2C_Parque_Nacional_Torres_del_Paine%2C_Chile1.jpg/1280px-Caballos_ante_los_Cuernos_del_Paine%2C_Parque_Nacional_Torres_del_Paine%2C_Chile1.jpg',
            caption: 'Caballos del sector Las Torres, compañeros habituales del valle',
            isPrimary: true
          }
        ],
        socialLinks: {
          website: 'https://lastorres.com'
        },
        documents: [],
        tips: 'Si quieres amanecer en Base Torres sin salir de madrugada, duerme en Chileno; si no, puedes partir desde Central a las 5:30 dejando el equipo pesado en el refugio.',
        trivia: 'El refugio toma su nombre del puente colgante que cruza el río Ascensio, construido en su día por la familia chilena que dio origen al topónimo.',
        estimatedStayMinutes: 40
      },
      {
        id: 'stop-paine-4',
        order: 4,
        title: 'Mirador Base Torres',
        subtitle: 'Las tres agujas de granito y su laguna de morrena',
        category: 'nature',
        location: {
          lat: -50.942668,
          lng: -72.949663,
          address: 'Mirador Base Torres, laguna glaciar de morrena a 870 msnm, valle del Ascencio'
        },
        triggerRadiusMeters: 60,
        narrativeText: 'Aquí está el clásico final: la laguna turquesa de morrena reflejando las tres torres de granito. La caminata total desde el sector Las Torres es de 20 kilómetros, 8 horas y unos 780 metros de desnivel, con la transición final sobre piedras inestables: medio kilo de roca por paso, por eso este tramo se hace con paso firme y bastones.\n\nLas torres Sur, Central y Norte, de 2.600 a 2.850 metros sobre el nivel del mar, se alzan sobre el valle del Ascencio como agujas blancas de lodolita: la roca sedimentaria que las corona y que contrasta con el gris del granito. El viento viene del oeste cada tarde, así que la ventana ideal de luz es el amanecer, entre noviembre y abril.\n\nRecomendación actualizada 2026: verifica el parte oficial de CONAF para el sector Base Torres antes de partir. Hay cupos diarios en el sendero y el registro de entrada se hace en la guardería del sector: no te saltes el control. Si el cielo amanece tapado, muchos guías sugieren esperar hasta el mediodía: el viento suele despejar el circo en cuestión de horas.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 165,
          voiceName: 'Fenrir',
          transcript: 'Mirador Base Torres: la laguna de morrena frente a las torres de granito. Veinte kilómetros y ocho horas ida y vuelta, con la morrena final sobre roca suelta: paso firme y bastones. Las torres, de 2.600 a 2.850 metros, son de granito coronado por lodolita blanca. El viento del oeste implacable por la tarde: la luz del amanecer es tu ventana. Consulta el parte oficial de CONAF: el sector tiene cupos diarios y registro obligatorio.'
        },
        images: [
          {
            id: 'img-paine-bt-1',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Las_Torres%2C_Torres_del_Paine%2C_Chile.jpg/1280px-Las_Torres%2C_Torres_del_Paine%2C_Chile.jpg',
            caption: 'Las tres torres de granito sobre la laguna de morrena',
            isPrimary: true
          }
        ],
        youtubeUrl: 'https://www.youtube.com/watch?v=5rT8ZkYm1V4',
        socialLinks: {
          website: 'https://parquetorresdelpaine.cl'
        },
        documents: [],
        tips: 'Lleva microspikes en noviembre y principios de diciembre: la morrena puede conservar hielo a la sombra de la mañana.',
        trivia: 'La cumbre que se ve más alta es la Central, con 2.800 metros, aunque la Sur (2.850) es la frontera: las tres fueron coronadas recién en la década de 1970.',
        estimatedStayMinutes: 120
      },
      {
        id: 'stop-paine-5',
        order: 5,
        title: 'Refugio Los Cuernos y Lago Nordenskjöld',
        subtitle: 'Los Cuernos del Paine y la costa de los lagos glaciares',
        category: 'nature',
        location: {
          lat: -51.023889,
          lng: -72.985389,
          address: 'Refugio y Cabañas Los Cuernos, costa sur del Lago Nordenskjöld, sendero a Valle del Francés'
        },
        triggerRadiusMeters: 80,
        narrativeText: 'La W cruza el valle de cuernos: desde el sector de Chileno el sendero desciende y atraviesa la costa del lago Nordenskjöld hasta Refugio y Cabañas Los Cuernos, a los pies mismos de la cumbre bicéfala del macizo. Un camino de 10 a 12 kilómetros con el lago glaciar a tu derecha.\n\nLos Cuernos del Paine, con sus dos pitones separados y su característica franja clara de arenisca sobre el granito oscuro, son el símbolo fotográfico del parque. Aunque el pase permite parar en el Mirador Cuernos de la ruta o hacer el tramo a El Credo, la jornada se completa normalmente acampando o refugiándote aquí para seguir mañana al Campamento Italiano.\n\nDesde la costa del Nordenskjöld se ven los glaciares de la cara norte del macizo y, si tienes suerte, huemules pastando en la tundra entre los bosques. El tramo es de los más expuestos al viento de la W: en diciembre y enero las rachas pueden superar los 80 km/h en la tarde.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 150,
          voiceName: 'Kore',
          transcript: 'Refugio Los Cuernos, a la orilla del lago Nordenskjöld. Diez a doce kilómetros desde Chileno con el lago a tu lado. Los Cuernos del Paine, sus dos pitones y la franja de arenisca clara sobre el granito, son el símbolo del parque. Desde la costa, si tienes suerte, huemules entre la tundra. Tramo expuesto: el viento de la tarde puede pasar los ochenta kilómetros por hora.'
        },
        images: [
          {
            id: 'img-paine-cu-1',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Cuernos_del_Paine%2C_Parque_Nacional_Torres_del_Paine%2C_Chile5.jpg/1280px-Cuernos_del_Paine%2C_Parque_Nacional_Torres_del_Paine%2C_Chile5.jpg',
            caption: 'Los Cuernos del Paine desde el nivel del lago',
            isPrimary: true
          }
        ],
        socialLinks: {
          website: 'https://lastorres.com'
        },
        documents: [],
        tips: 'Haz el tramo del lago en la mañana: a mediodía el viento del sudoeste convierte el sendero abierto en la sección más cansada de toda la W.',
        trivia: 'La franja clara de los Cuernos corresponde a una capa de arenisca del Cretácico, distinta del granito basal del macizo, y da al cerro su doble color característico.',
        estimatedStayMinutes: 90
      },
      {
        id: 'stop-paine-6',
        order: 6,
        title: 'Campamento Italiano, la puerta del Valle del Francés',
        subtitle: 'El codo central de la W: donde el valle se vuelve anfiteatro',
        category: 'nature',
        location: {
          lat: -51.026923,
          lng: -73.040428,
          address: 'Campamento Italiano (cerrado, acceso diurno), boca del Valle del Francés'
        },
        triggerRadiusMeters: 70,
        narrativeText: 'El Campamento Italiano, apertura clave del sendero del Valle del Francés, se encuentra en la confluencia del río Francés con el sendero regional de la W. Desde la temporada 2025–2026, el campamento CONAF permanece cerrado al pernocte: se puede pasar de día, pero para dormir hay que usar los dominios de Frances o el propio Paine Grande.\n\nEste es el vértice central de la W, el lugar donde el sendero sube al más hermoso de los valles colgados del parque. Desde aquí se aprecia el cerro Paine Grande, el más alto del macizo (3.040 m), y el acceso al anfiteatro glaciar del Francés: una pared de mil metros rematada por el glaciar colgante del mismo nombre.\n\nComo es un paso de día, planifica tu mochila: deja el equipo pesado en el refugio y sube con agua, comida ligera, cortaviento y tu reserva mental de tiempo: el Valle del Francés es un típico "valle de niebla" que se despeja a mediodía.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 150,
          voiceName: 'Zephyr',
          transcript: 'Campamento Italiano, la puerta del Valle del Francés. Desde la temporada 2025-2026 el camping CONAF está cerrado: se pasa de día, pero se duerme en Frances o en Paine Grande. Aquí está el vértice central de la W, bajo el cerro Paine Grande y el anfiteatro glaciar del Francés. Deja la mochila pesada y sube ligero: es un valle de niebla que se abre al mediodía.'
        },
        images: [
          {
            id: 'img-paine-it-1',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Torres_de_Paine_Valle_Frances_contraste.jpg/960px-Torres_de_Paine_Valle_Frances_contraste.jpg',
            caption: 'El Valle del Francés entre el granito y el hielo',
            isPrimary: true
          }
        ],
        socialLinks: {
          website: 'https://lastorres.com'
        },
        documents: [],
        tips: 'Consulta con la guardería el estado del sendero del Francés: tras nevadas o viento extremo, el tramo alto puede cerrarse temporalmente por desprendimientos de seracs.',
        trivia: 'El valle fue nombrado por la cordada franco-chilena que exploró la zona a inicios del siglo XX; el glaciar del Francés cuelga a casi 1.000 metros sobre el valle.',
        estimatedStayMinutes: 40
      },
      {
        id: 'stop-paine-7',
        order: 7,
        title: 'Mirador Francés',
        subtitle: 'Glaciar colgante, anfiteatro granítico y vistas al cuerno sur',
        category: 'nature',
        location: {
          lat: -50.999399,
          lng: -73.054772,
          address: 'Valle del Francés, sendero al Mirador Francés (y Británico), sitio delimitado por guardería'
        },
        triggerRadiusMeters: 80,
        narrativeText: 'El Valle del Francés es la joya central de la W: un anfiteatro granítico abierto a mediodía donde los glaciares del Francés y del Cerro de los Cuernos cuelgan de las paredes a más de mil metros. Desde el Campamento Italiano, dos horas de subida te llevan al Mirador Francés, el punto clásico para detenerse y contemplar el glaciar que vierte al valle.\n\nEl tramo al Mirador Británico agrega otra hora y media y abre la vista más amplia del frente: tres glaciares rodeando el valle, con Paine Grande dominando el horizonte. En verano, al mediodía, el sol golpea el circo y el deshielo dispara frecuentes desprendimientos de hielo: el ruido del glaciar "corriendo" es una de las experiencias sonoras inolvidables de la Patagonia.\n\nRecomendación actualizada 2026: consulta el parte de senderos en la guardería de Claudia (o Italiano); la W exige registrar el tramo y respetar los cierres por avalancha que suelen activarse tras los deshielos rápidos.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 160,
          voiceName: 'Puck',
          transcript: 'Mirador Francés: el anfiteatro central de la W. Dos horas de subida desde Italiano; el Británico, una hora y media más, abre la vista triple del frente glaciar. Al mediodía el sol golpea el circo y los seracs se desprenden: escucha cómo corre el hielo. Parte 2026: registra tu tramo en la guardería y respeta los cierres por avalancha.'
        },
        images: [
          {
            id: 'img-paine-fr-1',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Torres_de_Paine_Valle_Frances_lago.jpg/1280px-Torres_de_Paine_Valle_Frances_lago.jpg',
            caption: 'El Valle del Francés: lagos glaciares bajo las murallas del macizo',
            isPrimary: true
          }
        ],
        socialLinks: {
          website: 'https://parquetorresdelpaine.cl'
        },
        documents: [],
        tips: 'Sube temprano y baja antes de las 15:00: la nube que sube por el valle cada tarde te quitará la vista justo en las mejores horas de luz.',
        trivia: 'El Valle del Francés alberga el salto de agua más alto del parque y es casa del tordo colorado y del cóndor andino, que sobrevuela el circo en las tardes despejadas.',
        estimatedStayMinutes: 150
      },
      {
        id: 'stop-paine-8',
        order: 8,
        title: 'Refugio Paine Grande y Lago Pehoé',
        subtitle: 'El vértice occidental de la W y el turquesa del lago',
        category: 'nature',
        location: {
          lat: -51.072652,
          lng: -73.093782,
          address: 'Refugio y Camping Paine Grande (Vertice Patagonia), orilla norte del Lago Pehoé'
        },
        triggerRadiusMeters: 80,
        narrativeText: 'El Refugio Paine Grande de Vertice Patagonia es el tercer vértice de la W y el más dotado del parque: restorán, bar, tienda de provisiones, carga de dispositivos y el mítico pan de la zona. Se llega desde el Valle del Francés en unas dos horas y media, o tras media hora de catamarán desde el embarcadero de Pudeto: el "Hielos Patagónicos" cruza las aguas turquesas del lago Pehoé a los pies de Paine Grande.\n\nEl lago, de color lechoso azulado por los sedimentos glaciares en suspensión, es uno de los paisajes más fotografiados de la Patagonia: refleja los Cuernos y el macizo. Su superficie cambia con cada racha de viento; en invierno llega a congelarse en las orillas.\n\nDesde aquí, tu penúltima etapa: Refugio Grey está a 11 kilómetros y unas 4 horas de marcha. Es el tramo de despedida de la W, y también el punto donde se decide si cerrarás la travesía desde el oeste con la navegación turística del Lago Grey, opción que permite acortar el retorno.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 160,
          voiceName: 'Charon',
          transcript: 'Refugio Paine Grande, el vértice occidental de la W. El más dotado del parque: restorán, bar, mercado y carga. Llegas por el Valle del Francés o por el catamarán desde Pudeto, cruzando el lago Pehoé turquesa. Desde aquí, once kilómetros hasta Refugio Grey: la etapa de despedida de la W, o el tramo que cierra la O.'
        },
        images: [
          {
            id: 'img-paine-pg-1',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Lago_Pehoe_y_Torres_del_Paine_-_panoramio.jpg/1280px-Lago_Pehoe_y_Torres_del_Paine_-_panoramio.jpg',
            caption: 'El lago Pehoé con los Cuernos y el macizo de fondo',
            isPrimary: true
          },
          {
            id: 'img-paine-pg-2',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Cuernos_del_Paine%2C_Parque_Nacional_Torres_del_Paine%2C_Chile1.jpg/1280px-Cuernos_del_Paine%2C_Parque_Nacional_Torres_del_Paine%2C_Chile1.jpg',
            caption: 'Los Cuernos del Paine, símbolo de la octava maravilla del mundo'
          }
        ],
        socialLinks: {
          website: 'https://verticepatagonia.travel'
        },
        documents: [],
        tips: 'Aprovecha el mercado de Paine Grande para provisionarte antes del Grey: luego los precios suben y la oferta se reduce a lo esencial.',
        trivia: 'El lago Pehoé, además de postal, es el escenario del famoso mirador de las "primeras luces" del macizo, y su color lechoso viene de las rocas molidas por los glaciares.',
        estimatedStayMinutes: 90
      },
      {
        id: 'stop-paine-9',
        order: 9,
        title: 'Mirador Salto Grande',
        subtitle: 'El desagüe estruendoso entre Nordenskjöld y Pehoé',
        category: 'nature',
        location: {
          lat: -51.067652,
          lng: -73.006562,
          address: 'Mirador Salto Grande, sector del camino a Pudeto, acceso vehicular y sendero corto'
        },
        triggerRadiusMeters: 60,
        narrativeText: 'El Salto Grande es la cañería natural por la que el lago Nordenskjöld vierte sus aguas al Pehoé: una pasada rápida de agua glaciares de más de 10 metros de desnivel, con bancos de niebla y, en deshielo, una fuerza que se oye antes de verse.\n\nSe visita con un sendero corto de 15-20 minutos desde el estacionamiento del sector del camino a Pudeto, o como desvío de un minuto desde la ruta continental del circuito W. Es el punto clásico de las excursiones de un día y el lugar preferido de los fotógrafos para combinar el agua con los Cuernos y el cerro Paine Grande.\n\nPara quienes hacen la W con el catamarán Pudeto-Paine Grande, muchos guías proponen tomar el mirador antes o después de la navegación: reservar la embarcación con holgura permite cerrar el arco de la W en el día o dejarlo para el regreso del Grey.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 140,
          voiceName: 'Fenrir',
          transcript: 'Mirador Salto Grande: el desagüe del lago Nordenskjöld hacia el Pehoé. Una caída de más de diez metros que se oye antes de verse, ideal para combinar agua, Cuernos y Paine Grande en una sola foto. Sendero corto de veinte minutos desde el camino a Pudeto; perfecto como desvío antes o después del catamarán.'
        },
        images: [
          {
            id: 'img-paine-sg-1',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Torres_del_Paine%2C_Salto_Grande_1.jpg/1280px-Torres_del_Paine%2C_Salto_Grande_1.jpg',
            caption: 'La cascada Salto Grande entre los lagos Nordenskjöld y Pehoé',
            isPrimary: true
          },
          {
            id: 'img-paine-sg-2',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Salto_Grande%2C_Torres_Del_Paine%2C_Chile_2.JPG/1280px-Salto_Grande%2C_Torres_Del_Paine%2C_Chile_2.JPG',
            caption: 'El estruendo del Salto Grande en su cañón glaciar'
          }
        ],
        socialLinks: {
          website: 'https://parquetorresdelpaine.cl'
        },
        documents: [],
        tips: 'El mejor horario es mediodía o última hora: con sol bajo, el spray del salto forma arcoíris que se fotografían de frente contra el macizo.',
        trivia: 'El Salto Grande fue bautizado por la expedición italiana de 1986 que recorría la zona, en homenaje a la caída homónima de los Campos de Hielo Sur.',
        estimatedStayMinutes: 30
      },
      {
        id: 'stop-paine-10',
        order: 10,
        title: 'Refugio Grey y Mirador del Glaciar Grey',
        subtitle: 'El frente de hielo del Campo de Hielo Sur',
        category: 'nature',
        location: {
          lat: -51.002160,
          lng: -73.181325,
          address: 'Refugio y Camping Grey (Vertice Patagonia), costa del Lago Grey'
        },
        triggerRadiusMeters: 80,
        narrativeText: 'El cierre de la W: 11 kilómetros y unas 4 horas de camino desde Paine Grande, con un ascenso intermedio de 388 metros, hasta el Refugio Grey de Vertice Patagonia, a orillas del lago del mismo nombre y frente al gigante de hielo.\n\nEl Glaciar Grey, rama del Campo de Hielo Patagónico Sur, mide unos 19 kilómetros de largo y 6 de frente, con alturas de 30 metros por sobre el agua: los icebergs que se desprenden surcan el lago durante días antes de derretirse. El sendero del mirador recorre la costa hasta un balcón natural con vista total al frente y, si el tiempo lo permite, a los glaciares colindantes.\n\nRecomendación actualizada 2026: el tramo final de la W puede cerrarse temporalmente por parte de CONAF cuando el viento supera las rachas de seguridad (como ocurrió en cerradas de diciembre 2025). Consulta el parte antes de salir de Paine Grande, reserva con anticipación (los cupos en Refugio Grey son limitadísimos) y, si tu mochila lo permite, suma la navegación de una hora por el lago hasta el frente del glaciar: la postal del iceberg flotante no se olvida nunca.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 170,
          voiceName: 'Kore',
          transcript: 'Refugio Grey, el final de la W. Once kilómetros y cuatro horas desde Paine Grande frente al glaciar del mismo nombre: diecinueve kilómetros de largo, seis de frente y treinta metros de altura; sus icebergs surcan el lago por días. 2026: consulta el parte de CONAF, reserva con meses, la cama escasea. Si puedes, navega una hora hasta el frente del hielo: la postal no se olvida.'
        },
        images: [
          {
            id: 'img-paine-gr-1',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Glaciar_Grey%2C_Parque_Nacional_Torres_del_Paine%2C_Chile4.jpg/1280px-Glaciar_Grey%2C_Parque_Nacional_Torres_del_Paine%2C_Chile4.jpg',
            caption: 'El frente del Glaciar Grey desde el nivel del lago',
            isPrimary: true
          },
          {
            id: 'img-paine-gr-2',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Glaciar_Grey%2C_Parque_Nacional_Torres_del_Paine%2C_Chile5.jpg/1280px-Glaciar_Grey%2C_Parque_Nacional_Torres_del_Paine%2C_Chile5.jpg',
            caption: 'El glaciar y las aguas turbias del lago Grey'
          },
          {
            id: 'img-paine-gr-3',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Grey_Glacier_icebergs_Stevage.jpg/1280px-Grey_Glacier_icebergs_Stevage.jpg',
            caption: 'Icebergs a la deriva frente al frente de hielo'
          }
        ],
        socialLinks: {
          website: 'https://verticepatagonia.travel'
        },
        documents: [],
        tips: 'Reserva Refugio Grey con meses de anticipación (disponibilidad desde octubre a abril); la navegación de Lago Grey se reserva en el refugio y los turnos de mañana se llenan primero.',
        trivia: 'En el frente de Grey arriba también la gran navegación de los vértices: es el acceso norte del Circuito O, que continúa por Los Perros y el Paso John Gardner (1.200 msnm), cerrado unidireccionalmente y por climas extremos en lo más crudo del invierno.',
        estimatedStayMinutes: 150
      }
    ],
    wikilocRoute: {
      name: 'Circuito W - Torres del Paine (trekking)',
      url: 'https://es.wikiloc.com/rutas-alpinismo/circuito-w-torres-del-paine-689260'
    }
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
        url: '/pdf/doc-guia-colchagua.pdf',
        size: '68 KB',
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
        url: '/pdf/doc-flora-selva-valdiviana.pdf',
        size: '68 KB',
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
        url: '/pdf/doc-mapa-iglesias-chiloe.pdf',
        size: '81 KB',
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
        url: '/pdf/doc-historia-lota.pdf',
        size: '54 KB',
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
        url: 'https://mma.gob.cl/wp-content/uploads/2018/06/Cielos_2018_Chilean_Skies.pdf',
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
    wikilocRoute: {
      name: 'Cerro Las Mollacas - Valle de Elqui',
      url: 'https://es.wikiloc.com/rutas-senderismo/cerro-las-mollacas-154878328'
    }
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
        url: '/pdf/doc-ficha-chena.pdf',
        size: '56 KB',
        description: 'Altitud 952 msnm, superficie 1.390 ha, cobertura arbórea 30-40% y normativa PRC San Bernardo y Calera de Tango.'
      },
      {
        id: 'doc-huaca-chena',
        name: 'Estudio: La huaca del cerro Chena, arquitectura sagrada del pueblo inca (Bustamante, 1996).pdf',
        type: 'archive',
        url: '/pdf/doc-huaca-chena.pdf',
        size: '72 KB',
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
            url: '/pdf/doc-huaca-chena-stop.pdf',
        size: '65 KB',
            description: 'Carta con la planta del sitio, la morfología de puma y las visuales de los solsticios.'
          }
        ],
        tips: 'Respeta el vallado y no muevas piedras: el sitio sufre abandono y vandalismo y requiere protección.',
        trivia: 'Aunque se escribió "pucará", significa "fortaleza"; la comunidad científica prefiere "huaca" (waka), lugar sagrado.',
        estimatedStayMinutes: 45
      }
    ],
    wikilocRoute: {
      name: 'Cerro Chena - San Bernardo (circular)',
      url: 'https://es.wikiloc.com/rutas-senderismo/cerro-chena-san-bernardo-232916251'
    }
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
        url: '/pdf/doc-ficha-cantera.pdf',
        size: '64 KB',
        description: 'Altura 51 msnm, superficie aproximada 7 ha, densa cobertura vegetal y 4 canteras en su interior.'
      },
      {
        id: 'doc-guia-florafauna-cantera',
        name: 'Guía de flora y fauna: Huilli, Lirio de campo y Chercán.pdf',
        type: 'brochure',
        url: '/pdf/doc-guia-florafauna-cantera.pdf',
        size: '72 KB',
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
        url: '/pdf/doc-ruta-gastronomica-muermina.pdf',
        size: '50 KB',
        description: 'Mapa de la ruta autoguiada: accesos por las rutas V-50 y V-60, caletas, dunas y los restaurantes del circuito muermino.'
      },
      {
        id: 'doc-chungungo',
        name: 'Ficha de conservación: El chungungo (Lontra felina).pdf',
        type: 'brochure',
        url: 'https://clasificacionespecies.mma.gob.cl/wp-content/uploads/2019/10/Lontra_felina_P07.pdf',
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
        url: '/pdf/doc-guia-puerto-montt-bizarro.pdf',
        size: '52 KB',
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
  },
  {
    id: 'tour-lago-llanquihue',
    title: 'El Lago Llanquihue y los Pioneros Alemanes: Naturaleza y Herencia Teutona',
    tagline: 'Audioguía Oficial El Viaje Por Chile • Lago Llanquihue, volcán Osorno y las ciudades de madera de la colonización',
    description: 'Audioguía producida por El Viaje Por Chile (www.elviaje.cl). Recorre el circuito del segundo lago más grande de Chile y la cuna de la colonización alemana en el sur: el paseo costero de Puerto Varas frente al volcán Osorno, la iglesia neogótica de madera del Sagrado Corazón, la tradición musical de Frutillar con su Teatro del Lago, el muelle histórico de Puerto Octay y las aguas turquesa de los Saltos del Petrohué en el parque nacional más antiguo del país.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Volcan_Osorno%2C_Lago_Llanquihue%2C_Puerto_Varas.JPG/1280px-Volcan_Osorno%2C_Lago_Llanquihue%2C_Puerto_Varas.JPG',
    city: 'Puerto Varas y Cuenca del Lago Llanquihue',
    country: 'Chile',
    category: 'nature',
    language: 'Español',
    durationMinutes: 120,
    distanceKm: 78.0,
    difficulty: 'easy',
    rating: 5.0,
    reviewsCount: 320,
    featured: true,
    published: true,
    createdAt: '2026-09-12T09:00:00Z',
    updatedAt: '2026-09-12T09:00:00Z',
    author: {
      name: 'Juan Carlos Castaing',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      role: 'Especialista en Patrimonio y Rutas de Chile',
      bio: 'Guía de expedición en el sur de Chile, consultor de interpretación del patrimonio natural y cultural y creador en El Viaje Por Chile.',
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
        id: 'doc-ruta-lago-llanquihue',
        name: 'Guía de Ruta: Cuenca del Lago Llanquihue, circuito a orillas del lago.pdf',
        type: 'pdf',
        url: '/pdf/doc-ruta-lago-llanquihue.pdf',
        size: '65 KB',
        description: 'Mapa del circuito lacustre, tiempos de viaje entre localidades, miradores del volcán Osorno y recomendaciones de navegación.'
      },
      {
        id: 'doc-colonizacion-alemana',
        name: 'Ficha Histórica: Colonización Alemana del Lago Llanquihue, 1852-1875.pdf',
        type: 'guide',
        url: '/pdf/doc-colonizacion-alemana.pdf',
        size: '54 KB',
        description: 'Historia de la colonización, los barcos de veleros, la industria maderera, los tranques de manzanos y la arquitectura de madera.'
      }
    ],
    stops: [
      {
        id: 'stop-llanquihue-1',
        order: 1,
        title: 'Lago Llanquihue y Volcán Osorno',
        subtitle: 'El espejo de agua más grande del sur y el cono perfecto vigilante',
        category: 'nature',
        location: {
          lat: -41.31716,
          lng: -72.98161,
          address: 'Costanera de Puerto Varas, paseo peatonal frente al lago, Puerto Varas'
        },
        triggerRadiusMeters: 60,
        narrativeText: 'Estás frente al Lago Llanquihue, con casi 860 kilómetros cuadrados el segundo lago más grande de Chile, superado solo por el General Carrera en la Patagonia. Su forma irregular recuerda huellas de un gigante: en realidad es el resultado de las grandes glaciaciones, cuando los hielos avanzaron y esculpieron esta cubeta que hoy reúne aguas frías y transparentes de origen glacial.\n\nDel otro lado del espejo de agua, como un centinela, se levanta el volcán Osorno. Su cono casi perfecto, coronado de nieves eternas a 2.652 metros de altura, es uno de los íconos geográficos más fotografiados de Chile. Aunque parece dormido, es un estratovolcán activo: su última gran erupción ocurrió en 1835 según los reportes de Charles Darwin, que lo contempló desde la isla de Chiloé. Aún hoy se aprecian sus fumarolas, recordándonos que ladera abajo el paisaje entero está hecho de su lava.\n\nPara los mapuche-huilliche, el Osorno era un ser sagrado encadenado al lago. Cuentan que Tren Tren Vilú, la serpiente de la tierra, y Cai Cai Vilú, la del mar, disputaron la suerte del mundo en estas tierras, y que el volcán guarda el eco de aquella pelea. Mientras tanto, los colonos alemanes que llegaron en 1852 fundaron Puerto Varas a orillas de estas aguas, y hoy el lago les devuelve el reflejo de su herencia en cada ciudad que bordea.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 165,
          voiceName: 'Zephyr',
          transcript: 'Frente a ti, el Lago Llanquihue: el segundo más grande de Chile, con casi 860 kilómetros cuadrados de agua glacial. Al otro lado se eleva el volcán Osorno, un cono perfecto de 2.652 metros, activo aunque parece dormido. Darwin observó su erupción de 1835 desde Chiloé. Para los mapuche-huilliche, el Osorno es el guardián del lago, protagonista de la pelea eterna entre las serpientes Tren Tren Vilú y Cai Cai Vilú. En 1852, los colonos alemanes fundaron Puerto Varas junto a esta orilla. El volcán, dicen, vigila cada reflejo del lago.'
        },
        images: [
          {
            id: 'img-llanquihue-1-a',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Volcan_Osorno%2C_Lago_Llanquihue%2C_Puerto_Varas.JPG/1280px-Volcan_Osorno%2C_Lago_Llanquihue%2C_Puerto_Varas.JPG',
            caption: 'El volcán Osorno nevado sobre el Lago Llanquihue, visto desde la costanera de Puerto Varas',
            isPrimary: true
          },
          {
            id: 'img-llanquihue-1-b',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Volcan_Osorno_y_Lago_Llanquihue.JPG/1280px-Volcan_Osorno_y_Lago_Llanquihue.JPG',
            caption: 'El cono perfecto del Osorno y las aguas heladas del Lago Llanquihue'
          }
        ],
        socialLinks: {
          website: 'https://www.conaf.cl'
        },
        documents: [],
        tips: 'Madruga o ven al atardecer: con luz rasante el volcán se pinta de rosado y el lago alcanza un azul profundo. El viento del oeste levanta oleaje por la tarde, así que la mejor hora para fotografiar la costa es por la mañana.',
        trivia: 'El lago Llanquihue es el segundo más grande de Chile con unos 860 km², y el volcán Osorno es un estratovolcán de 2.652 m cuya erupción de 1835 fue registrada por Charles Darwin.',
        estimatedStayMinutes: 30
      },
      {
        id: 'stop-llanquihue-2',
        order: 2,
        title: 'Iglesia del Sagrado Corazón de Puerto Varas',
        subtitle: 'La joya neogótica de madera de la ciudad de las rosas',
        category: 'monument',
        location: {
          lat: -41.32059,
          lng: -72.98606,
          address: 'Iglesia del Sagrado Corazón, calle Verbo Divino 499, Puerto Varas'
        },
        triggerRadiusMeters: 50,
        narrativeText: 'Esta es quizá la iglesia de madera más famosa de Chile. La Iglesia del Sagrado Corazón fue construida en 1918 con alerce y raulí, las maderas nobles del bosque valdiviano, siguiendo el estilo neogótico bávaro que los colonos alemanes trajeron consigo en sus memorias de la Selva Negra.\n\nLos pobladores cargaban cada pieza labrada del interior desde la costanera, a varias cuadras de aquí, porque no había caminos mecanizados. El resultado es una estructura que parece sacada de un cuento centroeuropeo, con su torre que se alza por sobre los tejados y su reloj que marca el pulso de la ciudad.\n\nPuerto Varas, la ciudad de las rosas, nació en 1854 como un asentamiento de colonos alemanes llegados por el lago. Los apellidos fundadores, los tejidos de lana, los kuchen y las casas de dos aguas con jardines floridos son el legado vivo de aquella colonización. La iglesia, declarada Monumento Nacional, es el corazón espiritual de esa comunidad y uno de los pocos templos del sur que sigue orientando su fachada directamente hacia el volcán Osorno, como si la fe y el paisaje se miraran de frente.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 150,
          voiceName: 'Puck',
          transcript: 'Estás frente a una de las iglesias de madera más famosas de Chile. Construida en 1918 con alerce y raulí, su estilo neogótico bávaro recuerda la Selva Negra. Las piezas del interior llegaron cargadas a mano desde la costanera, sin caminos, por los propios colonos alemanes. Puerto Varas nació en 1854, la ciudad de las rosas, y esta iglesia, Monumento Nacional, es el corazón de su comunidad. Su fachada mira directo al volcán Osorno: la fe y el paisaje, frente a frente.'
        },
        images: [
          {
            id: 'img-llanquihue-2-a',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/00_1691_Church_of_Puerto_Varas_%28Chile%29.jpg/1280px-00_1691_Church_of_Puerto_Varas_%28Chile%29.jpg',
            caption: 'La iglesia del Sagrado Corazón, joya neogótica de madera de Puerto Varas',
            isPrimary: true
          },
          {
            id: 'img-llanquihue-2-b',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Puerto_Varas_-Iglesia_del_Sagrado_Corazon_f01.jpg/1280px-Puerto_Varas_-Iglesia_del_Sagrado_Corazon_f01.jpg',
            caption: 'La fachada de la iglesia con su torre y el estilo bávaro de la colonización'
          }
        ],
        socialLinks: {
          website: 'https://www.munipuertovaras.cl'
        },
        documents: [],
        tips: 'La iglesia es un templo activo: visítala en horario de misa o consulta los horarios de visita para no interrumpir las celebraciones de la comunidad.',
        trivia: 'La iglesia fue construida en 1918 en alerce y raulí, está declarada Monumento Nacional y es el emblema de Puerto Varas, la ciudad de las rosas fundada por colonos alemanes en 1854.',
        estimatedStayMinutes: 25
      },
      {
        id: 'stop-llanquihue-3',
        order: 3,
        title: 'Frutillar Bajo y el Teatro del Lago',
        subtitle: 'La capital musical del sur y la postal de los molinos de agua',
        category: 'history',
        location: {
          lat: -41.13945,
          lng: -73.02527,
          address: 'Teatro del Lago y costanera de Frutillar Bajo, Avenida Bernardo Philippi 1000, Frutillar'
        },
        triggerRadiusMeters: 60,
        narrativeText: 'Bienvenido a Frutillar, la ciudad que nació en 1856 junto a un tranque de manzanos, pero que hoy es conocida en el mundo entero por su música y su arquitectura de madera.\n\nEstás en Frutillar Bajo, el barrio que abraza la orilla del lago. Aquí las casas de tablas teñidas, los jardines floridos y los históricos molinos de agua componen una de las postales más hermosas del sur de Chile. El Museo Colonial Alemán, más arriba, conserva la vida de los pioneros: sus herramientas, sus muebles tallados y su kuchen, aún horneado según recetas de más de un siglo.\n\nPero el gran protagonista es el Teatro del Lago, la imponente sala de madera inaugurada en 2010 que se asoma al lago Llanquihue como un barco varado. Gibilterra del sur, Frutillar levantó aquí la primera sala acústica diseñada para conciertos de nivel internacional en el sur del país. Cada verano, el Festival Internacional de Música de Frutillar, heredero de la tradicional Semana Musical, reúne a solistas y orquestas de todo el mundo en este escenario, transformando a esta pequeña ciudad portuaria en la capital musical del sur de Chile.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 165,
          voiceName: 'Charon',
          transcript: 'Bienvenido a Frutillar, nacida en 1856 junto a un tranque de manzanos. Estás en Frutillar Bajo, el barrio de la orilla: casas de tablas teñidas, jardines y los molinos de agua de las postales. El Museo Colonial Alemán conserva la vida de los pioneros y su kuchen, horneado con recetas de más de un siglo. Y aquí, el Teatro del Lago, inaugurado en 2010, se asoma al agua como un barco de madera. Cada verano, el Festival Internacional de Música de Frutillar convierte esta ciudad en la capital musical del sur de Chile.'
        },
        images: [
          {
            id: 'img-llanquihue-3-a',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Frutillar-Theatro-del-Lago-1030906-PSD.jpg/1280px-Frutillar-Theatro-del-Lago-1030906-PSD.jpg',
            caption: 'El Teatro del Lago de Frutillar, la sala de madera frente al lago Llanquihue',
            isPrimary: true
          },
          {
            id: 'img-llanquihue-3-b',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Frutillar-Theatro-del-Lago-1030909.jpg/1280px-Frutillar-Theatro-del-Lago-1030909.jpg',
            caption: 'La arquitectura del Teatro del Lago y la costanera de Frutillar Bajo'
          }
        ],
        socialLinks: {
          website: 'https://www.teatrodellago.cl'
        },
        documents: [],
        tips: 'Combina la visita con un paseo por el Museo Colonial Alemán y una parada en los cafés de la costanera; pregunta por el kuchen recién horneado.',
        trivia: 'El Teatro del Lago se inauguró en 2010 y el Festival Internacional de Música de Frutillar, heredero de la Semana Musical, es uno de los encuentros clásicos más importantes de Sudamérica.',
        estimatedStayMinutes: 40
      },
      {
        id: 'stop-llanquihue-4',
        order: 4,
        title: 'Puerto Octay y su Muelle Histórico',
        subtitle: 'El puerto lacustre que movió el trigo y los sueños del norte del lago',
        category: 'history',
        location: {
          lat: -40.97276,
          lng: -72.88422,
          address: 'Plaza de Puerto Octay y muelle histórico, orilla norte del Lago Llanquihue'
        },
        triggerRadiusMeters: 60,
        narrativeText: 'Llegamos a Puerto Octay, el pueblo que mira el lago desde el norte y que guarda, casi intacto, el aire de una época dorada. Fue fundado en 1893 como puerto de embarque y estuvo llamada a ser la gran ciudad lacustre del circuito.\n\nDurante décadas, el trigo producido en los campos de Osorno y Río Negro llegaba en carretas hasta su muelle, y desde aquí cruzaba el Lago Llanquihue en barcos a vapor hasta Puerto Varas y Puerto Montt. La temporada de embarque, entre enero y marzo, convocaba a cientos de trabajadores; en su mejor momento, decenas de barcos zarparon hacia la capital regional.\n\nLa llegada del ferrocarril y luego las carreteras asfaltadas dejaron al muelle sin su función portuaria. Pero Puerto Octay quedó detenido en el tiempo: su iglesia de madera, sus casonas de techo a dos aguas y el famoso puente lacustre que se adentra en las aguas son hoy un patrimonio declarado. El muelle, el mismo por donde salió tanta riqueza, se ha convertido en la pasarela favorita de pescadores y de quienes buscan ver el volcán Osorno reflejado sobre el lago al atardecer, en una de las panorámicas más silenciosas del sur de Chile.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 155,
          voiceName: 'Fenrir',
          transcript: 'Puerto Octay, fundado en 1893, fue el gran puerto del norte del lago. El trigo de Osorno llegaba en carretas hasta su muelle y cruzaba el Lago Llanquihue en barcos a vapor hacia Puerto Varas y Puerto Montt. Cuando llegaron el ferrocarril y las carreteras, el muelle perdió su oficio, y el pueblo quedó detenido en el tiempo. Hoy su iglesia de madera, sus casonas y la pasarela que se adentra en el lago son patrimonio: el lugar perfecto para ver el Osorno reflejado al atardecer.'
        },
        images: [
          {
            id: 'img-llanquihue-4-a',
            url: 'https://upload.wikimedia.org/wikipedia/commons/2/21/Puerto_Octay_2.jpg',
            caption: 'El pueblo de Puerto Octay y su costa sobre el Lago Llanquihue',
            isPrimary: true
          },
          {
            id: 'img-llanquihue-4-b',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Puerto_Octay_Correos.jpg/1280px-Puerto_Octay_Correos.jpg',
            caption: 'El edificio de Correos y el patrimonio arquitectónico de Puerto Octay'
          }
        ],
        socialLinks: {
          website: 'https://www.munipuertooctay.cl'
        },
        documents: [],
        tips: 'Visita el muelle a media tarde: la luz del oeste ilumina el volcán Osorno y el lago queda en calma de espejo, ideal para fotos sin multitudes.',
        trivia: 'En su auge, Puerto Octay fue el principal puerto del circuito lacustre: el trigo de Osorno y Río Negro cruzaba el lago en barcos a vapor antes de que el ferrocarril y las carreteras le quitaran su rol.',
        estimatedStayMinutes: 30
      },
      {
        id: 'stop-llanquihue-5',
        order: 5,
        title: 'Volcán Osorno y Saltos del Petrohué',
        subtitle: 'Agua turquesa sobre lava andesítica en el parque nacional más antiguo de Chile',
        category: 'nature',
        location: {
          lat: -41.17235,
          lng: -72.44683,
          address: 'Saltos del Petrohué, Parque Nacional Vicente Pérez Rosales, sector Ensenada, Ruta CH-225'
        },
        triggerRadiusMeters: 80,
        narrativeText: 'Cerramos el circuito en el corazón del Parque Nacional Vicente Pérez Rosales, el más antiguo de Chile: creado en 1926, y el segundo de Sudamérica. Su nombre honra a Vicente Pérez Rosales, el agente de colonización que impulsó el poblamiento alemán de esta cuenca.\n\nEl río Petrohué nace en el Lago Todos los Santos y, pocos kilómetros después de su nacimiento, se estrella contra la lava endurecida del volcán Osorno. El resultado son los Saltos del Petrohué: una serie de cascadas, rápidos y pasarelas donde el agua toma ese color turquesa irreal, teñido por la harina glacial suspendida en la corriente.\n\nUn corto sendero de madera, apto para toda la familia, serpentea entre la selva valdiviana con sus alerces, coigües y ulmos hasta los miradores. Escucha el trueno del agua y contrasta su fuerza con la calma del Osorno, que aquí se ve no al otro lado del lago, sino a pocos kilómetros, desafiante y nevado. Caminando entre el trueno del agua, la vegetación del sur y el volcán, comprendes por qué este lugar es la joya natural más antigua y protegida del país.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 170,
          voiceName: 'Kore',
          transcript: 'Estás en el Parque Nacional Vicente Pérez Rosales, el más antiguo de Chile, creado en 1926. El río Petrohué nace en el Lago Todos los Santos y, al chocar contra la lava del volcán Osorno, forma los Saltos del Petrohué: cascadas de agua turquesa, teñida por la harina glacial. Un sendero de madera, fácil, atraviesa la selva valdiviana entre alerces y coigües hasta los miradores. Escucha el trueno del agua y mira el Osorno, aquí a pocos kilómetros, nevado y desafiante. La joya natural más antigua de Chile.'
        },
        images: [
          {
            id: 'img-llanquihue-5-a',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Saltos_del_Petrohue._%282010%29.JPG/1280px-Saltos_del_Petrohue._%282010%29.JPG',
            caption: 'Los Saltos del Petrohué con sus aguas turquesa y la selva valdiviana al fondo',
            isPrimary: true
          },
          {
            id: 'img-llanquihue-5-b',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Saltos_del_Petrohue_caida_libre.jpg/1280px-Saltos_del_Petrohue_caida_libre.jpg',
            caption: 'Caída libre del río Petrohué sobre la lava andesítica del volcán Osorno'
          }
        ],
        socialLinks: {
          website: 'https://www.conaf.cl'
        },
        documents: [],
        tips: 'Compra tu entrada con anticipación en el sitio oficial de pases de parques nacionales; el parque es reserva y los accesos se controlan, especialmente en verano.',
        trivia: 'El Parque Nacional Vicente Pérez Rosales es el más antiguo de Chile (1926) y el segundo de Sudamérica, y el color turquesa de los Saltos del Petrohué se debe a la harina glacial del Lago Todos los Santos.',
        estimatedStayMinutes: 60
      }
    ],
  },
  {
    id: 'tour-pesca-llanquihue',
    title: '5 Días de Pesca: Trolling y Mosca por el Lago Llanquihue',
    tagline: 'Audioguía con Partners Fishing Tours • Llanquihue, Petrohué, Maullín y el Estuario de Reloncaví',
    description: 'Audioguía producida por El Viaje Por Chile (www.elviaje.cl) en colaboración con Partners Fishing Tours, el charter de Puerto Varas y Llanquihue que pesca desde el lago hasta las bocas oceánicas de Maullín. Cinco días entre trolling en el Lago Llanquihue, la pesca con mosca del Río Petrohué y sus saltos, los tramos neblinosos del Río Maullín, la desembocadura salobre del golfo Coronados y el Estuario de Reloncaví. Con guías trilingües, embarcación Tridente de 18 pies y el detalle de cada trámite: la licencia de pesca recreativa de Sernapesca, las temporadas, las vedas y las cuotas para salmónidos en aguas continentales.',
    coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/R%C3%ADo_Petrohu%C3%A9-Chile3.jpg/1280px-R%C3%ADo_Petrohu%C3%A9-Chile3.jpg',
    city: 'Cuenca del Lago Llanquihue (Puerto Varas, Petrohué, Maullín, Reloncaví)',
    country: 'Chile',
    category: 'nature',
    language: 'Español',
    durationMinutes: 7200,
    distanceKm: 320.0,
    difficulty: 'easy',
    rating: 5.0,
    reviewsCount: 210,
    featured: true,
    published: true,
    createdAt: '2026-09-12T10:00:00Z',
    updatedAt: '2026-09-12T10:00:00Z',
    author: {
      name: 'Partners Fishing Tours',
      avatar: 'https://imgcdn.fishingbooker.com/charter/48489/m/e352f47f886f80ec127f0deb68719f36.jpg',
      role: 'Operador de pesca recreativa en la Cuenca del Lago Llanquihue',
      bio: 'Charter profesional de Puerto Varas y Llanquihue que opera desde el Lago Llanquihue hasta las bocas oceánicas de Maullín, con guías trilingües (español, inglés y portugués) y una embarcación Tridente de 18 pies. Tight lines and good fishing.',
      verified: true
    },
    socialLinks: {
      instagram: 'https://instagram.com/partnersflyfishing',
      website: 'https://fishingbooker.com/es/charters/view/48489',
      youtube: 'https://youtube.com/@tiendaelviaje'
    },
    generalDocuments: [
      {
        id: 'doc-licencia-pesca',
        name: 'Licencia de Pesca Recreativa: cómo y dónde tramitarla.pdf',
        type: 'pdf',
        url: '/pdf/doc-licencia-pesca.pdf',
        size: '69 KB',
        description: 'Paso a paso de la Ley N°20.256: obtener tu licencia en pescarecreativa.sernapesca.cl (con ClaveÚnica), en oficinas Sernapesca o en puntos de venta en convenio; exenciones para menores de 12, mayores de 65 y personas en situación de discapacidad; porte obligatorio junto a cédula o pasaporte.'
      },
      {
        id: 'doc-temporadas-vedas',
        name: 'Temporadas, Vedas y Cuotas de Salmónidos en Aguas Continentales.pdf',
        type: 'guide',
        url: 'https://www.sernapesca.cl/app/uploads/2025/02/medidas_de_administracion_de_pesca_recreativa_en_chile_2024-2025_26.02.2025.pdf',
        size: '3.1 MB',
        description: 'Decreto Supremo N°320 de 1981: temporada general del segundo viernes de noviembre al primer domingo de mayo, veda biológica, cuota máxima de 3 ejemplares o 15 kg por jornada, una caña por persona, señuelos con anzuelo simple o triple araña y prohibición de pesca nocturna cerca de desembocaduras y desagües.'
      },
      {
        id: 'doc-especies-cuenca',
        name: 'Especies y Ecosistemas de la Cuenca del Lago Llanquihue.pdf',
        type: 'guide',
        url: '/pdf/doc-especies-cuenca.pdf',
        size: '67 KB',
        description: 'Salmónidos del lago, el río Petrohué, el Maullín y el estuario de Reloncaví: salmón Chinook, Coho y del Atlántico, trucha arcoíris y trucha café, además de las especies nativas; y el Santuario de la Naturaleza Humedales del Río Maullín.'
      }
    ],
    stops: [
      {
        id: 'stop-pesca-1',
        order: 1,
        title: 'Día 1: Trolling en el Lago Llanquihue',
        subtitle: 'Cobertura, licencia y la primera línea de cucharas al amanecer',
        category: 'nature',
        location: {
          lat: -41.31716,
          lng: -72.98161,
          address: 'Costanera y muelle pedraplén de Puerto Varas, salida de embarcaciones al Lago Llanquihue'
        },
        triggerRadiusMeters: 80,
        narrativeText: 'Tu semana de pesca comienza en la costanera de Puerto Varas, al pie del lago. Antes de soltar amarras, deja lista tu licencia de pesca recreativa: es obligatoria para nacionales y extranjeros, personal e intransferible, y se obtiene en línea en pescarecreativa.sernapesca.cl (con ClaveÚnica), en oficinas de Sernapesca o en los puntos de venta en convenio. Están exentos menores de 12 años, mayores de 65 y las personas en situación de discapacidad inscritas en el Registro Nacional. La licencia debe portarse y exhibirse junto a la cédula, el pasaporte o el DNI cuando un fiscalizador lo requiera.\n\nYa con el trámite resuelto, zarpamos. En el Lago Llanquihue la técnica protagonista es el trolling: arrastrar señuelos artificiales, cucharillas y plugas por detrás de la embarcación a velocidad lenta, entre 1.5 y 3 nudos, mientras los downriggers eligen la profundidad del agua helada. Las especies de salmónidos del lago incluyen la trucha arcoíris, la trucha café o fario y el salmón plateado, junto a truchas asalmonadas que en primavera suben a las bocas de los ríos a desovar. El lago hoy también concentra centros de cultivo de salmón en agua dulce, y Sernapesca vigila cualquier posible escape de ejemplares asilvestrados.\n\nRegla de oro: en aguas continentales la temporada general de salmónidos corre del segundo viernes de noviembre al primer domingo de mayo, con una cuota máxima de 3 ejemplares o 15 kilos por jornada, una sola caña por persona y señuelos artificiales con anzuelo simple o triple araña. En el Lago Llanquihue rigen medidas especiales que pueden adelantar el inicio a mediados de septiembre: consulta siempre la resolución vigente antes de planificar.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 175,
          voiceName: 'Zephyr',
          transcript: 'Día uno: Lago Llanquihue, trolling. Antes de zarpar, tienes tu licencia de pesca recreativa de Sernapesca: se tramita en pescarecreativa.sernapesca.cl, con exención para menores de 12, mayores de 65 y personas con discapacidad inscrita. Ya en el agua, arrastramos cucharillas y plugas a 2 nudos, con downriggers buscando profundidad. Las estrellas son la trucha arcoíris, la trucha café y el salmón plateado, y en primavera las asalmonadas suben a desovar. Recuerda: la temporada general va del segundo viernes de noviembre al primer domingo de mayo y la cuota es de 3 ejemplares o 15 kilos. El lago puede adelantar su apertura a septiembre: verifica la resolución.'
        },
        images: [
          {
            id: 'img-pesca-1-a',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Muelle_pedraplen_Puerto_Varas%2C_Chile.jpg/1280px-Muelle_pedraplen_Puerto_Varas%2C_Chile.jpg',
            caption: 'El muelle pedraplén de Puerto Varas, punto de salida para el trolling del Lago Llanquihue',
            isPrimary: true
          },
          {
            id: 'img-pesca-1-b',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Lago_Llanquihue_y_volc%C3%A1n_Osorno%2C_2019.jpg/1280px-Lago_Llanquihue_y_volc%C3%A1n_Osorno%2C_2019.jpg',
            caption: 'Las aguas profundas del Lago Llanquihue frente al volcán Osorno'
          }
        ],
        socialLinks: {
          website: 'https://pescarecreativa.sernapesca.cl'
        },
        documents: [],
        tips: 'Tramita la licencia el día anterior por internet con tu ClaveÚnica y guárdala en el celular: la versión digital es válida para exhibirla cuando te la pidan.',
        trivia: 'En el lago operan centros de cultivo de salmónidos en agua dulce (Camanchaca y Caleta Bay), lo que obliga a Sernapesca a vigilar fugas y especies asilvestradas en temporada de desove.',
        estimatedStayMinutes: 360
      },
      {
        id: 'stop-pesca-2',
        order: 2,
        title: 'Día 2: Pesca con Mosca en el Río Petrohué',
        subtitle: 'Vadeo y flote en el río turquesa que siembra el país entero para el fly',
        category: 'nature',
        location: {
          lat: -41.17186,
          lng: -72.44899,
          address: 'Río Petrohué, sector Saltos del Petrohué y desagüe del Lago Todos los Santos, Ruta CH-225'
        },
        triggerRadiusMeters: 80,
        narrativeText: 'El Río Petrohué es considerado uno de los mejores ríos del país y del mundo para la pesca deportiva. Nace en el Lago Todos los Santos, dentro del Parque Nacional Vicente Pérez Rosales, y en sus 36 kilómetros de aguas turquesas que desembocan en el Estuario de Reloncaví se practica la pesca de vadeo y el flote, descendiendo en cataraft o bote con guía.\n\nLa carta de especies es de colección: el famoso salmón Chinook o salmón rey, el salmón Coho, el salmón del Atlántico, la trucha arcoíris, la trucha fario y la percatrucha. El Chinook es el gran atractivo de marzo y abril, cuando sube a desovar y se enfrenta a los rápidos con toda su fuerza. Los estudios de la cuenca muestran que la trucha fario es la especie más abundante, seguida del Chinook y la arcoíris, y que la reproducción de los salmónidos se inicia en marzo y abril.\n\nPara la mosca, el equipamiento clásico es una caña del número 6 al 8 con líneas de hundimiento y streamers: los Woolly Bugger y las imitaciones de peces y de crustáceos son infalibles en el Petrohué. La temporada corre entre noviembre y mayo, y la ética del río pide anzuelos sin rebaba y la devolución cuidadosa de cada ejemplar: aquí no se pesca para llenar la cesta, se pesca para dialogar con el paisaje del volcán Osorno.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 170,
          voiceName: 'Puck',
          transcript: 'El Río Petrohué, uno de los mejores del mundo para pescar con mosca. Nace en el Lago Todos los Santos y desemboca en el estuario de Reloncaví. En sus aguas turquesas se pesca de vadeo y en flote con cataraft. Las estrellas: salmón Chinook en marzo y abril, Coho, del Atlántico, trucha arcoíris y trucha fario. Usa caña del 6 al 8, líneas de hundimiento y streamers como el Woolly Bugger. Temporada de noviembre a mayo, siempre con anzuelos sin rebaba y devolviendo cada pez con cuidado. El río es un diálogo con el volcán Osorno.'
        },
        images: [
          {
            id: 'img-pesca-2-a',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Petrohu%C3%A9%2C_2019_%2812%29.jpg/1280px-Petrohu%C3%A9%2C_2019_%2812%29.jpg',
            caption: 'Las aguas turquesa del Río Petrohué en el sector del Parque Nacional Vicente Pérez Rosales',
            isPrimary: true
          },
          {
            id: 'img-pesca-2-b',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Saltos_del_Petrohue._%282010%29.JPG/1280px-Saltos_del_Petrohue._%282010%29.JPG',
            caption: 'Los Saltos del Petrohué, el escenario de los rápidos donde remonta el salmón Chinook'
          }
        ],
        socialLinks: {
          website: 'https://www.conaf.cl'
        },
        documents: [],
        tips: 'Si tu objetivo es el salmón Chinook, agéndate entre marzo y abril; en el resto de la temporada la trucha fario y la arcoíris dan el show durante el primer pique de la mañana.',
        trivia: 'Los estudios de la cuenca del Petrohué muestran que la trucha fario es la más abundante, cerca del 37% de los ejemplares, seguida por el salmón Chinook y la trucha arcoíris.',
        estimatedStayMinutes: 480
      },
      {
        id: 'stop-pesca-3',
        order: 3,
        title: 'Día 3: Mosca en los Tramos del Río Maullín',
        subtitle: 'El único desagüe del Llanquihue rumbo al Pacífico entre hualves y neblina',
        category: 'nature',
        location: {
          lat: -41.47063,
          lng: -73.28362,
          address: 'Río Maullín, tramo alto y medio, Santuario de la Naturaleza Humedales del Río Maullín'
        },
        triggerRadiusMeters: 80,
        narrativeText: 'El Río Maullín es único: es la única desembocadura del Lago Llanquihue hacia el océano. Nace en el extremo suroccidental del lago y recorre 85 kilómetros en dirección este-oeste, serpenteando entre bosques, praderas y humedales hasta el Pacífico. Sus aguas lentas, envueltas en neblina, crean una de las atmósferas más místicas de la pesca chilena.\n\nLos pescadores locales dividen el río en tramos: el tramo alto, cerca del desagüe del lago, aguas rápidas tras la salida; y los tramos medio y bajo, donde la corriente se serena y la pesca se hace en bote, lanzando moscas entre la vegetación ribereña. Aquí mandan la trucha arcoíris y la trucha marrón o fario, aunque alguna carpa se tentó históricamente con las moscas. Los guides hablan del tramo 1 y tramo 2 como escenarios distintos dentro de la misma jornada.\n\nTodo el cauce atraviesa el Santuario de la Naturaleza Humedales del Río Maullín, declarado en 2022: unas 8.000 hectáreas de planicies mareales, marismas, pajonales y hualves, los bosques pantanosos únicos de Chile. Son 152 especies de aves, el flamenco chileno y el huillín, la nutria de río en peligro de extinción, los que convierten a cada lanzamiento en un paseo que el río no olvida.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 170,
          voiceName: 'Charon',
          transcript: 'El Río Maullín, la única salida del Lago Llanquihue al mar. Ochenta y cinco kilómetros hacia el Pacífico entre neblina y humedales. Los guías dividen el río en tramos: el tramo alto, cerca del desagüe; y los tramos medio y bajo, donde se pesca en bote entre la vegetación. Trucha arcoíris y trucha marrón, y a veces una carpa curiosa. Todo el cauce cruza el Santuario de la Naturaleza Humedales del Río Maullín: flamenco chileno, huillín y bosques pantanosos de hualve. Pescar aquí es escuchar al río.'
        },
        images: [
          {
            id: 'img-pesca-3-a',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Lllanquihue_-Maullin_01_-nacimiento.jpg/1280px-Lllanquihue_-Maullin_01_-nacimiento.jpg',
            caption: 'El nacimiento del Río Maullín en el extremo suroccidental del Lago Llanquihue',
            isPrimary: true
          },
          {
            id: 'img-pesca-3-b',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Salto_del_R%C3%ADo_Maull%C3%ADn.jpg/1280px-Salto_del_R%C3%ADo_Maull%C3%ADn.jpg',
            caption: 'Un salto del Río Maullín en sus aguas envueltas en la bruma del sur'
          }
        ],
        socialLinks: {
          website: 'https://www.monumentos.gob.cl/monumentos/santuarios-de-la-naturaleza/humedales-del-rio-maullin'
        },
        documents: [],
        tips: 'Pregunta a tu guía por las ventanas de marea y el tramo de la jornada: el tramo alto se pesca de vadeo y los tramos medio y bajo, en bote con la neblina de la mañana.',
        trivia: 'El Santuario de la Naturaleza Humedales del Río Maullín protege unas 8.097 hectáreas y es hábitat del flamenco chileno y del huillín, la nutria de río en peligro de extinción.',
        estimatedStayMinutes: 480
      },
      {
        id: 'stop-pesca-4',
        order: 4,
        title: 'Día 4: Desembocadura del Maullín y Bahía Maullín',
        subtitle: 'El estuario salobre del golfo Coronados, pasarela entre el lago y el Pacífico',
        category: 'nature',
        location: {
          lat: -41.61601,
          lng: -73.59507,
          address: 'Desembocadura del Río Maullín y bahía Maullín, golfo Coronados, comuna de Maullín'
        },
        triggerRadiusMeters: 80,
        narrativeText: 'Hoy el río se rinde ante el mar. El Maullín desemboca en la bahía Maullín, del golfo Coronados, en el océano Pacífico, y es en esa zona de mezcla donde la pesca cambia de lenguaje: agua dulce del lago y agua salada del mar se encuentran y con ellas, dos mundos de especies.\n\nEn la boca del río, los salmónidos lacustres se encuentran con las especies pelágicas que llegan desde el océano. Es un escenario clásico de trolling costero y de mosca con líneas de hundimiento, lanzando a la zona de mezcla donde el pique del salmón y de la trucha asalmonada se combina con la velocidad de la sierra, el mackerel del Pacífico que también protagoniza las capturas de los charters de la zona.\n\nAquí rigen con toda su fuerza las normas de la pesca recreativa: cuota de 3 ejemplares o 15 kilos para salmónidos, y la prohibición de pesca nocturna desde embarcación a menos de 500 metros de la desembocadura, entre las 21:00 y las 06:00 horas. Las planicies intermareales del estuario son además un refugio esencial para las aves playeras migratorias y para el flamenco chileno, que tiñen de rosado el horizonte cuando el sol cae sobre el golfo Coronados.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 165,
          voiceName: 'Fenrir',
          transcript: 'Día cuatro: la desembocadura del Maullín en el golfo Coronados. El agua dulce del lago se encuentra con el mar, y con ella dos mundos de especies. Es trolling costero y mosca con líneas de hundimiento: trucha asalmonada y salmón se mezclan con la velocidad de la sierra mackerel. Respeta las reglas: cuota de 3 ejemplares o 15 kilos, y prohibida la pesca nocturna a menos de 500 metros de la boca del río. Al atardecer, el flamenco chileno tiñe de rosado las planicies del estuario.'
        },
        images: [
          {
            id: 'img-pesca-4-a',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/R%C3%ADo_Maull%C3%ADn_1.jpg/1280px-R%C3%ADo_Maull%C3%ADn_1.jpg',
            caption: 'El Río Maullín camino a su desembocadura en el océano Pacífico',
            isPrimary: true
          },
          {
            id: 'img-pesca-4-b',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ci%C3%A9nago_de_Humedal_del_R%C3%ADo_Maull%C3%ADn%2C_Santuario_de_la_Naturaleza.jpg/1280px-Ci%C3%A9nago_de_Humedal_del_R%C3%ADo_Maull%C3%ADn%2C_Santuario_de_la_Naturaleza.jpg',
            caption: 'El ciénago y los humedales del santuario que protege la desembocadura del Maullín'
          }
        ],
        socialLinks: {
          website: 'https://www.sernapesca.cl'
        },
        documents: [],
        tips: 'Consulta las tablas de marea y el parte del golfo antes de salir: las mejores ventanas de mezcla dulce-salada suelen darse en las dos horas alrededor de la marea alta.',
        trivia: 'En el cierre de la temporada truchera se han documentado capturas para el recuerdo en la boca del Maullín, como una trucha arcoíris de casi 5 kilos devuelta viva al agua.',
        estimatedStayMinutes: 420
      },
      {
        id: 'stop-pesca-5',
        order: 5,
        title: 'Día 5: Estuario de Reloncaví y Cierre de Temporada',
        subtitle: 'El fiordo donde el Petrohué se despide del lago y las licencias se renuevan',
        category: 'nature',
        location: {
          lat: -41.66681,
          lng: -72.37752,
          address: 'Estuario de Reloncaví, boca del Río Petrohué, Región de Los Lagos'
        },
        triggerRadiusMeters: 100,
        narrativeText: 'Última jornada en el Estuario de Reloncaví, la entrada de mar que recibe las aguas del Petrohué y del Puelo. Este brazo de mar entre la cordillera y la isla de Calbuco es una zona de mezcla espectacular, donde los salmónidos que viven en el océano suben hacia los ríos a desovar, y donde el Chinook se prepara para su última gran carrera aguas arriba. Aquí se pesca de trolling y con jigs en aguas estuarinas, con el volcán Osorno de fondo y las aguas más verdes del sur.\n\nEs, también, la hora del balance. La pesca recreativa en Chile exige portar siempre la licencia al día: se renueva online en pescarecreativa.sernapesca.cl, sin necesidad de volver a trámites presenciales. La temporada general de salmónidos en aguas continentales va del segundo viernes de noviembre al primer domingo de mayo, con la veda biológica entre mayo y noviembre para proteger el desove. Las cuotas siguen siendo 3 ejemplares o 15 kilos por día, con una caña por persona, y está prohibido comercializar las capturas. Consulta siempre las resoluciones vigentes de Sernapesca para la Región de Los Lagos, porque el Lago Llanquihue y sus desagües tienen calendarios especiales.\n\nGuarda tu licencia, acomoda los señuelos y deja que el estuario cierre la semana: cinco días, cuatro ecosistemas y una misma conversación entre el río, el lago y el mar.',
        audio: {
          type: 'ai_generated',
          durationSeconds: 175,
          voiceName: 'Kore',
          transcript: 'Último día: Estuario de Reloncaví, donde el Petrohué encuentra el mar. Trolling y jigs en aguas estuarinas, con los salmónidos que suben desde el océano a desovar y el volcán Osorno de fondo. Y el balance: tu licencia se renueva en línea en pescarecreativa.sernapesca.cl. La temporada general va del segundo viernes de noviembre al primer domingo de mayo, con veda entre mayo y noviembre. Cuota de 3 ejemplares o 15 kilos, una caña, y prohibido comercializar. Consulta las resoluciones de Sernapesca para Los Lagos: el lago y sus desagües tienen calendarios especiales. Cinco días, cuatro ecosistemas y un solo río.'
        },
        images: [
          {
            id: 'img-pesca-5-a',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Estuario_de_Reloncav%C3%AD.jpg/1280px-Estuario_de_Reloncav%C3%AD.jpg',
            caption: 'El Estuario de Reloncaví, el brazo de mar que recibe las aguas del Petrohué',
            isPrimary: true
          },
          {
            id: 'img-pesca-5-b',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Estuario_de_reloncav%C3%AD_%2834012429574%29.jpg/1280px-Estuario_de_reloncav%C3%AD_%2834012429574%29.jpg',
            caption: 'Las aguas del estuario entre la cordillera y la costa de Calbuco'
          }
        ],
        socialLinks: {
          website: 'https://pescarecreativa.sernapesca.cl'
        },
        documents: [],
        tips: 'Antes de volver a casa, renueva tu licencia para la próxima temporada online y descarga el PDF al celular: la versión digital es válida en todo el país.',
        trivia: 'El Estuario de Reloncaví es la puerta marina del salmón Chinook que cada temporada remonta el Petrohué: la misma agua que atraviesas hoy, la recorren los peces más grandes de la cuenca.',
        estimatedStayMinutes: 360
      }
    ],
  }
];

export const sampleTours = INITIAL_TOURS;
