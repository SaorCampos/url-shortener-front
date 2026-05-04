import {
  MapContainer,
  TileLayer,
  CircleMarker,
  useMap,
  Tooltip,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { GeoPoint } from "../../../core/domain/models/geo-point";
import { useEffect } from "react";

interface GeoHeatmapProps {
  points: GeoPoint[];
}

// Sub-componente para ajustar o zoom automaticamente quando os pontos mudarem
function RecenterMap({ points }: { points: GeoPoint[] }) {
  const map = useMap();
  useEffect(() => {
    if (points.length > 0) {
      const firstPoint = points[0];
      map.setView([firstPoint.lat, firstPoint.lng], 4);
    }
  }, [points, map]);
  return null;
}

export function GeoHeatmap({ points }: GeoHeatmapProps) {
  const center: [number, number] = [0, 0]; // Centro padrão (Equador)

  return (
    <div className="h-150 w-full rounded-3xl overflow-hidden border-4 border-slate-900 shadow-2xl relative z-0">
      <MapContainer
        center={center}
        zoom={2}
        style={{ height: "100%", width: "100%", background: "#020617" }}
        attributionControl={false}
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />

        {points.map((point, idx) => (
          <CircleMarker
            key={`${point.lat}-${point.lng}-${idx}`}
            center={[point.lat, point.lng]}
            radius={Math.min(point.intensity * 2, 30)}
            pathOptions={{
              fillColor: "#38bdf8",
              color: "#0ea5e9",
              weight: 1,
              fillOpacity: 0.6,
            }}
          >
            <Tooltip
              sticky
              direction="top"
              offset={[0, -10]} // Levanta um pouco o tooltip do círculo
              opacity={1}
              className="custom-tooltip"
            >
              {/* Container do Tooltip com estilo que sobrepõe o padrão do Leaflet */}
              <div className="bg-slate-950/90 backdrop-blur-sm text-white border border-slate-800 rounded-xl p-3 shadow-2xl min-w-30">
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">
                  Engajamento
                </p>
                <div className="flex items-end gap-2">
                  <span className="text-xl font-black text-brand-primary leading-none">
                    {point.intensity}
                  </span>
                  <span className="text-[10px] text-slate-400 mb-0.5">
                    cliques
                  </span>
                </div>
              </div>
            </Tooltip>
            {/* REMOVA O <Popup> DAQUI TOTALMENTE */}
          </CircleMarker>
        ))}

        <RecenterMap points={points} />
      </MapContainer>
    </div>
  );
}
