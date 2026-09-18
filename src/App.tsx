import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Plus,
  Loader2,
  ExternalLink,
  Globe,
  BookOpen,
  Feather,
  Instagram,
  ShieldCheck,
  ClipboardCheck,
  Settings2,
} from 'lucide-react';
import { Tour, UserProfile, TourStop } from './types';
import { sampleTours } from './data/sampleTours';
import { CatalogView } from './components/CatalogView';
import { HomeLanding } from './components/HomeLanding';
import { TourDetailView } from './components/TourDetailView';
import { TourStudioView } from './components/TourStudioView';
import { FactibilidadGuide } from './components/FactibilidadGuide';
import { HeritageConsultingModal } from './components/HeritageConsultingModal';
import { MembershipModal } from './components/MembershipModal';
import { GoogleAuthModal } from './components/GoogleAuthModal';
import { QRCodeModal } from './components/QRCodeModal';
import { EntornoGallery } from './components/EntornoGallery';
import { AchpiInscriptionModal } from './components/AchpiInscriptionModal';
import { AchpiAdminModal } from './components/AchpiAdminModal';
import { AuthorizationModal } from './components/AuthorizationModal';
import { AdminPanel } from './components/AdminPanel';

export default function App() {
  const [tours, setTours] = useState<Tour[]>(sampleTours);
  type ViewMode = 'home' | 'catalog' | 'detail' | 'studio' | 'factibilidad' | 'admin';
  const [viewMode, setViewMode] = useState<ViewMode>(() =>
    window.location.pathname.startsWith('/factibilidad')
      ? 'factibilidad'
      : window.location.pathname === '/admin'
        ? 'admin'
        : window.location.pathname === '/explorar' || window.location.pathname === '/coleccion'
          ? 'catalog'
          : 'home',
  );
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [editingTour, setEditingTour] = useState<Tour | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [apiError, setApiError] = useState<string | null>(null);

  // User Authentication & Profile (sesión real vía Google OAuth en el servidor)
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);

  // Owner check (exclusive monetization config & collections)
  const [isOwner, setIsOwner] = useState<boolean>(false);

  // Dev-only flag (lets you auto-login as owner locally; disabled in production)
  const [devMode, setDevMode] = useState<boolean>(false);

  // ACHPI — Asociación Chilena Para La Interpretación del Patrimonio
  const [achpiStatus, setAchpiStatus] = useState<'none' | 'pending' | 'approved'>('none');
  const [achpiCode, setAchpiCode] = useState<string>('');
  const [routeLimit, setRouteLimit] = useState<number>(1);
  const [routeUsage, setRouteUsage] = useState<number>(0);
  const [showAchpiModal, setShowAchpiModal] = useState<boolean>(false);
  const [showAchpiAdminModal, setShowAchpiAdminModal] = useState<boolean>(false);
  const [achpiPendingCount, setAchpiPendingCount] = useState<number>(0);

  // Carga el contador de solicitudes ACHPI pendientes para el propietario (badge del header)
  useEffect(() => {
    if (!isOwner) {
      setAchpiPendingCount(0);
      return;
    }
    fetch('/api/achpi/inscriptions')
      .then((r) => r.json())
      .then((d) => {
        if (d.success) {
          setAchpiPendingCount(
            Array.isArray(d.inscriptions) ? d.inscriptions.filter((i: any) => i.status === 'pending').length : 0,
          );
        }
      })
      .catch(() => setAchpiPendingCount(0));
  }, [isOwner, showAchpiAdminModal]);

  const refreshUser = async () => {
    try {
      const res = await fetch('/api/auth/me');
      const data = await res.json();
      if (typeof data.devMode === 'boolean') setDevMode(data.devMode);
      if (data.success && data.user) {
        const u = data.user as UserProfile;
        setCurrentUser(u);
        setIsOwner(!!u.isOwner);
        setIsMember(u.memberType !== 'none');
        setMemberType(u.memberType);
        setAchpiStatus(u.achpiStatus || 'none');
        setAchpiCode(u.achpiCode || '');
        setRouteLimit(u.routeLimit ?? 1);
        setRouteUsage(u.routeUsage ?? 0);
      } else {
        setCurrentUser(null);
        setIsOwner(false);
        setIsMember(false);
        setMemberType('none');
        setAchpiStatus('none');
        setAchpiCode('');
        setRouteLimit(1);
        setRouteUsage(0);
      }
    } catch {
      setCurrentUser(null);
    }
  };

  useEffect(() => {
    refreshUser();
    const params = new URLSearchParams(window.location.search);
    if (params.get('auth_error')) {
      alert('No se pudo iniciar sesión con Google: ' + params.get('auth_error'));
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);
  const [showAuthModal, setShowAuthModal] = useState<boolean>(false);

  // Global QR Code modal state
  const [globalQrTour, setGlobalQrTour] = useState<Tour | null>(null);
  const [globalQrStop, setGlobalQrStop] = useState<TourStop | null>(null);
  const [showGlobalQrModal, setShowGlobalQrModal] = useState<boolean>(false);

  // Entorno (black-framed image gallery)
  const [showEntornoModal, setShowEntornoModal] = useState<boolean>(false);

  // Membership States
  const [isMember, setIsMember] = useState<boolean>(true);
  const [memberType, setMemberType] = useState<'none' | 'basic_free' | 'annual_paid' | 'consulting_free'>('none');
  const [showMembershipModal, setShowMembershipModal] = useState<boolean>(false);

  // Quick AI Modal
  const [showAiModal, setShowAiModal] = useState<boolean>(false);
  const [showConsultingModal, setShowConsultingModal] = useState<boolean>(false);
  const [aiTopic, setAiTopic] = useState('Interpretación de Cerros, Funiculares y Murales');
  const [aiCity, setAiCity] = useState('Valparaíso');
  const [aiStopsCount, setAiStopsCount] = useState(4);
  const [isGeneratingAiTour, setIsGeneratingAiTour] = useState(false);

  // ----------------------------------------------------
  // Load Tours from Server
  // ----------------------------------------------------
  const fetchTours = async () => {
    setIsLoading(true);
    setApiError(null);
    try {
      const res = await fetch('/api/tours');
      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.data) && data.data.length > 0) {
          setTours(data.data);
          setApiError(null);
        } else {
          // Fallback to sample tours
          setApiError('El servidor no devolvió rutas. Mostrando el catálogo de demostración local.');
          setTours(sampleTours);
        }
      } else {
        setApiError('No se pudieron cargar las rutas desde el servidor. Mostrando el catálogo de demostración local.');
        setTours(sampleTours);
      }
    } catch (err: any) {
      console.warn('Could not connect to /api/tours, using offline sample tours', err);
      setApiError('Sin conexión con el servidor. Mostrando el catálogo de demostración local.');
      setTours(sampleTours);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  // Scroll to top al cambiar entre vistas (catálogo / detalle / studio / factibilidad)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [viewMode]);

  // Navegación con URL real (SPA): /factibilidad abre la Guía de Factibilidad
  const navigateTo = (mode: ViewMode, path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setViewMode(mode);
  };

  // Sincroniza la vista cuando el usuario usa los botones atrás/adelante del navegador
  useEffect(() => {
    const onPopState = () =>
      setViewMode(
        window.location.pathname.startsWith('/factibilidad')
          ? 'factibilidad'
          : window.location.pathname === '/admin'
            ? 'admin'
            : window.location.pathname === '/explorar' || window.location.pathname === '/coleccion'
              ? 'catalog'
              : 'home',
      );
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  // ----------------------------------------------------
  // Save or Update Tour
  // ----------------------------------------------------
  const handleSaveTour = async (tour: Tour) => {
    try {
      const res = await fetch('/api/tours', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tour),
      });
      if (res.status === 401) {
        setShowAuthModal(true);
        alert('Inicia sesión con Google para publicar rutas.');
        return;
      }
      const data = await res.json();
      if (data.success) {
        // Update local state
        setTours(prev => {
          const index = prev.findIndex(t => t.id === tour.id);
          if (index >= 0) {
            const copy = [...prev];
            copy[index] = data.data;
            return copy;
          }
          return [data.data, ...prev];
        });
        setSelectedTour(data.data);
        setViewMode('detail');
      } else {
        alert(data.error || 'Error al guardar el tour');
        if (res.status === 403) {
          const msg = String(data.error || '');
          if (msg.toLowerCase().includes('restringido') || msg.toLowerCase().includes('autorizado')) {
            setShowAuthorizationModal(true);
          } else {
            setShowAchpiModal(true);
          }
        }
      }
    } catch (e: any) {
      console.error('Error saving tour:', e);
      // Fallback local update
      setTours(prev => {
        const index = prev.findIndex(t => t.id === tour.id);
        if (index >= 0) {
          const copy = [...prev];
          copy[index] = tour;
          return copy;
        }
        return [tour, ...prev];
      });
      setSelectedTour(tour);
      setViewMode('detail');
    }
  };

  // ----------------------------------------------------
  // Delete Tour
  // ----------------------------------------------------
  const handleDeleteTour = async (tourId: string) => {
    if (!window.confirm('¿Seguro que deseas eliminar este tour?')) return;

    try {
      await fetch(`/api/tours/${tourId}`, { method: 'DELETE' });
    } catch (e) {
      console.warn('Delete api error:', e);
    }

    setTours(prev => prev.filter(t => t.id !== tourId));
    if (selectedTour?.id === tourId) {
      setSelectedTour(null);
      setViewMode('catalog');
    }
  };

  // ----------------------------------------------------
  // Reset Tours to Sample Defaults
  // ----------------------------------------------------
  const handleResetTours = async () => {
    if (!window.confirm('¿Restaurar los tours a las rutas oficiales de muestra de El Viaje Por Chile?')) return;
    try {
      const res = await fetch('/api/tours/reset', { method: 'POST' });
      const data = await res.json();
      if (data.success && Array.isArray(data.data)) {
        setTours(data.data);
      } else {
        setTours(sampleTours);
      }
    } catch {
      setTours(sampleTours);
    }
  };

  // ----------------------------------------------------
  // AI Tour Generation (Quick from Topbar / Catalog)
  // ----------------------------------------------------
  const handleQuickAiGenerate = async () => {
    if (!aiCity || !aiTopic) {
      alert('Por favor ingresa la ciudad y la temática patrimonial de la ruta');
      return;
    }

    setIsGeneratingAiTour(true);
    try {
      const response = await fetch('/api/gemini/generate-tour-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: `${aiTopic} - Enfoque en Interpretación del Patrimonio Natural y Cultural`,
          city: aiCity,
          stopsCount: aiStopsCount,
          language: 'Español',
        }),
      });

      if (response.status === 401) {
        setShowAuthModal(true);
        alert('Inicia sesión con Google para usar la generación con IA.');
        return;
      }

      if (response.status === 403) {
        setShowAuthorizationModal(true);
        setAccessRequest({ intent: 'ai' });
        alert('El Generador con IA está disponible solo para miembros autorizados.');
        return;
      }

      const data = await response.json();
      if (data.success && data.plan) {
        const plan = data.plan;
        const newGeneratedTour: Tour = {
          id: `tour-ai-${Date.now()}`,
          title: plan.title,
          tagline: plan.tagline,
          description: plan.description,
          coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Cuernos_del_Paine%2C_Parque_Nacional_Torres_del_Paine%2C_Chile1.jpg/1280px-Cuernos_del_Paine%2C_Parque_Nacional_Torres_del_Paine%2C_Chile1.jpg',
          city: plan.city,
          country: plan.country,
          category: plan.category || 'history',
          language: 'Español',
          durationMinutes: plan.durationMinutes || 60,
          distanceKm: plan.distanceKm || 2.0,
          difficulty: plan.difficulty || 'easy',
          rating: 5.0,
          reviewsCount: 1,
          published: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          author: {
            name: 'Interpretación con IA • Tienda El Viaje',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
            role: 'Asistente de Interpretación Patrimonial',
            bio: 'Recorridos guiados por el territorio chileno con enfoque en el espíritu del lugar y observación consciente.',
            verified: true,
          },
          socialLinks: {
            website: 'https://www.tiendaelviaje.cl',
          },
          generalDocuments: [],
          stops: plan.stops.map((s: any, idx: number) => ({
            id: `stop-ai-${Date.now()}-${idx}`,
            order: idx + 1,
            title: s.title,
            subtitle: s.subtitle,
            category: s.category || 'monument',
            location: {
              lat: s.lat || -33.0422 + idx * 0.003,
              lng: s.lng || -71.6269 + idx * 0.003,
              address: s.address || `${s.title}, ${plan.city}, Chile`,
            },
            triggerRadiusMeters: 35,
            narrativeText: s.narrativeText,
            audio: {
              type: 'ai_generated',
              transcript: s.narrativeText,
              durationSeconds: 110,
              voiceName: 'Kore',
            },
            images: [
              {
                id: `img-${idx}`,
                url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Capillas_de_M%C3%A1rmol_adentro.JPG',
                caption: s.title,
                isPrimary: true,
              }
            ],
            trivia: s.trivia,
            tips: s.tips,
            documents: [],
            estimatedStayMinutes: s.estimatedStayMinutes || 15,
          })),
        };

        // Save and open in studio
        setTours(prev => [newGeneratedTour, ...prev]);
        setEditingTour(newGeneratedTour);
        setShowAiModal(false);
        setViewMode('studio');
      } else {
        alert(data.error || 'Error al generar tour');
      }
    } catch (e: any) {
      console.error('Error generating AI tour:', e);
      alert('Error de conexión');
    } finally {
      setIsGeneratingAiTour(false);
    }
  };

  // ----------------------------------------------------
  // Acceso al Studio y al Generador de Rutas (solo miembros autorizados)
  // ----------------------------------------------------
  const [showAuthorizationModal, setShowAuthorizationModal] = useState<boolean>(false);
  const [accessRequest, setAccessRequest] = useState<{ intent: 'studio' | 'ai' | 'edit'; tour?: Tour } | null>(null);

  const canUseStudio = isOwner || (!!currentUser && (isMember || achpiStatus === 'approved'));

  const requireAccess = (req: { intent: 'studio' | 'ai' | 'edit'; tour?: Tour }) => {
    if (!canUseStudio) {
      setAccessRequest(req);
      setShowAuthorizationModal(true);
      return false;
    }
    return true;
  };

  const handleOpenStudio = () => {
    if (!canUseStudio) {
      setAccessRequest({ intent: 'studio' });
      setShowAuthorizationModal(true);
      return;
    }
    // Límite gratuito de 1 ruta por cuenta (el propietario queda exento)
    if (!isOwner && currentUser) {
      const usage = routeUsage;
      const limit = routeLimit;
      if (usage >= limit) {
        setShowAchpiModal(true);
        return;
      }
    }
    setEditingTour(null);
    setViewMode('studio');
  };

  const handleOpenAiGenerator = () => {
    if (!canUseStudio) {
      setAccessRequest({ intent: 'ai' });
      setShowAuthorizationModal(true);
      return;
    }
    if (!isOwner && currentUser && routeUsage >= routeLimit) {
      setShowAchpiModal(true);
      return;
    }
    setShowAiModal(true);
  };

  const handleEditTour = (tour: Tour) => {
    if (!canUseStudio) {
      setAccessRequest({ intent: 'edit', tour });
      setShowAuthorizationModal(true);
      return;
    }
    setEditingTour(tour);
    setViewMode('studio');
  };

  const handleAccessGranted = () => {
    refreshUser();
    setShowAuthorizationModal(false);
    const req = accessRequest;
    setAccessRequest(null);
    // Re-ejecuta la acción que el usuario intentaba realizar
    setTimeout(() => {
      if (!req) return;
      if (req.intent === 'studio') {
        setEditingTour(null);
        setViewMode('studio');
      } else if (req.intent === 'ai') {
        setShowAiModal(true);
      } else if (req.intent === 'edit' && req.tour) {
        setEditingTour(req.tour);
        setViewMode('studio');
      }
    }, 120);
  };

  const renderCatalogView = () => (
    <CatalogView
      tours={tours}
      onSelectTour={(tour) => {
        setSelectedTour(tour);
        setViewMode('detail');
      }}
      onCreateNewTour={handleOpenStudio}
      onEditTour={handleEditTour}
      onDeleteTour={handleDeleteTour}
      onResetTours={handleResetTours}
      onOpenAIGenerator={handleOpenAiGenerator}
      onOpenConsultingModal={() => setShowConsultingModal(true)}
      onOpenMembershipModal={() => setShowMembershipModal(true)}
      onOpenAchpiModal={() => setShowAchpiModal(true)}
      onOpenAchpiAdminModal={() => setShowAchpiAdminModal(true)}
      onOpenQRCode={(tour) => {
        setGlobalQrTour(tour);
        setGlobalQrStop(null);
        setShowGlobalQrModal(true);
      }}
      isMember={isMember}
      isOwner={isOwner}
      currentUser={currentUser}
      achpiStatus={achpiStatus}
      achpiCode={achpiCode}
      routeLimit={routeLimit}
      routeUsage={routeUsage}
    />
  );

  return (
    <div className="min-h-screen bg-[#F6F1E5] text-slate-900 flex flex-col font-sans selection:bg-[#B04E2A] selection:text-white">
      
      {/* Top Banner: Domain & Heritage Consulting Bar */}
      <div className="bg-[#101F16] text-slate-300 text-xs px-4 sm:px-6 py-1.5 border-b border-[#223F2C] flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-black p-1 flex items-center justify-center border border-white/10 shadow-sm">
            <img
              src="/entorno/Recurso-6.png"
              alt="El Viaje Por Chile"
              className="w-full h-full object-contain rounded-md"
            />
          </div>
          <span className="hidden sm:inline text-slate-400">
            Plataforma Oficial de El Viaje
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowConsultingModal(true)}
            className="flex items-center gap-1.5 text-xs font-bold text-[#E8A58B] hover:text-white transition-colors"
          >
            <Feather className="w-3.5 h-3.5" />
            <span>Consultoría en Interpretación</span>
          </button>
          <span className="text-slate-600">|</span>
          <a
            href="https://www.elviaje.cl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-[#E8A58B] transition-colors"
          >
            <span>www.elviaje.cl</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Global Brand Navigation Bar - El Viaje Por Chile */}
      <header className="bg-[#14281C] text-white sticky top-0 z-40 border-b border-[#2A4533] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          
          {/* Logo & Platform Name */}
          <div 
            onClick={() => navigateTo('home', '/')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-12 h-12 rounded-2xl bg-black p-1 flex items-center justify-center shadow-lg shadow-black/40 group-hover:scale-105 transition-transform border border-white/10">
              <img
                src="/entorno/Recurso-6.png"
                alt="El Viaje Por Chile"
                className="w-full h-full object-contain rounded-[14px]"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base sm:text-lg tracking-tight text-white font-['Cormorant_Garamond',Georgia,serif]">
                  El Viaje <span className="text-[#D97A46]">Por Chile</span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#B04E2A]/20 text-[#E8A58B] border border-[#B04E2A]/40">
                  www.interpretaciondelpatrimonio.cl
                </span>
              </div>
              <p className="text-[10px] text-slate-300 font-medium hidden sm:block">
                Audioguías & Interpretación del Patrimonio Natural y Cultural
              </p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigateTo('catalog', '/explorar')}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                viewMode === 'catalog'
                  ? 'bg-[#B04E2A] text-white shadow-md shadow-[#B04E2A]/30'
                  : 'text-slate-300 hover:text-white hover:bg-[#223F2C]'
              }`}
            >
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">Explorar Rutas</span>
            </button>

            <button
              onClick={() => navigateTo('factibilidad', '/factibilidad')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                viewMode === 'factibilidad'
                  ? 'bg-[#B04E2A] text-white shadow-md shadow-[#B04E2A]/30'
                  : 'text-slate-300 hover:text-white hover:bg-[#223F2C]'
              }`}
              title="Guía de Factibilidad: diseña tu experiencia y prototípala con audioguías"
            >
              <ClipboardCheck className="w-4 h-4 text-[#E8A58B]" />
              <span className="hidden lg:inline">Factibilidad</span>
            </button>

            <button
              onClick={() => setShowMembershipModal(true)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-[#1D3626] hover:bg-[#2E4E37] text-[#E8A58B] border border-[#B04E2A]/40 shadow-sm transition-all"
              title="Membresía plataforma o gratis por consultoría patrimonial: sube hasta 50 rutas"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="hidden md:inline">¡Hazte Miembro!</span>
            </button>

            {!isOwner && (
              <button
                onClick={() => setShowAchpiModal(true)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-[#223F2C] transition-all"
                title="Solicita tu inscripción a la Asociación Chilena Para La Interpretación del Patrimonio (ACHPI)"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#E8A58B]" />
                <span className="hidden md:inline">ACHPI</span>
              </button>
            )}

            <button
              onClick={() => setShowEntornoModal(true)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-[#223F2C] transition-all"
              title="Instagram @elviaje.cl — novedades, fotos y entorno"
            >
              <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
              <span className="hidden md:inline">Síguenos en Instagram</span>
            </button>

            {isOwner && (
              <button
                onClick={() => setShowAchpiAdminModal(true)}
                className="relative flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-[#1D3626] hover:bg-[#2E4E37] text-[#E8A58B] border border-[#B04E2A]/40 transition-all"
                title="Panel ACHPI: revisa solicitudes de inscripción y entrega códigos de miembro"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#E8A58B]" />
                <span className="hidden md:inline">ACHPI</span>
                {achpiPendingCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full bg-[#B04E2A] text-white text-[10px] font-extrabold grid place-items-center border-2 border-[#14281C]">
                    {achpiPendingCount}
                  </span>
                )}
              </button>
            )}

            {isOwner && (
              <button
                onClick={() => navigateTo('admin', '/admin')}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                  viewMode === 'admin'
                    ? 'bg-[#B04E2A] text-white shadow-md shadow-[#B04E2A]/30'
                    : 'text-slate-300 hover:text-white hover:bg-[#223F2C]'
                }`}
                title="Panel de administración: usuarios, miembros, inscripciones ACHPI y rutas"
              >
                <Settings2 className="w-4 h-4 text-[#E8A58B]" />
                <span className="hidden lg:inline">Administración</span>
              </button>
            )}

            <button
              onClick={() => setShowConsultingModal(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white hover:bg-[#223F2C] transition-all"
            >
              <BookOpen className="w-4 h-4 text-[#E8A58B]" />
              <span className="hidden xl:inline">Consulta a un Experto</span>
            </button>

            <button
              onClick={handleOpenStudio}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-[#B04E2A] to-[#D97706] hover:from-[#9A3F1E] hover:to-[#B45309] text-white shadow-md shadow-[#B04E2A]/30 transition-all"
              title="Ambiente de edición: Studio de Rutas"
            >
              <Plus className="w-4 h-4" />
              <span>Studio</span>
            </button>

            <button
              onClick={handleOpenAiGenerator}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-[#B04E2A] to-[#D97706] hover:from-[#9A3F1E] hover:to-[#B45309] text-white shadow-md shadow-[#B04E2A]/20 transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span className="hidden md:inline">Generar con IA</span>
            </button>

            {/* Google Account Profile Button */}
            <button
              onClick={() => setShowAuthModal(true)}
              className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-xl bg-[#1D3626] hover:bg-[#2E4E37] border border-[#40624A] transition-all ml-1"
              title="Cuenta Google & Credenciales de Creador"
            >
              {currentUser ? (
                <>
                  <img
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    className="w-6 h-6 rounded-full object-cover border border-[#B04E2A]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="text-left hidden lg:block">
                    <span className="text-[11px] font-bold text-white block leading-tight truncate max-w-[100px]">
                      {currentUser.name.split(' ')[0]}
                    </span>
                    <span className="text-[9px] text-[#E8A58B] font-semibold block leading-none">
                      {currentUser.role === 'admin' ? 'Admin' : 'Creador'}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#14281C] font-bold text-xs">
                    G
                  </div>
                  <span className="text-xs font-bold text-slate-200">Acceder</span>
                </>
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Aviso de modo sin conexión / catálogo de demostración */}
      {apiError && (
        <div className="bg-amber-100 border-b border-amber-300 text-amber-900 text-xs px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3">
          <span className="font-semibold flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            {apiError}
          </span>
          <button
            onClick={() => setApiError(null)}
            className="font-extrabold hover:bg-amber-200 rounded-lg px-2 py-1 transition-colors"
            aria-label="Cerrar aviso"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Views Switcher */}
      <div className="flex-1">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
            <Loader2 className="w-10 h-10 text-[#B04E2A] animate-spin" />
            <p className="text-sm font-semibold text-slate-700">Cargando rutas de interpretación patrimonial de Chile...</p>
          </div>
        ) : viewMode === 'detail' && selectedTour ? (
          <TourDetailView
            tour={selectedTour}
            onBack={() => setViewMode('catalog')}
            onEditTour={handleEditTour}
          />
        ) : viewMode === 'studio' ? (
          <TourStudioView
            initialTour={editingTour}
            onSaveTour={handleSaveTour}
            onCancel={() => setViewMode('catalog')}
            onPreviewTour={(tour) => {
              setSelectedTour(tour);
              setViewMode('detail');
            }}
          />
        ) : viewMode === 'factibilidad' ? (
          <FactibilidadGuide onBack={() => navigateTo('catalog', '/explorar')} />
        ) : viewMode === 'admin' ? (
          <AdminPanel
            currentUser={currentUser}
            isOwner={isOwner}
            onBack={() => navigateTo('catalog', '/explorar')}
            onOpenAuthModal={() => setShowAuthModal(true)}
            onDeleteTour={handleDeleteTour}
            onDataChanged={() => {
              fetchTours();
              refreshUser();
            }}
          />
        ) : viewMode === 'home' ? (
          <HomeLanding
            tours={tours}
            onSelectTour={(tour) => {
              setSelectedTour(tour);
              setViewMode('detail');
            }}
            onExploreAll={() => navigateTo('catalog', '/explorar')}
            onOpenConsultingModal={() => setShowConsultingModal(true)}
            onOpenMembershipModal={() => setShowMembershipModal(true)}
            onOpenAchpiModal={() => setShowAchpiModal(true)}
          />
        ) : (
          renderCatalogView()
        )}
      </div>

      {/* Membership & Creator Pass Modal */}
      <MembershipModal
        isOpen={showMembershipModal}
        onClose={() => setShowMembershipModal(false)}
        isMember={isMember}
        memberType={memberType}
        onAuthRefreshed={() => refreshUser()}
        onOpenConsultingModal={() => {
          setShowMembershipModal(false);
          setShowConsultingModal(true);
        }}
      />

      {/* Entorno (black-framed image gallery) */}
      <EntornoGallery
        isOpen={showEntornoModal}
        onClose={() => setShowEntornoModal(false)}
      />

      {/* Heritage Consulting Modal */}
      <HeritageConsultingModal
        isOpen={showConsultingModal}
        onClose={() => setShowConsultingModal(false)}
        onOpenAiPlanner={() => setShowAiModal(true)}
      />

      {/* Quick AI Tour Generator Modal */}
      {showAiModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex justify-center p-4">
          <div className="relative bg-[#F6F1E5] text-slate-900 w-full max-w-lg rounded-3xl p-6 shadow-2xl my-auto space-y-4 border border-[#E4D8BF]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-[#B04E2A]/10 text-[#B04E2A]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#14281C]">Diseñador de Rutas con IA Interpretativa</h3>
                  <p className="text-xs text-slate-600">Crea un itinerario con el método de interpretación del patrimonio de Tienda El Viaje.</p>
                </div>
              </div>
              <button 
                onClick={() => setShowAiModal(false)}
                className="text-slate-400 hover:text-slate-700 p-1"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-800 block mb-1">Ciudad o Destino en Chile *</label>
                <input
                  type="text"
                  value={aiCity}
                  onChange={(e) => setAiCity(e.target.value)}
                  placeholder="Ej. Valparaíso, San Pedro de Atacama, Chiloé, Santiago, Pucón, Torres del Paine, La Serena..."
                  className="w-full px-3.5 py-2.5 bg-white border border-[#CDBA95] rounded-xl font-semibold focus:ring-2 focus:ring-[#B04E2A] focus:outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-slate-800 block mb-1">Temática o Concepto Patrimonial *</label>
                <input
                  type="text"
                  value={aiTopic}
                  onChange={(e) => setAiTopic(e.target.value)}
                  placeholder="Ej. Memorias del Carbón en Lota, Arqueología Atacameña, Palmeras y Cerros Costeros..."
                  className="w-full px-3.5 py-2.5 bg-white border border-[#CDBA95] rounded-xl font-semibold focus:ring-2 focus:ring-[#B04E2A] focus:outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-slate-800 block mb-1">Cantidad de Paradas Interpretativas</label>
                <select
                  value={aiStopsCount}
                  onChange={(e) => setAiStopsCount(parseInt(e.target.value) || 4)}
                  className="w-full px-3 py-2 bg-white border border-[#CDBA95] rounded-xl font-semibold"
                >
                  <option value={3}>3 Paradas (~45 min • Paseo Corto)</option>
                  <option value={4}>4 Paradas (~1.5 horas • Ruta Estándar)</option>
                  <option value={5}>5 Paradas (~2 horas • Inmersión Profunda)</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#E4D8BF]">
              <button
                onClick={() => setShowAiModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200"
              >
                Cancelar
              </button>
              <button
                onClick={handleQuickAiGenerate}
                disabled={isGeneratingAiTour}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#B04E2A] to-[#D97706] hover:from-[#9A3F1E] hover:to-[#B45309] text-white rounded-xl text-xs font-bold shadow-lg shadow-[#B04E2A]/30 disabled:opacity-50 transition-all"
              >
                {isGeneratingAiTour ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Redactando con Gemini AI...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Crear Ruta y Abrir en Studio</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ACHPI — Solicitud de inscripción */}
      <AchpiInscriptionModal
        isOpen={showAchpiModal}
        onClose={() => setShowAchpiModal(false)}
        onSubmitted={() => {
          refreshUser();
          setShowConsultingModal(false);
        }}
        currentUser={currentUser}
        achpiStatus={achpiStatus}
        routeLimit={routeLimit}
        routeUsage={routeUsage}
        isOwner={isOwner}
        onOpenMembership={() => setShowMembershipModal(true)}
      />

      {/* ACHPI — Panel del administrador */}
      <AchpiAdminModal
        isOpen={showAchpiAdminModal}
        onClose={() => setShowAchpiAdminModal(false)}
        onApproved={() => {
          refreshUser();
        }}
      />

      {/* Inscripción ACHPI — Panel del administrador */}
      <AchpiAdminModal
        isOpen={showAchpiAdminModal}
        onClose={() => setShowAchpiAdminModal(false)}
        onApproved={() => {
          refreshUser();
        }}
      />

      {/* Acceso restringido al Studio / Generador — modal de autorización */}
      <AuthorizationModal
        isOpen={showAuthorizationModal}
        onClose={() => {
          setShowAuthorizationModal(false);
          setAccessRequest(null);
        }}
        currentUser={currentUser}
        isOwner={isOwner}
        isMember={isMember}
        achpiStatus={achpiStatus}
        routeLimit={routeLimit}
        routeUsage={routeUsage}
        onOpenAuthModal={() => setShowAuthModal(true)}
        onOpenAchpiModal={() => setShowAchpiModal(true)}
        onOpenMembershipModal={() => setShowMembershipModal(true)}
        onOpenConsultingModal={() => setShowConsultingModal(true)}
        onAccessGranted={handleAccessGranted}
      />

      {/* Google Authentication & Creator Credentials Modal */}
      <GoogleAuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        currentUser={currentUser}
        devMode={devMode}
        onDevOwnerLogin={() => refreshUser()}
        onLogin={(user) => {
          setCurrentUser(user);
          refreshUser();
        }}
        onLogout={() => {
          setCurrentUser(null);
          setIsOwner(false);
          setIsMember(false);
          setMemberType('none');
        }}
      />

      {/* Global QR Code Modal */}
      {showGlobalQrModal && globalQrTour && (
        <QRCodeModal
          isOpen={showGlobalQrModal}
          onClose={() => {
            setShowGlobalQrModal(false);
            setGlobalQrTour(null);
            setGlobalQrStop(null);
          }}
          tour={globalQrTour}
          selectedStop={globalQrStop}
          onSelectStop={(stop) => setGlobalQrStop(stop)}
        />
      )}

      {/* Footer - Plataforma Interpretación del Patrimonio & Editorial El Viaje Por Chile (www.elviaje.cl) */}
      <footer className="bg-[#14281C] text-slate-400 text-xs py-10 border-t border-[#2A4533]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-6 pb-6 border-b border-[#2A4533]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#B04E2A] flex items-center justify-center text-white font-bold text-sm shadow-md">
                🇨🇱
              </div>
              <div>
                <span className="text-white font-extrabold text-sm block font-['Cormorant_Garamond',Georgia,serif]">
                  Interpretación del Patrimonio Natural y Cultural • <span className="text-[#E8A58B]">www.interpretaciondelpatrimonio.cl</span>
                </span>
                <span className="text-slate-400 text-xs">
                  Plataforma editorial del consultor de patrimonio <strong className="text-slate-300">El Viaje Por Chile (www.elviaje.cl)</strong>
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs">
              <button
                onClick={() => setShowConsultingModal(true)}
                className="text-[#E8A58B] hover:text-white font-semibold flex items-center gap-1 transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Consultoría para tu Viaje Personal</span>
              </button>
              <span className="text-slate-600">•</span>
              <button
                onClick={() => navigateTo('factibilidad', '/factibilidad')}
                className="text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
              >
                <ClipboardCheck className="w-3.5 h-3.5" />
                <span>Guía de Factibilidad</span>
              </button>
              <span className="text-slate-600">•</span>
              <a
                href="https://www.elviaje.cl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>www.elviaje.cl</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 text-slate-400 text-[11px]">
            <p>
              © {new Date().getFullYear()} Interpretación del Patrimonio Natural y Cultural (<strong>www.interpretaciondelpatrimonio.cl</strong>), plataforma editorial de El Viaje Por Chile (<strong>www.elviaje.cl</strong>). Inspirado en los principios de interpretación de Freeman Tilden y la pasión por el territorio de Tienda El Viaje.
            </p>
            <div className="flex items-center gap-3">
              <span>Gemini AI (TTS & Narrativas)</span>
              <span>•</span>
              <span>OpenStreetMap & Leaflet</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

