import React, { useEffect } from 'react';
import { X, PlayCircle } from 'lucide-react';

interface VideoPopupProps {
  /** ID del video de YouTube (ej. QTWbAYYaxso) o URL completa */
  videoIdOrUrl: string;
  /** Título visible del popup */
  title: string;
  /** Texto corto bajo el título (opcional) */
  subtitle?: string;
  /** true = mostrar el modal */
  isOpen: boolean;
  /** Cerrar el modal */
  onClose: () => void;
}

/** Extrae el ID de un video de YouTube desde un ID suelto o una URL completa. */
export function extractYouTubeId(videoIdOrUrl: string): string {
  const v = videoIdOrUrl.trim();
  if (!v) return '';
  // URL completa (watch, embed, youtu.be, shorts)
  const patterns = [
    /(?:youtube\.com\/watch\?(?:.*&)?v=)([A-Za-z0-9_-]{11})/,
    /(?:youtu\.be\/)([A-Za-z0-9_-]{11})/,
    /(?:youtube\.com\/embed\/)([A-Za-z0-9_-]{11})/,
    /(?:youtube\.com\/shorts\/)([A-Za-z0-9_-]{11})/,
  ];
  for (const re of patterns) {
    const m = v.match(re);
    if (m) return m[1];
  }
  // Si ya es un ID suelto de 11 caracteres
  if (/^[A-Za-z0-9_-]{11}$/.test(v)) return v;
  return '';
}

/**
 * Botón + modal emergente para insertar un video de YouTube que ilustra una
 * metodología. Pensado para reutilizar en cada metodología de la página de
 * diseño de experiencias (Neri Oxman, Stanford, biomimetismo, etc.).
 */
export const VideoPopup: React.FC<VideoPopupProps> = ({
  videoIdOrUrl,
  title,
  subtitle,
  isOpen,
  onClose,
}) => {
  const videoId = extractYouTubeId(videoIdOrUrl);

  // Cerrar con tecla Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    // Bloquear scroll del fondo mientras el modal está abierto
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || !videoId) return null;

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Fondo oscurecido */}
      <div
        className="absolute inset-0 bg-[#0E2018]/85 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Contenedor */}
      <div className="relative w-full max-w-3xl bg-[#14281C] rounded-3xl border border-[#2A4533] shadow-2xl overflow-hidden animate-[fadeIn_0.25s_ease-out]">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 px-5 sm:px-6 py-4 border-b border-[#2A4533]">
          <div className="flex items-start gap-3 min-w-0">
            <span className="shrink-0 w-9 h-9 rounded-xl bg-[#B04E2A] text-white grid place-items-center">
              <PlayCircle className="w-5 h-5" />
            </span>
            <div className="min-w-0">
              <h3 className="text-white font-extrabold text-sm sm:text-lg leading-tight truncate">
                {title}
              </h3>
              {subtitle && (
                <p className="text-[#E8A58B] text-xs font-semibold mt-0.5">{subtitle}</p>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar video"
            className="shrink-0 w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white grid place-items-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video 16:9 */}
        <div className="relative w-full aspect-video bg-black">
          <iframe
            className="absolute inset-0 w-full h-full"
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Pie */}
        <div className="px-5 sm:px-6 py-3 border-t border-[#2A4533]">
          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#E8A58B] hover:text-white transition-colors inline-flex items-center gap-1"
          >
            Ver en YouTube ↗
          </a>
        </div>
      </div>

      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(8px);} to { opacity:1; transform: translateY(0);} }`}</style>
    </div>
  );
};
