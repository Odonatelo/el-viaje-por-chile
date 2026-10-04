import { Tour } from '../types';

export const tourParqueNacionalRioClarillo: Tour = {
  id: 'tour-parque-nacional-rio-clarillo',
  title: 'Baños de Bosque en el Parque Nacional Río Clarillo: el Silencio del Secano',
  tagline:
    'Audioguía Oficial El Viaje Por Chile • Senderos esclerófilos, pozas de agua clara y prácticas de bienestar: la naturaleza mediterránea de Chile a minutos de Santiago',
  description:
    'Audioguía producida por el Equipo El Viaje Por Chile (www.elviaje.cl). El Parque Nacional Río Clarillo, creado como Reserva Nacional por Decreto Supremo 19 el 5 de marzo de 1982, protege 13.134,15 hectáreas de bosque esclerófilo en la precordillera de Pirque, Región Metropolitana. Es el área silvestre protegida del Estado más cercana a Santiago y una de las mejores aulas vivas de la vegetación mediterránea de Chile central: quillay, peumo, litre, boldo, patagua y quisco, junto a un río de aguas cristalinas que le da nombre al parque. Este circuito de siete paradas es un ejercicio de shinrin-yoku —baño de bosque— conducido por la accesibilidad y la calma: acceso y centro de información, las piscinas naturales del río, los senderos Quebrada Jorquera, Arboretum y Trikau, el mirador y el cierre junto al agua. Seis estaciones donde el bienestar y la interpretación del patrimonio natural caminan juntos.',
  coverImage:
    'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Rio_Clarillo.jpg/1280px-Rio_Clarillo.jpg',
  city: 'Pirque, Región Metropolitana de Santiago',
  country: 'Chile',
  category: 'nature',
  language: 'Español',
  durationMinutes: 180,
  distanceKm: 9.5,
  difficulty: 'easy',
  rating: 4.9,
  reviewsCount: 58,
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
      id: 'doc-rio-clarillo-parque',
      name: 'Dossier: Parque Nacional Río Clarillo.pdf',
      type: 'guide',
      url: '/pdf/doc-rio-clarillo-parque.pdf',
      size: '68 KB',
      description: 'Historia de la protección del bosque esclerófilo de Pirque, las 13.134 hectáreas y el rol del parque como primera área silvestre protegida metropolitana.'
    },
    {
      id: 'doc-rio-clarillo-senderos',
      name: 'Guía de Senderos: Jorquera, Arboretum y Trikau.pdf',
      type: 'pdf',
      url: '/pdf/doc-rio-clarillo-senderos.pdf',
      size: '72 KB',
      description: 'Descripción de los senderos del parque, sus dificultades y la práctica del baño de bosque (shinrin-yoku) estación por estación.'
    }
  ],
  stops: [
    {
      id: 'stop-rio-clarillo-acceso',
      order: 1,
      title: 'Acceso y Centro de Información Ambiental',
      subtitle: 'La puerta del parque, la historia de la reserva y el plan del baño de bosque',
      category: 'nature',
      location: {
        lat: -33.72308,
        lng: -70.49198,
        address: 'Acceso al Parque Nacional Río Clarillo, Pirque'
      },
      triggerRadiusMeters: 90,
      narrativeText:
        'Pocos parques en el mundo están tan cerca de una capital: el Parque Nacional Río Clarillo queda a unos cuarenta minutos de Santiago, en la comuna de Pirque, y es el área silvestre protegida del Estado más cercana a la ciudad. Nació como Reserva Nacional por el Decreto Supremo 19 del 5 de marzo de 1982 y hoy, renombrado como Parque Nacional Río Clarillo, protege 13.134,15 hectáreas de la precordillera de la cordillera de los Andes, dominadas por el bosque esclerófilo: quillay, peumo, litre, boldo, arrayán y el espino de las laderas bajas. En el centro de información, los guardaparques entregan el mapa, cuentan el estado de los senderos y sus horarios. Antes de partir, respira y hazte una pregunta: ¿qué vengo a buscar? Si es descanso, elige las piscinas del río; si es senderismo, Quebrada Jorquera o Arboretum; si vengo con movilidad reducida, el sendero Trikau. Aquí comienza tu baño de bosque: deja el teléfono en silencio y el tiempo de la ciudad en la puerta.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 185,
        voiceName: 'Kore',
        transcript:
          'Pocos parques en el mundo están tan cerca de una capital: el Parque Nacional Río Clarillo queda a unos cuarenta minutos de Santiago y es el área silvestre protegida del Estado más cercana a la ciudad. Nació como Reserva Nacional por el Decreto Supremo diecinueve de marzo de mil novecientos ochenta y dos y hoy protege trece mil ciento treinta y cuatro hectáreas de bosque esclerófilo: quillay, peumo, litre, boldo y espino. En el centro de información, los guardaparques entregan el mapa y el estado de los senderos. Antes de partir, pregúntate qué vienes a buscar: las piscinas del río para descansar, Jorquera o Arboretum para caminar, Trikau si vienes con movilidad reducida. Deja el teléfono en silencio y el tiempo de la ciudad en la puerta.'
      },
      images: [
        {
          id: 'img-rio-clarillo-acceso-1',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Sendero_Rio_Clarillo.jpg/1280px-Sendero_Rio_Clarillo.jpg',
          caption: 'Un sendero del parque: el bosque esclerófilo que abraza el camino',
          isPrimary: true
        },
        {
          id: 'img-rio-clarillo-acceso-2',
          url: 'https://upload.wikimedia.org/wikipedia/commons/4/42/R%C3%ADo_Clarillo_km.jpg',
          caption: 'La señalética de distancia del parque: pistas del recorrido que empieza',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://www.conaf.cl/parques/parque-nacional-rio-clarillo/'
      },
      documents: [],
      tips: 'Llega temprano (antes de las 11:00) en temporada alta: el estacionamiento tiene cupos y en verano el parque regula el ingreso. Consulta horarios de cierre, que cambian entre invierno y verano.',
      trivia:
        'Aunque no está documentada una etimología oficial del nombre «Clarillo», el río que da nombre al parque es famoso por sus aguas transparentes: agua clara, río claro.',
      estimatedStayMinutes: 20
    },
    {
      id: 'stop-rio-clarillo-piscinas',
      order: 2,
      title: 'Las Piscinas Naturales del Río Clarillo',
      subtitle: 'Las pozas de agua cristalina, el frescor y el descanso del agua',
      category: 'nature',
      location: {
        lat: -33.72455,
        lng: -70.48489,
        address: 'Zona de piscinas naturales del río Clarillo, Pirque'
      },
      triggerRadiusMeters: 80,
      narrativeText:
        'El río Clarillo es el corazón del parque y sus piscinas naturales, su puerta de entrada popular. En los meses cálidos, estas pozas de agua transparente —que a veces se forman escalonadas sobre las rocas, como anfiteatros de piedra— se convierten en el lugar de encuentro de las familias santiaguinas: el fresco del agua, la sombra de los quillayes y el sonido de la corriente. La seguridad es lo primero: el caudal cambia en primavera y tras las lluvias, y los guardaparques suelen marcar las áreas habilitadas para baño. Esta parada te invita al primer gesto del baño de bosque: cuando el agua esté correcta para el baño, entra con calma; cuando no, siéntate en la orilla a escuchar el río. Deja que el sonido del agua llene tu atención: es el mismo agua que baja de la cordillera de los Andes por la quebrada, modelando la poza y el bosque por miles de años.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 165,
        voiceName: 'Zephyr',
        transcript:
          'El río Clarillo es el corazón del parque y sus piscinas naturales, su puerta de entrada popular. En los meses cálidos, estas pozas de agua transparente, a veces escalonadas como anfiteatros de piedra, son el lugar de encuentro de las familias santiaguinas: el fresco del agua, la sombra de los quillayes y el sonido de la corriente. La seguridad es lo primero: el caudal cambia en primavera y los guardaparques marcan las áreas habilitadas para el baño. Esta parada te invita al primer gesto del baño de bosque: entra con calma cuando el agua lo permita y, si no, siéntate en la orilla a escuchar el río. Deja que su sonido llene tu atención.'
      },
      images: [
        {
          id: 'img-rio-clarillo-piscinas-1',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/81/Agua_limpia.JPG/1280px-Agua_limpia.JPG',
          caption: 'Las piscinas naturales del río Clarillo: el agua transparente que da nombre al parque',
          isPrimary: true
        },
        {
          id: 'img-rio-clarillo-piscinas-2',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/R%C3%ADo_Clarillo.jpg/1280px-R%C3%ADo_Clarillo.jpg',
          caption: 'La corriente del río entre las piedras del bosque esclerófilo',
          isPrimary: false
        }
      ],
      socialLinks: {},
      documents: [],
      tips: 'Infórmate del estado del caudal antes de ingresar al agua: tras lluvias intensas el río baja fuerte y las rocas se vuelven resbaladizas. No dejes basura en la orilla.',
      trivia:
        'Las piscinas que forman el río varían con cada estación: el agua modela la piedra, y por eso cada año el anfiteatro de pozas cambia de forma.',
      estimatedStayMinutes: 45
    },
    {
      id: 'stop-rio-clarillo-jorquera',
      order: 3,
      title: 'Sendero Quebrada Jorquera: la Botica del Bosque Esclerófilo',
      subtitle: 'Peumo, quillay, boldo y los aromas del secano andino',
      category: 'nature',
      location: {
        lat: -33.7259,
        lng: -70.48865,
        address: 'Inicio sendero Quebrada Jorquera, Parque Nacional Río Clarillo'
      },
      triggerRadiusMeters: 70,
      narrativeText:
        'El sendero Quebrada Jorquera es el aula viva del bosque esclerófilo, el bosque duro, de hoja perenne y resistente a la sequía que domina el Chile mediterráneo. A pocos pasos del río, el camino asciende suavemente entre quillayes, peumos, litres y boldos: especies que por siglos fueron la farmacia y la despensa del pueblo. El boldo con sus hojas de olor intenso, usado como digestivo; el quillay, cuya corteza produce saponina para el jabón; el peumo, de frutos roja que se comían a la sombra de la casa. Aquí el baño de bosque es un baño de olores: detente, frota una hoja entre los dedos, huele. Eso es lo que los japoneses llaman shinrin-yoku aplicado al secano andino: abrir los cinco sentidos al bosque. Fíjate también en el suelo: la hojarasca, los hongos y la vida que recicla la materia. Este bosque no es solo paisaje: es comunidad.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 175,
        voiceName: 'Puck',
        transcript:
          'El sendero Quebrada Jorquera es el aula viva del bosque esclerófilo, el bosque duro y resistente a la sequía que domina el Chile mediterráneo. El camino asciende entre quillayes, peumos, litres y boldos: especies que por siglos fueron la farmacia y la despensa del pueblo. El boldo digiere, el quillay hace jabón, el peumo dio frutos rojos a la mesa. Aquí el baño de bosque es un baño de olores: detente, frota una hoja entre los dedos y huele. Eso es shinrin-yoku aplicado al secano andino: abrir los cinco sentidos. Fíjate también en la hojarasca, los hongos y la vida que recicla la materia. Este bosque no es solo paisaje: es comunidad.'
      },
      images: [
        {
          id: 'img-rio-clarillo-jorquera-1',
          url: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Reserva_Nacional_R%C3%ADo_Clarillo.jpg',
          caption: 'El bosque esclerófilo del parque: quillayes y peumos en la precordillera andina',
          isPrimary: true
        },
        {
          id: 'img-rio-clarillo-jorquera-2',
          url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Peumo%2C_nativo_de_Chile.png',
          caption: 'El peumo (Cryptocarya alba): fruto y sombra del borde del río',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://www.conaf.cl/parques/parque-nacional-rio-clarillo/'
      },
      documents: [],
      tips: 'El sendero es de dificultad baja a media y toma unas dos horas ida y vuelta. Lleva agua, sombrero y protector solar: el bosque esclerófilo deja pasar mucha luz.',
      trivia:
        'El quillay, el árbol de la corteza jabonosa, fue uno de los primeros recursos de exportación del Chile republicano: su saponina viajó al mundo para hacer jabón y champú.',
      estimatedStayMinutes: 50
    },
    {
      id: 'stop-rio-clarillo-mirador',
      order: 4,
      title: 'Mirador Quebrada Jorquera: el Bosque desde la Altura',
      subtitle: 'Panorámica del parque y la serranía de Pirque',
      category: 'viewpoint',
      location: {
        lat: -33.72713,
        lng: -70.48591,
        address: 'Mirador Quebrada Jorquera, Parque Nacional Río Clarillo'
      },
      triggerRadiusMeters: 60,
      narrativeText:
        'Al llegar al punto alto del sendero, el bosque se abre y se revela en su escala: hacia un lado, la cuenca del Clarillo y sus manchones de monte; hacia el otro, la serranía de Pirque y, en días despejados, la silueta lejana de la cordillera. El mirador de Quebrada Jorquera es el lugar del parque para entender (y sentir) la pequeñez de lo humano: 13.134 hectáreas de verde duro bajando hacia el valle del Maipo. Esta es la segunda estación contemplativa del baño de bosque: párate, respira profundo y deja que la mirada trabaje. La práctica japonesa recomienda aquí el «barrido visual»: mover los ojos despacio, del cerro al valle, del valle al río, sin apuro. Con el tiempo, la mirada y la respiración se sincronizan, y el cuerpo entiende por qué los bosques son medicina. Observa cómo cambia la luz: el esclerófilo se vuelve dorado a media tarde, cuando el sol baja tras la cordillera de la costa.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 150,
        voiceName: 'Charon',
        transcript:
          'Al llegar al punto alto del sendero, el bosque se abre y se revela en su escala: la cuenca del Clarillo, la serranía de Pirque y, en días despejados, la silueta de la cordillera. El mirador de Quebrada Jorquera es el lugar del parque para entender la pequeñez de lo humano: trece mil ciento treinta y cuatro hectáreas de verde bajando hacia el valle del Maipo. Esta es la estación contemplativa del baño de bosque: párate, respira profundo y deja que la mirada trabaje. Los japoneses la llaman barrido visual: mover los ojos despacio, del cerro al valle, sin apuro. Con el tiempo la mirada y la respiración se sincronizan, y el cuerpo entiende por qué los bosques son medicina.'
      },
      images: [
        {
          id: 'img-rio-clarillo-mirador-1',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7f/Rio_Clarillo.jpg/1280px-Rio_Clarillo.jpg',
          caption: 'El valle del Clarillo visto desde la altura del parque',
          isPrimary: true
        },
        {
          id: 'img-rio-clarillo-mirador-2',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Quisco%2C_PN_Rio_Clarillo.jpg/1280px-Quisco%2C_PN_Rio_Clarillo.jpg',
          caption: 'Quisco (Echinopsis chiloensis), el cactus columnar del secano andino',
          isPrimary: false
        }
      ],
      socialLinks: {},
      documents: [],
      tips: 'El mirador no tiene sombra: evita las horas de sol directo para la meditación y prefiere la mañana o el atardecer, cuando además la luz es más hermosa.',
      trivia:
        'Desde los puntos altos del parque se adivina el corredor de conservación que une los Andes con la Cordillera de la Costa: los manchones verdes que hoy ves son los restos del bosque mediterráneo de Chile central.',
      estimatedStayMinutes: 25
    },
    {
      id: 'stop-rio-clarillo-arboretum',
      order: 5,
      title: 'Sendero Arboretum: el Jardín Botánico del Parque',
      subtitle: 'La colección de especies nativas y sus aves',
      category: 'nature',
      location: {
        lat: -33.72505,
        lng: -70.48587,
        address: 'Sendero Arboretum, Parque Nacional Río Clarillo'
      },
      triggerRadiusMeters: 70,
      narrativeText:
        'El Arboretum es la respuesta del parque a una pregunta: ¿cómo se muestra el bosque esclerófilo completo a quien lo visita? Aquí, junto al camino, se reúnen las especies más representativas del Chile mediterráneo en una colección ordenada, como un jardín botánico al aire libre: quillay, peumo, litre, boldo, arrayán, culén, espino y otras que los guardaparques identifican con carteles. Es el mejor lugar del parque para aprender los nombres y los olores de cada especie antes de encontrar sus parientes silvestres en los senderos más altos. La estación invita al juego: camina de árbol en árbol, lee los carteles, huele las cortezas, toca las texturas. Con suerte escucharás el canto de las aves que habitan el bosque, como el fío-fío, la tenca o el chimbarongo. El Arboretum es, además, un gesto de educación ambiental: conocer es cuidar, y aquí el parque enseña con ejemplares vivos.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 155,
        voiceName: 'Fenrir',
        transcript:
          'El Arboretum es la respuesta del parque a una pregunta: cómo mostrar el bosque esclerófilo completo a quien lo visita. Aquí se reúnen las especies más representativas del Chile mediterráneo en una colección ordenada: quillay, peumo, litre, boldo, arrayán, culén y espino, identificados con carteles. Es el mejor lugar para aprender los nombres y los olores antes de encontrar los parientes silvestres en los senderos altos. Camina de árbol en árbol, huele las cortezas, toca las texturas y escucha el canto de las aves: el fío-fío, la tenca. El Arboretum es un gesto de educación ambiental: conocer es cuidar.'
      },
      images: [
        {
          id: 'img-rio-clarillo-arbo-1',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Sendero_Rio_Clarillo.jpg/1280px-Sendero_Rio_Clarillo.jpg',
          caption: 'El sendero Arboretum entre la colección de especies nativas',
          isPrimary: true
        },
        {
          id: 'img-rio-clarillo-arbo-2',
          url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Peumo%2C_nativo_de_Chile.png',
          caption: 'El peumo, una de las especies estrella del Arboretum del parque',
          isPrimary: false
        }
      ],
      socialLinks: {},
      documents: [],
      tips: 'El Arboretum es muy apto para niños y grupos escolares: tiene carteles con nombres y usos tradicionales de cada especie.',
      trivia:
        'Muchas especies del Arboretum son «madres» de la medicina tradicional chilena: el boldo en la infusión digestiva, la bailahuén en los resfriados y la murta en los dulces.',
      estimatedStayMinutes: 25
    },
    {
      id: 'stop-rio-clarillo-trikau',
      order: 6,
      title: 'Sendero Trikau: la Inclusión que Camina',
      subtitle: 'Un sendero accesible y la naturaleza para todos los cuerpos',
      category: 'nature',
      location: {
        lat: -33.7249,
        lng: -70.4896,
        address: 'Sendero Trikau, Parque Nacional Río Clarillo'
      },
      triggerRadiusMeters: 70,
      narrativeText:
        'No todos los parques tienen un sendero que se puede recorrer en silla de ruedas o con coche de guagua: Río Clarillo sí, y se llama Trikau. Este senderito de poca pendiente y superficie firme fue diseñado para que la experiencia del bosque no discrimine: adultos mayores, personas con movilidad reducida, familias con niños pequeños. El nombre, de origen mapudungun, hace alusión a la convivencia y al reencuentro. Camina (o rueda) entre los árboles sintiendo con las manos las cortezas, escuchando el agua y respirando el aire del secano: esta es la demostración de que la accesibilidad no es un extra del diseño, sino su condición de calidad. Fíjate cómo el parque cuida las pendientes y los descansos: cada banco, cada mirador bajo de altura, cada señalética en duplicado es una invitación a la lentitud. Es el gran ejemplo de que el patrimonio natural y la inclusión social avanzan juntos.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 150,
        voiceName: 'Kore',
        transcript:
          'No todos los parques tienen un sendero que se puede recorrer en silla de ruedas o con coche de guagua: Río Clarillo sí, y se llama Trikau. Este senderito de poca pendiente y superficie firme fue diseñado para que la experiencia del bosque no discrimine: adultos mayores, personas con movilidad reducida, familias con niños. El nombre, de origen mapudungun, alude a la convivencia. Camina o rueda entre los árboles sintiendo las cortezas, escuchando el agua y respirando el secano: la accesibilidad no es un extra del diseño, sino su condición de calidad. Cada banco, cada mirador bajo y cada señalética duplicada es una invitación a la lentitud.'
      },
      images: [
        {
          id: 'img-rio-clarillo-trikau-1',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/Sendero_Rio_Clarillo.jpg/1280px-Sendero_Rio_Clarillo.jpg',
          caption: 'Superficie firme y pendiente suave: el diseño universal del sendero Trikau',
          isPrimary: true
        },
        {
          id: 'img-rio-clarillo-trikau-2',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Quisco%2C_PN_Rio_Clarillo.jpg/1280px-Quisco%2C_PN_Rio_Clarillo.jpg',
          caption: 'El quisco: un vecino espinoso del sendero que todo visitante reconoce',
          isPrimary: false
        }
      ],
      socialLinks: {},
      documents: [],
      tips: 'El Trikau es corto y llano: perfecto como sendero de calentamiento antes de Jorquera, o como opción principal para grupos con movilidad reducida.',
      trivia:
        'El sendero Trikau es uno de los pocos de la red nacional de áreas silvestres protegidas pensado desde su diseño para la accesibilidad universal.',
      estimatedStayMinutes: 20
    },
    {
      id: 'stop-rio-clarillo-cierre',
      order: 7,
      title: 'Cierre Junto al Agua: la Última Estación del Baño de Bosque',
      subtitle: 'La meditación final en la orilla del río y el regreso',
      category: 'nature',
      location: {
        lat: -33.72499,
        lng: -70.48672,
        address: 'Orilla del río Clarillo, sector central del parque'
      },
      triggerRadiusMeters: 60,
      narrativeText:
        'Cerramos el círculo del baño de bosque donde empezó: en la orilla del río. Si el día fue de caminata por Jorquera o Arboretum, este es el momento de la entrega; si el recorrido fue de descanso en las piscinas, es la oportunidad de sentir el cierre. Siéntate o acuéstate sobre las piedras —siempre en las zonas permitidas— y haz las tres últimas respiraciones profundas del circuito: una para el bosque, una para el agua, una para ti. Observa la luz que juega sobre el río, el movimiento de las hojas, el viento que sube desde el valle. El shinrin-yoku recomienda cerrar con un agradecimiento, porque el bosque no pide nada y no cobra por su medicina. Al volver al estacionamiento, puedes caminar tranquilo: llevas contigo el olor del boldo, el sonido del agua y la verdad de que la naturaleza de Chile central, el secano andino, es tan valiosa como cualquier bosque del sur. Hasta pronto, río Clarillo.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 155,
        voiceName: 'Zephyr',
        transcript:
          'Cerramos el círculo del baño de bosque donde empezó: en la orilla del río. Siéntate o acuéstate sobre las piedras, siempre en las zonas permitidas, y haz las tres últimas respiraciones: una para el bosque, una para el agua, una para ti. Observa la luz sobre el río y el viento que sube desde el valle. El shinrin-yoku recomienda cerrar con un agradecimiento, porque el bosque no pide nada. Al volver, llevas contigo el olor del boldo, el sonido del agua y la certeza de que el secano andino es tan valioso como cualquier bosque del sur. Hasta pronto, río Clarillo.'
      },
      images: [
        {
          id: 'img-rio-clarillo-cierre-1',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/41/R%C3%ADo_Clarillo.jpg/1280px-R%C3%ADo_Clarillo.jpg',
          caption: 'La orilla del río Clarillo: el lugar del cierre y la gratitud',
          isPrimary: true
        },
        {
          id: 'img-rio-clarillo-cierre-2',
          url: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Reserva_Nacional_R%C3%ADo_Clarillo.jpg',
          caption: 'El bosque que acompaña el regreso: verde duro, sombra y recuerdo',
          isPrimary: false
        }
      ],
      socialLinks: {},
      documents: [],
      tips: 'Si la jornada fue larga, termina con agua, comida y abrigo antes del atardecer: en otoño el frío baja rápido en la precordillera.',
      trivia:
        'El baño de bosque, o shinrin-yoku, nació en Japón en los años ochenta como práctica de bienestar: hoy es una de las recomendaciones médicas más estudiadas y este parque lo aplica al bosque mediterráneo de Chile central.',
      estimatedStayMinutes: 25
    }
  ]
};