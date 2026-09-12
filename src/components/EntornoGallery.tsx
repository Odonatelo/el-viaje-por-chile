import React from 'react';
import { X, Images } from 'lucide-react';

interface EntornoGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

interface EntornoImage {
  name: string;
  file: string;
  ext: string;
}

export const EntornoGallery: React.FC<EntornoGalleryProps> = ({ isOpen, onClose }) => {
  const [images, setImages] = React.useState<EntornoImage[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [selected, setSelected] = React.useState<EntornoImage | null>(null);

  React.useEffect(() => {
    if (!isOpen) return;
    setLoading(true);
    fetch('/entorno/manifest.json')
      .then((r) => r.json())
      .then((data) => {
        setImages(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setImages([]);
        setLoading(false);
      });
  }, [isOpen]);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selected) setSelected(null);
        else onClose();
      }
    };
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, selected, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col animate-fadeIn">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-black">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
            <Images className="w-5 h-5 text-white/80" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white font-['Outfit',sans-serif]">Entorno El Viaje Por Chile</h3>
            <p className="text-xs text-white/50">Galería visual · marco negro</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Grid */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-8">
        {loading ? (
          <div className="h-full flex items-center justify-center text-white/50 text-sm">Cargando entorno…</div>
        ) : images.length === 0 ? (
          <div className="h-full flex items-center justify-center text-white/40 text-sm">
            No hay imágenes en el entorno. Agrega archivos a <code className="mx-1 px-1 bg-white/10 rounded">public/entorno/</code>.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {images.map((img) => (
              <button
                key={img.file}
                onClick={() => setSelected(img)}
                className="group text-left focus:outline-none"
                title={img.name}
              >
                {/* Marco negro */}
                <div className="bg-black p-3 rounded-sm shadow-[0_10px_40px_rgba(0,0,0,0.8)] border border-white/5">
                  <div className="border border-white/10 bg-neutral-900 p-1">
                    <img
                      src={`/entorno/${img.file}`}
                      alt={img.name}
                      loading="lazy"
                      className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
                <p className="mt-3 text-center text-xs text-white/60 truncate px-2">{img.name}</p>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 sm:p-10 animate-fadeIn"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="bg-black p-3 rounded-sm border border-white/10 max-w-5xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={`/entorno/${selected.file}`}
              alt={selected.name}
              className="max-w-full max-h-[82vh] object-contain"
            />
            <p className="text-center text-sm text-white/70 mt-3">{selected.name}</p>
          </div>
        </div>
      )}
    </div>
  );
};
