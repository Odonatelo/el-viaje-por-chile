import React, { useState } from 'react';
import { X, ShieldCheck, Send, CheckCircle2, Clock, Award, TrendingUp, User } from 'lucide-react';
import { UserProfile } from '../types';

interface AchpiInscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitted?: () => void;
  currentUser?: UserProfile | null;
  achpiStatus?: 'none' | 'pending' | 'approved';
  routeLimit?: number;
  routeUsage?: number;
  isOwner?: boolean;
  onOpenMembership?: () => void;
}

const REGIONS = [
  'Arica y Parinacota',
  'Tarapacá',
  'Antofagasta',
  'Atacama',
  'Coquimbo',
  'Valparaíso',
  'Metropolitana',
  "O'Higgins",
  'Maule',
  'Ñuble',
  'Biobío',
  'La Araucanía',
  'Los Ríos',
  'Los Lagos',
  'Aysén',
  'Magallanes',
];

const EXPERIENCE_LEVELS = [
  'Estoy comenzando en la interpretación del patrimonio',
  '1 a 3 años de experiencia',
  '4 a 8 años de experiencia',
  'Más de 8 años de experiencia',
];

const COURSE_OPTIONS = [
  'Sí, estoy haciendo un curso o taller con El Viaje',
  'No, aún no estoy en un curso o taller',
];

export const AchpiInscriptionModal: React.FC<AchpiInscriptionModalProps> = ({
  isOpen,
  onClose,
  onSubmitted,
  currentUser,
  achpiStatus = 'none',
  routeLimit = 1,
  routeUsage = 0,
  isOwner = false,
  onOpenMembership,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('');
  const [experience, setExperience] = useState('');
  const [courseWithElViaje, setCourseWithElViaje] = useState('');
  const [motivation, setMotivation] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successId, setSuccessId] = useState<string | null>(null);

  if (!isOpen) return null;

  const atLimit = routeUsage >= routeLimit;

  const handleSubmit = async () => {
    setError('');
    if (!name.trim() || !email.trim() || !region || !courseWithElViaje || !motivation.trim()) {
      setError('Completa todos los campos obligatorios (nombre, correo, región, curso/taller con El Viaje y motivación).');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/achpi/inscriptions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim(), region, experience, courseWithElViaje, motivation: motivation.trim() }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccessId(data.data.id);
        if (onSubmitted) onSubmitted();
      } else {
        setError(data.error || 'No se pudo enviar la solicitud.');
      }
    } catch (e) {
      setError('Error de conexión al enviar la solicitud.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm grid place-items-center p-4 overflow-y-auto">
      <div className="relative bg-[#F6F1E5] text-slate-900 w-full max-w-lg rounded-3xl p-6 shadow-2xl my-auto border border-[#E4D8BF]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          title="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md">
            <ShieldCheck className="w-6 h-6" />
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Asociación chilena</p>
            <h3 className="text-base sm:text-lg font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif] leading-tight">
              ACHPI — Interpretación del Patrimonio
            </h3>
          </div>
        </div>

        {achpiStatus === 'approved' ? (
          <div className="space-y-4">
            <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-5 text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
              <p className="text-sm font-bold text-emerald-800">¡Solicitud aprobada! Eres miembro ACHPI.</p>
              <p className="text-[11px] text-emerald-700">Tu código de miembro:</p>
              <p className="font-mono text-lg font-extrabold tracking-widest text-[#14281C] bg-white border border-emerald-300 rounded-xl py-2 px-4 inline-block">
                {currentUser?.achpiCode || 'ACHPI-XXXX-XXXX'}
              </p>
              <p className="text-[11px] text-emerald-700">
                Podrás publicar hasta 10 rutas en interpretaciondelpatrimonio.cl.
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-full px-4 py-2.5 bg-[#14281C] hover:bg-[#223F2C] text-white rounded-xl text-xs font-bold transition-all"
            >
              Entendido
            </button>
          </div>
        ) : achpiStatus === 'pending' ? (
          <div className="space-y-4">
            <div className="bg-amber-50 border border-amber-300 rounded-2xl p-5 text-center space-y-2">
              <Clock className="w-10 h-10 text-amber-600 mx-auto" />
              <p className="text-sm font-bold text-amber-800">Solicitud en revisión</p>
              <p className="text-[11px] text-amber-700">
                La ACHPI esta revisando tu solicitud de inscripción. Al aprobarla recibirás tu{' '}
                <strong>código de miembro</strong> (ej. ACHPI-XXXX-XXXX) en el correo del administrador
                (juancarlos.castaing@gmail.com) y quedará activo automáticamente en tu cuenta para publicar más rutas.
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-full px-4 py-2.5 bg-[#14281C] hover:bg-[#223F2C] text-white rounded-xl text-xs font-bold transition-all"
            >
              Cerrar
            </button>
          </div>
        ) : successId ? (
          <div className="space-y-4">
            <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-5 text-center space-y-2">
              <Send className="w-10 h-10 text-emerald-600 mx-auto" />
              <p className="text-sm font-bold text-emerald-800">¡Solicitud enviada con éxito!</p>
              <p className="text-[11px] text-emerald-700 leading-relaxed">
                La Asociación Chilena Para La Interpretación del Patrimonio (ACHPI) revisará tu solicitud.
                Al aprobarse, se generará y entregará tu <strong>código de miembro</strong> y la notificación
                quedará registrada en el correo del administrador. Con ese código podrás publicar hasta{' '}
                <strong>10 rutas</strong> en la plataforma.
              </p>
              <p className="text-[10px] text-slate-500">Referencia de solicitud: #{successId.slice(-8)}</p>
            </div>
            <button
              onClick={onClose}
              className="w-full px-4 py-2.5 bg-[#14281C] hover:bg-[#223F2C] text-white rounded-xl text-xs font-bold transition-all"
            >
              Entendido
            </button>
          </div>
        ) : isOwner ? (
          <div className="space-y-4">
            <p className="text-xs text-slate-600 leading-relaxed">
              Como propietario de la plataforma usas el <strong>Panel ACHPI</strong> desde el botón del header para
              revisar las solicitudes, aprobarlas y generar los códigos de miembro.
            </p>
            <button
              onClick={onClose}
              className="w-full px-4 py-2.5 bg-[#14281C] hover:bg-[#223F2C] text-white rounded-xl text-xs font-bold transition-all"
            >
              Cerrar
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {atLimit && (
              <div className="bg-[#B04E2A]/10 border border-[#B04E2A]/30 rounded-2xl p-4 flex gap-3 items-start">
                <TrendingUp className="w-5 h-5 text-[#B04E2A] flex-shrink-0 mt-0.5" />
                <p className="text-xs text-[#7A3A1E] leading-relaxed">
                  Usaste <strong>{routeUsage} de {routeLimit} rutas</strong> de tu plan gratuito. Como{' '}
                  <strong>miembro ACHPI</strong> (con tu código) podrás publicar hasta <strong>10 rutas</strong>; con{' '}
                  <strong>membresía o consultoría</strong> hasta 50.
                </p>
              </div>
            )}

            <p className="text-xs text-slate-600 leading-relaxed">
              <strong className="text-[#14281C]">
                Solicita tu código de miembro para diseñar tu propia experiencia
              </strong>{' '}
              inscribiéndote como miembro de la{' '}
              <strong>Asociación Chilena Para La Interpretación del Patrimonio (ACHPI)</strong> y recibe los{' '}
              <strong>beneficios</strong>. El administrador revisará tu solicitud y, al aprobarla, tu{' '}
              <strong>código de miembro</strong> se generará y entregará para que puedas subir tus rutas.
            </p>

            <div className="space-y-3">
              <div>
                <label className="font-bold text-slate-800 block mb-1">Nombre completo *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ej. María Teresa Espinoza"
                    className="w-full pl-9 pr-3 py-2.5 bg-white border border-[#CDBA95] rounded-xl font-semibold focus:ring-2 focus:ring-[#B04E2A] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-800 block mb-1">Correo electrónico *</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={!!currentUser}
                  placeholder="tucorreo@ejemplo.cl"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#CDBA95] rounded-xl font-semibold focus:ring-2 focus:ring-[#B04E2A] focus:outline-none disabled:bg-slate-100 disabled:text-slate-500"
                />
                {currentUser && (
                  <p className="text-[10px] text-slate-400 mt-1">Se usará tu cuenta conectada: {currentUser.email}</p>
                )}
              </div>

              <div>
                <label className="font-bold text-slate-800 block mb-1">Región de Chile *</label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-[#CDBA95] rounded-xl font-semibold"
                >
                  <option value="">Selecciona una región...</option>
                  {REGIONS.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-800 block mb-1">
                  ¿Estás haciendo un curso o taller con El Viaje? *
                </label>
                <select
                  value={courseWithElViaje}
                  onChange={(e) => setCourseWithElViaje(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-[#CDBA95] rounded-xl font-semibold"
                >
                  <option value="">Selecciona una opción...</option>
                  {COURSE_OPTIONS.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-800 block mb-1">Experiencia en interpretación del patrimonio</label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full px-3 py-2.5 bg-white border border-[#CDBA95] rounded-xl font-semibold"
                >
                  <option value="">Selecciona tu nivel...</option>
                  {EXPERIENCE_LEVELS.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-800 block mb-1">Motivación para unirte a ACHPI *</label>
                <textarea
                  value={motivation}
                  onChange={(e) => setMotivation(e.target.value)}
                  rows={3}
                  placeholder="Cuéntanos por qué quieres inscribirte y cómo quieres aportar a la interpretación del patrimonio chileno..."
                  className="w-full px-3.5 py-2.5 bg-white border border-[#CDBA95] rounded-xl font-semibold focus:ring-2 focus:ring-[#B04E2A] focus:outline-none resize-none"
                />
              </div>
            </div>

            {error && (
              <p className="text-xs font-bold text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2">
                {error}
              </p>
            )}

            <div className="flex items-center justify-end gap-2 pt-1 border-t border-[#E4D8BF]">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200"
              >
                Cancelar
              </button>
              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#B04E2A] to-[#D97706] hover:from-[#9A3F1E] hover:to-[#B45309] text-white rounded-xl text-xs font-bold shadow-lg shadow-[#B04E2A]/30 disabled:opacity-50 transition-all"
              >
                {submitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Enviar Solicitud de Inscripción
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        <div className="mt-4 pt-3 border-t border-[#E4D8BF] flex items-center justify-center gap-1.5 text-[10px] text-slate-500">
          <Award className="w-3 h-3 text-[#B04E2A]" />
          Con tu código de miembro ACHPI puedes subir tus rutas a www.interpretaciondelpatrimonio.cl
        </div>
      </div>
    </div>
  );
};