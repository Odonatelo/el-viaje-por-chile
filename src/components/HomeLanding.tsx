import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Compass,
  Feather,
  MapPin,
  Sparkles,
  Users,
  ShieldCheck,
  Radio,
  Instagram,
  BookOpen,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { Tour } from '../types';

interface HomeLandingProps {
  tours: Tour[];
  onSelectTour: (tour: Tour) => void;
  onExploreAll: () => void;
  onOpenConsultingModal: () => void;
  onOpenMembershipModal: () => void;
  onOpenAchpiModal: () => void;
}

const FALLBACK_COVER =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Palafitos_de_Castro%2C_Chilo%C3%A9.jpg/1280px-Palafitos_de_Castro%2C_Chilo%C3%A9.jpg';

// Flor de la vida: 19 círculos del patrón hexagonal sagrado (coordenadas unitarias)
const FLOWER_CIRCLES: Array<[number, number]> = [
  [0, 0],
  [1, 0], [0.5, -0.866], [-0.5, -0.866], [-1, 0], [-0.5, 0.866], [0.5, 0.866],
  [2, 0], [1.5, -0.866], [1, -1.732], [0, -1.732], [-1, -1.732], [-1.5, -0.866],
  [-2, 0], [-1.5, 0.866], [-1, 1.732], [0, 1.732], [1, 1.732], [1.5, 0.866],
];

export const HomeLanding: React.FC<HomeLandingProps> = ({
  tours,
  onSelectTour,
  onExploreAll,
  onOpenConsultingModal,
  onOpenMembershipModal,
  onOpenAchpiModal,
}) => {
  const featured = tours.slice(0, 3);

  // Marca sonora del viaje — se activa al abrir la landing
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [soundOn, setSoundOn] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const a = new window.Audio('/sound/marca-sonora.wav');
    a.loop = true;
    a.preload = 'auto';
    a.volume = 0.55;
    audioRef.current = a;
    const attempt = () => {
      if (!audioRef.current) return;
      audioRef.current.currentTime = 0;
      audioRef.current.play().then(() => setSoundOn(true)).catch(() => undefined);
    };
    attempt();
    const onFirstGesture = () => attempt();
    window.addEventListener('pointerdown', onFirstGesture, { once: true });
    window.addEventListener('keydown', onFirstGesture, { once: true });
    return () => {
      window.removeEventListener('pointerdown', onFirstGesture);
      window.removeEventListener('keydown', onFirstGesture);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = '';
        audioRef.current = null;
      }
    };
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) return;
    if (soundOn) {
      audioRef.current.pause();
      setSoundOn(false);
    } else {
      audioRef.current.currentTime = 0;
      audioRef.current.play().then(() => setSoundOn(true)).catch(() => undefined);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F1] text-[#17120D] font-sans">

      {/* Marca sonora: control on/off */}
      <button
        onClick={toggleSound}
        className={`fixed top-4 right-4 z-50 flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-bold uppercase tracking-widest backdrop-blur transition-all active:scale-95 ${soundOn
          ? 'border-[#B04E2A]/40 bg-black/60 text-[#F5F1E8] hover:border-[#B04E2A]'
          : 'border-white/25 bg-black/40 text-[#F5F1E8] hover:border-white/60 hover:bg-black/60'}`}
        aria-label={soundOn ? 'Apagar la marca sonora' : 'Activar la marca sonora'}
      >
        {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
        {soundOn ? 'Sonido on' : 'Activar sonido'}
      </button>

      {/* ============================================================
          HERO — blanco y negro, diagnóstico libélula
          ============================================================ */}
      <section className="relative bg-[#0B0A08] text-[#F5F1E8] overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(rgba(245,241,232,0.06) 1px, transparent 1px)', backgroundSize: '26px 26px' }} />

        {/* Flor de la vida — fondo sutil */}
        <div className="absolute inset-0 flex items-start justify-center overflow-hidden pointer-events-none">
          <svg
            className="w-[135vw] max-w-[1500px] shrink-0 mx-auto"
            style={{ marginTop: '-8%' }}
            viewBox="-2.4 -2.4 4.8 4.8"
            fill="none"
            aria-hidden="true"
          >
            <g stroke="#F5F1E8" strokeWidth="0.045" opacity="0.05">
              {FLOWER_CIRCLES.map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="1" />
              ))}
            </g>
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center space-y-8">

          <div className="relative w-32 h-32 sm:w-36 sm:h-36 mx-auto flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(245,241,232,0.32),rgba(245,241,232,0.10)_45%,transparent_72%)] blur-xl pointer-events-none" />
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-black border border-white/20 p-3 shadow-2xl shadow-black/60 flex items-center justify-center">
              <img
                src="/entorno/Recurso-6.png"
                alt="Logo El Viaje por Chile — libélula"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.35em] text-white/60">
              El viaje como obra de diseño
            </p>
            <h1 className="font-['Cormorant_Garamond',Georgia,serif] italic text-5xl sm:text-7xl text-[#F5F1E8] tracking-tight leading-none">
              El Viaje <span className="text-white/80">por Chile</span>
            </h1>
            <p className="text-sm sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed font-light">
              Propuesta <em className="font-['Cormorant_Garamond',Georgia,serif] italic text-white">Tailor Made</em> para recorrer el
              territorio: una comunidad de intérpretes del patrimonio y una consultoría
              especializada que diseña experiencias a medida —para otros y para nosotros mismos—
              porque el viaje no solo se descubre e interpreta, también se diseña.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onExploreAll}
              className="flex items-center gap-2 px-6 py-3 bg-[#F5F1E8] text-[#0B0A08] font-bold text-sm rounded-full hover:bg-white active:scale-95 transition-all shadow-lg"
            >
              <Compass className="w-4 h-4" />
              Explorar el Territorio
            </button>
            <button
              onClick={onOpenConsultingModal}
              className="flex items-center gap-2 px-6 py-3 bg-transparent text-[#F5F1E8] font-bold text-sm rounded-full border border-white/30 hover:border-white hover:bg-white/10 active:scale-95 transition-all"
            >
              <Feather className="w-4 h-4" />
              Diseñar mi Viaje
            </button>
          </div>

          <p className="text-[11px] text-white/40 font-medium tracking-wide">
            La libélula elige su propio camino: interpretamos cada lugar como una obra única y
            diseñamos la experiencia que cabe para quien la vive.
          </p>
        </div>
      </section>

      {/* ============================================================
          MANIFIESTO — el diseño es parte de nuestro viaje
          ============================================================ */}
      <section className="bg-[#FAF7F1] text-[#17120D]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <img
            src="/images/el-diseno-es-parte-del-viaje.png"
            alt="El diseño es parte de nuestro viaje"
            className="mx-auto mb-10 w-full max-w-2xl rounded-2xl shadow-sm object-contain"
          />
          <span className="inline-block w-px h-10 bg-[#0B0A08]/30" />
          <h2 className="mt-6 font-['Cormorant_Garamond',Georgia,serif] italic text-3xl sm:text-5xl text-[#17120D] leading-snug">
            «El diseño es parte de nuestro viaje.»
          </h2>
          <p className="mt-6 text-sm sm:text-base text-[#17120D]/70 max-w-2xl mx-auto leading-relaxed">
            Cada recorrido de <strong className="text-[#17120D]">El Viaje por Chile</strong> se traza como se traza una ruta de
            diseño: se escucha el territorio, se lee su memoria natural y cultural, y se da forma a
            una experiencia precisa. No publicamos lugares: <strong className="text-[#17120D]">diseñamos encuentros</strong> entre
            las personas y el paisaje chileno.
          </p>
        </div>
      </section>

      {/* ============================================================
          TAILOR MADE — tres trazos del método
          ============================================================ */}
      <section className="bg-[#17120D] text-[#F5F1E8] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-white/50">
              Tailor Made · A medida
            </p>
            <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-3xl sm:text-5xl">
              Un viaje para cada persona, <em className="italic text-white/85">cortado a la medida del territorio</em>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                icon: <MapPin className="w-5 h-5" />,
                title: 'Escuchamos el territorio',
                body: 'Cerros, bosques, caletas, iglesias y comunidades: leemos los significados ocultos de cada paisaje, siguiendo el arte de la interpretación del patrimonio.',
              },
              {
                icon: <Users className="w-5 h-5" />,
                title: 'Intérpretes en comunidad',
                body: 'Una comunidad viva de intérpretes del patrimonio de Chile cocrea, publica y valida rutas y sonoridades reales para el viajero.',
              },
              {
                icon: <Feather className="w-5 h-5" />,
                title: 'Diseñamos la experiencia',
                body: 'Audioguías, guías de campo, mapas y narrativas sonoras: prototipamos el viaje y lo afinamos hasta que encaje con quien lo vivirá.',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="group bg-white/[0.04] border border-white/10 rounded-3xl p-6 hover:bg-white/[0.08] hover:border-white/25 transition-all space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="w-11 h-11 rounded-2xl bg-[#F5F1E8] text-[#17120D] grid place-items-center">
                    {item.icon}
                  </span>
                  <span className="font-['Cormorant_Garamond',Georgia,serif] italic text-2xl text-white/25">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          COMUNIDAD — comunidad de intérpretes del patrimonio
          ============================================================ */}
      <section className="bg-[#0B0A08] text-[#F5F1E8] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white/80 text-[11px] font-bold uppercase tracking-widest border border-white/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              Comunidad de Intérpretes del Patrimonio
            </div>
            <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-3xl sm:text-5xl leading-tight">
              Viajar despierta el país. <em className="italic text-white/85">Interpretarlo lo vuelve memoria.</em>
            </h2>
            <p className="text-sm sm:text-base text-white/65 leading-relaxed">
              Invitamos a guías, aficionados, comunidades locales y creadores a inscribirse en la
              Asociación Chilena Para La Interpretación del Patrimonio (ACHPI): formaliza tu
              quehacer, recibe tu código de miembro y publica tus rutas con narraciones sonoras en
              la plataforma.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenAchpiModal}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#F5F1E8] text-[#0B0A08] text-xs font-bold rounded-full hover:bg-white active:scale-95 transition-all"
              >
                <Users className="w-4 h-4" />
                Solicitar Inscripción ACHPI
              </button>
              <button
                onClick={onOpenMembershipModal}
                className="px-5 py-2.5 bg-transparent text-[#F5F1E8] text-xs font-bold rounded-full border border-white/30 hover:border-white hover:bg-white/10 transition-all"
              >
                Membresía de la Plataforma
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] border border-white/10" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white/[0.05] border border-white/10 rounded-3xl p-5">
                  <p className="font-['Cormorant_Garamond',Georgia,serif] italic text-2xl">«10 mil historias por cada parada.»</p>
                  <p className="mt-2 text-[11px] text-white/50">
                    Cada ruta es un relato: audioguías con IA, cartografía y guías de campo.
                  </p>
                </div>
                <div className="bg-white/[0.05] border border-white/10 rounded-3xl p-5">
                  <p className="font-['Cormorant_Garamond',Georgia,serif] italic text-2xl">«Donde pisa la libélula, hay agua.»</p>
                  <p className="mt-2 text-[11px] text-white/50">
                    Donde se diseña el viaje, el territorio se vuelve experiencia.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/[0.05] border border-white/10 rounded-3xl p-5">
                  <p className="text-4xl">01</p>
                  <p className="mt-1 text-xs text-white/60">Inscríbete y recibe tu código de miembro</p>
                </div>
                <div className="bg-white/[0.05] border border-white/10 rounded-3xl p-5">
                  <p className="text-4xl">10</p>
                  <p className="mt-1 text-xs text-white/60">rutas publicadas como miembro ACHPI</p>
                </div>
                <div className="bg-white/[0.05] border border-white/10 rounded-3xl p-5">
                  <p className="text-4xl">50</p>
                  <p className="mt-1 text-xs text-white/60">rutas con membresía de la plataforma</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CONSULTORÍA — para otros y para nosotros mismos
          ============================================================ */}
      <section className="bg-[#FAF7F1] text-[#17120D] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#17120D]/50">
              Consultoría Especializada
            </p>
            <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-3xl sm:text-5xl">
              Diseñamos experiencias <em className="italic">para otros — y para nosotros mismos.</em>
            </h2>
            <p className="text-sm sm:text-base text-[#17120D]/70 leading-relaxed">
              La consultoría de El Viaje por Chile aplica la metodología de interpretación del
              patrimonio y el prototipado con audioguías. Cada encargo es un doble viaje: la obra
              que entregamos a quien la encarga, y el aprendizaje que enriquece nuestro propio
              viaje de diseño.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#17120D] text-[#F5F1E8] rounded-3xl p-8 space-y-5 border border-transparent">
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-2xl bg-[#F5F1E8] text-[#17120D] grid place-items-center">
                  <BookOpen className="w-5 h-5" />
                </span>
                <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-2xl">Para otros</h3>
              </div>
              <p className="text-sm text-white/65 leading-relaxed">
                Diseñamos experiencias patrimoniales, audioguías, rutas y guiones interpretativos
                para operadores turísticos, municipios, fundaciones y viajeros que quieren vivir
                Chile con sentido.
              </p>
              <button
                onClick={onOpenConsultingModal}
                className="flex items-center gap-2 text-xs font-bold text-[#F5F1E8] group"
              >
                <Feather className="w-4 h-4" />
                <span className="border-b border-white/40 group-hover:border-white transition-colors">
                  Agendar consultoría
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="bg-white text-[#17120D] rounded-3xl p-8 space-y-5 border border-[#17120D]/10">
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-2xl bg-[#17120D] text-[#F5F1E8] grid place-items-center">
                  <Sparkles className="w-5 h-5" />
                </span>
                <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-2xl">Para nosotros mismos</h3>
              </div>
              <p className="text-sm text-[#17120D]/70 leading-relaxed">
                Cada experiencia que diseñamos también es nuestra propia búsqueda: territorios que
                exploramos, relatos que ensayamos y métodos que pulimos. Por eso el diseño no es un
                encargo: <strong className="text-[#17120D]">es parte de nuestro viaje.</strong>
              </p>
              <button
                onClick={onOpenConsultingModal}
                className="flex items-center gap-2 text-xs font-bold text-[#17120D] group"
              >
                <MapPin className="w-4 h-4" />
                <span className="border-b border-[#17120D]/40 group-hover:border-[#17120D] transition-colors">
                  Conocer la metodología
                </span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TERRITORIO — rutas del momento
          ============================================================ */}
      <section className="bg-[#17120D] text-[#F5F1E8] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl space-y-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-white/50">
                El territorio, en marcha
              </p>
              <h2 className="font-['Cormorant_Garamond',Georgia,serif] text-3xl sm:text-5xl">
                Rutas diseñadas <em className="italic text-white/85">por la comunidad</em>
              </h2>
            </div>
            <button
              onClick={onExploreAll}
              className="hidden sm:flex items-center gap-2 text-xs font-bold text-white/70 hover:text-white border border-white/25 rounded-full px-5 py-2.5 hover:border-white hover:bg-white/10 transition-all"
            >
              Ver todas las rutas
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {featured.map((tour) => (
              <button
                key={tour.id}
                onClick={() => onSelectTour(tour)}
                className="group text-left bg-white/[0.04] border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 hover:bg-white/[0.07] transition-all"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={tour.coverImage}
                    alt={tour.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = FALLBACK_COVER; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17120D]/85 to-transparent" />
                  <span className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs font-bold text-[#F5F1E8]">
                    <MapPin className="w-3.5 h-3.5" />
                    {tour.city}, {tour.country}
                  </span>
                </div>
                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-2">
                    {tour.cmsTourId && (
                      <span className="flex items-center gap-1 text-[10px] font-mono font-bold text-white/50">
                        <Radio className="w-2.5 h-2.5" />
                        #{tour.cmsTourId}
                      </span>
                    )}
                    <span className="text-[10px] uppercase tracking-widest text-white/40">
                      {tour.category}
                    </span>
                  </div>
                  <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-xl font-semibold group-hover:text-white transition-colors">
                    {tour.title}
                  </h3>
                  <p className="text-xs text-white/55 line-clamp-2 leading-relaxed">
                    {tour.tagline || tour.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <button
            onClick={onExploreAll}
            className="mt-8 sm:hidden w-full flex items-center justify-center gap-2 text-xs font-bold text-white/80 border border-white/25 rounded-full py-3 hover:bg-white/10 transition-all"
          >
            Ver todas las rutas
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* ============================================================
          CIERRE — el viaje empieza cuando lo diseñamos
          ============================================================ */}
      <section className="bg-[#0B0A08] text-[#F5F1E8] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center space-y-8">
          <img
            src="/entorno/Recurso-6.png"
            alt="Libélula — El Viaje por Chile"
            className="w-16 h-16 mx-auto rounded-full bg-black border border-white/15 p-2 object-contain"
          />
          <h2 className="font-['Cormorant_Garamond',Georgia,serif] italic text-3xl sm:text-5xl leading-tight">
            El viaje empieza cuando <span className="text-white/85">lo diseñamos</span>.
          </h2>
          <p className="text-sm sm:text-base text-white/60 max-w-xl mx-auto leading-relaxed">
            Únete a la comunidad, diseña tu propio recorrido con audioguías y guías de campo, o
            encarga una experiencia a medida con la consultoría de El Viaje por Chile.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onOpenConsultingModal}
              className="flex items-center gap-2 px-6 py-3 bg-[#F5F1E8] text-[#0B0A08] font-bold text-sm rounded-full hover:bg-white active:scale-95 transition-all"
            >
              <Feather className="w-4 h-4" />
              Diseñar mi Viaje
            </button>
            <button
              onClick={onOpenMembershipModal}
              className="px-6 py-3 bg-transparent text-[#F5F1E8] font-bold text-sm rounded-full border border-white/30 hover:border-white hover:bg-white/10 transition-all"
            >
              Hacerme miembro
            </button>
          </div>

          <div className="flex items-center justify-center gap-5 pt-4 text-[11px] font-semibold text-white/40">
            <a
              href="https://www.elviaje.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              www.elviaje.cl
            </a>
            <span className="text-white/20">•</span>
            <a
              href="https://instagram.com/elviaje.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" />
              @elviaje.cl
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};