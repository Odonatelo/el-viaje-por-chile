import React, { useEffect, useState } from 'react';
import { X, ShieldCheck, CheckCircle2, XCircle, Mail, Clock, BadgeCheck, Loader2, Inbox, Bell } from 'lucide-react';
import { AchpiInscription, AdminNotification } from '../types';

interface AchpiAdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApproved?: () => void;
}

export const AchpiAdminModal: React.FC<AchpiAdminModalProps> = ({ isOpen, onClose, onApproved }) => {
  const [inscriptions, setInscriptions] = useState<AchpiInscription[]>([]);
  const [notifications, setNotifications] = useState<AdminNotification[]>([]);
  const [ownerEmail, setOwnerEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [busyId, setBusyId] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setMessage('');
    try {
      const res = await fetch('/api/achpi/inscriptions');
      const data = await res.json();
      if (data.success) {
        setInscriptions(data.inscriptions || []);
        setNotifications(data.notifications || []);
        setOwnerEmail(data.ownerEmail || '');
      } else {
        setMessage(data.error || 'No se pudo cargar el panel.');
      }
    } catch (e) {
      setMessage('Error de conexión al cargar el panel ACHPI.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      load();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const sorted = [...inscriptions].sort((a, b) => {
    if (a.status === 'pending' && b.status !== 'pending') return -1;
    if (b.status === 'pending' && a.status !== 'pending') return 1;
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  const handleApprove = async (inscription: AchpiInscription) => {
    setBusyId(inscription.id);
    setMessage('');
    try {
      const res = await fetch(`/api/achpi/inscriptions/${inscription.id}/approve`, { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        setMessage('Solicitud aprobada. Código de miembro generado y entregado.');
        if (onApproved) onApproved();
        await load();
      } else {
        setMessage(data.error || 'No se pudo aprobar la solicitud.');
      }
    } catch (e) {
      setMessage('Error al aprobar la solicitud.');
    } finally {
      setBusyId(null);
    }
  };

  const handleReject = async (inscription: AchpiInscription) => {
    if (!window.confirm(`¿Rechazar la inscripción de ${inscription.name} (${inscription.email})?`)) return;
    setBusyId(inscription.id);
    setMessage('');
    try {
      const res = await fetch(`/api/achpi/inscriptions/${inscription.id}/reject`, { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        setMessage('Inscripción rechazada.');
        await load();
      } else {
        setMessage(data.error || 'No se pudo rechazar la solicitud.');
      }
    } catch (e) {
      setMessage('Error al rechazar la solicitud.');
    } finally {
      setBusyId(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm grid place-items-center p-4 overflow-y-auto">
      <div className="relative bg-[#F6F1E5] text-slate-900 w-full max-w-3xl rounded-3xl p-6 shadow-2xl my-auto border border-[#E4D8BF] max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          title="Cerrar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-1">
          <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md">
            <ShieldCheck className="w-6 h-6" />
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Solo administrador</p>
            <h3 className="text-base sm:text-lg font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif] leading-tight">
              Panel ACHPI — Solicitudes de Inscripción
            </h3>
          </div>
        </div>
        <p className="text-xs text-slate-500 mb-4">
          Aprueba inscripciones para generar y entregar los códigos de miembro. Notificaciones registradas al correo
          del administrador: <strong>{ownerEmail || 'juancarlos.castaing@gmail.com'}</strong>
        </p>

        {message && (
          <div className="mb-4 text-xs font-bold text-[#7A3A1E] bg-[#B04E2A]/10 border border-[#B04E2A]/30 rounded-xl px-3 py-2">
            {message}
          </div>
        )}

        {loading ? (
          <div className="flex items-center justify-center gap-2 py-10 text-slate-500 text-sm">
            <Loader2 className="w-5 h-5 animate-spin" />
            Cargando solicitudes...
          </div>
        ) : sorted.length === 0 ? (
          <div className="py-10 text-center text-slate-500 text-sm flex flex-col items-center gap-2">
            <Inbox className="w-10 h-10 text-slate-300" />
            Aún no hay solicitudes de inscripción ACHPI.
          </div>
        ) : (
          <div className="space-y-3 mb-5">
            {sorted.map((inscription) => (
              <div
                key={inscription.id}
                className={`bg-white rounded-2xl border p-4 space-y-2 ${
                  inscription.status === 'pending'
                    ? 'border-amber-300 shadow-sm'
                    : inscription.status === 'approved'
                    ? 'border-emerald-300'
                    : 'border-red-200 opacity-75'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-bold text-[#14281C]">{inscription.name}</span>
                      {inscription.status === 'pending' && (
                        <span className="text-[10px] font-extrabold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-300 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Clock className="w-3 h-3" /> Pendiente
                        </span>
                      )}
                      {inscription.status === 'approved' && (
                        <span className="text-[10px] font-extrabold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <BadgeCheck className="w-3 h-3" /> Aprobada
                        </span>
                      )}
                      {inscription.status === 'rejected' && (
                        <span className="text-[10px] font-extrabold uppercase tracking-wider bg-red-100 text-red-700 border border-red-300 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <XCircle className="w-3 h-3" /> Rechazada
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500">{inscription.email}</p>
                    <p className="text-[11px] text-slate-600">
                      <strong>Región:</strong> {inscription.region}
                      {inscription.courseWithElViaje ? (
                        <>
                          {' · '}
                          <strong>Curso/Taller con El Viaje:</strong> {inscription.courseWithElViaje}
                        </>
                      ) : null}
                      {inscription.experience ? (
                        <>
                          {' · '}
                          <strong>Experiencia:</strong> {inscription.experience}
                        </>
                      ) : null}
                    </p>
                  </div>
                  <span className="text-[10px] text-slate-400 whitespace-nowrap">
                    {new Date(inscription.createdAt).toLocaleDateString('es-CL', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed bg-[#F6F1E5] rounded-xl px-3 py-2">
                  <strong>Motivación:</strong> {inscription.motivation}
                </p>

                {inscription.status === 'approved' && inscription.memberCode && (
                  <div className="flex flex-wrap items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-2.5">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span className="text-xs font-bold text-emerald-800">Código de miembro:</span>
                      <span className="font-mono font-extrabold tracking-widest text-[#14281C]">
                        {inscription.memberCode}
                      </span>
                    </div>
                    <a
                      href={`mailto:${inscription.email}?subject=${encodeURIComponent(
                        'Código de miembro ACHPI — El Viaje Por Chile',
                      )}&body=${encodeURIComponent(
                        `Estimado/a ${inscription.name}:\n\nTu inscripción a la Asociación Chilena Para La Interpretación del Patrimonio (ACHPI) fue aprobada. Este es tu código de miembro:\n\n  ${inscription.memberCode}\n\nCon él puedes subir hasta 10 rutas en www.interpretaciondelpatrimonio.cl.\n\nSaludos,\nAsociación ACHPI`,
                      )}`}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-white hover:bg-emerald-100 text-emerald-800 text-[11px] font-bold rounded-xl border border-emerald-300 transition-all"
                    >
                      <Mail className="w-3 h-3" />
                      Enviar código al solicitante
                    </a>
                  </div>
                )}

                {inscription.status === 'pending' && (
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      onClick={() => handleApprove(inscription)}
                      disabled={busyId === inscription.id}
                      className="flex items-center gap-1.5 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl disabled:opacity-50 transition-all"
                    >
                      {busyId === inscription.id ? (
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      ) : (
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      )}
                      Aprobar y entregar código
                    </button>
                    <button
                      onClick={() => handleReject(inscription)}
                      disabled={busyId === inscription.id}
                      className="flex items-center gap-1.5 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 text-xs font-bold rounded-xl disabled:opacity-50 transition-all"
                    >
                      <XCircle className="w-3.5 h-3.5" />
                      Rechazar
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {notifications.length > 0 && (
          <div className="border-t border-[#E4D8BF] pt-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-slate-500 flex items-center gap-1.5 mb-2">
              <Bell className="w-3.5 h-3.5 text-[#B04E2A]" />
              Notificaciones para el correo del administrador
            </h4>
            <div className="space-y-2">
              {notifications.map((n) => (
                <div key={n.id} className="bg-white border border-[#E4D8BF] rounded-xl px-3 py-2 text-[11px] text-slate-600">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-bold text-slate-800">{n.subject}</span>
                    <span className="text-[10px] text-slate-400">
                      {new Date(n.createdAt).toLocaleString('es-CL')}
                    </span>
                  </div>
                  <p className="leading-relaxed">{n.body}</p>
                  <p className="text-[10px] text-slate-400 mt-1">Para: {n.recipient}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};