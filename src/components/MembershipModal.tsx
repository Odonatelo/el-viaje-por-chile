import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  ExternalLink, 
  CreditCard, 
  Compass, 
  Gift, 
  Key, 
  Check, 
  HelpCircle,
  Clock,
  Globe,
  Radio,
  FileCheck
} from 'lucide-react';

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  isMember: boolean;
  memberType: 'none' | 'annual_paid' | 'consulting_free';
  onOpenMercadoPago: () => void;
  onAuthRefreshed: () => void;
  onOpenConsultingModal: () => void;
}

export const MembershipModal: React.FC<MembershipModalProps> = ({
  isOpen,
  onClose,
  isMember,
  memberType,
  onOpenMercadoPago,
  onAuthRefreshed,
  onOpenConsultingModal,
}) => {
  const [activeTab, setActiveTab] = useState<'plans' | 'redeem'>('plans');
  const [voucherCode, setVoucherCode] = useState('');
  const [voucherError, setVoucherError] = useState('');
  const [voucherSuccess, setVoucherSuccess] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  if (!isOpen) return null;

  const handleRedeemVoucher = async (e: React.FormEvent) => {
    e.preventDefault();
    setVoucherError('');
    const code = voucherCode.trim().toUpperCase();

    if (!code) {
      setVoucherError('Por favor ingresa tu código de consultoría o cupón.');
      return;
    }

    try {
      const res = await fetch('/api/membership/redeem', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
      const data = await res.json();
      if (data.success) {
        setVoucherSuccess(true);
        onAuthRefreshed();
        setTimeout(() => onClose(), 1200);
      } else {
        setVoucherError(data.error || 'Código no válido. Si realizaste tu consultoría en Tienda El Viaje, contacta a tiendaelviaje@gmail.com.');
      }
    } catch {
      setVoucherError('Error de conexión con el servidor.');
    }
  };

  const handlePayWithMercadoPago = () => {
    onOpenMercadoPago();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex justify-center p-3 sm:p-5 animate-fadeIn">
      <div 
        className="relative bg-white text-slate-900 w-full max-w-3xl rounded-3xl shadow-2xl border border-[#E4D8BF] overflow-hidden my-auto max-h-[94vh] flex flex-col font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#14281C] via-[#1D3626] to-[#14281C] text-white px-6 py-5 flex items-center justify-between border-b border-[#2A4533]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#B04E2A] flex items-center justify-center text-white shadow-lg shadow-[#B04E2A]/40">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E8A58B]">
                  El Viaje Por Chile • www.interpretaciondelpatrimonio.cl
                </span>
                {isMember && (
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/40 font-bold">
                    Membresía Activa
                  </span>
                )}
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
                Membresía & Acceso a la Plataforma
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-[#223F2C] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="bg-[#F6F1E5] border-b border-[#E4D8BF] px-6 py-2 flex items-center gap-2">
          <button
            onClick={() => setActiveTab('plans')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'plans'
                ? 'bg-[#14281C] text-white shadow-sm'
                : 'text-slate-600 hover:text-[#14281C] hover:bg-white/60'
            }`}
          >
            Opciones de Acceso (Fee Anual vs Consultoría)
          </button>
          <button
            onClick={() => setActiveTab('redeem')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'redeem'
                ? 'bg-[#14281C] text-white shadow-sm'
                : 'text-slate-600 hover:text-[#14281C] hover:bg-white/60'
            }`}
          >
            <Key className="w-3.5 h-3.5 text-[#B04E2A]" />
            <span>Canjear Acceso por Consultoría</span>
          </button>
        </div>

        {/* Body Content */}
        <div className="overflow-y-auto flex-1 p-6 space-y-6 bg-[#F6F1E5]">

          {activeTab === 'plans' ? (
            <>
              {/* Introduction Banner */}
              <div className="bg-white p-5 rounded-2xl border border-[#E4D8BF] shadow-sm space-y-2">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  Para formar parte de <strong>El Viaje Por Chile (www.interpretaciondelpatrimonio.cl)</strong> y publicar tus rutas geolocalizadas con narraciones sonoras con IA, cartografía y guías de campo, dispones de dos modalidades oficiales:
                </p>
              </div>

              {/* Two Column Pricing / Access Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Option 1: Annual Fee 100 USD */}
                <div className={`bg-white rounded-3xl p-6 border-2 flex flex-col justify-between transition-all ${
                  memberType === 'annual_paid'
                    ? 'border-emerald-600 shadow-md ring-2 ring-emerald-500/20'
                    : 'border-[#E4D8BF] hover:border-[#B04E2A] shadow-sm'
                }`}>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        Modalidad Directa
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-[#14281C]/5 text-[#14281C] flex items-center justify-center">
                        <CreditCard className="w-4 h-4" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
                        Fee Anual Creador
                      </h3>
                      <p className="text-xs text-slate-500">Acceso completo durante 12 meses</p>
                    </div>

                    <div className="flex items-baseline gap-1 py-1">
                      <span className="text-3xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
                        $49.990
                      </span>
                      <span className="text-xs font-bold text-slate-500 uppercase">CLP / año (Mercado Pago)</span>
                    </div>

                    <ul className="space-y-2 text-xs text-slate-600 border-t border-[#F6F1E5] pt-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Publicación de rutas y audioguías ilimitadas en <strong>www.interpretaciondelpatrimonio.cl</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Locución de audio con IA (Gemini TTS) y subida de archivos MP3 propios</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Formatos de descarga de rutas universales <strong>(GPX para GPS y Guías PDF)</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>Recaudación segura procesada con <strong>Mercado Pago Chile</strong></span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-6">
                    {memberType === 'annual_paid' ? (
                      <div className="w-full py-2.5 bg-emerald-100 text-emerald-800 text-center text-xs font-bold rounded-xl border border-emerald-300">
                        ✓ Plan Anual Activo
                      </div>
                    ) : (
                      <button
                        onClick={handlePayWithMercadoPago}
                        className="w-full py-3 bg-[#009EE3] hover:bg-[#0086C2] text-white text-xs font-bold rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isProcessingPayment ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Conectando con Mercado Pago...</span>
                          </>
                        ) : (
                          <>
                            <CreditCard className="w-4 h-4" />
                            <span>Pagar con Mercado Pago ($49.990 CLP)</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {/* Option 2: Free Access via Personalized Heritage Consulting */}
                <div className={`bg-gradient-to-br from-[#2F5238] to-[#203C29] text-white rounded-3xl p-6 border-2 flex flex-col justify-between relative overflow-hidden transition-all ${
                  memberType === 'consulting_free'
                    ? 'border-emerald-300 shadow-xl ring-2 ring-emerald-400/40'
                    : 'border-emerald-700 shadow-md hover:border-emerald-400'
                }`}>
                  <div className="absolute top-0 right-0 bg-[#B04E2A] text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-bl-2xl shadow">
                    Recomendado
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                        Vía Tienda El Viaje
                      </span>
                    </div>

                    <div>
                      <h3 className="text-lg font-extrabold text-white font-['Cormorant_Garamond',Georgia,serif] flex items-center gap-2">
                        <span>Consultoría Personalizada</span>
                        <Sparkles className="w-4 h-4 text-amber-300" />
                      </h3>
                      <p className="text-xs text-emerald-200">Acceso GRATIS por 12 meses incluido</p>
                    </div>

                    <div className="flex items-baseline gap-1 py-1">
                      <span className="text-3xl font-extrabold text-white font-['Cormorant_Garamond',Georgia,serif]">
                        GRATIS
                      </span>
                      <span className="text-xs font-bold text-emerald-200">con tu sesión de consultoría</span>
                    </div>

                    <ul className="space-y-2 text-xs text-emerald-100 border-t border-emerald-600/40 pt-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-300 flex-shrink-0 mt-0.5" />
                        <span><strong>12 meses de membresía sin costo</strong> en El Viaje Por Chile</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-300 flex-shrink-0 mt-0.5" />
                        <span>Asesoría 1 a 1 de diseño de rutas en Interpretación del Patrimonio</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-300 flex-shrink-0 mt-0.5" />
                        <span>Curaduría de guiones sonoros y revisión experta de paradas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-300 flex-shrink-0 mt-0.5" />
                        <span>Integración preferente en el catálogo oficial de Tienda El Viaje</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-6 space-y-2">
                    {memberType === 'consulting_free' ? (
                      <div className="w-full py-2.5 bg-emerald-400 text-emerald-950 text-center text-xs font-bold rounded-xl shadow">
                        ✓ Acceso por Consultoría Activo
                      </div>
                    ) : (
                      <>
                        <a
                          href="https://www.tiendaelviaje.cl/consultoria-para-tu-viaje-personal-en-interpretacion-del-patrimonio"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3 bg-[#B04E2A] hover:bg-[#9A3F1E] text-white text-xs font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2"
                        >
                          <span>Agendar Consultoría en Tienda El Viaje</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <button
                          onClick={() => {
                            onClose();
                            onOpenConsultingModal();
                          }}
                          className="w-full text-center text-[11px] text-emerald-200 hover:text-white underline py-1 font-semibold"
                        >
                          Conocer más sobre el servicio de consultoría
                        </button>
                      </>
                    )}
                  </div>
                </div>

              </div>
            </>
          ) : (
            /* Tab: Redeem Voucher */
            <div className="bg-white p-6 rounded-3xl border border-[#E4D8BF] shadow-sm space-y-5">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-2xl bg-[#B04E2A]/10 text-[#B04E2A] flex items-center justify-center font-bold">
                  <Key className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
                  ¿Realizaste tu Consultoría en Tienda El Viaje?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ingresa el código o comprobante que te entregó tu consultor para activar tus <strong>12 meses de membresía gratuita</strong> en la plataforma.
                </p>
              </div>

              <form onSubmit={handleRedeemVoucher} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Código de Consultoría o Voucher
                  </label>
                  <input
                    type="text"
                    value={voucherCode}
                    onChange={(e) => setVoucherCode(e.target.value)}
                    placeholder="Ej. CONSULTORIA-CHILE-2026 o VIAJE-PATRIMONIO"
                    className="w-full px-4 py-3 bg-[#F6F1E5] border border-[#CDBA95] rounded-2xl font-mono text-sm uppercase focus:bg-white focus:ring-2 focus:ring-[#B04E2A] focus:outline-none"
                  />
                  {voucherError && (
                    <p className="text-xs text-rose-600 mt-1 font-semibold">{voucherError}</p>
                  )}
                  {voucherSuccess && (
                    <p className="text-xs text-emerald-600 mt-1 font-semibold flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" />
                      <span>¡Código validado exitosamente! Activando membresía gratuita por 12 meses...</span>
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#B04E2A] hover:bg-[#9A3F1E] text-white text-xs font-bold rounded-xl shadow-md transition-all"
                  >
                    Activar Membresía Gratuita
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setVoucherCode('CONSULTORIA-TIENDAELVIAJE');
                    }}
                    className="text-xs text-slate-500 hover:text-[#B04E2A] underline font-semibold"
                  >
                    Usar código demo (CONSULTORIA-TIENDAELVIAJE)
                  </button>
                </div>
              </form>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-white border-t border-[#E4D8BF] flex items-center justify-between">
          <div className="text-xs text-slate-500 font-semibold">
            Dominio oficial: <strong className="font-mono text-[#B04E2A]">www.interpretaciondelpatrimonio.cl</strong>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
