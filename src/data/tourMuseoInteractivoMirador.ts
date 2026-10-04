import { Tour } from '../types';

export const tourMuseoInteractivoMirador: Tour = {
  id: 'tour-museo-interactivo-mirador',
  title: 'El MIM por Dentro: el Museo que se Toca',
  tagline:
    'Audioguía Oficial El Viaje Por Chile • Salas, péndulos, un planetario y un parque de ciencia: la educación experiencial hecha museo en la comuna de La Granja',
  description:
    'Audioguía producida por el Equipo El Viaje Por Chile (www.elviaje.cl). El Museo Interactivo Mirador (MIM) es el primer museo interactivo de Chile y el más visitado de su tipo: siete mil metros cuadrados de salas, alrededor de trescientos módulos y un parque de trece hectáreas que invitan a aprender tocando, experimentando y equivocándose con alegría. Inaugurado en marzo del año 2000 gracias a la Fundación Tiempos Nuevos y al trabajo de arquitectos como Juan Ignacio Baixas y Enrique del Río, el MIM convirtió el aprendizaje en un juego donde cada visitante es protagonista. Este circuito de ocho paradas —explanada, salas de Tierra, Energía y Vida, el Museo Interactivo de Astronomía, la Plaza Solar Cruz del Sur, los Penetrables y el parque— interpreta cómo el museo diseña la experiencia del visitante y reúne las claves para planificar tu visita familiar.',
  theme:
    'En el MIM nada se mira sin tocarse: la curiosidad se experimenta porque aprender es un juego con las manos.',
  coverImage:
    'https://upload.wikimedia.org/wikipedia/commons/c/c1/Museo_Interactivo_Mirador-01.jpg',
  city: 'La Granja, Santiago de Chile',
  country: 'Chile',
  category: 'museum',
  language: 'Español',
  durationMinutes: 180,
  distanceKm: 3.2,
  difficulty: 'easy',
  rating: 4.9,
  reviewsCount: 187,
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
      id: 'doc-mim-historia',
      name: 'Dossier: Historia del Museo Interactivo Mirador.pdf',
      type: 'guide',
      url: '/pdf/doc-mim-historia.pdf',
      size: '72 KB',
      description: 'Del Centro Interactivo de Ciencias de 1996 al museo de 2000: arquitectura, fundación y los hitos de un museo que nació para ser tocado.'
    },
    {
      id: 'doc-mim-salas',
      name: 'Guía Rápida de Salas y Experiencias MIM.pdf',
      type: 'pdf',
      url: '/pdf/doc-mim-salas.pdf',
      size: '66 KB',
      description: 'Mapa de las salas del museo y del parque, con las edades recomendadas y las experiencias imperdibles de cada sector.'
    }
  ],
  stops: [
    {
      id: 'stop-mim-explanada',
      order: 1,
      title: 'La Explanada y el Acceso: un Museo que se Abre al Barrio',
      subtitle: 'La puerta del MIM, la Fundación Tiempos Nuevos y la arquitectura del aprendizaje',
      category: 'museum',
      location: {
        lat: -33.51874,
        lng: -70.61306,
        address: 'Avenida Punta Arenas 6711, comuna de La Granja, Santiago'
      },
      triggerRadiusMeters: 90,
      narrativeText:
        'Mira el edificio de frente: no es un museo de vitrinas, es una casa abierta al barrio de La Granja. El Museo Interactivo Mirador abrió sus puertas en marzo del año 2000, gracias a la Fundación Tiempos Nuevos impulsada por la Primera Dama Marta Larraechea, y desde el primer día se planteó una misión clara: que la ciencia se aprenda haciendo, tocando y preguntando, como decía el pedagogo John Dewey. La arquitectura de Juan Ignacio Baixas y Enrique del Río creó volúmenes ligeros, pasarelas y luz natural, para que el museo fuera también una lección de diseño. En la explanada ya empieza la experiencia: el zócalo, las escalinatas y los módulos exteriores anuncian que aquí nada es solo para mirar. Fíjate en los grupos familiares: el MIM es uno de esos lugares donde un niño de cinco años y su abuela aprenden al mismo ritmo. Antes de entrar, decide tu estrategia: las salas Tierra, Energía y Vida en la planta principal, el Museo Interactivo de Astronomía en el sector sur y el parque como cierre.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 180,
        voiceName: 'Kore',
        transcript:
          'Mira el edificio de frente: no es un museo de vitrinas, es una casa abierta al barrio de La Granja. El Museo Interactivo Mirador abrió en marzo del año dos mil, gracias a la Fundación Tiempos Nuevos, y desde el primer día propuso una misión: que la ciencia se aprenda haciendo, tocando y preguntando. La arquitectura de Baixas y del Río creó volúmenes ligeros, pasarelas y luz natural, para que el edificio fuera también una lección de diseño. En la explanada la experiencia ya empieza: aquí nada es solo para mirar. Decide tu estrategia: las salas Tierra, Energía y Vida en la planta principal, la astronomía en el sector sur y, al final, el parque.'
      },
      images: [
        {
          id: 'img-mim-fachada',
          url: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Museo_Interactivo_Mirador-01.jpg',
          caption: 'La fachada del MIM: volúmenes ligeros y luz natural para aprender tocando',
          isPrimary: true
        },
        {
          id: 'img-mim-satelital',
          url: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Mim_satelital.png',
          caption: 'Vista aérea del museo y su parque, un oasis de ciencia en La Granja',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://www.mim.cl'
      },
      documents: [],
      tips: 'El MIM abre de martes a domingo y cierra los lunes. Compra tus entradas online con anticipación en los periodos de vacaciones escolares: los fines de semana se agotan.',
      trivia:
        'El MIM recibe cerca de 430.000 visitas al año y alrededor del 70% de ellas son escolares: es el museo de ciencia más concurrido de Chile.',
      estimatedStayMinutes: 20
    },
    {
      id: 'stop-mim-sala-tierra',
      order: 2,
      title: 'Sala de la Tierra: De Pie sobre el Planeta',
      subtitle: 'La onda sísmica, el terremoto simulado y el suelo chileno',
      category: 'museum',
      location: {
        lat: -33.51879,
        lng: -70.61315,
        address: 'Planta principal, MIM, La Granja'
      },
      triggerRadiusMeters: 60,
      narrativeText:
        'Entras a la Sala de la Tierra y el piso tiembla: aquí la propuesta es encarnar, literalmente, los conceptos de la geología y la geografía de Chile. El módulo más famoso de la sala es la estructura de Marco Polo, ese gran armazón cinegético desde el cual los visitantes se cuelgan para sentir el vaivén de un terremoto: la «onda sísmica» del MIM, una de las primeras de su tipo en Latinoamérica. Caminando encontrarás el planeta que se puede escuchar, las placas tectónicas en gran tamaño, los fósiles que se tocan y el suelo de la sala que vibra con las réplicas simuladas. Todo el museo practica lo que predica: cada módulo invita a hacer la pregunta y buscar la respuesta con las manos. Es el principio de la interpretación interactiva: el visitante no es espectador, es protagonista. Mira a la sagrada familia de la entrada: en quince minutos, el niño que llegó con miedo al terremoto se convirtió en el experto que explica la escala de Richter a sus padres.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 175,
        voiceName: 'Puck',
        transcript:
          'Entras a la Sala de la Tierra y el piso tiembla: aquí la propuesta es encarnar la geología y la geografía de Chile. El módulo más famoso es la estructura de Marco Polo, ese gran armazón desde el cual los visitantes se cuelgan para sentir un terremoto: la onda sísmica del MIM. Caminando hay un planeta que se escucha, placas tectónicas en gran tamaño y suelo que vibra con réplicas simuladas. Todo el museo practica lo que predica: cada módulo invita a hacer la pregunta y buscar la respuesta con las manos. En quince minutos, el niño que llegó con miedo al terremoto se convierte en el experto que explica la escala de Richter a sus padres.'
      },
      images: [
        {
          id: 'img-mim-interior',
          url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Museo_Interactivo_Mirador.jpg',
          caption: 'Al interior del MIM: la galería que invita a tocar, girar, soplar y experimentar',
          isPrimary: true
        },
        {
          id: 'img-mim-comunicaciones',
          url: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Comunicaciones_mim.JPG',
          caption: 'Módulos de la sala de comunicaciones: la voz que viaja, la onda que se ve',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://www.mim.cl'
      },
      documents: [],
      tips: 'La onda sísmica tiene capacidad limitada y se arma fila: prueba llegar a primera hora o poco después del almuerzo, cuando las salas se vacían.',
      trivia:
        'Chile es uno de los países más sísmicos del planeta y el MIM convirtió esa realidad en un módulo educativo: un lugar donde los terremotos se transforman de miedo en conocimiento.',
      estimatedStayMinutes: 30
    },
    {
      id: 'stop-mim-sala-energia',
      order: 3,
      title: 'Sala de la Energía: el Péndulo y la Luz que se Genera',
      subtitle: 'Electricidad, magnetismo y las plantas fotovoltaicas del parque',
      category: 'museum',
      location: {
        lat: -33.51865,
        lng: -70.61345,
        address: 'Planta principal, MIM, La Granja'
      },
      triggerRadiusMeters: 60,
      narrativeText:
        'En la Sala de la Energía el concepto se ve y se siente: el péndulo electromagnético que oscila sin que nadie lo empuje al ritmo de la inducción, los generadores que encienden luces con pedaleo y las cintas que transforman el movimiento en electricidad. Si vienes con niños, esta sala es la favorita: aquí la energía no se explica, se produce. Uno de los gestos más coherentes del MIM está afuera: en el parque funcionan plantas fotovoltaicas demostrativas que alimentan parte de la iluminación del museo, convirtiendo el edificio en un módulo más de la colección. La sala también dialoga con el país: Chile, con su desierto y su sol, es uno de los escenarios naturales de la energía solar, y el MIM lo muestra con parrones de celdas que giran siguiendo al astro. Es la prueba de que un museo puede ser, al mismo tiempo, aula, laboratorio y demostración en vivo de lo que enseña.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 160,
        voiceName: 'Zephyr',
        transcript:
          'En la Sala de la Energía el concepto se ve y se siente: el péndulo electromagnético que oscila solo, los generadores que encienden luces con pedaleo y las cintas que transforman el movimiento en electricidad. Aquí la energía no se explica, se produce. En el parque hay plantas fotovoltaicas demostrativas que alimentan parte de la iluminación del museo, convirtiendo el edificio en un módulo más de la colección. El museo dialoga con el país: Chile, con su desierto y su sol, es un escenario natural de la energía solar. Es la prueba de que un museo puede ser aula, laboratorio y demostración en vivo de lo que enseña.'
      },
      images: [
        {
          id: 'img-mim-fotovoltaica',
          url: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Planta_fotovoltaica_demostrativa_del_MIM.jpg',
          caption: 'Planta fotovoltaica demostrativa del MIM: el parque también enseña',
          isPrimary: true
        },
        {
          id: 'img-mim-interior-2',
          url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Museo_Interactivo_Mirador.jpg',
          caption: 'La galería central del museo: módulos para descubrir el mundo con las manos',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://www.mim.cl'
      },
      documents: [],
      tips: 'En vacaciones escolares los módulos más concurridos (péndulo, generadores y onda sísmica) se llenan: organiza el recorrido en sentido antihorario para llegar antes de las filas.',
      trivia:
        'Los módulos del MIM provienen de talleres propios y de la colaboración internacional: varios de ellos fueron diseñados por el Exploratorium de San Francisco, cuna de los museos interactivos.',
      estimatedStayMinutes: 30
    },
    {
      id: 'stop-mim-mahuida-volcan',
      order: 4,
      title: 'Mahuida: el Volcán que se Sube',
      subtitle: 'La montaña interactiva, la sala de la Vida y el diálogo con los sentidos',
      category: 'museum',
      location: {
        lat: -33.51854,
        lng: -70.61338,
        address: 'Sector Sala de la Vida, MIM, La Granja'
      },
      triggerRadiusMeters: 60,
      narrativeText:
        'Si hay una imagen que define al MIM en la retina de los santiaguinos es Mahuida, el volcán de paredes suaves que invita a escalarlo por dentro. Mahuida —en mapudungun, «montaña»— es una experiencia sensorial: al subir cambian los olores, los sonidos, la temperatura y el clima, de la falda verde a la cumbre nevada, para descender por un tobogán. Es un módulo enorme, de esos que no caben en un museo tradicional y que en el MIM son el plato fuerte. A su lado, la Sala de la Vida aborda el cuerpo humano, los sentidos y los ecosistemas: ojos que se prueban, sonidos que se reconocen y una estrella de la vida que ordena la colección. La propuesta sigue la pedagogía del aprendizaje haciendo: aquí nadie te dice «no toques», todo lo contrario, te invitan. Observa cómo el museo gestiona el flujo de los visitantes: las colas, los tiempos de espera y las edades recomendadas son parte del diseño de la experiencia, tan importante como el contenido.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 165,
        voiceName: 'Charon',
        transcript:
          'Si hay una imagen que define al MIM en la retina de los santiaguinos es Mahuida, el volcán de paredes suaves que invita a escalarlo por dentro. Mahuida, en mapudungun montaña, es una experiencia sensorial: al subir cambian olores, sonidos, temperatura y clima, de la falda verde a la cumbre nevada, para descender por un tobogán. A su lado, la Sala de la Vida aborda el cuerpo humano y los sentidos. La propuesta sigue la pedagogía del aprendizaje haciendo: aquí nadie te dice no toques, todo lo contrario, te invitan. Las colas, los tiempos de espera y las edades recomendadas son parte del diseño de la experiencia del visitante, tan importante como el contenido.'
      },
      images: [
        {
          id: 'img-mim-interior-3',
          url: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Museo_Interactivo_Mirador.jpg',
          caption: 'La luz y los módulos de la galería: el museo que se camina y se descubre',
          isPrimary: true
        },
        {
          id: 'img-mim-campus',
          url: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Mim_satelital.png',
          caption: 'La escala del campus MIM, uno de los museos interactivos más grandes del hemisferio sur',
          isPrimary: false
        }
      ],
      socialLinks: {},
      documents: [],
      tips: 'Mahuida cierra temporalmente en algunos horarios por mantenimiento: revisa en la entrada el estado de los módulos destacados antes de armar la ruta.',
      trivia:
        'El nombre Mahuida proviene del mapudungun «montaña»: el módulo reinterpreta los volcanes de Chile, la cordillera que vertebra el país, como territorio de juego y aprendizaje.',
      estimatedStayMinutes: 25
    },
    {
      id: 'stop-mim-astronomia',
      order: 5,
      title: 'Museo Interactivo de Astronomía: el Cielo a Mano',
      subtitle: 'El domo, los astros y el aprendizaje de mirar arriba',
      category: 'museum',
      location: {
        lat: -33.52015,
        lng: -70.61449,
        address: 'Sector sur del campus, MIM, La Granja'
      },
      triggerRadiusMeters: 80,
      narrativeText:
        'Al sector sur del campus se llega por un camino que bordea el parque, y allí te espera el Museo Interactivo de Astronomía: un edificio con su propio domo en el que el cielo de Chile es el protagonista. Chile alberga algunos de los observatorios más importantes del mundo y esta es la puerta de entrada lúdica a esa vocación: módulos donde se encogen las estrellas, se pesan los planetas, se camina la distancia de la luz y se observa el sol con telescopios seguros en el exterior. Las sesiones en el domo, con sus proyecciones inmersivas, vuelven a los visitantes astronautas por un rato. El MIA es un recordatorio de que la educación funciona cuando el lugar mismo enseña: aquí el museo no habla solo de astronomía, vive en un país que mira el cielo. Si vienes en familia, coordina horarios: la sesión de planetario se agenda y tiene cupos.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 160,
        voiceName: 'Fenrir',
        transcript:
          'Al sector sur del campus se llega por un camino que bordea el parque y te espera el Museo Interactivo de Astronomía: un edificio con su propio domo donde el cielo de Chile es el protagonista. Chile alberga algunos de los observatorios más importantes del mundo y esta es la puerta lúdica a esa vocación: módulos donde se pesan los planetas, se camina la distancia de la luz y se observa el sol con telescopios seguros. Las sesiones en el domo convierten a los visitantes en astronautas por un rato. Aquí el museo no habla solo de astronomía: vive en un país que mira el cielo. Coordina horarios, porque la sesión de planetario se agenda y tiene cupos.'
      },
      images: [
        {
          id: 'img-mim-mia-1',
          url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Parque_del_Museo_Interactivo_Mirador.jpg',
          caption: 'El parque y los módulos exteriores del MIM, antesala del sector de astronomía',
          isPrimary: true
        },
        {
          id: 'img-mim-mia-2',
          url: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Mim_satelital.png',
          caption: 'El campus a vista de pájaro: museo y parque a la escala del cielo',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://www.mim.cl'
      },
      documents: [],
      tips: 'La entrada al Museo Interactivo de Astronomía está incluida en el ticket, pero las sesiones del domo operan por horarios: agenda tu cupo apenas llegues, antes de recorrer las salas.',
      trivia:
        'Chile es hogar del 40% de la observación astronómica del mundo; el MIA es la puerta de entrada lúdica a esa estrellera nación.',
      estimatedStayMinutes: 40
    },
    {
      id: 'stop-mim-plaza-solar',
      order: 6,
      title: 'Plaza Solar Cruz del Sur: el Zócalo que se Lee con las Manos',
      subtitle: 'Astrolabios, braille y un museo que piensa en todos',
      category: 'museum',
      location: {
        lat: -33.51993,
        lng: -70.61363,
        address: 'Plaza interior, MIM, La Granja'
      },
      triggerRadiusMeters: 50,
      narrativeText:
        'Antes de salir al parque, detente en la Plaza Solar Cruz del Sur, una explanada donde la astronomía se vuelve táctil. Aquí los relojes de sol y los astrolabios no están en vitrinas: están en el suelo, para pisarlos, trazarlos y leerlos con las manos. El diseño de la plaza es un ejemplo de accesibilidad universal: hay módulos con escritura braille y maquetas táctiles, porque el MIM entiende que la ciencia es un derecho de todos los cuerpos. Fíjate en los grupos escolares que trazan la trayectoria del sol y en los visitantes que cierran los ojos para leer una estrella con la yema de los dedos. Es la expresión concreta del diseño universal de la experiencia: nadie queda fuera. Para el que planifica visitas, esta parada enseña que la inclusión no es un adorno del espacio, sino la condición de su calidad.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 150,
        voiceName: 'Kore',
        transcript:
          'Antes de salir al parque, detente en la Plaza Solar Cruz del Sur: una explanada donde la astronomía se vuelve táctil. Los relojes de sol y los astrolabios no están en vitrinas, están en el suelo, para pisarlos y leerlos con las manos. Hay módulos con braille y maquetas táctiles, porque el MIM entiende que la ciencia es un derecho de todos los cuerpos. Es la expresión concreta del diseño universal: nadie queda fuera. Esta parada enseña que la inclusión no es un adorno del espacio, sino la condición de su calidad.'
      },
      images: [
        {
          id: 'img-mim-plaza-1',
          url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Parque_del_Museo_Interactivo_Mirador.jpg',
          caption: 'La plaza y el parque del MIM: el espacio exterior también es museo',
          isPrimary: true
        },
        {
          id: 'img-mim-plaza-2',
          url: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Planta_fotovoltaica_demostrativa_del_MIM.jpg',
          caption: 'Las estructuras solares del campus, vecinas de la plaza inclusiva',
          isPrimary: false
        }
      ],
      socialLinks: {},
      documents: [],
      tips: 'La plaza es un buen punto de reencuentro familiar: si el grupo se separa entre salas, este es el lugar neutral y sombreado para encontrarse.',
      trivia:
        'La Cruz del Sur, la constelación que nombra esta plaza, es la que guió a los navegantes del hemisferio sur y figura en la bandera nacional: un museo que enseña desde su propio suelo la identidad del cielo chileno.',
      estimatedStayMinutes: 15
    },
    {
      id: 'stop-mim-penetrables',
      order: 7,
      title: 'Los Penetrables: el Laberinto de Colores que Redefine el Espacio',
      subtitle: 'Tubos de plástico, geometría y fotos que se convierten en jaulas de luz',
      category: 'museum',
      location: {
        lat: -33.51997,
        lng: -70.61317,
        address: 'Zona de Los Penetrables, MIM, La Granja'
      },
      triggerRadiusMeters: 50,
      narrativeText:
        'Una de las obras de arte más fotografiadas del MIM no cuelga en una pared: son los llamados «tallarines», tubos de plástico de colores que se entrecruzan como un bosque geométrico y que el visitante atraviesa avanzando en zigzag. Conocidos como Los Penetrables, estos módulos juegan con la relación entre la persona y el espacio: al entrar, tu cuerpo reorganiza el color, tu sombra se multiplica y cada paso cambia la obra. Es la experiencia estética que la economía de la experiencia llama «educación y entretenimiento en una sola parada»: aprendes fotografía y percepción mientras juegas. La idea de estas instalaciones proviene de la tradición de los museos de ciencia de los años setenta, que descubrieron que el visitante aprende más cuando el espacio mismo lo desafía. Mira a los niños correr entre los tubos: están haciendo, instintivamente, el ejercicio favorito de la ciencia: experimentar.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 150,
        voiceName: 'Puck',
        transcript:
          'Una de las obras más fotografiadas del MIM no cuelga en una pared: son los llamados tallarines, tubos de plástico de colores que se entrecruzan como un bosque geométrico y que atraviesas en zigzag. Al entrar, tu cuerpo reorganiza el color, tu sombra se multiplica y cada paso cambia la obra. Es educación y entretenimiento en una sola parada: aprendes fotografía y percepción mientras juegas. La idea proviene de los museos de ciencia de los años setenta, que descubrieron que el visitante aprende más cuando el espacio lo desafía. Mira a los niños correr entre los tubos: están haciendo, instintivamente, el ejercicio favorito de la ciencia: experimentar.'
      },
      images: [
        {
          id: 'img-mim-penetrables-1',
          url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Parque_del_Museo_Interactivo_Mirador.jpg',
          caption: 'El área recreativa del campus MIM, hogar de las instalaciones al aire libre',
          isPrimary: true
        },
        {
          id: 'img-mim-penetrables-2',
          url: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Mim_satelital.png',
          caption: 'La geometría del campus: parque, plazas, luz y color',
          isPrimary: false
        }
      ],
      socialLinks: {},
      documents: [],
      tips: 'La zona de los Penetrables es exterior y con sol fuerte al mediodía: ideal entre las once y las cuatro, con sombrero y bloqueador.',
      trivia:
        'Estas instalaciones inmersivas descienden de los «penetrables» de los años setenta, pero el MIM las transformó en un módulo educativo de conciencia espacial y fotografía.',
      estimatedStayMinutes: 20
    },
    {
      id: 'stop-mim-parque-cierre',
      order: 8,
      title: 'El Parque y la Rueda de Larmahue: Cierre en el Paisaje',
      subtitle: 'Los Penetrables, el bosque, la rueda de agua y la meditación final',
      category: 'nature',
      location: {
        lat: -33.51724,
        lng: -70.61372,
        address: 'Parque del MIM, La Granja, Santiago'
      },
      triggerRadiusMeters: 90,
      narrativeText:
        'El recorrido termina donde empezó el MIM como idea: en el parque. Trece hectáreas de césped, árboles y senderos rodean el museo y completan la experiencia al aire libre. El paseo de cierre conduce hacia una pieza emblemática: la Rueca de Larmahue, una gran rueda de agua construida como homenaje a los chinchorros y molinos de riego que los campesinos del mundo les regalaron a los campos del Maule. La rueda gira con el agua y su movimiento, lento y constante, es la metáfora perfecta del aprendizaje: nunca se detiene, siempre alimenta. En el parque también hay módulos de sonido, máquinas de viento y un calendario de flores, además de zonas de picnic. Tómate unos minutos para cerrar la visita en silencio: observa la rueda, escucha el agua, respira el verde. Así termina la experiencia MIM, con la certeza de que la curiosidad no es un destino de museo: es la forma de habitar el mundo.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 165,
        voiceName: 'Zephyr',
        transcript:
          'El recorrido termina donde empezó el MIM como idea: en el parque. Trece hectáreas de césped, árboles y senderos rodean el museo y completan la experiencia al aire libre. El paseo de cierre conduce a la Rueca de Larmahue, una gran rueda de agua que homenajea a los chinchorros y molinos de riego que regaron los campos del Maule. La rueda gira con el agua y su movimiento lento es la metáfora del aprendizaje: nunca se detiene, siempre alimenta. Hay módulos de sonido, máquinas de viento, un calendario de flores y zonas de picnic. Cierra la visita en silencio: observa la rueda, escucha el agua, respira el verde. Así termina la experiencia MIM, con la certeza de que la curiosidad no es un destino de museo: es la forma de habitar el mundo.'
      },
      images: [
        {
          id: 'img-mim-parque-1',
          url: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Parque_del_Museo_Interactivo_Mirador.jpg',
          caption: 'El parque del MIM: el cierre de la visita en medio del verde y la ciencia',
          isPrimary: true
        },
        {
          id: 'img-mim-parque-2',
          url: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Mim_satelital.png',
          caption: 'La escala total del campus: museo, plaza y parque como una sola experiencia',
          isPrimary: false
        }
      ],
      socialLinks: {
        website: 'https://www.mim.cl'
      },
      documents: [],
      tips: 'El parque cierra junto con el museo: deja tu picnic para después de recorrer las salas para aprovechar la luz de la tarde. Hay café y zonas de descanso en el sector central.',
      trivia:
        'La Rueda de Larmahue evoca las ruedas de agua movidas por la corriente que durante siglos regaron los campos de Chile: una ingeniería rural de hierro y madera que el MIM convirtió en arte público.',
      estimatedStayMinutes: 35
    }
  ]
};