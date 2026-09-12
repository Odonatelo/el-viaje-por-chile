import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Navigation, 
  Star, 
  Share2, 
  Download, 
  Play, 
  Heart, 
  Sparkles, 
  Globe, 
  Instagram, 
  Youtube, 
  FileText, 
  Compass, 
  Layers,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Mountain,
  Radio,
  QrCode,
  ExternalLink,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Tour, TourStop } from '../types';
import { TourMap } from './TourMap';
import { StopDetailModal } from './StopDetailModal';
import { AudioGuidePlayer } from './AudioGuidePlayer';
import { TourExportModal } from './TourExportModal';
import { QRCodeModal } from './QRCodeModal';
import { RelatedShopStrip } from './ShopSection';

interface TourDetailViewProps {
  tour: Tour;
  onBack: () => void;
  onEditTour?: (tour: Tour) => void;
}

export const TourDetailView: React.FC<TourDetailViewProps> = ({
  tour,
  onBack,
  onEditTour,
}) => {
  const [activeStop, setActiveStop] = useState<TourStop | null>(null);
  const [selectedStopModal, setSelectedStopModal] = useState<TourStop | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);
  const [qrStop, setQrStop] = useState<TourStop | null>(null);
  const [showMapModal, setShowMapModal] = useState(false);

  // Guided Walk Simulation / GPS state
  const [isWalkMode, setIsWalkMode] = useState(false);
  const [currentWalkStopIndex, setCurrentWalkStopIndex] = useState(0);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [walkProgress, setWalkProgress] = useState<number[]>([]); // indexes visited
  const [tourCompleted, setTourCompleted] = useState(false);

  // Initialize selected stop
  useEffect(() => {
    if (tour.stops && tour.stops.length > 0 && !activeStop) {
      setActiveStop(tour.stops[0]);
    }
  }, [tour]);

  // Lock body scroll while the interactive map popup is open (mobile)
  useEffect(() => {
    document.body.style.overflow = showMapModal ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [showMapModal]);

  // Handle Walking Simulation
  const handleStartWalkMode = () => {
    setIsWalkMode(true);
    setCurrentWalkStopIndex(0);
    setWalkProgress([0]);
    setTourCompleted(false);
    if (tour.stops.length > 0) {
      const first = tour.stops[0];
      setUserLocation({ lat: first.location.lat, lng: first.location.lng });
      setActiveStop(first);
      setSelectedStopModal(first);
    }
  };

  const handleNextWalkStop = () => {
    const nextIdx = currentWalkStopIndex + 1;
    if (nextIdx < tour.stops.length) {
      setCurrentWalkStopIndex(nextIdx);
      const nextStop = tour.stops[nextIdx];
      setUserLocation({ lat: nextStop.location.lat, lng: nextStop.location.lng });
      setActiveStop(nextStop);
      setSelectedStopModal(nextStop);
      setWalkProgress(prev => [...prev, nextIdx]);
    } else {
      // Tour Completed! Trigger celebratory confetti
      setWalkProgress(Array.from({ length: tour.stops.length }, (_, i) => i));
      setTourCompleted(true);
      confetti({
        particleCount: 120,
        spread: 75,
        origin: { y: 0.6 }
      });
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const currentStopIndex = tour.stops.findIndex(s => s.id === selectedStopModal?.id);
  const hasNextStop = currentStopIndex !== -1 && currentStopIndex < tour.stops.length - 1;
  const hasPrevStop = currentStopIndex > 0;

  return (
    <div className="min-h-screen bg-[#F6F1E5] text-slate-900 pb-20 font-sans">
      
      {/* Top Sticky Navigation */}
      <nav className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#E4D8BF] px-4 sm:px-6 py-3 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-[#EEE6D3] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#B04E2A]" />
          <span>Explorar Rutas de Chile</span>
        </button>

        <div className="flex items-center gap-2">
          {onEditTour && (
            <button
              onClick={() => onEditTour(tour)}
              className="px-3.5 py-1.5 rounded-xl bg-[#EEE6D3] hover:bg-[#E4D8BF] text-slate-800 text-xs font-bold transition-colors"
            >
              Editar en Studio
            </button>
          )}

          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`p-2 rounded-xl border transition-colors ${
              isFavorite ? 'bg-[#B04E2A]/10 text-[#B04E2A] border-[#B04E2A]/30' : 'bg-white text-slate-600 border-[#E4D8BF] hover:bg-[#F6F1E5]'
            }`}
            title="Guardar en favoritos"
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={handleShare}
            className="p-2 rounded-xl bg-white text-slate-600 border border-[#E4D8BF] hover:bg-[#F6F1E5] transition-colors relative"
            title="Compartir ruta"
          >
            <Share2 className="w-4 h-4" />
            {copiedLink && (
              <span className="absolute -bottom-8 right-0 bg-[#14281C] text-white text-[10px] px-2 py-1 rounded shadow whitespace-nowrap">
                ¡Enlace copiado!
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Hero Header Banner */}
      <div className="relative bg-[#14281C] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={tour.coverImage}
            alt={tour.title}
            className="w-full h-full object-cover opacity-40 scale-105 filter blur-[1px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14281C] via-[#14281C]/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#B04E2A] text-white text-xs font-bold uppercase tracking-wider shadow">
              {tour.category === 'nature' ? 'Naturaleza' : tour.category === 'walking' ? 'Paseo a Pie' : tour.category === 'history' ? 'Patrimonio' : tour.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#E8A58B]" />
              {tour.city}, {tour.country}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              {tour.rating.toFixed(1)} ({tour.reviewsCount} reseñas)
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-4xl font-['Cormorant_Garamond',Georgia,serif]">
            {tour.title}
          </h1>

          {tour.tagline && (
            <p className="text-sm sm:text-base text-[#E8A58B] font-medium max-w-3xl">
              {tour.tagline}
            </p>
          )}

          {/* Quick Metrics Bar & Start Button */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#2A4533]">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#E8A58B]" />
                <span>{tour.durationMinutes} min de recorrido</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Navigation className="w-4 h-4 text-amber-400" />
                <span>{tour.distanceKm} km</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span>{tour.stops.length} paradas con audioguía</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowExportModal(true)}
                className="flex items-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-2xl font-bold text-xs shadow-lg transition-all backdrop-blur-md cursor-pointer"
                title="Descargar Formatos de Ruta: GPX, KML, Itinerario PDF"
              >
                <Download className="w-4 h-4 text-[#E8A58B]" />
                <span>Descargar Formatos de Ruta</span>
              </button>

              <button
                onClick={handleStartWalkMode}
                className="flex items-center gap-2.5 px-6 py-3 bg-[#B04E2A] hover:bg-[#9A3F1E] text-white rounded-2xl font-bold text-sm shadow-xl shadow-[#B04E2A]/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4 fill-current" />
                <span>Iniciar Recorrido Autoguiado</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Walk Mode Active Banner */}
      {isWalkMode && (
        <div className="bg-[#2F5238] text-white px-4 sm:px-6 py-3 shadow-md sticky top-14 z-20 border-b border-emerald-800">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-300 animate-ping"></span>
              <span className="font-bold">
                Modo Exploración Activo: Parada {currentWalkStopIndex + 1} de {tour.stops.length} ({tour.stops[currentWalkStopIndex]?.title})
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleNextWalkStop}
                className="px-3.5 py-1.5 bg-white text-[#2F5238] rounded-xl font-bold hover:bg-emerald-50 transition-colors shadow-sm"
              >
                Avanzar a Siguiente Parada ➔
              </button>
              <button
                onClick={() => setIsWalkMode(false)}
                className="px-2.5 py-1.5 bg-emerald-900 hover:bg-emerald-950 rounded-xl text-white font-semibold transition-colors"
              >
                Salir
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tour Completed Banner */}
      {tourCompleted && (
        <div className="bg-emerald-600 text-white px-4 sm:px-6 py-3 shadow-md border-b border-emerald-700">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
            <span className="font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-100" />
              ¡Felicitaciones! Completaste las {tour.stops.length} paradas de {tour.title} en {tour.city}, Chile.
            </span>
            <button
              onClick={() => setTourCompleted(false)}
              className="px-3 py-1.5 bg-white text-emerald-700 rounded-xl font-bold hover:bg-emerald-50 transition-colors shadow-sm"
            >
              Entendido
            </button>
          </div>
        </div>
      )}

      {/* Main Split Layout: Map & Stops List */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: INTERACTIVE MAP & AUDIO PREVIEW (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="bg-white rounded-3xl p-4 shadow-sm border border-[#E4D8BF] space-y-3">
            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-bold text-[#14281C] uppercase tracking-wider flex items-center gap-1.5 font-['Cormorant_Garamond',Georgia,serif]">
                <MapPin className="w-4 h-4 text-[#B04E2A]" />
                Mapa de Ruta y Atractivos
              </span>
              <span className="text-xs text-slate-500">
                Haz clic en los puntos para reproducir la audioguía
              </span>
            </div>

            <div className="hidden md:block h-[420px] w-full rounded-2xl overflow-hidden border border-[#E4D8BF]">
              <TourMap
                stops={tour.stops}
                activeStopId={activeStop?.id}
                onSelectStop={(stop) => {
                  setActiveStop(stop);
                  setSelectedStopModal(stop);
                }}
                userLocation={userLocation}
                className="h-[420px] w-full"
              />
            </div>

            {/* Mobile: compact trigger that opens the map in a closable full-screen popup */}
            <button
              onClick={() => setShowMapModal(true)}
              className="md:hidden w-full h-40 rounded-2xl overflow-hidden border-2 border-dashed border-[#B04E2A]/40 bg-[#EEE6D3] flex flex-col items-center justify-center gap-2 text-[#B04E2A] hover:bg-[#E4D8BF] transition-colors cursor-pointer"
            >
              <MapPin className="w-7 h-7" />
              <span className="text-sm font-bold">Ver Mapa Interactivo</span>
              <span className="text-[11px] text-slate-600 font-medium">Pantalla completa · píntalo con tus dedos · tócalo para cerrar</span>
            </button>

            {tour.wikilocRoutes && tour.wikilocRoutes.length > 0 && (
              <div className="flex flex-col gap-2">
                {tour.wikilocRoutes.map((route) => (
                  <a
                    key={route.url}
                    href={route.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border border-[#B04E2A]/30 bg-[#F6F1E5] hover:bg-[#E4D8BF] transition-colors group"
                  >
                    <ExternalLink className="w-4 h-4 text-[#B04E2A] flex-shrink-0" />
                    <div className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-500">Ruta real sugerida en Wikiloc</span>
                      <span className="block text-xs font-bold text-[#14281C] truncate group-hover:text-[#B04E2A]">{route.name}</span>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick Active Stop Player Card */}
          {activeStop && (
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#E4D8BF] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-[#B04E2A] text-white font-bold text-xs flex items-center justify-center shadow">
                    {activeStop.order}
                  </span>
                  <div>
                    <h3 className="font-bold text-[#14281C] text-sm sm:text-base font-['Cormorant_Garamond',Georgia,serif]">
                      {activeStop.title}
                    </h3>
                    {activeStop.subtitle && (
                      <p className="text-xs text-slate-600">{activeStop.subtitle}</p>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedStopModal(activeStop)}
                  className="px-3 py-1.5 rounded-xl bg-[#B04E2A]/10 hover:bg-[#B04E2A]/20 text-[#B04E2A] text-xs font-bold transition-colors"
                >
                  Ver Ficha Detallada
                </button>
              </div>

              <AudioGuidePlayer
                audio={activeStop.audio}
                fallbackText={activeStop.narrativeText}
                stopTitle={activeStop.title}
                tourTitle={tour.title}
              />
            </div>
          )}

          {/* Author Profile & Guide Info */}
          {tour.author && (
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#E4D8BF] flex items-center gap-4">
              <img
                src={tour.author.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'}
                alt={tour.author.name}
                className="w-14 h-14 rounded-2xl object-cover border-2 border-[#B04E2A]/40 flex-shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-[#14281C] text-sm truncate">{tour.author.name}</h4>
                  {tour.author.verified && <ShieldCheck className="w-4 h-4 text-[#B04E2A] flex-shrink-0" />}
                </div>
                <p className="text-xs text-[#B04E2A] font-semibold">{tour.author.role || 'Guía Oficial de Rutas'}</p>
                {tour.author.bio && <p className="text-xs text-slate-600 line-clamp-2 mt-0.5">{tour.author.bio}</p>}
              </div>
            </div>
          )}

        </div>

        {/* RIGHT COLUMN: STOPS LIST & DOWNLOADS (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Stops List */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#E4D8BF] space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-extrabold text-[#14281C] uppercase tracking-wider font-['Cormorant_Garamond',Georgia,serif]">
                Itinerario ({tour.stops.length} Paradas)
              </h2>
              <span className="text-xs font-semibold text-[#B04E2A]">
                {tour.durationMinutes} min aprox.
              </span>
            </div>

            <div className="space-y-3">
              {tour.stops.map((stop, idx) => {
                const isActive = stop.id === activeStop?.id;
                const isVisited = walkProgress.includes(idx);
                const thumb = stop.images[0]?.url || 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Palafitos_de_Castro%2C_Chilo%C3%A9.jpg/1280px-Palafitos_de_Castro%2C_Chilo%C3%A9.jpg';

                return (
                  <div
                    key={stop.id}
                    onClick={() => {
                      setActiveStop(stop);
                      setSelectedStopModal(stop);
                    }}
                    className={`flex items-center gap-3.5 p-3 rounded-2xl border cursor-pointer transition-all ${
                      isActive
                        ? 'bg-[#F1EAD9] border-[#B04E2A] shadow-md ring-2 ring-[#B04E2A]/30'
                        : 'bg-white border-[#E4D8BF] hover:border-slate-400 hover:bg-[#F6F1E5]'
                    }`}
                  >
                    {/* Thumbnail Image with Order Badge */}
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-slate-900 shadow-inner">
                      <img src={thumb} alt={stop.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                      <span className={`absolute top-1 left-1 w-5 h-5 rounded-full text-white font-bold text-[10px] flex items-center justify-center shadow ${
                        isVisited ? 'bg-[#2F5238]' : 'bg-[#B04E2A]'
                      }`}>
                        {isVisited ? '✓' : stop.order}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-[#14281C] text-sm truncate leading-tight font-['Cormorant_Garamond',Georgia,serif]">
                        {stop.title}
                      </h4>
                      {stop.subtitle && (
                        <p className="text-xs text-slate-600 truncate mt-0.5">{stop.subtitle}</p>
                      )}
                      <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-1">
                        <span className="capitalize font-semibold text-[#14281C]">{stop.category}</span>
                        <span>• ⏱️ {stop.estimatedStayMinutes || 15}m</span>
                        {stop.audio && <span className="text-[#B04E2A] font-semibold">🎧 Audioguía</span>}
                      </div>
                    </div>

                    {/* Action buttons on stop */}
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setQrStop(stop);
                          setShowQrModal(true);
                        }}
                        className="p-1.5 rounded-lg bg-slate-100 hover:bg-[#B04E2A]/10 text-slate-500 hover:text-[#B04E2A] transition-colors"
                        title={`Generar Código QR para ${stop.title}`}
                      >
                        <QrCode className="w-4 h-4" />
                      </button>
                      <ChevronRight className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tour Description */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#E4D8BF] space-y-3">
            <h3 className="text-xs font-bold text-[#14281C] uppercase tracking-wider font-['Cormorant_Garamond',Georgia,serif]">
              Acerca de esta Ruta
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
              {tour.description}
            </p>
          </div>

          {/* Downloadable Documents */}
          {tour.generalDocuments && tour.generalDocuments.length > 0 && (
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#E4D8BF] space-y-3">
              <h3 className="text-xs font-bold text-[#14281C] uppercase tracking-wider flex items-center gap-1.5 font-['Cormorant_Garamond',Georgia,serif]">
                <FileText className="w-4 h-4 text-[#B04E2A]" />
                Mapas y Guías de Campo Tienda El Viaje ({tour.generalDocuments.length})
              </h3>
              <div className="space-y-2">
                {tour.generalDocuments.map((doc) => (
                  <a
                    key={doc.id}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#F6F1E5] hover:bg-[#EEE6D3] border border-[#E4D8BF] transition-colors group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-7 h-7 rounded-lg bg-[#B04E2A]/10 text-[#B04E2A] flex items-center justify-center font-bold text-xs">
                        PDF
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-slate-900 truncate group-hover:text-[#B04E2A]">
                          {doc.name}
                        </p>
                        {doc.size && <span className="text-[10px] text-slate-500">{doc.size}</span>}
                      </div>
                    </div>
                    <Download className="w-4 h-4 text-slate-400 group-hover:text-[#B04E2A]" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Social Links */}
          {tour.socialLinks && Object.values(tour.socialLinks).some(v => Boolean(v)) && (
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#E4D8BF] space-y-3">
              <h3 className="text-xs font-bold text-[#14281C] uppercase tracking-wider font-['Cormorant_Garamond',Georgia,serif]">
                Enlaces y Redes Oficiales
              </h3>
              <div className="flex flex-wrap gap-2">
                {tour.socialLinks.website && (
                  <a
                    href={tour.socialLinks.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#EEE6D3] hover:bg-[#E4D8BF] text-slate-800 text-xs font-semibold"
                  >
                    <Globe className="w-3.5 h-3.5 text-blue-600" />
                    <span>Sitio Web</span>
                  </a>
                )}
                {tour.socialLinks.instagram && (
                  <a
                    href={tour.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-700 text-xs font-semibold"
                  >
                    <Instagram className="w-3.5 h-3.5 text-pink-600" />
                    <span>Instagram</span>
                  </a>
                )}
                {tour.socialLinks.youtube && (
                  <a
                    href={tour.socialLinks.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 text-xs font-semibold"
                  >
                    <Youtube className="w-3.5 h-3.5 text-red-600" />
                    <span>YouTube</span>
                  </a>
                )}
              </div>
            </div>
          )}

        </div>

      </main>

      {/* Related Store Items - Publicidad directa relacionada con esta ruta */}
      <RelatedShopStrip tourId={tour.id} />

      {/* Stop Detail Full Modal */}
      {selectedStopModal && (
        <StopDetailModal
          stop={selectedStopModal}
          tour={tour}
          onClose={() => setSelectedStopModal(null)}
          onSelectNextStop={() => {
            if (hasNextStop) {
              const nextStop = tour.stops[currentStopIndex + 1];
              setSelectedStopModal(nextStop);
              setActiveStop(nextStop);
            }
          }}
          onSelectPrevStop={() => {
            if (hasPrevStop) {
              const prevStop = tour.stops[currentStopIndex - 1];
              setSelectedStopModal(prevStop);
              setActiveStop(prevStop);
            }
          }}
          hasNextStop={hasNextStop}
          hasPrevStop={hasPrevStop}
        />
      )}

      {/* QR Code Generator & Signage Modal */}
      {showQrModal && (
        <QRCodeModal
          isOpen={showQrModal}
          onClose={() => setShowQrModal(false)}
          tour={tour}
          selectedStop={qrStop}
          onSelectStop={setQrStop}
        />
      )}

      {/* Tour Export & Route Formats Modal (GPX, KML, Itinerary PDF) */}
      {showExportModal && (
        <TourExportModal
          isOpen={showExportModal}
          onClose={() => setShowExportModal(false)}
          tour={tour}
        />
      )}

      {/* Interactive Map Full-Screen Popup (mobile) */}
      {showMapModal && (
        <div className="fixed inset-0 z-[100] bg-[#14281C]/95 backdrop-blur-sm flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 text-white border-b border-white/10 flex-shrink-0">
            <span className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#E8A58B]" />
              Mapa de {tour.title}
            </span>
            <button
              onClick={() => setShowMapModal(false)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
              Cerrar
            </button>
          </div>
          {tour.wikilocRoutes && tour.wikilocRoutes.length > 0 && (
            <div className="flex flex-col gap-0">
              {tour.wikilocRoutes.map((route) => (
                <a
                  key={route.url}
                  href={route.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-3 bg-[#14281C] text-white border-t border-white/10 flex-shrink-0 group"
                >
                  <ExternalLink className="w-4 h-4 text-[#E8A58B] flex-shrink-0" />
                  <div className="min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-wider text-white/60">Ruta real sugerida en Wikiloc</span>
                    <span className="block text-xs font-bold truncate group-hover:text-[#E8A58B]">{route.name}</span>
                  </div>
                </a>
              ))}
            </div>
          )}
          <div className="flex-1 h-full">
            <TourMap
              stops={tour.stops}
              activeStopId={activeStop?.id}
              onSelectStop={(stop) => {
                setActiveStop(stop);
                setSelectedStopModal(stop);
                setShowMapModal(false);
              }}
              userLocation={userLocation}
              className="h-full w-full"
            />
          </div>
        </div>
      )}

    </div>
  );
};
