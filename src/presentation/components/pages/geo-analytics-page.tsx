import { useState } from 'react';
import { useGeoPoints } from '../../hooks/use-analytics';
import { UrlSearchBar } from '../search/url-search-bar';
import { AnalyticsHeader } from '../common/analytics-header'; 
import { GeoHeatmap } from '../analytics/geo-heatmap'; 
import { Globe2, Loader2, MapPinOff } from 'lucide-react';

export function GeoAnalyticsPage() {
  const [selectedCode, setSelectedCode] = useState<string | null>(null);
  const { data: points, isLoading } = useGeoPoints(selectedCode || '');

  return (
    <div className="animate-in fade-in duration-700">
      <header className="mb-12 text-center">
        <div className="inline-flex p-3 bg-brand-primary/10 rounded-2xl mb-4">
          <Globe2 className="text-brand-primary" size={32} />
        </div>
        <h1 className="text-4xl font-black text-white tracking-tighter mb-2">Visualização Geográfica</h1>
        <p className="text-slate-400">Analise a origem global dos seus cliques em tempo real.</p>
      </header>

      <div className="max-w-2xl mx-auto mb-16">
        <UrlSearchBar onSearch={setSelectedCode} />
      </div>

      <section>
        {selectedCode ? (
          <div className="space-y-6">
            <AnalyticsHeader 
              title={`Mapa de Calor: /${selectedCode}`}
              subtitle="Distribuição por Coordenadas"
              icon={Globe2}
              onClose={() => setSelectedCode(null)}
            />

            {isLoading && (
              <div className="h-150 flex flex-col items-center justify-center bg-slate-900/20 rounded-3xl border-2 border-dashed border-slate-800">
                <Loader2 className="animate-spin text-brand-primary mb-4" size={48} />
                <p className="text-slate-500 font-bold">Mapeando coordenadas...</p>
              </div>
            )}

            {!isLoading && points && points.length > 0 && (
              <GeoHeatmap points={points} />
            )}

            {!isLoading && points && points.length === 0 && (
              <div className="h-150 flex flex-col items-center justify-center bg-slate-900/20 rounded-3xl border-2 border-dashed border-slate-800">
                <MapPinOff size={64} className="text-slate-700 mb-4" />
                <p className="text-slate-400 font-bold text-xl">Nenhum dado geográfico</p>
                <p className="text-slate-600">Esta URL ainda não possui registros de localização precisos.</p>
              </div>
            )}
          </div>
        ) : (
          <div className="py-32 flex flex-col items-center justify-center border-2 border-dashed border-slate-900 rounded-[3rem] bg-slate-950/20">
            <Globe2 size={80} className="text-slate-800 mb-6" />
            <p className="text-slate-500 font-medium text-lg text-center max-w-sm">
              Pesquise um código acima para gerar o mapa de distribuição global.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}