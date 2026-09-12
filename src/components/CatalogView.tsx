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
  Filter, 
  ArrowRight, 
  Edit, 
  Trash2, 
  RefreshCw,
  SlidersHorizontal,
  Mountain,
  BookOpen,
  Feather,
  Eye,
  Heart,
  TreePine,
  ExternalLink,
  CreditCard,
  Download,
  ShieldCheck,
  Map as MapIcon
} from 'lucide-react';
import { Tour, TourCategory } from '../types';

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
  isMember?: boolean;
  memberType?: 'none' | 'annual_paid' | 'consulting_free';
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
  isMember = false,
  memberType = 'none',
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
    <div className="min-h-screen bg-[#FAF7F2] text-slate-900 pb-20 font-sans">
      
      {/* Hero Section - El Viaje Por Chile & Tienda El Viaje Identity */}
      <section className="relative bg-gradient-to-br from-[#0D1B2D] via-[#15273F] to-[#1E3A5F] text-white overflow-hidden py-14 sm:py-20 px-4 sm:px-6 shadow-md border-b border-[#1E334D]">
        {/* Naturalist drawing background */}
        <div className="absolute inset-0">
          <img
            src="/hero/hero-bg.jpg"
            alt=""
            className="w-full h-full object-cover object-center opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2D]/95 via-[#15273F]/85 to-[#1E3A5F]/90"></div>
        </div>

        {/* Subtle Map Contour Grid overlay */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C04A26_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>
        
        <div className="relative max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C04A26]/20 text-[#F59E7C] border border-[#C04A26]/40 text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm">
            <Headphones className="w-3.5 h-3.5 text-[#E6683B] animate-pulse" />
            <span>Interpretación del Patrimonio Natural y Cultural • www.elviaje.cl</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight font-['Outfit',sans-serif]">
            Recorre el territorio con <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F59E7C] via-[#E6683B] to-[#FBBF24]">El Viaje Por Chile</span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed">
            Plataforma de audioguías y rutas autoguiadas por los paisajes, cerros, parques y comunidades de Chile. Aprende a descifrar el espíritu del lugar con mapas interactivos, relatos sonoros con Inteligencia Artificial, videos y guías de campo de Tienda El Viaje.
          </p>

          {/* Quick Actions Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onCreateNewTour}
              className="flex items-center gap-2 px-6 py-3 bg-[#C04A26] hover:bg-[#A63A19] text-white font-bold text-sm rounded-2xl shadow-lg shadow-[#C04A26]/30 hover:scale-105 active:scale-95 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Crear Ruta en Studio</span>
            </button>

            <button
              onClick={onOpenAIGenerator}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#D97706] to-[#C04A26] hover:from-[#B45309] hover:to-[#A63A19] text-white font-bold text-sm rounded-2xl shadow-lg shadow-[#D97706]/30 hover:scale-105 active:scale-95 transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>Diseñar Ruta con IA</span>
            </button>

            {onOpenConsultingModal && (
              <button
                onClick={onOpenConsultingModal}
                className="flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-2xl border border-white/20 backdrop-blur-sm transition-all"
              >
                <Feather className="w-4 h-4 text-[#F59E7C]" />
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
        <div className="bg-white rounded-3xl p-4 shadow-xl border border-[#E8DFC8] space-y-4">
          
          {/* Main Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por ciudad, parque nacional, cerro o temática patrimonial (ej. Valparaíso, Atacama, Torres del Paine, Santiago, Chiloé)..."
              className="w-full pl-12 pr-4 py-3.5 bg-[#FAF7F2] border border-[#E8DFC8] rounded-2xl text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#C04A26] focus:outline-none transition-all shadow-inner"
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
                      ? 'bg-[#C04A26] text-white shadow-md shadow-[#C04A26]/20'
                      : 'bg-[#F2ECE1] text-slate-700 hover:bg-[#E8DFC8]'
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
                <MapPin className="w-3.5 h-3.5 text-[#C04A26]" />
                Destino:
              </span>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-3 py-1.5 bg-[#F2ECE1] border border-[#E8DFC8] rounded-xl text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#C04A26]"
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
        <div className="bg-gradient-to-r from-[#27523C] via-[#1F4532] to-[#0D1B2D] text-white p-6 sm:p-7 rounded-3xl shadow-md border border-emerald-900 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="space-y-2 relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F59E7C] text-[11px] font-bold uppercase tracking-wider backdrop-blur-sm">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Metodología Tienda El Viaje</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-['Outfit',sans-serif] text-white">
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
                className="px-5 py-2.5 bg-[#C04A26] hover:bg-[#A63A19] text-white rounded-xl text-xs font-bold shadow-lg shadow-[#C04A26]/30 transition-all flex items-center gap-1.5"
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
        <div className="bg-white p-5 rounded-3xl border border-[#E8DFC8] shadow-sm flex flex-col justify-between space-y-4 hover:border-[#C04A26] transition-all">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#C04A26] bg-[#C04A26]/10 px-2.5 py-0.5 rounded-full">
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
            <h3 className="text-base font-bold text-[#0D1B2D] font-['Outfit',sans-serif]">
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
                className="px-4 py-2 bg-[#0D1B2D] hover:bg-[#192E47] text-white text-xs font-bold rounded-xl transition-all shadow-sm"
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
        <div className="bg-white p-5 rounded-3xl border border-[#E8DFC8] shadow-sm flex flex-col justify-between space-y-4 hover:border-[#009EE3] transition-all">
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
            <h3 className="text-base font-bold text-[#0D1B2D] font-['Outfit',sans-serif]">
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

      {/* Main Tours Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-6">
        
        {/* Results Counter & Reset */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-extrabold text-[#0D1B2D] font-['Outfit',sans-serif]">
              Rutas y Audioguías de Chile
            </h2>
            <span className="bg-[#C04A26]/10 text-[#C04A26] border border-[#C04A26]/20 text-xs font-extrabold px-3 py-0.5 rounded-full">
              {filteredTours.length} rutas en www.elviaje.cl
            </span>
          </div>

          <button
            onClick={onResetTours}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-[#C04A26] transition-colors"
            title="Recargar rutas oficiales de El Viaje Por Chile"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Restaurar Rutas Oficiales</span>
          </button>
        </div>

        {/* Empty state */}
        {filteredTours.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#E8DFC8] space-y-4 max-w-lg mx-auto shadow-sm">
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
              className="px-4 py-2 bg-[#0D1B2D] hover:bg-[#15273F] text-white text-xs font-bold rounded-xl transition-colors"
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
                  className="group bg-white rounded-3xl overflow-hidden border border-[#E8DFC8] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
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
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2D]/90 via-transparent to-black/20" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="bg-white/95 backdrop-blur-md text-[#0D1B2D] text-[11px] font-extrabold px-3 py-1 rounded-full shadow capitalize">
                          {tour.category === 'nature' ? 'Naturaleza' : tour.category === 'walking' ? 'Cerros & Miradores' : tour.category === 'history' ? 'Patrimonio' : tour.category}
                        </span>
                        {tour.cmsTourId && (
                          <span className="bg-[#0D1B2D]/90 backdrop-blur-md text-[#F59E7C] text-[10px] font-mono font-bold px-2 py-1 rounded-full shadow border border-[#C04A26]/50 flex items-center gap-1">
                            <Radio className="w-2.5 h-2.5 animate-pulse text-[#C04A26]" />
                            <span>#{tour.cmsTourId}</span>
                          </span>
                        )}
                      </div>
                      
                      <span className="bg-[#0D1B2D]/90 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                        {tour.rating.toFixed(1)}
                      </span>
                    </div>

                    {/* Bottom overlay: City & Stops count */}
                    <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs">
                      <span className="font-bold flex items-center gap-1 drop-shadow">
                        <MapPin className="w-3.5 h-3.5 text-[#F59E7C]" />
                        {tour.city}, {tour.country}
                      </span>

                      <span className="bg-[#C04A26] text-white font-bold px-2.5 py-0.5 rounded-full text-[11px] flex items-center gap-1 shadow">
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
                        className="font-bold text-base sm:text-lg text-[#0D1B2D] group-hover:text-[#C04A26] transition-colors line-clamp-2 cursor-pointer leading-snug font-['Outfit',sans-serif]"
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
                    <div className="flex items-center justify-between text-xs font-semibold text-slate-600 pt-2 border-t border-[#E8DFC8]">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#C04A26]" />
                        {tour.durationMinutes} min
                      </span>
                      <span className="flex items-center gap-1">
                        <Navigation className="w-3.5 h-3.5 text-[#15273F]" />
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
                          className="w-7 h-7 rounded-full object-cover border border-[#D4C5A9] flex-shrink-0"
                          referrerPolicy="no-referrer"
                        />
                        <span className="text-xs font-bold text-slate-700 truncate">
                          {tour.author?.name || 'Tienda El Viaje'}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        {onOpenTourExport && (
                          <button
                            onClick={() => onOpenTourExport(tour)}
                            className="p-2 rounded-xl bg-white hover:bg-[#C04A26]/10 text-slate-700 hover:text-[#C04A26] border border-[#E8DFC8] transition-colors cursor-pointer"
                            title="Descargar Formatos de Ruta (GPX, KML, Itinerario PDF)"
                          >
                            <Download className="w-3.5 h-3.5" />
                          </button>
                        )}

                        <button
                          onClick={() => onEditTour(tour)}
                          className="p-2 rounded-xl bg-[#F2ECE1] hover:bg-[#E8DFC8] text-slate-700 transition-colors"
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
                          className="flex items-center gap-1 px-3.5 py-2 bg-[#C04A26] hover:bg-[#A63A19] text-white rounded-xl text-xs font-bold shadow-md shadow-[#C04A26]/20 transition-all"
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
