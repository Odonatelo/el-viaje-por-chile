import React, { useState } from 'react';
import { Lock, KeyRound, Loader2, Sparkles, ShieldCheck, Award, Compass, CheckCircle2, X } from 'lucide-react';
import { UserProfile } from '../types';

interface AuthorizationModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserProfile | null;
  isOwner: boolean;
  isMember: boolean;
  achpiStatus: 'none' | 'pending' | 'approved';
  routeLimit: number;
  routeUsage: number;
  onOpenAuthModal: () => void;
  onOpenAchpiModal: () => void;
  onOpenMembershipModal: () => void;
  onOpenConsultingModal: () => void;
  onAccessGranted: () => void;
}

export function AuthorizationModal({
  isOpen,
  onClose,
  currentUser,
  isOwner,
  isMember,
  achpiStatus,
  routeLimit,
  routeUsage,
  onOpenAuthModal,
  onOpenAchpiModal,
  onOpenMembershipModal,
  onOpenConsultingModal,
  onAccessGranted,
}: AuthorizationModalProps) {
  const [code, setCode] = useState('');
  const [redeeming, setRedeeming] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  const hasAccess = isOwner || (!!currentUser && (isMember || achpiStatus === 'approved'));

  const handleRedeem = async () => {
    if (!code.trim()) {
      setError('Ingresa tu código de autorización.');
      return;
    }
    setRedeeming(true);
    setError(null);
    setSuccess(null);
    try {
      const res = await fetch('/api/membership/redeem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code: code.trim() }),
      });
      const data = await res.json();
      if (res.status === 401) {
        setError('Debes iniciar sesión para canjear un código.');
      } else if (data.success) {
        setSuccess(data.message || 'Acceso activado correctamente.');
        setCode('');
        setTimeout(() => onAccessGranted(), 900);
      } else {
        setError(data.error || 'No se pudo canjear el código.');
      }
    } catch {
      setError('Error de conexión. Intenta nuevamente.');
    } finally {
      setRedeeming(false);
    }
  };

  const closePlanModal = (openFn: () => void) => {
    onClose();
    setTimeout(openFn, 60);
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex justify-center p-4">
      <div className="relative bg-[#F6F1E5] text-slate-900 w-full max-w-xl rounded-3xl p-6 sm:p-7 shadow-2xl my-auto space-y-5 border border-[#E4D8BF]">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-[#1D3626] text-[#E8A58B]">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#14281C]">Acceso para Miembros</h3>
              <p className="text-xs text-slate-600 max-w-md">
                El Studio de Rutas y el Generador con IA están disponibles para usuarios autorizados según su
                plan de cuenta.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {hasAccess ? (
          <div className="space-y-4">
            <div className="flex items-center gap-3 rounded-2xl bg-emerald-50 border border-emerald-300 px-4 py-3">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
              <p className="text-sm font-semibold text-emerald-800">
                Tu cuenta ya está autorizada. ¡Puedes crear tus rutas y generar contenido con IA!
              </p>
            </div>
            <div className="text-xs text-slate-600 space-y-1">
              <p className="flex items-center justify-between gap-2">
                <span className="font-semibold text-slate-800">Plan de cuenta:</span>
                <span className="font-bold text-[#B04E2A]">
                  {isOwner
                    ? 'Propietario'
                    : isMember
                      ? achpiStatus === 'approved' && !isMember
                        ? 'Miembro ACHPI'
                        : 'Miembro autorizado'
                      : achpiStatus === 'approved'
                        ? 'Miembro ACHPI'
                        : 'Miembro autorizado'}
                </span>
              </p>
              {!isOwner && (
                <p className="flex items-center justify-between gap-2">
                  <span className="font-semibold text-slate-800">Rutas publicadas:</span>
                  <span className="font-bold">
                    {routeUsage} / {routeLimit}
                  </span>
                </p>
              )}
            </div>
            <button
              onClick={() => {
                onClose();
                onAccessGranted();
              }}
              className="w-full px-5 py-3 bg-gradient-to-r from-[#B04E2A] to-[#D97706] hover:from-[#9A3F1E] hover:to-[#B45309] text-white rounded-xl text-sm font-bold shadow-lg shadow-[#B04E2A]/30 transition-all"
            >
              Continuar al Studio
            </button>
          </div>
        ) : !currentUser ? (
          <div className="space-y-4">
            <div className="rounded-2xl bg-white border border-[#E4D8BF] px-4 py-4 text-sm text-slate-700 space-y-2">
              <p>
                Para usar el Studio y el Generador de Rutas primero{' '}
                <strong className="text-[#14281C]">inicia sesión</strong> (con tu cuenta de Google o con tu clave de
                acceso) y luego:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-xs text-slate-600">
                <li>Canjea un <strong>código de autorización</strong> que te haya entregado El Viaje.</li>
                <li>O inscríbete como <strong>miembro ACHPI</strong> para recibir tu código de miembro.</li>
                <li>O activa una <strong>membresía / consultoría</strong> de la plataforma.</li>
              </ol>
            </div>
            <button
              onClick={onOpenAuthModal}
              className="w-full px-5 py-3 bg-[#14281C] hover:bg-[#1D3626] text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all"
            >
              Iniciar sesión
            </button>
            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-[#E4D8BF]" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-[#F6F1E5] px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  ¿Cómo obtener acceso?
                </span>
              </div>
            </div>
            <PlanCards
              onOpenAchpiModal={() => closePlanModal(onOpenAchpiModal)}
              onOpenMembershipModal={() => closePlanModal(onOpenMembershipModal)}
              onOpenConsultingModal={() => closePlanModal(onOpenConsultingModal)}
            />
          </div>
        ) : (
          <div className="space-y-4">
            {achpiStatus === 'pending' && (
              <div className="rounded-2xl bg-amber-50 border border-amber-300 px-4 py-3 text-xs text-amber-800 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                Tu solicitud de inscripción ACHPI está <strong>en revisión</strong>. Mientras tanto puedes
                canjear un código de autorización si ya te entregamos uno.
              </div>
            )}

            <div className="rounded-2xl bg-white border border-[#E4D8BF] p-4 space-y-3">
              <div className="flex items-center gap-2 text-[#14281C]">
                <KeyRound className="w-4.5 h-4.5 text-[#B04E2A]" />
                <span className="font-bold text-sm">¿Tienes un código de autorización?</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  onKeyDown={(e) => (e.key === 'Enter' ? handleRedeem() : null)}
                  placeholder="Ej. VIAJE-XXXX-XXXX"
                  className="flex-1 px-3.5 py-2.5 bg-[#F6F1E5] border border-[#CDBA95] rounded-xl text-sm font-mono font-semibold uppercase focus:ring-2 focus:ring-[#B04E2A] focus:outline-none"
                />
                <button
                  onClick={handleRedeem}
                  disabled={redeeming}
                  className="flex items-center gap-2 px-4 py-2.5 bg-[#1D3626] hover:bg-[#2E4E37] text-white rounded-xl text-xs font-bold disabled:opacity-60 transition-all"
                >
                  {redeeming ? <Loader2 className="w-4 h-4 animate-spin" /> : <KeyRound className="w-4 h-4" />}
                  <span className="hidden sm:inline">Canjear</span>
                </button>
              </div>
              {error && <p className="text-xs font-semibold text-red-600">{error}</p>}
              {success && <p className="text-xs font-semibold text-emerald-700">{success}</p>}
              {!currentUser && (
                <p className="text-[11px] text-slate-500">
                  Necesitas una sesión iniciada. <button onClick={onOpenAuthModal} className="font-bold text-[#B04E2A] underline">Inicia sesión</button>.
                </p>
              )}
            </div>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-[#E4D8BF]" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-[#F6F1E5] px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  ¿Cómo obtener acceso?
                </span>
              </div>
            </div>
            <PlanCards
              onOpenAchpiModal={() => closePlanModal(onOpenAchpiModal)}
              onOpenMembershipModal={() => closePlanModal(onOpenMembershipModal)}
              onOpenConsultingModal={() => closePlanModal(onOpenConsultingModal)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function PlanCards({
  onOpenAchpiModal,
  onOpenMembershipModal,
  onOpenConsultingModal,
}: {
  onOpenAchpiModal: () => void;
  onOpenMembershipModal: () => void;
  onOpenConsultingModal: () => void;
}) {
  const plans = [
    {
      icon: ShieldCheck,
      title: 'Miembro ACHPI',
      limit: 'Hasta 10 rutas',
      desc: 'Inscríbete como miembro de la Asociación Chilena Para La Interpretación del Patrimonio y recibe un código de miembro.',
      cta: 'Solicitar inscripción',
      onClick: onOpenAchpiModal,
      accent: 'bg-[#1D3626] text-white',
      iconBg: 'bg-[#B04E2A] text-white',
    },
    {
      icon: Award,
      title: 'Membresía Plataforma',
      limit: 'Hasta 50 rutas',
      desc: 'Membresía anual de la plataforma para creadores e instituciones que publican y gestionan rutas.',
      cta: 'Ver Membresía',
      onClick: onOpenMembershipModal,
      accent: 'bg-[#B04E2A] text-white',
      iconBg: 'bg-[#14281C] text-[#E8A58B]',
    },
    {
      icon: Compass,
      title: 'Consultoría Patrimonial',
      limit: 'Hasta 50 rutas · Gratis',
      desc: 'Contrata una consultoría de interpretación del patrimonio y recibe el plan de consultoría por 12 meses.',
      cta: 'Agendar consultoría',
      onClick: onOpenConsultingModal,
      accent: 'bg-[#F6F1E5] text-[#14281C] border border-[#CDBA95]',
      iconBg: 'bg-[#D97706] text-white',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {plans.map((p) => (
        <button
          key={p.title}
          onClick={p.onClick}
          className="text-left rounded-2xl border border-[#E4D8BF] bg-white p-4 hover:shadow-md hover:-translate-y-0.5 transition-all group"
        >
          <div className={`w-10 h-10 rounded-xl grid place-items-center mb-2.5 ${p.iconBg}`}>
            <p.icon className="w-5 h-5" />
          </div>
          <div className="font-bold text-sm text-[#14281C] group-hover:text-[#B04E2A]">{p.title}</div>
          <div className="text-[10px] font-extrabold uppercase tracking-wide text-[#B04E2A] mb-1.5">{p.limit}</div>
          <p className="text-[11px] text-slate-600 leading-relaxed mb-2">{p.desc}</p>
          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold ${p.accent}`}>
            <Sparkles className="w-3 h-3" />
            {p.cta}
          </span>
        </button>
      ))}
    </div>
  );
}