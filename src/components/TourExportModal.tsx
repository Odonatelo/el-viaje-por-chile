import React, { useState } from 'react';
import { 
  X, 
  Download, 
  Printer, 
  MapPin, 
  Compass, 
  FileText, 
  Check, 
  Share2, 
  Clock, 
  Navigation, 
  Layers, 
  FileCode, 
  Headphones,
  CheckCircle2,
  Calendar,
  Sparkles
} from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import { Tour, TourStop } from '../types';

interface TourExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  tour: Tour;
  selectedStop?: TourStop | null;
}

export const TourExportModal: React.FC<TourExportModalProps> = ({
  isOpen,
  onClose,
  tour,
}) => {
  const [exportType, setExportType] = useState<'field_guide' | 'gpx' | 'kml' | 'json'>('field_guide');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  // 1. Generate & Download Universal GPX File
  const handleDownloadGPX = () => {
    const waypointsXml = tour.stops.map(stop => `
  <wpt lat="${stop.location.lat}" lon="${stop.location.lng}">
    <name>${escapeXml(stop.title)}</name>
    <desc>${escapeXml(stop.narrativeText || stop.subtitle || '')}</desc>
    <sym>Waypoint</sym>
    <type>${stop.category}</type>
  </wpt>`).join('');

    const trackPointsXml = (tour.routePolyline && tour.routePolyline.length > 0)
      ? tour.routePolyline.map(([lat, lng]) => `      <trkpt lat="${lat}" lon="${lng}"></trkpt>`).join('\n')
      : tour.stops.map(s => `      <trkpt lat="${s.location.lat}" lon="${s.location.lng}"></trkpt>`).join('\n');

    const gpxContent = `<?xml version="1.0" encoding="UTF-8"?>
<gpx version="1.1" creator="El Viaje Por Chile - www.elviaje.cl" xmlns="http://www.topografix.com/GPX/1/1">
  <metadata>
    <name>${escapeXml(tour.title)}</name>
    <desc>${escapeXml(tour.description)}</desc>
    <author>
      <name>${escapeXml(tour.author.name)}</name>
    </author>
    <link href="https://www.elviaje.cl/tours/${tour.id}">
      <text>Audioguía en El Viaje Por Chile</text>
    </link>
    <time>${new Date().toISOString()}</time>
  </metadata>
  ${waypointsXml}
  <trk>
    <name>${escapeXml(tour.title)}</name>
    <desc>Itinerario patrimonial en ${escapeXml(tour.city)}, Chile</desc>
    <trkseg>
${trackPointsXml}
    </trkseg>
  </trk>
</gpx>`;

    downloadBlob(gpxContent, `${sanitizeFilename(tour.title)}_Ruta_GPS.gpx`, 'application/gpx+xml');
    triggerSuccess('Archivo GPX descargado listo para Garmin, Strava y Wikiloc.');
  };

  // 2. Generate & Download Google Earth KML File
  const handleDownloadKML = () => {
    const placemarksXml = tour.stops.map(stop => `
    <Placemark>
      <name>${escapeXml(stop.title)} (Parada #${stop.order})</name>
      <description><![CDATA[
        <p><strong>${escapeXml(stop.subtitle || '')}</strong></p>
        <p>${escapeXml(stop.narrativeText)}</p>
        <p><em>Tiempo sugerido: ${stop.estimatedStayMinutes} min</em></p>
      ]]></description>
      <Point>
        <coordinates>${stop.location.lng},${stop.location.lat},0</coordinates>
      </Point>
    </Placemark>`).join('');

    const lineCoords = (tour.routePolyline && tour.routePolyline.length > 0)
      ? tour.routePolyline.map(([lat, lng]) => `${lng},${lat},0`).join(' ')
      : tour.stops.map(s => `${s.location.lng},${s.location.lat},0`).join(' ');

    const kmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2">
  <Document>
    <name>${escapeXml(tour.title)}</name>
    <description>${escapeXml(tour.description)}</description>
    ${placemarksXml}
    <Placemark>
      <name>Trazado de la Ruta - ${escapeXml(tour.title)}</name>
      <LineString>
        <tessellate>1</tessellate>
        <coordinates>
          ${lineCoords}
        </coordinates>
      </LineString>
    </Placemark>
  </Document>
</kml>`;

    downloadBlob(kmlContent, `${sanitizeFilename(tour.title)}_GoogleEarth.kml`, 'application/vnd.google-earth.kml+xml');
    triggerSuccess('Archivo KML descargado para Google Earth y Google My Maps.');
  };

  // 3. Generate Open Data JSON / GeoJSON
  const handleDownloadJSON = () => {
    const geoJson = {
      type: 'FeatureCollection',
      properties: {
        id: tour.id,
        title: tour.title,
        tagline: tour.tagline,
        city: tour.city,
        country: tour.country,
        durationMinutes: tour.durationMinutes,
        distanceKm: tour.distanceKm,
        difficulty: tour.difficulty,
        author: tour.author.name,
        source: 'El Viaje Por Chile (www.elviaje.cl)',
        exportedAt: new Date().toISOString(),
      },
      features: tour.stops.map(stop => ({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [stop.location.lng, stop.location.lat],
        },
        properties: {
          id: stop.id,
          order: stop.order,
          title: stop.title,
          subtitle: stop.subtitle,
          category: stop.category,
          narrativeText: stop.narrativeText,
          trivia: stop.trivia,
          tips: stop.tips,
          estimatedStayMinutes: stop.estimatedStayMinutes,
          audioUrl: stop.audio?.url || null,
        },
      })),
    };

    downloadBlob(JSON.stringify(geoJson, null, 2), `${sanitizeFilename(tour.title)}_Datos_GeoJSON.json`, 'application/json');
    triggerSuccess('Datos GeoJSON descargados para análisis SIG y desarrollo.');
  };

  const triggerSuccess = (msg: string) => {
    setDownloadSuccess(msg);
    setTimeout(() => setDownloadSuccess(null), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#F6F1E5] w-full max-w-4xl rounded-3xl shadow-2xl border border-[#E4D8BF] overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Top Bar */}
        <div className="bg-[#14281C] text-white p-6 relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#40624A]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#B04E2A] text-white uppercase tracking-wider">
                Formatos Descargables de la Ruta
              </span>
              <span className="text-xs text-slate-300 font-medium">
                {tour.city}, Chile
              </span>
            </div>
            <h2 className="text-xl font-bold font-['Cormorant_Garamond',Georgia,serif] text-white line-clamp-1">
              {tour.title}
            </h2>
            <p className="text-xs text-slate-300 mt-0.5">
              Descarga o imprime el itinerario completo, mapa de expedición y coordenadas GPS para dispositivos móviles y GPS de campo.
            </p>
          </div>

          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Format Select Tabs */}
        <div className="flex flex-wrap items-center bg-white border-b border-[#E4D8BF] px-6 gap-2">
          <button
            onClick={() => setExportType('field_guide')}
            className={`py-3.5 px-4 text-xs font-bold border-b-2 flex items-center gap-2 transition-all ${
              exportType === 'field_guide'
                ? 'border-[#B04E2A] text-[#B04E2A]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Guía de Campo & Itinerario (PDF / Imprimible)</span>
          </button>

          <button
            onClick={() => setExportType('gpx')}
            className={`py-3.5 px-4 text-xs font-bold border-b-2 flex items-center gap-2 transition-all ${
              exportType === 'gpx'
                ? 'border-[#B04E2A] text-[#B04E2A]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Archivo GPS (.GPX)</span>
          </button>

          <button
            onClick={() => setExportType('kml')}
            className={`py-3.5 px-4 text-xs font-bold border-b-2 flex items-center gap-2 transition-all ${
              exportType === 'kml'
                ? 'border-[#B04E2A] text-[#B04E2A]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <Navigation className="w-4 h-4" />
            <span>Google Earth (.KML)</span>
          </button>

          <button
            onClick={() => setExportType('json')}
            className={`py-3.5 px-4 text-xs font-bold border-b-2 flex items-center gap-2 transition-all ${
              exportType === 'json'
                ? 'border-[#B04E2A] text-[#B04E2A]'
                : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            <FileCode className="w-4 h-4" />
            <span>GeoJSON Datos Abiertos</span>
          </button>
        </div>

        {/* Content Container */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {downloadSuccess && (
            <div className="p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-xs font-semibold flex items-center gap-2 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>{downloadSuccess}</span>
            </div>
          )}

          {/* TAB 1: GUÍA DE CAMPO & ITINERARIO IMPRIMIBLE */}
          {exportType === 'field_guide' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-white rounded-2xl border border-[#E4D8BF]">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    Itinerario de Expedición & Guía de Campo Completa
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Contiene la ficha técnica, orden de paradas, coordenadas GPS, transcripción del audio interpretativo y códigos QR de escucha rápida para cada hito.
                  </p>
                </div>

                <button
                  onClick={() => window.print()}
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-[#B04E2A] hover:bg-[#9A3F1E] text-white rounded-xl font-bold text-xs shadow-md transition-all flex-shrink-0 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Imprimir / Guardar en PDF</span>
                </button>
              </div>

              {/* Printable Field Guide Container (Styled for Screen & Print) */}
              <div 
                id="printable-route-guide" 
                className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E4D8BF] shadow-sm space-y-6 text-slate-900 font-['Cormorant_Garamond',Georgia,serif]"
              >
                {/* Header of the Field Guide */}
                <div className="border-b-2 border-[#14281C] pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-black text-[#B04E2A] uppercase tracking-widest">
                      🇨🇱 El Viaje Por Chile • Guía de Ruta Patrimonial
                    </span>
                    <h1 className="text-2xl font-extrabold text-[#14281C]">
                      {tour.title}
                    </h1>
                    <p className="text-xs text-slate-600 italic">
                      {tour.tagline}
                    </p>
                  </div>

                  <div className="p-3 bg-[#F6F1E5] rounded-2xl border border-[#E4D8BF] flex items-center gap-3">
                    <QRCodeSVG
                      value={`https://www.elviaje.cl/tours?tourId=${encodeURIComponent(tour.id)}`}
                      size={64}
                      level="M"
                      fgColor="#14281C"
                    />
                    <div className="text-[10px] text-slate-600 leading-tight">
                      <strong className="block text-slate-900">Acceso Móvil</strong>
                      Escanea para escuchar la audioguía interactiva.
                    </div>
                  </div>
                </div>

                {/* Technical Overview Matrix */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#F6F1E5] p-4 rounded-2xl border border-[#E4D8BF] text-xs">
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase block">Destino</span>
                    <strong className="text-slate-900">{tour.city}, {tour.country}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase block">Distancia & Tiempo</span>
                    <strong className="text-slate-900">{tour.distanceKm} km • {tour.durationMinutes} min</strong>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase block">Dificultad</span>
                    <strong className="text-slate-900 capitalize">{tour.difficulty}</strong>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase block">Autor & Relato</span>
                    <strong className="text-slate-900">{tour.author.name}</strong>
                  </div>
                </div>

                {/* General Overview */}
                <div className="text-xs leading-relaxed text-slate-700 space-y-2">
                  <h4 className="font-bold text-slate-900 uppercase text-[11px] tracking-wider">
                    Contexto Geográfico & Patrimonial
                  </h4>
                  <p>{tour.description}</p>
                </div>

                {/* Detailed Stops Itinerary */}
                <div className="space-y-4 pt-3">
                  <h4 className="font-bold text-slate-900 uppercase text-[11px] tracking-wider border-b border-slate-200 pb-2">
                    Itinerario Paso a Paso & Hitos Interpretativos ({tour.stops.length} Paradas)
                  </h4>

                  <div className="space-y-4">
                    {tour.stops.map((stop) => (
                      <div
                        key={stop.id}
                        className="p-4 rounded-2xl border border-[#E4D8BF] bg-[#F6F1E5]/60 flex flex-col sm:flex-row gap-4 justify-between"
                      >
                        <div className="space-y-2 flex-1">
                          <div className="flex items-center gap-2">
                            <span className="w-6 h-6 rounded-full bg-[#B04E2A] text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                              {stop.order}
                            </span>
                            <h5 className="font-bold text-sm text-slate-900">
                              {stop.title}
                            </h5>
                          </div>

                          {stop.subtitle && (
                            <p className="text-xs font-medium text-slate-600">
                              {stop.subtitle}
                            </p>
                          )}

                          <p className="text-xs text-slate-700 leading-relaxed">
                            {stop.narrativeText}
                          </p>

                          {/* Trivia or tips */}
                          {(stop.trivia || stop.tips) && (
                            <div className="text-[11px] bg-white p-2.5 rounded-xl border border-slate-200 space-y-1">
                              {stop.trivia && (
                                <p><strong className="text-[#B04E2A]">Dato Curioso:</strong> {stop.trivia}</p>
                              )}
                              {stop.tips && (
                                <p><strong className="text-slate-700">Recomendación:</strong> {stop.tips}</p>
                              )}
                            </div>
                          )}

                          <div className="flex items-center gap-3 text-[10px] text-slate-500 pt-1 font-mono">
                            <span>GPS: {stop.location.lat.toFixed(5)}, {stop.location.lng.toFixed(5)}</span>
                            <span>•</span>
                            <span>Permanencia: {stop.estimatedStayMinutes} min</span>
                          </div>
                        </div>

                        {/* Stop QR Code for instant listening */}
                        <div className="flex flex-col items-center justify-center p-3 bg-white rounded-2xl border border-[#E4D8BF] flex-shrink-0 text-center w-28">
                          <QRCodeSVG
                            value={`https://www.elviaje.cl/tours?stopId=${encodeURIComponent(stop.id)}&order=${stop.order}`}
                            size={72}
                            level="M"
                            fgColor="#14281C"
                          />
                          <span className="text-[9px] font-bold text-[#B04E2A] mt-1.5 leading-none">
                            🎧 Audio Hito #{stop.order}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visitor code & respect */}
                <div className="text-[11px] text-slate-500 border-t border-slate-200 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span>Plataforma Oficial El Viaje Por Chile • www.elviaje.cl</span>
                  <span>No dejes rastro • Cuida los monumentos nacionales y la flora silvestre.</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ARCHIVO GPS .GPX */}
          {exportType === 'gpx' && (
            <div className="space-y-6">
              <div className="p-5 bg-white rounded-3xl border border-[#E4D8BF] space-y-4">
                <div className="flex items-start gap-3">
                  <Compass className="w-6 h-6 text-[#B04E2A] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Archivo de Navegación GPS Universal (.GPX)
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      El formato GPX (GPS Exchange Format) es el estándar universal para cargar rutas en dispositivos Garmin, aplicaciones como Wikiloc, Strava, Komoot, OruxMaps, OsmAnd y relojes deportivos.
                    </p>
                  </div>
                </div>

                <div className="bg-[#F6F1E5] p-4 rounded-2xl border border-[#E4D8BF] space-y-2 text-xs text-slate-700">
                  <p className="font-bold text-slate-900">Contenido del archivo GPX generado:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>{tour.stops.length} Waypoints georreferenciados</strong> con nombres, coordenadas exactas y notas interpretativas.</li>
                    <li><strong>Trazado vectorial de la ruta</strong> con secuencia ordenada de caminata/recorrido.</li>
                    <li>Metadatos de autor ({tour.author.name}) y enlace a www.elviaje.cl.</li>
                  </ul>
                </div>

                <button
                  onClick={handleDownloadGPX}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-[#14281C] hover:bg-[#223F2C] text-white rounded-2xl font-bold text-xs shadow-lg transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4 text-[#E8A58B]" />
                  <span>Descargar Archivo GPX ({sanitizeFilename(tour.title)}.gpx)</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: GOOGLE EARTH .KML */}
          {exportType === 'kml' && (
            <div className="space-y-6">
              <div className="p-5 bg-white rounded-3xl border border-[#E4D8BF] space-y-4">
                <div className="flex items-start gap-3">
                  <Navigation className="w-6 h-6 text-[#009EE3] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Archivo Google Earth & Google My Maps (.KML)
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      El formato KML (Keyhole Markup Language) permite visualizar la ruta en 3D sobre el relieve de Chile en Google Earth y cargar capas personalizadas en Google Maps para teléfonos móviles.
                    </p>
                  </div>
                </div>

                <div className="bg-[#F6F1E5] p-4 rounded-2xl border border-[#E4D8BF] space-y-2 text-xs text-slate-700">
                  <p className="font-bold text-slate-900">Compatibilidad directa:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Google Earth (Web, Escritorio y Móvil).</li>
                    <li>Google My Maps (para abrir directamente en la app Google Maps en terreno).</li>
                    <li>Software GIS como QGIS y ArcGIS.</li>
                  </ul>
                </div>

                <button
                  onClick={handleDownloadKML}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-[#009EE3] hover:bg-[#0086C2] text-white rounded-2xl font-bold text-xs shadow-lg transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4 text-white" />
                  <span>Descargar Archivo KML ({sanitizeFilename(tour.title)}.kml)</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: GEOJSON DATOS ABIERTOS */}
          {exportType === 'json' && (
            <div className="space-y-6">
              <div className="p-5 bg-white rounded-3xl border border-[#E4D8BF] space-y-4">
                <div className="flex items-start gap-3">
                  <FileCode className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Formato GeoJSON de Datos Abiertos
                    </h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Estructura estándar en formato JSON con geometrías y propiedades completas para interoperabilidad con sistemas de información geográfica municipal, portales de turismo y aplicaciones web.
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleDownloadJSON}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-emerald-700 hover:bg-emerald-800 text-white rounded-2xl font-bold text-xs shadow-lg transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4 text-white" />
                  <span>Descargar GeoJSON (.json)</span>
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#EEE6D3] border-t border-[#E4D8BF] flex items-center justify-between text-xs text-slate-600">
          <span className="font-semibold text-slate-700">El Viaje Por Chile • Tienda El Viaje</span>
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

// Helper utilities for escaping & saving files
function escapeXml(unsafe: string): string {
  return (unsafe || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function sanitizeFilename(title: string): string {
  return (title || 'Ruta')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9_-]/g, '_')
    .slice(0, 40);
}

function downloadBlob(content: string, filename: string, mimeType: string) {
  const blob = new Blob([content], { type: `${mimeType};charset=utf-8` });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
