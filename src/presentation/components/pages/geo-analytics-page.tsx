import { Globe2 } from "lucide-react";

export function GeoAnalyticsPage() {
  return (
    <div className="flex flex-col items-center justify-center py-20 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="p-6 bg-brand-primary/10 rounded-full mb-8">
        <Globe2 size={64} className="text-brand-primary animate-spin-slow" />
      </div>
      <h2 className="text-4xl font-black mb-4">Geo Analytics</h2>
      <p className="text-slate-400 text-lg text-center max-w-md">
        Estamos preparando a visualização de mapas e pontos de calor geográficos.
      </p>
      {/* Aqui entrará o componente do Leaflet ou Google Maps futuramente */}
    </div>
  );
}