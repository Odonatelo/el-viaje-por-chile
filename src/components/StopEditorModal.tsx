import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Upload, 
  Mic, 
  Square, 
  Trash2, 
  Plus, 
  Youtube, 
  Image as ImageIcon, 
  FileText, 
  Globe, 
  Instagram, 
  Music, 
  Loader2, 
  Check, 
  AlertCircle,
  MapPin,
  QrCode,
  Printer
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { TourStop, StopCategory, StopAudio, StopImage, TourDocument, SocialLinks } from '../types';
import { AudioRecorder, base64AudioBlobUrl, getYouTubeEmbedUrl, uploadAudioToServer, audioDurationFromBlob } from '../utils/audioUtils';

interface StopEditorModalProps {
  stop: TourStop;
  cityName?: string;
  tourCity?: string;
  tourTitle?: string;
  onSave: (updatedStop: TourStop) => void;
  onClose: () => void;
}

export const StopEditorModal: React.FC<StopEditorModalProps> = ({
  stop,
  cityName,
  tourCity,
  tourTitle,
  onSave,
  onClose,
}) => {
  const effectiveCity = cityName || tourCity || 'Chile';
  const [formData, setFormData] = useState<TourStop>({ ...stop });
  const [activeTab, setActiveTab] = useState<'content' | 'audio' | 'media' | 'docs' | 'links' | 'qr'>('content');

  // AI Script Generation state
  const [isGeneratingScript, setIsGeneratingScript] = useState(false);
  const [aiTone, setAiTone] = useState<'historical' | 'dynamic' | 'mysterious' | 'family' | 'poetic' | 'insider'>('historical');
  const [aiLength, setAiLength] = useState<'short' | 'standard' | 'deep'>('standard');
  const [aiCustomNotes, setAiCustomNotes] = useState('');

  // AI Audio Generation state
  const [isGeneratingAudio, setIsGeneratingAudio] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState<'Kore' | 'Fenrir' | 'Zephyr' | 'Puck' | 'Charon'>('Kore');
  const [audioError, setAudioError] = useState<string | null>(null);

  // Audio Recording state
  const [isRecording, setIsRecording] = useState(false);
  const [recorderInstance, setRecorderInstance] = useState<AudioRecorder | null>(null);
  const [isUploadingAudio, setIsUploadingAudio] = useState(false);

  // Helper inputs for adding images & docs
  const [newImageUrl, setNewImageUrl] = useState('');
  const [newImageCaption, setNewImageCaption] = useState('');
  const [newDocName, setNewDocName] = useState('');
  const [newDocUrl, setNewDocUrl] = useState('');
  const [newDocSize, setNewDocSize] = useState('1.5 MB');

  // AI Script Generator
  const handleGenerateScriptWithAI = async () => {
    if (!formData.title) {
      alert('Por favor ingresa un título para el atractivo primero');
      return;
    }

    setIsGeneratingScript(true);
    try {
      const response = await fetch('/api/gemini/generate-script', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          poiTitle: formData.title,
          cityName: effectiveCity,
          category: formData.category,
          tone: aiTone,
          length: aiLength,
          additionalNotes: aiCustomNotes,
        }),
      });

      const data = await response.json();
      if (data.success && data.data) {
        setFormData(prev => ({
          ...prev,
          subtitle: data.data.subtitle || prev.subtitle,
          narrativeText: data.data.narrativeText || prev.narrativeText,
          trivia: data.data.trivia || prev.trivia,
          tips: data.data.tips || prev.tips,
          estimatedStayMinutes: data.data.estimatedStayMinutes || prev.estimatedStayMinutes,
        }));
      } else {
        alert(data.error || 'Error al generar guión con IA');
      }
    } catch (err: any) {
      console.error('Error:', err);
      alert('Error de conexión con el servicio de IA');
    } finally {
      setIsGeneratingScript(false);
    }
  };

  // AI TTS Audio Generator
  const handleGenerateAudioWithAI = async () => {
    if (!formData.narrativeText) {
      alert('Primero debes escribir o generar el texto del guión.');
      return;
    }

    setIsGeneratingAudio(true);
    setAudioError(null);

    try {
      const response = await fetch('/api/gemini/generate-audio', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: formData.narrativeText,
          voiceName: selectedVoice,
          persist: true,
        }),
      });

      const data = await response.json();
      if (data.success && data.audioBase64) {
        const persistentUrl: string | undefined = data.url;
        const blobUrl = persistentUrl ? '' : base64AudioBlobUrl(data.audioBase64, data.mimeType || 'audio/pcm;rate=24000');

        const newAudio: StopAudio = {
          type: 'ai_generated',
          url: persistentUrl || blobUrl || undefined,
          voiceName: selectedVoice,
          transcript: formData.narrativeText,
          durationSeconds: Math.ceil(formData.narrativeText.length / 15),
        };

        setFormData(prev => ({ ...prev, audio: newAudio }));
        if (!persistentUrl) {
          setAudioError('Audio sintetizado con vista previa temporal: conéctate al servidor para persistirlo.');
        }
      } else {
        setAudioError(data.error || 'Error al generar audio');
      }
    } catch (err: any) {
      console.error('TTS error:', err);
      setAudioError('Error de red al sintetizar audio');
    } finally {
      setIsGeneratingAudio(false);
    }
  };

  // Handle MP3 File Upload (persist on server; fallback to local preview offline)
  const handleMp3FileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    e.target.value = '';

    if (!file.type.includes('audio') && !file.name.endsWith('.mp3')) {
      alert('Por favor selecciona un archivo de audio válido (.mp3, .wav, .m4a)');
      return;
    }

    setIsUploadingAudio(true);
    setAudioError(null);
    try {
      const duration = await audioDurationFromBlob(file);
      const { url } = await uploadAudioToServer(file, file.type || 'audio/mpeg');
      const newAudio: StopAudio = {
        type: 'uploaded_mp3',
        url,
        transcript: formData.narrativeText,
        durationSeconds: duration,
        fileSize: formatFileSize(file.size),
      };
      setFormData(prev => ({ ...prev, audio: newAudio }));
    } catch (err: any) {
      const objectUrl = URL.createObjectURL(file);
      const newAudio: StopAudio = {
        type: 'uploaded_mp3',
        url: objectUrl,
        transcript: formData.narrativeText,
        durationSeconds: Math.round(file.size / 16000),
        fileSize: formatFileSize(file.size),
      };
      setFormData(prev => ({ ...prev, audio: newAudio }));
      setAudioError(err?.message || 'No se pudo subir el audio al servidor; se usará una vista previa temporal.');
    } finally {
      setIsUploadingAudio(false);
    }
  };

  // Start Mic Recording
  const handleStartRecording = async () => {
    try {
      const recorder = new AudioRecorder();
      await recorder.start();
      setRecorderInstance(recorder);
      setIsRecording(true);
    } catch (e) {
      console.error('Mic error:', e);
      alert('No se pudo acceder al micrófono.');
    }
  };

  // Stop Mic Recording
  const handleStopRecording = async () => {
    if (!recorderInstance) return;
    try {
      const recording = await recorderInstance.stop();
      setIsRecording(false);
      setIsUploadingAudio(true);
      setAudioError(null);
      try {
        const { url } = await uploadAudioToServer(recording.blob, recording.blob.type || 'audio/webm');
        const newAudio: StopAudio = {
          type: 'recorded',
          url,
          transcript: formData.narrativeText,
          durationSeconds: recording.durationSeconds,
        };
        setFormData(prev => ({ ...prev, audio: newAudio }));
      } catch (err: any) {
        const objectUrl = URL.createObjectURL(recording.blob);
        const newAudio: StopAudio = {
          type: 'recorded',
          url: objectUrl,
          transcript: formData.narrativeText,
          durationSeconds: recording.durationSeconds,
        };
        setFormData(prev => ({ ...prev, audio: newAudio }));
        setAudioError(err?.message || 'No se pudo subir la grabación; se usará una vista previa temporal.');
      } finally {
        setIsUploadingAudio(false);
      }
    } catch (e) {
      console.error('Stop record error:', e);
      setIsRecording(false);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  const audioTypeLabel = (type: string, voiceName?: string): string => {
    if (type === 'ai_generated') return `Voz Inteligente IA (${voiceName || 'Kore'})`;
    if (type === 'uploaded_mp3') return 'Archivo Subido (MP3/WAV/M4A)';
    if (type === 'recorded') return 'Grabación de Micrófono';
    if (type === 'external_url') return 'URL Externa';
    return 'Audio';
  };

  // Add Image
  const handleAddImage = () => {
    if (!newImageUrl.trim()) return;
    const newImg: StopImage = {
      id: `img-${Date.now()}`,
      url: newImageUrl.trim(),
      caption: newImageCaption.trim() || formData.title,
      isPrimary: formData.images.length === 0,
    };
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, newImg],
    }));
    setNewImageUrl('');
    setNewImageCaption('');
  };

  // Remove Image
  const handleRemoveImage = (imgId: string) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter(i => i.id !== imgId),
    }));
  };

  // Add Document
  const handleAddDoc = () => {
    if (!newDocName.trim() || !newDocUrl.trim()) return;
    const doc: TourDocument = {
      id: `doc-${Date.now()}`,
      name: newDocName.trim(),
      url: newDocUrl.trim(),
      type: 'pdf',
      size: newDocSize || '1.0 MB',
    };
    setFormData(prev => ({
      ...prev,
      documents: [...prev.documents, doc],
    }));
    setNewDocName('');
    setNewDocUrl('');
  };

  // Remove Document
  const handleRemoveDoc = (docId: string) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents.filter(d => d.id !== docId),
    }));
  };

  const categories: { value: StopCategory; label: string }[] = [
    { value: 'monument', label: '🏛️ Monumento Nacional' },
    { value: 'museum', label: '🖼️ Museo de Chile' },
    { value: 'church', label: '⛪ Iglesia Patrimonial' },
    { value: 'plaza', label: '⛲ Plaza / Paseo Cívico' },
    { value: 'viewpoint', label: '🌄 Mirador / Cerro' },
    { value: 'nature', label: '🌿 Parque / Sendero Natural' },
    { value: 'gastronomy', label: '🍷 Sabores & Tradición' },
    { value: 'history', label: '📜 Sitio Histórico' },
    { value: 'secret', label: '🗝️ Rincón Secreto' },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      <div 
        className="relative bg-white text-slate-900 w-full max-w-4xl rounded-3xl shadow-2xl border border-[#E4D8BF] overflow-hidden my-auto max-h-[94vh] flex flex-col font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#14281C] text-white">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#B04E2A] flex items-center justify-center font-bold text-sm shadow">
              {formData.order}
            </span>
            <div>
              <span className="text-xs text-[#E8A58B] font-semibold uppercase tracking-wider block">
                Editor de Parada • El Viaje Por Chile (www.interpretaciondelpatrimonio.cl)
              </span>
              <h2 className="text-lg font-bold truncate font-['Cormorant_Garamond',Georgia,serif]">
                {formData.title || 'Nueva Parada'}
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

        {/* Tab Navigation */}
        <div className="flex border-b border-[#E4D8BF] bg-[#F6F1E5] px-6 gap-2 overflow-x-auto">
          {[
            { id: 'content', label: '📝 Guión & Datos', icon: Sparkles },
            { id: 'audio', label: '🎧 Audio & Voz IA / MP3', icon: Music },
            { id: 'media', label: '📷 Fotos & YouTube', icon: ImageIcon },
            { id: 'docs', label: '📄 Guías & PDFs', icon: FileText },
            { id: 'links', label: '🌐 Redes & Enlaces', icon: Globe },
            { id: 'qr', label: '📱 Señalética QR', icon: QrCode },
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 py-3 px-3 border-b-2 text-xs font-bold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'border-[#B04E2A] text-[#B04E2A] bg-white shadow-sm rounded-t-lg'
                    : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6 bg-white">

          {/* TAB 1: CONTENT & SCRIPT */}
          {activeTab === 'content' && (
            <div className="space-y-5">
              
              {/* Basic Fields */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 space-y-1">
                  <label className="text-xs font-bold text-slate-800 uppercase">Título del Atractivo *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Ej. Ascensor Reina Victoria, Mirador Portales..."
                    className="w-full px-3.5 py-2.5 bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl text-sm font-semibold focus:ring-2 focus:ring-[#B04E2A] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800 uppercase">Categoría</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as StopCategory })}
                    className="w-full px-3.5 py-2.5 bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl text-sm font-semibold focus:ring-2 focus:ring-[#B04E2A] focus:outline-none"
                  >
                    {categories.map(c => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-xs font-bold text-slate-800 uppercase">Subtítulo / Frase Gancho</label>
                  <input
                    type="text"
                    value={formData.subtitle || ''}
                    onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                    placeholder="Ej. El funicular centenario que escala los cerros de Valparaíso"
                    className="w-full px-3.5 py-2 bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl text-xs focus:ring-2 focus:ring-[#B04E2A] focus:outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800 uppercase">Tiempo de Visita (min)</label>
                  <input
                    type="number"
                    value={formData.estimatedStayMinutes || 15}
                    onChange={(e) => setFormData({ ...formData, estimatedStayMinutes: parseInt(e.target.value) || 15 })}
                    className="w-full px-3.5 py-2 bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl text-xs focus:ring-2 focus:ring-[#B04E2A] focus:outline-none"
                  />
                </div>
              </div>

              {/* Coordinates & Radius */}
              <div className="p-4 bg-[#F6F1E5] border border-[#E4D8BF] rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800 uppercase flex items-center gap-1.5 font-['Cormorant_Garamond',Georgia,serif]">
                    <MapPin className="w-4 h-4 text-[#B04E2A]" />
                    Geolocalización y Radio de Disparo (Geofence)
                  </span>
                  <span className="text-xs text-slate-600">Auto-reproduce audio al entrar al radio</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  <div>
                    <label className="text-slate-600 font-semibold block mb-1">Latitud</label>
                    <input
                      type="number"
                      step="0.00001"
                      value={formData.location.lat}
                      onChange={(e) => setFormData({
                        ...formData,
                        location: { ...formData.location, lat: parseFloat(e.target.value) || 0 }
                      })}
                      className="w-full px-3 py-1.5 bg-white border border-[#CDBA95] rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="text-slate-600 font-semibold block mb-1">Longitud</label>
                    <input
                      type="number"
                      step="0.00001"
                      value={formData.location.lng}
                      onChange={(e) => setFormData({
                        ...formData,
                        location: { ...formData.location, lng: parseFloat(e.target.value) || 0 }
                      })}
                      className="w-full px-3 py-1.5 bg-white border border-[#CDBA95] rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="text-slate-600 font-semibold block mb-1">Radio GPS (Metros)</label>
                    <input
                      type="number"
                      value={formData.triggerRadiusMeters || 35}
                      onChange={(e) => setFormData({
                        ...formData,
                        triggerRadiusMeters: parseInt(e.target.value) || 35
                      })}
                      className="w-full px-3 py-1.5 bg-white border border-[#CDBA95] rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* AI Script Assistant Banner */}
              <div className="p-4 bg-[#F6F1E5] border border-[#E4D8BF] rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#B04E2A]" />
                    <div>
                      <h4 className="text-sm font-bold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">Asistente de Guiones con IA (Gemini)</h4>
                      <p className="text-xs text-slate-600">Redacta el guión de audioguía, subtítulo, curiosidades y consejos de forma automática.</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <div>
                    <label className="font-semibold text-slate-800 block mb-1">Tono del Relato</label>
                    <select
                      value={aiTone}
                      onChange={(e) => setAiTone(e.target.value as any)}
                      className="w-full px-2.5 py-1.5 bg-white border border-[#CDBA95] rounded-lg font-semibold"
                    >
                      <option value="historical">📜 Histórico y Patrimonial</option>
                      <option value="poetic">🌿 Interpretación del Patrimonio (Provocación & Relación)</option>
                      <option value="mysterious">🗝️ Mitos y Leyendas de Chile</option>
                      <option value="dynamic">⚡ Aventura y Exploración Dinámica</option>
                      <option value="family">👨‍👩‍👧 Familiar y Accesible</option>
                      <option value="insider">🤫 Secreto de Guía Local</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-semibold text-slate-800 block mb-1">Extensión</label>
                    <select
                      value={aiLength}
                      onChange={(e) => setAiLength(e.target.value as any)}
                      className="w-full px-2.5 py-1.5 bg-white border border-[#CDBA95] rounded-lg font-semibold"
                    >
                      <option value="short">Corto (~1 min de audio)</option>
                      <option value="standard">Estándar (~2 min de audio)</option>
                      <option value="deep">Detallado (~3 min de audio)</option>
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button
                      onClick={handleGenerateScriptWithAI}
                      disabled={isGeneratingScript}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-[#B04E2A] hover:bg-[#9A3F1E] text-white rounded-xl font-bold shadow-md shadow-[#B04E2A]/20 disabled:opacity-50 transition-all text-xs"
                    >
                      {isGeneratingScript ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Escribiendo...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          <span>Generar Guión</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Narrative Text Area */}
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-slate-800 uppercase">
                    Guión de la Audioguía (Relato para el visitante)
                  </label>
                  <span className="text-[10px] text-slate-500 font-mono">
                    {formData.narrativeText.length} caracteres (~{Math.ceil(formData.narrativeText.length / 15)} seg)
                  </span>
                </div>
                <textarea
                  rows={6}
                  value={formData.narrativeText}
                  onChange={(e) => setFormData({ ...formData, narrativeText: e.target.value })}
                  placeholder="Escribe la historia inmersiva que el visitante escuchará al llegar a este punto..."
                  className="w-full px-3.5 py-2.5 bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl text-xs sm:text-sm leading-relaxed focus:ring-2 focus:ring-[#B04E2A] focus:outline-none"
                />
              </div>

              {/* Tips & Trivia */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="space-y-1">
                  <label className="font-bold text-slate-800 uppercase">Consejos Prácticos (Tips)</label>
                  <textarea
                    rows={2}
                    value={formData.tips || ''}
                    onChange={(e) => setFormData({ ...formData, tips: e.target.value })}
                    placeholder="Ej. Mejor horario para fotos, calzado adecuado..."
                    className="w-full px-3 py-2 bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-800 uppercase">¿Sabías qué? (Curiosidad)</label>
                  <textarea
                    rows={2}
                    value={formData.trivia || ''}
                    onChange={(e) => setFormData({ ...formData, trivia: e.target.value })}
                    placeholder="Ej. Anécdota histórica poco conocida..."
                    className="w-full px-3 py-2 bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl"
                  />
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: AUDIO & VOZ IA / MP3 */}
          {activeTab === 'audio' && (
            <div className="space-y-6">
              
              {/* Current Audio Status */}
              <div className="p-5 bg-[#F6F1E5] border border-[#E4D8BF] rounded-2xl flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#B04E2A]/10 text-[#B04E2A] flex items-center justify-center">
                    <Music className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#14281C]">Estado del Audio de la Parada</h4>
                    <p className="text-xs text-slate-600">
                      {formData.audio
                        ? `Configurado: ${audioTypeLabel(formData.audio.type, formData.audio.voiceName)}`
                        : 'Aún no has generado ni subido audio para este punto.'}
                    </p>
                  </div>
                </div>

                {isUploadingAudio && (
                  <span className="flex items-center gap-1.5 text-xs font-bold text-[#B04E2A]">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Subiendo audio...
                  </span>
                )}

                {formData.audio && (
                  <button
                    onClick={() => setFormData({ ...formData, audio: undefined })}
                    className="flex items-center gap-1 px-3 py-1.5 text-xs text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Eliminar Audio</span>
                  </button>
                )}
              </div>

              {/* Audio Preview Player */}
              {formData.audio?.url && (
                <div className="p-4 bg-white border border-[#E4D8BF] rounded-2xl shadow-sm">
                  <p className="text-[11px] font-bold uppercase text-slate-500 mb-2">Vista previa y verificación</p>
                  <audio controls preload="none" src={formData.audio.url} className="w-full" />
                  <p className="text-[11px] text-slate-500 mt-1.5 flex flex-wrap gap-x-3 gap-y-0.5">
                    <span>Tipo: {audioTypeLabel(formData.audio.type, formData.audio.voiceName)}</span>
                    {formData.audio.durationSeconds ? <span>≈ {Math.ceil(formData.audio.durationSeconds)} seg</span> : null}
                    {formData.audio.fileSize ? <span>Peso: {formData.audio.fileSize}</span> : null}
                    {formData.audio.url.startsWith('/api/uploads/') ? (
                      <span className="text-emerald-600 font-semibold">Permanente en el servidor</span>
                    ) : (
                      <span className="text-amber-600 font-semibold">Vista previa temporal</span>
                    )}
                  </p>
                </div>
              )}

              {/* OPTION A: GENERATE AI TTS (GEMINI) */}
              <div className="p-5 bg-white border border-[#E4D8BF] rounded-2xl space-y-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-[#B04E2A]" />
                    <h4 className="text-sm font-bold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
                      Opción 1: Generar Voz Artificial con IA (Gemini TTS)
                    </h4>
                  </div>
                  <span className="text-[10px] uppercase font-bold bg-[#B04E2A]/10 text-[#B04E2A] px-2 py-0.5 rounded">
                    Recomendado
                  </span>
                </div>

                <p className="text-xs text-slate-600">
                  Convierte automáticamente el guión en una narración de voz natural y profesional con modulación expresiva.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Voz del Narrador</label>
                    <select
                      value={selectedVoice}
                      onChange={(e) => setSelectedVoice(e.target.value as any)}
                      className="w-full px-3 py-2 bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl font-semibold"
                    >
                      <option value="Kore">Kore (Voz Femenina Clara, Cálida y Serena)</option>
                      <option value="Fenrir">Fenrir (Voz Masculina Grave, Épica y Profunda)</option>
                      <option value="Zephyr">Zephyr (Voz Equilibrada y Dinámica)</option>
                      <option value="Puck">Puck (Voz Fresca y Juvenil)</option>
                      <option value="Charon">Charon (Voz Solemne y Documental)</option>
                    </select>
                  </div>

                  <div className="flex items-end">
                    <button
                      onClick={handleGenerateAudioWithAI}
                      disabled={isGeneratingAudio || !formData.narrativeText}
                      className="w-full flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#B04E2A] to-[#D97706] hover:from-[#9A3F1E] hover:to-[#B45309] text-white rounded-xl font-bold shadow-md shadow-[#B04E2A]/20 disabled:opacity-50 transition-all text-xs"
                    >
                      {isGeneratingAudio ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sintetizando Audio HD...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" />
                          <span>Sintetizar Audio con Gemini</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {audioError && (
                  <p className="text-xs text-red-600 bg-red-50 p-2.5 rounded-xl border border-red-200">
                    {audioError}
                  </p>
                )}
              </div>

              {/* OPTION B: UPLOAD MP3 FILE */}
              <div className="p-5 bg-white border border-[#E4D8BF] rounded-2xl space-y-3 shadow-sm">
                <div className="flex items-center gap-2">
                  <Upload className="w-5 h-5 text-[#2F5238]" />
                  <h4 className="text-sm font-bold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
                    Opción 2: Subir Archivo de Audio Propio (MP3, WAV, M4A)
                  </h4>
                </div>
                <p className="text-xs text-slate-600">
                  ¿Tienes una grabación de locutor profesional o sonido ambiente? Sube el archivo directamente.
                </p>

                <div>
                  <input
                    type="file"
                    accept="audio/*"
                    disabled={isUploadingAudio}
                    onChange={handleMp3FileUpload}
                    className="block w-full text-xs text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-[#14281C] file:text-white hover:file:bg-[#1D3626] file:cursor-pointer cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  {isUploadingAudio && (
                    <p className="flex items-center gap-1.5 text-[11px] font-semibold text-[#B04E2A] mt-1.5">
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      Subiendo y verificando archivo...
                    </p>
                  )}
                </div>
              </div>

              {/* OPTION C: LIVE MICROPHONE RECORDING */}
              <div className="p-5 bg-white border border-[#E4D8BF] rounded-2xl space-y-3 shadow-sm">
                <div className="flex items-center gap-2">
                  <Mic className="w-5 h-5 text-[#B04E2A]" />
                  <h4 className="text-sm font-bold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
                    Opción 3: Grabar con tu Micrófono en Vivo
                  </h4>
                </div>
                <p className="text-xs text-slate-600">
                  Graba tu voz directamente desde el navegador para darle un toque personal y auténtico.
                </p>

                <div className="flex items-center gap-3">
                  {!isRecording ? (
                    <button
                      onClick={handleStartRecording}
                      className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl text-xs font-bold transition-colors shadow"
                    >
                      <Mic className="w-4 h-4" />
                      <span>Iniciar Grabación</span>
                    </button>
                  ) : (
                    <button
                      onClick={handleStopRecording}
                      className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-black text-white rounded-xl text-xs font-bold animate-pulse transition-colors"
                    >
                      <Square className="w-4 h-4" />
                      <span>Detener y Guardar Grabación</span>
                    </button>
                  )}

                  {isRecording && (
                    <span className="text-xs font-bold text-red-600 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping" />
                      Grabando en curso...
                    </span>
                  )}
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: MEDIA (PHOTOS & YOUTUBE) */}
          {activeTab === 'media' && (
            <div className="space-y-6">
              
              {/* YouTube Video URL */}
              <div className="p-5 bg-white border border-[#E4D8BF] rounded-2xl space-y-3 shadow-sm">
                <div className="flex items-center gap-2">
                  <Youtube className="w-5 h-5 text-red-600" />
                  <h4 className="text-sm font-bold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
                    Video de YouTube Vinculado
                  </h4>
                </div>
                <p className="text-xs text-slate-600">
                  Pega el enlace de un video o mini-documental para enriquecer visualmente el atractivo turístico.
                </p>
                <input
                  type="text"
                  value={formData.youtubeUrl || ''}
                  onChange={(e) => setFormData({ ...formData, youtubeUrl: e.target.value })}
                  placeholder="https://www.youtube.com/watch?v=..."
                  className="w-full px-3.5 py-2.5 bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl text-xs font-mono"
                />

                {formData.youtubeUrl && (
                  <div className="pt-2">
                    <p className="text-[11px] text-emerald-600 font-semibold mb-2">Vista previa de integración:</p>
                    <div className="relative aspect-video w-full max-w-md rounded-xl overflow-hidden border border-[#E4D8BF]">
                      <iframe
                        src={getYouTubeEmbedUrl(formData.youtubeUrl) || ''}
                        className="absolute inset-0 w-full h-full"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Photo Gallery Manager */}
              <div className="p-5 bg-white border border-[#E4D8BF] rounded-2xl space-y-4 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ImageIcon className="w-5 h-5 text-[#B04E2A]" />
                    <h4 className="text-sm font-bold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
                      Galería de Imágenes ({formData.images.length})
                    </h4>
                  </div>
                </div>

                {/* Existing Images Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {formData.images.map((img) => (
                    <div key={img.id} className="relative group rounded-xl overflow-hidden border border-[#E4D8BF] aspect-square bg-slate-900">
                      <img src={img.url} alt={img.caption} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2">
                        <span className="text-[10px] text-white truncate">{img.caption}</span>
                        <button
                          onClick={() => handleRemoveImage(img.id)}
                          className="self-end p-1.5 bg-red-600 text-white rounded-lg hover:bg-red-700"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add image form */}
                <div className="p-3 bg-[#F6F1E5] rounded-xl border border-[#E4D8BF] space-y-2 text-xs">
                  <span className="font-bold text-slate-800 block">Añadir Nueva Foto por URL</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <input
                      type="text"
                      value={newImageUrl}
                      onChange={(e) => setNewImageUrl(e.target.value)}
                      placeholder="URL de la imagen (https://...)"
                      className="px-3 py-1.5 bg-white border border-[#CDBA95] rounded-lg font-mono text-[11px]"
                    />
                    <input
                      type="text"
                      value={newImageCaption}
                      onChange={(e) => setNewImageCaption(e.target.value)}
                      placeholder="Pie de foto descriptivo"
                      className="px-3 py-1.5 bg-white border border-[#CDBA95] rounded-lg"
                    />
                  </div>
                  <button
                    onClick={handleAddImage}
                    className="px-3 py-1.5 bg-[#B04E2A] hover:bg-[#9A3F1E] text-white font-bold rounded-lg text-xs"
                  >
                    + Añadir a la Galería
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* TAB 4: DOCS & PDFS */}
          {activeTab === 'docs' && (
            <div className="space-y-4">
              <div className="p-5 bg-white border border-[#E4D8BF] rounded-2xl space-y-3 shadow-sm">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#B04E2A]" />
                  <h4 className="text-sm font-bold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
                    Documentos, Guías PDF y Archivos del Atractivo
                  </h4>
                </div>
                <p className="text-xs text-slate-600">
                  Adjunta folletos históricos, planos arquitectónicos, fichas botánicas o artículos descargables para los turistas.
                </p>

                <div className="space-y-2">
                  {formData.documents.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between p-3 bg-[#F6F1E5] rounded-xl border border-[#E4D8BF]">
                      <div className="truncate max-w-sm">
                        <span className="font-bold text-xs text-slate-900 block truncate">{doc.name}</span>
                        <span className="text-[10px] text-slate-500 font-mono truncate block">{doc.url}</span>
                      </div>
                      <button
                        onClick={() => handleRemoveDoc(doc.id)}
                        className="text-red-500 hover:text-red-700 p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Add doc input */}
                <div className="p-3 bg-[#F6F1E5] rounded-xl border border-[#E4D8BF] space-y-2 text-xs pt-3">
                  <span className="font-bold text-slate-800 block">Adjuntar Nuevo Documento</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <input
                      type="text"
                      value={newDocName}
                      onChange={(e) => setNewDocName(e.target.value)}
                      placeholder="Título del documento (ej. Plano Histórico 1902.pdf)"
                      className="px-3 py-1.5 bg-white border border-[#CDBA95] rounded-lg"
                    />
                    <input
                      type="text"
                      value={newDocUrl}
                      onChange={(e) => setNewDocUrl(e.target.value)}
                      placeholder="URL pública del archivo PDF"
                      className="px-3 py-1.5 bg-white border border-[#CDBA95] rounded-lg font-mono text-[11px]"
                    />
                    <button
                      onClick={handleAddDoc}
                      className="px-3 py-1.5 bg-[#14281C] hover:bg-[#1D3626] text-white font-bold rounded-lg text-xs"
                    >
                      Adjuntar Archivo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: LINKS & SOCIAL */}
          {activeTab === 'links' && (
            <div className="space-y-4">
              <div className="p-5 bg-white border border-[#E4D8BF] rounded-2xl space-y-4 shadow-sm text-xs">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-[#B04E2A]" />
                  <h4 className="text-sm font-bold text-[#14281C] font-['Cormorant_Garamond',Georgia,serif]">
                    Enlaces y Redes Sociales de este Atractivo
                  </h4>
                </div>

                <div>
                  <label className="font-bold text-slate-800 block mb-1">Sitio Web Oficial</label>
                  <input
                    type="text"
                    value={formData.socialLinks?.website || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      socialLinks: { ...formData.socialLinks, website: e.target.value }
                    })}
                    placeholder="https://..."
                    className="w-full px-3.5 py-2 bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl font-mono text-[11px]"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-800 block mb-1">Instagram (@)</label>
                  <input
                    type="text"
                    value={formData.socialLinks?.instagram || ''}
                    onChange={(e) => setFormData({
                      ...formData,
                      socialLinks: { ...formData.socialLinks, instagram: e.target.value }
                    })}
                    placeholder="https://instagram.com/..."
                    className="w-full px-3.5 py-2 bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl font-mono text-[11px]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: SEÑALÉTICA Y CÓDIGO QR INDIVIDUAL */}
          {activeTab === 'qr' && (
            <div className="space-y-6">
              <div className="p-4 bg-[#F1EAD9] border border-[#E4D8BF] rounded-2xl flex items-start gap-3">
                <QrCode className="w-5 h-5 text-[#B04E2A] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase">
                    Código QR Individual para {formData.title || 'esta Parada'}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Permite al visitante en terreno escanear con su teléfono móvil e iniciar inmediatamente la reproducción de este audio específico y ficha interpretativa.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                {/* Visual Plaque Preview */}
                <div className="bg-[#14281C] text-white p-6 rounded-3xl border-2 border-[#B04E2A] shadow-xl text-center flex flex-col items-center space-y-4">
                  <span className="text-[10px] font-bold text-[#E8A58B] uppercase tracking-widest">
                    🇨🇱 El Viaje Por Chile • Parada #{formData.order}
                  </span>
                  
                  <div className="p-4 bg-white rounded-2xl shadow-inner inline-block">
                    <QRCodeSVG
                      value={`https://www.interpretaciondelpatrimonio.cl/tours?stopId=${encodeURIComponent(formData.id)}&order=${formData.order}&title=${encodeURIComponent(formData.title)}`}
                      size={180}
                      level="H"
                      includeMargin={false}
                      fgColor="#14281C"
                    />
                  </div>

                  <div>
                    <h4 className="text-base font-extrabold text-white font-['Cormorant_Garamond',Georgia,serif]">
                      {formData.title || 'Parada Sin Título'}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1">
                      {formData.subtitle || `${effectiveCity}, Chile`}
                    </p>
                  </div>

                  <p className="text-[11px] text-[#E8A58B] font-semibold bg-[#223F2C] px-3 py-1 rounded-full">
                    🎧 Escanea para escuchar la audioguía
                  </p>
                </div>

                {/* Technical Information & Direct URL */}
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-800 uppercase">Enlace Directo del QR</label>
                    <input
                      type="text"
                      readOnly
                      value={`https://www.interpretaciondelpatrimonio.cl/tours?stopId=${encodeURIComponent(formData.id)}&order=${formData.order}`}
                      className="w-full px-3.5 py-2.5 bg-[#F6F1E5] border border-[#E4D8BF] rounded-xl font-mono text-xs text-slate-700 select-all"
                    />
                  </div>

                  <div className="space-y-2 text-xs text-slate-600 bg-white p-4 rounded-2xl border border-slate-200">
                    <p className="font-bold text-slate-900">Consejos para instalación en terreno:</p>
                    <ul className="list-disc pl-4 space-y-1">
                      <li>Imprime en material resistente a la intemperie (acrílico, aluminio compuesto o adhesivo UV).</li>
                      <li>Ubica la señalética a una altura accesible entre 1.10m y 1.40m del suelo.</li>
                      <li>Asegúrate de que haya buen contraste de luz natural en el hito patrimonial.</li>
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      window.print();
                    }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#14281C] hover:bg-[#223F2C] text-white rounded-xl text-xs font-bold shadow transition-all"
                  >
                    <Printer className="w-4 h-4 text-[#E8A58B]" />
                    <span>Imprimir Ficha de Señalética</span>
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer Actions Bar */}
        <div className="px-6 py-3.5 bg-[#F6F1E5] border-t border-[#E4D8BF] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-[#E4D8BF] transition-colors"
          >
            Cancelar
          </button>

          <button
            onClick={() => {
              onSave(formData);
              onClose();
            }}
            className="flex items-center gap-2 px-6 py-2.5 bg-[#B04E2A] hover:bg-[#9A3F1E] text-white rounded-xl text-xs font-bold shadow-lg shadow-[#B04E2A]/30 transition-all"
          >
            <Check className="w-4 h-4" />
            <span>Guardar Parada</span>
          </button>
        </div>

      </div>
    </div>
  );
};
