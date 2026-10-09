import { Tour } from '../types';
import { MAIPO_IMG } from './maipoMedia';

export const tourMaipoCosta: Tour = {
  id: 'tour-maipo-pacific-costa',
  title: 'Ruta 3 · Pacific Maipo e Isla de Maipo: la Cara Fresca del Valle',
  tagline:
    'Ruta conectada • Isla de Maipo, Padre Hurtado y Melipilla: 7 viñas entre parras ungrafted, bodegas modernas, viticultura orgánica y la brisa del Pacífico',
  description:
    'Tercera ruta conectada del valle del Maipo. Se interna en el Pacific Maipo o Maipo Costa, donde la brisa marina enfría el valle y cambia el color del vino. Reúne 7 viñas: la histórica De Martino y la moderna TerraMater en Isla de Maipo, el proyecto orgánico Odfjell en Padre Hurtado, las micro-bodegas Teillery, Santa Ema y Rukumilla, y Chocalán camino a Melipilla. Experiencias clave: recorridos por parras viejas ungrafted, catas de Semillón y Carignan, almuerzos maridados en el Restaurante Zinfandel, talleres de chocotería local y producción artesanal de chicha.',
  theme:
    'El Pacific Maipo es la cara fresca del valle: donde la brisa del océano y las parras sin injertar escriben vinos de sal y tensión.',
  tora: {
    tematica:
      'Interpreta el Pacific Maipo como la cara fresca y orgánica del valle: la brisa del Pacífico y las parras en pie franco dan vinos de tensión y salinidad.',
    organizada:
      'Recorre Isla de Maipo, Padre Hurtado y Melipilla encadenando la gran casa histórica, la bodega moderna, la micro-bodega orgánica y la viña costera, para que cada parada contraste con la anterior.',
    relevante:
      'Conecta la copa con el océano: los blancos cítricos y salinos se explican por la neblina costera, y el visitante entiende por qué el vino sabe a su lugar.',
    amena:
      'Combina catas de Semillón y Carignan, almuerzos en bodega, talleres de chocolatería y chicha para que la jornada sea diversa y sabrosa.'
  },
  coverImage: MAIPO_IMG.deMartino,
  city: 'Isla de Maipo, Padre Hurtado y Melipilla, Valle del Maipo',
  country: 'Chile',
  category: 'food',
  language: 'Español',
  durationMinutes: 450,
  distanceKm: 85,
  difficulty: 'easy',
  rating: 4.8,
  reviewsCount: 29,
  featured: false,
  relatedTourIds: [
    'tour-valle-del-maipo',
    'tour-maipo-central-historico',
    'tour-maipo-boutique-autor'
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
      id: 'stop-costa-de-martino',
      order: 1,
      title: 'Viña De Martino (1934): Tinajas de Greda y Parras sin Injertar',
      subtitle: 'Isla de Maipo, pionera de la mínima intervención',
      category: 'gastronomy',
      location: {
        lat: -33.76,
        lng: -70.98,
        address: 'Isla de Maipo (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 130,
      narrativeText:
        'De Martino, fundada en 1934 en Isla de Maipo, es una de las viñas más innovadoras de Sudamérica: la revista Forbes la incluyó entre las «50 Mejores Viñas del Mundo 2025». Su sello es la mínima intervención y la recuperación de técnicas ancestrales, como la vinificación en tinajas de greda, y la puesta en valor de parras sin injertar, las codiciadas «ungrafted» que crecen sobre sus propias raíces. Su La Blanca Semillón 2022 acumuló reconocimientos superlativos: 94+ puntos en la Guía Descorchados 2026 y 96 puntos de James Suckling, compartiendo vitrina con su premiado VIGNO Carignan. Recorrer sus bloques ancestrales es entender la viticultura de bajo impacto que mira al futuro. Pregunta por el Semillón y el Carignan: son la mejor puerta de entrada a la cara histórica y a la vez moderna del Pacific Maipo.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 155,
        voiceName: 'Kore',
        transcript:
          'De Martino, fundada en mil novecientos treinta y cuatro en Isla de Maipo, es una de las viñas más innovadoras de Sudamérica: la revista Forbes la incluyó entre las cincuenta mejores viñas del mundo de dos mil veinticinco. Su sello es la mínima intervención y la recuperación de técnicas ancestrales, como la vinificación en tinajas de greda, y las parras sin injertar, las ungrafted, que crecen sobre sus propias raíces. Su La Blanca Semillón dos mil veintidós obtuvo noventa y cuatro puntos en Descorchados y noventa y seis de James Suckling.'
      },
      images: [
        {
          id: 'img-costa-demartino-1',
          url: MAIPO_IMG.deMartino,
          caption: 'Viña De Martino, en Isla de Maipo',
          isPrimary: true
        }
      ],
      socialLinks: { website: 'https://www.demartino.cl' },
      documents: [],
      tips: 'Pide ver las tinajas de greda y los bloques de parras ungrafted: son el corazón de la propuesta de mínima intervención de la viña.',
      trivia:
        'Las parras «ungrafted» de De Martino crecen sobre sus propias raíces: sobrevivieron a la filoxera que arrasó Europa y hoy son una rareza vitícola mundial.',
      estimatedStayMinutes: 90
    },
    {
      id: 'stop-costa-terramater',
      order: 2,
      title: 'Viña TerraMater (1996): Zinfandel, Sangiovese y el Restaurante Zinfandel',
      subtitle: 'Isla de Maipo, cepas poco habituales y aceite de oliva Petralia',
      category: 'gastronomy',
      location: {
        lat: -33.77,
        lng: -70.96,
        address: 'Isla de Maipo (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 120,
      narrativeText:
        'TerraMater, nacida en 1996 en Isla de Maipo, es famosa por atreverse con cepas poco habituales en la zona, como Zinfandel y Sangiovese, y por elaborar el afamado aceite de oliva extra virgen Petralia. Su nombre —«madre tierra»— resume la filosofía: la bodega como parte de un ciclo agrícola que incluye viña, olivo y cocina. El Restaurante Zinfandel, dentro de la viña, es una de las mesas más recomendadas del valle para un almuerzo maridado de tres tiempos. La propuesta combina tecnología moderna con paisaje rural, y su oferta gastronómica la convierte en la parada perfecta para el mediodía. Reserva el restaurante con anticipación: en temporada alta se llena. Después del almuerzo, una cata de tintos y una vuelta por los olivos completan la experiencia.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 135,
        voiceName: 'Puck',
        transcript:
          'TerraMater, nacida en mil novecientos noventa y seis en Isla de Maipo, es famosa por atreverse con cepas poco habituales en la zona, como Zinfandel y Sangiovese, y por elaborar el afamado aceite de oliva extra virgen Petralia. Su nombre, madre tierra, resume la filosofía: la bodega como parte de un ciclo agrícola que incluye viña, olivo y cocina. El Restaurante Zinfandel, dentro de la viña, es una de las mesas más recomendadas del valle para un almuerzo maridado de tres tiempos.'
      },
      images: [
        {
          id: 'img-costa-terramater-1',
          url: MAIPO_IMG.barricasMatetic,
          caption: 'Barricas de roble en una bodega del Pacific Maipo',
          isPrimary: true
        }
      ],
      socialLinks: { website: 'https://www.terramater.cl' },
      documents: [],
      tips: 'Reserva el Restaurante Zinfandel con antelación: es la parada gastronómica estrella del Pacific Maipo y suele completarse en Vendimias.',
      trivia:
        'TerraMater cultiva Zinfandel y Sangiovese, cepas de origen californiano e italiano poco frecuentes en el Maipo: su apuesta por la diversidad varietal es un rasgo distintivo.',
      estimatedStayMinutes: 120
    },
    {
      id: 'stop-costa-odfjell',
      order: 3,
      title: 'Odfjell Vineyards (1994): Tracción Animal y Vinos Orgánicos',
      subtitle: 'Padre Hurtado, la mirada de armadores noruegos',
      category: 'nature',
      location: {
        lat: -33.57,
        lng: -70.8,
        address: 'Padre Hurtado, Pacific Maipo (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 120,
      narrativeText:
        'Odfjell fue fundada en 1994 por armadores noruegos en Padre Hurtado, y su apuesta es la producción orgánica con un detalle llamativo: la tracción animal en el viñedo. La imagen de caballos trabajando entre las parras no es folclore, sino una decisión técnica y ambiental: menos compactación del suelo, menos combustible, más vida microbiana. El vino resultante busca pureza y expresión del lugar más que potencia. Su nombre viene de la familia naviera Odfjell, cuyos barcos recorrieron el mundo antes de echar raíces en el Maipo. La visita ofrece un paseo por un viñedo orgánico certificado y una cata de tintos de perfil elegante. Es la parada ideal para quien quiere entender la dimensión ecológica de la viticultura costera del valle.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 125,
        voiceName: 'Fenrir',
        transcript:
          'Odfjell fue fundada en mil novecientos noventa y cuatro por armadores noruegos en Padre Hurtado, y su apuesta es la producción orgánica con un detalle llamativo: la tracción animal en el viñedo. La imagen de caballos trabajando entre las parras no es folclore, sino una decisión técnica y ambiental: menos compactación del suelo, menos combustible, más vida microbiana. Su nombre viene de la familia naviera Odfjell, cuyos barcos recorrieron el mundo antes de echar raíces en el Maipo.'
      },
      images: [
        {
          id: 'img-costa-odfjell-1',
          url: MAIPO_IMG.barricas,
          caption: 'Barricas en una bodega del valle: el trabajo orgánico de Odfjell',
          isPrimary: true
        }
      ],
      socialLinks: { website: 'https://www.odfjellvineyards.cl' },
      documents: [],
      tips: 'Pregunta por el uso de tracción animal: es la práctica más singular de la viña y explica buena parte de su filosofía orgánica.',
      trivia:
        'Odfjell pertenece a una familia de armadores noruegos: el vino nació como un proyecto personal de los dueños, lejos de su negocio naviero original.',
      estimatedStayMinutes: 75
    },
    {
      id: 'stop-costa-teillery',
      order: 4,
      title: 'Viña Teillery (1996): 100 % Orgánica en Isla de Maipo',
      subtitle: 'Micro-bodega familiar y vinos de huerto',
      category: 'gastronomy',
      location: {
        lat: -33.78,
        lng: -70.99,
        address: 'Isla de Maipo (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 110,
      narrativeText:
        'Teillery, fundada en 1996 en Isla de Maipo, es una de las micro-bodegas que dan alma al Pacific Maipo: pequeña, familiar y 100 % orgánica. Su escala permite un control casi artesanal de cada etapa, desde el viñedo hasta la botella, y un trato directo con quien visita. En la lógica de las rutas de autor del valle, Teillery representa el extremo más íntimo: vinos de partidas cortas que se agotan y que se disfrutan más por su carácter que por su volumen. Recorre el huerto y la bodega, y aprovecha para conversar sobre las decisiones del año. Esta es una de esas paradas que confirman que el Maipo no solo produce grandes marcas: también cultiva pequeñas historias que merecen ser contadas y probadas.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 100,
        voiceName: 'Kore',
        transcript:
          'Teillery, fundada en mil novecientos noventa y seis en Isla de Maipo, es una de las micro-bodegas que dan alma al Pacific Maipo: pequeña, familiar y cien por ciento orgánica. Su escala permite un control casi artesanal de cada etapa y un trato directo con quien visita. Representa el extremo más íntimo de las rutas de autor: vinos de partidas cortas que se agotan. El Maipo no solo produce grandes marcas: también cultiva pequeñas historias.'
      },
      images: [
        {
          id: 'img-costa-teillery-1',
          url: MAIPO_IMG.islaDeMaipo,
          caption: 'Isla de Maipo, tierra de micro-bodegas orgánicas',
          isPrimary: true
        }
      ],
      socialLinks: { website: 'https://www.teillery.cl' },
      documents: [],
      tips: 'Las micro-bodegas reciben con cita previa: reserva con tiempo y confirma disponibilidad, sobre todo en días de semana.',
      trivia:
        'La viticultura orgánica evita agroquímicos sintéticos y suele basarse en compost y manejo biológico de plagas, como en los huertos de Isla de Maipo.',
      estimatedStayMinutes: 60
    },
    {
      id: 'stop-costa-santa-ema',
      order: 5,
      title: 'Viña Santa Ema: la Tradición Familiar de Isla de Maipo',
      subtitle: 'Tintos de guarda entre canales y alamedas',
      category: 'gastronomy',
      location: {
        lat: -33.75,
        lng: -70.97,
        address: 'Isla de Maipo (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 110,
      narrativeText:
        'Santa Ema es otra de las casas con raíz profunda en Isla de Maipo, zona de canales, alamedas y huertos. Su perfil combina tradición familiar y una gama de tintos de guarda que han acompañado la mesa chilena por generaciones. En el contexto de esta ruta, funciona como puente entre la innovación de De Martino y la intimidad de las micro-bodegas: una viña mediana, arraigada y confiable. Recorre sus viñedos y prueba un Carmenère o un Cabernet del Pacific Maipo. Fíjate en cómo el régimen más fresco de la costa cambia la textura del vino respecto al cálido Maipo Central: menos peso, más frescura. Es una comparación sensorial útil para cerrar el recorrido por las cepas tintas de Isla de Maipo.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 100,
        voiceName: 'Puck',
        transcript:
          'Santa Ema es otra de las casas con raíz profunda en Isla de Maipo, zona de canales, alamedas y huertos. Su perfil combina tradición familiar y una gama de tintos de guarda que han acompañado la mesa chilena por generaciones. Fíjate en cómo el régimen más fresco de la costa cambia la textura del vino respecto al cálido Maipo Central: menos peso, más frescura.'
      },
      images: [
        {
          id: 'img-costa-santaema-1',
          url: MAIPO_IMG.cata,
          caption: 'Cata de tintos del Pacific Maipo',
          isPrimary: true
        }
      ],
      socialLinks: { website: 'https://www.santaema.cl' },
      documents: [],
      tips: 'Compara en la misma cata un tinto del Pacific Maipo y uno del Maipo Central: la diferencia de frescura y cuerpo explica el efecto del lugar.',
      trivia:
        'El Pacific Maipo recibe la influencia marina que enfría las noches: esa amplitud térmica favorece vinos de acidez más viva que los del interior.',
      estimatedStayMinutes: 65
    },
    {
      id: 'stop-costa-rukumilla',
      order: 6,
      title: 'Rukumilla: Vinos de Autor de Isla de Maipo',
      subtitle: 'Pequeña escala, gran carácter',
      category: 'gastronomy',
      location: {
        lat: -33.79,
        lng: -71.0,
        address: 'Isla de Maipo (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 110,
      narrativeText:
        'Rukumilla es uno de los proyectos boutique que confirman la vitalidad del Pacific Maipo. Su nombre, de raíz mapuche, y su producción limitada la sitúan en la línea de las viñas de autor que trabajan con parras viejas y baja intervención. Visitar Rukumilla es entrar en el taller de un artesano: pocas botellas, mucha atención al detalle y una conversación franca sobre lo que el viñedo entrega cada año. Localmente, estas micro-bodegas suelen asociarse a recorridos que las contrastan con las grandes casas del valle, precisamente para mostrar la diversidad de escala. Pregunta por sus variedades y por la historia del nombre. Aquí el vino se mide en carácter, no en hectolitros.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 95,
        voiceName: 'Fenrir',
        transcript:
          'Rukumilla es uno de los proyectos boutique que confirman la vitalidad del Pacific Maipo. Su nombre, de raíz mapuche, y su producción limitada la sitúan en la línea de las viñas de autor que trabajan con parras viejas y baja intervención. Visitar Rukumilla es entrar en el taller de un artesano: pocas botellas, mucha atención al detalle. Aquí el vino se mide en carácter, no en hectolitros.'
      },
      images: [
        {
          id: 'img-costa-rukumilla-1',
          url: MAIPO_IMG.uvasCarmenere,
          caption: 'Racimos en una viña boutique de Isla de Maipo',
          isPrimary: true
        }
      ],
      socialLinks: { website: 'https://www.elviaje.cl' },
      documents: [],
      tips: 'Las viñas boutique suelen ofrecer catas personalizadas: avisa si buscas cepas específicas o vinos de guarda para armar la degustación.',
      trivia:
        'El río Maipo formó en Isla de Maipo una isla de tierra entre brazos de agua: de ahí el nombre de la comarca, hoy tierra de micro-bodegas.',
      estimatedStayMinutes: 55
    },
    {
      id: 'stop-costa-chocalan',
      order: 7,
      title: 'Viña Chocalán: la Huella Costera hacia Melipilla',
      subtitle: 'Pacific Maipo profundo y vinos de brisa',
      category: 'gastronomy',
      location: {
        lat: -33.69,
        lng: -71.15,
        address: 'Camino a Melipilla, Pacific Maipo (coordenadas aproximadas)'
      },
      triggerRadiusMeters: 120,
      narrativeText:
        'Cerramos la ruta en Chocalán, camino a Melipilla, en el corazón del Pacific Maipo profundo. Aquí la influencia del océano es más marcada: noches frescas, neblinas matinales y suelos con vetas arenosas que dan a los vinos una tensión cítrico-salina característica. Chocalán pertenece a la generación de viñas que apostaron por el potencial costero del valle del Maipo, y su propuesta encaja con el perfil fresco que define esta ruta. La parada funciona como culminación: has recorrido la gran casa histórica, la bodega moderna, la micro-bodega orgánica y ahora la viña costera. Melipilla, con su historia agrícola, cierra el paisaje. Desde aquí puedes volver a Santiago o continuar hacia el litoral. Brinda por el Pacific Maipo: el valle, en su borde oceánico, también sabe a mar.',
      audio: {
        type: 'ai_generated',
        durationSeconds: 120,
        voiceName: 'Kore',
        transcript:
          'Cerramos la ruta en Chocalán, camino a Melipilla, en el corazón del Pacific Maipo profundo. Aquí la influencia del océano es más marcada: noches frescas, neblinas matinales y suelos con vetas arenosas que dan a los vinos una tensión cítrico-salina característica. Has recorrido la gran casa histórica, la bodega moderna, la micro-bodega orgánica y ahora la viña costera. Brinda por el Pacific Maipo: el valle, en su borde oceánico, también sabe a mar.'
      },
      images: [
        {
          id: 'img-costa-chocalan-1',
          url: MAIPO_IMG.melipilla,
          caption: 'Melipilla y el Pacific Maipo profundo, cerca del litoral',
          isPrimary: true
        }
      ],
      socialLinks: { website: 'https://www.chocalan.cl' },
      documents: [],
      tips: 'Chocalán queda más al oeste: planifica el regreso con luz de día, ya que los caminos rurales hacia Melipilla no tienen buena iluminación.',
      trivia:
        'El Pacific Maipo también se conoce como Maipo Bajo o Maipo Costa: su cercanía al océano es la que permite los blancos vibrantes y salinos de la zona.',
      estimatedStayMinutes: 70
    }
  ]
};
