import React, { useMemo } from 'react';
import {
  ArrowLeft,
  Plus,
  Edit3,
  Copy,
  Trash2,
  Eye,
  MapPin,
  Music,
  CheckCircle2,
  Route as RouteIcon,
  Sparkles,
} from 'lucide-react';
import { Tour, UserProfile } from '../types';

interface MyToursViewProps {
  tours: Tour[];
  currentUser: UserProfile | null;
  isOwner: boolean;
  onBack: () => void;
  onCreateNew: () => void;
  onEdit: (tour: Tour) => void;
  onDuplicate: (tour: Tour) => void;
  onDelete: (tourId: string) => void;
  onOpen: (tour: Tour) => void;
}

export const MyToursView: React.FC<MyToursViewProps> = ({
  tours,
  currentUser,
  isOwner,
  onBack,
  onCreateNew,
  onEdit,
  onDuplicate,
  onDelete,
  onOpen,
}) => {
  const email = (currentUser?.email || '').toLowerCase();

  const myTours = useMemo(() => {
    if (isOwner) return tours;
    if (!email) return [];
    return tours.filter((t) => (t.authorEmail || '').toLowerCase() === email);
  }, [tours, email, isOwner]);

  const published = myTours.filter((t) => t.published).length;
  const drafts = myTours.length - published;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      {/* Encabezado */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-[#14281C] text-[#E8A58B]">
            <RouteIcon className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#14281C]">Mis Rutas</h1>
            <p className="text-xs text-slate-600">
              Crea, edita y publica tus audioguías de interpretación del patrimonio.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 border border-slate-200 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Volver al Catálogo
          </button>
          <button
            onClick={onCreateNew}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-[#B04E2A] to-[#D97706] hover:from-[#9A3F1E] hover:to-[#B45309] text-white shadow-md shadow-[#B04E2A]/30 transition-all"
          >
            <Plus className="w-4 h-4" />
            Nueva Ruta
          </button>
        </div>
      </div>

      {/* Métricas */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Total', value: myTours.length, tone: 'text-[#14281C]' },
          { label: 'Publicadas', value: published, tone: 'text-emerald-700' },
          { label: 'Borradores', value: drafts, tone: 'text-amber-600' },
        ].map((m) => (
          <div key={m.label} className="rounded-2xl bg-white border border-[#E4D8BF] px-4 py-3">
            <div className={`text-2xl font-extrabold ${m.tone}`}>{m.value}</div>
            <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">{m.label}</div>
          </div>
        ))}
      </div>

      {/* Listado */}
      {myTours.length === 0 ? (
        <div className="rounded-3xl bg-white border border-dashed border-[#CDBA95] px-6 py-16 text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-[#B04E2A]/10 grid place-items-center">
            <Sparkles className="w-8 h-8 text-[#B04E2A]" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#14281C]">Aún no tienes rutas</h2>
            <p className="text-sm text-slate-600 mt-1">
              Diseña tu primera audioguía con el Studio o genera una con Inteligencia Artificial.
            </p>
          </div>
          <button
            onClick={onCreateNew}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-bold bg-[#B04E2A] hover:bg-[#9A3F1E] text-white shadow-md transition-all"
          >
            <Plus className="w-4 h-4" />
            Crear mi primera ruta
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {myTours.map((tour) => {
            const thumb = tour.coverImage || tour.stops?.[0]?.images?.[0]?.url || '';
            const withAudio = tour.stops?.filter((s) => s.audio).length || 0;
            return (
              <div
                key={tour.id}
                className="group rounded-3xl bg-white border border-[#E4D8BF] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-all"
              >
                <div className="relative h-40 bg-slate-100 overflow-hidden">
                  {thumb ? (
                    <img
                      src={thumb}
                      alt={tour.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="w-full h-full grid place-items-center text-slate-300">
                      <MapPin className="w-10 h-10" />
                    </div>
                  )}
                  <span
                    className={`absolute top-3 left-3 px-2.5 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-wide ${
                      tour.published
                        ? 'bg-emerald-600 text-white'
                        : 'bg-amber-500 text-white'
                    }`}
                  >
                    {tour.published ? 'Publicada' : 'Borrador'}
                  </span>
                </div>

                <div className="p-4 flex-1 flex flex-col gap-3">
                  <div>
                    <h3 className="font-bold text-[#14281C] leading-tight line-clamp-2 font-['Cormorant_Garamond',Georgia,serif]">
                      {tour.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {tour.city}
                      {tour.country ? `, ${tour.country}` : ''}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-[11px] text-slate-600">
                    <span className="flex items-center gap-1 font-semibold">
                      <RouteIcon className="w-3.5 h-3.5 text-[#B04E2A]" />
                      {tour.stops?.length || 0} paradas
                    </span>
                    <span className="flex items-center gap-1">
                      <Music className="w-3.5 h-3.5 text-slate-400" />
                      {withAudio} con audio
                    </span>
                  </div>

                  <div className="mt-auto pt-2 flex flex-wrap items-center gap-1.5">
                    <button
                      onClick={() => onEdit(tour)}
                      className="flex items-center gap-1 px-3 py-2 rounded-xl text-[11px] font-bold bg-[#B04E2A] hover:bg-[#9A3F1E] text-white transition-all"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      Editar
                    </button>
                    <button
                      onClick={() => onOpen(tour)}
                      title="Ver como turista"
                      className="flex items-center gap-1 px-3 py-2 rounded-xl text-[11px] font-bold bg-[#1D3626] hover:bg-[#2E4E37] text-white transition-all"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      Ver
                    </button>
                    <button
                      onClick={() => onDuplicate(tour)}
                      title="Duplicar ruta"
                      className="flex items-center gap-1 px-3 py-2 rounded-xl text-[11px] font-bold bg-white text-slate-700 border border-slate-300 hover:bg-slate-100 transition-all"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      Duplicar
                    </button>
                    <button
                      onClick={() => onDelete(tour.id)}
                      title="Eliminar ruta"
                      className="flex items-center gap-1 px-2.5 py-2 rounded-xl text-[11px] font-bold bg-red-50 text-red-700 border border-red-200 hover:bg-red-100 transition-all ml-auto"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <p className="text-[11px] text-slate-500 flex items-center gap-1.5">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
        Los borradores no se muestran en el catálogo público hasta que los publiques.
      </p>
    </div>
  );
};
