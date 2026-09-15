import React from 'react';
import {
  X,
  Check,
  ShieldCheck,
  Sparkles,
  LogOut,
  Key,
  KeyRound,
  User,
  Mail,
  ExternalLink,
  Crown,
  ChevronRight,
  Loader2,
} from 'lucide-react';
import { UserProfile } from '../types';

interface GoogleAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserProfile | null;
  onLogin: (user: UserProfile) => void;
  onLogout: () => void;
  onOpenMembership?: () => void;
  devMode?: boolean;
  onDevOwnerLogin?: () => void;
}

export const GoogleAuthModal: React.FC<GoogleAuthModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onLogin,
  onLogout,
  onOpenMembership,
  devMode = false,
  onDevOwnerLogin,
}) => {
  const [isSigningIn, setIsSigningIn] = React.useState(false);
  const [localMode, setLocalMode] = React.useState(false);
  const [localEmail, setLocalEmail] = React.useState('');
  const [localKey, setLocalKey] = React.useState('');
  const [localBusy, setLocalBusy] = React.useState(false);
  const [localError, setLocalError] = React.useState<string | null>(null);

  if (!isOpen) return null;

  const handleGoogleSignIn = () => {
    // Real OAuth: el backend redirige a Google y vuelve a /api/auth/google/callback
    setIsSigningIn(true);
    window.location.href = '/api/auth/google';
  };

  const handleLocalLogin = async () => {
    setLocalError(null);
    if (!localEmail.trim() || !localKey.trim()) {
      setLocalError('Ingresa tu correo y tu clave de acceso.');
      return;
    }
    setLocalBusy(true);
    try {
      const res = await fetch('/api/auth/local', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: localEmail.trim(), accessKey: localKey.trim() }),
      });
      const data = await res.json();
      if (data.success && data.user) {
        setLocalEmail('');
        setLocalKey('');
        setLocalMode(false);
        onLogin(data.user);
      } else {
        setLocalError(data.error || 'No se pudo iniciar sesión. Verifica tus datos.');
      }
    } catch {
      setLocalError('Error de conexión. Inténtalo de nuevo.');
    } finally {
      setLocalBusy(false);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
    } catch {
      /* ignore */
    }
    onLogout();
    onClose();
  };

  const handleDevOwnerLogin = () => {
    window.location.href = '/api/auth/dev-owner-login';
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl border border-[#E4D8BF] overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 bg-[#14281C] text-white flex items-center justify-between border-b border-[#223F2C]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" />
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z" />
                <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z" />
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-['Cormorant_Garamond',Georgia,serif]">Iniciar sesión</h3>
              <p className="text-xs text-slate-400">Acceso a Creadores &amp; Tienda El Viaje</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {currentUser ? (
            <div className="space-y-4">
              <div className="bg-[#F4EEDF] p-4 rounded-2xl border border-[#E4D8BF] flex items-center gap-4">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  referrerPolicy="no-referrer"
                  className="w-14 h-14 rounded-full object-cover border-2 border-[#B04E2A] shadow"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-[#14281C] truncate">{currentUser.name}</h4>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.2 rounded border border-emerald-300">
                      {(currentUser as any)?.authMethod === 'local'
                        ? 'Clave de acceso'
                        : (currentUser as any)?.authMethod === 'both'
                          ? 'Google + Clave'
                          : 'Google'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 truncate">{currentUser.email}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-[10px] bg-[#B04E2A]/10 text-[#B04E2A] font-bold px-2 py-0.5 rounded-full">
                      {currentUser.role === 'admin' ? 'Propietario / Admin' : 'Creador Activo'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-700">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Membresía Plataforma:</span>
                  <span className="font-bold text-emerald-700">
                    {currentUser.role === 'admin'
                      ? 'Propietario (Acceso Total)'
                      : currentUser.memberType === 'consulting_free'
                        ? 'Activa (12 meses)'
                        : currentUser.memberType === 'annual_paid'
                          ? 'Anual Pagada'
                          : 'Sin membresía'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Miembro ACHPI:</span>
                  <span className="font-bold text-[#14281C]">
                    {currentUser.role === 'admin'
                      ? 'Asociación — Panel disponible'
                      : (currentUser as any).achpiStatus === 'approved'
                        ? 'Aprobado · ' + ((currentUser as any).achpiCode || '')
                        : (currentUser as any).achpiStatus === 'pending'
                          ? 'Solicitud en revisión'
                          : 'Sin inscripción'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Límite de rutas:</span>
                  <span className="font-bold text-[#14281C]">
                    {currentUser.role === 'admin'
                      ? 'Propietario (sin límite)'
                      : `${(currentUser as any).routeUsage ?? 0} / ${(currentUser as any).routeLimit ?? 1} rutas publicadas`}
                  </span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  onClick={handleLogout}
                  className="flex-1 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
                >
                  <LogOut className="w-3.5 h-3.5 text-slate-500" />
                  <span>Cerrar Sesión</span>
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 py-2.5 px-4 bg-[#B04E2A] hover:bg-[#9A3F1E] text-white rounded-xl text-xs font-bold transition-all shadow-sm"
                >
                  Continuar
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-5 text-center">
              <div className="space-y-1.5">
                <h4 className="text-base font-bold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">Ingresa con tu Cuenta Google</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Conéctate con Google para gestionar tus audioguías, editar rutas en el Tour Studio, usar la IA de
                  locución y publicar tus rutas de interpretación del patrimonio.
                </p>
              </div>

              <button
                onClick={handleGoogleSignIn}
                disabled={isSigningIn}
                className="w-full py-3.5 px-4 bg-white hover:bg-slate-50 text-slate-700 font-bold text-sm rounded-2xl border-2 border-slate-200 hover:border-slate-300 shadow-sm hover:shadow transition-all flex items-center justify-center gap-3 active:scale-[0.99]"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z" />
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z" />
                  <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z" />
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
                </svg>
                <span>{isSigningIn ? 'Redirigiendo a Google...' : 'Continuar con Google'}</span>
              </button>

              <div className="relative py-1">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-[#E4D8BF]" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-[#F6F1E5] px-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">o</span>
                </div>
              </div>

              {!localMode ? (
                <button
                  onClick={() => setLocalMode(true)}
                  className="w-full py-3 px-4 bg-[#14281C] hover:bg-[#1D3626] text-white rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-all"
                >
                  <KeyRound className="w-3.5 h-3.5 text-[#E8A58B]" />
                  ¿Tienes una clave de acceso?
                </button>
              ) : (
                <div className="rounded-2xl bg-white border-2 border-[#CDBA95] p-4 space-y-3 text-left">
                  <div className="flex items-start gap-2 text-[#14281C]">
                    <div className="w-8 h-8 rounded-xl bg-[#B04E2A]/10 text-[#B04E2A] grid place-items-center shrink-0">
                      <KeyRound className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">Ingreso con clave de acceso</div>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        Usa el correo y la clave que te entregó el administrador de El Viaje.
                      </p>
                    </div>
                  </div>
                  <input
                    type="email"
                    value={localEmail}
                    onChange={(e) => setLocalEmail(e.target.value)}
                    placeholder="Correo"
                    className="w-full px-3.5 py-2.5 bg-[#F6F1E5] border border-[#CDBA95] rounded-xl text-sm font-semibold focus:ring-2 focus:ring-[#B04E2A] focus:outline-none"
                  />
                  <input
                    type="text"
                    value={localKey}
                    onChange={(e) => setLocalKey(e.target.value)}
                    onKeyDown={(e) => (e.key === 'Enter' ? handleLocalLogin() : null)}
                    placeholder="Clave de acceso (ej. VIAJE-XXXX-XXXX)"
                    className="w-full px-3.5 py-2.5 bg-[#F6F1E5] border border-[#CDBA95] rounded-xl text-sm font-semibold font-mono uppercase tracking-wider focus:ring-2 focus:ring-[#B04E2A] focus:outline-none"
                  />
                  {localError && <p className="text-xs font-semibold text-red-600">{localError}</p>}
                  <div className="flex gap-2">
                    <button
                      onClick={handleLocalLogin}
                      disabled={localBusy}
                      className="flex-1 py-2.5 px-4 bg-[#B04E2A] hover:bg-[#9A3F1E] text-white rounded-xl text-xs font-bold disabled:opacity-60 transition-all"
                    >
                      {localBusy ? <Loader2 className="w-3.5 h-3.5 mx-auto animate-spin" /> : 'Ingresar'}
                    </button>
                    <button
                      onClick={() => {
                        setLocalMode(false);
                        setLocalError(null);
                      }}
                      className="py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all"
                    >
                      Volver
                    </button>
                  </div>
                </div>
              )}

              {devMode && (
                <button
                  onClick={handleDevOwnerLogin}
                  className="w-full py-2.5 px-4 bg-[#14281C] hover:bg-[#223F2C] text-white rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-all"
                >
                  <Crown className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Entrar como Dueño (modo dev)</span>
                </button>
              )}

              <div className="pt-2 border-t border-slate-100 flex items-center justify-center gap-2 text-[11px] text-slate-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Autenticación oficial con Google (OAuth 2.0)</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
