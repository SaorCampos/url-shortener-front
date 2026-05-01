import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import type { GeoPoint } from '../../../core/domain/models/geo-point';
import { useEffect } from 'react';

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
        style={{ height: '100%', width: '100%', background: '#020617' }}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        
        {points.map((point, idx) => (
          <CircleMarker
            key={`${point.lat}-${point.lng}-${idx}`}
            center={[point.lat, point.lng]}
            radius={Math.min(point.intensity * 2, 30)} // O raio cresce com a intensidade
            pathOptions={{
              fillColor: '#38bdf8',
              color: '#0ea5e9',
              weight: 1,
              fillOpacity: 0.6,
            }}
          >
            <Popup className="custom-popup">
              <div className="text-slate-900 font-bold p-1">
                Intensidade: {point.intensity} acessos
              </div>
            </Popup>
          </CircleMarker>
        ))}

        <RecenterMap points={points} />
      </MapContainer>
    </div>
  );
}