import React from 'react';
import { X, Images, Instagram, ExternalLink } from 'lucide-react';

interface EntornoGalleryProps {
  isOpen: boolean;
  onClose: () => void;
}

interface EntornoImage {
  name: string;
  file: string;
  ext: string;
}

const INSTAGRAM_USER = 'elviaje.cl';
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_USER}/`;
const INSTAGRAM_EMBED_URL = `https://www.instagram.com/${INSTAGRAM_USER}/embed/`;

export const EntornoGallery: React.FC<EntornoGalleryProps> = ({ isOpen, onClose }) => {
  const [tab, setTab] = React.useState<'instagram' | 'gallery'>('instagram');
  const [images, setImages] = React.useState<EntornoImage[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [selected, setSelected] = React.useState<EntornoImage | null>(null);
  const [embedKey, setEmbedKey] = React.useState(0);

  React.useEffect(() => {
    if (!isOpen) return;
    setTab('instagram');
    setSelected(null);
    setEmbedKey((k) => k + 1);
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
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] flex items-center justify-center">
            <Instagram className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white font-['Cormorant_Garamond',Georgia,serif]">Entorno El Viaje Por Chile</h3>
            <p className="text-xs text-white/50">Instagram @{INSTAGRAM_USER} · galería del entorno</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] text-white hover:opacity-90 transition-opacity"
          >
            <Instagram className="w-3.5 h-3.5" />
            Seguir
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 px-5 py-3 border-b border-white/10 bg-black">
        <button
          onClick={() => setTab('instagram')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors ${
            tab === 'instagram'
              ? 'bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] text-white'
              : 'text-white/50 hover:text-white hover:bg-white/5'
          }`}
        >
          <Instagram className="w-3.5 h-3.5" />
          Instagram @{INSTAGRAM_USER}
        </button>
        <button
          onClick={() => setTab('gallery')}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors ${
            tab === 'gallery'
              ? 'bg-white/15 text-white'
              : 'text-white/50 hover:text-white hover:bg-white/5'
          }`}
        >
          <Images className="w-3.5 h-3.5" />
          Fotos del entorno
        </button>
      </div>

      {/* Instagram feed */}
      {tab === 'instagram' && (
        <div className="flex-1 flex flex-col items-center px-4 sm:px-8 py-6 overflow-y-auto">
          <div className="w-full max-w-xl flex-1 min-h-[480px] flex flex-col">
            <iframe
              key={embedKey}
              src={INSTAGRAM_EMBED_URL}
              title={`Instagram @${INSTAGRAM_USER}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="flex-1 w-full rounded-sm bg-neutral-950 border border-white/10"
            />
          </div>
          <p className="text-xs text-white/40 text-center mt-3 max-w-md">
            Publicaciones recientes de @{INSTAGRAM_USER}. Descubre el entorno y la experiencia
            El Viaje Por Chile en Instagram.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-gradient-to-tr from-[#833AB4] via-[#E1306C] to-[#F77737] text-white hover:opacity-90 transition-opacity"
          >
            <Instagram className="w-3.5 h-3.5" />
            Abrir @{INSTAGRAM_USER} en Instagram
            <ExternalLink className="w-3 h-3 opacity-80" />
          </a>
        </div>
      )}

      {/* Gallery */}
      {tab === 'gallery' && (
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
      )}

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
