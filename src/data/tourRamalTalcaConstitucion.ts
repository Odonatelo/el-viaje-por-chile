import { Tour } from '../types';

export const tourRamalTalcaConstitucion: Tour = {
  id: 'tour-ramal-talca-constitucion-tren-del-vino',
  title: 'Verano en el Buscarril: la Ruta Lenta del Ramal Talca–Constitución',
  tagline:
    'Audioguía Oficial El Viaje Por Chile • Un Monumento Histórico que viaja: 88 kilómetros de bosque, viñedos de secano y río Maule a bordo del buscarril más querido de Chile',
  description:
    'Audioguía producida por el Equipo El Viaje Por Chile (www.elviaje.cl). El Ramal Talca–Constitución es uno de los últimos viajes en tren patrimonial del país: un Monumento Histórico Nacional de 88 kilómetros que une la ciudad de Talca con la costa de Constitución cruzando el secano vitivinícola del Maule, los parronales de Corinto y el puente sobre el río Maule. Este circuito de siete paradas te acompaña a bordo del buscarril Ferrostaal mientras el paisaje desacelera: historia ferroviaria, la tierra del poeta González Bastías, los viñedos de secano y la desembocadura del Maule. El recorrido interpreta cómo EFE transformó un ramal centenario en una experiencia lenta y sensorial, y reúne los momentos claves para planificar tu viaje: horarios, paradas y consejos del área protegida.',
  coverImage:
    'https://upload.wikimedia.org/wikipedia/commons/0/02/Ramal_talca_constituci%C3%B3n_06.jpg',
  city: 'Talca – Constitución, Región del Maule',
  country: 'Chile',
  category: 'history',
  language: 'Español',
  durationMinutes: 150,
  distanceKm: 88,
  difficulty: 'easy',
  rating: 5.0,
  reviewsCount: 31,
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
      id: 'doc-ramal-historia',
      name: 'Dossier: Historia del Ramal Talca–Constitución.pdf',
      type: 'guide',
      url: '/pdf/doc-ramal-historia.pdf',
      size: '88 KB',
      description: 'Línea de tiempo del ramal: del primer tramo de 1892 al Monumento Histórico Nacional, con el detalle de las 18 estaciones y paraderos del recorrido.'
    },
    {
      id: 'doc-buscarril-ferrostaal',
      name: 'Ficha Técnica: Buscarril Ferrostaal SB-56.pdf',
      type: 'pdf',
      url: '/pdf/doc-buscarril-ferrostaal.pdf',
      size: '64 KB',
      description: 'Características del buscarril alemán que recorre el ramal desde la década de 1960 y consejos para viajar cómodo en sus asientos de madera.'
    }
  ],
  stops: [
    {
      id: 'stop-ramal-talca-partida',
      order: 1,
      title: 'Partida en Talca: Un Monumento Histórico a Punto de Viajar',
      subtitle: 'La estación de Talca y la historia del ramal que casi se pierde',
      category: 'history',
      location: {
        lat: -35.4272,
        lng: -71.6652,
        address: 'Estación de Trenes de Talca (Edificio EFE), Talca'
      },
      triggerRadiusMeters: 90,
      narrativeText:
        'Frente a la estación de Talca la carretera sigue, pero tú vas a viajar como viajaban los abuelos: en un buscarril que se tarda tres horas en alcanzar el mar. El primer tramo de este ferrocarril se construyó en 1892, bajo el impulso del tren como espina dorsal del país, y fue completado hacia 1915, cuando el puente sobre el río Maule permitió llegar hasta Constitución. En total, 88 kilómetros de vía métrica que el Estado puso a punto a comienzos del siglo veinte y que sobrevivió al cierre de miles de ramales en Chile. En 2024 este recorrido fue declarado Monumento Histórico Nacional, y hoy es uno de los pocos trenes del mundo que todavía es parte fundamental del transporte local: madera, maestranza y un silbato que anuncia el andén. Antes de subir, revisa el horario en el panel: el servicio funciona por la mañana y el viaje contempla cerca de dieciocho estaciones y paraderos entre Talca y Constitución. Sube, elige ventana y deja que la velocidad se convierta en paisaje.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 190,
        voiceName: 'Kore',
        transcript:
          'Frente a la estación de Talca la carretera sigue, pero tú vas a viajar como viajaban los abuelos: en un buscarril que tarda tres horas en alcanzar el mar. El primer tramo se construyó en 1892 y el tren llegó a Constitución hacia 1915, cuando se terminó el puente sobre el Maule. Ochenta y ocho kilómetros de vía que sobrevivieron al cierre de casi todos los ramales del país y que en dos mil veinticuatro fueron declarados Monumento Histórico Nacional. Revisa el horario en el panel y recuerda que son unas dieciocho estaciones y paraderos antes del mar. Sube, elige ventana y deja que la velocidad se convierta en paisaje.'
      },
      images: [
        {
          id: 'img-ramal-subiendo',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Subiendo_al_ramal_Talca_Consti.jpg/1280px-Subiendo_al_ramal_Talca_Consti.jpg',
          caption: 'Pasajeros subiendo al buscarril en el andén de Talca, el comienzo del viaje',
          isPrimary: true
        },
        {
          id: 'img-ramal-tramo',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Ramal_de_Constituci%C3%B3n_a_Talca.jpg/1280px-Ramal_de_Constituci%C3%B3n_a_Talca.jpg',
          caption: 'El trazado del ramal entre el secano y la cordillera de la costa del Maule',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://www.efe.cl/ramal-talca-constituci%C3%B3n/'
      },
      documents: [],
      tips: 'Revisa el horario del día en el panel de la estación o en www.efe.cl: el ramal tiene salidas por la mañana y el viaje completo dura cerca de tres horas. Los asientos de madera no reservan numeración, así que llega unos veinte minutos antes para elegir ventana.',
      trivia:
        'El buscarril que ves en el andén es un Ferrostaal de fabricación alemana de los años sesenta: en Chile se los conoce cariñosamente como «buscarriles» y el de este ramal es uno de los últimos en servicio comercial del mundo.',
      estimatedStayMinutes: 25
    },
    {
      id: 'stop-ramal-corinto-vinedos',
      order: 2,
      title: 'Corinto: el Secano que se Vuelve Vino',
      subtitle: 'Parronales, viñedos de secano y la Denominación de Origen Maule',
      category: 'gastronomy',
      location: {
        lat: -35.3946,
        lng: -71.7733,
        address: 'Estación Corinto, comuna de Pencahue (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 80,
      narrativeText:
        'Corinto es una de esas paradas en que el tren se detiene en medio del campo. Nada de andén de cemento: tierra, un letrero verde y el paisaje del secano costero de la Denominación de Origen Maule. Aquí la viña se cultiva a la antigua: sin riego, plantada sobre la loma, en los famosos parronales chilenos, el sistema de conducción en espaldera sobre pérgolas en que la uva crece al ras del suelo o sobre el viñedo, bañada de sol y viento. Las vides de país, cinsault, carignan y la aromática uva país son las protagonistas de este paisaje que la Ruta del Vino del Maule recorre en «copa»: aquí el traslado en tren es el maridaje y el paisaje, el plato. Cuando el ramal sirve el servicio especial de Tren del Vino, los pasajeros bajan en Corinto para caminar entre las cepas centenarias y volver a subir a la hora del atardecer, cuando las lomas se tiñen de ocre. La experiencia no está solo en la copa: está en la lentitud con que el tren cruza el parche de viñedos entre cerros pelados, en el mismo camino que hacían las carretas cargadas de uva a comienzos del siglo pasado.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 175,
        voiceName: 'Charon',
        transcript:
          'Corinto es una de esas paradas en que el tren se detiene en medio del campo. Nada de andén de cemento: tierra, un letrero verde y el secano costero de la Denominación de Origen Maule. Aquí la viña se cultiva a la antigua, sin riego, en parronales y cepas de país que crecen con el sol y el viento. La Ruta del Vino del Maule recorre este paisaje y el tren es el maridaje y el paisaje el plato. En los servicios especiales del Tren del Vino la gente baja en Corinto a caminar entre las cepas centenarias y vuelve al atardecer, cuando las lomas se tiñen de ocre. La experiencia está en la lentitud con que el tren cruza los viñedos, el mismo camino de las carretas cargadas de uva.'
      },
      images: [
        {
          id: 'img-ramal-corinto',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/EFE_ADM_255_Corinto.jpg/1280px-EFE_ADM_255_Corinto.jpg',
          caption: 'Buscarril detenido en la estación Corinto, en pleno secano vitivinícola del Maule',
          isPrimary: true
        },
        {
          id: 'img-ramal-parronal',
          url: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Parron_Chile_01.jpg',
          caption: 'Parronal chileno: el sistema de conducción de la viña que define el paisaje del secano',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://www.rutadelvinomaulle.cl'
      },
      documents: [],
      tips: 'Si quieres la experiencia del Tren del Vino (copa, parada y paisaje), consulta las fechas especiales en EFE: no todos los días el servicio incluye el descenso en Corinto. En invierno el secano se vuelve verde y en verano dorado: cada estación cambia el parronal.',
      trivia:
        'Zonas como Corinto forman parte de la Denominación de Origen Maule, una de las regiones vitivinícolas más antiguas de Chile, donde las cepas de país llevan más de cuatro siglos dando fruto sin una gota de riego.',
      estimatedStayMinutes: 20
    },
    {
      id: 'stop-ramal-curtiduria',
      order: 3,
      title: 'Curtiduría y Los Llocos: Paraderos que Huelen a Pueblo',
      subtitle: 'Estaciones menores, palmas chilenas y la vida de la vía',
      category: 'history',
      location: {
        lat: -35.3168,
        lng: -71.8519,
        address: 'Paraderos Curtiduría y Los Llocos, comuna de Pencahue (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 70,
      narrativeText:
        'Entre Corinto y González Bastías el tren va perdiendo velocidad y deteniéndose en paraderos que son pura vida de campo: Curtiduría, Los Llocos, El Peumo, La Palma. Son paradas facultativas: el maquinista frena solo si alguien espera, y por eso el viaje tiene ese aire de complicidad entre el tren y el territorio. El nombre de Curtiduría lo cuenta todo: en el siglo diecinueve esta zona del Maule fue centro de curtido de cueros, faena que daba vida a cueros para monturas y aperos que viajaban en los mismos vagones de carga. Hoy los restos de las antiguas tinas y ensenadas se leen en el nombre y en los bodegones que se asoman a la vía. Es el momento de mirar por la ventana los muros de adobe, los corrales y las palmas chilenas que asoman en las quebradas húmedas. El buscarril Ferrostaal, con su carrocería azul y blanca, parece un personaje de otra época, y en estos paraderos se convierte en vecino: la gente saluda desde la puerta, conversa del tiempo y entrega el «diario» a medio cargar. Aquí la experiencia no se diseña: se vive. La invitación es bajar el vidrio y escuchar la lengua del campo.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 170,
        voiceName: 'Puck',
        transcript:
          'Entre Corinto y González Bastías el tren va perdiendo velocidad entre paraderos de pura vida de campo: Curtiduría, Los Llocos, El Peumo, La Palma. Son paradas facultativas: el maquinista frena solo si alguien espera, y el viaje tiene ese aire de complicidad entre el tren y el territorio. Curtiduría se llama así porque aquí se curtían cueros para monturas y aperos que viajaban en vagones de carga. Hoy los muros de adobe, los corrales y las palmas chilenas acompañan la vía, y en cada paradero la gente saluda, conversa del tiempo y entrega el diario. Aquí la experiencia no se diseña: se vive. Baja el vidrio y escucha la lengua del campo.'
      },
      images: [
        {
          id: 'img-ramal-buscarril',
          url: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Coche_Motor_Ferrostaal_01.jpg',
          caption: 'El buscarril Ferrostaal azul y blanco, el personaje que recorre el ramal',
          isPrimary: true
        },
        {
          id: 'img-ramal-via',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cd/V%C3%ADa_f%C3%A9rrea_del_ramal_ferroviario_Talca-Constituci%C3%B3n.JPG/1280px-V%C3%ADa_f%C3%A9rrea_del_ramal_ferroviario_Talca-Constituci%C3%B3n.JPG',
          caption: 'La vía única en medio del secano, flanqueada por el monte nativo',
          isPrimary: false
        }
      ],
      socialLinks: {},
      documents: [],
      tips: 'No todos los trenes paran en todos los paraderos: confirma las paradas facultativas antes de bajar, porque algunas solo funcionan bajo demanda señalizada desde el andén o desde el propio tren.',
      trivia:
        'Estos paraderos menores fueron locales de la llamada «chica» del ferrocarril, la red de ramales rurales que a principios del siglo veinte conectaba hasta los fundos más lejanos con la Red Central.',
      estimatedStayMinutes: 15
    },
    {
      id: 'stop-ramal-bastias-poeta',
      order: 4,
      title: 'Estación González Bastías: el Pueblo del Poeta del Secano',
      subtitle: 'Una estación con nombre de poeta: la tierra que cantó la vid y el campo',
      category: 'history',
      location: {
        lat: -35.2006,
        lng: -71.9558,
        address: 'Estación González Bastías, comuna de Constitución (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 80,
      narrativeText:
        'Esta es la única estación de Chile que honra en su nombre a un poeta. Jorge González Bastías nació en 1879 a unas horas de aquí y se convirtió en el cantor del secano del Maule, de los viñedos que crecen entre las piedras, de los inviernos que verdean las lomas y de la vejez feliz de los pueblos que la modernidad abandonó. En su poema «La parra» —ese gran canto al parronal— escribió de la viña que «en sus brazos calienta la vejez». El pueblo mismo, González Bastías: casas de adobe, un almacén, el canto del gallo y la huella del tren que pasaba y dejaba la correspondencia. A este secano llegaron los buscarriles a partir de los años sesenta y los poetas se leyeron en las cocinerías. Para la interpretación patrimonial, esta parada es una invitación a la «relevancia personal» de la que hablaba Freeman Tilden: cuando el tren silba en esta estación, lo que se detiene no es solo un ferrocarril, es la memoria de un mundo rural que eligió quedar escrito en verso. Tómate unos minutos: camina el pueblo, lee la placa de la estación y vuelve al paradero cuando oigas el silbato.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 185,
        voiceName: 'Zephyr',
        transcript:
          'Esta es la única estación de Chile que honra en su nombre a un poeta. Jorge González Bastías nació en mil ochocientos setenta y nueve cerca de aquí y cantó al secano del Maule, a los viñedos que crecen entre piedras y a los pueblos que quedaron con la vejez feliz de la vida lenta. En su poema La parra escribió que la viña en sus brazos calienta la vejez. El pueblo es fue de adobes, un almacén, el canto del gallo y la huella del tren. Para la interpretación patrimonial, esta parada es una invitación a la relevancia personal de la que hablaba Freeman Tilden: cuando silba el tren, se detiene la memoria de un mundo rural que eligió quedar escrito en verso. Camina el pueblo, lee la placa de la estación y vuelve al paradero cuando oigas el silbato.'
      },
      images: [
        {
          id: 'img-ramal-bastias-via',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/MH_RamalTalca_Constituci%C3%B3n_-_L%C3%ADnea_Ferrea_en_Gonzalez_Bast%C3%ADas.JPG/1280px-MH_RamalTalca_Constituci%C3%B3n_-_L%C3%ADnea_Ferrea_en_Gonzalez_Bast%C3%ADas.JPG',
          caption: 'La línea férrea en González Bastías, el pueblo del poeta del secano',
          isPrimary: true
        },
        {
          id: 'img-ramal-camino',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/Ramalencamino.JPG/1280px-Ramalencamino.JPG',
          caption: 'El buscarril cruzando el campo rumbo al interior, camino entre el secano y la costa',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://www.memoriachilena.gob.cl/618/w3-article-9611.html'
      },
      documents: [],
      tips: 'El tiempo de parada en estas estaciones intermedias suele ser breve: si bajas, ten en cuenta que el tren parte cuando el guarda lo indica y no espera a rezagados.',
      trivia:
        'González Bastías es un giro del patrimonio literario rural: sus poemas fueron leídos por Pablo Neruda, que lo consideró «el último poeta del campo chileno».',
      estimatedStayMinutes: 20
    },
    {
      id: 'stop-ramal-chanquin-pichaman',
      order: 5,
      title: 'Pichamán y el Cruce del Maule: Tierra de Río y Bosque',
      subtitle: 'El río que se cruza dos veces y la estación que mira al monte',
      category: 'viewpoint',
      location: {
        lat: -35.1489,
        lng: -72.1045,
        address: 'Estación Pichamán, comuna de Constitución (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 80,
      narrativeText:
        'Después de González Bastías el tren cruza el río Maule una primera vez y entra en la porción más salvaje del ramal. Pichamán es el corazón de este tramo: un pueblo al borde del río, rodeado de bosque nativo, donde el agua manda. De aquí persiste la memoria de cuando el Maule crecía en invierno y los madereos bajaban los troncos en balas hasta la materialización en Constitución. El tren es la única vía que no se corta cuando llueve; por eso Pichamán espera el buscarril como quien espera una promesa. Si el día está claro, mira hacia el suroeste: entre los cerros se adivina la Cordillera de la Costa y el valle que desemboca en el Pacífico. Toconey, la estación siguiente, conserva uno de los edificios más fotografiados del ramal, con su fachada de madera y su andén de tierra que el tren golpea con un ¡clac! al llegar. Esta es la zona de paisaje puro: sin viñedos ni villorrios, solo el río plateado y el monte. Baja el vidrio, respira y deja que el silencio haga su trabajo.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 165,
        voiceName: 'Charon',
        transcript:
          'Después de González Bastías el tren cruza el río Maule y entra en la porción más salvaje del ramal. Pichamán es un pueblo al borde del agua rodeado de bosque nativo, donde quedó la memoria de los madereos que bajaban troncos hasta la materialización en Constitución. El tren es la única vía que no se corta cuando llueve, y por eso Pichamán espera el buscarril como quien espera una promesa. Toconey, la estación siguiente, tiene una de las fachadas de madera más fotografiadas del ramal. Esta es zona de paisaje puro: sin viñedos ni villorrios, solo el río plateado y el monte. Baja el vidrio, respira y deja que el silencio haga su trabajo.'
      },
      images: [
        {
          id: 'img-ramal-toconey',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Estaci%C3%B3n_Toconey_%2830983607773%29.jpg/1280px-Estaci%C3%B3n_Toconey_%2830983607773%29.jpg',
          caption: 'La estación Toconey, uno de los edificios patrimoniales más fotografiados del ramal',
          isPrimary: true
        },
        {
          id: 'img-ramal-romeros',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/95/Los_Romeros.JPG/1280px-Los_Romeros.JPG',
          caption: 'El paradero Los Romeros, a la orilla del camino del río',
          isPrimary: false
        }
      ],
      socialLinks: {},
      documents: [],
      tips: 'En época de lluvias el río Maule sube: el ramal se opera con precaución y puede haber cambios de último minuto. Revisa el estado del servicio antes de viajar.',
      trivia:
        'El tramo entre Pichamán y Constitución cruza el Maule dos veces y atraviesa uno de los últimos bosques ribereños de la Región del Maule, refugio de aves como el martín pescador y el chucao.',
      estimatedStayMinutes: 15
    },
    {
      id: 'stop-ramal-maquehua',
      order: 6,
      title: 'Maquehua: el Último Pueblo Antes del Mar',
      subtitle: 'El campo que se despide y la campiña que desemboca en la costa',
      category: 'history',
      location: {
        lat: -35.2992,
        lng: -72.4256,
        address: 'Estación Maquehua, comuna de Constitución (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 80,
      narrativeText:
        'Maquehua es la última estación rural del viaje y un museo viviente de la vida de vía. Casas de alturas distintas, una plaza con palmeras, la iglesia y la escuela: aquí el tren no es un visitante de paso, es el cartero, el diario y el repartidor de la vida. Cuando el buscarril silba al llegar, las puertas se abren y el pueblo sale a saludar, porque en Maquehua el tren lleva el nombre de todos en la lista de pasajeros. Desde el andén se ve cómo la cordillera de la costa se empina y el valle se angosta: el agua salada está a solo un salto de chingana. Es el lugar perfecto para notar el cambio de ritmo del viaje: afuera, el campo se va haciendo más húmedo, el aire más salado, y el monte se mezcla con las dunas. Mira fijo hacia la desembocadura del río y recuerda que los buscarriles que corren por esta vía son los últimos de su especie en el mundo: máquinas simples, robustas, que heredaron la técnica alemana de los años sesenta y la ternura del trato chileno. De Maquehua a Constitución quedan pocos minutos y el paisaje se vuelve un umbral.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 165,
        voiceName: 'Kore',
        transcript:
          'Maquehua es la última estación rural del viaje y un museo viviente de la vida de vía. Aquí el tren no es un visitante de paso, es el cartero, el diario y el repartidor de la vida: cuando silba al llegar, el pueblo sale a saludar. Desde el andén se ve cómo la cordillera de la costa se empina y el valle se angosta; el aire se hace más salado y el monte se mezcla con las dunas. Los buscarriles que corren por esta vía son los últimos de su especie: máquinas simples y robustas que heredaron la técnica alemana de los años sesenta y la ternura del trato chileno. De Maquehua a Constitución quedan pocos minutos y el paisaje se convierte en umbral.'
      },
      images: [
        {
          id: 'img-ramal-servicio',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Servicio_Talca_-_Constituci%C3%B3n_%2831381164190%29.jpg/1280px-Servicio_Talca_-_Constituci%C3%B3n_%2831381164190%29.jpg',
          caption: 'El servicio Talca–Constitución en plena campiña, a pocos kilómetros del mar',
          isPrimary: true
        },
        {
          id: 'img-ramal-insignia',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/22/Insignia_del_Ramal.JPG/1280px-Insignia_del_Ramal.JPG',
          caption: 'La insignia del ramal: el símbolo con que el tren se reconoce a sí mismo',
          isPrimary: false
        }
      ],
      socialLinks: {},
      documents: [],
      tips: 'En Maquehua conviene asomarse por la ventana del lado derecho del tren en dirección a Constitución: es el mejor ángulo para ver la cordillera de la costa y el valle que se angosta.',
      trivia:
        'Los Ferrostaal del ramal pueden alcanzar los 60 kilómetros por hora, pero la vía y los paraderos lo llevan a un trote rural de cerca de 30: por eso el viaje completo es la metáfora perfecta del «buen vivir» y la razón por la que a este tren se le conoce como el tren más lento del mundo... con más fans.',
      estimatedStayMinutes: 15
    },
    {
      id: 'stop-ramal-constitucion-arrivo',
      order: 7,
      title: 'Llegada a Constitución: el Río que se Encuentra con el Pacífico',
      subtitle: 'El puente sobre el Maule, la bahía y el cierre del viaje lento',
      category: 'viewpoint',
      location: {
        lat: -35.3333,
        lng: -72.4144,
        address: 'Estación Constitución y puente ferroviario sobre el río Maule, Constitución'
      },
      triggerRadiusMeters: 120,
      narrativeText:
        'El viaje termina en la orilla norte del río Maule, donde el ferrocarril cruza por un puente metálico que es el umbral de madera y vapor: al otro lado, el Pacífico. Este puente, construido a comienzos del siglo veinte para completar el ramal, es uno de los hitos patrimoniales que hoy se declaran junto con toda la línea. Cuando el tren se acerca, verás la barra del Maule, el arenal, las dunas de la desembocadura y, al fondo, las casas de Constitución, la ciudad balneario fundada a la sombra de la pesca y el mar. Darwin, en su paso por estas costas, describió el asombro de las olas del Pacífico rompiendo la boca del río; tú puedes repetir la experiencia desde el andén, con el silbato aún sonando en tus oídos. Es el cierre perfecto de una experiencia de escapismo: el viaje dejó de ser un traslado y se convirtió en el destino. Antes de volver a Talca —o de quedarte a almorzar un pescado frito frente a la bahía—, camina hasta el puente, siente la vibración del acero al cruzar el tren y agradece a los que guardaron este tren para que tú lo vivieras.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 190,
        voiceName: 'Fenrir',
        transcript:
          'El viaje termina en la orilla norte del río Maule, donde el ferrocarril cruza un puente metálico que es la puerta de entrada al Pacífico. Este puente, de comienzos del siglo veinte, es uno de los hitos que se declaran junto con toda la línea. Al acercarte verás la barra del Maule, el arenal, las dunas y, al fondo, las casas de Constitución. Darwin, al pasar por estas costas, describió el asombro de las olas rompiendo la boca del río; tú puedes repetir la experiencia desde el andén. Es el cierre perfecto de una experiencia de escapismo: el viaje dejó de ser un traslado y se convirtió en el destino. Camina hasta el puente, siente el acero y agradece a los que guardaron este tren para que tú lo vivieras.'
      },
      images: [
        {
          id: 'img-ramal-puente',
          url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4f/Puente_ferroviario_sobre_el_r%C3%ADo_Maule_en_Constituci%C3%B3n.jpg/1280px-Puente_ferroviario_sobre_el_r%C3%ADo_Maule_en_Constituci%C3%B3n.jpg',
          caption: 'El puente ferroviario sobre el río Maule en Constitución, antesala del Pacífico',
          isPrimary: true
        },
        {
          id: 'img-ramal-horarios',
          url: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Horarios_ramal.jpg',
          caption: 'El panel de horarios del ramal: la promesa de que el tren volverá a partir mañana',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://www.monumentos.gob.cl/monumentos/monumentos-historicos/ramal-ferroviario-talca-constitucion-y-su-buscarril'
      },
      documents: [],
      tips: 'En Constitución puedes almorzar en los restaurantes de la costanera y, si el día acompaña, subir a los miradores de la zona alta para ver la barra del Maule desde el cerro. El regreso a Talca suele tener su última salida en la tarde: confirma el horario al llegar.',
      trivia:
        'Todo el ramal —línea, estaciones y buscarril— fue declarado Monumento Histórico Nacional, una de las pocas veces en que la protección patrimonial incluye al tren, a la vía y a la forma de viajar completa.',
      estimatedStayMinutes: 30
    }
  ]
};