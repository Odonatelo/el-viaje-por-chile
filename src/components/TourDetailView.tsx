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
  ExternalLink
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Tour, TourStop } from '../types';
import { TourMap } from './TourMap';
import { StopDetailModal } from './StopDetailModal';
import { AudioGuidePlayer } from './AudioGuidePlayer';
import { TourExportModal } from './TourExportModal';

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

  // Guided Walk Simulation / GPS state
  const [isWalkMode, setIsWalkMode] = useState(false);
  const [currentWalkStopIndex, setCurrentWalkStopIndex] = useState(0);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [walkProgress, setWalkProgress] = useState<number[]>([]); // indexes visited

  // Initialize selected stop
  useEffect(() => {
    if (tour.stops && tour.stops.length > 0 && !activeStop) {
      setActiveStop(tour.stops[0]);
    }
  }, [tour]);

  // Handle Walking Simulation
  const handleStartWalkMode = () => {
    setIsWalkMode(true);
    setCurrentWalkStopIndex(0);
    setWalkProgress([0]);
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
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      alert('🎉 ¡Felicitaciones! Has completado todo el recorrido patrimonial por Chile.');
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
    <div className="min-h-screen bg-[#FAF7F2] text-slate-900 pb-20 font-sans">
      
      {/* Top Sticky Navigation */}
      <nav className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#E8DFC8] px-4 sm:px-6 py-3 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-[#F2ECE1] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#C04A26]" />
          <span>Explorar Rutas de Chile</span>
        </button>

        <div className="flex items-center gap-2">
          {onEditTour && (
            <button
              onClick={() => onEditTour(tour)}
              className="px-3.5 py-1.5 rounded-xl bg-[#F2ECE1] hover:bg-[#E8DFC8] text-slate-800 text-xs font-bold transition-colors"
            >
              Editar en Studio
            </button>
          )}

          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className={`p-2 rounded-xl border transition-colors ${
              isFavorite ? 'bg-[#C04A26]/10 text-[#C04A26] border-[#C04A26]/30' : 'bg-white text-slate-600 border-[#E8DFC8] hover:bg-[#FAF7F2]'
            }`}
            title="Guardar en favoritos"
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={handleShare}
            className="p-2 rounded-xl bg-white text-slate-600 border border-[#E8DFC8] hover:bg-[#FAF7F2] transition-colors relative"
            title="Compartir ruta"
          >
            <Share2 className="w-4 h-4" />
            {copiedLink && (
              <span className="absolute -bottom-8 right-0 bg-[#0D1B2D] text-white text-[10px] px-2 py-1 rounded shadow whitespace-nowrap">
                ¡Enlace copiado!
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Hero Header Banner */}
      <div className="relative bg-[#0D1B2D] text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={tour.coverImage}
            alt={tour.title}
            className="w-full h-full object-cover opacity-40 scale-105 filter blur-[1px]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1B2D] via-[#0D1B2D]/80 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#C04A26] text-white text-xs font-bold uppercase tracking-wider shadow">
              {tour.category === 'nature' ? 'Naturaleza' : tour.category === 'walking' ? 'Paseo a Pie' : tour.category === 'history' ? 'Patrimonio' : tour.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#F59E7C]" />
              {tour.city}, {tour.country}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              {tour.rating.toFixed(1)} ({tour.reviewsCount} reseñas)
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-4xl font-['Outfit',sans-serif]">
            {tour.title}
          </h1>

          {tour.tagline && (
            <p className="text-sm sm:text-base text-[#F59E7C] font-medium max-w-3xl">
              {tour.tagline}
            </p>
          )}

          {/* Quick Metrics Bar & Start Button */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#1E334D]">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#F59E7C]" />
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
                <Download className="w-4 h-4 text-[#F59E7C]" />
                <span>Descargar Formatos de Ruta</span>
              </button>

              <button
                onClick={handleStartWalkMode}
                className="flex items-center gap-2.5 px-6 py-3 bg-[#C04A26] hover:bg-[#A63A19] text-white rounded-2xl font-bold text-sm shadow-xl shadow-[#C04A26]/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
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
        <div className="bg-[#27523C] text-white px-4 sm:px-6 py-3 shadow-md sticky top-14 z-20 border-b border-emerald-800">
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
                className="px-3.5 py-1.5 bg-white text-[#27523C] rounded-xl font-bold hover:bg-emerald-50 transition-colors shadow-sm"
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

      {/* Main Split Layout: Map & Stops List */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT COLUMN: INTERACTIVE MAP & AUDIO PREVIEW (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="bg-white rounded-3xl p-4 shadow-sm border border-[#E8DFC8] space-y-3">
            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-bold text-[#0D1B2D] uppercase tracking-wider flex items-center gap-1.5 font-['Outfit',sans-serif]">
                <MapPin className="w-4 h-4 text-[#C04A26]" />
                Mapa de Ruta y Atractivos
              </span>
              <span className="text-xs text-slate-500">
                Haz clic en los puntos para reproducir la audioguía
              </span>
            </div>

            <div className="h-[420px] w-full rounded-2xl overflow-hidden border border-[#E8DFC8]">
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
          </div>

          {/* Quick Active Stop Player Card */}
          {activeStop && (
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#E8DFC8] space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-[#C04A26] text-white font-bold text-xs flex items-center justify-center shadow">
                    {activeStop.order}
                  </span>
                  <div>
                    <h3 className="font-bold text-[#0D1B2D] text-sm sm:text-base font-['Outfit',sans-serif]">
                      {activeStop.title}
                    </h3>
                    {activeStop.subtitle && (
                      <p className="text-xs text-slate-600">{activeStop.subtitle}</p>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedStopModal(activeStop)}
                  className="px-3 py-1.5 rounded-xl bg-[#C04A26]/10 hover:bg-[#C04A26]/20 text-[#C04A26] text-xs font-bold transition-colors"
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
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#E8DFC8] flex items-center gap-4">
              <img
                src={tour.author.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'}
                alt={tour.author.name}
                className="w-14 h-14 rounded-2xl object-cover border-2 border-[#C04A26]/40 flex-shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-[#0D1B2D] text-sm truncate">{tour.author.name}</h4>
                  {tour.author.verified && <ShieldCheck className="w-4 h-4 text-[#C04A26] flex-shrink-0" />}
                </div>
                <p className="text-xs text-[#C04A26] font-semibold">{tour.author.role || 'Guía Oficial de Rutas'}</p>
                {tour.author.bio && <p className="text-xs text-slate-600 line-clamp-2 mt-0.5">{tour.author.bio}</p>}
              </div>
            </div>
          )}

        </div>

        {/* RIGHT COLUMN: STOPS LIST & DOWNLOADS (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Stops List */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#E8DFC8] space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-extrabold text-[#0D1B2D] uppercase tracking-wider font-['Outfit',sans-serif]">
                Itinerario ({tour.stops.length} Paradas)
              </h2>
              <span className="text-xs font-semibold text-[#C04A26]">
                {tour.durationMinutes} min aprox.
              </span>
            </div>

            <div className="space-y-3">
              {tour.stops.map((stop, idx) => {
                const isActive = stop.id === activeStop?.id;
                const isVisited = walkProgress.includes(idx);
                const thumb = stop.images[0]?.url || 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=300&q=80';

                return (
                  <div
                    key={stop.id}
                    onClick={() => {
                      setActiveStop(stop);
                      setSelectedStopModal(stop);
                    }}
                    className={`flex items-center gap-3.5 p-3 rounded-2xl border cursor-pointer transition-all ${
                      isActive
                        ? 'bg-[#F9F5EE] border-[#C04A26] shadow-md ring-2 ring-[#C04A26]/30'
                        : 'bg-white border-[#E8DFC8] hover:border-slate-400 hover:bg-[#FAF7F2]'
                    }`}
                  >
                    {/* Thumbnail Image with Order Badge */}
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-slate-900 shadow-inner">
                      <img src={thumb} alt={stop.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      <span className={`absolute top-1 left-1 w-5 h-5 rounded-full text-white font-bold text-[10px] flex items-center justify-center shadow ${
                        isVisited ? 'bg-[#27523C]' : 'bg-[#C04A26]'
                      }`}>
                        {isVisited ? '✓' : stop.order}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="min-w-0 flex-1">
                      <h4 className="font-bold text-[#0D1B2D] text-sm truncate leading-tight font-['Outfit',sans-serif]">
                        {stop.title}
                      </h4>
                      {stop.subtitle && (
                        <p className="text-xs text-slate-600 truncate mt-0.5">{stop.subtitle}</p>
                      )}
                      <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-1">
                        <span className="capitalize font-semibold text-[#0D1B2D]">{stop.category}</span>
                        <span>• ⏱️ {stop.estimatedStayMinutes || 15}m</span>
                        {stop.audio && <span className="text-[#C04A26] font-semibold">🎧 Audioguía</span>}
                      </div>
                    </div>

                    {/* Action buttons on stop */}
                    <div className="flex items-center gap-1 flex-shrink-0">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setQrTargetStop(stop);
                          setShowQrModal(true);
                        }}
                        className="p-1.5 rounded-lg bg-slate-100 hover:bg-[#C04A26]/10 text-slate-500 hover:text-[#C04A26] transition-colors"
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
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#E8DFC8] space-y-3">
            <h3 className="text-xs font-bold text-[#0D1B2D] uppercase tracking-wider font-['Outfit',sans-serif]">
              Acerca de esta Ruta
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
              {tour.description}
            </p>
          </div>

          {/* Downloadable Documents */}
          {tour.generalDocuments && tour.generalDocuments.length > 0 && (
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#E8DFC8] space-y-3">
              <h3 className="text-xs font-bold text-[#0D1B2D] uppercase tracking-wider flex items-center gap-1.5 font-['Outfit',sans-serif]">
                <FileText className="w-4 h-4 text-[#C04A26]" />
                Mapas y Guías de Campo Tienda El Viaje ({tour.generalDocuments.length})
              </h3>
              <div className="space-y-2">
                {tour.generalDocuments.map((doc) => (
                  <a
                    key={doc.id}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#FAF7F2] hover:bg-[#F2ECE1] border border-[#E8DFC8] transition-colors group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-7 h-7 rounded-lg bg-[#C04A26]/10 text-[#C04A26] flex items-center justify-center font-bold text-xs">
                        PDF
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-slate-900 truncate group-hover:text-[#C04A26]">
                          {doc.name}
                        </p>
                        {doc.size && <span className="text-[10px] text-slate-500">{doc.size}</span>}
                      </div>
                    </div>
                    <Download className="w-4 h-4 text-slate-400 group-hover:text-[#C04A26]" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Social Links */}
          {tour.socialLinks && Object.values(tour.socialLinks).some(v => Boolean(v)) && (
            <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#E8DFC8] space-y-3">
              <h3 className="text-xs font-bold text-[#0D1B2D] uppercase tracking-wider font-['Outfit',sans-serif]">
                Enlaces y Redes Oficiales
              </h3>
              <div className="flex flex-wrap gap-2">
                {tour.socialLinks.website && (
                  <a
                    href={tour.socialLinks.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F2ECE1] hover:bg-[#E8DFC8] text-slate-800 text-xs font-semibold"
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
      {/* Tour Export & Route Formats Modal (GPX, KML, Itinerary PDF) */}
      {showExportModal && (
        <TourExportModal
          isOpen={showExportModal}
          onClose={() => setShowExportModal(false)}
          tour={tour}
        />
      )}

    </div>
  );
};
