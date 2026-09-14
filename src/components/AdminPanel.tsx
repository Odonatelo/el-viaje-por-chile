import React, { useEffect, useState, useCallback } from 'react';
import {
  ArrowLeft,
  Users,
  Route,
  ShieldCheck,
  Loader2,
  CheckCircle2,
  XCircle,
  KeyRound,
  Trash2,
  Settings,
  RefreshCw,
  Search,
  Crown,
} from 'lucide-react';
import { AdminStats, AdminUser, AdminTourRow, UserProfile } from '../types';

const PLAN_LABELS: Record<string, string> = {
  none: 'Gratis',
  basic_free: 'Básica Gratis (1 ruta)',
  annual_paid: 'Membresía Plataforma (50)',
  consulting_free: 'Consultoría (50)',
};

const PLAN_TONES: Record<string, string> = {
  none: 'bg-slate-100 text-slate-700 border border-slate-300',
  basic_free: 'bg-emerald-50 text-emerald-800 border border-emerald-300',
  annual_paid: 'bg-[#B04E2A]/10 text-[#B04E2A] border border-[#B04E2A]/40',
  consulting_free: 'bg-amber-50 text-amber-800 border border-amber-300',
};

interface AchpiRow {
  id: string;
  name: string;
  email: string;
  region: string;
  experience: string;
  motivation: string;
  status: 'pending' | 'approved' | 'rejected';
  memberCode?: string;
  createdAt: string;
  courseWithElViaje?: string;
}

interface AdminPanelProps {
  currentUser: UserProfile | null;
  isOwner: boolean;
  onBack: () => void;
  onOpenAuthModal: () => void;
  onDeleteTour: (tourId: string) => void;
  onDataChanged: () => void;
}

type Tab = 'users' | 'achpi' | 'tours';

export function AdminPanel({ currentUser, isOwner, onBack, onOpenAuthModal, onDeleteTour, onDataChanged }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState<Tab>('users');
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [tours, setTours] = useState<AdminTourRow[]>([]);
  const [achpiRows, setAchpiRows] = useState<AchpiRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [actingEmail, setActingEmail] = useState<string | null>(null);
  const [filter, setFilter] = useState('');
  const [notice, setNotice] = useState<string | null>(null);
  const [months, setMonths] = useState<Record<string, number>>({});
  const [plans, setPlans] = useState<Record<string, string>>({});

  const loadOverview = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/overview');
      const data = await res.json();
      if (data.success) setStats(data.stats);
    } catch {}
  }, []);

  const loadUsers = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/users');
      const data = await res.json();
      if (data.success) {
        setUsers(data.users);
        const planMap: Record<string, string> = {};
        const monthMap: Record<string, number> = {};
        data.users.forEach((u: AdminUser) => {
          planMap[u.email] = u.memberType;
          monthMap[u.email] = 12;
        });
        setPlans(planMap);
        setMonths(monthMap);
      }
    } catch {}
  }, []);

  const loadTours = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/tours');
      const data = await res.json();
      if (data.success) setTours(data.tours);
    } catch {}
  }, []);

  const loadAchpi = useCallback(async () => {
    try {
      const res = await fetch('/api/achpi/inscriptions');
      const data = await res.json();
      if (data.success) setAchpiRows(data.inscriptions || []);
    } catch {}
  }, []);

  useEffect(() => {
    setLoading(true);
    Promise.all([loadOverview(), loadUsers(), loadTours(), loadAchpi()]).finally(() => setLoading(false));
  }, [loadOverview, loadUsers, loadTours, loadAchpi]);

  const reloadActive = () => {
    if (activeTab === 'users') loadUsers();
    if (activeTab === 'achpi') loadAchpi();
    if (activeTab === 'tours') loadTours();
    loadOverview();
  };

  const showError = (e: unknown, fallback: string) =>
    setNotice((e as any)?.error || (e as any)?.message || fallback);

  const updatePlan = async (email: string) => {
    setActingEmail(email);
    setNotice(null);
    try {
      const res = await fetch(`/api/admin/users/${encodeURIComponent(email)}/membership`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ memberType: plans[email], months: months[email] || 12 }),
      });
      const data = await res.json();
      if (data.success) {
        setUsers((prev) => prev.map((u) => (u.email === email ? data.user : u)));
        setNotice(`Plan de ${email} actualizado a "${PLAN_LABELS[data.user.memberType]}"`);
        onDataChanged();
      } else showError(data, 'No se pudo actualizar el plan.');
    } catch {
      showError({}, 'Error de conexión.');
    } finally {
      setActingEmail(null);
    }
  };

  const grantAchpi = async (email: string) => {
    if (!window.confirm(`¿Otorgar código de miembro ACHPI a ${email}?`)) return;
    setActingEmail(email);
    setNotice(null);
    try {
      const res = await fetch(`/api/admin/users/${encodeURIComponent(email)}/achpi-grant`, {
        method: 'POST',
      });
      const data = await res.json();
      if (data.success) {
        setUsers((prev) => prev.map((u) => (u.email === email ? data.user : u)));
        setStatNotice(`Código de miembro ACHPI otorgado a ${email}: ${data.code}.`);
        loadAchpi();
        onDataChanged();
      } else showError(data, 'No se pudo otorgar el código.');
    } catch {
      showError({}, 'Error de conexión.');
    } finally {
      setActingEmail(null);
    }
  };

  const setStatNotice = (msg: string) => setNotice(msg);

  const revoke = async (email: string) => {
    if (!window.confirm(`¿Revocar el acceso de ${email}? No podrá publicar rutas nuevas.`)) return;
    setActingEmail(email);
    setNotice(null);
    try {
      const res = await fetch(`/api/admin/users/${encodeURIComponent(email)}/revoke`, {
        method: 'POST',
      });
      const data = await res.json();
      if (data.success) {
        setUsers((prev) => prev.map((u) => (u.email === email ? data.user : u)));
        setNotice(`Acceso de ${email} revocado hasta nuevo plan.`);
        onDataChanged();
      } else showError(data, 'No se pudo revocar el acceso.');
    } catch {
      showError({}, 'Error de conexión.');
    } finally {
      setActingEmail(null);
    }
  };

  const reviewAchpi = async (id: string, action: 'approve' | 'reject') => {
    setActingEmail(`achpi-${id}-${action}`);
    setNotice(null);
    try {
      const res = await fetch(`/api/achpi/inscriptions/${id}/${action}`, { method: 'POST' });
      const data = await res.json();
      if (res.ok || data.success) {
        const updated = await (await fetch('/api/achpi/inscriptions')).json();
        if (updated.success) setAchpiRows(updated.inscriptions || []);
        await loadUsers();
        await loadOverview();
        setNotice(action === 'approve' ? 'Inscripción aprobada. Código de miembro entregado.' : 'Inscripción rechazada.');
        onDataChanged();
      } else showError(data, 'No se pudo procesar la solicitud.');
    } catch {
      showError({}, 'Error de conexión.');
    } finally {
      setActingEmail(null);
    }
  };

  const deleteTour = async (tourId: string) => {
    if (!window.confirm('¿Eliminar esta ruta definitivamente?')) return;
    try {
      await fetch(`/api/tours/${tourId}`, { method: 'DELETE' });
      setTours((prev) => prev.filter((t) => t.id !== tourId));
      await loadOverview();
      onDataChanged();
    } catch {}
  };

  const filteredUsers = users.filter(
    (u) => u.email.toLowerCase().includes(filter.toLowerCase()) || PLAN_LABELS[u.memberType].toLowerCase().includes(filter.toLowerCase()),
  );
  const filteredTours = tours.filter(
    (t) =>
      (t.title || '').toLowerCase().includes(filter.toLowerCase()) ||
      (t.authorEmail || '').toLowerCase().includes(filter.toLowerCase()) ||
      (t.city || '').toLowerCase().includes(filter.toLowerCase()),
  );

  if (!isOwner) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center space-y-5">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-[#B04E2A]/10 grid place-items-center">
          <ShieldCheck className="w-8 h-8 text-[#B04E2A]" />
        </div>
        <h2 className="text-2xl font-bold text-[#14281C]">Acceso restringido</h2>
        <p className="text-sm text-slate-600">
          Solo el propietario de la plataforma puede acceder al panel de administración. Si ya tienes una
          cuenta de administrador, inicia sesión.
        </p>
        <button
          onClick={onOpenAuthModal}
          className="px-5 py-2.5 bg-[#14281C] hover:bg-[#1D3626] text-white rounded-xl text-sm font-bold transition-all"
        >
          Iniciar sesión
        </button>
        <div>
          <button onClick={onBack} className="text-sm font-semibold text-[#B04E2A] hover:text-[#9A3F1E]">
            ← Volver a Explorar Rutas
          </button>
        </div>
      </div>
    );
  }

  const tabs: Array<{ key: Tab; label: string; icon: any; badge?: number }> = [
    {
      key: 'users',
      label: 'Usuarios y Miembros',
      icon: Users,
      badge: stats ? stats.totalUsers : undefined,
    },
    {
      key: 'achpi',
      label: 'Inscripciones ACHPI',
      icon: ShieldCheck,
      badge: stats && stats.pendingAchpi > 0 ? stats.pendingAchpi : undefined,
    },
    { key: 'tours', label: 'Rutas', icon: Route, badge: stats ? stats.totalTours : undefined },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      {/* Encabezado */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-[#14281C] text-[#E8A58B]">
            <Settings className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#14281C]">Panel de Administración</h1>
            <p className="text-xs text-slate-600">
              Gestiona usuarios, miembros, inscripciones ACHPI y rutas de la plataforma.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={reloadActive}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 border border-slate-200 transition-all"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Actualizar
          </button>
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#1D3626] hover:bg-[#2E4E37] text-white transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Volver al Catálogo
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-24">
          <Loader2 className="w-8 h-8 text-[#B04E2A] animate-spin" />
        </div>
      ) : (
        <>
          {/* Métricas */}
          {stats && (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {[
                { label: 'Usuarios', value: stats.totalUsers, tone: 'text-[#14281C]' },
                { label: 'Rutas', value: stats.totalTours, tone: 'text-[#B04E2A]' },
                { label: 'Paradas', value: stats.totalStops, tone: 'text-[#D97706]' },
                { label: 'Pend. ACHPI', value: stats.pendingAchpi, tone: 'text-amber-600' },
                { label: 'Ensayo gratis', value: stats.planCounts.free_basic, tone: 'text-emerald-700' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl bg-white border border-[#E4D8BF] px-4 py-3">
                  <div className={`text-2xl font-extrabold ${s.tone}`}>{s.value}</div>
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Aviso */}
          {notice && (
            <div className="rounded-xl bg-[#14281C] text-white text-xs font-semibold px-4 py-3 flex items-center justify-between gap-3">
              <span>{notice}</span>
              <button onClick={() => setNotice(null)} className="font-extrabold hover:text-[#E8A58B]">✕</button>
            </div>
          )}

          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                className={`relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === t.key
                    ? 'bg-[#B04E2A] text-white shadow-md shadow-[#B04E2A]/30'
                    : 'bg-white text-slate-600 border border-[#E4D8BF] hover:bg-slate-50'
                }`}
              >
                <t.icon className="w-4 h-4" />
                {t.label}
                {t.badge !== undefined && t.badge > 0 && (
                  <span className="min-w-[18px] h-[18px] px-1 rounded-full bg-amber-400 text-[#14281C] text-[10px] font-extrabold grid place-items-center">
                    {t.badge}
                  </span>
                )}
              </button>
            ))}
            <div className="ml-auto relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Buscar..."
                className="pl-8 pr-3 py-2 rounded-xl text-xs border border-[#E4D8BF] bg-white font-semibold focus:ring-2 focus:ring-[#B04E2A] focus:outline-none"
              />
            </div>
          </div>

          {/* Usuarios y Miembros */}
          {activeTab === 'users' && (
            <div className="rounded-2xl bg-white border border-[#E4D8BF] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-[#F6F1E5] text-slate-500 uppercase tracking-wider text-[10px]">
                      <th className="px-4 py-3 font-bold">Usuario</th>
                      <th className="px-4 py-3 font-bold">Plan</th>
                      <th className="px-4 py-3 font-bold">ACHPI</th>
                      <th className="px-4 py-3 font-bold">Rutas publicadas</th>
                      <th className="px-4 py-3 font-bold">Cambiar plan (meses)</th>
                      <th className="px-4 py-3 font-bold">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.length === 0 && (
                      <tr>
                        <td colSpan={6} className="px-4 py-8 text-center text-slate-400">
                          Sin usuarios que coincidan con la búsqueda.
                        </td>
                      </tr>
                    )}
                    {filteredUsers.map((u) => (
                      <tr key={u.email} className="border-t border-[#E4D8BF]/70 align-top">
                        <td className="px-4 py-3 font-bold text-[#14281C] max-w-[220px] break-all">{u.email}</td>
                        <td className="px-4 py-3">
                          <span className={`px-2.5 py-1 rounded-lg text-[10px] font-extrabold ${PLAN_TONES[u.memberType]}`}>
                            {PLAN_LABELS[u.memberType]}
                          </span>
                          {u.membershipExpiresAt && (
                            <div className="text-[10px] text-slate-500 mt-1">
                              Vence: {new Date(u.membershipExpiresAt).toLocaleDateString()}
                            </div>
                          )}
                        </td>
                        <td className="px-4 py-3">
                          {u.achpiStatus === 'approved' ? (
                            <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                              <CheckCircle2 className="w-3.5 h-3.5" />
                              {u.achpiCode || 'Miembro'}
                            </span>
                          ) : u.achpiStatus === 'pending' ? (
                            <span className="text-amber-600 font-bold">Pendiente</span>
                          ) : (
                            <span className="text-slate-400">—</span>
                          )}
                        </td>
                        <td className="px-4 py-3">
                          <span className="font-extrabold text-[#B04E2A]">{u.routeUsage}</span>
                          <span className="text-slate-400"> / {u.routeLimit}</span>
                          <div className="h-1.5 w-24 bg-slate-100 rounded-full mt-1 overflow-hidden">
                            <div
                              className={`h-full rounded-full ${u.routeUsage >= u.routeLimit ? 'bg-amber-500' : 'bg-emerald-500'}`}
                              style={{ width: `${Math.min(100, (u.routeUsage / (u.routeLimit || 1)) * 100)}%` }}
                            />
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-1.5">
                            <select
                              value={plans[u.email] || 'none'}
                              onChange={(e) => setPlans((p) => ({ ...p, [u.email]: e.target.value }))}
                              className="px-2 py-1.5 rounded-lg text-[11px] border border-[#CDBA95] bg-white font-semibold focus:outline-none focus:ring-2 focus:ring-[#B04E2A]"
                            >
                              <option value="none">Gratis</option>
                              <option value="basic_free">Básica Gratis (1)</option>
                              <option value="consulting_free">Consultoría (50)</option>
                              <option value="annual_paid">Membresía Plataforma (50)</option>
                            </select>
                            <input
                              type="number"
                              min={1}
                              max={60}
                              value={months[u.email] || 12}
                              onChange={(e) => setMonths((m) => ({ ...m, [u.email]: parseInt(e.target.value) || 12 }))}
                              title="Meses de duración del plan"
                              className="w-14 px-1.5 py-1.5 rounded-lg text-[11px] border border-[#CDBA95] bg-white font-semibold focus:outline-none focus:ring-2 focus:ring-[#B04E2A]"
                            />
                            <button
                              onClick={() => updatePlan(u.email)}
                              disabled={actingEmail === u.email}
                              className="px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-[#1D3626] text-white hover:bg-[#2E4E37] disabled:opacity-50"
                            >
                              {actingEmail === u.email ? <Loader2 className="w-3 h-3 animate-spin" /> : 'Aplicar'}
                            </button>
                          </div>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex flex-col gap-1.5">
                            <button
                              onClick={() => grantAchpi(u.email)}
                              disabled={actingEmail === u.email || u.achpiStatus === 'approved'}
                              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-40"
                            >
                              <KeyRound className="w-3 h-3" />
                              {u.achpiStatus === 'approved' ? 'Código activo' : 'Otorgar ACHPI'}
                            </button>
                            <button
                              onClick={() => revoke(u.email)}
                              disabled={actingEmail === u.email}
                              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 disabled:opacity-40"
                            >
                              <XCircle className="w-3 h-3" />
                              Revocar
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Inscripciones ACHPI */}
          {activeTab === 'achpi' && (
            <div className="rounded-2xl bg-white border border-[#E4D8BF] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-[#F6F1E5] text-slate-500 uppercase tracking-wider text-[10px]">
                      <th className="px-4 py-3 font-bold">Solicitante</th>
                      <th className="px-4 py-3 font-bold">Tipo de experiencia</th>
                      <th className="px-4 py-3 font-bold">Motivación / Curso</th>
                      <th className="px-4 py-3 font-bold">Estado</th>
                      <th className="px-4 py-3 font-bold">Fecha</th>
                      <th className="px-4 py-3 font-bold">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {achpiRows.length === 0 && (
                      <tr>
                        <td colSpan={6} className="px-4 py-8 text-center text-slate-400">
                          Sin inscripciones registradas.
                        </td>
                      </tr>
                    )}
                    {achpiRows.map((r) => (
                      <tr key={r.id} className="border-t border-[#E4D8BF]/70 align-top">
                        <td className="px-4 py-3">
                          <div className="font-bold text-[#14281C]">{r.name}</div>
                          <div className="text-[10px] text-slate-500 break-all">{r.email}</div>
                          <div className="text-[10px] text-slate-500">{r.region}</div>
                        </td>
                        <td className="px-4 py-3 text-slate-600">{r.experience || '—'}</td>
                        <td className="px-4 py-3 text-slate-600 max-w-[260px]">
                          {r.motivation}
                          {r.courseWithElViaje && (
                            <div className="mt-1 text-[10px] font-bold text-[#B04E2A]">
                              Curso/taller: {r.courseWithElViaje}
                            </div>
                          )}
                        </td>
                        <td className="px-4 py-3">
                          {r.status === 'approved' ? (
                            <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                              <Crown className="w-3.5 h-3.5" /> {r.memberCode || 'Miembro'}
                            </span>
                          ) : r.status === 'pending' ? (
                            <span className="text-amber-600 font-extrabold uppercase">Pendiente</span>
                          ) : (
                            <span className="text-red-500 font-bold uppercase">Rechazada</span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-slate-500">
                          {new Date(r.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-3">
                          {r.status === 'pending' && (
                            <div className="flex flex-wrap gap-1.5">
                              <button
                                onClick={() => reviewAchpi(r.id, 'approve')}
                                disabled={actingEmail === `achpi-${r.id}-approve`}
                                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-50"
                              >
                                <CheckCircle2 className="w-3 h-3" />
                                {actingEmail === `achpi-${r.id}-approve` ? <Loader2 className="w-3 h-3 animate-spin" /> : 'Aprobar'}
                              </button>
                              <button
                                onClick={() => reviewAchpi(r.id, 'reject')}
                                disabled={actingEmail === `achpi-${r.id}-reject`}
                                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 disabled:opacity-50"
                              >
                                <XCircle className="w-3 h-3" />
                                Rechazar
                              </button>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Rutas */}
          {activeTab === 'tours' && (
            <div className="rounded-2xl bg-white border border-[#E4D8BF] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-[#F6F1E5] text-slate-500 uppercase tracking-wider text-[10px]">
                      <th className="px-4 py-3 font-bold">Ruta</th>
                      <th className="px-4 py-3 font-bold">Ciudad</th>
                      <th className="px-4 py-3 font-bold">Autor</th>
                      <th className="px-4 py-3 font-bold">Paradas</th>
                      <th className="px-4 py-3 font-bold">Estado</th>
                      <th className="px-4 py-3 font-bold">Creada</th>
                      <th className="px-4 py-3 font-bold">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTours.length === 0 && (
                      <tr>
                        <td colSpan={7} className="px-4 py-8 text-center text-slate-400">
                          Sin rutas que coincidan con la búsqueda.
                        </td>
                      </tr>
                    )}
                    {filteredTours.map((t) => (
                      <tr key={t.id} className="border-t border-[#E4D8BF]/70 align-top">
                        <td className="px-4 py-3 font-bold text-[#14281C] max-w-[240px]">{t.title}</td>
                        <td className="px-4 py-3 text-slate-600">{t.city || '—'}</td>
                        <td className="px-4 py-3 text-slate-600 max-w-[200px] break-all">
                          {t.authorEmail || t.authorName || 'Sistema'}
                        </td>
                        <td className="px-4 py-3 font-extrabold text-[#B04E2A]">{t.stops}</td>
                        <td className="px-4 py-3">
                          {t.published ? (
                            <span className="px-2 py-0.5 rounded-lg bg-emerald-50 text-emerald-700 text-[10px] font-extrabold uppercase">
                              Publicada
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-lg bg-slate-100 text-slate-500 text-[10px] font-extrabold uppercase">
                              Borrador
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-slate-500">{new Date(t.createdAt).toLocaleDateString()}</td>
                        <td className="px-4 py-3">
                          <button
                            onClick={() => deleteTour(t.id)}
                            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-bold bg-red-50 text-red-700 border border-red-200 hover:bg-red-100"
                          >
                            <Trash2 className="w-3 h-3" />
                            Eliminar
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}