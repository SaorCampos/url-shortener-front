import { useState } from 'react';
import { Zap, SearchCode } from "lucide-react";
import { TrendingList } from '../trending/trending-list';
import { TopUrlsList } from '../top/top-urls-list';
import { UrlSearchBar } from '../search/url-search-bar';
import { AnalyticsHeader } from '../common/analytics-header'; 
import { HourHeatmap } from '../analytics/hour-heatmap'; 
import { CountryRanking } from '../analytics/country-ranking';

export function DashboardPage() {
  const [selectedCode, setSelectedCode] = useState<string | null>(null);

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section com Busca */}
      <section className="mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none text-white">
          Rastreie qualquer <span className="text-brand-primary">Link.</span>
        </h1>
        <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg">
          Insira o código de encurtamento abaixo para acessar estatísticas detalhadas.
        </p>
        <UrlSearchBar onSearch={setSelectedCode} />
      </section>

      {/* Discovery Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <h2 className="text-2xl font-black flex items-center gap-3 mb-6">
            <Zap className="text-rose-500 animate-pulse" size={24} fill="currentColor" />
            TRENDING <span className="text-slate-600 font-light">URLS</span>
          </h2>
          <TrendingList onSelect={setSelectedCode} selectedCode={selectedCode} />
        </div>
        <div className="lg:col-span-4">
          <TopUrlsList onSelect={setSelectedCode} selectedCode={selectedCode} />
        </div>
      </div>

      {/* Intelligence Section */}
      <section className="mt-24 pt-16 border-t border-slate-900">
        {selectedCode ? (
          <div className="animate-in fade-in zoom-in-95 duration-500">
            <AnalyticsHeader 
              title={`Analytics: /${selectedCode}`}
              onClose={() => setSelectedCode(null)}
            />
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <HourHeatmap code={selectedCode} />
              <CountryRanking code={selectedCode} />
            </div>
          </div>
        ) : (
          <div className="group flex flex-col items-center justify-center py-32 rounded-[3rem] border-2 border-dashed border-slate-900 bg-slate-950/20 text-slate-600 transition-all hover:border-slate-800">
             <SearchCode size={80} className="opacity-20 group-hover:text-brand-primary transition-all" />
             <p className="text-xl font-bold text-slate-400 mt-4">Aguardando seleção...</p>
          </div>
        )}
      </section>
    </div>
  );
}