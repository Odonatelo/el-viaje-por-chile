import React from 'react';
import { X, Receipt, Clock, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';
import { UserProfile } from '../types';

interface PaymentHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserProfile | null;
}

interface PaymentRecord {
  id: string;
  payerEmail?: string;
  payerName?: string;
  planId?: string;
  planTitle?: string;
  amountClp?: number;
  status?: 'approved' | 'pending' | 'rejected' | 'in_process';
  dateCreated?: string;
  paymentMethod?: string;
  demo?: boolean;
}

const STATUS_STYLES: Record<string, { cls: string; label: string; icon: React.ReactNode }> = {
  approved: { cls: 'bg-emerald-100 text-emerald-800 border-emerald-300', label: 'Aprobado', icon: <CheckCircle2 className="w-3.5 h-3.5" /> },
  pending: { cls: 'bg-amber-100 text-amber-800 border-amber-300', label: 'Pendiente', icon: <Clock className="w-3.5 h-3.5" /> },
  in_process: { cls: 'bg-sky-100 text-sky-800 border-sky-300', label: 'En proceso', icon: <Clock className="w-3.5 h-3.5" /> },
  rejected: { cls: 'bg-rose-100 text-rose-800 border-rose-300', label: 'Rechazado', icon: <XCircle className="w-3.5 h-3.5" /> },
};

const fmtClp = (n?: number) => `${(n ?? 0).toLocaleString('es-CL')} CLP`;

export const PaymentHistoryModal: React.FC<PaymentHistoryModalProps> = ({ isOpen, onClose, currentUser }) => {
  const [records, setRecords] = React.useState<PaymentRecord[]>([]);
  const [demoSamples, setDemoSamples] = React.useState<PaymentRecord[]>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (!isOpen) return;
    setLoading(true);
    fetch('/api/mercadopago/config')
      .then((r) => r.json())
      .then((data) => {
        setRecords(Array.isArray(data.paymentRecords) ? data.paymentRecords : []);
        setDemoSamples(Array.isArray(data.demoSamples) ? data.demoSamples : []);
        setLoading(false);
      })
      .catch(() => {
        setRecords([]);
        setDemoSamples([]);
        setLoading(false);
      });
  }, [isOpen]);

  if (!isOpen) return null;

  const renderRow = (p: PaymentRecord, isDemo: boolean) => {
    const s = STATUS_STYLES[p.status || 'pending'] || STATUS_STYLES.pending;
    return (
      <tr key={p.id} className="border-b border-slate-100 hover:bg-slate-50">
        <td className="px-3 py-2.5 text-xs text-slate-500 whitespace-nowrap">
          {p.dateCreated ? new Date(p.dateCreated).toLocaleString('es-CL') : '—'}
        </td>
        <td className="px-3 py-2.5">
          <div className="text-xs font-semibold text-[#0D1B2D]">{p.payerName || '—'}</div>
          <div className="text-[11px] text-slate-500">{p.payerEmail || '—'}</div>
        </td>
        <td className="px-3 py-2.5 text-xs text-slate-700 max-w-[180px] truncate">{p.planTitle || p.planId || '—'}</td>
        <td className="px-3 py-2.5 text-xs font-bold text-[#0D1B2D] whitespace-nowrap">{fmtClp(p.amountClp)}</td>
        <td className="px-3 py-2.5">
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold border ${s.cls}`}>
            {s.icon}
            {s.label}
          </span>
        </td>
        <td className="px-3 py-2.5 text-[11px] text-slate-500">{p.paymentMethod || '—'}</td>
        {isDemo && (
          <td className="px-3 py-2.5">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-200 text-slate-600 border border-slate-300">
              <AlertTriangle className="w-3 h-3" /> DEMO
            </span>
          </td>
        )}
      </tr>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-3xl max-h-[85vh] rounded-3xl shadow-2xl border border-[#E8DFC8] overflow-hidden flex flex-col">
        <div className="px-6 py-4 bg-[#0D1B2D] text-white flex items-center justify-between border-b border-[#192E47]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
              <Receipt className="w-5 h-5 text-emerald-300" />
            </div>
            <div>
              <h3 className="text-base font-bold font-['Outfit',sans-serif]">Historial de Cobros</h3>
              <p className="text-xs text-slate-400">Mercado Pago Chile · {currentUser?.email}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          {loading ? (
            <div className="py-10 text-center text-sm text-slate-500">Cargando historial…</div>
          ) : (
            <div className="space-y-6">
              {/* Real payments */}
              <section>
                <h4 className="text-sm font-bold text-[#0D1B2D] mb-2">Cobros reales (Mercado Pago)</h4>
                {records.length === 0 ? (
                  <p className="text-xs text-slate-500 bg-slate-50 border border-slate-200 rounded-xl p-3">
                    Aún no hay cobros reales registrados. Configura <code className="px-1 bg-white rounded">MERCADOPAGO_ACCESS_TOKEN</code> para habilitar pagos reales.
                  </p>
                ) : (
                  <div className="overflow-x-auto border border-slate-200 rounded-xl">
                    <table className="w-full text-left">
                      <thead className="bg-slate-50 text-[11px] uppercase text-slate-500">
                        <tr>
                          <th className="px-3 py-2">Fecha</th>
                          <th className="px-3 py-2">Pagador</th>
                          <th className="px-3 py-2">Plan</th>
                          <th className="px-3 py-2">Monto</th>
                          <th className="px-3 py-2">Estado</th>
                          <th className="px-3 py-2">Método</th>
                        </tr>
                      </thead>
                      <tbody>{records.map((p) => renderRow(p, false))}</tbody>
                    </table>
                  </div>
                )}
              </section>

              {/* Demo samples */}
              <section>
                <h4 className="text-sm font-bold text-[#0D1B2D] mb-2 flex items-center gap-2">
                  Modo Demostración
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-slate-200 text-slate-600 border border-slate-300">
                    <AlertTriangle className="w-3 h-3" /> No representa dinero real
                  </span>
                </h4>
                {demoSamples.length === 0 ? (
                  <p className="text-xs text-slate-500">Sin datos de ejemplo.</p>
                ) : (
                  <div className="overflow-x-auto border border-slate-200 rounded-xl">
                    <table className="w-full text-left">
                      <thead className="bg-slate-50 text-[11px] uppercase text-slate-500">
                        <tr>
                          <th className="px-3 py-2">Fecha</th>
                          <th className="px-3 py-2">Pagador</th>
                          <th className="px-3 py-2">Plan</th>
                          <th className="px-3 py-2">Monto</th>
                          <th className="px-3 py-2">Estado</th>
                          <th className="px-3 py-2">Método</th>
                          <th className="px-3 py-2">Tipo</th>
                        </tr>
                      </thead>
                      <tbody>{demoSamples.map((p) => renderRow(p, true))}</tbody>
                    </table>
                  </div>
                )}
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
