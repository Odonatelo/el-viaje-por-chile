import { Tour } from '../types';

export const tourParqueNacionalPatagonia: Tour = {
  id: 'tour-pn-patagonia-fauna',
  title: 'Avistamiento de Fauna en el Parque Nacional Patagonia: Huemul, Guanaco y Puma',
  tagline: 'Audioguía Oficial El Viaje Por Chile • El refugio del 10% de los huemules de Chile, el laboratorio de pumas más largo de Sudamérica y el protocolo para observarlos',
  description: 'Audioguía producida por El Viaje Por Chile (www.elviaje.cl) en colaboración con guías de naturaleza y guardaparques, validada con CONAF, el portal oficial pasesparques.cl y los recursos gratuitos de la Fundación Rewilding Chile (rewildingchile.org/descargas), incluyendo su "Guía de campo | Parque Nacional Patagonia" (descargable en esta ruta). Recorre los tres sectores del parque —Valle Chacabuco, Tamango y Jeinimeni— y sus 304.527 hectáreas entre Chile Chico y Cochrane, en la Región de Aysén. El parque, creado en 2018 sobre la restaurada Estancia Valle Chacabuco donada por Tompkins Conservation, protege cerca del 10% de los huemules que quedan en Chile, la mayor abundancia de guanacos de la estepa patagónica, el programa de monitoreo de pumas más largo de Sudamérica (desde 2008) y especies recuperadas como el choique o ñandú y el cóndor andino. Siete paradas nombran a la fauna más importante, explican dónde y cómo verla (senderos, horarios y temporadas) y el protocolo de avistamiento responsable para observar sin interferir. La guía de campo gratuita del parque, las entradas en pasesparques.cl y la información oficial de CONAF aparecen citadas como recursos de descarga en esta ruta.',
  coverImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Valle%20de%20Chacabuco%2C%20Parque%20Patagonia.jpg?width=1280',
  city: 'Parque Nacional Patagonia · Valle Chacabuco, Tamango y Jeinimeni, Aysén',
  country: 'Chile',
  category: 'nature',
  language: 'Español',
  durationMinutes: 600,
  distanceKm: 410.0,
  difficulty: 'moderate',
  rating: 5.0,
  reviewsCount: 18,
  featured: true,
  published: true,
  createdAt: '2026-10-03T10:00:00Z',
  updatedAt: '2026-10-03T10:00:00Z',
  author: {
    name: 'Juan Carlos Castaing',
    avatar: '/images/juan-carlos-castaing.png',
    role: 'Especialista en Patrimonio y Rutas de Chile',
    bio: 'Guía de expedición en Patagonia, consultor de interpretación del patrimonio natural y creador en El Viaje Por Chile.',
    verified: true
  },
  socialLinks: {
    instagram: 'https://www.instagram.com/rewildingchile',
    youtube: 'https://www.youtube.com/c/FundacionRewildingChile',
    website: 'https://www.conaf.cl/parque_nacionales/parque-nacional-patagonia',
    twitter: 'https://x.com/RewildingChile'
  },
  generalDocuments: [
    {
      id: 'doc-guia-campo-pn-patagonia',
      name: 'Guía de campo | Parque Nacional Patagonia (Fundación Rewilding Chile).pdf',
      type: 'guide',
      url: '/pdf/guia-campo-pn-patagonia-rewilding-chile.pdf',
      size: '6,2 MB',
      description: 'Recurso gratuito de Fundación Rewilding Chile (rewildingchile.org/descargas). Resalta las especies nativas más representativas del parque, identificadas junto a la comunidad de Chile Chico en el programa Amigos de los Parques —junto a CONAF y Fundación Chilco—, poniendo énfasis en las interacciones que sostienen este frágil ecosistema.'
    },
    {
      id: 'doc-centro-recursos-rewilding',
      name: 'Centro de descargas oficial de Fundación Rewilding Chile',
      type: 'doc',
      url: 'https://www.rewildingchile.org/descargas/',
      size: '—',
      description: 'Página oficial donde el parque y la Ruta de los Parques publican sus recursos gratuitos: guías de campo, el libro "Parque Nacional Patagonia Chile", infografías de especies (ñandú, huemul, puma) y reportes anuales.'
    },
    {
      id: 'doc-entradas-pasesparques',
      name: 'Entradas oficiales al parque: pasesparques.cl (CONAF)',
      type: 'doc',
      url: 'https://www.pasesparques.cl',
      size: '—',
      description: 'Sistema oficial de CONAF para documentación de compra, horarios, cupos sectoriales y avisos de cierres del Parque Nacional Patagonia. Obligatorio registrarse al ingresar en cada sector.'
    }
  ],
  stops: [
    {
      id: 'stop-pnp-visitantes-1',
      order: 1,
      title: 'Centro de Visitantes y Museo del Valle Chacabuco',
      subtitle: 'La puerta del parque: historial de restauración, fauna emblemática y protocolo de avistamiento',
      category: 'museum',
      location: {
        lat: -47.11,
        lng: -72.39,
        address: 'Centro Administrativo y Museo, Sector Valle Chacabuco, Km 11 Ruta X-83, Parque Nacional Patagonia, Región de Aysén'
      },
      triggerRadiusMeters: 80,
      narrativeText: 'Bienvenido al Parque Nacional Patagonia. Este valle, la antigua Estancia Chacabuco, fue una de las mayores explotaciones ovinas de Aysén hasta que Tompkins Conservation lo restauró desde 2004 y lo donó al Estado; el parque se oficializó el 25 de octubre de 2018 con 304.527 hectáreas que integran el Valle Chacabuco y las antiguas reservas Lago Jeinimeni y Lago Cochrane (Tamango). En el museo y centro de visitantes entiendes todo antes de salir a observar: aquí vive cerca del 10% de los huemules que quedan en Chile, junto a guanacos, pumas, zorros, cóndores, choiques y flamencos. Antes de partir, anota el protocolo que te acompañará toda la ruta: mantén la distancia, habla en voz baja, no alimentes ni persigas fauna, no uses flash, no salgas de los senderos y registra tu entrada en pasesparques.cl. Así, el avistamiento se convierte en conservación.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 175,
        voiceName: 'Puck',
        transcript: 'Estás en la puerta del Parque Nacional Patagonia, en el Valle Chacabuco. Esta estancia ganadera recuperada por Tompkins Conservation se convirtió en parque nacional en 2018, con 304 mil 527 hectáreas entre Chile Chico y Cochrane. Aquí vive cerca del diez por ciento de los huemules de Chile, junto a guanacos, pumas, zorros, cóndores, choiques y flamencos. Antes de salir, graba el protocolo: distancia, silencio, sin flash, sin alimentar, sin salir del sendero, y entrada registrada en pases parques. Así, observar se convierte en conservar.'
      },
      images: [
        {
          id: 'img-pnp-valle-1',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Valle%20de%20Chacabuco%2C%20Parque%20Patagonia.jpg?width=1280',
          caption: 'El Valle Chacabuco, núcleo restaurado del Parque Nacional Patagonia',
          isPrimary: true
        },
        {
          id: 'img-pnp-huemul-jdm',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Foto%20huemul%20%28Jaime%20D%C3%ADaz%20Mancilla%29.jpg?width=1280',
          caption: 'Huemul (Hippocamelus bisulcus), el ciervo del escudo nacional y emblema del parque',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://www.conaf.cl/parque_nacionales/parque-nacional-patagonia'
      },
      documents: [],
      tips: 'Compra tus entradas con anticipación en pasesparques.cl; cada sector (Valle Chacabuco, Tamango y Jeinimeni) exige registro CONAF. Pocos refugios; revisa cupos y cierres estacionales antes de viajar.',
      trivia: 'El huemul es una de las dos especies del escudo de Chile. En este parque vive cerca del 10% de la población remanente del país, por eso hoy es el corazón del "Corredor del Huemul".',
      estimatedStayMinutes: 40
    },
    {
      id: 'stop-pnp-confluencia-2',
      order: 2,
      title: 'La Confluencia de los Ríos Baker y Chacabuco',
      subtitle: 'Aves acuáticas y el río más caudaloso de Chile en la entrada oeste del parque',
      category: 'nature',
      location: {
        lat: -47.1247,
        lng: -72.4896,
        address: 'Sector Entrada Baker o Paso Roballos, Ruta X-83, Parque Nacional Patagonia, Región de Aysén'
      },
      triggerRadiusMeters: 60,
      narrativeText: 'El sendero La Confluencia baja desde la entrada Baker hasta el encuentro de dos dos ríos: el Chacabuco, que drena el valle que acabas de cruzar, y el Baker, el río más caudaloso de Chile con un promedio superior a los 800 metros cúbicos por segundo de aguas turquesa de origen glaciar. Este borde de río y bosque ribereño es un punto excelente para avistar avifauna: bandurrias, caiquenes y cauquenes en las orillas, carpinteros negros en las lengas y, con telescopio, patos de los torrentes. La observación de aves se hace temprano, entre el amanecer y las diez de la mañana, cuando la actividad es máxima. Queda en calma: aquí también se ha confirmado el paso de pumas y perros asilvestrados, por eso se camina por el sendero señalizado, en grupo y con registro previo.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 160,
        voiceName: 'Charon',
        transcript: 'El sendero La Confluencia te lleva al encuentro del Chacabuco con el Baker, el río más caudaloso de Chile. Esa agua turquesa viene de los glaciares. Busca bandurrias, caiquenes y cauquenes en las orillas, y carpinteros negros en las lengas. La mejor ventana es entre el amanecer y las diez. Camina en grupo y por el sendero señalizado: el sector también registra pumas y perros asilvestrados.'
      },
      images: [
        {
          id: 'img-pnp-baker',
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/R%C3%ADo_Baker%2C_sector_Balsa_Baker.jpg/1280px-R%C3%ADo_Baker%2C_sector_Balsa_Baker.jpg',
          caption: 'El río Baker, de aguas turquesa glaciares, cerca de su confluencia con el Chacabuco',
          isPrimary: true
        }
      ],
      socialLinks: {
        website: 'https://www.pasesparques.cl'
      },
      documents: [],
      tips: 'Lleva binoculares y, si puedes, telescopio. Camina en grupo, mantén el registro y no te acerques a la ribera en crecida: el sector está catalogado con posible presencia de pumas y perros asilvestrados.',
      trivia: 'El río Baker nace en el Lago Bertrand y desemboca en el Pacífico; su caudal promedio supera los 800 m³/s, el mayor de Chile.',
      estimatedStayMinutes: 30
    },
    {
      id: 'stop-pnp-lagunasaltas-3',
      order: 3,
      title: 'Sendero Lagunas Altas: el Reino del Guanaco y del Cóndor',
      subtitle: 'Manadas de guanacos en la estepa, cóndores en altura y huellas frescas de puma (Lama guanicoe · Vultur gryphus)',
      category: 'nature',
      location: {
        lat: -47.078,
        lng: -72.25,
        address: 'Inicio en Camping Casa de Piedra, Km 25 Ruta X-83, Sector Valle Chacabuco, Parque Nacional Patagonia'
      },
      triggerRadiusMeters: 60,
      narrativeText: 'Lagunas Altas es la caminata insignia del parque: 21 kilómetros de ida y vuelta, unas cinco o seis horas, subiendo desde Casa de Piedra hacia las lagunas de altura y la pampa. Es aquí donde el guanaco, el herbívoro más abundante de toda la Patagonia, se deja ver en manadas; se alimenta de aproximadamente el 75% de las especies de plantas de la estepa y por eso se lo considera una especie clave: sus pisadas abren el pasto, dispersa semillas y fertiliza el suelo. En altura, el cóndor andino patrulla las térmicas, y en la pampa encontrarás huellas y fecas frescas de puma. Cómo verlos: parte al amanecer, camina en silencio, detente en los miradores y usa binoculares; los guanacos suelen mantener una distancia que exige respetar. El guanaco, como todo el parque, se observa sin acercarse, sin gritar y sin perseguir crías.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 180,
        voiceName: 'Zephyr',
        transcript: 'Lagunas Altas, la caminata clásica del parque: veintiún kilómetros entre estepa y lagunas de altura. Aquí reina el guanaco, el herbívoro más numeroso de la Patagonia, que come el setenta y cinco por ciento de las plantas de la estepa. Acusa su rol: dispersa semillas, abre senderos y sostiene a los pumas. Arriba, el cóndor anda en las térmicas. Parte al amanecer, camina en silencio y mira con binoculares: el respeto por la distancia es el protocolo.'
      },
      images: [
        {
          id: 'img-pnp-guanaco',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Guanaco%20%28Lama%20guanicoe%29%20en%20el%20Parque%20Nacional%20Patagonia.jpg?width=1280',
          caption: 'Guanaco (Lama guanicoe) ramoneando ñirres en el Parque Nacional Patagonia',
          isPrimary: true
        },
        {
          id: 'img-pnp-condor',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Andean%20condor%20%28Vultur%20gryphus%29%20male%20Farellones.jpg?width=1280',
          caption: 'Cóndor andino (Vultur gryphus), centinela de las altas cumbres del parque',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://www.rewildingchile.org'
      },
      documents: [],
      tips: 'El sendero es exigente por desnivel acumulado y viento; lleva agua (no hay fuentes seguras en altura), cortaviento y reserva energética. En verano verás chulengos, las crías de guanaco, correteando junto a las madres.',
      trivia: 'El guanaco es el pariente silvestre de la llama y la base de la dieta del puma; al recuperarse del sobrepastoreo, su regreso ha cambiado el paisaje del Valle Chacabuco.',
      estimatedStayMinutes: 120
    },
    {
      id: 'stop-pnp-huemul-4',
      order: 4,
      title: 'Sendero Huemules y Valle Avilés: El Huemul del Escudo',
      subtitle: 'El ciervo más austral del mundo, símbolo de Chile, en el Corredor del Huemul (Hippocamelus bisulcus)',
      category: 'nature',
      location: {
        lat: -47.058,
        lng: -72.12,
        address: 'Sector Alto Valle, Ruta X-83, hacia el Paso Roballos, Sector Valle Chacabuco, Parque Nacional Patagonia'
      },
      triggerRadiusMeters: 60,
      narrativeText: 'Este es el santo grial del avistamiento en Patagonia: el huemul, el ciervo más austral del planeta, en peligro de extinción y presente en el escudo nacional. En el Parque Nacional Patagonia vive cerca del 10% de los individuos que quedan en Chile, y los senderos del sector y el Valle Avilés son su territorio: los verás al amanecer o al anochecer en los bordes de lengas y ñirres, pastando solos o en pequeños grupos, siempre tímidos. Cómo verlo: tempranísimo, en silencio absoluto, desde los miradores con binoculares y jamás persiguiéndolo; el huemul huye del ruido y del movimiento, por eso el protocolo exige distancia amplia (más de 30 o 50 metros), foto con teleobjetivo y cero flash. La restauración del valle y el programa "Corredor del Huemul", liderado por Rewilding Chile junto a CONAF, están uniendo sus últimas poblaciones. Protegerlo comienza en tu conducta al observarlo.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 185,
        voiceName: 'Kore',
        transcript: 'Llegaste al territorio más sagrado del parque: el del huemul, el ciervo más austral del mundo y símbolo del escudo de Chile. En peligro de extinción, aquí vive cerca del diez por ciento de lo que queda. Se ve al amanecer o al caer el sol, en los bordes de lengas y ñirres, siempre huyendo del ruido. Protocolo: distancia de treinta a cincuenta metros, teleobjetivo, sin flash y sin perseguir. El corredor del huemul, de Rewilding Chile y Conaf, une sus últimas poblaciones.'
      },
      images: [
        {
          id: 'img-pnp-huemul-main',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Foto%20huemul%20%28Jaime%20D%C3%ADaz%20Mancilla%29.jpg?width=1280',
          caption: 'Un huemul en territorio ayseño, la mejor ventana al ciervo del escudo',
          isPrimary: true
        },
        {
          id: 'img-pnp-valle-guanacos',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Guanacos%20in%20Chacabuco%20valley%20Chilean%20Patagonia.jpg?width=1280',
          caption: 'Guanacos en el Valle de Chacabuco, corredor compartido con el huemul',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://www.rewildingchile.org/proyectos/#vida-silvestre'
      },
      documents: [],
      tips: 'El avistamiento exige paciencia y madrugada. Muévete lento, sin colores llamativos; y si ves a un huemul, congelate, mira con binoculares y disfruta en silencio: tu quietud es el mejor regalo a esta especie.',
      trivia: 'Los senderos "Los Huemules" (6,8 km en Tamango) y "Huemules" (22 km en Valle Chacabuco) llevan el nombre del ciervo que este parque protege como ninguna otra área de Chile.',
      estimatedStayMinutes: 90
    },
    {
      id: 'stop-pnp-tamango-5',
      order: 5,
      title: 'Sector Tamango y Mirador Douglas Tompkins',
      subtitle: 'El Lago Cochrane desde la Reserva Nacional que hoy es Parque: huemules y bosques de lenga',
      category: 'nature',
      location: {
        lat: -47.27,
        lng: -72.29,
        address: 'Sector Tamango, acceso por Cochrane, Parque Nacional Patagonia, Región de Aysén'
      },
      triggerRadiusMeters: 60,
      narrativeText: 'Desde el pueblo de Cochrane se accede al sector Tamango, la antigua Reserva Nacional Lago Cochrane (6.900 hectáreas) que hoy es parte del Parque Nacional Patagonia. Aquí los senderos Los Huemules, Las Lengas, Los Pumas, Los Cóndores y Las Águilas forman un circuito de unos 20 kilómetros entre bosques de lenga y ñirre hasta el Mirador Douglas Tompkins, con la inmensidad del Lago Cochrane frente a ti. Esta ladera es otro lugar confiable para avistar huemules, además de zorros culpeo y una gran diversidad de aves como el carpintero negro (el sendero de Los Carpinteros lleva su nombre). Cómo verlos: temprano, con silencio y binoculares, sin salir del sendero. Al atardecer, el mirador es un contemplatorio único que agradece al hombre que soñó este parque.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 170,
        voiceName: 'Fenrir',
        transcript: 'Tamango, la antigua reserva del Lago Cochrane, ahora dentro del parque. Desde Cochrane subes por un circuito de veinte kilómetros de lengas hasta el Mirador Douglas Tompkins, con el lago entero a tus pies. Sector confiable para huemul, zorros culpeo y el carpintero negro, el grande del bosque. Temprano, en silencio, con binoculares y sin salir del sendero: al atardecer, este mirador es el mejor homenaje.'
      },
      images: [
        {
          id: 'img-pnp-tamango',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cerro%20Tamango%20Reserva%20Nacional%20Lago%20Cochrane%2005.jpg?width=1280',
          caption: 'Cerro Tamango, en el sector que la antigua Reserva Nacional Lago Cochrane legó al parque',
          isPrimary: true
        },
        {
          id: 'img-pnp-lenga',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Reserva%20Nacional%20Lago%20Cochrane%2003.jpg?width=1280',
          caption: 'Bosque de lengas del sector Tamango',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://www.conaf.cl/parque_nacionales/parque-nacional-patagonia'
      },
      documents: [],
      tips: 'Suma la navegación por el río Cochrane o el Lago Cochrane desde el pueblo para completar el avistaje; respeta los cierres invernales (mayo–agosto) del sector.',
      trivia: 'El sendero Los Pumas debe su nombre a la presencia histórica del depredador tope en estas laderas: observa huellas, fecas y rasguños en los troncos de lenga.',
      estimatedStayMinutes: 100
    },
    {
      id: 'stop-pnp-jeinimeni-6',
      order: 6,
      title: 'Sector Jeinimeni: Estepa, Flamencos y el Regreso del Ñandú',
      subtitle: 'La estepa del norte del parque: guanacos, flamencos en el lago, zorros y choiques (Rhea pennata)',
      category: 'nature',
      location: {
        lat: -46.776,
        lng: -71.66,
        address: 'Sector Lago Jeinimeni, Km 65 Ruta X-753, acceso por Chile Chico, Parque Nacional Patagonia'
      },
      triggerRadiusMeters: 60,
      narrativeText: 'Al norte, a 65 kilómetros de Chile Chico por la Ruta X-753, el sector Jeinimeni fue la antigua Reserva Nacional Lago Jeinimeni (161.100 hectáreas). Su estepa abierta y sus lagunas concentran el avistamiento: desde el Mirador del Lago Jeinimeni (2 km, una hora, sendero fácil y accesible) verás el lago teñido por el flamenco chileno y el cisne de cuello negro, mientras bandadas de choiques o ñandúes corren por la pampa. En 2025, por primera vez en la historia, Argentina y Chile translocaron 15 choiques silvestres a esta población para enriquecer su genética: un hito del rewilding. También hay gatos monteses, pichis (armadillos) y zorros. Cómo verlos: al amanecer y al atardecer, desde la ruta y miradores, con binoculares y sin salir del sendero; los perros están prohibidos porque los perros asilvestrados atacan a la fauna.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 175,
        voiceName: 'Charon',
        transcript: 'Jeinimeni, la antigua reserva del mismo nombre, el sector estepario del norte del parque. Desde el mirador del lago, dos kilómetros, una hora, verás flamencos chilenos y cisnes, mientras los choiques, los ñandúes, corren por la pampa. En 2025, Chile y Argentina translocaron quince choiques silvestres para reforzar la genética de esta población: un hito del rewilding. Amanecer y atardecer, con binoculares, sin salir del sendero, y sin perros: los asilvestrados atacan la fauna.'
      },
      images: [
        {
          id: 'img-pnp-jeinimeni',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Jeinimeni%20Lago.jpg?width=1280',
          caption: 'Lago Jeinimeni, corazón del sector norte del parque',
          isPrimary: true
        },
        {
          id: 'img-pnp-guanacos-sol',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Guanacos%20Parque%20Patagonia%20%28248844965%29.jpeg?width=1280',
          caption: 'Guanacos al atardecer en la estepa del parque',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://www.rewildingchile.org'
      },
      documents: [],
      tips: 'El sector cuenta con senderismo fácil (Mirador 2 km, Costanera 11,4 km) y la travesía de 3 a 4 días hacia el Valle Chacabuco por el Valle Avilés. Respeta el aviso sanitario de influenza aviar: no toques aves muertas ni enfermas.',
      trivia: 'La translocación binacional de choiques de 2025 fue la primera captura y traslado de fauna silvestre entre un país latinoamericano y otro con fines de conservación.',
      estimatedStayMinutes: 70
    },
    {
      id: 'stop-pnp-protocolo-7',
      order: 7,
      title: 'Protocolo de Avistamiento Responsable: Cómo Observar sin Interferir',
      subtitle: 'Las reglas del parque y la conducta ante un puma: distancia, silencio y respeto',
      category: 'nature',
      location: {
        lat: -47.108,
        lng: -72.383,
        address: 'Camping Los West Winds, aledaño al centro administrativo, Sector Valle Chacabuco, Parque Nacional Patagonia'
      },
      triggerRadiusMeters: 60,
      narrativeText: 'Cierres las jornada recordando el protocolo que hace de cualquier avistamiento una acción de conservación, validado por la normativa CONAF del parque. Uno: mantén distancia —mínimo 10 metros para aves y fauna menor, y más de 30–50 metros para huemules y pumas—. Dos: silencio; no grites, no llames animales ni los persigas; las crías jamás se tocan ni se separan. Tres: no alimentes, no uses flash y observa con binoculares o teleobjetivo. Cuatro: camina solo por senderos habilitados, respeta cupos y cierres estacionales (mayo–agosto) e infórmate en pasesparques.cl. Cinco: los perros están prohibidos. Seis: ante un puma, nunca corras: retrocede lentamente, agrupa al grupo, hazte ver más grande y avisa a guardaparques; los encuentros aquí son raros pero el protocolo salva vidas y al felino. Si visitas en época de influenza aviar, no toques aves y reporta. El Parque Nacional Patagonia y Fundación Rewilding Chile te invitan a ser parte del monitoreo: registra y reporta tus avistamientos.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 190,
        voiceName: 'Puck',
        transcript: 'El protocolo del Parque Nacional Patagonia para avistar sin interferir. Uno: distancia, mínimo diez metros y más de treinta o cincuenta para huemul y puma. Dos: silencio, sin perseguir y sin tocar crías. Tres: sin alimento, sin flash, binoculares y teleobjetivo. Cuatro: solo por senderos habilitados, con cupos y cierres de mayo a agosto. Cinco: sin perros. Seis: ante un puma, nunca corras; retrocede lento, agrúpate, hazte grande y avisa a guardaparques. Si hay influenza aviar, no toques aves. Tus avistamientos cuentan: repórtalos y sé parte del monitoreo del parque.'
      },
      images: [
        {
          id: 'img-pnp-puma',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Torres%20del%20Paine%20puma%20JF2.jpg?width=1280',
          caption: 'Puma (Puma concolor) en la estepa patagónica: el protocolo dice distancia, calma y retroceso lento',
          isPrimary: true
        }
      ],
      socialLinks: {
        website: 'https://www.rewildingchile.org/proyectos/monitoreo-de-pumas-en-el-parque-nacional-patagonia/'
      },
      documents: [],
      tips: 'Descarga la "Guía de campo | Parque Nacional Patagonia" incluida en esta ruta (Fundación Rewilding Chile) y lleva tus avistamientos a las casetas CONAF: participas del monitoreo de huemules, guanacos y pumas.',
      trivia: 'El programa de monitoreo de pumas del parque comenzó en 2008, con el apoyo de National Geographic y la Universidad de California en Davis, y es uno de los estudios a largo plazo más importantes de Sudamérica.',
      estimatedStayMinutes: 25
    }
  ]
};