import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { X } from 'lucide-react';
import { Tour, TourStop } from '../types';

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  tour: Tour;
  selectedStop?: TourStop | null;
  onSelectStop?: (stop: TourStop | null) => void;
}

export function QRCodeModal({ isOpen, onClose, tour, selectedStop, onSelectStop }: QRCodeModalProps) {
  if (!isOpen) return null;

  const base = (typeof window !== 'undefined' && window.location.origin) || 'https://www.interpretaciondelpatrimonio.cl';
  const url = selectedStop
    ? `${base}/tour/${encodeURIComponent(tour.id)}/${encodeURIComponent(selectedStop.id)}`
    : `${base}/tour/${encodeURIComponent(tour.id)}`;

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
            <h3 className="text-base font-bold text-[#14281C]">Código QR de la Ruta</h3>
            <p className="text-xs text-slate-600">Comparte o coloca este código en el punto de partida.</p>
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
              <option value="">Ruta completa</option>
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
            <QRCodeSVG value={url} size={220} level="M" />
          </div>
          <p className="text-[11px] text-slate-500 break-all text-center font-mono px-2">{url}</p>
        </div>

        <div className="flex justify-end">
          <button
            onClick={() => {
              navigator.clipboard?.writeText(url);
            }}
            className="px-4 py-2 rounded-xl text-xs font-bold text-[#B04E2A] hover:bg-[#B04E2A]/10"
          >
            Copiar enlace
          </button>
        </div>
      </div>
    </div>
  );
}
