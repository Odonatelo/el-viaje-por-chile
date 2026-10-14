import { Tour } from '../types';

export const tourMaullin: Tour = {
  id: 'tour-maullin-agua-memoria-sabor',
  title: 'Maullín: agua, memoria y sabor',
  tagline: 'Audioguía El Viaje Por Chile • Pueblo, humedales del río Maullín y empanada de mariscos: 4 paradas por la comuna donde el agua escribió la historia (Región de Los Lagos)',
  description:
    'Audioguía producida por el Equipo El Viaje Por Chile (www.elviaje.cl). Un recorrido de cuatro paradas por la comuna de Maullín, en la provincia de Llanquihue, Región de Los Lagos. El hilo conductor es el agua: el río Maullín explica por qué el pueblo se asentó donde está, sostiene un humedal declarado Santuario de la Naturaleza en 2022 —con aves migratorias, huillines y hualves— y dio origen a la empanada de mariscos que hoy es sabor identitario de la comuna. Una experiencia para leer el territorio como un texto vivo, con los momentos clave y consejos para planificar la visita.',
  theme:
    'El agua como autor del paisaje: cómo un estuario y sus humedales definieron el emplazamiento histórico de Maullín, sostienen su biodiversidad y se traducen en una cocina de territorio.',
  coverImage:
    'https://commons.wikimedia.org/wiki/Special:FilePath/Ci%C3%A9nago%20de%20Humedal%20del%20R%C3%ADo%20Maull%C3%ADn%2C%20Santuario%20de%20la%20Naturaleza.jpg?width=1280',
  city: 'Maullín, Provincia de Llanquihue',
  country: 'Chile',
  category: 'history',
  language: 'Español',
  durationMinutes: 60,
  distanceKm: 3.2,
  difficulty: 'easy',
  rating: 5.0,
  reviewsCount: 0,
  featured: false,
  published: true,
  createdAt: '2026-10-14T12:00:00Z',
  updatedAt: '2026-10-14T12:00:00Z',
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
      id: 'doc-humedales-rio-maullin',
      name: 'Ficha de Interpretación: Humedales del Río Maullín.pdf',
      type: 'guide',
      url: '/pdf/doc-humedales-rio-maullin.pdf',
      size: '—',
      description: 'Ficha de apoyo del recorrido: qué es un humedal, por qué se declaró Santuario de la Naturaleza y cómo observar su avifauna sin perturbar el ecosistema.'
    }
  ],
  stops: [
    {
      id: 'stop-maullin-pueblo-1',
      order: 1,
      title: 'El Pueblo de Maullín: Agua que Dio Origen',
      subtitle: 'Toponimia, el Partido de Carelmapu y por qué la ciudad nació mirando al río',
      category: 'history',
      location: {
        lat: -41.6167,
        lng: -73.6,
        address: 'Pueblo de Maullín, ribera del río Maullín, Región de Los Lagos, Chile'
      },
      triggerRadiusMeters: 80,
      narrativeText:
        'Antes de las calles asfaltadas, este río fue la carretera. Detente y mira el cauce: casi todo Maullín se explica desde aquí. El nombre mismo habla de agua: la toponimia mapudungun se ha asociado a la idea de agua en movimiento, de caída o de río, y distintos estudios del habla mapuche en Chile coinciden en que el agua es una de las raíces más frecuentes de nuestros nombres de lugar. Durante el período colonial, el referente de esta comarca fue el Partido de Carelmapu, un núcleo ligado a la navegación y al comercio ribereño, en el borde de Llanquihue y el Chiloé continental. A lo largo del siglo XIX, el centro de gravedad se fue desplazando hasta consolidarse en lo que hoy conocemos como Maullín. Y eso no fue casual: un estuario daba acceso al mar interior, a los recursos acuáticos y al transporte antes de que existieran los caminos terrestres modernos. Como escribía Freeman Tilden, el buen intérprete no instruye, sino que provoca: por eso te dejamos una pregunta para que la lleves toda la visita. ¿Por qué se levantó una ciudad aquí y no en cualquier loma seca de la provincia? La respuesta está a tus pies, corriendo hacia el mar. Tómate unos minutos, escucha el agua y guarda esa pregunta.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 150,
        voiceName: 'Kore',
        transcript:
          'Antes de las calles, este río fue la carretera. Mira el cauce: casi todo Maullín se explica desde aquí. Su nombre es mapudungun y habla de agua. Antes de Maullín fue Carelmapu, el referente colonial ligado a la navegación; con el tiempo el centro se movió al estuario, que ofrecía mar interior, recursos y transporte antes de los caminos. Te dejamos una pregunta para toda la visita: ¿por qué una ciudad aquí y no en una loma seca? La respuesta corre hacia el mar. Escucha el agua.'
      },
      images: [
        {
          id: 'img-maullin-pueblo-iglesia',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Vista%20a%C3%A9rea%20de%20la%20Iglesia%20de%20Maull%C3%ADn%202025.jpg?width=1280',
          caption: 'Vista aérea de la Iglesia Nuestra Señora del Rosario, en el casco del pueblo de Maullín',
          isPrimary: true
        },
        {
          id: 'img-maullin-pueblo-bahia',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Maull%C3%ADn%20(180532295).jpeg?width=1280',
          caption: 'El borde costero de Maullín: mar, botes y pescadores, donde el río se entrega al mar interior',
          isPrimary: false
        }
      ],
      documents: [],
      tips: 'El casco urbano se recorre a pie sin dificultad. Lleva calzado cómodo y agua: el clima de la comuna cambia rápido, con lloviznas frecuentes. Respeta el ritmo del pueblo y su vida cotidiana.',
      trivia: 'El territorio que hoy es Maullín formó parte del antiguo Partido de Carelmapu, uno de los asientos coloniales del Chiloé continental, y su centro administrativo fue desplazándose hacia el estuario del río Maullín a lo largo del siglo XIX.',
      estimatedStayMinutes: 12
    },
    {
      id: 'stop-maullin-humedales-2',
      order: 2,
      title: 'Humedales del Río Maullín: El Gran Regulador',
      subtitle: 'Un Santuario de la Naturaleza entre planicies mareales, hualves y aves migratorias',
      category: 'nature',
      location: {
        lat: -41.6086,
        lng: -73.6717,
        address: 'Humedales del río Maullín, Santuario de la Naturaleza, Región de Los Lagos, Chile'
      },
      triggerRadiusMeters: 120,
      narrativeText:
        'Lo que tienes ante los ojos no es un vacío: es el gran órgano regulador de Maullín. Estos humedales fueron declarados Santuario de la Naturaleza bajo el nombre de Humedales del río Maullín por el Ministerio del Medio Ambiente, mediante decreto publicado a comienzos de 2022, con una superficie cercana a las ocho mil hectáreas que abarca varias comunas: Maullín, Llanquihue, Puerto Varas, Puerto Montt y Los Muermos. Aquí conviven planicies mareales, marismas, pajonales, lagunas, praderas inundables y dos formaciones muy singulares: los hualves, que son bosques pantanosos nativos, y las turberas. Según los registros de conservación, el área alberga más de ciento cincuenta especies de aves silvestres, de las cuales una buena parte son migratorias, además de especies emblemáticas y amenazadas como el huillín o nutria de río y el flamenco chileno. Y no solo hay vida silvestre: estos humedales filtran el agua, frenan las crecidas, retienen nutrientes y almacenan carbono. Son, literalmente, infraestructura natural. Como enseñaba Steve Van Matre, hay que empezar donde está el visitante: dejar de ver un “pantano” y empezar a ver un sistema que trabaja por nosotros. Escucha. Mira el juncal. Cada ave que levanta vuelo es una prueba de que este lugar está vivo, y protegerlo es proteger a la propia ciudad que nació a su lado.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 165,
        voiceName: 'Puck',
        transcript:
          'Lo que ves no es un vacío: es el gran regulador de Maullín. Estos humedales fueron declarados Santuario de la Naturaleza en 2022, con cerca de ocho mil hectáreas entre varias comunas. Reúnen planicies mareales, pajonales, lagunas y dos formaciones únicas: hualves y turberas. Alojan más de ciento cincuenta especies de aves, muchas migratorias, y especies amenazadas como el huillín y el flamenco chileno. Filtran el agua, frenan las crecidas y guardan carbono: son infraestructura natural. No es un pantano: es un sistema que trabaja por nosotros. Escucha el juncal y mira las aves.'
      },
      images: [
        {
          id: 'img-maullin-humedal-cienago',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ci%C3%A9nago%20de%20Humedal%20del%20R%C3%ADo%20Maull%C3%ADn%2C%20Santuario%20de%20la%20Naturaleza.jpg?width=1280',
          caption: 'Ciénaga del Humedal del Río Maullín, en el Santuario de la Naturaleza',
          isPrimary: true
        },
        {
          id: 'img-maullin-humedal-flamenco',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Phoenicopterus%20chilensis%20Flamenco%20chileno%20Chilean%20flamingo%2001.jpg?width=1280',
          caption: 'Flamenco chileno (Phoenicopterus chilensis), una de las especies destacadas de los humedales',
          isPrimary: false
        },
        {
          id: 'img-maullin-humedal-huillin',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lontra%20provocax.jpg?width=1280',
          caption: 'Huillín o nutria de río (Lontra provocax), especie en peligro que habita estos cursos de agua',
          isPrimary: false
        },
        {
          id: 'img-maullin-humedal-garza',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lllanquihue%20-Maullin%20-garza%20f01.jpg?width=1280',
          caption: 'Garza u huairavo (Nycticorax nycticorax) fotografiada en la zona de Maullín',
          isPrimary: false
        }
      ],
      documents: [],
      tips: 'Observa las aves a distancia y en silencio, con binoculares si puedes. No alimentes a la fauna, no salgas de los senderos ni pises las zonas de juncal: son frágiles. Evita el acceso en vehículo motorizado por las planicies de marea.',
      trivia: 'Los hualves son bosques pantanosos nativos muy poco frecuentes en Chile: formaciones anegadas que originalmente se extendían entre Coquimbo y la Isla Grande de Chiloé y que hoy sobreviven como remanentes amenazados.',
      estimatedStayMinutes: 20
    },
    {
      id: 'stop-maullin-empanada-3',
      order: 3,
      title: 'La Empanada de Mariscos: Sabor Nacido del Estuario',
      subtitle: 'Patrimonio vivo: la cocina que traduce el humedal en receta',
      category: 'gastronomy',
      location: {
        lat: -41.617,
        lng: -73.598,
        address: 'Cocinerías y locales del pueblo de Maullín, Región de Los Lagos, Chile'
      },
      triggerRadiusMeters: 60,
      narrativeText:
        'Prueba a leer este plato como si fuera un mapa. Lo que hoy es relleno, ayer fue trabajo en el estuario. La empanada de mariscos es una preparación tradicional del litoral de Llanquihue y del Chiloé continental, y su relleno clásico se arma con lo que el río, la marea y la bahía entregan según la temporada: una mezcla variable de mariscos envueltos en masa y cocidos al horno. Es una receta nacida de la economía de subsistencia pesquera artesanal y de la hospitalidad de la casa. Por eso este bocado no es “gastronomía” desconectada: es cocina de territorio. Sernatur ha relevado la cocina chilena como atractivo cultural, y las organizaciones que documentan el patrimonio alimentario del país reconocen en las preparaciones marinas del sur una fuerte identidad regional. Aquí se cumple una de las ideas centrales del diseño interpretativo: conectar un recurso, un público y un significado. El mismo estuario que ayer proveía el marisco es hoy el mismo que sostiene el humedal que viste en la parada anterior. La masa guarda calor; el relleno guarda memoria. Cuando la pruebes, pregúntate: ¿qué platos de tu propia tierra cuentan, en silencio, la historia del lugar donde naciste?',
      audio: {
        type: 'ai_generated',
        durationSeconds: 130,
        voiceName: 'Kore',
        transcript:
          'Lee este plato como un mapa: lo que hoy es relleno, ayer fue trabajo en el estuario. La empanada de mariscos es tradicional del litoral de Llanquihue y del Chiloé continental; su relleno se arma con lo que el río y la marea entregan según la temporada. Nace de la pesca artesanal y de la hospitalidad de la casa. No es gastronomía desconectada: es cocina de territorio, la misma agua que sostiene el humedal. La masa guarda calor, el relleno guarda memoria. ¿Qué platos de tu tierra cuentan la historia del lugar donde naciste?'
      },
      images: [
        {
          id: 'img-maullin-empanada',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Empanada%20Chilena.JPG?width=1280',
          caption: 'Empanada chilena horneada, el formato en que se prepara tradicionalmente la empanada de mariscos',
          isPrimary: true
        }
      ],
      documents: [],
      tips: 'La disponibilidad de mariscos cambia con la temporada y con las vedas sanitarias; pregunta en el local qué trae el día. Prefiere cocinerías y productores locales: así el sabor y la economía quedan en el territorio.',
      trivia: 'La empanada de mariscos comparte con la empanada de pino el gesto de hornear el relleno dentro de la masa, pero cambia la carne por productos del estuario, un rasgo típico del litoral de la Región de Los Lagos.',
      estimatedStayMinutes: 15
    },
    {
      id: 'stop-maullin-cierre-4',
      order: 4,
      title: 'Cierre: Maullín, Donde Todo se Conecta',
      subtitle: 'Agua, memoria y sabor: una sola historia contada en tres miradas',
      category: 'history',
      location: {
        lat: -41.6165,
        lng: -73.5995,
        address: 'Ribera del río Maullín, pueblo de Maullín, Región de Los Lagos, Chile'
      },
      triggerRadiusMeters: 80,
      narrativeText:
        'Hemos recorrido Maullín siguiendo un solo hilo: el agua. El pueblo se ubicó donde el río lo permitía, porque un estuario era puerto, camino y despensa. Ese mismo sistema —humedales, marismas, hualves— sostiene hoy una biodiversidad excepcional, con aves migratorias, huillines y flamencos, y fue reconocido como Santuario de la Naturaleza. Y con los mismos frutos que entrega el estuario, las manos maullineñas crearon una empanada de mariscos que sabe a este lugar. Tres miradas, una sola historia: agua, memoria y sabor. Tilden decía que el propósito de la interpretación no es instruir, sino provocar. Así que te dejamos una última provocación para llevar contigo: ¿qué historia cuenta el territorio donde tú vives, y qué platos, caminos o costumbres serían capaces de contarla? Cuídalo: no alimentes a la fauna, no ensucies los humedales, compra a quien vive de esta tierra. Y cuando vuelvas a casa, mira tu propio paisaje con ojos de intérprete: seguro descubrirás que, como Maullín, también tiene un río que lo escribió todo.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 115,
        voiceName: 'Puck',
        transcript:
          'Recorrimos Maullín siguiendo un solo hilo: el agua. El pueblo se ubicó donde el río lo permitía, porque el estuario era puerto, camino y despensa. Ese mismo sistema sostiene una biodiversidad excepcional y fue declarado Santuario de la Naturaleza. Y con sus frutos, las manos del pueblo crearon una empanada de mariscos que sabe a este lugar. Agua, memoria y sabor: una sola historia. Tilden decía que la interpretación no instruye, provoca. ¿Qué historia cuenta el territorio donde vives? Cuídalo y vuelve a mirarlo con ojos de intérprete. Gracias por acompañarnos.'
      },
      images: [
        {
          id: 'img-maullin-cierre-rio',
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/R%C3%ADo%20Maull%C3%ADn%201.jpg?width=1280',
          caption: 'El río Maullín, hilo conductor del recorrido, antes de entregarse al mar interior',
          isPrimary: true
        }
      ],
      documents: [],
      tips: 'Si te quedan ganas de caminar, recorre la ribera del río al atardecer y cierra el recorrido en silencio, mirando el agua. Antes de irte, deja el lugar mejor de como lo encontraste.',
      trivia: 'El río Maullín es el principal emisario del lago Llanquihue hacia el mar: el agua que aquí termina es la misma que miles de visitantes ven nacer a los pies del volcán Osorno.',
      estimatedStayMinutes: 10
    }
  ]
};
