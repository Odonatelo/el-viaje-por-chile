import React, { useState } from 'react';
import {
  ShoppingBag,
  Map as MapIcon,
  ExternalLink,
  ShieldCheck,
  ShoppingCart,
  Store,
  Compass,
} from 'lucide-react';
import {
  shopProducts,
  tourmapProjects,
  SHOP_WEBSITE,
  TOURMAPS_WEBSITE,
  TOURMAPS_STORE,
  ShopProduct,
  TourMapProject,
} from '../data/shopCatalog';

export const ShopSection: React.FC = () => {
  const [tab, setTab] = useState<'products' | 'maps'>('products');

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
      <div className="bg-white rounded-3xl border border-[#E4D8BF] shadow-sm overflow-hidden">
        
        {/* Section Header */}
        <div className="bg-gradient-to-r from-[#14281C] via-[#223F2C] to-[#2E4E37] text-white px-4 sm:px-7 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E8A58B] border border-[#B04E2A]/40 text-[11px] font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Publicidad Oficial · Imágenes con Autorización de Uso</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
              Tienda El Viaje &amp; Tourmaps® · Llévate el territorio contigo
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              Guías de campo, mapas desplegables e ilustraciones interpretativas relacionadas con cada
              ruta de www.elviaje.cl. Despachos a todo Chile.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href={SHOP_WEBSITE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-bold border border-white/20 transition-colors"
            >
              <Store className="w-3.5 h-3.5 text-[#E8A58B]" />
              <span>tiendaelviaje.cl</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={TOURMAPS_WEBSITE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-bold border border-white/20 transition-colors"
            >
              <Compass className="w-3.5 h-3.5 text-amber-300" />
              <span>tourmaps.cl</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 px-4 sm:px-7 pt-5 pb-2 border-b border-[#E4D8BF] bg-[#F6F1E5]/60">
          <button
            onClick={() => setTab('products')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              tab === 'products'
                ? 'bg-[#B04E2A] text-white shadow-md shadow-[#B04E2A]/20'
                : 'bg-white text-slate-700 border border-[#E4D8BF] hover:bg-[#EEE6D3]'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Productos Tienda El Viaje ({shopProducts.length})</span>
          </button>
          <button
            onClick={() => setTab('maps')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              tab === 'maps'
                ? 'bg-[#2F5238] text-white shadow-md shadow-[#2F5238]/20'
                : 'bg-white text-slate-700 border border-[#E4D8BF] hover:bg-[#EEE6D3]'
            }`}
          >
            <MapIcon className="w-4 h-4" />
            <span>Mapas &amp; Imágenes Tourmaps ({tourmapProjects.length})</span>
          </button>
        </div>

        {/* Content */}
        {tab === 'products' ? (
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {shopProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[#E4D8BF] flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-[11px] text-slate-500">
                Envío gratis sobre $50.000 · Pagos con Webpay Plus y tarjetas · Despachos a todo Chile.
              </p>
              <a
                href={SHOP_WEBSITE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#B04E2A] hover:bg-[#9A3F1E] text-white rounded-xl text-xs font-bold shadow-md shadow-[#B04E2A]/20 transition-all"
              >
                <ShoppingCart className="w-3.5 h-3.5" />
                <span>Ver tienda completa</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ) : (
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tourmapProjects.map((project) => (
                <MapProjectCard key={project.id} project={project} />
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-[#E4D8BF] flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-[11px] text-slate-500 max-w-xl leading-relaxed">
                Tourmaps® Chile · Diseño y Marketing Turístico: mapas ilustrados que revelan la
                identidad, el patrimonio y las historias de cada lugar. «Conectamos personas con territorios».
              </p>
              <a
                href={TOURMAPS_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#2F5238] hover:bg-[#24432C] text-white rounded-xl text-xs font-bold shadow-md shadow-[#2F5238]/20 transition-all"
              >
                <ShoppingCart className="w-3.5 h-3.5" />
                <span>Ir a tienda tourmapschile.com</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}

        {/* Authorization note */}
        <div className="px-4 sm:px-7 py-3 bg-[#F6F1E5] border-t border-[#E4D8BF] text-[11px] text-slate-500 flex flex-wrap items-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-[#B04E2A]" />
          <span>
            Fotos y mapas publicados con autorización de uso de <strong>Tienda El Viaje</strong> © y{' '}
            <strong>Tourmaps® Chile</strong> para la promoción de www.elviaje.cl.
          </span>
        </div>
      </div>
    </section>
  );
};

const ProductCard: React.FC<{ product: ShopProduct }> = ({ product }) => (
  <a
    href={product.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group bg-white rounded-2xl border border-[#E4D8BF] overflow-hidden hover:shadow-xl hover:border-[#B04E2A]/50 hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
  >
    <div className="relative h-40 sm:h-44 bg-[#F6F1E5] overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="w-full h-full object-cover opacity-95 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
      />
      {product.tag && (
        <span className="absolute top-2 left-2 bg-[#14281C]/90 backdrop-blur-md text-[#E8A58B] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#B04E2A]/40">
          {product.tag}
        </span>
      )}
      <span className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#14281C]/80 to-transparent h-10" />
    </div>
    <div className="p-3.5 flex-1 flex flex-col justify-between gap-2">
      <div>
        <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#B04E2A]">
          {product.brand}
        </p>
        <h4 className="font-bold text-sm text-[#14281C] leading-snug line-clamp-2 group-hover:text-[#B04E2A] transition-colors font-['Cormorant_Garamond',Georgia,serif]">
          {product.name}
        </h4>
      </div>
      <div className="flex items-center justify-between gap-2">
        <span className="text-sm font-extrabold text-[#2F5238]">{product.price}</span>
        <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#B04E2A] bg-[#B04E2A]/10 px-2 py-1 rounded-lg">
          Ver en tienda
          <ExternalLink className="w-3 h-3" />
        </span>
      </div>
    </div>
  </a>
);

const MapProjectCard: React.FC<{ project: TourMapProject }> = ({ project }) => (
  <a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group bg-[#14281C] rounded-2xl overflow-hidden border border-[#2A4533] hover:border-[#B04E2A]/60 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
  >
    <div className="relative h-44 overflow-hidden bg-slate-900">
      <img
        src={project.image}
        alt={project.title}
        loading="lazy"
        className="w-full h-full object-cover opacity-90 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
      />
      {project.badge && (
        <span className="absolute top-2 left-2 bg-[#B04E2A]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
          {project.badge}
        </span>
      )}
      <span className="absolute top-2 right-2 bg-[#14281C]/90 backdrop-blur-md border border-white/10 text-amber-300 text-[10px] font-extrabold px-2 py-0.5 rounded-full tracking-wide">
        TOURMAPS®
      </span>
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#14281C] to-transparent h-12" />
    </div>
    <div className="p-3.5 flex-1 flex flex-col justify-between gap-2">
      <div>
        <h4 className="font-bold text-sm text-white leading-snug font-['Cormorant_Garamond',Georgia,serif]">
          {project.title}
        </h4>
        <p className="text-[11px] text-slate-400 leading-snug mt-0.5">{project.subtitle}</p>
      </div>
      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#E8A58B] bg-[#B04E2A]/10 border border-[#B04E2A]/30 px-2 py-1 rounded-lg w-fit">
        <MapIcon className="w-3 h-3" />
        Ver proyecto
        <ExternalLink className="w-3 h-3" />
      </span>
    </div>
  </a>
);

// Mini strip de "relacionados" para el detalle de cada ruta
export const RelatedShopStrip: React.FC<{ tourId: string }> = ({ tourId }) => {
  const relatedProducts = shopProducts.filter((p) => p.tourRefs.includes(tourId));
  const relatedMaps = tourmapProjects.filter((p) => p.tourRefs.includes(tourId));

  const picks: ShopProduct[] = relatedProducts.slice(0, 3);
  const mapPicks: TourMapProject[] = relatedMaps.slice(0, 2);
  const hasAny = picks.length > 0 || mapPicks.length > 0;

  if (!hasAny) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
      <div className="bg-white rounded-3xl border border-[#E4D8BF] shadow-sm overflow-hidden">
        <div className="px-4 sm:px-6 py-4 border-b border-[#E4D8BF] bg-[#F6F1E5]/70 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-[#B04E2A]" />
            <h3 className="font-bold text-sm text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              Relacionado en Tienda El Viaje
            </h3>
          </div>
          <a
            href={SHOP_WEBSITE}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#B04E2A] hover:text-[#9A3F1E] inline-flex items-center gap-1"
          >
            Ver tienda completa
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div className="p-4 sm:p-6 flex gap-4 overflow-x-auto snap-x pb-2">
          {picks.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {mapPicks.map((project) => (
            <MapProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};