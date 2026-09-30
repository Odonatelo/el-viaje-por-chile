import { Tour } from '../types';

export const tourJardinBotanicoUACh: Tour = {
  id: 'tour-jardin-botanico-uach-plantas-medicinales',
  title: 'Plantas Medicinales del Sur: La Botica Viva del Jardín Botánico UACh',
  tagline: 'Audioguía Oficial El Viaje Por Chile • Canelo, matico, arrayán y nalca: 3 estaciones para descubrir el lawen del sur en el corazón del Campus Isla Teja',
  description: 'Audioguía producida por el Equipo El Viaje Por Chile (www.elviaje.cl). Una experiencia contemplativa de tres estaciones en el Jardín Botánico de la Universidad Austral de Chile (Valdivia), elegido uno de los "Siete Tesoros del Patrimonio Cultural de Valdivia". Creado en 1957 por el Dr. Eduardo Morales Miranda, este pulmón verde de diez hectáreas a la orilla del río Cau-Cau resguarda cerca de 950 especies y una colección dedicada a las plantas medicinales del sur de Chile. El recorrido reúne la introducción al jardín, el conocimiento del lawen —la medicina de las plantas del territorio mapuche— y un cierre de meditación y reflexión en el bosque valdiviano, con los momentos claves para planificar tu visita.',
  coverImage: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/57/Botanic_garden_UACh.JPG/1280px-Botanic_garden_UACh.JPG',
  city: 'Valdivia, Jardín Botánico UACh',
  country: 'Chile',
  category: 'nature',
  language: 'Español',
  durationMinutes: 105,
  distanceKm: 2.0,
  difficulty: 'easy',
  rating: 5.0,
  reviewsCount: 28,
  featured: true,
  published: true,
  createdAt: '2026-09-30T12:00:00Z',
  updatedAt: '2026-09-30T12:00:00Z',
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
      id: 'doc-flora-selva-valdiviana',
      name: 'Guía de Campo: Flora de la Selva Valdiviana.pdf',
      type: 'guide',
      url: '/pdf/doc-flora-selva-valdiviana.pdf',
      size: '69 KB',
      description: 'Fichas de campo de la selva valdiviana: canelo, ulmo, olivillo, helechos y árboles longevos que rodean las colecciones del Jardín Botánico UACh.'
    },
    {
      id: 'doc-especies-cuenca',
      name: 'Especies de la Cuenca del Río Valdivia.pdf',
      type: 'pdf',
      url: '/pdf/doc-especies-cuenca.pdf',
      size: '68 KB',
      description: 'Catálogo de especies nativas de la cuenca del río Valdivia para orientar el recorrido por el paisaje del Campus Isla Teja.'
    }
  ],
  stops: [
    {
      id: 'stop-botanico-entrada-1',
      order: 1,
      title: 'La Puerta del Jardín: Un Pulmón Verde entre el Campus y el Cau-Cau',
      subtitle: 'Introducción al Jardín Botánico UACh y planificación de tu visita',
      category: 'nature',
      location: {
        lat: -39.8036,
        lng: -73.2506,
        address: 'Avenida Rector Eduardo Morales Miranda, Campus Isla Teja, Universidad Austral de Chile, Valdivia'
      },
      triggerRadiusMeters: 60,
      narrativeText: 'Antes de entrar, respira hondo. Este jardín no es un parque cualquiera: es una colección viva creada en 1957 por el rector fundador Eduardo Morales Miranda y la diseñadora Kathy Taylor, para que la naturaleza del país se estudiara, se custodiara y se disfrutara a la orilla del río Cau-Cau, en pleno corazón del Campus Isla Teja. Diez hectáreas, cerca de 950 especies y un herbario con código internacional VALD que las universidades del mundo reconocen. El jardín abre entre las nueve de la mañana y las siete de la tarde, con aporte voluntario y sin mascotas, para cuidar a sus zorros culpeo, sus choroyes y sus colecciones botánicas. Antes de comenzar las tres estaciones del recorrido, tómate un momento: mira el color del verde a tu alrededor, escucha el río y decide cómo quieres vivir esta visita, de mañana temprano, cuando la luz atraviesa el bosque, o al atardecer, cuando el calor queda en las hojas. Así se planifica la experiencia: unos treinta minutos en la puerta del jardín, cuarenta en la botica de plantas medicinales y treinta y cinco en el bosque valdiviano. Aquí comienza tu viaje con el Equipo El Viaje.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 175,
        voiceName: 'Kore',
        transcript: 'Respira hondo, estás en la puerta de un jardín que respira por Valdivia. En 1957, el rector Eduardo Morales Miranda soñó un museo vivo del sur y hoy, casi setenta años después, sus diez hectáreas juntan novecientas cincuenta especies a la orilla del Cau-Cau. El jardín abre a las nueve y cierra a las siete, se entra con un aporte voluntario y sin mascotas, para proteger a los zorros y las colecciones. Tómate un instante para mirar el verde y decide si prefieres la luz de la mañana o el calor del atardecer: treinta minutos aquí, cuarenta en la botica de plantas medicinales y treinta y cinco en el bosque valdiviano. Acompáñanos, el Equipo El Viaje te guía.'
      },
      images: [
        {
          id: 'img-botanico-morales',
          url: 'https://upload.wikimedia.org/wikipedia/commons/9/99/EsculturaEduardoMorales.jpg',
          caption: 'Escultura del Dr. Eduardo Morales Miranda, rector fundador de la UACh y creador del Jardín Botánico en 1957',
          isPrimary: true
        },
        {
          id: 'img-botanico-entrada',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c5/Jardin_botanico_uach_01.jpg/1280px-Jardin_botanico_uach_01.jpg',
          caption: 'Una de las entradas del Jardín Botánico UACh, vereda verde del Campus Isla Teja',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://ciencias.uach.cl/jardinbotanico'
      },
      documents: [],
      tips: 'Horario de visita 09:00 a 19:00; el acceso es con aporte voluntario y no se permite el ingreso de mascotas. Puedes agendar una visita guiada y descargar el plano del jardín escribiendo a visitas.jardinbotanico@uach.cl.',
      trivia: 'Desde 1957 y con código internacional VALD, el jardín reúne cerca de 950 especies y fue elegido uno de los "Siete Tesoros del Patrimonio Cultural de Valdivia".',
      estimatedStayMinutes: 30
    },
    {
      id: 'stop-botanico-lawen-2',
      order: 2,
      title: 'La Botica del Bosque: El Lawen del Sur de Chile',
      subtitle: 'Canelo, matico, arrayán, murta y nalca: la colección de plantas medicinales',
      category: 'nature',
      location: {
        lat: -39.8046,
        lng: -73.2494,
        address: 'Colección de Plantas Medicinales, Jardín Botánico UACh, Campus Isla Teja, Valdivia'
      },
      triggerRadiusMeters: 60,
      narrativeText: 'Detente frente a esta colección de plantas medicinales: la botica del bosque del sur de Chile. La palabra mapuche lawen nombra a la vez al remedio y a la planta que lo entrega. Aquí conviven el canelo, el árbol sagrado cuya corteza aromática cura y limpia; el matico, que acompaña la cicatrización del cuerpo; la murta y el arrayán de las mirtáceas, astringentes y perfumadas; la nalca de hojas gigantes que refresca el estómago; y el boldo, el digestivo del bosque que el sur también cultiva y celebra. Cada planta es un acuerdo silencioso entre el territorio y quienes lo habitan. No las cortes ni las arranques: pertenecen a la ciencia y a la memoria del lugar. En cambio, haz el ejercicio de la meditación del lawen: cierra los ojos, inhala el aroma que cada hoja libera y deja que la respiración te conecte con la idea de que la medicina no vive solo en la vitrina de una farmacia, sino en la tierra que la produce. Cuando los abras, pregúntate cuál de estas plantas te habló primero.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 190,
        voiceName: 'Puck',
        transcript: 'Detente frente a la botica del bosque: aquí habla el lawen. El canelo, árbol sagrado que cura; el matico, que acompaña heridas; la murta y el arrayán perfumados; la nalca que refresca; el boldo que ordena la digestión. No las toques: esta colección sostiene la investigación del herbario. Ahora cierra los ojos, inhala el aroma de cada hoja y deja que tu respiración entre en el ciclo de la tierra, donde nace la medicina. Al abrir los ojos, pregúntate qué planta te habló primero. El Equipo El Viaje te acompaña en silencio.'
      },
      images: [
        {
          id: 'img-botanico-canelo',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/88/Drimys_winteri.jpg/1280px-Drimys_winteri.jpg',
          caption: 'El canelo (Drimys winteri), árbol sagrado del pueblo mapuche y emblema del lawen',
          isPrimary: true
        },
        {
          id: 'img-botanico-arrayan',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/68/Luma_apiculata_2019.jpg/1280px-Luma_apiculata_2019.jpg',
          caption: 'El arrayán (Luma apiculata), de la familia de las mirtáceas del sur',
          isPrimary: false
        },
        {
          id: 'img-botanico-matico',
          url: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Buddleja_matico_recht.JPG',
          caption: 'El matico (Buddleja globosa), la planta que acompaña la cicatrización',
          isPrimary: false
        },
        {
          id: 'img-botanico-murta',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Ugni_molinae.jpg/1280px-Ugni_molinae.jpg',
          caption: 'La murta (Ugni molinae), fruto silvestre y medicina de las mirtáceas chilenas',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://www.elviaje.cl'
      },
      documents: [],
      tips: 'No recolectes ni dañes las plantas: estas colecciones sostienen la investigación y la docencia del herbario VALD. Para la meditación, elige una sola especie y quédate con ella uno o dos minutos.',
      trivia: 'El canelo es el árbol sagrado del pueblo mapuche: su corteza aromática fue una de las primeras medicinas del sur documentada por la ciencia europea y da nombre a la especie Drimys winteri.',
      estimatedStayMinutes: 40
    },
    {
      id: 'stop-botanico-cierre-3',
      order: 3,
      title: 'Catedral de Fibras: Meditación y Cierre en la Selva Valdiviana',
      subtitle: 'El bosque templado junto al Cau-Cau: reflexión y momentos claves de la visita',
      category: 'nature',
      location: {
        lat: -39.806,
        lng: -73.2483,
        address: 'Sector Bosque Valdiviano, Jardín Botánico UACh, junto al canal interior y el río Cau-Cau, Valdivia'
      },
      triggerRadiusMeters: 60,
      narrativeText: 'Has llegado al umbral del bosque valdiviano, la selva templada más rica del planeta, custodiada aquí por el canal interior y el río Cau-Cau. Los helechos gigantes, los olivillos y los ulmos forman una catedral de fibras que filtra la luz y el ruido de la ciudad. Este es el momento de la reflexión. Si quieres, siéntate o camina muy despacio: observa cómo el agua se mueve entre las piedras, cómo el musgo sube por los troncos y cómo cambia tu respiración. Tres preguntas para llevarte contigo: ¿qué planta de la botica sigue contigo?, ¿qué quietud encuentras aquí que no encuentras en otros lugares?, ¿qué te gustaría volver a ver en tu próxima visita? Anota lo que sientas y decide cómo continuar: una visita guiada con los monitores del jardín, una jornada de "Jardineo en el Botánico" para ayudar a conservar, o simplemente volver mañana con alguien con quien compartir este descubrimiento. El jardín te ha ofrecido su botica viva; ahora es tuya. Gracias por recorrer con el Equipo El Viaje.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 185,
        voiceName: 'Zephyr',
        transcript: 'Estás entrando a la catedral de fibras del bosque valdiviano, en la orilla del Cau-Cau. Camina lento o siéntate si lo necesitas: mira el agua, el musgo, la luz. Tres preguntas para el camino de vuelta: ¿qué planta te acompaña?, ¿qué quietud encuentras aquí?, ¿qué quieres volver a ver? Cuando termines, puedes agendar una visita guiada o sumarte a una jornada de jardineo para cuidar este pulmón verde. Este jardín ha sido tu viaje de hoy. Gracias por caminar con el Equipo El Viaje.'
      },
      images: [
        {
          id: 'img-botanico-canal',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Canal_interior_jardin_botanico_uach.jpg/1280px-Canal_interior_jardin_botanico_uach.jpg',
          caption: 'El canal interior que conduce el agua del Cau-Cau por el bosque valdiviano',
          isPrimary: true
        },
        {
          id: 'img-botanico-selva',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/Jardin_botanico_uach_14.jpg/1280px-Jardin_botanico_uach_14.jpg',
          caption: 'Senderos de la selva valdiviana dentro del Jardín Botánico UACh',
          isPrimary: false
        },
        {
          id: 'img-botanico-camino',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c5/Jardin_botanico_uach_01.jpg/1280px-Jardin_botanico_uach_01.jpg',
          caption: 'Las veredas verdes del jardín entre la colección y el río',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://ciencias.uach.cl/jardinbotanico'
      },
      documents: [],
      tips: 'Agenda una visita guiada con los monitores del jardín o participa de "Jardineo en el Botánico" para aportar a la conservación. El sector del canal interior es un buen contemplatorio para cerrar la experiencia con quietud.',
      trivia: 'El bosque valdiviano es uno de los ecosistemas templados más ricos del planeta y aquí, en pleno campus universitario, puedes observarlo sin salir de la ciudad.',
      estimatedStayMinutes: 35
    }
  ]
};