import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Clock, 
  Navigation, 
  Star, 
  Plus, 
  Sparkles, 
  Compass, 
  Layers, 
  Headphones, 
  ArrowRight, 
  Edit, 
  Trash2, 
  RefreshCw,
  BookOpen,
  Feather,
  Radio,
  ExternalLink,
  CreditCard,
  Download,
  QrCode
} from 'lucide-react';
import { Tour } from '../types';
import { ShopSection } from './ShopSection';

const FALLBACK_COVER = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Palafitos_de_Castro%2C_Chilo%C3%A9.jpg/1280px-Palafitos_de_Castro%2C_Chilo%C3%A9.jpg';

interface CatalogViewProps {
  tours: Tour[];
  onSelectTour: (tour: Tour) => void;
  onCreateNewTour: () => void;
  onEditTour: (tour: Tour) => void;
  onDeleteTour: (tourId: string) => void;
  onResetTours: () => void;
  onOpenAIGenerator: () => void;
  onOpenConsultingModal?: () => void;
  onOpenMembershipModal?: () => void;
  onOpenMercadoPagoModal?: () => void;
  onOpenTourExport?: (tour: Tour) => void;
  onOpenQRCode?: (tour: Tour) => void;
  isMember?: boolean;
  isOwner?: boolean;
}

export const CatalogView: React.FC<CatalogViewProps> = ({
  tours,
  onSelectTour,
  onCreateNewTour,
  onEditTour,
  onDeleteTour,
  onResetTours,
  onOpenAIGenerator,
  onOpenConsultingModal,
  onOpenMembershipModal,
  onOpenMercadoPagoModal,
  onOpenTourExport,
  onOpenQRCode,
  isMember = false,
  isOwner = false,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Extract unique cities
  const uniqueCities = Array.from(new Set(tours.map(t => t.city))).filter(Boolean);

  // Filter tours
  const filteredTours = tours.filter(tour => {
    const matchesSearch = 
      tour.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tour.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (tour.tagline && tour.tagline.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCity = selectedCity === 'all' || tour.city.toLowerCase() === selectedCity.toLowerCase();
    const matchesCategory = selectedCategory === 'all' || tour.category === selectedCategory;

    return matchesSearch && matchesCity && matchesCategory;
  });

  const categories: { id: string; label: string; icon: string }[] = [
    { id: 'all', label: 'Todas las Rutas', icon: '🇨🇱' },
    { id: 'walking', label: 'Cerros & Miradores', icon: '🚶' },
    { id: 'history', label: 'Memoria & Patrimonio', icon: '📜' },
    { id: 'nature', label: 'Bosque & Cordillera', icon: '🏔️' },
    { id: 'monument', label: 'Monumentos de Chile', icon: '🏛️' },
    { id: 'museum', label: 'Museos & Cultura', icon: '🖼️' },
    { id: 'food', label: 'Sabores del Territorio', icon: '🍷' },
  ];

  return (
    <div className="min-h-screen bg-[#F6F1E5] text-slate-900 pb-20 font-sans">
      
      {/* Hero Section - El Viaje Por Chile & Tienda El Viaje Identity */}
      <section className="relative bg-gradient-to-br from-[#14281C] via-[#1D3626] to-[#2E4E37] text-white overflow-hidden py-14 sm:py-20 px-4 sm:px-6 shadow-md border-b border-[#2A4533]">
        {/* Naturalist drawing background */}
        <div className="absolute inset-0">
          <img
            src="/hero/hero-bg.jpg"
            alt=""
            className="w-full h-full object-cover object-center opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#14281C]/95 via-[#1D3626]/85 to-[#2E4E37]/90"></div>
        </div>

        {/* Subtle Map Contour Grid overlay */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#B04E2A_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>
        
        <div className="relative max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B04E2A]/20 text-[#E8A58B] border border-[#B04E2A]/40 text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm">
            <Headphones className="w-3.5 h-3.5 text-[#D97A46] animate-pulse" />
            <span>Interpretación del Patrimonio Natural y Cultural • www.elviaje.cl</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight font-['Cormorant_Garamond',Georgia,serif]">
            Recorre el territorio con <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A58B] via-[#D97A46] to-[#FBBF24]">El Viaje Por Chile</span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed">
            Plataforma de audioguías y rutas autoguiadas por los paisajes, cerros, parques y comunidades de Chile. Aprende a descifrar el espíritu del lugar con mapas interactivos, relatos sonoros con Inteligencia Artificial, videos y guías de campo de Tienda El Viaje.
          </p>

          {/* Quick Actions Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onCreateNewTour}
              className="flex items-center gap-2 px-6 py-3 bg-[#B04E2A] hover:bg-[#9A3F1E] text-white font-bold text-sm rounded-2xl shadow-lg shadow-[#B04E2A]/30 hover:scale-105 active:scale-95 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Crear Ruta en Studio</span>
            </button>

            <button
              onClick={onOpenAIGenerator}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D97706] to-[#B04E2A] hover:from-[#B45309] hover:to-[#9A3F1E] text-white font-bold text-sm rounded-2xl shadow-lg shadow-[#D97706]/30 hover:scale-105 active:scale-95 transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>Diseñar Ruta con IA</span>
            </button>

            {onOpenConsultingModal && (
              <button
                onClick={onOpenConsultingModal}
                className="flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-2xl border border-white/20 backdrop-blur-sm transition-all"
              >
                <Feather className="w-4 h-4 text-[#E8A58B]" />
                <span>Consultoría Patrimonial</span>
              </button>
            )}

            {onOpenMercadoPagoModal && (
              <button
                onClick={onOpenMercadoPagoModal}
                className="flex items-center gap-2 px-5 py-3 bg-[#009EE3]/90 hover:bg-[#009EE3] text-white font-bold text-sm rounded-2xl border border-white/20 backdrop-blur-sm transition-all shadow-lg cursor-pointer"
              >
                <CreditCard className="w-4 h-4 text-white" />
                <span>{isOwner ? 'Mercado Pago (Owner)' : 'Mercado Pago Chile'}</span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Filter & Search Bar Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-7 relative z-20">
        <div className="bg-white rounded-3xl p-4 shadow-xl border border-[#E4D8BF] space-y-4">
          
          {/* Main Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por ciudad, parque nacional, cerro o temática patrimonial (ej. Valparaíso, Atacama, Torres del Paine, Santiago, Chiloé)..."
              className="w-full pl-12 pr-4 py-3.5 bg-[#F6F1E5] border border-[#E4D8BF] rounded-2xl text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#B04E2A] focus:outline-none transition-all shadow-inner"
            />
          </div>

          {/* City Chips & Categories */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            
            {/* Category pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#B04E2A] text-white shadow-md shadow-[#B04E2A]/20'
                      : 'bg-[#EEE6D3] text-slate-700 hover:bg-[#E4D8BF]'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>

            {/* City dropdown filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-600 uppercase flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#B04E2A]" />
                Destino:
              </span>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-3 py-1.5 bg-[#EEE6D3] border border-[#E4D8BF] rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#B04E2A]"
              >
                <option value="all">Todo Chile ({tours.length} rutas)</option>
                {uniqueCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

          </div>

        </div>
      </section>

      {/* Heritage Interpretation Consulting Highlight Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        <div className="bg-gradient-to-r from-[#2F5238] via-[#2C4E36] to-[#14281C] text-white p-6 sm:p-7 rounded-3xl shadow-md border border-emerald-900 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E8A58B] text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Metodología Tienda El Viaje</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-['Cormorant_Garamond',Georgia,serif] text-white">
              Consultoría para tu Viaje Personal en Interpretación del Patrimonio
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl leading-relaxed">
              Aprende a transformar cualquier recorrido por Chile en una experiencia de asombro y significado: observa la flora y fauna nativa, escucha el paisaje sonoro y comprende la memoria viva de cada rincón.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 relative z-10 flex-shrink-0">
            {onOpenConsultingModal && (
              <button
                onClick={onOpenConsultingModal}
                className="px-5 py-2.5 bg-[#B04E2A] hover:bg-[#9A3F1E] text-white rounded-xl text-xs font-bold shadow-lg shadow-[#B04E2A]/30 transition-all flex items-center gap-1.5"
              >
                <Feather className="w-4 h-4" />
                <span>Ver Guía Interpretativa</span>
              </button>
            )}
            <a
              href="https://www.tiendaelviaje.cl/consultoria-para-tu-viaje-personal-en-interpretacion-del-patrimonio"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-white/15 hover:bg-white/25 text-white rounded-xl text-xs font-bold border border-white/20 transition-all flex items-center gap-1.5"
            >
              <span>Sitio Oficial</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Platform Membership & Creator Dashboard Quick Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Membership Fee & Consulting Card */}
        <div className="bg-white p-5 rounded-3xl border border-[#E4D8BF] shadow-sm flex flex-col justify-between space-y-4 hover:border-[#B04E2A] transition-all">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#B04E2A] bg-[#B04E2A]/10 px-2.5 py-0.5 rounded-full">
                Membresía Plataforma
              </span>
              {isMember ? (
                <span className="text-[11px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full border border-emerald-300">
                  ✓ Acceso Activo
                </span>
              ) : (
                <span className="text-[11px] text-slate-500 font-bold">
                  Fee $100 USD / 12 meses o Gratis
                </span>
              )}
            </div>
            <h3 className="text-base font-bold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              ¿Quieres ser parte y publicar tus rutas en www.elviaje.cl?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Para publicar en la plataforma se requiere un <strong>fee anual de 100 dólares por 12 meses</strong> o puedes <strong>acceder gratis</strong> al contratar una sesión de <em>Consultoría Personalizada en Interpretación del Patrimonio</em> de Tienda El Viaje.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-2">
            {onOpenMembershipModal && (
              <button
                onClick={onOpenMembershipModal}
                className="px-4 py-2 bg-[#14281C] hover:bg-[#223F2C] text-white text-xs font-bold rounded-xl transition-all shadow-sm"
              >
                Ver Membresía & Opciones
              </button>
            )}
            {onOpenConsultingModal && (
              <button
                onClick={onOpenConsultingModal}
                className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition-all"
              >
                Consultoría (Acceso Gratis)
              </button>
            )}
          </div>
        </div>

        {/* Mercado Pago Chile Card */}
        <div className="bg-white p-5 rounded-3xl border border-[#E4D8BF] shadow-sm flex flex-col justify-between space-y-4 hover:border-[#009EE3] transition-all">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-white bg-[#009EE3] px-2.5 py-0.5 rounded-full flex items-center gap-1.5 shadow-sm">
                <CreditCard className="w-3 h-3" />
                <span>Mercado Pago Chile (www.mercadopago.cl)</span>
              </span>
              <span className="text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                Webpay Plus / Tarjetas
              </span>
            </div>
            <h3 className="text-base font-bold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              {isOwner ? 'Panel de Cobros & Configuración de Tarifas' : 'Monetización y Publicación de Audioguías'}
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              {isOwner 
                ? 'Como propietario exclusivo (juancarlos.castaing@gmail.com), configura fácilmente tus credenciales de Mercado Pago y define las tarifas en CLP.'
                : 'Paga tu derecho de publicación o adquiere tu membresía anual para subir audioguías ilimitadas con recaudación directa a www.elviaje.cl.'
              }
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-2">
            {onOpenMercadoPagoModal && (
              <button
                onClick={onOpenMercadoPagoModal}
                className="px-4 py-2 bg-[#009EE3] hover:bg-[#0086C2] text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <CreditCard className="w-3.5 h-3.5" />
                <span>{isOwner ? 'Abrir Configuración Mercado Pago' : 'Pagar con Mercado Pago ($ CLP)'}</span>
              </button>
            )}
            <a
              href="https://www.mercadopago.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-all flex items-center gap-1"
            >
              <span>Portal mercadopago.cl</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </section>

      {/* Tienda Oficial & Mapas Tourmaps - Publicidad con autorización de uso */}
      <ShopSection />

      {/* Main Tours Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-6">
        
        {/* Results Counter & Reset */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              Rutas y Audioguías de Chile
            </h2>
            <span className="bg-[#B04E2A]/10 text-[#B04E2A] border border-[#B04E2A]/20 text-xs font-extrabold px-3 py-0.5 rounded-full">
              {filteredTours.length} rutas en www.elviaje.cl
            </span>
          </div>

          <button
            onClick={onResetTours}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#B04E2A] transition-colors"
            title="Recargar rutas oficiales de El Viaje Por Chile"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Restaurar Rutas Oficiales</span>
          </button>
        </div>

        {/* Empty state */}
        {filteredTours.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#E4D8BF] space-y-4 max-w-lg mx-auto shadow-sm">
            <Compass className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-800">No se encontraron rutas</h3>
            <p className="text-xs text-slate-600">
              Prueba cambiando los términos de búsqueda o genera un nuevo recorrido con el asistente de IA interpretativa.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCity('all');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 bg-[#14281C] hover:bg-[#1D3626] text-white text-xs font-bold rounded-xl transition-colors"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          /* Cards Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTours.map((tour) => {
              return (
                <div
                  key={tour.id}
                  className="group bg-white rounded-3xl overflow-hidden border border-[#E4D8BF] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  {/* Card Cover Image */}
                  <div 
                    className="relative h-52 w-full overflow-hidden bg-slate-900 cursor-pointer"
                    onClick={() => onSelectTour(tour)}
                  >
                    <img
                      src={tour.coverImage}
                      alt={tour.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = FALLBACK_COVER; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14281C]/90 via-transparent to-black/20" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="bg-white/95 backdrop-blur-md text-[#14281C] text-[11px] font-extrabold px-3 py-1 rounded-full shadow capitalize">
                          {tour.category === 'nature' ? 'Naturaleza' : tour.category === 'walking' ? 'Cerros & Miradores' : tour.category === 'history' ? 'Patrimonio' : tour.category}
                        </span>
                        {tour.cmsTourId && (
                          <span className="bg-[#14281C]/90 backdrop-blur-md text-[#E8A58B] text-[10px] font-mono font-bold px-2 py-1 rounded-full shadow border border-[#B04E2A]/50 flex items-center gap-1">
                            <Radio className="w-2.5 h-2.5 animate-pulse text-[#B04E2A]" />
                            <span>#{tour.cmsTourId}</span>
                          </span>
                        )}
                      </div>
                      
                      <span className="bg-[#14281C]/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        {tour.rating.toFixed(1)}
                      </span>
                    </div>

                    {/* Bottom overlay: City & Stops count */}
                    <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs">
                      <span className="font-bold flex items-center gap-1 drop-shadow">
                        <MapPin className="w-3.5 h-3.5 text-[#E8A58B]" />
                        {tour.city}, {tour.country}
                      </span>

                      <span className="bg-[#B04E2A] text-white font-bold px-2.5 py-0.5 rounded-full text-[11px] flex items-center gap-1 shadow">
                        <Layers className="w-3 h-3" />
                        {tour.stops.length} paradas
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 
                        onClick={() => onSelectTour(tour)}
                        className="font-bold text-base sm:text-lg text-[#14281C] group-hover:text-[#B04E2A] transition-colors line-clamp-2 cursor-pointer leading-snug font-['Cormorant_Garamond',Georgia,serif]"
                      >
                        {tour.title}
                      </h3>
                      
                      {tour.tagline && (
                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {tour.tagline}
                        </p>
                      )}
                    </div>

                    {/* Metrics Bar */}
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-600 pt-2 border-t border-[#E4D8BF]">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#B04E2A]" />
                        {tour.durationMinutes} min
                      </span>
                      <span className="flex items-center gap-1">
                        <Navigation className="w-3.5 h-3.5 text-[#1D3626]" />
                        {tour.distanceKm} km
                      </span>
                      <span className="text-slate-500 capitalize">
                        {tour.difficulty === 'easy' ? 'Fácil' : tour.difficulty === 'moderate' ? 'Moderada' : 'Exigente'}
                      </span>
                    </div>

                    {/* Author & Action buttons */}
                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-2 min-w-0">
                        <img
                          src={tour.author?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80'}
                          alt={tour.author?.name}
                          className="w-7 h-7 rounded-full object-cover border border-[#CDBA95] flex-shrink-0"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />
                        <span className="text-xs font-bold text-slate-700 truncate">
                          {tour.author?.name || 'Tienda El Viaje'}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        {onOpenTourExport && (
                          <button
                            onClick={() => onOpenTourExport(tour)}
                            className="p-2 rounded-xl bg-white hover:bg-[#B04E2A]/10 text-slate-700 hover:text-[#B04E2A] border border-[#E4D8BF] transition-colors cursor-pointer"
                            title="Descargar Formatos de Ruta (GPX, KML, Itinerario PDF)"
                          >
                            <Download className="w-3.5 h-3.5" />
                          </button>
                        )}

                        {onOpenQRCode && (
                          <button
                            onClick={() => onOpenQRCode(tour)}
                            className="p-2 rounded-xl bg-white hover:bg-[#B04E2A]/10 text-slate-700 hover:text-[#B04E2A] border border-[#E4D8BF] transition-colors cursor-pointer"
                            title="Generar Código QR de la Ruta"
                          >
                            <QrCode className="w-3.5 h-3.5" />
                          </button>
                        )}

                        <button
                          onClick={() => onEditTour(tour)}
                          className="p-2 rounded-xl bg-[#EEE6D3] hover:bg-[#E4D8BF] text-slate-700 transition-colors"
                          title="Editar en Studio"
                        >
                          <Edit className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => onDeleteTour(tour.id)}
                          className="p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                          title="Eliminar tour"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => onSelectTour(tour)}
                          className="flex items-center gap-1 px-3.5 py-2 bg-[#B04E2A] hover:bg-[#9A3F1E] text-white rounded-xl text-xs font-bold shadow-md shadow-[#B04E2A]/20 transition-all"
                        >
                          <span>Explorar</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </section>

    </div>
  );
};
