import React, { useState } from 'react';
import { 
  X, 
  Compass, 
  Sparkles, 
  ExternalLink, 
  BookOpen, 
  Eye, 
  Ear, 
  Heart, 
  CheckCircle2, 
  Mountain, 
  Feather, 
  TreePine, 
  MapPin, 
  Layers, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

interface HeritageConsultingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenAiPlanner?: () => void;
}

export const HeritageConsultingModal: React.FC<HeritageConsultingModalProps> = ({
  isOpen,
  onClose,
  onOpenAiPlanner,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  if (!isOpen) return null;

  const principles = [
    {
      number: '01',
      title: 'Provocar antes que Instruir',
      icon: Eye,
      description: 'La interpretación no entrega datos enciclopédicos fríos; despierta tu curiosidad, asombro y deseo de descubrir el misterio que esconde cada paisaje de Chile.',
      tip: 'Pregúntate: ¿Por qué este cerro o árbol está aquí y qué historias presenció?',
    },
    {
      number: '02',
      title: 'Relacionar con tu Propia Vida',
      icon: Heart,
      description: 'Cualquier descripción debe vincularse directamente con lo que sientes, recuerdas o valoras. El patrimonio cobra sentido cuando toca tu experiencia personal.',
      tip: 'Conecta los materiales autóctonos, la madera de alerce o el cobre con tus raíces.',
    },
    {
      number: '03',
      title: 'Revelar Significados Profundos',
      icon: Sparkles,
      description: 'Ir más allá de la apariencia superficial para descifrar la memoria geológica, biocultural, humana y espiritual del territorio (*Genius Loci*).',
      tip: 'Descubre cómo las comunidades originarias y locales convivieron con este entorno.',
    },
    {
      number: '04',
      title: 'Visión Holística del Paisaje',
      icon: TreePine,
      description: 'El territorio no es una suma de monumentos aislados, sino un tejido vivo donde la flora nativa, el clima, el viento, la fauna y el ser humano coexisten.',
      tip: 'Observa la interdependencia entre el bosque esclerófilo, el mar y la cordillera.',
    },
  ];

  const stepsToPersonalJourney = [
    {
      title: '1. Selección del Ecosistema o Territorio',
      desc: 'Elige si viajarás por el Desierto de Atacama, los Cerros de la Zona Central, la Selva Valdiviana o los Fiordos Patagónicos.',
    },
    {
      title: '2. Definición del Hilo Conductor (Tema Central)',
      desc: 'Un buen viaje interpretativo tiene una premisa: "La huella del agua en el desierto más árido", "La madera que flota en Chiloé", o "El viento como escultor de la Patagonia".',
    },
    {
      title: '3. Cuaderno de Campo & Bitácora Sensorial',
      desc: 'Registra sonidos de aves (Chucao, Rayadito, Picaflor), texturas de rocas, aromas a boldo y peumo, y testimonios de habitantes locales.',
    },
    {
      title: '4. Narrativas Sonoras & Audioguías en elviaje.cl',
      desc: 'Crea o escucha paradas geolocalizadas que relatan la historia en el momento exacto en que pisas el lugar.',
    },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      <div 
        className="relative bg-white text-slate-900 w-full max-w-4xl rounded-3xl shadow-2xl border border-[#E8DFC8] overflow-hidden my-auto max-h-[94vh] flex flex-col font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0D1B2D] via-[#15273F] to-[#0D1B2D] text-white px-6 py-5 flex items-center justify-between border-b border-[#1E334D]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#C04A26] flex items-center justify-center text-white shadow-lg shadow-[#C04A26]/40">
              <Compass className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F59E7C]">
                  Tienda El Viaje • www.elviaje.cl
                </span>
                <span className="text-[10px] bg-[#C04A26]/30 text-[#F59E7C] px-2 py-0.5 rounded-full border border-[#C04A26]/50">
                  Consultoría Especializada
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold font-['Outfit',sans-serif]">
                Consultoría para tu Viaje Personal en Interpretación del Patrimonio
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-full hover:bg-[#192E47] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-6 space-y-8 bg-[#FAF7F2]">
          
          {/* Top Banner Concept */}
          <div className="bg-gradient-to-br from-[#0D1B2D] to-[#1E334D] text-white p-6 rounded-3xl shadow-md space-y-3 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-10 translate-x-8 translate-y-8">
              <Compass className="w-64 h-64 text-white" />
            </div>
            <div className="relative z-10 space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C04A26]/30 text-[#F59E7C] border border-[#C04A26]/40 text-xs font-bold uppercase">
                <Feather className="w-3.5 h-3.5" />
                Filosofía de Viaje con Sentido
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-['Outfit',sans-serif] text-white">
                ¿Qué es la Interpretación del Patrimonio y por qué transforma tu viaje?
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                No se trata de acumular fotos en lugares turísticos ni memorizar listas de fechas históricas. Interpretar el patrimonio es <strong>el arte de revelar los significados ocultos del paisaje natural y cultural chileno</strong>, conectando tus sentidos con el alma de los lugares (*Genius Loci*) y dejando una huella de respeto y gratitud en el territorio.
              </p>
            </div>
          </div>

          {/* 4 Pillars of Heritage Interpretation */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-extrabold text-[#0D1B2D] font-['Outfit',sans-serif]">
                  Los 4 Pilares de la Interpretación del Patrimonio
                </h3>
                <p className="text-xs text-slate-600">Basados en los principios internacionales de Freeman Tilden y la cosmovisión de Tienda El Viaje</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {principles.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx}
                    className="bg-white p-5 rounded-2xl border border-[#E8DFC8] shadow-sm space-y-2.5 hover:border-[#C04A26] transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-xl bg-[#C04A26]/10 text-[#C04A26] flex items-center justify-center font-bold text-xs">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs font-bold text-slate-400">{item.number}</span>
                    </div>

                    <h4 className="font-bold text-[#0D1B2D] text-sm font-['Outfit',sans-serif]">
                      {item.title}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-2 border-t border-[#FAF7F2] text-[11px] text-[#C04A26] font-medium flex items-start gap-1.5">
                      <span>💡</span>
                      <span><strong>Consejo práctico:</strong> {item.tip}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* How Consulting Works */}
          <div className="bg-white p-6 rounded-3xl border border-[#E8DFC8] shadow-sm space-y-5">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#27523C]" />
              <div>
                <h3 className="text-base font-extrabold text-[#0D1B2D] font-['Outfit',sans-serif]">
                  ¿Cómo estructurar tu propio Viaje Personal Interpretativo?
                </h3>
                <p className="text-xs text-slate-600">Pasos metodológicos recomendados por los especialistas de Tienda El Viaje</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {stepsToPersonalJourney.map((step, idx) => (
                <div key={idx} className="p-3.5 bg-[#FAF7F2] rounded-xl border border-[#E8DFC8] space-y-1">
                  <h5 className="font-bold text-xs text-[#0D1B2D]">{step.title}</h5>
                  <p className="text-[11px] text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Official Tienda El Viaje External Link Callout */}
          <div className="bg-gradient-to-r from-[#27523C] to-[#1E4330] text-white p-6 rounded-3xl shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-300" />
                <span className="font-bold text-sm text-emerald-200 uppercase tracking-wider">
                  Asesoría Directa 1 a 1
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-bold font-['Outfit',sans-serif]">
                ¿Quieres una consultoría personalizada con Tienda El Viaje?
              </h4>
              <p className="text-xs text-emerald-100 max-w-xl">
                Agenda tu sesión personalizada de diseño de viaje patrimonial, guías de campo y recomendaciones locales directamente en el sitio oficial.
              </p>
            </div>

            <a
              href="https://www.tiendaelviaje.cl/consultoria-para-tu-viaje-personal-en-interpretacion-del-patrimonio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#C04A26] hover:bg-[#A63A19] text-white font-bold text-xs sm:text-sm rounded-2xl shadow-lg transition-all whitespace-nowrap flex-shrink-0"
            >
              <span>Ir a Tienda El Viaje</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Footer actions */}
        <div className="px-6 py-4 bg-white border-t border-[#E8DFC8] flex items-center justify-between">
          <div className="text-xs text-slate-500 font-semibold flex items-center gap-1.5">
            <span>Dominio oficial:</span>
            <span className="font-mono text-[#C04A26] font-bold">www.elviaje.cl</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-[#FAF7F2] transition-colors"
            >
              Cerrar
            </button>

            {onOpenAiPlanner && (
              <button
                onClick={() => {
                  onClose();
                  onOpenAiPlanner();
                }}
                className="flex items-center gap-2 px-5 py-2.5 bg-[#C04A26] hover:bg-[#A63A19] text-white rounded-xl text-xs font-bold shadow-md shadow-[#C04A26]/30 transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Diseñar Ruta con IA Interpretativa</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
