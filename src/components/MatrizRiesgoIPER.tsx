import React, { useState } from 'react';
import {
  Target,
  Gavel,
  Banknote,
  ShieldAlert,
  ClipboardList,
  Map,
  Calculator,
  ListChecks,
  CheckCircle2,
  ArrowRight,
  Headphones,
  AlertTriangle,
  Footprints,
  Rocket,
  Lightbulb,
} from 'lucide-react';

const P_OPTIONS = [
  { value: 1, label: 'Baja', detail: 'Poco probable; ocurrencia inusual' },
  { value: 2, label: 'Media', detail: 'Puede ocurrir; se ha observado antes' },
  { value: 3, label: 'Alta', detail: 'Frecuente o casi seguro en la actividad' },
];

const C_OPTIONS = [
  { value: 1, label: 'Leve', detail: 'Atención médica básica, primeros auxilios' },
  { value: 2, label: 'Moderada', detail: 'Incapacidad temporal, requiere tratamiento' },
  { value: 3, label: 'Grave', detail: 'Incapacidad permanente o fatalidad' },
];

function nivelDeRiesgo(nr: number) {
  if (nr <= 2) return { label: 'Bajo', tone: 'text-emerald-700 bg-emerald-50 border-emerald-200', msg: 'Riesgo aceptable; mantener controles existentes.' };
  if (nr <= 4) return { label: 'Medio', tone: 'text-amber-700 bg-amber-50 border-amber-200', msg: 'Riesgo moderado; requiere medidas preventivas y supervisión en terreno.' };
  return { label: 'Alto', tone: 'text-red-700 bg-red-50 border-red-200', msg: 'Riesgo significativo; exige control obligatorio antes de autorizar la actividad.' };
}

const CRITERIOS = {
  probabilidad: [
    { v: 1, t: 'Baja' },
    { v: 2, t: 'Media' },
    { v: 3, t: 'Alta' },
  ],
  consecuencia: [
    { v: 1, t: 'Leve', d: 'Atención médica básica' },
    { v: 2, t: 'Moderada', d: 'Incapacidad temporal' },
    { v: 3, t: 'Grave', d: 'Incapacidad permanente o fatalidad' },
  ],
};

const PASOS_TERRENO = [
  { n: 1, icon: <Footprints className="w-5 h-5" />, t: 'Define la actividad', d: 'Lista cada actividad o proceso de la experiencia: senderismo, talleres, traslados, época del año.' },
  { n: 2, icon: <AlertTriangle className="w-5 h-5" />, t: 'Identifica los peligros', d: 'Reconoce el peligro real en terreno: terreno, clima, fauna, herramientas, tránsito, bordes y desniveles.' },
  { n: 3, icon: <ListChecks className="w-5 h-5" />, t: 'Evalúa P y C', d: 'Asigna Probabilidad (1-3) y Consecuencia / Severidad (1-3) con evidencia de terreno, no por intuición.' },
  { n: 4, icon: <Calculator className="w-5 h-5" />, t: 'Calcula el Nivel de Riesgo', d: 'NR = P × C. Clasifícalo en Bajo (1-2), Medio (3-4) o Alto (6-9) para priorizar.' },
  { n: 5, icon: <ShieldAlert className="w-5 h-5" />, t: 'Define controles', d: 'Controles preventivos (evitan el riesgo) y correctivos (responden si ocurre), más protocolos complementarios de terreno.' },
];

const FILAS_EJEMPLO = [
  {
    actividad: 'Senderismo y recorridos pedagógicos',
    peligro: 'Terreno irregular, rocas sueltas, pendientes y suelo erosionado.',
    riesgo: 'Caídas al mismo o distinto nivel, esguinces, torceduras o contusiones.',
    p: 2, c: 2,
    controles: ['Delimitación y mantenimiento continuo de senderos.', 'Obligatoriedad de calzado cerrado con buen agarre.', 'Charla de inducción al inicio de la ruta y avance a ritmo controlado con guías.'],
  },
  {
    actividad: 'Educación ambiental y talleres al aire libre',
    peligro: 'Exposición prolongada a radiación UV y altas temperaturas.',
    riesgo: 'Insolación, deshidratación, golpe de calor y quemaduras solares.',
    p: 3, c: 2,
    controles: ['Uso obligatorio de bloqueador solar, jockey o sombrero.', 'Puntos de hidratación continua y botellas reutilizables obligatorias.', 'Programación de actividades en zonas con sombra e itinerarios fuera de horas de máxima radiación.'],
  },
  {
    actividad: 'Trabajos de restauración ecológica y voluntariado',
    peligro: 'Manipulación de herramientas manuales (palas, azadones, tijeras de podar).',
    riesgo: 'Cortes, pinchazos, atrapamientos o golpes en extremidades.',
    p: 2, c: 2,
    controles: ['Inducción de manejo seguro de herramientas previa al inicio.', 'Entrega y uso obligatorio de EPP (guantes de cabritilla y antiparras).', 'Supervisión directa del monitor por grupos reducidos.'],
  },
  {
    actividad: 'Tránsito cercano a bordes de cantera y taludes',
    peligro: 'Desniveles pronunciados de la antigua cantera y taludes inestables.',
    riesgo: 'Caída a distinto nivel de gran altura o desprendimiento de material.',
    p: 1, c: 3,
    controles: ['Cierre perimetral y señalética de advertencia en zonas de riesgo.', 'Prohibición explícita de salirse de las zonas demarcadas.', 'Presencia constante de monitores al final y frente del grupo.'],
  },
  {
    actividad: 'Contacto con entorno natural (fauna y flora)',
    peligro: 'Presencia de flora espinosa (espinos, quiscos), avispas o arácnidos.',
    riesgo: 'Hincaduras, raspones, picaduras o reacciones alérgicas.',
    p: 2, c: 2,
    controles: ['Requerimiento de ropa adecuada (pantalón largo y mangueta).', 'Registro previo de alergias de visitantes y delegaciones.', 'Botiquín equipado con antihistamínicos y material de curación.'],
  },
  {
    actividad: 'Permanencia en época de alta combustibilidad (verano)',
    peligro: 'Acumulación de pastizal seco y eventuales fuentes de calor externas.',
    riesgo: 'Incendio forestal o de matorral.',
    p: 1, c: 3,
    controles: ['Prohibición absoluta de encender fuego, hacer fogatas o fumar.', 'Plan de evacuación en caso de emergencia hacia zonas despejadas.', 'Protocolo de enlace con Bomberos y CONAF.'],
  },
  {
    actividad: 'Llegada y desembarque de delegaciones',
    peligro: 'Tránsito de vehículos y buses en la zona de acceso e ingreso.',
    riesgo: 'Atropello o colisión durante la bajada/subida de pasajeros.',
    p: 1, c: 2,
    controles: ['Demarcación de zona segura de estacionamiento y desembarque.', 'Coordinación con encargados de buses para el apague de motor previo al descenso.'],
  },
];

interface MatrizRiesgoIPERProps {
  onBack: () => void;
}

export const MatrizRiesgoIPER: React.FC<MatrizRiesgoIPERProps> = ({ onBack }) => {
  const [pSel, setPSel] = useState<number>(2);
  const [cSel, setCSel] = useState<number>(2);
  const nr = pSel * cSel;
  const nivel = nivelDeRiesgo(nr);

  return (
    <div className="min-h-screen bg-[#F6F1E5] text-slate-900 pb-20 font-sans">

      {/* ===== Hero ===== */}
      <section className="relative bg-gradient-to-br from-[#14281C] via-[#1D3626] to-[#2E4E37] text-white overflow-hidden py-14 sm:py-20 px-4 sm:px-6 border-b border-[#2A4533]">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#E8A58B_1.4px,transparent_1.4px)] [background-size:22px_22px]" />
        <div className="absolute -right-12 -top-12 w-56 h-56 rounded-full bg-[#B04E2A]/25 blur-3xl" />

        <div className="relative max-w-5xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#E8A58B] border border-[#B04E2A]/40 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
              <ShieldAlert className="w-4 h-4" />
              Matriz de Riesgo IPER
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
            Matriz de Riesgo IPER para el{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E8A58B] via-[#D97A46] to-[#FBBF24]">
              prototipado de experiencias en Chile
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            <strong className="text-white">IPER</strong> es la sigla de <strong className="text-white">Identificación de Peligros y Evaluación de Riesgos</strong>:
            una matriz que te permite detectar los peligros de cada actividad, evaluar su riesgo con una escala numérica
            (<strong className="text-white">Nivel de Riesgo = Probabilidad × Consecuencia</strong>) y definir controles antes de autorizarla.
            Sirve tanto para <strong className="text-white">diseñar una experiencia turística segura</strong> como para validar la{' '}
            <strong className="text-white">factibilidad técnica en terreno</strong> de una actividad u operación turística.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {PASOS_TERRENO.map((s) => (
              <span key={s.n} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-slate-100 text-[11px] font-bold border border-white/10">
                <span className="w-5 h-5 rounded-full bg-[#B04E2A] text-white grid place-items-center text-[10px]">{s.n}</span>
                {s.t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Concepto rápido ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-6 relative z-10">
        <div className="bg-white rounded-3xl border border-[#E4D8BF] shadow-xl p-5 sm:p-6 grid md:grid-cols-3 gap-4">
          <div className="flex items-start gap-3">
            <span className="w-10 h-10 rounded-2xl bg-[#14281C] text-[#E8A58B] grid place-items-center flex-shrink-0">
              <Target className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-[#14281C]">¿Qué es IPER?</h3>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                Un método sistemático para <strong>identificar peligros</strong>, <strong>evaluar riesgos</strong> (P × C) y{' '}
                <strong>definir controles</strong> por actividad, previo a ejecutarla.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-10 h-10 rounded-2xl bg-[#B04E2A]/10 text-[#B04E2A] grid place-items-center flex-shrink-0">
              <Rocket className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-[#14281C]">¿Para qué te sirve al diseñar?</h3>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                Define las <strong>condiciones de seguridad de tu propuesta</strong>, anticipa controles y costos, y respalda la{' '}
                <strong>factibilidad</strong> de la experiencia ante operadores, dueños de predio y normativa.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-10 h-10 rounded-2xl bg-[#B04E2A]/10 text-[#B04E2A] grid place-items-center flex-shrink-0">
              <Map className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-[#14281C]">¿Cómo se aplica en terreno?</h3>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                Con <strong>recorridos de verificación</strong> y fichas por actividad; el Nivel de Riesgo prioriza dónde exigir{' '}
                <strong>controles obligatorios</strong> antes de autorizar la operación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Criterios de evaluación ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md">
              <Gavel className="w-5 h-5" />
            </span>
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Escala de evaluación</p>
              <h2 className="text-2xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">Criterios de evaluación de la Matriz IPER</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-3xl border border-[#E4D8BF] shadow-sm p-5">
              <h3 className="text-sm font-extrabold text-[#14281C] mb-3">Probabilidad (P)</h3>
              <ul className="space-y-2">
                {CRITERIOS.probabilidad.map((x) => (
                  <li key={x.v} className="flex items-center gap-3 bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl px-3 py-2">
                    <span className="w-7 h-7 rounded-lg bg-[#14281C] text-[#E8A58B] grid place-items-center text-xs font-extrabold">{x.v}</span>
                    <span className="text-sm font-bold text-slate-700">{x.t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl border border-[#E4D8BF] shadow-sm p-5">
              <h3 className="text-sm font-extrabold text-[#14281C] mb-3">Consecuencia / Severidad (C)</h3>
              <ul className="space-y-2">
                {CRITERIOS.consecuencia.map((x) => (
                  <li key={x.v} className="bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl px-3 py-2">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-[#B04E2A] text-white grid place-items-center text-xs font-extrabold">{x.v}</span>
                      <span className="text-sm font-bold text-slate-700">{x.t}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1 pl-10">{x.d}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl border border-[#E4D8BF] shadow-sm p-5">
              <h3 className="text-sm font-extrabold text-[#14281C] mb-3">Nivel de Riesgo (NR = P × C)</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-3 bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-2">
                  <span className="w-7 h-7 rounded-lg bg-emerald-600 text-white grid place-items-center text-xs font-extrabold flex-shrink-0">1-2</span>
                  <div>
                    <p className="text-sm font-bold text-emerald-800">Bajo</p>
                    <p className="text-[11px] text-emerald-700">Riesgo aceptable; mantener controles existentes.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2">
                  <span className="w-7 h-7 rounded-lg bg-amber-500 text-white grid place-items-center text-xs font-extrabold flex-shrink-0">3-4</span>
                  <div>
                    <p className="text-sm font-bold text-amber-800">Medio</p>
                    <p className="text-[11px] text-amber-700">Riesgo moderado; requiere medidas preventivas y supervisión en terreno.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl px-3 py-2">
                  <span className="w-7 h-7 rounded-lg bg-red-600 text-white grid place-items-center text-xs font-extrabold flex-shrink-0">6-9</span>
                  <div>
                    <p className="text-sm font-bold text-red-800">Alto</p>
                    <p className="text-[11px] text-red-700">Riesgo significativo; exige control obligatorio antes de autorizar la actividad.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Calculadora NR ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="bg-white rounded-3xl border border-[#E4D8BF] shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-[#14281C] to-[#2E4E37] text-white p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B04E2A]/30 text-[#E8A58B] text-[10px] font-extrabold uppercase tracking-widest border border-[#B04E2A]/50">
                <Calculator className="w-3 h-3" />
                Calculadora interactiva
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
                Calcula el Nivel de Riesgo de tu actividad
              </h2>
            </div>
          </div>

          <div className="p-5 sm:p-6 grid lg:grid-cols-3 gap-6">
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 mb-2">Probabilidad (P)</p>
              <div className="space-y-2">
                {P_OPTIONS.map((o) => (
                  <button
                    key={o.value}
                    onClick={() => setPSel(o.value)}
                    className={`w-full text-left rounded-2xl border px-4 py-3 transition-all ${pSel === o.value ? 'bg-[#14281C] border-[#14281C] text-white shadow-md' : 'bg-white border-[#E4D8BF] hover:border-[#B04E2A]/50'}`}
                  >
                    <span className="text-sm font-bold">{o.value} · {o.label}</span>
                    <span className={`block text-[11px] ${pSel === o.value ? 'text-slate-300' : 'text-slate-500'}`}>{o.detail}</span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 mb-2">Consecuencia / Severidad (C)</p>
              <div className="space-y-2">
                {C_OPTIONS.map((o) => (
                  <button
                    key={o.value}
                    onClick={() => setCSel(o.value)}
                    className={`w-full text-left rounded-2xl border px-4 py-3 transition-all ${cSel === o.value ? 'bg-[#B04E2A] border-[#B04E2A] text-white shadow-md' : 'bg-white border-[#E4D8BF] hover:border-[#B04E2A]/50'}`}
                  >
                    <span className="text-sm font-bold">{o.value} · {o.label}</span>
                    <span className={`block text-[11px] ${cSel === o.value ? 'text-white/80' : 'text-slate-500'}`}>{o.detail}</span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500 mb-2">Resultado</p>
              <div className={`rounded-3xl border p-6 text-center space-y-2 ${nivel.tone}`}>
                <p className="text-[11px] font-extrabold uppercase tracking-widest opacity-70">NR = P × C</p>
                <p className="text-5xl font-extrabold"> {pSel} × {cSel} = {nr}</p>
                <p className="text-2xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">{nivel.label}</p>
                <p className="text-xs leading-relaxed">{nivel.msg}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Pasos para aplicarla ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md">
            <ClipboardList className="w-5 h-5" />
          </span>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Aplicación en terreno</p>
            <h2 className="text-2xl font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
              Cómo aplicarla para la factibilidad técnica en terreno
            </h2>
          </div>
        </div>
        {PASOS_TERRENO.map((s) => (
          <article key={s.n} className="bg-white rounded-3xl border border-[#E4D8BF] shadow-sm hover:shadow-lg hover:border-[#B04E2A]/40 transition-all p-5 sm:p-6 flex flex-col sm:flex-row gap-4">
            <div className="flex items-center gap-3 sm:w-72 flex-shrink-0">
              <span className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#14281C] to-[#2E4E37] text-[#E8A58B] grid place-items-center shadow-md">{s.icon}</span>
              <div>
                <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#B04E2A]">Pasos {s.n}</p>
                <h3 className="text-lg font-extrabold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">{s.t}</h3>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-sm text-slate-600 leading-relaxed">{s.d}</p>
            </div>
          </article>
        ))}
        <div className="bg-[#14281C] rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-start gap-3">
            <span className="w-10 h-10 rounded-2xl bg-white/10 text-amber-200 grid place-items-center flex-shrink-0">
              <Lightbulb className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-white">Truco de factibilidad</h3>
              <p className="text-xs text-slate-300 leading-relaxed mt-1">
                Convierte las <strong className="text-[#E8A58B]">medidas de control</strong> en <strong className="text-[#E8A58B]">medios de verificación</strong>:
                si el control requiere mantenimiento de sendero, EPP o radios con señal, esa es tu lista de chequeo en terreno
                y tu presupuesto para hacer la actividad viable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Ejemplo completo ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
        <div className="bg-white rounded-3xl border border-[#E4D8BF] shadow-sm overflow-hidden">
          <div className="bg-gradient-to-r from-[#14281C] to-[#2E4E37] text-white p-5 sm:p-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B04E2A]/30 text-[#E8A58B] text-[10px] font-extrabold uppercase tracking-widest border border-[#B04E2A]/50 mb-2">
              <Banknote className="w-3 h-3" />
              Ejemplo aplicado
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
              Matriz IPER: Cerro Escuela La Cantera (San Bernardo)
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              Plantilla de identificación de peligros y evaluación de riesgos para recorridos pedagógicos, talleres y voluntariado.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse min-w-[980px]">
              <thead>
                <tr className="bg-[#F6F1E5] text-[10px] font-extrabold uppercase tracking-wider text-slate-600">
                  <th className="px-4 py-3 border-b border-[#E4D8BF]">Actividad / Proceso</th>
                  <th className="px-4 py-3 border-b border-[#E4D8BF]">Peligro Identificado</th>
                  <th className="px-4 py-3 border-b border-[#E4D8BF]">Riesgo / Evento Adverso</th>
                  <th className="px-3 py-3 border-b border-[#E4D8BF] text-center">P</th>
                  <th className="px-3 py-3 border-b border-[#E4D8BF] text-center">C</th>
                  <th className="px-3 py-3 border-b border-[#E4D8BF] text-center">NR</th>
                  <th className="px-4 py-3 border-b border-[#E4D8BF]">Medidas de Control (Preventivas y Correctivas)</th>
                </tr>
              </thead>
              <tbody>
                {FILAS_EJEMPLO.map((f, i) => {
                  const lvl = nivelDeRiesgo(f.p * f.c);
                  return (
                    <tr key={i} className="align-top hover:bg-[#FBF7EE] transition-colors">
                      <td className="px-4 py-3 border-b border-[#F0E7D3] font-bold text-slate-800">{f.actividad}</td>
                      <td className="px-4 py-3 border-b border-[#F0E7D3] text-slate-600">{f.peligro}</td>
                      <td className="px-4 py-3 border-b border-[#F0E7D3] text-slate-600">{f.riesgo}</td>
                      <td className="px-3 py-3 border-b border-[#F0E7D3] text-center font-extrabold text-slate-700">{f.p}</td>
                      <td className="px-3 py-3 border-b border-[#F0E7D3] text-center font-extrabold text-slate-700">{f.c}</td>
                      <td className="px-3 py-3 border-b border-[#F0E7D3] text-center">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold ${lvl.tone}`}>
                          {lvl.label} · {f.p * f.c}
                        </span>
                      </td>
                      <td className="px-4 py-3 border-b border-[#F0E7D3]">
                        <ul className="list-disc pl-4 space-y-1 text-slate-600">
                          {f.controles.map((c, ci) => (
                            <li key={ci}>{c}</li>
                          ))}
                        </ul>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="bg-[#F6F1E5] border-t border-[#E4D8BF] p-5 sm:p-6 space-y-4">
            <h3 className="text-sm font-extrabold text-[#14281C] inline-flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B04E2A]" />
              Protocolos Complementarios de Terreno
            </h3>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="bg-white rounded-2xl border border-[#E4D8BF] p-4">
                <p className="text-xs font-extrabold text-[#14281C] mb-1 inline-flex items-center gap-1.5">
                  <Headphones className="w-3.5 h-3.5 text-[#B04E2A]" /> Botiquín de Emergencia
                </p>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Debe permanecer en el punto base y ser portado por el guía de cabecera durante los recorridos por el cerro.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-[#E4D8BF] p-4">
                <p className="text-xs font-extrabold text-[#14281C] mb-1 inline-flex items-center gap-1.5">
                  <ClipboardList className="w-3.5 h-3.5 text-[#B04E2A]" /> Ficha de Registro y Salud
                </p>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Cada grupo o delegación debe ingresar con nómina actualizada y declaración de condiciones médicas preexistentes o alergias.
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-[#E4D8BF] p-4">
                <p className="text-xs font-extrabold text-[#14281C] mb-1 inline-flex items-center gap-1.5">
                  <Map className="w-3.5 h-3.5 text-[#B04E2A]" /> Red de Comunicación
                </p>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  Los monitores deben contar con radios VHF/UHF o telefonía móvil con señal comprobada antes de iniciar la actividad hacia la cumbre o senderos secundarios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA final ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative bg-gradient-to-br from-[#14281C] via-[#1D3626] to-[#2E4E37] text-white overflow-hidden rounded-3xl p-6 sm:p-10 border border-[#2A4533]">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#E8A58B_1.4px,transparent_1.4px)] [background-size:22px_22px]" />
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[#E8A58B] border border-[#B04E2A]/40 text-xs font-bold uppercase tracking-widest">
                <Rocket className="w-4 h-4" />
                Siguiente paso
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-['Cormorant_Garamond',Georgia,serif]">
                Combínala con la Guía de Factibilidad
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                La matriz IPER valida la seguridad de tu actividad en terreno; la Guía de Factibilidad la integra al diseño
                completo de tu experiencia: normativa, costos y prototipado con audioguías.
              </p>
            </div>
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#B04E2A] hover:bg-[#9A3F1E] text-white font-bold text-sm rounded-2xl shadow-lg shadow-[#B04E2A]/30 transition-all"
            >
              Ir a la plataforma
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};