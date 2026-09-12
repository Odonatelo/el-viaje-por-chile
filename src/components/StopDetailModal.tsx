import React, { useState } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Clock, 
  Sparkles, 
  FileText, 
  ExternalLink, 
  Youtube, 
  Instagram, 
  Globe, 
  Download, 
  Lightbulb, 
  Info,
  Navigation,
  Compass
} from 'lucide-react';
import { TourStop, Tour } from '../types';
import { AudioGuidePlayer } from './AudioGuidePlayer';
import { getYouTubeEmbedUrl } from '../utils/audioUtils';

const FALLBACK_IMAGE = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Ventisquero_Colgante_Parque_Nacional_Queulat.jpg/1280px-Ventisquero_Colgante_Parque_Nacional_Queulat.jpg';

interface StopDetailModalProps {
  stop: TourStop;
  tour: Tour;
  onClose: () => void;
  onSelectNextStop?: () => void;
  onSelectPrevStop?: () => void;
  hasNextStop?: boolean;
  hasPrevStop?: boolean;
}

export const StopDetailModal: React.FC<StopDetailModalProps> = ({
  stop,
  tour,
  onClose,
  onSelectNextStop,
  onSelectPrevStop,
  hasNextStop = false,
  hasPrevStop = false,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const images = stop.images || [];
  const primaryImage = images[selectedImageIndex] || {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Ventisquero_Colgante_Parque_Nacional_Queulat.jpg/1280px-Ventisquero_Colgante_Parque_Nacional_Queulat.jpg',
    caption: stop.title,
  };

  const youtubeEmbedUrl = getYouTubeEmbedUrl(stop.youtubeUrl);

  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${stop.location.lat},${stop.location.lng}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      <div 
        className="relative bg-white text-slate-900 w-full max-w-4xl rounded-3xl shadow-2xl border border-[#E4D8BF] overflow-hidden my-auto max-h-[92vh] flex flex-col font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-5 py-3.5 bg-white/95 backdrop-blur-md border-b border-[#E4D8BF]">
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#B04E2A] text-white font-bold text-xs shadow">
              {stop.order}
            </span>
            <div className="truncate">
              <span className="text-xs font-semibold text-[#B04E2A] uppercase tracking-wider block">
                Parada {stop.order} de {tour.stops.length} • {tour.city}
              </span>
              <h2 className="text-base sm:text-lg font-bold text-[#14281C] truncate leading-tight font-['Cormorant_Garamond',Georgia,serif]">
                {stop.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Quick nav stops */}
            <div className="hidden sm:flex items-center gap-1 border-r border-[#E4D8BF] pr-2 mr-1">
              <button
                onClick={onSelectPrevStop}
                disabled={!hasPrevStop}
                className="p-1.5 rounded-lg text-slate-600 hover:bg-[#F6F1E5] disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                title="Parada anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={onSelectNextStop}
                disabled={!hasNextStop}
                className="p-1.5 rounded-lg text-slate-600 hover:bg-[#F6F1E5] disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                title="Siguiente parada"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-[#F6F1E5] transition-colors"
              title="Cerrar ventana"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto flex-1 p-4 sm:p-6 space-y-6 bg-white">
          
          {/* Main Visual Gallery & Hero Banner */}
          <div className="space-y-2">
            <div className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-md bg-slate-900 group">
              <img
                src={primaryImage.url}
                alt={primaryImage.caption || stop.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = FALLBACK_IMAGE; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14281C]/85 via-transparent to-black/20" />
              
              {/* Category and Stay Time badges */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                <span className="bg-white/90 backdrop-blur-md text-[#14281C] text-xs font-bold px-3 py-1 rounded-full shadow capitalize">
                  {stop.category || 'Atractivo'}
                </span>
                <span className="bg-[#14281C]/80 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full shadow flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#E8A58B]" />
                  {stop.estimatedStayMinutes || 15} min de visita
                </span>
              </div>

              {/* Caption & Location at bottom */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                {stop.subtitle && (
                  <p className="text-sm sm:text-base font-medium text-[#E8A58B] drop-shadow mb-1">
                    {stop.subtitle}
                  </p>
                )}
                {primaryImage.caption && (
                  <p className="text-xs text-slate-200/90 italic drop-shadow">
                    📷 {primaryImage.caption}
                  </p>
                )}
              </div>
            </div>

            {/* Thumbnail selector if multiple images */}
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-1">
                {images.map((img, idx) => (
                  <button
                    key={img.id || idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${
                      selectedImageIndex === idx
                        ? 'border-[#B04E2A] scale-105 shadow-md'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img.url} alt={img.caption} className="w-full h-full object-cover" referrerPolicy="no-referrer" loading="lazy" decoding="async" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* AUDIO GUIDE PLAYER BAR */}
          <div className="bg-[#F6F1E5] p-4 sm:p-5 rounded-2xl border border-[#E4D8BF] space-y-2 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#14281C] uppercase tracking-wider flex items-center gap-1.5 font-['Cormorant_Garamond',Georgia,serif]">
                <Sparkles className="w-4 h-4 text-[#B04E2A]" />
                Audioguía Oficial del Atractivo
              </span>
              <span className="text-xs font-semibold text-[#B04E2A]">
                {stop.audio?.type === 'ai_generated' ? 'Voz IA (' + (stop.audio.voiceName || 'Kore') + ')' : 'Audio Local'}
              </span>
            </div>

            <AudioGuidePlayer
              audio={stop.audio}
              fallbackText={stop.narrativeText}
              stopTitle={stop.title}
              tourTitle={tour.title}
            />
          </div>

          {/* Narrative Text Section */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-[#14281C] uppercase tracking-wider flex items-center gap-2 font-['Cormorant_Garamond',Georgia,serif]">
              <Info className="w-4 h-4 text-[#B04E2A]" />
              Historia & Guión del Recorrido
            </h3>
            <div className="bg-white p-5 rounded-2xl border border-[#E4D8BF] text-slate-800 text-sm sm:text-base leading-relaxed whitespace-pre-line shadow-sm">
              {stop.narrativeText}
            </div>
          </div>

          {/* YouTube Video Section */}
          {youtubeEmbedUrl && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-[#14281C] uppercase tracking-wider flex items-center gap-2 font-['Cormorant_Garamond',Georgia,serif]">
                <Youtube className="w-4 h-4 text-red-600" />
                Video y Contenido Multimedia
              </h3>
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-[#E4D8BF] shadow-md">
                <iframe
                  src={youtubeEmbedUrl}
                  title={`Video ${stop.title}`}
                  className="absolute inset-0 w-full h-full"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>
          )}

          {/* Tips & Trivia Cards */}
          {(stop.tips || stop.trivia) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stop.tips && (
                <div className="bg-[#F6F1E5] border border-[#E4D8BF] rounded-2xl p-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-[#B04E2A] font-bold text-xs uppercase font-['Cormorant_Garamond',Georgia,serif]">
                    <Lightbulb className="w-4 h-4" />
                    <span>Consejo de Visita</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {stop.tips}
                  </p>
                </div>
              )}

              {stop.trivia && (
                <div className="bg-[#F6F1E5] border border-[#E4D8BF] rounded-2xl p-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-[#2F5238] font-bold text-xs uppercase font-['Cormorant_Garamond',Georgia,serif]">
                    <Sparkles className="w-4 h-4" />
                    <span>¿Sabías qué?</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {stop.trivia}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Documents & PDF Files */}
          {stop.documents && stop.documents.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-[#14281C] uppercase tracking-wider flex items-center gap-2 font-['Cormorant_Garamond',Georgia,serif]">
                <FileText className="w-4 h-4 text-[#B04E2A]" />
                Guías y Archivos Adjuntos ({stop.documents.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {stop.documents.map((doc) => (
                  <a
                    key={doc.id}
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#F6F1E5] hover:bg-[#EEE6D3] border border-[#E4D8BF] transition-colors group"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-[#B04E2A]/10 text-[#B04E2A] flex items-center justify-center font-bold text-xs flex-shrink-0">
                        PDF
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-slate-900 truncate group-hover:text-[#B04E2A]">
                          {doc.name}
                        </p>
                        {doc.size && <span className="text-[10px] text-slate-500">{doc.size}</span>}
                      </div>
                    </div>
                    <Download className="w-4 h-4 text-slate-400 group-hover:text-[#B04E2A] flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* External Social Links & Navigation Action */}
          <div className="pt-4 border-t border-[#E4D8BF] flex flex-wrap items-center justify-between gap-3">
            
            {/* Social icons */}
            <div className="flex items-center gap-2">
              {stop.socialLinks?.website && (
                <a
                  href={stop.socialLinks.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#F6F1E5] hover:bg-[#EEE6D3] text-xs font-semibold text-slate-700 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-blue-600" />
                  <span>Sitio Web</span>
                </a>
              )}
              {stop.socialLinks?.instagram && (
                <a
                  href={stop.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pink-50 hover:bg-pink-100 text-xs font-semibold text-pink-700 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5 text-pink-600" />
                  <span>Instagram</span>
                </a>
              )}
            </div>

            {/* Google Maps Route Button */}
            <button
              onClick={openInGoogleMaps}
              className="flex items-center gap-2 px-4 py-2 bg-[#14281C] hover:bg-[#1D3626] text-white rounded-xl text-xs font-bold transition-all shadow"
            >
              <Navigation className="w-3.5 h-3.5 text-[#E8A58B]" />
              <span>Cómo Llegar con Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </button>

          </div>

        </div>

        {/* Modal Bottom Footer Navigation */}
        <div className="sticky bottom-0 z-30 flex items-center justify-between px-5 py-3 bg-[#F6F1E5] border-t border-[#E4D8BF]">
          <button
            onClick={onSelectPrevStop}
            disabled={!hasPrevStop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-white disabled:opacity-30 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Parada Anterior</span>
          </button>

          <span className="text-xs font-bold text-[#14281C]">
            {stop.order} de {tour.stops.length}
          </span>

          <button
            onClick={onSelectNextStop}
            disabled={!hasNextStop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold bg-[#B04E2A] hover:bg-[#9A3F1E] text-white disabled:opacity-30 transition-colors shadow-sm"
          >
            <span>Siguiente Parada</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
