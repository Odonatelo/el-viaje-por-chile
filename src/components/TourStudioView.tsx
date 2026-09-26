import React, { useState } from 'react';
import { 
  Plus, 
  Save, 
  Sparkles, 
  Trash2, 
  ChevronUp, 
  ChevronDown, 
  Edit3, 
  Image as ImageIcon, 
  Music, 
  Youtube, 
  FileText, 
  Download, 
  Upload, 
  Eye, 
  Compass, 
  CheckCircle, 
  Loader2, 
  ArrowLeft,
  Share2,
  Globe,
  Instagram,
  MapPin,
  Mountain,
  QrCode
} from 'lucide-react';
import { Tour, TourStop, TourCategory, TourDocument } from '../types';
import { TourMap } from './TourMap';
import { StopEditorModal } from './StopEditorModal';
import { TourExportModal } from './TourExportModal';

interface TourStudioViewProps {
  initialTour?: Tour | null;
  onSaveTour: (tour: Tour) => Promise<void>;
  onCancel: () => void;
  onPreviewTour: (tour: Tour) => void;
}

export const TourStudioView: React.FC<TourStudioViewProps> = ({
  initialTour,
  onSaveTour,
  onCancel,
  onPreviewTour,
}) => {
  const [tour, setTour] = useState<Tour>(() => {
    if (initialTour) return JSON.parse(JSON.stringify(initialTour));
    return {
      id: `tour-${Date.now()}`,
      title: 'Nueva Ruta Patrimonial por Chile',
      tagline: 'Explora la historia, cerros y naturaleza con tu audioguía personal',
      description: 'Describe aquí el recorrido, la temática geográfica o patrimonial y las recomendaciones para los exploradores.',
      coverImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Cuernos_del_Paine%2C_Parque_Nacional_Torres_del_Paine%2C_Chile1.jpg/1280px-Cuernos_del_Paine%2C_Parque_Nacional_Torres_del_Paine%2C_Chile1.jpg',
      city: 'Valparaíso',
      country: 'Chile',
      category: 'walking',
      language: 'Español',
      durationMinutes: 75,
      distanceKm: 2.5,
      difficulty: 'easy',
      rating: 5.0,
      reviewsCount: 1,
      published: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      author: {
        name: 'Explorador Tienda El Viaje',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        role: 'Guía y Creador de Rutas Patrimoniales',
        bio: 'Divulgador de la geografía, senderos y patrimonio cultural de Chile.',
        verified: true,
      },
      socialLinks: {
        instagram: 'https://instagram.com/tiendaelviaje',
        youtube: 'https://youtube.com/@tiendaelviaje',
        website: 'https://www.tiendaelviaje.cl',
      },
      generalDocuments: [],
      stops: [
        {
          id: `stop-${Date.now()}-1`,
          order: 1,
          title: 'Hito de Inicio: Mirador y Plaza Principal',
          subtitle: 'Punto de encuentro y bienvenida al recorrido',
          category: 'monument',
          location: { lat: -33.04278, lng: -71.62472, address: 'Punto de Inicio, Valparaíso, Chile' },
          triggerRadiusMeters: 35,
          narrativeText: '¡Bienvenido a este recorrido autoguiado por Chile! Colócate los auriculares y prepárate para descubrir los secretos de este histórico lugar...',
          images: [
            {
              id: 'img-init-1',
              url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Capillas_de_M%C3%A1rmol_adentro.JPG',
              caption: 'Punto de inicio del recorrido',
              isPrimary: true,
            }
          ],
          documents: [],
          estimatedStayMinutes: 15,
        }
      ],
    };
  });

  const [editingStop, setEditingStop] = useState<TourStop | null>(null);
  const [activeStopId, setActiveStopId] = useState<string | undefined>(tour.stops[0]?.id);
  const [isSaving, setIsSaving] = useState(false);
  const [showAiModal, setShowAiModal] = useState(false);
  const [showQrModal, setShowQrModal] = useState(false);
  const [qrTargetStop, setQrTargetStop] = useState<TourStop | null>(null);

  // AI Tour Generator state
  const [aiTopic, setAiTopic] = useState('Ruta de Miradores, Cerros y Pasajes');
  const [aiCity, setAiCity] = useState(tour.city || 'Valparaíso');
  const [aiStopsCount, setAiStopsCount] = useState(4);
  const [isGeneratingTour, setIsGeneratingTour] = useState(false);

  // General Doc add
  const [newDocName, setNewDocName] = useState('');
  const [newDocUrl, setNewDocUrl] = useState('');

  // Handle Map Click to Add Stop
  const handleAddStopLocation = (location: { lat: number; lng: number }) => {
    const nextOrder = tour.stops.length + 1;
    const newStop: TourStop = {
      id: `stop-${Date.now()}-${nextOrder}`,
      order: nextOrder,
      title: `Parada ${nextOrder}: Punto de Interés`,
      subtitle: `Ubicación geográfica: ${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}`,
      category: 'monument',
      location: {
        lat: location.lat,
        lng: location.lng,
        address: `${location.lat.toFixed(5)}, ${location.lng.toFixed(5)}`,
      },
      triggerRadiusMeters: 35,
      narrativeText: `En este punto histórico de ${tour.city}...`,
      images: [
        {
          id: `img-${Date.now()}`,
          url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Palafitos_de_Castro%2C_Chilo%C3%A9.jpg/1280px-Palafitos_de_Castro%2C_Chilo%C3%A9.jpg',
          caption: `Vista de la parada ${nextOrder}`,
          isPrimary: true,
        }
      ],
      documents: [],
      estimatedStayMinutes: 15,
    };

    setTour(prev => ({
      ...prev,
      stops: [...prev.stops, newStop],
    }));
    setActiveStopId(newStop.id);
    setEditingStop(newStop);
  };

  // Reorder stops
  const handleMoveStop = (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= tour.stops.length) return;

    const newStops = [...tour.stops];
    const temp = newStops[index];
    newStops[index] = newStops[targetIndex];
    newStops[targetIndex] = temp;

    // Recalculate order numbers
    newStops.forEach((stop, idx) => {
      stop.order = idx + 1;
    });

    setTour(prev => ({ ...prev, stops: newStops }));
  };

  // Delete stop
  const handleDeleteStop = (stopId: string) => {
    if (tour.stops.length <= 1) {
      alert('Un tour debe tener al menos una parada.');
      return;
    }
    const filtered = tour.stops.filter(s => s.id !== stopId);
    filtered.forEach((stop, idx) => {
      stop.order = idx + 1;
    });
    setTour(prev => ({ ...prev, stops: filtered }));
    if (activeStopId === stopId) {
      setActiveStopId(filtered[0]?.id);
    }
  };

  // Save stop from editor modal
  const handleSaveStop = (updatedStop: TourStop) => {
    setTour(prev => ({
      ...prev,
      stops: prev.stops.map(s => s.id === updatedStop.id ? updatedStop : s),
    }));
    setEditingStop(null);
  };

  // Add General Document to Tour
  const handleAddGeneralDoc = () => {
    if (!newDocName.trim()) return;
    const doc: TourDocument = {
      id: `doc-${Date.now()}`,
      name: newDocName.trim(),
      type: newDocName.toLowerCase().endsWith('.pdf') ? 'pdf' : 'guide',
      url: newDocUrl.trim() || 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      size: '2.5 MB',
      description: 'Documento oficial de ruta Tienda El Viaje'
    };
    setTour(prev => ({
      ...prev,
      generalDocuments: [...(prev.generalDocuments || []), doc],
    }));
    setNewDocName('');
    setNewDocUrl('');
  };

  const handleDeleteGeneralDoc = (docId: string) => {
    setTour(prev => ({
      ...prev,
      generalDocuments: (prev.generalDocuments || []).filter(d => d.id !== docId),
    }));
  };

  // Save Tour to DB / State
  const handleSave = async () => {
    setIsSaving(true);
    try {
      await onSaveTour(tour);
      alert('✅ ¡Ruta guardada y publicada exitosamente en El Viaje Por Chile (www.interpretaciondelpatrimonio.cl)!');
    } catch (e) {
      console.error(e);
      alert('Error al guardar la ruta.');
    } finally {
      setIsSaving(false);
    }
  };

  // AI Tour Generator
  const handleGenerateAiTour = async () => {
    if (!aiCity || !aiTopic) {
      alert('Por favor ingresa ciudad y temática.');
      return;
    }

    setIsGeneratingTour(true);
    try {
      const res = await fetch('/api/gemini/generate-tour-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          city: aiCity,
          topic: aiTopic,
          stopsCount: aiStopsCount,
        }),
      });

      const data = await res.json();
      if (data.success && data.plan) {
        const plan = data.plan;
        
        const generatedStops: TourStop[] = (plan.stops || []).map((s: any, idx: number) => ({
          id: `stop-ai-${Date.now()}-${idx + 1}`,
          order: idx + 1,
          title: s.title || `Parada ${idx + 1}`,
          subtitle: s.subtitle || '',
          category: (s.category as any) || 'monument',
          location: {
            lat: s.location?.lat || -33.04278,
            lng: s.location?.lng || -71.62472,
            address: s.location?.address || `${aiCity}, Chile`,
          },
          triggerRadiusMeters: 35,
          narrativeText: s.narrativeDraft || `Historia sobre ${s.title}...`,
          audio: {
            type: 'ai_generated',
            transcript: s.narrativeDraft || '',
            voiceName: 'Kore',
            durationSeconds: 120,
          },
          images: [
            {
              id: `img-ai-${idx}`,
              url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Capillas_de_M%C3%A1rmol_adentro.JPG',
              caption: s.title,
              isPrimary: true,
            }
          ],
          documents: [],
          tips: s.tips || '',
          trivia: s.trivia || '',
          estimatedStayMinutes: 15,
        }));

        setTour(prev => ({
          ...prev,
          title: plan.title || prev.title,
          tagline: plan.tagline || prev.tagline,
          description: plan.description || prev.description,
          city: plan.city || prev.city,
          country: plan.country || 'Chile',
          category: (plan.category as TourCategory) || prev.category,
          durationMinutes: plan.durationMinutes || 60,
          distanceKm: plan.distanceKm || 2.5,
          difficulty: plan.difficulty || 'easy',
          stops: generatedStops,
        }));

        setShowAiModal(false);
      } else {
        alert(data.error || 'Error al generar tour con IA');
      }
    } catch (e: any) {
      console.error('Error generating AI tour:', e);
      alert('Error al conectar con Gemini');
    } finally {
      setIsGeneratingTour(false);
    }
  };

  // Export as JSON
  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(tour, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `${tour.city.toLowerCase()}_${tour.title.toLowerCase().replace(/\s+/g, '_')}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="min-h-screen bg-[#F6F1E5] text-slate-900 pb-16 font-sans">
      
      {/* Studio Header Bar - Tienda El Viaje Corporate */}
      <header className="sticky top-0 z-40 bg-[#14281C] text-white shadow-lg border-b border-[#2A4533]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onCancel}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-[#223F2C] transition-colors"
              title="Volver al catálogo"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-[#B04E2A] text-white font-bold text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-md shadow">
                  Studio de Rutas • El Viaje Por Chile (www.interpretaciondelpatrimonio.cl)
                </span>
                <span className="text-xs text-slate-400 font-mono">ID: {tour.id}</span>
              </div>
              <h1 className="text-base sm:text-lg font-bold text-white truncate max-w-md font-['Cormorant_Garamond',Georgia,serif]">
                {tour.title}
              </h1>
            </div>
          </div>

          {/* Top Actions */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => {
                setShowQrModal(true);
              }}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-[#1D3626] hover:bg-[#2E4E37] text-[#E8A58B] border border-[#B04E2A]/40 shadow-sm transition-all cursor-pointer"
              title="Descargar Formatos de Ruta: GPX, KML, Itinerario PDF"
            >
              <Download className="w-4 h-4 text-[#E8A58B]" />
              <span>Formatos de Ruta (GPX/PDF)</span>
            </button>

            <button
              onClick={() => setShowAiModal(true)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-[#D97706] to-[#B04E2A] hover:from-[#B45309] hover:to-[#9A3F1E] text-white shadow-md shadow-[#D97706]/20 transition-all"
            >
              <Sparkles className="w-4 h-4 text-amber-200" />
              <span>Generador IA de Rutas</span>
            </button>

            <button
              onClick={handleExportJSON}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-[#223F2C] hover:bg-[#33563D] text-slate-200 border border-[#40624A] transition-colors"
              title="Exportar archivo JSON"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Exportar JSON</span>
            </button>

            <button
              onClick={() => onPreviewTour(tour)}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#2F5238] hover:bg-[#2C4E36] text-emerald-100 border border-emerald-700 transition-colors"
            >
              <Eye className="w-4 h-4 text-emerald-300" />
              <span>Vista Previa Turista</span>
            </button>

            <button
              onClick={onCancel}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#1D3626] hover:bg-[#2E4E37] text-slate-200 border border-[#40624A] transition-colors"
              title="Vista previa de la página principal (catálogo público)"
            >
              <Eye className="w-4 h-4 text-slate-300" />
              <span className="hidden sm:inline">Vista Previa Página</span>
            </button>

            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold bg-[#B04E2A] hover:bg-[#9A3F1E] text-white shadow-lg shadow-[#B04E2A]/30 transition-all disabled:opacity-50"
            >
              {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              <span>Publicar / Guardar Ruta</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Studio Body Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: TOUR METADATA & CONFIG (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* General Tour Settings Card */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#E4D8BF] space-y-4">
            <h2 className="text-sm font-bold text-[#14281C] uppercase tracking-wider flex items-center gap-2 font-['Cormorant_Garamond',Georgia,serif]">
              <Compass className="w-4 h-4 text-[#B04E2A]" />
              Información General de la Ruta
            </h2>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-800 block mb-1">Título de la Ruta *</label>
                <input
                  type="text"
                  value={tour.title}
                  onChange={(e) => setTour({ ...tour, title: e.target.value })}
                  placeholder="Ej. Valparaíso: Ruta de Murales, Funiculares y Miradores"
                  className="w-full px-3 py-2 bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl text-sm font-bold text-slate-900 focus:ring-2 focus:ring-[#B04E2A] focus:outline-none"
                />
              </div>

              <div>
                <label className="font-bold text-slate-800 block mb-1">Subtítulo / Tagline</label>
                <input
                  type="text"
                  value={tour.tagline}
                  onChange={(e) => setTour({ ...tour, tagline: e.target.value })}
                  placeholder="Un viaje sonoro por los callejones y miradores..."
                  className="w-full px-3 py-2 bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-800 block mb-1">Ciudad o Región *</label>
                  <input
                    type="text"
                    value={tour.city}
                    onChange={(e) => setTour({ ...tour, city: e.target.value })}
                    placeholder="Valparaíso"
                    className="w-full px-3 py-2 bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl font-semibold"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-800 block mb-1">País</label>
                  <input
                    type="text"
                    value={tour.country}
                    onChange={(e) => setTour({ ...tour, country: e.target.value })}
                    placeholder="Chile"
                    className="w-full px-3 py-2 bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl font-semibold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="font-bold text-slate-800 block mb-1">Categoría</label>
                  <select
                    value={tour.category}
                    onChange={(e) => setTour({ ...tour, category: e.target.value as TourCategory })}
                    className="w-full px-2.5 py-2 bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl font-semibold text-xs"
                  >
                    <option value="walking">Cerros y Paseos</option>
                    <option value="history">Patrimonio</option>
                    <option value="nature">Naturaleza</option>
                    <option value="museum">Museos</option>
                    <option value="monument">Monumentos</option>
                    <option value="food">Sabores y Vinos</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-800 block mb-1">Duración (min)</label>
                  <input
                    type="number"
                    value={tour.durationMinutes}
                    onChange={(e) => setTour({ ...tour, durationMinutes: parseInt(e.target.value) || 0 })}
                    className="w-full px-2.5 py-2 bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl font-semibold"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-800 block mb-1">Distancia (km)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={tour.distanceKm}
                    onChange={(e) => setTour({ ...tour, distanceKm: parseFloat(e.target.value) || 0 })}
                    className="w-full px-2.5 py-2 bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl font-semibold"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-800 block mb-1">URL Foto de Portada</label>
                <input
                  type="text"
                  value={tour.coverImage}
                  onChange={(e) => setTour({ ...tour, coverImage: e.target.value })}
                  placeholder="https://..."
                  className="w-full px-3 py-2 bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl font-mono text-[11px]"
                />
              </div>

              <div>
                <label className="font-bold text-slate-800 block mb-1">Descripción Detallada</label>
                <textarea
                  rows={3}
                  value={tour.description}
                  onChange={(e) => setTour({ ...tour, description: e.target.value })}
                  placeholder="Explica qué verá el visitante, el contexto histórico y tips de seguridad o calzado..."
                  className="w-full px-3 py-2 bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl leading-relaxed"
                />
              </div>
            </div>
          </div>

          {/* Social Links & Author Card */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#E4D8BF] space-y-4">
            <h2 className="text-sm font-bold text-[#14281C] uppercase tracking-wider flex items-center gap-2 font-['Cormorant_Garamond',Georgia,serif]">
              <Share2 className="w-4 h-4 text-[#B04E2A]" />
              Redes y Autor (Tienda El Viaje)
            </h2>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-800 block mb-1">Nombre del Creador</label>
                  <input
                    type="text"
                    value={tour.author?.name || ''}
                    onChange={(e) => setTour({
                      ...tour,
                      author: { ...tour.author, name: e.target.value, verified: true }
                    })}
                    placeholder="Rodrigo Astudillo • Tienda El Viaje"
                    className="w-full px-3 py-2 bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl font-semibold"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-800 block mb-1">Rol / Especialidad</label>
                  <input
                    type="text"
                    value={tour.author?.role || ''}
                    onChange={(e) => setTour({
                      ...tour,
                      author: { ...tour.author, role: e.target.value, verified: true }
                    })}
                    placeholder="Especialista en Patrimonio de Chile"
                    className="w-full px-3 py-2 bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl font-semibold"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-800 block mb-1">Instagram (@)</label>
                <input
                  type="text"
                  value={tour.socialLinks?.instagram || ''}
                  onChange={(e) => setTour({
                    ...tour,
                    socialLinks: { ...tour.socialLinks, instagram: e.target.value }
                  })}
                  placeholder="https://instagram.com/tiendaelviaje"
                  className="w-full px-3 py-2 bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl font-mono text-[11px]"
                />
              </div>

              <div>
                <label className="font-bold text-slate-800 block mb-1">Canal de YouTube</label>
                <input
                  type="text"
                  value={tour.socialLinks?.youtube || ''}
                  onChange={(e) => setTour({
                    ...tour,
                    socialLinks: { ...tour.socialLinks, youtube: e.target.value }
                  })}
                  placeholder="https://youtube.com/@tiendaelviaje"
                  className="w-full px-3 py-2 bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl font-mono text-[11px]"
                />
              </div>

              <div>
                <label className="font-bold text-slate-800 block mb-1">Sitio Web Oficial</label>
                <input
                  type="text"
                  value={tour.socialLinks?.website || ''}
                  onChange={(e) => setTour({
                    ...tour,
                    socialLinks: { ...tour.socialLinks, website: e.target.value }
                  })}
                  placeholder="https://www.tiendaelviaje.cl"
                  className="w-full px-3 py-2 bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl font-mono text-[11px]"
                />
              </div>
            </div>
          </div>

          {/* Downloadable Guides & Field Maps */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#E4D8BF] space-y-4">
            <h2 className="text-sm font-bold text-[#14281C] uppercase tracking-wider flex items-center gap-2 font-['Cormorant_Garamond',Georgia,serif]">
              <FileText className="w-4 h-4 text-[#B04E2A]" />
              Guías de Campo y Archivos Adjuntos ({tour.generalDocuments?.length || 0})
            </h2>

            <div className="space-y-2 text-xs">
              {(tour.generalDocuments || []).map((doc) => (
                <div key={doc.id} className="flex items-center justify-between p-2.5 bg-[#F6F1E5] rounded-xl border border-[#E4D8BF]">
                  <div className="truncate max-w-[220px]">
                    <span className="font-bold text-slate-900 block truncate">{doc.name}</span>
                    <span className="text-[10px] text-slate-500 font-mono truncate block">{doc.url}</span>
                  </div>
                  <button
                    onClick={() => handleDeleteGeneralDoc(doc.id)}
                    className="text-red-500 hover:text-red-700 p-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}

              <div className="pt-2 space-y-2 border-t border-[#E4D8BF]">
                <input
                  type="text"
                  value={newDocName}
                  onChange={(e) => setNewDocName(e.target.value)}
                  placeholder="Nombre de la guía (ej. Mapa de Flora y Cerros.pdf)"
                  className="w-full px-3 py-1.5 bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl text-xs"
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newDocUrl}
                    onChange={(e) => setNewDocUrl(e.target.value)}
                    placeholder="URL del archivo o documento PDF"
                    className="flex-1 px-3 py-1.5 bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl text-xs font-mono"
                  />
                  <button
                    onClick={handleAddGeneralDoc}
                    className="px-3 py-1.5 bg-[#14281C] hover:bg-[#1D3626] text-white text-xs font-bold rounded-xl"
                  >
                    Adjuntar
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: INTERACTIVE MAP & STOPS MANAGER (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Map Builder Card */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#E4D8BF] space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-sm font-bold text-[#14281C] uppercase tracking-wider flex items-center gap-2 font-['Cormorant_Garamond',Georgia,serif]">
                  <MapPin className="w-4 h-4 text-[#B04E2A]" />
                  Editor Cartográfico Interactivo
                </h2>
                <p className="text-xs text-slate-500">
                  Haz clic sobre el mapa para fijar una nueva parada con coordenadas GPS automáticas.
                </p>
              </div>
              <span className="text-xs font-extrabold px-3 py-1 bg-[#B04E2A]/10 text-[#B04E2A] rounded-full border border-[#B04E2A]/20">
                {tour.stops.length} Paradas
              </span>
            </div>

            <div className="h-[400px] w-full rounded-2xl overflow-hidden border border-[#E4D8BF]">
              <TourMap
                stops={tour.stops}
                activeStopId={activeStopId}
                onSelectStop={(stop) => {
                  setActiveStopId(stop.id);
                  setEditingStop(stop);
                }}
                onMapClick={handleAddStopLocation}
                className="h-[400px] w-full"
              />
            </div>
          </div>

          {/* Stops List & Detail Cards */}
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-[#E4D8BF] space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold text-[#14281C] uppercase tracking-wider font-['Cormorant_Garamond',Georgia,serif]">
                Secuencia de Paradas y Audioguías
              </h2>

              <button
                onClick={() => {
                  const centerLat = tour.stops[0]?.location.lat || -33.04278;
                  const centerLng = tour.stops[0]?.location.lng || -71.62472;
                  handleAddStopLocation({
                    lat: centerLat + (Math.random() - 0.5) * 0.005,
                    lng: centerLng + (Math.random() - 0.5) * 0.005,
                  });
                }}
                className="flex items-center gap-1 px-3 py-1.5 bg-[#B04E2A] hover:bg-[#9A3F1E] text-white rounded-xl text-xs font-bold shadow-md shadow-[#B04E2A]/20 transition-all"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Añadir Parada Manual</span>
              </button>
            </div>

            <div className="space-y-3">
              {tour.stops.map((stop, index) => {
                const isSelected = stop.id === activeStopId;
                const thumb = stop.images[0]?.url || 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Palafitos_de_Castro%2C_Chilo%C3%A9.jpg/1280px-Palafitos_de_Castro%2C_Chilo%C3%A9.jpg';

                return (
                  <div
                    key={stop.id}
                    className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-all ${
                      isSelected
                        ? 'bg-[#F1EAD9] border-[#B04E2A] ring-2 ring-[#B04E2A]/20 shadow-md'
                        : 'bg-white border-[#E4D8BF] hover:border-slate-400'
                    }`}
                  >
                    {/* Order & Drag Controls */}
                    <div className="flex flex-col items-center gap-0.5">
                      <button
                        onClick={() => handleMoveStop(index, 'up')}
                        disabled={index === 0}
                        className="p-1 rounded text-slate-400 hover:text-slate-700 disabled:opacity-20"
                      >
                        <ChevronUp className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-6 h-6 rounded-full bg-[#B04E2A] text-white font-extrabold text-xs flex items-center justify-center shadow">
                        {stop.order}
                      </span>
                      <button
                        onClick={() => handleMoveStop(index, 'down')}
                        disabled={index === tour.stops.length - 1}
                        className="p-1 rounded text-slate-400 hover:text-slate-700 disabled:opacity-20"
                      >
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Thumbnail */}
                    <img
                      src={thumb}
                      alt={stop.title}
                      className="w-14 h-14 rounded-xl object-cover border border-[#E4D8BF] flex-shrink-0 bg-slate-100"
                      referrerPolicy="no-referrer"
                    />

                    {/* Info */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-sm text-[#14281C] truncate font-['Cormorant_Garamond',Georgia,serif]">
                          {stop.title}
                        </h4>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#F6F1E5] border border-[#E4D8BF] text-slate-700 uppercase">
                          {stop.category}
                        </span>
                      </div>
                      
                      <p className="text-xs text-slate-500 truncate mt-0.5">
                        📍 {stop.location.lat.toFixed(4)}, {stop.location.lng.toFixed(4)} • Radio {stop.triggerRadiusMeters}m
                      </p>

                      <div className="flex items-center gap-3 text-[11px] text-slate-600 mt-1">
                        {stop.audio ? (
                          <span className="text-[#B04E2A] font-semibold flex items-center gap-1">
                            <Music className="w-3 h-3" />
                            Audio: {stop.audio.type === 'ai_generated' ? 'Voz IA (' + (stop.audio.voiceName || 'Kore') + ')' : 'Archivo MP3'}
                          </span>
                        ) : (
                          <span className="text-slate-400 flex items-center gap-1">
                            <Music className="w-3 h-3" /> Sin audio configurado
                          </span>
                        )}

                        {stop.youtubeUrl && (
                          <span className="text-red-600 font-semibold flex items-center gap-0.5">
                            <Youtube className="w-3 h-3" /> Video
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <button
                        onClick={() => {
                          setQrTargetStop(stop);
                          setShowQrModal(true);
                        }}
                        className="p-1.5 text-slate-500 hover:text-[#B04E2A] rounded-xl hover:bg-[#B04E2A]/10 border border-slate-200 transition-colors"
                        title={`Código QR para ${stop.title}`}
                      >
                        <QrCode className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => {
                          setActiveStopId(stop.id);
                          setEditingStop(stop);
                        }}
                        className="flex items-center gap-1 px-3 py-1.5 bg-[#B04E2A] hover:bg-[#9A3F1E] text-white rounded-xl text-xs font-bold shadow transition-all"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                        <span>Editar</span>
                      </button>

                      <button
                        onClick={() => handleDeleteStop(stop.id)}
                        className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                        title="Eliminar parada"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </main>

      {/* Stop Editor Modal */}
      {editingStop && (
        <StopEditorModal
          stop={editingStop}
          tourId={tour.id}
          tourCity={tour.city}
          tourTitle={tour.title}
          onSave={handleSaveStop}
          onClose={() => setEditingStop(null)}
        />
      )}

      {/* AI Tour Plan Generator Modal */}
      {showAiModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex justify-center p-4">
          <div className="relative bg-[#F6F1E5] text-slate-900 w-full max-w-lg rounded-3xl p-6 shadow-2xl my-auto space-y-4 border border-[#E4D8BF]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-[#B04E2A]/10 text-[#B04E2A]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">Generador de Rutas por Chile con IA</h3>
                  <p className="text-xs text-slate-600">Gemini creará un itinerario con coordenadas, relatos y guion sonoro.</p>
                </div>
              </div>
              <button onClick={() => setShowAiModal(false)} className="text-slate-400 hover:text-slate-700">✕</button>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-800 block mb-1">Ciudad o Destino en Chile *</label>
                <input
                  type="text"
                  value={aiCity}
                  onChange={(e) => setAiCity(e.target.value)}
                  placeholder="Ej. Valparaíso, San Pedro de Atacama, Chiloé, Santiago, Pucón..."
                  className="w-full px-3 py-2 bg-white border border-[#CDBA95] rounded-xl font-semibold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-800 block mb-1">Temática del Recorrido *</label>
                <input
                  type="text"
                  value={aiTopic}
                  onChange={(e) => setAiTopic(e.target.value)}
                  placeholder="Ej. Ruta de Funiculares y Miradores, Patrimonio Minero, Bosque Esclerófilo..."
                  className="w-full px-3 py-2 bg-white border border-[#CDBA95] rounded-xl font-semibold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-800 block mb-1">Cantidad de Paradas</label>
                <select
                  value={aiStopsCount}
                  onChange={(e) => setAiStopsCount(parseInt(e.target.value) || 4)}
                  className="w-full px-3 py-2 bg-white border border-[#CDBA95] rounded-xl font-semibold"
                >
                  <option value={3}>3 Paradas</option>
                  <option value={4}>4 Paradas</option>
                  <option value={5}>5 Paradas</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#E4D8BF]">
              <button
                onClick={() => setShowAiModal(false)}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-200 rounded-xl"
              >
                Cancelar
              </button>
              <button
                onClick={handleGenerateAiTour}
                disabled={isGeneratingTour}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#B04E2A] to-[#D97706] hover:from-[#9A3F1E] hover:to-[#B45309] text-white rounded-xl text-xs font-bold shadow-lg shadow-[#B04E2A]/30 disabled:opacity-50"
              >
                {isGeneratingTour ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Diseñando con Gemini...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Generar Ruta Completa</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tour Export & Route Formats Modal */}
      {showQrModal && (
        <TourExportModal
          isOpen={showQrModal}
          onClose={() => {
            setShowQrModal(false);
          }}
          tour={tour}
        />
      )}

    </div>
  );
};
