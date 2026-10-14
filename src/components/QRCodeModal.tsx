import React, { useRef } from 'react';
import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';
import { Tour, TourStop } from '../types';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  tour: Tour;
  selectedStop?: TourStop | null;
  onSelectStop?: (stop: TourStop | null) => void;
}

export function QRCodeModal({ isOpen, onClose, tour, selectedStop, onSelectStop }: QRCodeModalProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  if (!isOpen) return null;

  const base = (typeof window !== 'undefined' && window.location.origin) || 'https://www.interpretaciondelpatrimonio.cl';
  const url = selectedStop
    ? `${base}/tour/${encodeURIComponent(tour.id)}/${encodeURIComponent(selectedStop.id)}`
    : `${base}/tour/${encodeURIComponent(tour.id)}`;

  const fileBase = selectedStop ? `${tour.id}-${selectedStop.id}` : tour.id;
  const fileName = `qr-${fileBase}.png`;

  const toBlob = (): Promise<Blob | null> =>
    new Promise((resolve) => {
      const canvas = canvasRef.current;
      if (!canvas) return resolve(null);
      canvas.toBlob((b) => resolve(b), 'image/png');
    });

  const handleDownload = async () => {
    const blob = await toBlob();
    if (!blob) return;
    const objUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = objUrl;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(objUrl);
  };

  const handleShareQr = async () => {
    const title = selectedStop ? `${tour.title} — ${selectedStop.title}` : tour.title;
    const text = `🎧 Audioguía: ${title}`;
    try {
      const blob = await toBlob();
      if (blob && typeof navigator !== 'undefined' && 'canShare' in navigator) {
        const file = new File([blob], fileName, { type: 'image/png' });
        if (navigator.canShare({ files: [file] })) {
          await navigator.share({ files: [file], title, text, url });
          return;
        }
      }
      if (typeof navigator !== 'undefined' && navigator.share) {
        await navigator.share({ title, text, url });
        return;
      }
    } catch {
      // El usuario cerró el diálogo nativo o no está disponible.
    }
    await handleDownload();
  };

  return (
    <div
      className="fixed inset-0 z-[60] overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex justify-center items-start p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-[#F6F1E5] text-slate-900 w-full max-w-md rounded-3xl p-6 shadow-2xl my-10 space-y-4 border border-[#E4D8BF]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-[#14281C]">Código QR de la Audioguía</h3>
            <p className="text-xs text-slate-600">Compártelo o colócalo en el punto de partida.</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700 p-1 text-lg" aria-label="Cerrar">
            ✕
          </button>
        </div>

        {tour.stops.length > 0 && (
          <div>
            <label className="font-bold text-slate-800 text-xs block mb-1">Parada específica (opcional)</label>
            <select
              value={selectedStop?.id || ''}
              onChange={(e) => {
                const found = tour.stops.find((s) => s.id === e.target.value) || null;
                onSelectStop?.(found);
              }}
              className="w-full px-3 py-2 bg-white border border-[#CDBA95] rounded-xl font-semibold text-sm focus:ring-2 focus:ring-[#B04E2A] focus:outline-none"
            >
              <option value="">Audioguía completa</option>
              {tour.stops.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.order}. {s.title}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="flex flex-col items-center gap-3 py-2">
          <div className="bg-white p-4 rounded-2xl border border-[#E4D8BF] shadow-sm">
            <QRCodeSVG value={url} size={220} level="H" fgColor="#14281C" bgColor="#FFFFFF" />
          </div>
          <p className="text-[11px] text-slate-500 break-all text-center font-mono px-2">{url}</p>
        </div>

        <div className="flex flex-wrap justify-between gap-2">
          <button
            onClick={() => {
              navigator.clipboard?.writeText(url);
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-200/60"
          >
            Copiar enlace
          </button>
          <div className="flex gap-2">
            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-xl text-xs font-bold text-[#14281C] bg-[#EEE6D3] hover:bg-[#E4D8BF]"
            >
              Descargar PNG
            </button>
            <button
              onClick={handleShareQr}
              className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#B04E2A] hover:bg-[#9a4322]"
            >
              Compartir QR
            </button>
          </div>
        </div>

        {/* Canvas oculto en alta resolución para exportar/compartir la imagen */}
        <div className="hidden" aria-hidden="true">
          <QRCodeCanvas
            ref={canvasRef}
            value={url}
            size={1024}
            level="H"
            fgColor="#14281C"
            bgColor="#FFFFFF"
            marginSize={2}
          />
        </div>
      </div>
    </div>
  );
}
