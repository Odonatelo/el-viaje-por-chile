import React, { useState } from 'react';
import {
  Target,
  ListChecks,
  Gavel,
  Banknote,
  ShieldAlert,
  HelpCircle,
  ClipboardList,
  Plus,
  Trash2,
  ArrowRight,
  CheckCircle2,
  Headphones,
  Map,
  Rocket,
  Copy,
  Lightbulb,
  Download,
  QrCode,
  TrendingUp,
  X,
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

/* ------------------------------------------------------------------ *
 *  GUÍA DE FACTIBILIDAD (basada en Guía 1.3.2 ECT · Prototipo e      *
 *  implementación de experiencias ETT1403). Adaptada para diseñar    *
 *  experiencias y usar las audioguías como prototipado de alta       *
 *  fidelidad en la plataforma www.interpretaciondelpatrimonio.cl.    *
 * ------------------------------------------------------------------ */

interface GuideStep {
  n: number;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  questions: string[];
  tip: string;
}

const STEPS: GuideStep[] = [
  {
    n: 1,
    icon: <Target className="w-5 h-5" />,
    title: 'Define tu prototipo',
    subtitle: 'Descripción del prototipo',
    questions: [
      '¿Qué parte de la experiencia turística será prototipada? (actividad, interacción o servicio)',
      '¿Qué actividad, interacción o servicio representa el prototipo?',
      '¿Cuál es su propósito dentro del recorrido del usuario?',
    ],
    tip: 'Tu audioguía YA es un prototipo de alta fidelidad: paradas, guiones, audio con voz IA, fotos y mapa. Empieza eligiendo el tramo de la experiencia que vas a probar.',
  },
  {
    n: 2,
    icon: <ListChecks className="w-5 h-5" />,
    title: 'Levantamiento técnico',
    subtitle: 'Preparación del levantamiento técnico',
    questions: [
      '¿Qué actividades concretas contempla el prototipo?',
      '¿Qué recursos humanos se requieren para su ejecución?',
      '¿Qué equipamiento, infraestructura o materiales son necesarios?',
      '¿Qué elementos deberán verificarse en terreno (existencia, estado, disponibilidad)?',
    ],
    tip: 'Usa las paradas del Studio como fichas de campo: cada parada puede corresponder a una verificación en terreno.',
  },
  {
    n: 3,
    icon: <Gavel className="w-5 h-5" />,
    title: 'Normativa aplicable',
    subtitle: 'Identificación de normativa',
    questions: [
      '¿La experiencia involucra actividades reguladas por normativa turística?',
      '¿Existen exigencias relacionadas con seguridad, permisos, calidad, transporte o alimentación?',
      '¿Qué normativas revisadas en clases podrían ser pertinentes para este caso?',
    ],
    tip: 'Registra el resultado de la verificación en la columna «Normativa» de tu Matriz de Factibilidad.',
  },
  {
    n: 4,
    icon: <Banknote className="w-5 h-5" />,
    title: 'Análisis económico',
    subtitle: 'Preparación del análisis económico',
    questions: [
      'Costos de recursos humanos.',
      'Costos de materiales, equipamiento o servicios.',
      'Costos de transporte, seguros u otros gastos relevantes.',
    ],
    tip: 'Suma el costo por audiencia (narración IA, hosting de audio y publicación) y compáralo con el precio objetivo de tu experiencia.',
  },
  {
    n: 5,
    icon: <ShieldAlert className="w-5 h-5" />,
    title: 'Riesgos operacionales',
    subtitle: 'Identificación de riesgos',
    questions: [
      '¿Qué situaciones podrían poner en riesgo a los usuarios o al equipo?',
      '¿Qué riesgos operacionales podrían surgir durante la ejecución?',
      '¿Qué medidas de control podrían aplicarse?',
    ],
    tip: 'Añade avisos de seguridad a tus paradas y verifica accesos, señalética y horarios antes de publicar.',
  },
  {
    n: 6,
    icon: <HelpCircle className="w-5 h-5" />,
    title: 'Preguntas clave del prototipo',
    subtitle: 'Ajustes y puntos críticos',
    questions: [
      '¿Qué aspectos del prototipo podrían requerir ajustes antes de su implementación?',
      '¿Qué dudas o puntos críticos deberías observar con especial atención en terreno?',
    ],
    tip: 'Estas preguntas serán tu guía en el contraste en terreno: llévalas anotadas en tu salida de campo.',
  },
];

interface MatrixRow {
  dimension: string;
  element: string;
  condition: string;
  aspects: string;
  risks: string;
  observations: string;
}

const INITIAL_MATRIX: MatrixRow[] = [
  {
    dimension: 'Técnica',
    element: 'Señalética y accesos de las paradas de la audioguía',
    condition: 'Señalización clara y accesos seguros',
    aspects: 'Estado de carteles, seguridad de accesos, cobertura de audio',
    risks: 'Señalética dañada o senderos tomados',
    observations: 'Verificar con un recorrido real completo',
  },
  {
    dimension: 'Económica',
    element: 'Costo por visitante (narración + publicación)',
    condition: 'Precio competitivo con operadores del destino',
    aspects: 'Precios de insumos y servicios de audio',
    risks: 'Sobre-costos de última hora',
    observations: 'Cotizar al menos 3 proveedores',
  },
  {
    dimension: 'Normativa',
    element: 'Permiso municipal para uso de espacio público',
    condition: 'Permiso vigente antes de la salida',
    aspects: 'Disponibilidad, plazo y costo del trámite',
    risks: 'Multa por actividad sin permiso',
    observations: 'Gestionar con anticipación',
  },
];

const MATRIX_COLUMNS = [
  'Dimensión de factibilidad',
  'Elemento del prototipo o experiencia',
  'Condición esperada',
  'Aspectos a verificar en terreno',
  'Riesgos o brechas identificadas',
  'Observaciones preliminares',
];

// Planilla Excel de ROI (archivo estático servido desde /public)
const ROI_XLSX_PATH = '/plantilla-roi-operacion-turistica.xlsx';

export const FactibilidadGuide: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [rows, setRows] = useState<MatrixRow[]>(INITIAL_MATRIX);
  const [copied, setCopied] = useState(false);
  const [showRoiQr, setShowRoiQr] = useState(false);
  const roiDownloadUrl = `${window.location.origin}${ROI_XLSX_PATH}`;

  const updateRow = (index: number, key: keyof MatrixRow, value: string) => {
    setRows((prev) => prev.map((r, i) => (i === index ? { ...r, [key]: value } : r)));
  };

  const addRow = () => {
    setRows((prev) => [...prev, { dimension: '', element: '', condition: '', aspects: '', risks: '', observations: '' }]);
  };

  const removeRow = (index: number) => {
    setRows((prev) => prev.filter((_, i) => i !== index));
  };

  const copyMatrix = async () => {
    const header = MATRIX_COLUMNS.join(';');
    const body = rows.map((r) => Object.values(r).join(';')).join('\n');
    // Escapa comillas internas para CSV básico
    const csv = [header, body].join('\n');
    try {
      await navigator.clipboard.writeText(csv);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      alert('No se pudo copiar al portapapeles.');
    }
  };

  const scrollToMatrix = () => document.getElementById('matriz')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-[#F6F1E5] text-slate-900 pb-20 font-sans">

      {/* ===== Hero de la guía ===== */}
      <section className="relative bg-gradient-to-br from-[#14281C] via-[#1D3626] to-[#2E4E37] text-white overflow-hidden py-14 sm:py-20 px-4 sm:px-6 border-b border-[#2A4533]">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#E8A58B_1.4px,transparent_1.4px)] [background-size:22px_22px]" />
        <div className="absolute -right-12 -top-12 w-56 h-56 rounded-full bg-[#B04E2A]/25 blur-3xl" />

        <div className="relative max-w-5xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#E8A58B] border border-[#B04E2A]/40 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              <ClipboardList className="w-4 h-4" />
              Guía 1.3.2 · Factibilidad de una experiencia turística
            </span>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/15 transition-all"
            >
              <ArrowRight className="w-3.5 h-3.5 rotate-180" />
              Volver a la plataforma
            </button>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight font-['Cormorant_Garamond',Georgia,serif]">
            Diseña tu experiencia y prototípala con{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A58B] via-[#D97A46] to-[#FBBF24]">audioguías de alta fidelidad</span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            Esta guía te ayuda a <strong className="text-white">analizar la factibilidad de tu experiencia turística</strong> paso a paso,
            usando la plataforma como herramienta de <strong className="text-white">prototipado de alta fidelidad</strong>: audioguías con
            audio real, mapa, paradas y tiempos, listas para validarse en terreno.
          </p>

          {/* Resumen de pasos */}
          <div className="flex flex-wrap gap-2 pt-2">
            {STEPS.map((s) => (
              <span key={s.n} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-slate-100 text-[11px] font-bold border border-white/10">
                <span className="w-5 h-5 rounded-full bg-[#B04E2A] text-white grid place-items-center text-[10px]">{s.n}</span>
                {s.title}
              </span>
            ))}
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#B04E2A]/30 text-[#E8A58B] text-[11px] font-bold border border-[#B04E2A]/50">
              <Map className="w-3.5 h-3.5" />
              Matriz de Factibilidad
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              onClick={scrollToMatrix}
              className="flex items-center gap-2 px-6 py-3 bg-[#B04E2A] hover:bg-[#9A3F1E] text-white font-bold text-sm rounded-2xl shadow-lg shadow-[#B04E2A]/30 transition-all"
            >
              <ClipboardList className="w-4 h-4" />
              Ir a la Matriz de Factibilidad
            </button>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-slate-200 text-xs font-semibold border border-white/10">
              <Headphones className="w-4 h-4 text-[#E8A58B]" />
              Prototipo de alta fidelidad = tu audioguía
            </div>
          </div>
        </div>
      </section>

      {/* ===== Concepto rápido ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-6 relative z-10">
        <div className="bg-white rounded-3xl border border-[#E4D8BF] shadow-xl p-5 sm:p-6 grid md:grid-cols-3 gap-4">
          <div className="flex items-start gap-3">
            <span className="w-10 h-10 rounded-2xl bg-[#14281C] text-[#E8A58B] grid place-items-center flex-shrink-0">
              <Rocket className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-[#14281C]">¿Qué es la factibilidad?</h3>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                Es el análisis que evalúa <strong>si tu experiencia se puede llevar a cabo</strong>: técnicamente, dentro de la
                normativa, con costos sostenibles y controlando los riesgos.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-10 h-10 rounded-2xl bg-[#B04E2A]/10 text-[#B04E2A] grid place-items-center flex-shrink-0">
              <Headphones className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-[#14281C]">¿Por qué con audioguías?</h3>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                Tu audioguía ya tiene <strong>audio, mapa, paradas y tiempos reales</strong>: es un prototipo de alta fidelidad
                barato y rápido de iterar antes de invertir en la experiencia completa.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-10 h-10 rounded-2xl bg-emerald-700/10 text-emerald-700 grid place-items-center flex-shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-[#14281C]">¿Qué lograrás?</h3>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                Responder los 6 pasos y <strong>llenar la Matriz de Factibilidad</strong>, lista para contrastar en terreno y
                presentar en la Evaluación Parcial N°2.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Pasos ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-6">
        {STEPS.map((step) => (
          <article
            key={step.n}
            className="bg-white rounded-3xl border border-[#E4D8BF] shadow-sm hover:shadow-lg hover:border-[#B04E2A]/40 transition-all p-5 sm:p-7"
          >
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Identidad del paso */}
              <div className="lg:w-72 flex-shrink-0">
                <div className="flex items-center gap-3">
                  <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md">
                    {step.icon}
                  </span>
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">
                      Paso {step.n} de 6
                    </p>
                    <h2 className="text-xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
                      {step.title}
                    </h2>
                    <p className="text-xs text-slate-500">{step.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Preguntas */}
              <div className="flex-1 space-y-2.5">
                <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-1">
                  Lo que debes responder
                </p>
                {step.questions.map((q, qi) => (
                  <label
                    key={qi}
                    className="flex items-start gap-3 bg-[#F6F1E5] border border-[#E4D8BF] rounded-2xl px-4 py-3 cursor-pointer hover:border-[#B04E2A]/50 transition-colors"
                  >
                    <input type="checkbox" className="mt-0.5 accent-[#B04E2A] w-4 h-4 flex-shrink-0" />
                    <span className="text-sm text-slate-700 font-medium leading-relaxed">{q}</span>
                  </label>
                ))}
              </div>

              {/* Consejo plataforma */}
              <div className="lg:w-72 flex-shrink-0">
                <div className="bg-[#14281C] rounded-2xl p-4 border border-[#2A4533]">
                  <p className="inline-flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-widest text-amber-200 mb-2">
                    <Lightbulb className="w-3.5 h-3.5" />
                    Consejo de la plataforma
                  </p>
                  <p className="text-xs text-slate-200 leading-relaxed">{step.tip}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* ===== Matriz de Factibilidad (editable) ===== */}
      <section id="matriz" className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 scroll-mt-24">
        <div className="bg-white rounded-3xl border border-[#E4D8BF] shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-[#14281C] to-[#2E4E37] text-white p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B04E2A]/30 text-[#E8A58B] text-[10px] font-extrabold uppercase tracking-widest border border-[#B04E2A]/50">
                <Map className="w-3 h-3" />
                Matriz de Factibilidad · llenado preliminar
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
                Organiza tu análisis antes de ir a terreno
              </h2>
              <p className="text-xs text-slate-300">
                La matriz es orientadora y no definitiva: se completa y ajusta con la información levantada en terreno.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={addRow}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#B04E2A] hover:bg-[#9A3F1E] text-white text-xs font-bold shadow-md transition-all"
              >
                <Plus className="w-4 h-4" />
                Agregar fila
              </button>
              <button
                onClick={copyMatrix}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold border border-white/20 transition-all"
              >
                <Copy className="w-4 h-4 text-amber-200" />
                {copied ? '¡Copiada!' : 'Copiar como CSV'}
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse min-w-[980px]">
              <thead>
                <tr className="bg-[#F6F1E5] text-[10px] font-extrabold uppercase tracking-wider text-slate-600">
                  {MATRIX_COLUMNS.map((c) => (
                    <th key={c} className="px-3 py-3 border-b border-[#E4D8BF] align-top leading-snug">
                      {c}
                    </th>
                  ))}
                  <th className="px-2 py-3 border-b border-[#E4D8BF] w-10" />
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-b border-[#EFE8D8] hover:bg-[#FCFAF4] transition-colors">
                    {(Object.keys(row) as (keyof MatrixRow)[]).map((key) => (
                      <td key={key} className="px-3 py-2 align-top">
                        <input
                          value={row[key]}
                          onChange={(e) => updateRow(i, key, e.target.value)}
                          placeholder="—"
                          className="w-full bg-transparent text-xs font-medium text-slate-700 focus:bg-white focus:ring-2 focus:ring-[#B04E2A] focus:outline-none rounded-lg px-2 py-1.5 border border-transparent focus:border-[#CDBA95] transition-all"
                        />
                      </td>
                    ))}
                    <td className="px-2 py-2 text-center">
                      <button
                        onClick={() => removeRow(i)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                        title="Eliminar fila"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== ROI y QR para audiencias ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
        <div className="grid md:grid-cols-2 gap-4">
          {/* Calculadora ROI */}
          <div className="bg-white rounded-3xl border border-[#E4D8BF] shadow-sm p-5 sm:p-6 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-700 to-emerald-600 text-white grid place-items-center shadow-md">
                <TrendingUp className="w-5 h-5" />
              </span>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-600">Cálculo de ROI</p>
                <h2 className="text-xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
                  ROI de tu operación turística
                </h2>
              </div>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Descarga la planilla de <strong>Retorno de Inversión (ROI)</strong> en Excel, completa los valores
              amarillos de demanda, costos variables, costos fijos e inversión, y obtén automáticamente: ROI, punto de
              equilibrio, recuperación de inversión y utilidad neta.
            </p>
            <div className="bg-[#F6F1E5] rounded-2xl p-4 border border-[#E4D8BF] text-xs text-slate-700 leading-relaxed">
              <strong>ROI % = ( Ingresos totales − Costos totales − Inversión ) ÷ Inversión × 100</strong>
              <br />
              Si el ROI es mayor que 0 %, la operación recupera la inversión y genera utilidad en el período analizado.
            </div>
            <a
              href={roiDownloadUrl}
              download
              className="flex items-center gap-2 px-5 py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-bold rounded-2xl shadow-md transition-all w-fit"
            >
              <Download className="w-4 h-4" />
              Descargar planilla Excel de ROI
            </a>
          </div>

          {/* QR para audiencias */}
          <div className="bg-[#14281C] rounded-3xl border border-[#2A4533] shadow-sm p-5 sm:p-6 text-white space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#B04E2A] to-[#D97706] text-white grid place-items-center shadow-md">
                <QrCode className="w-5 h-5" />
              </span>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-amber-200">QR para audiencias</p>
                <h2 className="text-xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
                  Proyecta y comparte el QR
                </h2>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Haz clic en el botón para abrir una pantalla completa con el <strong>QR de descarga</strong>, ideal para
              proyectar a una audiencia en sala, taller o presentación. Al escanearlo, se descarga la planilla Excel de
              ROI directamente en el dispositivo.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowRoiQr(true)}
                className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-[#B04E2A] to-[#D97706] hover:from-[#9A3F1E] hover:to-[#B45309] text-white text-sm font-bold rounded-2xl shadow-lg shadow-[#B04E2A]/30 transition-all"
              >
                <QrCode className="w-4 h-4" />
                Abrir QR a pantalla completa
              </button>
              <span className="text-[11px] text-slate-400 break-all max-w-[260px]">{roiDownloadUrl}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Overlay QR pantalla completa ===== */}
      {showRoiQr && (
        <div className="fixed inset-0 z-[100] bg-[#14281C] text-white flex flex-col overflow-hidden">
          <div className="px-5 py-4 flex items-center justify-between border-b border-[#2A4533]">
            <div className="space-y-0.5">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8A58B]">
                Resumen General · ROI Operación Turística
              </span>
              <h2 className="text-sm sm:text-lg font-bold font-['Cormorant_Garamond',Georgia,serif]">
                Escanea el código para descargar la planilla Excel
              </h2>
            </div>
            <button
              onClick={() => setShowRoiQr(false)}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-all"
              title="Cerrar pantalla completa"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 p-6 sm:p-10 overflow-hidden">
            {/* Resumen izquierdo */}
            <div className="max-w-md space-y-5">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3">
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-amber-200">Fórmula clave</p>
                <p className="text-lg sm:text-xl font-bold font-['Cormorant_Garamond',Georgia,serif] leading-tight">
                  ROI % = ( Ingresos totales − Costos totales − Inversión ) ÷ Inversión
                </p>
              </div>
              <ul className="space-y-2.5 text-sm text-slate-300 leading-relaxed">
                <li className="flex gap-3 items-start">
                  <span className="mt-1 w-2.5 h-2.5 rounded-full bg-emerald-400 flex-shrink-0" />
                  ROI &gt; 0 %: la operación recupera la inversión y genera utilidad.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1 w-2.5 h-2.5 rounded-full bg-amber-400 flex-shrink-0" />
                  Punto de equilibrio: visitantes mínimos para no perder dinero.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1 w-2.5 h-2.5 rounded-full bg-[#E8A58B] flex-shrink-0" />
                  Recuperación: meses que tarda la utilidad en cubrir la inversión.
                </li>
                <li className="flex gap-3 items-start">
                  <span className="mt-1 w-2.5 h-2.5 rounded-full bg-sky-400 flex-shrink-0" />
                  Tu audioguía es el prototipo: itera antes de invertir en la operación completa.
                </li>
              </ul>
              <p className="text-[11px] text-slate-500">www.interpretaciondelpatrimonio.cl · El Viaje Por Chile</p>
            </div>

            {/* QR derecho */}
            <div className="bg-white p-6 rounded-3xl shadow-2xl flex flex-col items-center gap-3">
              <QRCodeSVG value={roiDownloadUrl} size={340} level="M" includeMargin={false} />
              <span className="text-[11px] text-slate-500 font-semibold text-center break-all max-w-[360px]">
                {roiDownloadUrl}
              </span>
              <a
                href={roiDownloadUrl}
                download
                className="mt-1 flex items-center gap-2 px-6 py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-bold rounded-2xl shadow-md transition-all"
              >
                <Download className="w-4 h-4" />
                Descargar ahora
              </a>
            </div>
          </div>

          <div className="px-5 py-3 text-center text-[11px] text-slate-500 border-t border-[#2A4533]">
            Guía de Factibilidad · Prototipado con audioguías · interpretaciondelpatrimonio.cl
          </div>
        </div>
      )}

      {/* ===== Cierre de la actividad ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
        <div className="bg-[#14281C] text-white rounded-3xl p-6 sm:p-8 border border-[#2A4533] shadow-lg overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#E8A58B_1.4px,transparent_1.4px)] [background-size:22px_22px]" />
          <div className="relative space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#B04E2A] to-[#D97706] grid place-items-center shadow-lg">
                <Rocket className="w-5 h-5" />
              </span>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#E8A58B]">Cierre de la actividad</p>
                <h2 className="text-xl sm:text-2xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
                  Reflexiona en equipo y conecta la teoría con la práctica
                </h2>
              </div>
            </div>

            <ol className="grid md:grid-cols-3 gap-4">
              {[
                '¿Qué información será clave levantar en terreno para evaluar la factibilidad del prototipo?',
                '¿Cómo este trabajo previo facilita la conexión entre teoría y práctica?',
                '¿De qué manera esta preparación contribuye a una mejor toma de decisiones sobre la implementación de la experiencia?',
              ].map((q, i) => (
                <li key={i} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-sm text-slate-200 leading-relaxed">
                  <span className="w-6 h-6 rounded-full bg-[#B04E2A] text-white grid place-items-center text-[11px] font-extrabold mb-2">
                    {i + 1}
                  </span>
                  {q}
                </li>
              ))}
            </ol>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={onBack}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#B04E2A] hover:bg-[#9A3F1E] text-white font-bold text-sm rounded-2xl shadow-lg shadow-[#B04E2A]/30 transition-all"
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Volver a las rutas de Chile
              </button>
              <span className="text-xs text-slate-400">
                Tu audioguía es el prototipo · publica y valida en www.interpretaciondelpatrimonio.cl
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};