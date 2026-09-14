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
  Download,
  QrCode,
  ShieldCheck,
  BadgeCheck,
  TrendingUp,
  CheckCircle2,
  Mail,
  Users,
  Award
} from 'lucide-react';
import { Tour, UserProfile } from '../types';
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
  onOpenAchpiModal: () => void;
  onOpenAchpiAdminModal: () => void;
  onOpenTourExport?: (tour: Tour) => void;
  onOpenQRCode?: (tour: Tour) => void;
  isMember?: boolean;
  isOwner?: boolean;
  currentUser?: UserProfile | null;
  achpiStatus?: 'none' | 'pending' | 'approved';
  achpiCode?: string;
  routeLimit?: number;
  routeUsage?: number;
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
  onOpenAchpiModal,
  onOpenAchpiAdminModal,
  onOpenTourExport,
  onOpenQRCode,
  isMember = false,
  isOwner = false,
  currentUser,
  achpiStatus = 'none',
  achpiCode = '',
  routeLimit = 1,
  routeUsage = 0,
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
            <span>Interpretación del Patrimonio Natural y Cultural • www.interpretaciondelpatrimonio.cl</span>
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
              href="https://www.elviaje.cl"
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

      {/* ACHPI & Límite de Rutas por Cuenta */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Card A: Inscripción ACHPI */}
        <div className="bg-gradient-to-br from-[#14281C] to-[#1D3626] text-white p-5 sm:p-6 rounded-3xl border border-[#2A4533] shadow-sm space-y-4">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#E8A58B] bg-white/10 border border-[#B04E2A]/40 px-2.5 py-1 rounded-full">
              <ShieldCheck className="w-3 h-3" />
              Asociación Chilena Para La Interpretación del Patrimonio
            </span>
            <h3 className="text-base font-bold font-['Cormorant_Garamond',Georgia,serif] text-white">
              Solicita tu inscripción a ACHPI
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Únete a la asociación para formalizar tu quehacer en la interpretación del patrimonio de Chile. Al
              aprobar tu solicitud, recibirás tu <strong className="text-white">código de miembro ACHPI</strong>, con
              el cual puedes <strong className="text-white">subir tus rutas</strong> a esta plataforma de audioguías
              (hasta 10 rutas publicadas).
            </p>
          </div>

          {achpiStatus === 'approved' ? (
            <div className="space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/20 text-emerald-200 border border-emerald-400/40 rounded-xl text-[11px] font-bold">
                <BadgeCheck className="w-4 h-4" />
                Miembro ACHPI activo
              </span>
              <p className="font-mono text-sm font-extrabold tracking-widest text-[#E8A58B] bg-white/5 border border-[#B04E2A]/40 rounded-xl px-3 py-2 w-fit">
                {achpiCode || 'ACHPI-XXXX-XXXX'}
              </p>
              <p className="text-[11px] text-slate-400">
                Con tu código de miembro puedes publicar hasta 10 rutas en interpretaciondelpatrimonio.cl.
              </p>
            </div>
          ) : achpiStatus === 'pending' ? (
            <div className="flex items-center gap-2 px-3 py-2 bg-white/10 border border-white/15 rounded-xl text-[11px] font-bold text-amber-200">
              <CheckCircle2 className="w-4 h-4" />
              Solicitud enviada. La ACHPI la está revisando: al aprobarla recibirás tu código de miembro.
            </div>
          ) : isOwner ? (
            <button
              onClick={onOpenAchpiAdminModal}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#B04E2A] hover:bg-[#9A3F1E] text-white text-xs font-bold rounded-xl transition-all shadow-lg shadow-[#B04E2A]/30"
            >
              <Users className="w-4 h-4" />
              Panel Administrador ACHPI
            </button>
          ) : (
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={onOpenAchpiModal}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#B04E2A] to-[#D97706] hover:from-[#9A3F1E] hover:to-[#B45309] text-white text-xs font-bold rounded-xl transition-all shadow-lg shadow-[#B04E2A]/30"
              >
                <ShieldCheck className="w-4 h-4" />
                Solicitar Inscripción
              </button>
              <span className="text-[11px] text-slate-400">
                {currentUser ? `Conectado como ${currentUser.email}` : 'Disponible para creadores con cuenta'}
              </span>
            </div>
          )}
        </div>

        {/* Card B: Límite de rutas por cuenta */}
        <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#E4D8BF] shadow-sm space-y-4">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A] bg-[#B04E2A]/10 px-2.5 py-1 rounded-full">
              <TrendingUp className="w-3 h-3" />
              Límite de rutas por cuenta
            </span>
            <h3 className="text-base font-bold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              ¿Cuántas rutas puedes publicar?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Cada cuenta gratis puede publicar <strong>1 ruta</strong>. Al ser <strong>miembro ACHPI</strong> (con tu
              código) subes hasta <strong>10 rutas</strong>, y con <strong>membresía de la plataforma o consultoría
              patrimonial</strong> hasta <strong>50 rutas</strong>.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-700">
              <span className="flex items-center gap-1.5">
                {isOwner ? (
                  <>
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    Propietario de la plataforma · sin límite
                  </>
                ) : achpiStatus === 'approved' ? (
                  <>
                    <BadgeCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Miembro ACHPI · 10 rutas
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-3.5 h-3.5 text-[#B04E2A]" />
                    Plan Gratis · 1 ruta por cuenta
                  </>
                )}
              </span>
              {!isOwner && (
                <span>
                  {Math.min(routeUsage, routeLimit)} / {routeLimit} usadas
                </span>
              )}
            </div>

            {!isOwner && (
              <div className="h-2 rounded-full bg-[#EEE6D3] overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#B04E2A] to-[#D97706] transition-all"
                  style={{ width: `${Math.min(100, (routeUsage / routeLimit) * 100)}%` }}
                />
              </div>
            )}

            <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-bold text-slate-600">
              <div className="bg-[#F6F1E5] rounded-xl py-2 px-1 border border-[#E4D8BF]">
                <ShieldCheck className="w-4 h-4 mx-auto text-slate-400 mb-0.5" />
                Gratis
                <div className="text-slate-800 text-[11px]">1 ruta</div>
              </div>
              <div className="bg-[#F6F1E5] rounded-xl py-2 px-1 border border-[#E4D8BF]">
                <BadgeCheck className="w-4 h-4 mx-auto text-emerald-600 mb-0.5" />
                Miembro ACHPI
                <div className="text-slate-800 text-[11px]">10 rutas</div>
              </div>
              <div className="bg-[#F6F1E5] rounded-xl py-2 px-1 border border-[#E4D8BF]">
                <Award className="w-4 h-4 mx-auto text-amber-500 mb-0.5" />
                Membresía / Consult.
                <div className="text-slate-800 text-[11px]">50 rutas</div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            {onOpenAchpiModal && !isOwner && achpiStatus === 'none' && (
              <button
                onClick={onOpenAchpiModal}
                className="flex items-center gap-1.5 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition-all"
              >
                <Mail className="w-3.5 h-3.5" />
                Inscríbete en ACHPI
              </button>
            )}
            {onOpenMembershipModal && !isOwner && (
              <button
                onClick={onOpenMembershipModal}
                className="px-4 py-2 bg-[#14281C] hover:bg-[#223F2C] text-white text-xs font-bold rounded-xl transition-all"
              >
                Ver Membresía (50 rutas)
              </button>
            )}
            {onOpenConsultingModal && (
              <button
                onClick={onOpenConsultingModal}
                className="px-4 py-2 bg-[#F6F1E5] hover:bg-[#EEE6D3] text-slate-800 text-xs font-bold rounded-xl border border-[#E4D8BF] transition-all"
              >
                Consultoría Patrimonial
              </button>
            )}
            {isOwner && (
              <button
                onClick={onOpenAchpiAdminModal}
                className="flex items-center gap-1.5 px-4 py-2 bg-[#14281C] hover:bg-[#223F2C] text-white text-xs font-bold rounded-xl transition-all"
              >
                <Users className="w-3.5 h-3.5" />
                Revisar Solicitudes ACHPI
              </button>
            )}
          </div>
        </div>

      </section>

      {/* Main Tours Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-6">
        
        {/* Results Counter & Reset */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              Rutas y Audioguías de Chile
            </h2>
            <span className="bg-[#B04E2A]/10 text-[#B04E2A] border border-[#B04E2A]/20 text-xs font-extrabold px-3 py-0.5 rounded-full">
              {filteredTours.length} rutas en www.interpretaciondelpatrimonio.cl
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

      {/* Tienda Oficial & Mapas Tourmaps - Publicidad con autorización de uso */}
      <ShopSection />

    </div>
  );
};
