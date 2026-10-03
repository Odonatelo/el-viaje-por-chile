import { Tour } from '../types';

export const tourIglesiasDeChiloe: Tour = {
  id: 'tour-iglesias-de-chiloe',
  title: 'Iglesias de Chiloé: El Camino de las Misiones Circulares',
  tagline: 'Audioguía Oficial El Viaje Por Chile • Patricia von der Hundt (Tourmaps) guía una ruta por la Escuela Chilota de Arquitectura Religiosa en Madera, Patrimonio Mundial UNESCO',
  description: 'Audioguía producida por El Viaje Por Chile (www.elviaje.cl) y firmada por Patricia von der Hundt Herrguth, directora de Tourmaps (www.tourmaps.cl), estudio de diseño y marketing turístico que trabaja con mapas ilustrados e interpretación del patrimonio de Chiloé y la Región de Los Lagos. La ruta recorre diez paradas entre Ancud, Castro, Chonchi, Rilán, Dalcahue y las islas orientales de Quinchao y Caguach, contando la historia que dio origen a las iglesias patrimoniales: la llegada de los primeros jesuitas en 1608, la creación de la "misión circular" que recorría el archipiélago en dalca y a pie, el sistema de fiscales que mantuvo viva la fe entre visita y visita, y la Escuela Chilota de Arquitectura Religiosa en Madera que fusionó los diseños centroeuropeos de los misioneros con la carpintería chilota de origen naviero. El relato se apoya en la Fundación de las Iglesias Patrimoniales de Chiloé (iglesiaschiloe.cl), heredera de la Fundación Cultural "Amigos de las Iglesias de Chiloé" creada en 1993, en el portal oficial del Sitio Patrimonio Mundial (chiloepatrimoniomundial.gob.cl), en Memoria Chilena y en el estudio académico "Las misiones circulares de los jesuitas en Chiloé" de Ramón Gutiérrez, citados como recursos de descarga en esta ruta.',
  coverImage: 'https://commons.wikimedia.org/wiki/Special:FilePath/Iglesia%20de%20Quinchao.jpg?width=1280',
  city: 'Ancud · Castro · Quinchao · Caguach · Dalcahue · Chiloé',
  country: 'Chile',
  category: 'history',
  language: 'Español',
  durationMinutes: 540,
  distanceKm: 150.0,
  difficulty: 'moderate',
  rating: 5.0,
  reviewsCount: 12,
  featured: true,
  published: true,
  createdAt: '2026-10-03T16:00:00Z',
  updatedAt: '2026-10-03T16:00:00Z',
  author: {
    name: 'Patricia von der Hundt Herrguth',
    avatar: 'https://tourmaps.cl/wp-content/uploads/2026/05/equipo-2.jpg',
    role: 'Directora · Tourmaps, Diseño y Marketing Turístico',
    bio: 'Directora de Tourmaps (www.tourmaps.cl), estudio de mapas ilustrados e interpretación del patrimonio de la Región de Los Lagos y Chiloé. Edición y dirección de arte de mapas como la serie "Mapas de Chile Ilustrado" y coautora de la guía "Volcanes de Chile".',
    verified: true
  },
  socialLinks: {
    instagram: 'https://www.instagram.com/tourmapschile/',
    facebook: 'https://www.facebook.com/TourmapsMapasChile/',
    website: 'https://www.tourmaps.cl',
    youtube: 'https://www.tiendaelviaje.cl'
  },
  generalDocuments: [
    {
      id: 'doc-ruta-iglesias-fip',
      name: 'Fundación Iglesias Patrimoniales de Chiloé: La Ruta de las Iglesias',
      type: 'guide',
      url: 'https://www.iglesiaschiloe.cl',
      size: '—',
      description: 'Sitio oficial de la Fundación que administra el Sitio Patrimonio Mundial Iglesias de Chiloé (heredera de la Fundación Cultural "Amigos de las Iglesias de Chiloé", fundada el 16 de julio de 1993 por monseñor Juan Luis Ysern de Arce). Horarios de apertura, recorridos, planos y el Pasaporte de la Ruta de las Iglesias.'
    },
    {
      id: 'doc-historia-sitio-pm',
      name: 'Historia oficial del Sitio Patrimonio Mundial Iglesias de Chiloé',
      type: 'doc',
      url: 'https://chiloepatrimoniomundial.gob.cl/historia/',
      size: '—',
      description: 'Línea de tiempo oficial del Servicio Nacional del Patrimonio Cultural: desde el pueblo huilliche previo a la conquista, la primera misión franciscana en 1568, la llegada de los jesuitas en 1608 y la inscripción de las 16 iglesias en la Lista del Patrimonio Mundial de la UNESCO (años 2000 y 2001).'
    },
    {
      id: 'doc-memoria-chilena-jesuitas',
      name: 'Memoria Chilena: Misioneros jesuitas en Chiloé',
      type: 'doc',
      url: 'https://www.memoriachilena.gob.cl/602/w3-article-93786.html',
      size: '—',
      description: 'Artículo de la Biblioteca Nacional de Chile sobre la llegada de la Compañía de Jesús a la isla en 1608 y la evangelización de los chonos y de las comunidades huilliches del archipiélago.'
    },
    {
      id: 'doc-misiones-circulares-gutierrez',
      name: 'Estudio académico: Las misiones circulares de los jesuitas en Chiloé (Ramón Gutiérrez)',
      type: 'archive',
      url: 'http://www.scielo.org.co/pdf/apun/v20n1/v20n1a04.pdf',
      size: 'PDF',
      description: 'Publicación de referencia sobre la misión circular de los padres Melchor Strasser y Miguel Meyer (1758-1759), la capilla de Ichuac, las cabeceras de Achao, Chonchi, Nahuel Huapi, Guar y Cailín, y las 77 capillas jesuitas referidas hacia 1755.'
    },
    {
      id: 'doc-museo-iglesias-ancud',
      name: 'Museo de las Iglesias de Chiloé (Ancud) · Punto de inicio de la Ruta',
      type: 'doc',
      url: 'https://www.registromuseoschile.cl/663/w3-article-115869.html',
      size: '—',
      description: 'Ficha oficial del museo instalado en el ex convento de las Hijas de la Inmaculada Concepción (1875), con 72 piezas entre maquetas, ensambles, imaginería y muestras de las restauraciones.'
    }
  ],
  stops: [
    {
      id: 'stop-iglesias-ancud-1',
      order: 1,
      title: 'Museo de las Iglesias de Chiloé (Ancud)',
      subtitle: 'El punto de partida de la Ruta: el centro de interpretación del Sitio Patrimonio Mundial',
      category: 'museum',
      location: {
        lat: -41.8684,
        lng: -73.8272,
        address: 'Ex convento de las Hijas de la Inmaculada Concepción, centro de Ancud, Región de Los Lagos'
      },
      triggerRadiusMeters: 60,
      narrativeText: 'Bienvenido a la Ruta de las Iglesias de Chiloé. Este museo, instalado en una casona de 1875 que durante décadas albergó a las religiosas de la Congregación de las Hijas de la Inmaculada Concepción, es el centro de interpretación del Sitio Patrimonio Mundial. Aquí se comprenden las piezas antes de visitar las iglesias: maquetas de los 16 templos, ensambles de madera extraídos de las restauraciones, imaginería religiosa y la historia de la Escuela Chilota de Arquitectura Religiosa en Madera. El museo pertenece a la Fundación de las Iglesias Patrimoniales de Chiloé, heredera de la Fundación Cultural y Educacional "Amigos de las Iglesias de Chiloé", creada el 16 de julio de 1993 por el entonces obispo de Ancud, monseñor Juan Luis Ysern de Arce, con académicos de la Universidad de Chile. La Fundación administra el sitio junto al Obispado de Ancud, propietario legal de los templos, y aquí puedes adquirir el Pasaporte de la Ruta de las Iglesias, el documento que los anfitriones de cada comunidad sellan a lo largo del recorrido. Es la puerta de entrada perfecta al tema de esta audioguía: las misiones circulares de los jesuitas y los primeros siglos de evangelización del archipiélago.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 180,
        voiceName: 'Puck',
        transcript: 'Estás en el Museo de las Iglesias de Chiloé, en Ancud. En esta casona de 1875, hoy centro de interpretación del Sitio Patrimonio Mundial, se entienden las 16 iglesias antes de visitarlas: maquetas, ensambles de madera e imaginería. Es el corazón de la Fundación que nació en 1993 con el nombre de Amigos de las Iglesias de Chiloé, creada por monseñor Juan Luis Ysern de Arce junto a académicos de la Universidad de Chile. Aquí comienza la Ruta: con el Pasaporte que sellan las comunidades, y con la historia de los jesuitas que, desde 1608, recorrieron este archipiélago en misiones circulares.'
      },
      images: [
        {
          id: 'img-iglesias-museo-1',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Museo%20de%20las%20Iglesias%20-%20Flickr%20-%20Casper%20Abrilot.jpg?width=1280',
          caption: 'El Museo de las Iglesias de Chiloé en Ancud, punto de inicio oficial de la Ruta',
          isPrimary: true
        },
        {
          id: 'img-iglesias-museo-2',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ancud%20-%20Museo%20Iglesias%20Patrimoniales.jpg?width=1280',
          caption: 'La casona patrimonial del ex convento: sus piezas muestran la historia de la carpintería chilota',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://www.iglesiaschiloe.cl'
      },
      documents: [
        {
          id: 'doc-museo-pasaporte',
          name: 'Pasaporte de la Ruta de las Iglesias de Chiloé',
          type: 'guide',
          url: 'https://www.iglesiaschiloe.cl',
          size: '—',
          description: 'Documento sellado por los anfitriones de cada comunidad; se adquiere en el Museo de las Iglesias de Chiloé y en puntos de la Ruta.'
        }
      ],
      tips: 'Compra aquí tu Pasaporte de la Ruta al comenzar: cada iglesia lo sella con su propia marca y quedará tu recuerdo del recorrido completo por las 16 iglesias.',
      trivia: 'Entre los años 2000 y 2001, dieciséis iglesias de Chiloé fueron inscritas en la Lista del Patrimonio Mundial de la UNESCO: catorce en diciembre de 2000 y dos más en junio de 2001.',
      estimatedStayMinutes: 45
    },
    {
      id: 'stop-iglesias-castro-2',
      order: 2,
      title: 'Iglesia San Francisco de Castro',
      subtitle: 'La catedral de madera del archipiélago y la antigua residencia jesuita',
      category: 'church',
      location: {
        lat: -42.48194,
        lng: -73.7625,
        address: 'Plaza de Armas de Castro, Región de Los Lagos'
      },
      triggerRadiusMeters: 35,
      narrativeText: 'Delante de ti, la iglesia de San Francisco de Castro, la más grande de las iglesias de madera inscritas en la Lista del Patrimonio Mundial. Es del siglo XX: fue proyectada por el arquitecto italiano Eduardo Provasoli, combinando el gótico europeo con la carpintería chilota de caja y espiga y su famosísimo torreón de tejuelas pintado de fucsia. Pero su historia se hunde en la misión jesuita. Castro fue la capital civil y religiosa de Chiloé: aquí tuvieron los jesuitas su residencia y el Colegio desde donde salían los misioneros hacia el sur y el norte del archipiélago. Desde esta ciudad, desde el siglo XVII en adelante, los padres de la Compañía de Jesús organizaron las célebres misiones circulares: viajes anuales de hasta ocho meses en los que un misionero recorría cerca de cuatro mil kilómetros en dalca y a pie para visitar más de ochenta capillas dispersas entre más de cuarenta islas. En cada capilla permanecía solo unos días: catequesis, bautizos, confesiones y misa, y luego seguía. Durante el resto del año, la vida religiosa de cada comunidad quedaba en manos del fiscal, el catequista laico. Esa red de capillas, construida por los jesuitas y heredada por franciscanos y clero secular, es el origen de las iglesias que hoy visitarás.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 190,
        voiceName: 'Charon',
        transcript: 'Esta es la iglesia de San Francisco de Castro, la más grande del Sitio Patrimonio Mundial, con su torreón de tejuelas fucsia proyectado por el italiano Eduardo Provasoli. Pero mira más allá de la torre moderna: Castro fue la residencia de los jesuitas, el punto desde donde partían las misiones circulares. Ocho meses al año, un misionero recorría cerca de cuatro mil kilómetros en dalca y a pie para visitar más de ochenta capillas. En cada una se quedaba unos días y el resto del año la comunidad quedaba a cargo del fiscal, el catequista laico. Ese sistema explica por qué hoy hay más de ciento cincuenta iglesias en el archipiélago.'
      },
      images: [
        {
          id: 'img-iglesias-castro-1',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Iglesia%20San%20Francisco%20de%20Castro%20%281%29.jpg?width=1280',
          caption: 'Torreón fucsia de la iglesia de San Francisco de Castro',
          isPrimary: true
        },
        {
          id: 'img-iglesias-castro-2',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Iglesia%20San%20Francisco%2C%20Castro%2C%20Isla%20de%20Chilo%C3%A9%2C%20Chile.JPG?width=1280',
          caption: 'Volúmenes y tejuelas de la catedral de madera de Castro',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://chiloepatrimoniomundial.gob.cl'
      },
      documents: [],
      tips: 'Sube por el pasaje Gamboa para la postal clásica: la torre fucsia de la iglesia y los palafitos del fiordo en un mismo encuadre.',
      trivia: 'La torre original de San Francisco de Castro, de madera, se incendió el año 2002 y fue reconstruida con técnicas tradicionales: hoy vuelve a ser el faro de tejuelas del centro de Castro.',
      estimatedStayMinutes: 25
    },
    {
      id: 'stop-iglesias-chonchi-3',
      order: 3,
      title: 'Iglesia de Nuestra Señora del Rosario de Chonchi',
      subtitle: 'Blanco y celeste sobre la "ciudad de los tres pisos"',
      category: 'church',
      location: {
        lat: -42.6247,
        lng: -73.7725,
        address: 'Plaza de Chonchi, Región de Los Lagos'
      },
      triggerRadiusMeters: 35,
      narrativeText: 'Chonchi, la "ciudad de los tres pisos", se asoma al mar en terrazas y en su punto más alto se levanta la iglesia de Nuestra Señora del Rosario, blanca con molduras celestes, construida a mediados del siglo XIX sobre una capilla más antigua. En la época jesuita, Chonchi fue una de las cabeceras de la misión: uno de los puntos donde se instalaron residencias fijas y desde donde partían las misiones hacia las islas del sur, junto a Achao, Nahuel Huapi, Guar y Cailín. La arquitectura que ves es un perfecto ejemplo de la Escuela Chilota: maderas nativas unidas a caja y espiga, tejuelas y un pórtico de acceso, todo ensamblado sin clavos, con la misma lógica con que los astilleros construían barcos. Los misioneros europeos, sobre todo desde el siglo XVIII, aportaron los diseños inspirados en las iglesias de sus regiones; la carpintería chilota aportó la técnica, la madera y la mano de obra. Esa fusión es exactamente lo que la UNESCO reconoció como valor universal excepcional.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 175,
        voiceName: 'Fenrir',
        transcript: 'Desde esta plaza mira la fachada celeste y blanca de Nuestra Señora del Rosario de Chonchi. Es de mediados del siglo XIX, levantada sobre una capilla anterior. En la época de los jesuitas, Chonchi fue cabecera de misión, residencia fija desde donde partían las visitas a las islas del sur. Observa que todo es madera unida a caja y espiga, sin clavos: la técnica de los astilleros aplicada a un templo. Los misioneros centroeuropeos daban el diseño; los carpinteros chilotes, la madera, la técnica y el trabajo.'
      },
      images: [
        {
          id: 'img-iglesias-chonchi-1',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Iglesia%20de%20Chonchi.jpg?width=1280',
          caption: 'Fachada blanca y celeste de la iglesia de Nuestra Señora del Rosario de Chonchi',
          isPrimary: true
        }
      ],
      socialLinks: {},
      documents: [],
      tips: 'Visita de enero a marzo con el Pasaporte de la Ruta: los anfitriones locales abren las iglesias y narran la historia de su propia comunidad.',
      trivia: 'La iglesia de Chonchi fue declarada Monumento Histórico y su fachada, con el blanco y el celeste, es una de las más fotografiadas de las islas.',
      estimatedStayMinutes: 20
    },
    {
      id: 'stop-iglesias-rilan-4',
      order: 4,
      title: 'Iglesia de Santa María de Rilán',
      subtitle: 'Una capilla levantada por la comunidad: la fe hecha minga',
      category: 'church',
      location: {
        lat: -42.4861,
        lng: -73.6189,
        address: 'Rilán, comuna de Castro, Región de Los Lagos'
      },
      triggerRadiusMeters: 40,
      narrativeText: 'En Rilán, la fe de una comunidad campesina tomó forma de iglesia. El primer templo de madera se levantó aquí alrededor de 1720, en pleno apogeo de las misiones circulares, y la construcción actual, con su torre y su pórtico blanco, fue erigida por los propios vecinos en jornadas de trabajo comunitario que en Chiloé se llaman minga. Esta es la clave para entender todas las iglesias del archipiélago: no son obra de un arquitecto ni de una empresa, sino de la comunidad entera, que cortó el alerce y el ciprés de las Guaitecas, labró las piezas y las ensambló en jornadas de ayuda mutua. Los misioneros de la Compañía de Jesús necesitaban lugares dignos para celebrar cuando llegaban a cada villa en su misión circular, y fueron los propios isleños, herederos de la carpintería de ribera, quienes dieron forma a esas capillas. Aún hoy, cuando una iglesia necesita reparaciones, las comunidades vuelven a convocar mingas, como la campaña de restauración colaborativa que la Fundación de las Iglesias Patrimoniales de Chiloé impulsó por la iglesia de Ichuac. ¿Miras la torre? Cada pieza cuenta esa historia.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 175,
        voiceName: 'Kore',
        transcript: 'La iglesia de Santa María de Rilán fue levantada por su propia comunidad en jornadas de trabajo llamadas minga. Un primer templo se erigió aquí hacia 1720, en tiempos de las misiones circulares, y el actual fue construido por los vecinos con alerce y ciprés ensamblados a caja y espiga. Las iglesias de Chiloé no son obra de un arquitecto: son obra de la comunidad entera. Los misioneros necesitaban capillas para detenerse en su recorrido, y los carpinteros chilotes las hicieron con la sabiduría de los astilleros.'
      },
      images: [
        {
          id: 'img-iglesias-rilan-1',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Iglesia%20de%20Santa%20Mar%C3%ADa%20de%20Ril%C3%A1n%2C%20o%20Iglesia%20de%20Ril%C3%A1n.%20Isla%20Grande%20de%20Chilo%C3%A9.%20Chile.jpg?width=1280',
          caption: 'La iglesia de Santa María de Rilán, construida por la comunidad',
          isPrimary: true
        }
      ],
      socialLinks: {},
      documents: [],
      tips: 'En Rilán la mejor hora es la tarde: la luz dorada ilumina la fachada blanca sobre los potreros y el canal de Quinchao al fondo.',
      trivia: 'La palabra minga, que nombra el trabajo comunitario, viene del quechua: en Chiloé se usa para techos, para el curanto e incluso para mudar casas enteras.',
      estimatedStayMinutes: 20
    },
    {
      id: 'stop-iglesias-dalcahue-5',
      order: 5,
      title: 'Iglesia de Nuestra Señora de los Dolores de Dalcahue',
      subtitle: 'El canal que cruzaban los misioneros en dalca',
      category: 'church',
      location: {
        lat: -42.3775,
        lng: -73.64972,
        address: 'Plaza de Dalcahue, Región de Los Lagos'
      },
      triggerRadiusMeters: 35,
      narrativeText: 'Frente a ti, la parroquia de Nuestra Señora de los Dolores, de fachada blanca y arcadas, levantada a mediados del siglo XIX en la plaza de Dalcahue. Detrás de ella corre el canal que separa la Isla Grande de la isla Quinchao, y ese canal es el verdadero protagonista de esta historia: antes de los carreteros y los transbordadores, quienes lo cruzaban eran los misioneros en sus dalcas, canoas hechas de un solo tronco de alerce o de ciprés, las mismas embarcaciones que los chonos manejaban por los laberintos australes. Las misiones circulares dependían del mar: el misionero y sus bogadores navegaban de capilla en capilla, sorteando mareas de hasta seis metros y vientos del oeste. Del otro lado del canal, en Quinchao, te espera la isla que concentra el mayor número de iglesias patrimoniales por metro cuadrado del mundo. Antes de cruzar, conversa en la feria del canal: sus lancheros, tejedoras y vendedores de curanto mantienen viva la economía campesina e insular que sostuvo a estas comunidades desde los tiempos de la misión.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 180,
        voiceName: 'Zephyr',
        transcript: 'Esta es la iglesia de Nuestra Señora de los Dolores de Dalcahue, de mediados del siglo XIX. Mira el canal: ahí está la otra mitad de la historia. Los misioneros cruzaban estos pasos en dalcas, canoas de un solo tronco, visitando capillas entre las islas. Las misiones circulares dependían del mar y de la marea. Del otro lado está Quinchao, la isla con más iglesias patrimoniales del mundo. Antes de cruzar, pasea por la feria: lancheros, tejedoras y curanto, la economía que dio vida a estas comunidades desde la época de la misión.'
      },
      images: [
        {
          id: 'img-iglesias-dalcahue-1',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Iglesia%20de%20Dalcahue.jpg?width=1280',
          caption: 'La iglesia blanca de Dalcahue frente al canal de Quinchao',
          isPrimary: true
        }
      ],
      socialLinks: {},
      documents: [],
      tips: 'La lancha del canal sale cada pocos minutos hacia Quinchao: en diez minutos quedas en la isla de las iglesias patrimoniales.',
      trivia: 'Los viajes de los misioneros europeos en Chiloé solían combinar semanas de navegación con largas travesías a pie por la Cordillera de la Costa insular.',
      estimatedStayMinutes: 25
    },
    {
      id: 'stop-iglesias-achao-6',
      order: 6,
      title: 'Iglesia de Santa María de Loreto de Achao',
      subtitle: 'La más antigua de las iglesias patrimoniales, corazón de la doctrina de Quinchao',
      category: 'church',
      location: {
        lat: -42.4714,
        lng: -73.49,
        address: 'Plaza de Achao, isla Quinchao, Región de Los Lagos'
      },
      triggerRadiusMeters: 35,
      narrativeText: 'En la Plaza de Achao se encuentra la más antigua de las dieciséis iglesias patrimoniales y una de las edificaciones de madera más notables de Sudamérica: Santa María de Loreto, cuyos primeros templos se remontan al siglo XVIII bajo la tutela de la Compañía de Jesús. La devoción a la Virgen de Loreto llegó con misioneros de origen centroeuropeo —bávaros, húngaros, transilvanos— que mantenían viva la tradición de la Santa Casa de Nazaret. Achao fue la cabecera del antiguo curato o doctrina de Quinchao, el territorio que concentró la mayor actividad de la misión circular: desde aquí los jesuitas partían en dalca hacia Caguach, Llingua, San Agustín y decenas de villorrios. Fíjate en la estructura: los pilares de alerce, los ensambles de caja y espiga, las tejuelas perfiladas que recuerdan a los astilleros. Este templo fue el primero de Chiloé declarado Monumento Histórico, mucho antes de que la UNESCO reconociera al conjunto entero, y su campanario, con la madera lavada por más de dos siglos de lluvia y sal, sigue llamando a la comunidad como llamaba a los fieles en tiempos de los padres jesuitas.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 190,
        voiceName: 'Puck',
        transcript: 'Bienvenido a Achao, a la iglesia más antigua del Sitio Patrimonio Mundial: Santa María de Loreto, levantada en el siglo XVIII bajo la tutela de la Compañía de Jesús. La devoción a la Virgen de Loreto llegó con misioneros centroeuropeos. Achao fue cabecera de la doctrina de Quinchao, el corazón de la misión circular: desde aquí se partía en dalca hacia Caguach y decenas de villorrios. Mira los pilares de alerce, los ensambles de caja y espiga, las tejuelas de astillero. Este fue el primer templo de Chiloé declarado Monumento Histórico, mucho antes que la UNESCO reconociera al conjunto completo.'
      },
      images: [
        {
          id: 'img-iglesias-achao-1',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Iglesia%20de%20Achao.jpg?width=1280',
          caption: 'Santa María de Loreto de Achao, la más antigua de las 16 iglesias patrimoniales',
          isPrimary: true
        }
      ],
      socialLinks: {},
      documents: [],
      tips: 'Conserva el horario de apertura (febrero y temporada estival): los anfitriones de la comunidad abren los retablos dorados y el órgano antiguo del templo.',
      trivia: 'La misión circular de los padres Melchor Strasser y Miguel Meyer, entre 1758 y 1759, comenzó en la capilla de Ichuac y recorrió Rilán, Dalcahue y Caguach en un itinerario que hoy casi coincide con la Ruta de las Iglesias.',
      estimatedStayMinutes: 30
    },
    {
      id: 'stop-iglesias-quinchao-7',
      order: 7,
      title: 'Iglesia de Nuestra Señora de Gracia de Quinchao',
      subtitle: 'El campanario más alto de la Escuela Chilota y la sede histórica del distrito',
      category: 'church',
      location: {
        lat: -42.5344,
        lng: -73.4189,
        address: 'Villa Quinchao, isla Quinchao, Región de Los Lagos'
      },
      triggerRadiusMeters: 40,
      narrativeText: 'La villa de Quinchao, capital de la comuna que ocupa la mitad oriental de la isla, posee una de las iglesias más imponentes de todo el conjunto: Nuestra Señora de Gracia, con su campanario que se considera la torre de madera más alta del archipiélago, visible desde largas distancias entre los potreros y el mar. Antes de la llegada de los misioneros, esta zona era territorio huilliche; los jesuitas reconocieron esos asentamientos, fundaron en ellos sus capillas y crearon la misión circular, estructurando el territorio en distritos o "partidos" con cabeceras como Achao y Quinchao, que a comienzos del siglo XVIII dependían, junto a Chonchi y Cailín, de los curatos de Castro y de Chacao. De la visita del obispo a comienzos de esa centuria se desprenden cifras asombrosas: capillas que bordeaban la ochentena repartidas por más de cuarenta islas. Esa red explica por qué el movimiento de la misión circular, ese barrido continuo por mar y tierra, produjo más de ciento cincuenta iglesias a lo largo de los siglos en el archipiélago.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 180,
        voiceName: 'Fenrir',
        transcript: 'En Quinchao, la iglesia de Nuestra Señora de Gracia exhibe una de las torres de madera más altas de Chiloé. Aquí había asentamientos huilliche cuando llegaron los jesuitas, que fundaron capillas y organizaron el territorio en partidos con cabeceras como Achao y Quinchao. A comienzos del siglo XVIII, las capillas bordeaban la ochentena a lo largo de más de cuarenta islas. Ese es el verdadero legado de la misión circular: más de ciento cincuenta iglesias que hoy dan forma al paisaje del archipiélago.'
      },
      images: [
        {
          id: 'img-iglesias-quinchao-1',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Iglesia%20de%20Quinchao.jpg?width=1280',
          caption: 'La torre de Nuestra Señora de Gracia de Quinchao, la más alta de las iglesias patrimoniales',
          isPrimary: true
        }
      ],
      socialLinks: {},
      documents: [],
      tips: 'La torre se ve desde varios kilómetros: busca el punto más alto del camino rural para la panorámica completa de esta iglesia entre praderas.',
      trivia: 'El archipiélago de Chiloé tiene más de cuarenta islas habitables; la zona de Quinchao concentra cinco de las dieciséis iglesias patrimoniales.',
      estimatedStayMinutes: 20
    },
    {
      id: 'stop-iglesias-caguach-8',
      order: 8,
      title: 'Iglesia de Jesús Nazareno de Caguach',
      subtitle: 'La isla santa de la peregrinación y el sincretismo del archipiélago',
      category: 'church',
      location: {
        lat: -42.3886,
        lng: -73.3356,
        address: 'Isla Caguach, Archipiélago de Chiloé, Región de Los Lagos'
      },
      triggerRadiusMeters: 50,
      narrativeText: 'Navegando hacia el noreste llegas a la isla de Caguach, tierra de una de las devociones más antiguas y queridas de Chiloé: el Jesús Nazareno, una imagen que reúne cada año a miles de peregrinos que cruzan el mar desde todas las islas en lanchas engalanadas. Aquí, la misión circular de los jesuitas encontró su expresión más profunda y duradera: una fe católica firmemente incrustada en la cultura mapuche-huilliche y chilota, con sus procesiones marítimas, sus novenarios de agosto, su música y su gastronomía compartida. La iglesia actual, blanca, de madera y con su pórtico de arcos, es el templo de una peregrinación que se remonta al siglo XVIII, cuando los misioneros de la cercana Achao atendían la isla en sus visitas anuales transportando la imagen del Nazareno. En Caguach el sincretismo es tangible: la celebración religiosa convive con la minga, el curanto y los rezos en castellano antiguo que las comunidades conservan como un tesoro. Esta es la prueba más viva de que las iglesias de Chiloé no son monumentos muertos, sino núcleos de una fe comunitaria que sigue en movimiento.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 185,
        voiceName: 'Charon',
        transcript: 'En la isla de Caguach se venera al Jesús Nazareno, una devoción que reúne cada año a miles de peregrinos que cruzan el mar en lanchas. Los jesuitas de la cercana Achao atendían la isla en sus visitas anuales de la misión circular. La iglesia blanca de madera es el templo de una peregrinación del siglo XVIII, donde la fe católica se funde con la cultura chilota: procesiones marítimas, novenarios, mingas y curanto. Las iglesias de Chiloé no son monumentos muertos: son el corazón vivo de comunidades que siguen celebrando.'
      },
      images: [
        {
          id: 'img-iglesias-caguach-1',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Iglesia%20de%20Caguach.jpg?width=1280',
          caption: 'La iglesia del Jesús Nazareno de Caguach, destino de la gran peregrinación del archipiélago',
          isPrimary: true
        }
      ],
      socialLinks: {},
      documents: [],
      tips: 'Para vivir la peregrinación, pregunta por las fechas del novenario del Nazareno: las lanchas decoradas y las procesiones marítimas son inolvidables.',
      trivia: 'El Nazareno de Caguach es conocido como el "patrono de los isleños": su devoción sobrevivió a la propia expulsión de los jesuitas en 1767.',
      estimatedStayMinutes: 35
    },
    {
      id: 'stop-iglesias-teraun-9',
      order: 9,
      title: 'Iglesia de Nuestra Señora del Patrocinio de Tenaún',
      subtitle: 'La fachada mestiza entre el mar y las colinas del canal',
      category: 'church',
      location: {
        lat: -42.3272,
        lng: -73.3808,
        address: 'Tenaún, comuna de Dalcahue, Región de Los Lagos'
      },
      triggerRadiusMeters: 40,
      narrativeText: 'Regresando a la Isla Grande, bordeando la costa oriental, encuentras Tenaún, donde la iglesia de Nuestra Señora del Patrocinio levanta su fachada de madera con influencia del barroco andino y mestizo, policromada con vivos colores que contrastan con el verde de las praderas y el gris del mar. Tenaún fue parte importante de la red misional del distrito de Dalcahue: su capilla, desde tiempos de las visitas circulares, atendía un sector de bosques y canales donde los misioneros desembarcaban en caletas hoy perdidas. La iglesia conserva la estructura tripartita, las torres de tejuelas y el retablo dorado que caracterizan a la Escuela Chilota en su versión más "barroca", aquella que quiso impresionar con color y forma precisamente porque el templo era el único edificio público de la aldea: la casa de la comunidad, del culto y de las fiestas patronales. Mírala de frente: es la misma silueta que vieron los fiscal y los fieles durante generaciones, el faro visual que anunciaba que la comunidad estaba viva en el extremo del mundo.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 175,
        voiceName: 'Kore',
        transcript: 'En Tenaún, la iglesia de Nuestra Señora del Patrocinio muestra una fachada de influencia barroca andina, policromada, muy distinta a las blancas del resto del archipiélago. La capilla atendía este sector de bosques y canales en las visitas de la misión circular. La iglesia era más que un templo: era la casa de la comunidad, del culto y de las fiestas. Por eso la arquitectura quiso ser hermosa e impresionante: era el edificio más importante de la aldea.'
      },
      images: [
        {
          id: 'img-iglesias-teraun-1',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Iglesia%20de%20Tena%C3%BAn.jpg?width=1280',
          caption: 'La fachada policromada de Nuestra Señora del Patrocinio de Tenaún',
          isPrimary: true
        }
      ],
      socialLinks: {},
      documents: [],
      tips: 'Busca el retablo interior: muchos templos conservan el dorado original que realza la imaginería traída o tallada localmente.',
      trivia: 'Varios nombres de las iglesias del conjunto corresponden a advocaciones que honran el calendario misional jesuita y el patronazgo de los nuevos templos.',
      estimatedStayMinutes: 20
    },
    {
      id: 'stop-iglesias-san-juan-10',
      order: 10,
      title: 'Iglesia de San Juan Bautista de San Juan',
      subtitle: 'La fachada retablo de madera que parece la proa de una nave',
      category: 'church',
      location: {
        lat: -42.3269,
        lng: -73.5183,
        address: 'San Juan, comuna de Dalcahue, Región de Los Lagos'
      },
      triggerRadiusMeters: 40,
      narrativeText: 'Última parada: la iglesia de San Juan Bautista, en la aldea de San Juan. Su fachada, toda de madera, está organizada como un gran retablo y muchos viajeros la describen como la proa de una nave; no es casualidad. Los primeros templos del archipiélago fueron obra de los misioneros y de las comunidades, pero los grandes carpinteros que le dieron forma eran hombres de los astilleros: constructores de barcos que trasladaron a la arquitectura religiosa las técnicas del ensamblado naval, los espejados y las piezas encajadas sin clavos. San Juan Bautista concentra esa genialidad: cada pieza de su fachada encaja como las maderas de un casco, y la torre, teñida por la sal del canal, remata la silueta de un templo que mira a la vez a la plaza y a la mar. Aquí termina el recorrido que comenzó con la llegada de los jesuitas en 1608, siguió con la misión circular que atravesó el archipiélago en dalcas, y culmina en esta red de más de ciento cincuenta iglesias donde la fe europea y la carpintería chilota se encontraron para crear un patrimonio que el mundo entero reconoce.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 185,
        voiceName: 'Zephyr',
        transcript: 'Última parada: la iglesia de San Juan Bautista, cuya fachada parece la proa de un barco. No es casualidad: los grandes carpinteros chilotes venían de los astilleros y trasladaron la técnica naval a la arquitectura, piezas encajadas sin clavos. Así cerramos la ruta que comenzó en 1608 con la llegada de los jesuitas, siguió con las misiones circulares en dalca y culminó en más de ciento cincuenta iglesias: el encuentro entre la fe europea y la carpintería chilota convertido en Patrimonio Mundial.'
      },
      images: [
        {
          id: 'img-iglesias-san-juan-1',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Iglesia%20de%20San%20Juan%2C%20Dalcahue%2C%20Isla%20Grande%20de%20Chilo%C3%A9%2C%20Regi%C3%B3n%20de%20Los%20Lagos%2C%20Chile.jpg?width=1280',
          caption: 'La fachada retablo de San Juan Bautista, la "proa" de madera de la Escuela Chilota',
          isPrimary: true
        }
      ],
      socialLinks: {},
      documents: [],
      tips: 'Pide el sello del Pasaporte a los anfitriones y reúne los sellos de las iglesias que visites: tendrás un mapa vivo de tu propia misión circular.',
      trivia: 'Tras la expulsión de los jesuitas en 1767, las misiones continuaron con los franciscanos y luego con el clero secular, pero las comunidades y sus fiscales jamás dejaron de mantener sus iglesias en pie.',
      estimatedStayMinutes: 20
    }
  ]
};