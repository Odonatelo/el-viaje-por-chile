import React, { useState, useEffect } from 'react';
import { 
  X, 
  CreditCard, 
  ShieldCheck, 
  CheckCircle2, 
  Settings, 
  DollarSign, 
  ExternalLink, 
  Lock, 
  Sparkles, 
  Building2, 
  UserCheck, 
  RefreshCw, 
  AlertCircle,
  HelpCircle,
  Clock,
  ArrowRight
} from 'lucide-react';
import { UserProfile, MercadoPagoConfig, MercadoPagoPaymentRecord } from '../types';

interface MercadoPagoModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserProfile | null;
  onPaymentSuccess?: (planId: string) => void;
  defaultPlan?: 'single_tour' | 'annual_membership' | 'enterprise_pack';
}

export const MercadoPagoModal: React.FC<MercadoPagoModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onPaymentSuccess,
  defaultPlan = 'annual_membership',
}) => {
  const isOwner = currentUser?.email?.toLowerCase() === 'juancarlos.castaing@gmail.com';

  const [activeTab, setActiveTab] = useState<'checkout' | 'admin_settings' | 'history'>(
    isOwner ? 'admin_settings' : 'checkout'
  );

  // Selected plan for checkout
  const [selectedPlan, setSelectedPlan] = useState<'single_tour' | 'annual_membership' | 'enterprise_pack'>(defaultPlan);
  const [payerEmail, setPayerEmail] = useState(currentUser?.email || '');
  const [payerName, setPayerName] = useState(currentUser?.name || '');

  // Loading & process states
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentResult, setPaymentResult] = useState<{
    success: boolean;
    message: string;
    preferenceId?: string;
    initPoint?: string;
  } | null>(null);

  // Mercado Pago Config State (from API)
  const [config, setConfig] = useState<Partial<MercadoPagoConfig>>({
    publicKey: '',
    accessToken: '',
    currency: 'CLP',
    singleTourPriceClp: 14990,
    annualMembershipPriceClp: 49990,
    enterprisePriceClp: 189990,
    isLiveMode: false,
    ownerEmail: 'juancarlos.castaing@gmail.com',
    ownerName: 'Juan Carlos Castaing',
  });

  const [paymentHistory, setPaymentHistory] = useState<MercadoPagoPaymentRecord[]>([]);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState<string | null>(null);
  const [isLoadingConfig, setIsLoadingConfig] = useState(false);

  // Load config & payment records on open
  useEffect(() => {
    if (isOpen) {
      loadConfig();
      if (currentUser?.email) {
        setPayerEmail(currentUser.email);
        setPayerName(currentUser.name);
      }
    }
  }, [isOpen, currentUser]);

  const loadConfig = async () => {
    setIsLoadingConfig(true);
    try {
      const res = await fetch(`/api/mercadopago/config?email=${encodeURIComponent(currentUser?.email || '')}`);
      const data = await res.json();
      if (data.success && data.config) {
        setConfig(prev => ({ ...prev, ...data.config }));
        if (data.paymentRecords) {
          setPaymentHistory(data.paymentRecords);
        }
      }
    } catch (err) {
      console.error('Error fetching Mercado Pago config:', err);
    } finally {
      setIsLoadingConfig(false);
    }
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setSaveSuccessMsg(null);

    try {
      const res = await fetch('/api/mercadopago/save-config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userEmail: currentUser?.email,
          accessToken: config.accessToken,
          publicKey: config.publicKey,
          singleTourPriceClp: config.singleTourPriceClp,
          annualMembershipPriceClp: config.annualMembershipPriceClp,
          enterprisePriceClp: config.enterprisePriceClp,
          isLiveMode: config.isLiveMode,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSaveSuccessMsg('¡Credenciales y tarifas de Mercado Pago guardadas con éxito!');
        setTimeout(() => setSaveSuccessMsg(null), 4000);
      } else {
        alert(data.error || 'Error al guardar la configuración');
      }
    } catch (err: any) {
      alert('Error de conexión con el servidor: ' + err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCreatePreferenceAndPay = async () => {
    setIsProcessing(true);
    setPaymentResult(null);

    const price = selectedPlan === 'single_tour' 
      ? config.singleTourPriceClp || 14990
      : selectedPlan === 'enterprise_pack'
      ? config.enterprisePriceClp || 189990
      : config.annualMembershipPriceClp || 49990;

    const title = selectedPlan === 'single_tour'
      ? 'Publicación de Audioguía Individual • El Viaje Por Chile'
      : selectedPlan === 'enterprise_pack'
      ? 'Plan Municipalidades & Turismo Patrimonial • El Viaje Por Chile'
      : 'Membresía Anual de Creador de Audioguías • El Viaje Por Chile';

    try {
      const res = await fetch('/api/mercadopago/create-preference', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          priceClp: price,
          payerEmail,
          payerName,
          planId: selectedPlan,
        }),
      });

      const data = await res.json();
      if (data.success) {
        if (data.demo) {
          // Modo demo: no se cobra dinero real. Se usa solo para pruebas.
          setPaymentResult({
            success: true,
            message: `MODO DEMO: no se cobró dinero real. Configura MERCADOPAGO_ACCESS_TOKEN para cobros reales.`,
            preferenceId: data.preferenceId,
            initPoint: data.initPoint,
          });
          if (onPaymentSuccess) onPaymentSuccess(selectedPlan);
        } else if (data.initPoint) {
          // Redirige al checkout real de Mercado Pago
          window.location.href = data.initPoint;
          return;
        } else {
          setPaymentResult({
            success: true,
            message: `Preferencia de pago creada por $${price.toLocaleString('es-CL')} CLP. Serás redirigido a Mercado Pago.`,
            preferenceId: data.preferenceId,
            initPoint: data.initPoint,
          });
        }
      } else {
        setPaymentResult({
          success: false,
          message: data.error || 'No se pudo generar la preferencia de Mercado Pago.',
        });
      }
    } catch (err: any) {
      setPaymentResult({
        success: false,
        message: 'Error al conectar con la pasarela de Mercado Pago: ' + err.message,
      });
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#F6F1E5] w-full max-w-3xl rounded-3xl shadow-2xl border border-[#E4D8BF] overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header with Mercado Pago Chile Official Badge */}
        <div className="bg-[#14281C] text-white p-6 relative flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#40624A]">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#009EE3] text-white tracking-wider uppercase">
                <CreditCard className="w-3 h-3" />
                Mercado Pago Chile
              </span>
              <span className="text-[11px] font-semibold text-slate-300">
                www.mercadopago.cl
              </span>
            </div>
            <h2 className="text-xl font-bold font-['Cormorant_Garamond',Georgia,serif] text-white flex items-center gap-2">
              Pasarela de Monetización & Pagos
            </h2>
            <p className="text-xs text-slate-300">
              Recaudación oficial y directa a nombre de <strong>Juan Carlos Castaing</strong> (El Viaje Por Chile)
            </p>
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center border-b border-[#E4D8BF] bg-white px-6">
          <button
            onClick={() => setActiveTab('checkout')}
            className={`py-3 px-4 text-xs font-bold border-b-2 flex items-center gap-2 transition-all ${
              activeTab === 'checkout'
                ? 'border-[#009EE3] text-[#009EE3]'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <CreditCard className="w-4 h-4" />
            <span>Pagar / Adquirir Publicación</span>
          </button>

          {isOwner && (
            <>
              <button
                onClick={() => setActiveTab('admin_settings')}
                className={`py-3 px-4 text-xs font-bold border-b-2 flex items-center gap-2 transition-all ${
                  activeTab === 'admin_settings'
                    ? 'border-[#B04E2A] text-[#B04E2A]'
                    : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                <Settings className="w-4 h-4" />
                <span>Configuración de Propietario (Fácil Setup)</span>
              </button>

              <button
                onClick={() => setActiveTab('history')}
                className={`py-3 px-4 text-xs font-bold border-b-2 flex items-center gap-2 transition-all ${
                  activeTab === 'history'
                    ? 'border-[#14281C] text-[#14281C]'
                    : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                <DollarSign className="w-4 h-4" />
                <span>Cobros Recaudados ({paymentHistory.length})</span>
              </button>
            </>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* TAB 1: CHECKOUT / PAGAR PUBLICACIÓN */}
          {activeTab === 'checkout' && (
            <div className="space-y-6">
              
              {/* Payment result banner */}
              {paymentResult && (
                <div className={`p-4 rounded-2xl border flex items-start gap-3 ${
                  paymentResult.success 
                    ? 'bg-emerald-50 border-emerald-200 text-emerald-900' 
                    : 'bg-rose-50 border-rose-200 text-rose-900'
                }`}>
                  {paymentResult.success ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  )}
                  <div className="text-xs space-y-1">
                    <p className="font-bold">{paymentResult.success ? '¡Operación Exitosa!' : 'Error en el Pago'}</p>
                    <p>{paymentResult.message}</p>
                    {paymentResult.preferenceId && (
                      <p className="font-mono text-[10px] text-emerald-700">
                        Referencia Mercado Pago: {paymentResult.preferenceId}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Plans Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                  Selecciona la opción para subir y publicar audioguías:
                </label>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Plan 1: Single Tour */}
                  <div
                    onClick={() => setSelectedPlan('single_tour')}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      selectedPlan === 'single_tour'
                        ? 'border-[#009EE3] bg-[#009EE3]/5 shadow-md'
                        : 'border-[#E4D8BF] bg-white hover:border-slate-400'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold text-slate-500 uppercase">Pago Único</span>
                      {selectedPlan === 'single_tour' && <CheckCircle2 className="w-4 h-4 text-[#009EE3]" />}
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Publicación Individual</h3>
                    <div className="my-2">
                      <span className="text-xl font-black text-[#14281C]">
                        ${(config.singleTourPriceClp || 14990).toLocaleString('es-CL')}
                      </span>
                      <span className="text-[10px] text-slate-500 font-bold ml-1">CLP</span>
                    </div>
                    <ul className="text-[11px] text-slate-600 space-y-1 mt-3">
                      <li>✓ Subida de 1 ruta completa</li>
                      <li>✓ Paradas GPS y audios ilimitados</li>
                      <li>✓ Formatos descargables GPX y PDF</li>
                    </ul>
                  </div>

                  {/* Plan 2: Annual Creator Membership (Recommended) */}
                  <div
                    onClick={() => setSelectedPlan('annual_membership')}
                    className={`p-4 rounded-2xl border-2 cursor-pointer relative transition-all ${
                      selectedPlan === 'annual_membership'
                        ? 'border-[#B04E2A] bg-[#B04E2A]/5 shadow-lg'
                        : 'border-[#E4D8BF] bg-white hover:border-slate-400'
                    }`}
                  >
                    <div className="absolute -top-2.5 right-3 bg-[#B04E2A] text-white text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow">
                      Recomendado
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold text-[#B04E2A] uppercase">Membresía Anual</span>
                      {selectedPlan === 'annual_membership' && <CheckCircle2 className="w-4 h-4 text-[#B04E2A]" />}
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Creador Ilimitado</h3>
                    <div className="my-2">
                      <span className="text-xl font-black text-[#B04E2A]">
                        ${(config.annualMembershipPriceClp || 49990).toLocaleString('es-CL')}
                      </span>
                      <span className="text-[10px] text-slate-500 font-bold ml-1">CLP / año</span>
                    </div>
                    <ul className="text-[11px] text-slate-600 space-y-1 mt-3">
                      <li>✓ Subida <strong>ilimitada</strong> de rutas</li>
                      <li>✓ Generación con IA de Gemini</li>
                      <li>✓ Insignia de Creador Verificado</li>
                      <li>✓ Soporte directo del Propietario</li>
                    </ul>
                  </div>

                  {/* Plan 3: Enterprise / Municipalities */}
                  <div
                    onClick={() => setSelectedPlan('enterprise_pack')}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      selectedPlan === 'enterprise_pack'
                        ? 'border-[#14281C] bg-[#14281C]/5 shadow-md'
                        : 'border-[#E4D8BF] bg-white hover:border-slate-400'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-bold text-slate-500 uppercase">Institucional</span>
                      {selectedPlan === 'enterprise_pack' && <CheckCircle2 className="w-4 h-4 text-[#14281C]" />}
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">Municipal & Turismo</h3>
                    <div className="my-2">
                      <span className="text-xl font-black text-[#14281C]">
                        ${(config.enterprisePriceClp || 189990).toLocaleString('es-CL')}
                      </span>
                      <span className="text-[10px] text-slate-500 font-bold ml-1">CLP</span>
                    </div>
                    <ul className="text-[11px] text-slate-600 space-y-1 mt-3">
                      <li>✓ Hasta 10 rutas patrimoniales</li>
                      <li>✓ Exportación de mapas y datos</li>
                      <li>✓ Factura exenta / Boleta electrónica</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Payer Details */}
              <div className="bg-white p-5 rounded-2xl border border-[#E4D8BF] space-y-4">
                <h4 className="text-xs font-bold text-slate-900 uppercase flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#009EE3]" />
                  Datos del Pagador (Receptor de la Activación)
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-600 block mb-1">Nombre o Institución</label>
                    <input
                      type="text"
                      value={payerName}
                      onChange={(e) => setPayerName(e.target.value)}
                      placeholder="Ej. Fundación Patrimonial Aysén"
                      className="w-full px-3 py-2 text-xs bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl focus:ring-2 focus:ring-[#009EE3]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-semibold text-slate-600 block mb-1">Correo Electrónico</label>
                    <input
                      type="email"
                      value={payerEmail}
                      onChange={(e) => setPayerEmail(e.target.value)}
                      placeholder="correo@ejemplo.cl"
                      className="w-full px-3 py-2 text-xs bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl focus:ring-2 focus:ring-[#009EE3]"
                    />
                  </div>
                </div>

                {/* Accepted payment methods in Chile */}
                <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-700">Medios de Pago Mercado Pago:</span>
                    <span className="bg-slate-100 px-2 py-0.5 rounded text-[10px] font-semibold text-slate-700">Webpay Plus</span>
                    <span className="bg-slate-100 px-2 py-0.5 rounded text-[10px] font-semibold text-slate-700">Redcompra</span>
                    <span className="bg-slate-100 px-2 py-0.5 rounded text-[10px] font-semibold text-slate-700">Tarjetas de Crédito / Débito</span>
                    <span className="bg-slate-100 px-2 py-0.5 rounded text-[10px] font-semibold text-slate-700">Saldo Mercado Pago</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-700 font-bold">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Pago Seguro SSL 256-bit</span>
                  </div>
                </div>
              </div>

              {/* Direct Checkout Action Button */}
              <button
                onClick={handleCreatePreferenceAndPay}
                disabled={isProcessing}
                className="w-full flex items-center justify-center gap-3 py-4 px-6 bg-[#009EE3] hover:bg-[#0086C2] text-white rounded-2xl font-bold text-sm shadow-xl shadow-[#009EE3]/20 transition-all cursor-pointer disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Conectando con Mercado Pago Chile...</span>
                  </>
                ) : (
                  <>
                    <CreditCard className="w-5 h-5" />
                    <span>
                      Pagar ${(
                        selectedPlan === 'single_tour'
                          ? config.singleTourPriceClp || 14990
                          : selectedPlan === 'enterprise_pack'
                          ? config.enterprisePriceClp || 189990
                          : config.annualMembershipPriceClp || 49990
                      ).toLocaleString('es-CL')} CLP con Mercado Pago
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-center text-[11px] text-slate-500">
                Los fondos son transferidos directamente a la cuenta verificada de Mercado Pago de <strong>Juan Carlos Castaing</strong>.
              </p>
            </div>
          )}

          {/* TAB 2: CONFIGURACIÓN DE PROPIETARIO (FÁCIL SETUP) */}
          {isOwner && activeTab === 'admin_settings' && (
            <form onSubmit={handleSaveSettings} className="space-y-6">
              
              {saveSuccessMsg && (
                <div className="p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{saveSuccessMsg}</span>
                </div>
              )}

              {/* Owner Exclusivity Notice */}
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-amber-900 space-y-1">
                  <p className="font-bold">Acceso Exclusivo del Propietario</p>
                  <p>
                    Como propietario de la plataforma (<strong>{currentUser?.email}</strong>), eres el único habilitado para definir las tarifas y recibir los cobros por publicación de audioguías directamente en tu cuenta de Mercado Pago Chile (www.mercadopago.cl).
                  </p>
                </div>
              </div>

              {/* Easy Setup Form */}
              <div className="bg-white p-5 rounded-2xl border border-[#E4D8BF] space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-900 uppercase">
                    1. Credenciales de Mercado Pago Chile
                  </h4>
                  <a
                    href="https://www.mercadopago.cl/developers/panel/app"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] text-[#009EE3] hover:underline font-bold flex items-center gap-1"
                  >
                    <span>Obtener llaves en Developers Mercado Pago</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      Access Token (Producción o Pruebas)
                    </label>
                    <input
                      type="password"
                      value={config.accessToken || ''}
                      onChange={(e) => setConfig({ ...config, accessToken: e.target.value })}
                      placeholder="APP_USR-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
                      className="w-full px-3.5 py-2 text-xs bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl font-mono focus:ring-2 focus:ring-[#009EE3]"
                    />
                    <span className="text-[10px] text-slate-500 block mt-0.5">
                      Ingresa tu Access Token de www.mercadopago.cl para activar cobros en vivo.
                    </span>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-slate-700 block mb-1">
                      Public Key
                    </label>
                    <input
                      type="text"
                      value={config.publicKey || ''}
                      onChange={(e) => setConfig({ ...config, publicKey: e.target.value })}
                      placeholder="APP_USR-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
                      className="w-full px-3.5 py-2 text-xs bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl font-mono focus:ring-2 focus:ring-[#009EE3]"
                    />
                  </div>
                </div>
              </div>

              {/* Pricing in Chilean Pesos (CLP) */}
              <div className="bg-white p-5 rounded-2xl border border-[#E4D8BF] space-y-4">
                <h4 className="text-xs font-bold text-slate-900 uppercase">
                  2. Definición de Tarifas de Cobro en Pesos Chilenos (CLP)
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Publicación Individual
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2 text-xs text-slate-400 font-bold">$</span>
                      <input
                        type="number"
                        value={config.singleTourPriceClp || 14990}
                        onChange={(e) => setConfig({ ...config, singleTourPriceClp: Number(e.target.value) })}
                        className="w-full pl-7 pr-3 py-2 text-xs bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl font-bold text-slate-900"
                      />
                    </div>
                    <span className="text-[10px] text-slate-500 mt-0.5 block">Por subir 1 audioguía</span>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Membresía Anual Creador
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2 text-xs text-slate-400 font-bold">$</span>
                      <input
                        type="number"
                        value={config.annualMembershipPriceClp || 49990}
                        onChange={(e) => setConfig({ ...config, annualMembershipPriceClp: Number(e.target.value) })}
                        className="w-full pl-7 pr-3 py-2 text-xs bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl font-bold text-slate-900"
                      />
                    </div>
                    <span className="text-[10px] text-slate-500 mt-0.5 block">1 año de subidas ilimitadas</span>
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-slate-700 block mb-1">
                      Plan Municipalidades
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-2 text-xs text-slate-400 font-bold">$</span>
                      <input
                        type="number"
                        value={config.enterprisePriceClp || 189990}
                        onChange={(e) => setConfig({ ...config, enterprisePriceClp: Number(e.target.value) })}
                        className="w-full pl-7 pr-3 py-2 text-xs bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl font-bold text-slate-900"
                      />
                    </div>
                    <span className="text-[10px] text-slate-500 mt-0.5 block">Pack institucional</span>
                  </div>
                </div>
              </div>

              {/* Submit Save Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#14281C] hover:bg-[#223F2C] text-white rounded-2xl font-bold text-xs shadow-lg transition-all"
              >
                {isProcessing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Guardando cambios...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4 text-[#E8A58B]" />
                    <span>Guardar y Aplicar Configuración de Mercado Pago</span>
                  </>
                )}
              </button>
            </form>
          )}

          {/* TAB 3: HISTORIAL DE PAGOS RECAUDADOS */}
          {isOwner && activeTab === 'history' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold text-slate-900 uppercase">
                  Historial de Recaudación en Mercado Pago
                </h4>
                <span className="text-xs font-black text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Total Recaudado: ${paymentHistory
                    .filter(p => p.status === 'approved')
                    .reduce((acc, p) => acc + p.amountClp, 0)
                    .toLocaleString('es-CL')} CLP
                </span>
              </div>

              <div className="space-y-2">
                {paymentHistory.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-white rounded-2xl border border-[#E4D8BF] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900">{item.payerName}</span>
                        <span className="text-[10px] text-slate-500 font-mono">({item.payerEmail})</span>
                      </div>
                      <p className="text-[11px] text-slate-600">{item.planTitle}</p>
                      <div className="flex items-center gap-2 text-[10px] text-slate-400">
                        <Clock className="w-3 h-3" />
                        <span>{new Date(item.dateCreated).toLocaleDateString('es-CL', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                        <span>•</span>
                        <span>{item.paymentMethod}</span>
                      </div>
                    </div>

                    <div className="text-right flex sm:flex-col items-center sm:items-end justify-between">
                      <span className="text-base font-extrabold text-[#14281C]">
                        ${item.amountClp.toLocaleString('es-CL')} CLP
                      </span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 mt-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Aprobado
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#EEE6D3] border-t border-[#E4D8BF] flex items-center justify-between text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-slate-500" />
            <span>Monetización autorizada www.elviaje.cl • Mercado Pago Chile</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-700 font-bold rounded-xl border border-[#E4D8BF] transition-colors"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
