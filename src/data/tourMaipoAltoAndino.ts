import { Tour } from '../types';
import { MAIPO_IMG } from './maipoMedia';

export const tourMaipoAltoAndino: Tour = {
  id: 'tour-maipo-alto-andino',
  title: 'Ruta 1 · Alto Maipo Andino: la Cuna del Cabernet',
  tagline:
    'Ruta conectada • Peñalolén, Puente Alto y Pirque: 12 viñas entre bóvedas de cal y canto, bodegas de autor y los atardeceres andinos del Cabernet Sauvignon',
  description:
    'Primera de las cinco rutas conectadas del valle del Maipo. Recorre el piedemonte andino por Peñalolén, Puente Alto y Pirque, la zona donde nace el gran Cabernet Sauvignon chileno. Reúne 12 viñas: las históricas Cousiño Macul y Concha y Toro, los íconos de ultra-alta gama Don Melchor, Almaviva y Viñedo Chadwick, y proyectos como Haras de Pirque, El Principal, Aquitania, Alyan, Quebrada de Macul, William Fevre y Pérez Cruz. Experiencias clave: bicitours entre parras centenarias, bóvedas subterráneas de 1872, la leyenda del Casillero del Diablo, arquitectura en madera de autor y atardeceres con maridaje (Sunset Experience).',
  theme:
    'El Alto Maipo es la cuna del Cabernet Sauvignon chileno: donde la montaña, el agua andina y la vid en pie franco escriben el vino en la copa.',
  tora: {
    tematica:
      'Interpreta el origen del gran Cabernet chileno: la Cordillera de los Andes, el riego andino y las parras centenarias en pie franco como firma de una cuna vitícola única.',
    organizada:
      'Ordena las viñas de oeste a este y de la ciudad a la montaña: bóvedas urbanas de Peñalolén, casonas y cavas de Pirque y, al final, los viñedos de Puente Alto pegados a la cordillera.',
    relevante:
      'Vuelve tangible lo que se cata: el grafito, la menta y el cassis de un Cabernet de Alto Maipo dejan de ser descriptores y pasan a ser el paisaje que el visitante acaba de recorrer.',
    amena:
      'Alterna leyendas como la del Casillero del Diablo, arquitectura de autor y atardeceres con maridaje para que una ruta técnica también sea inolvidable.'
  },
  coverImage: MAIPO_IMG.conchaYToro,
  city: 'Peñalolén, Puente Alto y Pirque, Valle del Maipo',
  country: 'Chile',
  category: 'food',
  language: 'Español',
  durationMinutes: 420,
  distanceKm: 72,
  difficulty: 'easy',
  rating: 4.9,
  reviewsCount: 41,
  featured: false,
  relatedTourIds: [
    'tour-valle-del-maipo',
    'tour-maipo-central-historico',
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
  generalDocuments: [
    {
      id: 'doc-guia-definitiva-valle-del-maipo',
      name: 'Guía Definitiva del Valle del Maipo - El Viaje del Explorador por la Cuna del Vino Chileno.pdf',
      type: 'guide',
      url: '/pdf/guia-definitiva-valle-del-maipo.pdf',
      size: '237 KB',
      description: 'Guía oficial de la plataforma: terroir del Alto Maipo, Central y Pacific Maipo, la historia de la cuna del vino chileno y las 36 viñas abiertas al enoturismo.'
    }
  ],
  stops: [
    {
      id: 'stop-alto-cousino-macul',
      order: 1,
      title: 'Viña Cousiño Macul (1856): la Única Propiedad del Siglo XIX Aún en Familia',
      subtitle: 'Peñalolén, bóvedas de cal y canto y un Malbec premiado',
      category: 'history',
      location: {
        lat: -33.486,
        lng: -70.545,
        address: 'Av. Quilín, Peñalolén, Santiago (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 120,
      narrativeText:
        'Fundada en 1856 por Matías Cousiño, es la única propiedad viñatera del siglo XIX que permanece bajo el control continuo de la familia fundadora. Su tesoro son los subterráneos de cal y canto —una mezcla tradicional de cal, arena y clara de huevo— que ofrecen una inercia térmica perfecta para la guarda. Recorrer esas bóvedas es caminar por el siglo XIX chileno: ladrillo, penumbra y el olor a roble. La casa también sabe mirar al presente: su etiqueta Cousiño Macul Antiguas Reservas Malbec 2021 obtuvo la posición #10 en el ranking Top 10 Vinos de Chile 2025 de James Suckling. Estás en el punto de partida perfecto de la ruta: una viña urbana que conecta la ciudad con la montaña y la tradición con el puntaje internacional. Pide ver las cavas y preguntar por sus parras más antiguas.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 120,
        voiceName: 'Charon',
        transcript:
          'Fundada en mil ochocientos cincuenta y seis, Cousiño Macul es la única propiedad viñatera del siglo diecinueve que permanece bajo el control continuo de la familia fundadora. Su tesoro son los subterráneos de cal y canto, una mezcla de cal, arena y clara de huevo que da una inercia térmica perfecta. Recorrer esas bóvedas es caminar por el siglo diecinueve chileno. Y la casa mira al presente: su Antiguas Reservas Malbec dos mil veintiuno obtuvo el puesto diez en el ranking Top Ten Vinos de Chile dos mil veinticinco de James Suckling.'
      },
      images: [
        {
          id: 'img-alto-cousino-1',
          url: MAIPO_IMG.cousinoParque,
          caption: 'El parque de Viña Cousiño Macul, en Peñalolén',
          isPrimary: true
        },
        {
          id: 'img-alto-cousino-2',
          url: MAIPO_IMG.cousinoBovedas,
          caption: 'Bóvedas y viñedos de Cousiño Macul',
          isPrimary: false
        }
      ],
      socialLinks: { website: 'https://www.cousinomacul.com' },
      documents: [],
      tips: 'Reserva la visita guiada con anticipación: los subterráneos de cal y canto se recorren en grupos reducidos y son el punto más solicitado.',
      trivia:
        'El cal y canto, mezcla de cal, arena y clara de huevo usada en sus bóvedas, es un mortero patrimonial que mantiene la temperatura estable sin electricidad.',
      estimatedStayMinutes: 60
    },
    {
      id: 'stop-alto-aquitania',
      order: 2,
      title: 'Viña Aquitania (1990): un Château Francés a los Pies de los Andes',
      subtitle: 'Peñalolén, elegancia bordelesa y viñedos de ladera',
      category: 'gastronomy',
      location: {
        lat: -33.492,
        lng: -70.53,
        address: 'Peñalolén, Santiago (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 110,
      narrativeText:
        'Aquitania nace en 1990 del encuentro entre el enólogo francés Bruno Prats, Paul Pontallier y el chileno Felipe de Solminihac: un nombre que evoca la región vitícola de Burdeos y una filosofía de château boutique. Aquí la escala es humana y el detalle francés se siente en cada paso. Sus viñedos, a los pies de los Andes en Peñalolén, buscan la elegancia antes que la potencia, con tintos de corte bordelés que equilibran fruta y estructura. Para el viajero, la visita es una clase íntima sobre cómo el terroir andino dialoga con la tradición francesa. Detente a mirar las hileras contra la montaña: es la postal que resume el Alto Maipo. Si buscas una introducción perfecta al estilo de la zona antes de las grandes casas, empieza aquí.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 110,
        voiceName: 'Puck',
        transcript:
          'Aquitania nace en mil novecientos noventa del encuentro entre el enólogo francés Bruno Prats, Paul Pontallier y el chileno Felipe de Solminihac. Su nombre evoca la región vitícola de Burdeos y una filosofía de château boutique. Sus viñedos, a los pies de los Andes en Peñalolén, buscan la elegancia antes que la potencia. Para el viajero, la visita es una clase íntima sobre cómo el terroir andino dialoga con la tradición francesa.'
      },
      images: [
        {
          id: 'img-alto-aquitania-1',
          url: MAIPO_IMG.penalolenVinas,
          caption: 'Viñedos en Peñalolén, al pie de la precordillera',
          isPrimary: true
        }
      ],
      socialLinks: { website: 'https://www.aquitania.cl' },
      documents: [],
      tips: 'Peñalolén combina viñas y cerros: considera un paseo corto por la precordillera después de la cata para completar la jornada.',
      trivia: 'Aquitania toma su nombre de la antigua región de Aquitania, en el suroeste de Francia, cuna histórica del vino de Burdeos.',
      estimatedStayMinutes: 50
    },
    {
      id: 'stop-alto-quebrada-macul',
      order: 3,
      title: 'Quebrada de Macul (1995): los Creadores de Domus Aurea',
      subtitle: 'Peñalolén, viticultura de ladera y vinos de culto',
      category: 'nature',
      location: {
        lat: -33.5,
        lng: -70.56,
        address: 'Quebrada de Macul, Peñalolén (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 130,
      narrativeText:
        'La Quebrada de Macul es un accidente geográfico antes que una viña: un pliegue de la precordillera que baja hacia Peñalolén y que dio nombre a este proyecto de 1995, creador del aclamado Domus Aurea. Aquí se entiende la viticultura de ladera: el agua escurre, el aire frío drena y las parras sufren lo justo para concentrar sabor. Es la cara más silvestre del Alto Maipo, donde la ciudad y el cerro se tocan. El vino resultante combina intención de guarda y un perfil que la crítica sigue celebrando. Aprovecha el paso para observar la transición de suelo: del pedregal de la quebrada al valle cultivado. Esta parada enseña algo esencial de la interpretación del paisaje: a veces el nombre de un vino es un mapa.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 105,
        voiceName: 'Fenrir',
        transcript:
          'La Quebrada de Macul es un accidente geográfico antes que una viña: un pliegue de la precordillera que baja hacia Peñalolén. De aquí nace, en mil novecientos noventa y cinco, el proyecto creador del aclamado Domus Aurea. Es la cara más silvestre del Alto Maipo: viticultura de ladera, donde el aire frío drena y las parras sufren lo justo para concentrar sabor. El nombre de un vino también puede ser un mapa.'
      },
      images: [
        {
          id: 'img-alto-quebrada-1',
          url: MAIPO_IMG.quebradaMacul,
          caption: 'La Quebrada de Macul, pliegue de la precordillera en Peñalolén',
          isPrimary: true
        },
        {
          id: 'img-alto-quebrada-2',
          url: MAIPO_IMG.quebradaMaculParque,
          caption: 'El entorno natural del parque Quebrada de Macul',
          isPrimary: false
        }
      ],
      socialLinks: { website: 'https://www.domusaurea.cl' },
      documents: [],
      tips: 'Si vas en primavera, el cauce de la quebrada puede llevar agua: sigue solo los senderos autorizados y no cruces fuera de las zonas habilitadas.',
      trivia:
        'Domus Aurea significa «casa dorada» en latín y toma su nombre de una escalera que conducía a la viña desde el fundo original.',
      estimatedStayMinutes: 50
    },
    {
      id: 'stop-alto-concha-toro',
      order: 4,
      title: 'Viña Concha y Toro (1883): el Casillero del Diablo y la Cuna de Pirque',
      subtitle: 'Pirque, casona neoclásica, jardines y bodega subterránea',
      category: 'history',
      location: {
        lat: -33.639,
        lng: -70.576,
        address: 'Fundo Concha y Toro, Pirque (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 130,
      narrativeText:
        'Fundada en 1883, Concha y Toro es la marca chilena más reconocida del planeta, y su casa matriz está aquí, en Pirque. El recorrido clásico pasa por el parque de estilo neoclásico, la casona señorial y, sobre todo, la bodega subterránea del Casillero del Diablo. La leyenda es simple y eficaz: Don Melchor de Concha y Toro difundió el rumor de que el diablo habitaba su cava para espantar a los ladrones que robaban sus mejores vinos; de ahí el nombre de una de las etiquetas más vendidas del mundo. Más allá del mito, el legado es de escala: Concha y Toro proyectó la reputación internacional del vino chileno y hoy lidera programas de restauración ecológica con más de 7.000 árboles nativos en la cuenca del Maipo. Visita el renovado Centro del Vino y déjate llevar por la historia.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 150,
        voiceName: 'Kore',
        transcript:
          'Fundada en mil ochocientos ochenta y tres, Concha y Toro es la marca chilena más reconocida del planeta, y su casa matriz está aquí, en Pirque. El recorrido pasa por el parque de estilo neoclásico, la casona señorial y la bodega subterránea del Casillero del Diablo. La leyenda es simple y eficaz: Don Melchor de Concha y Toro difundió el rumor de que el diablo habitaba su cava para espantar a los ladrones que robaban sus mejores vinos. Más allá del mito, el legado es de escala: proyectó la reputación internacional del vino chileno y hoy restaura la cuenca del Maipo con miles de árboles nativos.'
      },
      images: [
        {
          id: 'img-alto-concha-1',
          url: MAIPO_IMG.conchaYToro,
          caption: 'Viña Concha y Toro, en Pirque',
          isPrimary: true
        },
        {
          id: 'img-alto-concha-2',
          url: MAIPO_IMG.conchaCasa,
          caption: 'La casa patronal de Concha y Toro',
          isPrimary: false
        },
        {
          id: 'img-alto-concha-3',
          url: MAIPO_IMG.casillero,
          caption: 'Casillero del Diablo: el vino de la leyenda',
          isPrimary: false
        }
      ],
      socialLinks: { website: 'https://www.conchaytoro.com' },
      documents: [],
      tips: 'El tour del Casillero del Diablo es apto para familias y muy solicitado: compra la entrada en línea para evitar filas, sobre todo en fines de semana.',
      trivia:
        'El rumor del diablo en la cava funcionó tan bien como estrategia antirrobo que se convirtió en la marca insignia de la viña y en una de las etiquetas más vendidas del mundo.',
      estimatedStayMinutes: 90
    },
    {
      id: 'stop-alto-el-principal',
      order: 5,
      title: 'Viña El Principal (1993): el Proyecto de Autor de Pirque',
      subtitle: 'Pirque, vinos de guarda y paisaje de fundo',
      category: 'gastronomy',
      location: {
        lat: -33.63,
        lng: -70.56,
        address: 'Pirque, Alto Maipo (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 120,
      narrativeText:
        'El Principal nace en 1993 en Pirque, tierra de fundos y de caballos, con la idea de hacer vinos de guarda de vocación artesanal. El proyecto se apoya en la vieja tradición agrícola de la zona y en suelos que la montaña ha ido construyendo durante siglos. Es una de esas viñas que prueban que el Alto Maipo no es solo un collar de grandes marcas: también es un archipiélago de proyectos de autor, de escala medible y trato directo. Detente en el paisaje del fundo: canales, alamedas y viñedos contra el cerro. Es el momento para conversar con quien atiende y preguntar por las parcelas y las cepas que trabajan. Aquí el vino se explica desde la tierra, sin intermediarios.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 100,
        voiceName: 'Puck',
        transcript:
          'El Principal nace en mil novecientos noventa y tres en Pirque, tierra de fundos y de caballos, con la idea de hacer vinos de guarda de vocación artesanal. Se apoya en la vieja tradición agrícola de la zona y en suelos que la montaña construyó durante siglos. Prueba que el Alto Maipo no es solo un collar de grandes marcas: también es un archipiélago de proyectos de autor, de escala medible y trato directo. Aquí el vino se explica desde la tierra.'
      },
      images: [
        {
          id: 'img-alto-principal-1',
          url: MAIPO_IMG.pirque,
          caption: 'Paisaje de fundo en Pirque, Alto Maipo',
          isPrimary: true
        }
      ],
      socialLinks: { website: 'https://www.elprincipal.cl' },
      documents: [],
      tips: 'Pirque es ideal para combinar viñas con gastronomía local: muchas casas ofrecen almuerzos campestres que conviene reservar el mismo día.',
      trivia:
        'Pirque conserva el trazado agrícola de los fundos coloniales, con canales de riego que siguen llevando el agua andina a los cuadros de vid.',
      estimatedStayMinutes: 50
    },
    {
      id: 'stop-alto-haras-pirque',
      order: 6,
      title: 'Haras de Pirque (1992): la Bodega con Forma de Herradura',
      subtitle: 'Pirque, la familia Antinori y el ensamble Albis',
      category: 'monument',
      location: {
        lat: -33.65,
        lng: -70.56,
        address: 'Pirque, Alto Maipo (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 120,
      narrativeText:
        'Pocas bodegas se reconocen por su silueta: Haras de Pirque es una de ellas. Fundada en 1992 y hoy propiedad de la familia italiana Antinori, su bodega tiene una arquitectura monumental en forma de herradura de caballo, un guiño a las caballerizas y a la tradición ecuestre del lugar. Aquí la especialidad es el ensamble: mezclas de Cabernet Sauvignon y Carmenère, entre ellas su etiqueta Albis, que buscan unir la estructura del valle con la elegancia italiana. La visita combina arquitectura, cuadras y viñedos, y ofrece una de las fotos más distintivas de la ruta. Si te interesa cómo una firma europea interpreta el terroir chileno, esta parada es obligatoria. Camina alrededor del edificio y observa cómo la herradura enmarca el paisaje.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 115,
        voiceName: 'Charon',
        transcript:
          'Pocas bodegas se reconocen por su silueta: Haras de Pirque es una de ellas. Fundada en mil novecientos noventa y dos y hoy propiedad de la familia italiana Antinori, su bodega tiene una arquitectura monumental en forma de herradura de caballo, un guiño a las caballerizas del lugar. Su especialidad son los ensambles de Cabernet Sauvignon y Carmenère, entre ellos su etiqueta Albis, que unen la estructura del valle con la elegancia italiana. La herradura enmarca el paisaje.'
      },
      images: [
        {
          id: 'img-alto-haras-1',
          url: MAIPO_IMG.harasCellars,
          caption: 'Las cavas de Haras de Pirque',
          isPrimary: true
        }
      ],
      socialLinks: { website: 'https://www.harasdepirque.com' },
      documents: [],
      tips: 'La arquitectura en herradura se aprecia mejor desde cierta distancia: pide que te indiquen el mejor punto panorámico dentro del fundo.',
      trivia:
        'El nombre «Haras» proviene de la cría de caballos: el proyecto nació ligado a la actividad ecuestre del fundo antes de convertirse en viña.',
      estimatedStayMinutes: 60
    },
    {
      id: 'stop-alto-alyan',
      order: 7,
      title: 'Alyan Family Wines (2001): el Sunset Experience de Pirque',
      subtitle: 'Pirque (G-425), cavas subterráneas y cena con vista andina',
      category: 'gastronomy',
      location: {
        lat: -33.66,
        lng: -70.54,
        address: 'Camino G-425, Pirque (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 120,
      narrativeText:
        'Alyan Family Wines es un proyecto boutique de carácter familiar fundado en 2001 en el kilómetro G-425 de Pirque. Tiene cavas subterráneas, una calificación de 4,7 estrellas en TripAdvisor con más de 600 reseñas y un producto estrella: el Alyan Gran Reserva Cabernet Sauvignon. Pero su experiencia más codiciada es la Sunset Experience: un tour personalizado por las bodegas de guarda, catas de la línea Gran Reserva y una cena maridada en terrazas elevadas mientras la cordillera se tiñe de violeta al atardecer. Es la parada más romántica de la ruta y el broche perfecto para cerrar la jornada en Pirque. Reserva con tiempo: el cupo de atardecer es limitado y depende del clima. Si el cielo está despejado, este es el recuerdo que se llevará el explorador.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 120,
        voiceName: 'Kore',
        transcript:
          'Alyan Family Wines es un proyecto boutique familiar fundado en dos mil uno en Pirque. Tiene cavas subterráneas y una calificación de cuatro coma siete estrellas en TripAdvisor, con más de seiscientas reseñas. Su estrella es el Alyan Gran Reserva Cabernet Sauvignon. Pero su experiencia más codiciada es la Sunset Experience: un tour personalizado por las bodegas de guarda, catas de la línea Gran Reserva y una cena maridada en terrazas elevadas mientras la cordillera se tiñe de violeta al atardecer.'
      },
      images: [
        {
          id: 'img-alto-alyan-1',
          url: MAIPO_IMG.pirqueHistorico,
          caption: 'Paisaje de Pirque, escenario del atardecer de Alyan',
          isPrimary: true
        }
      ],
      socialLinks: { website: 'https://www.alyan.cl' },
      documents: [],
      tips: 'Reserva la Sunset Experience con anticipación y confirma el pronóstico: la experiencia depende del cielo despejado para el atardecer sobre la cordillera.',
      trivia: 'El camino G-425 de Pirque es una ruta rural clásica del vino: concentra varias viñas boutique entre quebradas y fundos.',
      estimatedStayMinutes: 90
    },
    {
      id: 'stop-alto-william-fevre',
      order: 8,
      title: 'William Fevre (1992): Precisión Francesa en el Alto Maipo',
      subtitle: 'Chardonnay y Pinot Noir de inspiración borgoñona',
      category: 'gastronomy',
      location: {
        lat: -33.61,
        lng: -70.56,
        address: 'Maipo Alto (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 120,
      narrativeText:
        'William Fevre es un nombre legendario de Chablis, en Borgoña, y desde 1992 proyecta su experiencia en el Alto Maipo. La apuesta es un ejercicio de precisión: traer la mirada francesa de la acidez y la mineralidad a los suelos andinos, con foco en Chardonnay y Pinot Noir. Es una parada ideal para quien quiere salir del Cabernet y descubrir el costado más fresco y tenso del piedemonte. El contraste con las grandes casas vecinas es parte del atractivo: aquí la escala es menor y la conversación se centra en el detalle técnico. Pregunta por los bloques que trabajan y por la madera usada en la crianza. El Alto Maipo demuestra que no es monocromático: también sabe susurrar.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 105,
        voiceName: 'Puck',
        transcript:
          'William Fevre es un nombre legendario de Chablis, en Borgoña, y desde mil novecientos noventa y dos proyecta su experiencia en el Alto Maipo. La apuesta es un ejercicio de precisión: traer la mirada francesa de la acidez y la mineralidad a los suelos andinos, con foco en Chardonnay y Pinot Noir. Es el costado más fresco y tenso del piedemonte. Aquí la escala es menor y la conversación se centra en el detalle técnico.'
      },
      images: [
        {
          id: 'img-alto-fevre-1',
          url: MAIPO_IMG.andes,
          caption: 'Viñedos del Alto Maipo, donde el vino dialoga con la montaña',
          isPrimary: true
        }
      ],
      socialLinks: { website: 'https://www.williamfevre.cl' },
      documents: [],
      tips: 'Si te interesan los blancos, pide una cata comparativa de Chardonnay del Maipo: la diferencia de acidez y mineralidad con las zonas costeras sorprende.',
      trivia: 'William Fevre fue pionero de los vinos de Chablis en Francia: su llegada al Maipo en los noventa marcó la apertura del valle a los blancos de autor.',
      estimatedStayMinutes: 45
    },
    {
      id: 'stop-alto-don-melchor',
      order: 9,
      title: 'Viña Don Melchor (1987): el Vino Número 1 del Mundo',
      subtitle: 'Puente Alto, el terroir puro de la montaña',
      category: 'monument',
      location: {
        lat: -33.6,
        lng: -70.58,
        address: 'Puente Alto, Alto Maipo (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 120,
      narrativeText:
        'Don Melchor nació en 1987 con un objetivo único: poner en valor el terroir de Puente Alto. Es un proyecto concebido para demostrar que un solo lugar, exprimido al máximo, puede dar un vino de talla mundial. Y lo consiguió: su añada 2021 alcanzó la consagración absoluta al ser elegida el Vino #1 del Mundo en 2025 por la prestigiosa revista Wine Spectator. Estás, por lo tanto, frente a un pedazo de historia vitivinícola. El viñedo se pega a la cordillera, con suelos coluviales y aluviales de baja fertilidad que imponen ese estrés hídrico que concentra taninos y antocianos. Visitar esta parada es entender la diferencia entre escalas: aquí no se trata de volumen sino de sitio. Reserva la cata y prueba la paciencia de un Cabernet de guarda que se mide en décadas.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 130,
        voiceName: 'Charon',
        transcript:
          'Don Melchor nació en mil novecientos ochenta y siete con un objetivo único: poner en valor el terroir de Puente Alto. Su añada dos mil veintiuno alcanzó la consagración absoluta al ser elegida el Vino Número Uno del Mundo en dos mil veinticinco por la revista Wine Spectator. El viñedo se pega a la cordillera, con suelos coluviales y aluviales de baja fertilidad que imponen el estrés hídrico que concentra taninos y antocianos. Aquí no se trata de volumen, sino de sitio.'
      },
      images: [
        {
          id: 'img-alto-donmelchor-1',
          url: MAIPO_IMG.maipoVinas,
          caption: 'Viñedos de Puente Alto, terroir del Don Melchor',
          isPrimary: true
        }
      ],
      socialLinks: { website: 'https://www.donmelchor.cl' },
      documents: [],
      tips: 'Las catas de vinos ícono suelen tener cupos reducidos y costo aparte: confirma disponibilidad y reserva directamente con la viña.',
      trivia:
        'Don Melchor comparte nombre con Don Melchor de Concha y Toro, fundador de Concha y Toro en 1883, de quien hereda la búsqueda de un vino de guarda excepcional.',
      estimatedStayMinutes: 60
    },
    {
      id: 'stop-alto-almaviva',
      order: 10,
      title: 'Viña Almaviva (1996): Rothschild y Concha y Toro en Madera de Autor',
      subtitle: 'Puente Alto, vinificación gravitacional y estilo First Growth',
      category: 'monument',
      location: {
        lat: -33.595,
        lng: -70.583,
        address: 'Puente Alto, Alto Maipo (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 120,
      narrativeText:
        'Almaviva es una joint venture entre la familia Baron Philippe de Rothschild y Viña Concha y Toro, creada en 1996 para hacer un ensamble de estilo bordelés de categoría First Growth. Su bodega en Puente Alto, concebida por el arquitecto chileno Martín Hurtado en madera laminada de pino radiata, integra un diseño vanguardista enfocado en la vinificación gravitacional: el vino se mueve por gravedad, sin bombas, para tratarlo con el máximo cuidado. Es uno de los ejemplos más claros de cómo la arquitectura se pone al servicio del vino. Recorre el edificio y observa cómo la madera dialoga con la cordillera al fondo. Esta es la cara contemporánea del Alto Maipo: tecnología, diseño y una alianza franco-chilena que redefinió el techo de calidad del valle.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 130,
        voiceName: 'Puck',
        transcript:
          'Almaviva es una joint venture entre la familia Baron Philippe de Rothschild y Viña Concha y Toro, creada en mil novecientos noventa y seis para hacer un ensamble de estilo bordelés de categoría First Growth. Su bodega en Puente Alto, concebida por el arquitecto chileno Martín Hurtado en madera laminada de pino radiata, integra un diseño vanguardista enfocado en la vinificación gravitacional: el vino se mueve por gravedad, sin bombas. Es la cara contemporánea del Alto Maipo: tecnología, diseño y una alianza franco-chilena.'
      },
      images: [
        {
          id: 'img-alto-almaviva-1',
          url: MAIPO_IMG.valleMaipo,
          caption: 'El valle del Maipo desde el Alto Maipo, escenario de Almaviva',
          isPrimary: true
        }
      ],
      socialLinks: { website: 'https://www.almavivawinery.com' },
      documents: [],
      tips: 'La bodega es un ícono de arquitectura: lleva cámara y pregúntale al guía por el sistema gravitacional, que no siempre se explica en la visita estándar.',
      trivia:
        'El nombre Almaviva proviene de «Le Comte Almaviva», figura del teatro clásico francés, en homenaje al origen bordelés de la familia Rothschild.',
      estimatedStayMinutes: 60
    },
    {
      id: 'stop-alto-chadwick',
      order: 11,
      title: 'Viñedo Chadwick (1992): los 99 Puntos del Alto Maipo',
      subtitle: 'Puente Alto, ultra-alta gama y un puntaje legendario',
      category: 'monument',
      location: {
        lat: -33.59,
        lng: -70.575,
        address: 'Puente Alto, Alto Maipo (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 120,
      narrativeText:
        'Viñedo Chadwick es un ícono de ultra-alta gama en el Alto Maipo. Su añada 2019 consolidó una puntuación legendaria de 99 puntos por James Suckling y figura de forma consistente en el top de los mejores vinos del cono sur. El proyecto nació en 1992 como homenaje a la tradición familiar y se convirtió en la máxima expresión del Cabernet Sauvignon de Puente Alto. Para el explorador, esta parada es una lección sobre concentración y equilibrio: pocas botellas, mucha intención. El viñedo, pegado a la montaña, busca la madurez perfecta de los taninos y una textura sedosa. Cierra aquí tu recorrido por Puente Alto y compara mentalmente lo que has probado: de la historia de Cousiño Macul a la precisión de Chadwick, el Alto Maipo ha contado toda su historia.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 115,
        voiceName: 'Charon',
        transcript:
          'Viñedo Chadwick es un ícono de ultra-alta gama en el Alto Maipo. Su añada dos mil diecinueve consolidó una puntuación legendaria de noventa y nueve puntos por James Suckling y figura consistentemente en el top de los mejores vinos del cono sur. Nació en mil novecientos noventa y dos como homenaje a la tradición familiar, y se convirtió en la máxima expresión del Cabernet Sauvignon de Puente Alto. Pocas botellas, mucha intención.'
      },
      images: [
        {
          id: 'img-alto-chadwick-1',
          url: MAIPO_IMG.andes,
          caption: 'Los viñedos de altura de Puente Alto frente a los Andes',
          isPrimary: true
        }
      ],
      socialLinks: { website: 'https://www.chadwick.cl' },
      documents: [],
      tips: 'Las catas de los vinos ícono suelen requerir reserva previa y no siempre están disponibles para el visitante general: consulta con antelación.',
      trivia:
        'Comparte el apellido Chadwick con la familia que impulsó el proyecto, ligado históricamente a la agricultura y a la viticultura chilena.',
      estimatedStayMinutes: 55
    },
    {
      id: 'stop-alto-perez-cruz',
      order: 12,
      title: 'Viña Pérez Cruz (2002): Madera Nativa y Flujo Eólico',
      subtitle: 'Maipo Alto (Paine), bodega de autor y sustentable',
      category: 'monument',
      location: {
        lat: -33.8,
        lng: -70.65,
        address: 'Huelquén, Paine, Maipo Alto (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 130,
      narrativeText:
        'Cerramos la ruta en Pérez Cruz, fundada en 2002 en el sector de Huelquén, Paine, en el Maipo Alto. Su bodega deslumbra por un diseño construido en maderas nativas con un sistema de enfriamiento por flujo eólico natural: la arquitectura aprovecha el viento para regular la temperatura, sin depender solo de la energía. Es el ejemplo perfecto de la fusión entre técnica y naturaleza que define al valle. La visita combina paisaje, madera y viñedos, y cierra la jornada con una mirada sustentable al futuro del Maipo. Pregunta por las cepas que trabajan: sus tintos de guarda muestran el costado más andino del Cabernet. Desde aquí puedes volver a Santiago o enlazar con la Ruta 2 del Maipo Central, que arranca en Buin, muy cerca. El viaje continúa.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 120,
        voiceName: 'Kore',
        transcript:
          'Cerramos la ruta en Pérez Cruz, fundada en dos mil dos en el sector de Huelquén, Paine. Su bodega deslumbra por un diseño construido en maderas nativas con un sistema de enfriamiento por flujo eólico natural: la arquitectura aprovecha el viento para regular la temperatura. Es el ejemplo perfecto de la fusión entre técnica y naturaleza que define al valle. Desde aquí puedes enlazar con la Ruta dos, el Maipo Central, que arranca en Buin, muy cerca. El viaje continúa.'
      },
      images: [
        {
          id: 'img-alto-perezcruz-1',
          url: MAIPO_IMG.maipoVinas,
          caption: 'Viñedos de Maipo Alto en el sector de Paine',
          isPrimary: true
        }
      ],
      socialLinks: { website: 'https://www.perezcruz.com' },
      documents: [],
      tips: 'Paine está al sur del circuito: si vienes desde Pirque, calcula 40 a 50 minutos en auto y combínalo con Buin para enlazar con la Ruta 2.',
      trivia:
        'El enfriamiento por flujo eólico natural de la bodega aprovecha los vientos del valle para mantener la temperatura de fermentación: naturaleza convertida en sistema.',
      estimatedStayMinutes: 55
    }
  ]
};
