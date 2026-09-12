import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import { TourStop } from '../types';

interface TourMapProps {
  stops: TourStop[];
  activeStopId?: string;
  onSelectStop?: (stop: TourStop) => void;
  isEditable?: boolean;
  onAddStopLocation?: (location: { lat: number; lng: number }) => void;
  onUpdateStopLocation?: (stopId: string, location: { lat: number; lng: number }) => void;
  center?: [number, number];
  zoom?: number;
  userLocation?: { lat: number; lng: number } | null;
  className?: string;
  showRadius?: boolean;
}

export const TourMap: React.FC<TourMapProps> = ({
  stops,
  activeStopId,
  onSelectStop,
  isEditable = false,
  onAddStopLocation,
  onUpdateStopLocation,
  center,
  zoom = 15,
  userLocation,
  className = 'h-96 w-full',
  showRadius = true,
}) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [id: string]: L.Marker }>({});
  const circlesRef = useRef<{ [id: string]: L.Circle }>({});
  const userMarkerRef = useRef<L.Marker | null>(null);

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;

    if (!mapInstanceRef.current) {
      const defaultCenter = center || (stops.length > 0 ? [stops[0].location.lat, stops[0].location.lng] : [40.4168, -3.7038]);
      
      const map = L.map(mapContainerRef.current, {
        center: defaultCenter,
        zoom: zoom,
        zoomControl: false,
      });

      // Add OpenStreetMap standard tiles (no API key required)
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      // Add zoom control in bottom right
      L.control.zoom({ position: 'bottomright' }).addTo(map);

      mapInstanceRef.current = map;
    }

    const map = mapInstanceRef.current;

    // Handle map click in edit mode
    const handleMapClick = (e: L.LeafletMouseEvent) => {
      if (isEditable && onAddStopLocation) {
        onAddStopLocation({ lat: e.latlng.lat, lng: e.latlng.lng });
      }
    };

    map.on('click', handleMapClick);

    // Invalidate size on container resize
    const resizeObserver = new ResizeObserver(() => {
      map.invalidateSize();
    });
    if (mapContainerRef.current) {
      resizeObserver.observe(mapContainerRef.current);
    }

    return () => {
      map.off('click', handleMapClick);
      resizeObserver.disconnect();
    };
  }, [isEditable, onAddStopLocation]);

  // Update center if explicitly passed and no user interaction
  useEffect(() => {
    if (mapInstanceRef.current && center) {
      mapInstanceRef.current.setView(center, zoom, { animate: true });
    }
  }, [center, zoom]);

  // Render & Update Markers and Polyline
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    // Clean old markers & circles
    Object.values(markersRef.current).forEach((m: L.Marker) => m?.remove());
    Object.values(circlesRef.current).forEach((c: L.Circle) => c?.remove());
    markersRef.current = {};
    circlesRef.current = {};

    const latLngs: L.LatLngExpression[] = [];

    // Create markers for each stop
    stops.forEach((stop, index) => {
      const isSelected = stop.id === activeStopId;
      const orderNumber = stop.order || index + 1;

      // Custom HTML Pin icon
      const pinHtml = `
        <div class="group relative flex items-center justify-center cursor-pointer transition-transform duration-200 ${isSelected ? 'scale-125 z-50' : 'hover:scale-110 z-10'}">
          <div class="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow-xl transition-all ${
            isSelected 
              ? 'bg-rose-600 text-white ring-4 ring-rose-300 ring-opacity-70 animate-bounce-short' 
              : 'bg-indigo-700 text-white hover:bg-rose-500 border-2 border-white'
          }">
            <span>${orderNumber}</span>
          </div>
          <div class="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
          ${isSelected ? '<div class="absolute -inset-2 rounded-full border-2 border-rose-500 animate-ping opacity-40"></div>' : ''}
        </div>
      `;

      const customIcon = L.divIcon({
        html: pinHtml,
        className: 'custom-tour-pin',
        iconSize: [40, 40],
        iconAnchor: [20, 38],
        popupAnchor: [0, -36],
      });

      const marker = L.marker([stop.location.lat, stop.location.lng], {
        icon: customIcon,
        draggable: isEditable,
      }).addTo(map);

      // Popup with mini preview
      const popupContent = `
        <div class="p-1 max-w-[200px]">
          <div class="font-bold text-sm text-slate-900 leading-tight">${orderNumber}. ${stop.title}</div>
          ${stop.subtitle ? `<div class="text-xs text-slate-500 mt-0.5">${stop.subtitle}</div>` : ''}
          <div class="text-xs text-rose-600 font-semibold mt-1 flex items-center gap-1">
            <span>⏱️ ${stop.estimatedStayMinutes || 15} min</span>
            ${stop.audio ? '<span>• 🎧 Audio</span>' : ''}
          </div>
        </div>
      `;
      marker.bindPopup(popupContent);

      marker.on('click', () => {
        if (onSelectStop) {
          onSelectStop(stop);
        }
      });

      if (isEditable && onUpdateStopLocation) {
        marker.on('dragend', (e) => {
          const newPos = (e.target as L.Marker).getLatLng();
          onUpdateStopLocation(stop.id, { lat: newPos.lat, lng: newPos.lng });
        });
      }

      markersRef.current[stop.id] = marker;
      latLngs.push([stop.location.lat, stop.location.lng]);

      // Radius trigger circle
      if (showRadius && stop.triggerRadiusMeters) {
        const circle = L.circle([stop.location.lat, stop.location.lng], {
          radius: stop.triggerRadiusMeters,
          color: isSelected ? '#e11d48' : '#6366f1',
          fillColor: isSelected ? '#fb7185' : '#818cf8',
          fillOpacity: isSelected ? 0.25 : 0.1,
          weight: isSelected ? 2 : 1,
          dashArray: '4, 4',
        }).addTo(map);
        circlesRef.current[stop.id] = circle;
      }
    });

    // Auto-fit bounds if first load or multiple stops
    if (stops.length > 0 && !center) {
      const bounds = L.latLngBounds(latLngs);
      map.fitBounds(bounds, { padding: [40, 40], maxZoom: 16 });
    }
  }, [stops, activeStopId, isEditable, showRadius, onSelectStop, onUpdateStopLocation, center]);

  // User location marker (GPS or Walk Simulation)
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    if (userMarkerRef.current) {
      userMarkerRef.current.remove();
      userMarkerRef.current = null;
    }

    if (userLocation) {
      const userHtml = `
        <div class="relative flex items-center justify-center">
          <div class="w-5 h-5 bg-blue-600 border-2 border-white rounded-full shadow-lg z-20"></div>
          <div class="absolute w-10 h-10 bg-blue-500 rounded-full animate-ping opacity-50 z-10"></div>
        </div>
      `;
      const userIcon = L.divIcon({
        html: userHtml,
        className: 'user-gps-marker',
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      userMarkerRef.current = L.marker([userLocation.lat, userLocation.lng], {
        icon: userIcon,
        zIndexOffset: 1000,
      }).addTo(map);
    }
  }, [userLocation]);

  return (
    <div className="relative isolate z-0 w-full h-full rounded-2xl overflow-hidden shadow-inner border border-slate-200 bg-slate-100">
      <div ref={mapContainerRef} className={className} id="tour-interactive-map" />
      {isEditable && (
        <div className="absolute top-3 left-3 z-[400] bg-slate-900/85 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-lg shadow flex items-center gap-2 border border-slate-700">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Modo Edición: Haz clic en el mapa para añadir parada o arrastra pines para mover</span>
        </div>
      )}
    </div>
  );
};
