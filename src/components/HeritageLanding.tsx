import React from 'react';
import { Feather, Compass, Sparkles, Map, ExternalLink, Users, Landmark, Bug } from 'lucide-react';

interface LandingImage {
  url: string;
  title: string;
  caption: string;
  icon: React.ReactNode;
  tall?: boolean;
}

// Fotografías de dominio público / Creative Commons vía Wikimedia Commons
const LANDING_IMAGES: LandingImage[] = [
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/G%C3%A9iseres_del_Tatio%2C_Atacama%2C_Chile%2C_2016-02-01%2C_DD_36-38_HDR.JPG/960px-G%C3%A9iseres_del_Tatio%2C_Atacama%2C_Chile%2C_2016-02-01%2C_DD_36-38_HDR.JPG',
    title: 'Viajes por Chile',
    caption: 'Géiseres del Tatio, Atacama: rutas que se recorren con todos los sentidos.',
    icon: <Compass className="w-4 h-4" />,
    tall: true,
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Libellula_depressa.jpg/640px-Libellula_depressa.jpg',
    title: 'Libélulas',
    caption: 'Observadoras de humedales y esteros: indicadores vivos del equilibrio del territorio.',
    icon: <Bug className="w-4 h-4" />,
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Andean_condor_%28Vultur_gryphus%29_male_in_flight_Farellones.jpg/960px-Andean_condor_%28Vultur_gryphus%29_male_in_flight_Farellones.jpg',
    title: 'Fauna nativa',
    caption: 'El cóndor andino surca los cielos de la cordillera como guardián de los Andes.',
    icon: <Landmark className="w-4 h-4" />,
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Lapageria_rosea_-_Copihue_Flor_Nacional.jpg/640px-Lapageria_rosea_-_Copihue_Flor_Nacional.jpg',
    title: 'Flora nativa',
    caption: 'El copihue, flor nacional de Chile, florece en los bosques de la cordillera de la Costa.',
    icon: <Sparkles className="w-4 h-4" />,
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Chile_topographic_location_map.png/512px-Chile_topographic_location_map.png',
    title: 'Mapa de Chile',
    caption: 'Un solo país, más de 4.000 km de paisajes: del desierto de Atacama a la Patagonia.',
    icon: <Map className="w-4 h-4" />,
    tall: true,
  },
];

const FALLBACK_IMG =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Palafitos_de_Castro%2C_Chilo%C3%A9.jpg/1280px-Palafitos_de_Castro%2C_Chilo%C3%A9.jpg';

const PLATFORM_URL = 'https://www.interpretaciondelpatrimonio.cl';
const ELVIAJE_URL = 'https://www.elviaje.cl';

export const HeritageLanding: React.FC = () => {
  const [imgFailed, setImgFailed] = React.useState<Record<number, boolean>>({});

  const scrollToTours = () => {
    document.getElementById('rutas-chile')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative">
      {/* ------------------------------------------------ */}
      {/* Invitación: nueva generación de intérpretes      */}
      {/* ------------------------------------------------ */}
      <div className="bg-gradient-to-br from-[#14281C] via-[#1D3626] to-[#223F2C] text-white py-14 sm:py-20 px-4 sm:px-6 relative overflow-hidden border-b border-[#2A4533]">
        {/* Dragonfly motif dot-grid */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8A58B_1.5px,transparent_1.5px)] [background-size:22px_22px]" />
        <div className="absolute -right-10 -top-10 w-52 h-52 rounded-full bg-[#B04E2A]/20 blur-3xl" />
        <div className="absolute -left-10 -bottom-10 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#E8A58B] border border-[#B04E2A]/40 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            <Feather className="w-3.5 h-3.5" />
            Una nueva generación
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight font-['Cormorant_Garamond',Georgia,serif]">
            Sé parte de una nueva generación de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A58B] via-[#D97A46] to-[#FBBF24]">
              intérpretes del patrimonio
            </span>{' '}
            y diseñadores de experiencias en{' '}
            <span className="text-[#E8A58B]">El Viaje Por Chile</span>
          </h2>

          <p className="text-sm sm:text-lg text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Únete a una <strong className="text-white">red que reúne el trabajo de intérpretes de todo Chile</strong>:
            audioguías, rutas autoguiadas, guías de campo y relatos sonoros que descifran el espíritu
            de cada lugar, publicados en{' '}
            <a href={PLATFORM_URL} target="_blank" rel="noopener noreferrer" className="text-[#E8A58B] underline hover:text-white transition-colors">
              www.interpretaciondelpatrimonio.cl
            </a>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={scrollToTours}
              className="flex items-center gap-2 px-6 py-3 bg-[#B04E2A] hover:bg-[#9A3F1E] text-white font-bold text-sm rounded-2xl shadow-lg shadow-[#B04E2A]/30 hover:scale-105 active:scale-95 transition-all"
            >
              <Compass className="w-4 h-4" />
              <span>Explorar las rutas de Chile</span>
            </button>
            <a
              href={ELVIAJE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-2xl border border-white/20 backdrop-blur-sm transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>Quiero sumarme a la red</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------ */}
      {/* Mosaico: el Chile que interpretamos              */}
      {/* ------------------------------------------------ */}
      <div className="bg-[#F6F1E5] py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-2 max-w-3xl mx-auto">
            <span className="cerro-overline text-xs text-[#B04E2A]">El territorio que interpretamos</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              Viajes, libélulas, animales y plantas nativas de Chile
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Cada ruta invita a observar la vida silvestre, las especies endémicas y los
              paisajes que guardan la memoria del país.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {LANDING_IMAGES.map((img, i) => (
              <figure
                key={img.title}
                className={`relative group overflow-hidden rounded-2xl border-2 border-white shadow-lg ${
                  img.tall ? 'aspect-[3/4] row-span-2' : 'aspect-square'
                }`}
              >
                {!imgFailed[i] ? (
                  <img
                    src={img.url}
                    alt={img.caption}
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={() => setImgFailed((p) => ({ ...p, [i]: true }))}
                  />
                ) : (
                  <img
                    src={FALLBACK_IMG}
                    alt={img.caption}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#14281C]/95 via-[#14281C]/25 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-3 sm:p-4 text-white">
                  <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#E8A58B] mb-1">
                    {img.icon}
                    <span>{img.title}</span>
                  </span>
                  <p className="text-[11px] sm:text-xs leading-snug opacity-90">{img.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="text-center text-[10px] text-slate-400">
            Fotografías: Wikimedia Commons (dominio público y licencias Creative Commons).
          </p>
        </div>
      </div>

      {/* ------------------------------------------------ */}
      {/* Red nacional de intérpretes                       */}
      {/* ------------------------------------------------ */}
      <div className="bg-[#14281C] text-white py-12 sm:py-14 px-4 sm:px-6 border-t border-[#2A4533]">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#E8A58B] text-[11px] font-bold uppercase tracking-widest">
              <Users className="w-3.5 h-3.5" />
              Red de intérpretes de todo Chile
            </span>
            <h3 className="text-xl sm:text-3xl font-bold font-['Cormorant_Garamond',Georgia,serif]">
              El trabajo de intérpretes de todo el país, reunido en un solo lugar
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Publica tus rutas, audioguías y guías de campo, y forma parte de la plataforma
              editorial de{' '}
              <a href={ELVIAJE_URL} target="_blank" rel="noopener noreferrer" className="text-[#E8A58B] underline hover:text-white">
                El Viaje Por Chile
              </a>{' '}
              en{' '}
              <span className="text-[#E8A58B] font-semibold">{PLATFORM_URL}</span>.
            </p>
          </div>
          <a
            href={PLATFORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#B04E2A] to-[#D97706] hover:from-[#9A3F1E] hover:to-[#B45309] text-white font-bold text-sm rounded-2xl shadow-lg shadow-[#B04E2A]/30 transition-all whitespace-nowrap"
          >
            <Landmark className="w-4 h-4" />
            <span>Unirme a www.interpretaciondelpatrimonio.cl</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>
      </div>
    </section>
  );
};