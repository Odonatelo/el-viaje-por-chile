import { Tour } from '../types';
import { MAIPO_IMG } from './maipoMedia';

export const tourMaipoBoutiqueAutor: Tour = {
  id: 'tour-maipo-boutique-autor',
  title: 'Ruta 5 · Boutique, Biodinámica y de Autor: la Cara Humana del Maipo',
  tagline:
    'Ruta conectada • Antiyal, Gandolini, Laurent, Monte María, Viñateros de Raíz y La Cantina Fantástica: 6 proyectos de escala humana entre biodinámica, parras viejas y vinos de culto',
  description:
    'Quinta ruta conectada del valle del Maipo. Se interna en el Maipo boutique, orgánico y de autor: el extremo más humano y experimental del valle. Reúne 6 proyectos: Antiyal (1996), la casa pionera de la viticultura biodinámica en Chile; Gandolini y Viña Laurent; Viña Monte María; Viñateros de Raíz; y La Cantina Fantástica by Geancarlo Robba en Isla de Maipo. Experiencias clave: catas íntimas con los dueños, recorridos por viñedos orgánicos, producciones limitadas que se agotan y una cocina de autor maridada en el corazón del valle.',
  theme:
    'El Maipo boutique es un laboratorio de autor: donde la biodinámica, las parras viejas y las producciones limitadas cuentan la cara más humana del vino.',
  tora: {
    tematica:
      'Interpreta el Maipo boutique como un laboratorio de autor: la biodinámica, las parras viejas y las producciones limitadas como contracara artesanal de las grandes casas.',
    organizada:
      'Encadena los proyectos por afinidad de filosofía —biodinámica, de autor, familiar y de degustación— alternando cata técnica y experiencia gastronómica para dar variedad al día.',
    relevante:
      'Muestra que el vino también puede ser un proyecto de vida: conocer a los dueños y sus decisiones vuelve cada etiqueta una historia humana y reconocible.',
    amena:
      'Catas íntimas, almuerzos caseros y conversaciones abiertas con los productores convierten la ruta en una experiencia cálida y cercana.'
  },
  coverImage: MAIPO_IMG.andes,
  city: 'Maipo Alto e Isla de Maipo, Valle del Maipo',
  country: 'Chile',
  category: 'food',
  language: 'Español',
  durationMinutes: 420,
  distanceKm: 80,
  difficulty: 'easy',
  rating: 4.9,
  reviewsCount: 26,
  featured: false,
  relatedTourIds: [
    'tour-valle-del-maipo',
    'tour-maipo-pacific-costa',
    'tour-maipo-grandes-casas'
  ],
  published: true,
  createdAt: '2026-10-09T12:00:00Z',
  updatedAt: '2026-10-09T12:00:00Z',
  author: {
    name: 'Equipo El Viaje',
    avatar: '/entorno/Recurso-6.png',
    role: 'Plataforma Oficial de Interpretación del Patrimonio',
    bio: 'Audioguías y rutas autoguiadas diseñadas por El Viaje Por Chile.',
    verified: true
  },
  socialLinks: {
    instagram: 'https://instagram.com/elviaje.cl',
    website: 'https://www.elviaje.cl'
  },
  generalDocuments: [],
  stops: [
    {
      id: 'stop-boutique-antiyal',
      order: 1,
      title: 'Antiyal (1996): la Casa Pionera de la Biodinámica en Chile',
      subtitle: 'Maipo, la filosofía de Álvaro Espinoza',
      category: 'nature',
      location: {
        lat: -33.62,
        lng: -70.58,
        address: 'Maipo Alto, Región Metropolitana (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 120,
      narrativeText:
        'Antiyal, fundada en 1996 y liderada por el enólogo Álvaro Espinoza, es la casa pionera de la viticultura biodinámica en Chile. Más que una técnica, la biodinámica es una cosmovisión agrícola: se trata el viñedo como un organismo vivo, con preparados naturales, calendario y equilibrio del suelo. Antiyal demostró que un proyecto pequeño podía alcanzar reconocimiento mundial sin renunciar a esa filosofía. Visitar Antiyal es, por eso, una experiencia distinta: aquí se habla de vida microbiana, de cobertura vegetal y de respeto por los ritmos del campo. Prueba sus vinos y pregunta por los preparados biodinámicos. Es la mejor puerta de entrada a la cara más ética y experimental del valle del Maipo.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 135,
        voiceName: 'Kore',
        transcript:
          'Antiyal, fundada en mil novecientos noventa y seis y liderada por el enólogo Álvaro Espinoza, es la casa pionera de la viticultura biodinámica en Chile. Más que una técnica, la biodinámica es una cosmovisión agrícola: se trata el viñedo como un organismo vivo, con preparados naturales, calendario y equilibrio del suelo. Antiyal demostró que un proyecto pequeño podía alcanzar reconocimiento mundial sin renunciar a esa filosofía. Aquí se habla de vida microbiana, de cobertura vegetal y de respeto por los ritmos del campo.'
      },
      images: [
        {
          id: 'img-boutique-antiyal-1',
          url: MAIPO_IMG.andes,
          caption: 'Viñedos biodinámicos al pie de los Andes',
          isPrimary: true
        }
      ],
      socialLinks: { website: 'https://www.antiyal.com' },
      documents: [],
      tips: 'Avisa que te interesa la biodinámica: las visitas suelen profundizar en los preparados y el manejo del suelo, según el interés del grupo.',
      trivia:
        'La agricultura biodinámica se basa en las ideas de Rudolf Steiner y busca equilibrar el viñedo mediante preparados naturales y un calendario agrícola.',
      estimatedStayMinutes: 80
    },
    {
      id: 'stop-boutique-gandolini',
      order: 2,
      title: 'Gandolini: Vinos de Autor del Alto Maipo',
      subtitle: 'Producción limitada y expresión de montaña',
      category: 'gastronomy',
      location: {
        lat: -33.63,
        lng: -70.55,
        address: 'Maipo Alto (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 110,
      narrativeText:
        'Gandolini pertenece a la categoría de los vinos de autor: proyectos pequeños, de producción limitada, donde cada decisión de viñedo y bodega se toma a mano. En el Alto Maipo, estos proyectos buscan capturar la expresión de la montaña con tintos concentrados pero elegantes, muchas veces fuera del circuito de las grandes marcas. La visita permite un diálogo directo con el equipo y una cata enfocada en la identidad del proyecto. Es la parada ideal para quien ya conoce los clásicos del valle y quiere descubrir sus rincones menos masificados. Pregunta por las cepas y por el tamaño de las partidas: a menudo no superan unos pocos miles de botellas.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 100,
        voiceName: 'Fenrir',
        transcript:
          'Gandolini pertenece a la categoría de los vinos de autor: proyectos pequeños, de producción limitada, donde cada decisión se toma a mano. En el Alto Maipo, estos proyectos buscan capturar la expresión de la montaña con tintos concentrados pero elegantes. La visita permite un diálogo directo con el equipo y una cata enfocada en la identidad del proyecto. Es para quien ya conoce los clásicos y quiere descubrir los rincones menos masificados del valle.'
      },
      images: [
        {
          id: 'img-boutique-gandolini-1',
          url: MAIPO_IMG.maipoVinas,
          caption: 'Viñedos de altura del Maipo Alto',
          isPrimary: true
        }
      ],
      socialLinks: { website: 'https://www.elviaje.cl' },
      documents: [],
      tips: 'Las viñas de autor reciben con reserva previa: confirma horarios directamente, ya que suelen atender a un grupo reducido por vez.',
      trivia:
        'Los «vinos de autor» se distinguen por llevar la firma de un enólogo o familia: la persona se vuelve el sello de calidad del proyecto.',
      estimatedStayMinutes: 60
    },
    {
      id: 'stop-boutique-laurent',
      order: 3,
      title: 'Viña Laurent: Carácter Familiar en el Valle',
      subtitle: 'Pequeñas partidas y decisiones de autor',
      category: 'gastronomy',
      location: {
        lat: -33.67,
        lng: -70.9,
        address: 'Valle del Maipo (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 110,
      narrativeText:
        'Viña Laurent encarna el modelo de la viña familiar del Maipo: pocas hectáreas, un equipo pequeño y vinos que buscan expresar un lugar concreto. En este tipo de proyectos, la vendimia se vive como un acontecimiento y cada añada cuenta una historia distinta, a merced del clima. Visitar Laurent es entender la dimensión artesanal de la industria: la misma denominación de origen que produce millones de botellas también alberga talleres donde se decidiría el destino de un centenar de cajas. Prueba sus vinos y pregunta por la historia del proyecto y de su nombre. Es una de esas paradas donde el vino se vuelve conversación y memoria.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 95,
        voiceName: 'Puck',
        transcript:
          'Viña Laurent encarna el modelo de la viña familiar del Maipo: pocas hectáreas, un equipo pequeño y vinos que buscan expresar un lugar concreto. Aquí la vendimia se vive como un acontecimiento y cada añada cuenta una historia distinta. Visitar Laurent es entender la dimensión artesanal de la industria: la misma denominación que produce millones de botellas también alberga talleres donde se decide el destino de un centenar de cajas.'
      },
      images: [
        {
          id: 'img-boutique-laurent-1',
          url: MAIPO_IMG.pirque,
          caption: 'Paisaje rural y viñedos familiares del Maipo',
          isPrimary: true
        }
      ],
      socialLinks: { website: 'https://www.elviaje.cl' },
      documents: [],
      tips: 'Comprar directamente en viñas familiares suele ser la mejor forma de apoyar a los pequeños productores y de llevarse botellas que no llegan al retail.',
      trivia:
        'En el valle del Maipo conviven proyectos de miles de hectáreas con viñas familiares de pocas hectáreas: la misma D.O., dos escalas opuestas.',
      estimatedStayMinutes: 55
    },
    {
      id: 'stop-boutique-monte-maria',
      order: 4,
      title: 'Viña Monte María: Proyecto Familiar del Maipo',
      subtitle: 'Vinos de casa y trato directo',
      category: 'gastronomy',
      location: {
        lat: -33.68,
        lng: -70.9,
        address: 'Valle del Maipo (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 110,
      narrativeText:
        'Viña Monte María refuerza la idea de que el Maipo boutique se construye desde las familias. Su nombre evoca el cerro y la vid, y su propuesta apunta a vinos honestos, de casa, pensados para la mesa y no para la vitrina. En este tramo de la ruta, la experiencia se vuelve doméstica: se conversa, se prueba y se entiende el vino como parte de la vida cotidiana del valle. Es el contrapunto perfecto a las grandes casas que recorriste en otras rutas. Aprovecha para preguntar por las variedades que trabajan y por el origen de sus uvas. Aquí, más que en ningún otro lugar, el vino se explica en primera persona.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 90,
        voiceName: 'Kore',
        transcript:
          'Viña Monte María refuerza la idea de que el Maipo boutique se construye desde las familias. Su propuesta apunta a vinos honestos, de casa, pensados para la mesa y no para la vitrina. Aquí la experiencia se vuelve doméstica: se conversa, se prueba y se entiende el vino como parte de la vida cotidiana del valle. Es el contrapunto perfecto a las grandes casas.'
      },
      images: [
        {
          id: 'img-boutique-montemaria-1',
          url: MAIPO_IMG.maipoCarmenere,
          caption: 'Viñas del valle del Maipo en otoño',
          isPrimary: true
        }
      ],
      socialLinks: { website: 'https://www.elviaje.cl' },
      documents: [],
      tips: 'Las viñas familiares suelen ofrecer degustaciones informales: si te interesa el detalle técnico, avísalo al reservar para que preparen la cata.',
      trivia:
        'Muchos de los proyectos boutique del Maipo nacieron como viñas de hobby que, con los años, se profesionalizaron y abrieron al enoturismo.',
      estimatedStayMinutes: 50
    },
    {
      id: 'stop-boutique-vinateros-raiz',
      order: 5,
      title: 'Viñateros de Raíz: el Nombre de la Identidad Local',
      subtitle: 'Cepas de raíz y orgullo del valle',
      category: 'gastronomy',
      location: {
        lat: -33.77,
        lng: -70.97,
        address: 'Isla de Maipo (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 110,
      narrativeText:
        'Viñateros de Raíz es un nombre que lo dice todo: volver a la raíz, a la parra vieja, al saber hacer local. Este proyecto se suma a la corriente que revaloriza las cepas históricas y los vinos de autor del valle, con un fuerte componente de identidad territorial. En Isla de Maipo, tierra de canales y huertos, propuestas como esta rescatan sabores que estuvieron a punto de perderse. Es una parada para degustar con calma y conversar sobre el rescate de variedades y de prácticas tradicionales. Pregunta por las cepas que trabajan: en proyectos así suele haber sorpresas, desde Carignan hasta mezclas de campo. El Maipo, otra vez, demuestra su diversidad.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 100,
        voiceName: 'Fenrir',
        transcript:
          'Viñateros de Raíz es un nombre que lo dice todo: volver a la raíz, a la parra vieja, al saber hacer local. Este proyecto se suma a la corriente que revaloriza las cepas históricas y los vinos de autor del valle, con un fuerte componente de identidad territorial. En Isla de Maipo, tierra de canales y huertos, propuestas como esta rescatan sabores que estuvieron a punto de perderse.'
      },
      images: [
        {
          id: 'img-boutique-vinateros-1',
          url: MAIPO_IMG.islaDeMaipo,
          caption: 'Isla de Maipo, tierra de parras viejas y viñateros locales',
          isPrimary: true
        }
      ],
      socialLinks: { website: 'https://www.elviaje.cl' },
      documents: [],
      tips: 'Si te interesan las cepas patrimoniales, pide probar vinos de parras viejas: son partidas pequeñas y suelen venderse solo en la viña.',
      trivia:
        'El rescate de cepas «de raíz» se relaciona con el movimiento que busca recuperar variedades antiguas y viñas de pie franco en el valle central.',
      estimatedStayMinutes: 55
    },
    {
      id: 'stop-boutique-cantina-fantastica',
      order: 6,
      title: 'La Cantina Fantástica by Geancarlo Robba: Cierre Gastronómico',
      subtitle: 'Isla de Maipo, cocina de autor y vino del valle',
      category: 'gastronomy',
      location: {
        lat: -33.76,
        lng: -70.99,
        address: 'Isla de Maipo (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 110,
      narrativeText:
        'La ruta boutique cierra en La Cantina Fantástica by Geancarlo Robba, en Isla de Maipo: un espacio donde el vino se encuentra con la cocina de autor. Aquí el cierre no es una cata más, sino una mesa: platos pensados para maridar con los vinos del valle y una experiencia cálida que resume el espíritu de esta ruta —proyectos pequeños, hechos a mano, con nombre y apellido—. Después de recorrer biodinámica, viñas familiares y cepas de raíz, sentarse a comer en el valle es la mejor forma de entender que el vino es, ante todo, cultura de mesa. Reserva con antelación y pide recomendaciones de maridaje. Desde Isla de Maipo puedes volver a Santiago o enlazar con la Ruta 3, que comparte territorio. El Maipo boutique queda así completo.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 105,
        voiceName: 'Kore',
        transcript:
          'La ruta boutique cierra en La Cantina Fantástica by Geancarlo Robba, en Isla de Maipo: un espacio donde el vino se encuentra con la cocina de autor. Aquí el cierre no es una cata más, sino una mesa: platos pensados para maridar con los vinos del valle. Después de recorrer biodinámica, viñas familiares y cepas de raíz, sentarse a comer es la mejor forma de entender que el vino es, ante todo, cultura de mesa.'
      },
      images: [
        {
          id: 'img-boutique-cantina-1',
          url: MAIPO_IMG.cata,
          caption: 'La mesa maridada, cierre de la ruta boutique del Maipo',
          isPrimary: true
        }
      ],
      socialLinks: { website: 'https://www.elviaje.cl' },
      documents: [],
      tips: 'Reserva la mesa con antelación y avisa si tienes restricciones alimentarias: en cocinas de autor el menú de maridaje suele adaptarse.',
      trivia:
        'La tradición de maridar vino y cocina local es una de las señas del enoturismo moderno: busca que el visitante entienda el vino dentro de su cultura gastronómica.',
      estimatedStayMinutes: 90
    }
  ]
};
