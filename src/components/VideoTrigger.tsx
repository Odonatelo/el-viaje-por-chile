import React from 'react';
import { Play } from 'lucide-react';

/**
 * Disparador visual para abrir un VideoPopup. Colócalo junto al texto de cada
 * metodología para que el visitante pueda ver el video emergente.
 */
export const VideoTrigger: React.FC<{
  onClick: () => void;
  label?: string;
  className?: string;
}> = ({ onClick, label = 'Ver el video', className = '' }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#B04E2A] hover:bg-[#9A3F1E] text-white text-xs sm:text-sm font-extrabold shadow-lg shadow-[#B04E2A]/30 hover:scale-105 active:scale-95 transition-all cursor-pointer ${className}`}
    title={label}
  >
    <span className="w-6 h-6 rounded-full bg-white/20 grid place-items-center">
      <Play className="w-3.5 h-3.5 fill-white" />
    </span>
    {label}
  </button>
);
