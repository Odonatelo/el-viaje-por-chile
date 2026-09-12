// Catálogo de publicidad oficial: productos de Tienda El Viaje (www.tiendaelviaje.cl)
// y mapas/imágenes de Tourmaps® Chile (www.tourmaps.cl).
// Todas las imágenes listadas cuentan con autorización de uso por parte de ambos sitios.
//
// tourRefs: ids de tours de sampleTours.ts relacionados directa o indirectamente.

export interface ShopProduct {
  id: string;
  name: string;
  brand: string;
  price: string;
  image: string;
  url: string;
  tag?: string;
  zones: string[];
  tourRefs: string[];
}

export interface TourMapProject {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  image: string;
  url: string;
  zones: string[];
  tourRefs: string[];
}

const T = {
  PATAGONIA: 'tour-patagonia-carrerabaker',
  VALPARAISO: 'tour-valparaiso-bohemio',
  SANTIAGO: 'tour-santiago-patrimonial',
  ATACAMA: 'tour-san-pedro-atacama',
  TORRES: 'tour-torres-del-paine',
  COLCHAGUA: 'tour-valle-colchagua',
  ALERCE: 'tour-alerce-costero',
  CHILOE: 'tour-chiloe-magico',
  LOTA: 'tour-lota-carbon',
  ELQUI: 'tour-valle-elqui',
  CHENA: 'tour-santiago-cerro-chena',
  CANTERA: 'tour-santiago-cerro-la-cantera',
  MUERMOS: 'tour-los-muermos-paraiso-perdido',
  PUERTO_MONTT: 'tour-puerto-montt-bizarro',
};

const STORE_BASE = 'https://www.tiendaelviaje.cl';

export const shopProducts: ShopProduct[] = [
  {
    id: 'prod-hojas-sur',
    name: 'Hojas Nativas del Sur de Chile',
    brand: 'El Viaje',
    price: '$4.780',
    image: 'https://cdnx.jumpseller.com/el-viaje/image/78970975/resize/480/480?1784591073',
    url: `${STORE_BASE}/hojas-nativas-del-sur-de-chile-el-viaje`,
    tag: 'Guía de Bolsillo',
    zones: ['Sur de Chile', 'Patagonia'],
    tourRefs: [T.MUERMOS, T.ALERCE, T.CHILOE],
  },
  {
    id: 'prod-hojas-central',
    name: 'Hojas Nativas de Chile Central',
    brand: 'El Viaje',
    price: '$4.950',
    image: 'https://cdnx.jumpseller.com/el-viaje/image/73409441/resize/480/600?1771276412',
    url: `${STORE_BASE}/hojas-nativas-de-chile-central-juan-carlos-castaing`,
    tag: 'Guía de Bolsillo',
    zones: ['Chile Central'],
    tourRefs: [T.CHENA, T.CANTERA, T.COLCHAGUA, T.ELQUI],
  },
  {
    id: 'prod-volcanes-sur',
    name: 'Volcanes del Sur',
    brand: 'Tourmaps',
    price: '$4.950',
    image: 'https://cdnx.jumpseller.com/el-viaje/image/73319922/resize/480/901?1771103777',
    url: `${STORE_BASE}/volcanes-del-sur-patricia-von-der-hundt-y-carola-lohidoy`,
    tag: 'Mapa de Chile Ilustrado',
    zones: ['Sur de Chile', 'Patagonia'],
    tourRefs: [T.TORRES, T.ALERCE, T.PATAGONIA, T.MUERMOS],
  },
  {
    id: 'prod-aves-norte',
    name: 'Aves del Norte de Chile · Guía de Bolsillo',
    brand: 'Museo Ediciones',
    price: '$5.000',
    image: 'https://cdnx.jumpseller.com/el-viaje/image/63447280/resize/480/480?1747244274',
    url: `${STORE_BASE}/aves-del-norte-chile-guia-desplegable`,
    tag: 'Guía Desplegable',
    zones: ['Norte Grande', 'Norte Chico'],
    tourRefs: [T.ATACAMA, T.ELQUI],
  },
  {
    id: 'prod-mamiferos',
    name: 'Mamíferos de Chile · Guía de Campo completa',
    brand: 'Museo Ediciones',
    price: '$38.000',
    image: 'https://cdnx.jumpseller.com/el-viaje/image/74157769/resize/480/720?1772633071',
    url: `${STORE_BASE}/mamiferos-de-chile-guia-de-campo-completa-de-daniel-martinez-pina`,
    tag: 'Guía de Campo',
    zones: ['Todo Chile'],
    tourRefs: [T.PATAGONIA, T.TORRES, T.ALERCE, T.COLCHAGUA, T.MUERMOS, T.LOTA],
  },
  {
    id: 'prod-anfibios',
    name: 'Anfibios de Chile',
    brand: 'Museo Ediciones',
    price: '$5.500',
    image: 'https://cdnx.jumpseller.com/el-viaje/image/64701198/resize/480/480?1750364293',
    url: `${STORE_BASE}/anfbios-de-chile-daniel-martinez-pina-andy-charrier`,
    zones: ['Todo Chile'],
    tourRefs: [T.ALERCE, T.MUERMOS, T.CANTERA],
  },
  {
    id: 'prod-felinos',
    name: 'Felinos de Chile',
    brand: 'El viaje Ediciones',
    price: '$5.000',
    image: 'https://cdnx.jumpseller.com/el-viaje/image/77335462/resize/480/600?1780439866',
    url: `${STORE_BASE}/felinos-de-chile`,
    tag: 'Bestseller',
    zones: ['Todo Chile'],
    tourRefs: [T.PATAGONIA, T.TORRES, T.ELQUI, T.CHILOE],
  },
  {
    id: 'prod-memorice',
    name: 'Juego Memorice Chile Nativo · 40 piezas',
    brand: 'El Viaje',
    price: '$15.000',
    image: 'https://cdnx.jumpseller.com/el-viaje/image/74435360/resize/480/444?1785806126',
    url: `${STORE_BASE}/juego-memorice-chile-nativo-40-piezas-con-especies-nativas-de-la-biodiversidad-chilena`,
    tag: 'Juego Didáctico',
    zones: ['Todo Chile'],
    tourRefs: [T.ATACAMA, T.CHILOE, T.CANTERA],
  },
  {
    id: 'prod-stickers',
    name: 'Set de Stickers Fauna Nativa',
    brand: 'El Viaje',
    price: '$2.890',
    image: 'https://cdnx.jumpseller.com/el-viaje/image/74801995/resize/480/600?1773782910',
    url: `${STORE_BASE}/set-de-stickers-fauna-nativa`,
    tag: 'Souvenir',
    zones: ['Todo Chile'],
    tourRefs: [T.ATACAMA, T.VALPARAISO, T.CANTERA],
  },
  {
    id: 'prod-pueblos-originarios',
    name: 'Mapa de Pueblos Originarios · Desplegable',
    brand: 'TOURMAPS',
    price: '$8.000',
    image: 'https://cdnx.jumpseller.com/el-viaje/image/63444049/resize/480/480?1747238737',
    url: `${STORE_BASE}/pueblos-originarios-mapa-desplegable`,
    tag: 'Mapa Desplegable',
    zones: ['Todo Chile'],
    tourRefs: [T.ELQUI, T.SANTIAGO, T.CHENA, T.CHILOE],
  },
  {
    id: 'prod-historia-patrimonio',
    name: 'Mapa de Historia y Patrimonio · Desplegable',
    brand: 'Tourmaps',
    price: '$7.000',
    image: 'https://cdnx.jumpseller.com/el-viaje/image/63451004/resize/480/480?1747252087',
    url: `${STORE_BASE}/historia-y-patrimonio-mapa-desplegable`,
    tag: 'Mapa Desplegable',
    zones: ['Todo Chile'],
    tourRefs: [T.SANTIAGO, T.LOTA, T.VALPARAISO, T.CHENA],
  },
  {
    id: 'prod-pueblos-ancestrales',
    name: 'Mapa de Pueblos Originarios Ancestrales',
    brand: 'TOURMAPS',
    price: '$7.000',
    image: 'https://cdnx.jumpseller.com/el-viaje/image/63450637/resize/480/480?1747251275',
    url: `${STORE_BASE}/viaja-en-el-tiempo-y-descubre-las-raices-de-chile-con-el-mapa-de-pueblos-originarios-ancestrales-de-tourmaps`,
    tag: 'Mapa Ilustrado Educativo',
    zones: ['Norte Grande', 'Chile Central', 'Sur de Chile'],
    tourRefs: [T.ELQUI, T.SANTIAGO, T.CHILOE],
  },
];

export const tourmapProjects: TourMapProject[] = [
  {
    id: 'map-puerto-montt',
    title: 'Mapa Ilustrado de Puerto Montt',
    subtitle: 'La capital de la Región de Los Lagos',
    image: 'https://tourmaps.cl/wp-content/uploads/2024/03/Diseno-sin-titulo-6.png',
    url: 'https://tourmaps.cl/proyecto-puerto-montt/',
    zones: ['Sur de Chile', 'Los Lagos'],
    tourRefs: [T.PUERTO_MONTT, T.MUERMOS],
  },
  {
    id: 'map-maullin',
    title: 'Mapa de Maullín',
    subtitle: 'Naturaleza y entretención',
    image: 'https://tourmaps.cl/wp-content/uploads/2024/03/Diseno-sin-titulo-5.png',
    url: 'http://www.tourmaps.cl/proyecto-maullin-2',
    zones: ['Sur de Chile', 'Los Lagos'],
    tourRefs: [T.MUERMOS, T.ALERCE],
  },
  {
    id: 'map-rio-san-pedro',
    title: 'Ruta del Río San Pedro',
    subtitle: 'Los Lagos Invita',
    image: 'https://tourmaps.cl/wp-content/uploads/2024/03/Diseno-sin-titulo-7.png',
    url: 'https://tourmaps.cl/proyecto-san-pedro/',
    zones: ['Sur de Chile', 'Los Lagos'],
    tourRefs: [T.MUERMOS, T.ALERCE],
  },
  {
    id: 'map-valdivia',
    title: 'Mapa de Valdivia',
    subtitle: 'La ciudad de los ríos',
    image: 'https://tourmaps.cl/wp-content/uploads/2024/03/Diseno-sin-titulo-9.png',
    url: 'https://tourmaps.cl/proyecto-valdivia-2/',
    zones: ['Sur de Chile', 'Los Ríos'],
    tourRefs: [T.ALERCE, T.MUERMOS],
  },
  {
    id: 'map-gran-rio-bueno',
    title: 'El Gran Río Bueno',
    subtitle: 'Río Bueno – La Unión – La Barra',
    image: 'https://tourmaps.cl/wp-content/uploads/2024/03/Diseno-sin-titulo-11.png',
    url: 'https://tourmaps.cl/proyecto-rio-bueno/',
    zones: ['Sur de Chile', 'Los Ríos'],
    tourRefs: [T.ALERCE],
  },
  {
    id: 'map-patagonia-costa',
    title: 'Mapas a tu medida',
    subtitle: 'Diseño Personalizado, interpretación del patrimonio y plan de medios',
    badge: 'Servicio',
    image: 'https://tourmaps.cl/wp-content/uploads/2026/04/mockup-patagonia-costa-web.jpg',
    url: 'https://tourmaps.cl/mapas-guias/',
    zones: ['Todo Chile'],
    tourRefs: [T.PATAGONIA, T.TORRES],
  },
];

export const SHOP_WEBSITE = STORE_BASE;
export const TOURMAPS_WEBSITE = 'https://www.tourmaps.cl';
export const TOURMAPS_STORE = 'https://tourmapschile.com/';