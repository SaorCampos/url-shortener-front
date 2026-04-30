import { CountryRanking } from "./presentation/components/analytics/country-ranking";
import { HourHeatmap } from "./presentation/components/analytics/hour-heatmap";
import { TopUrlsList } from "./presentation/components/top/top-urls-list";
import { TrendingList } from "./presentation/components/trending/trending-list";
import { BarChart3, Globe2, Link2, Zap } from "lucide-react";
import { useState } from 'react';

export default function App() {
  const [selectedCode, setSelectedCode] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Header Fixo */}
      <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-brand-primary p-1.5">
                <Link2 className="text-slate-950" size={20} strokeWidth={3} />
              </div>
              <span className="text-xl font-black tracking-tight">
                URL<span className="text-brand-primary">SHRT</span>
              </span>
            </div>

            <nav className="hidden md:block">
              <ul className="flex gap-8 text-sm font-medium text-slate-400">
                <li className="flex items-center gap-2 text-brand-primary">
                  <BarChart3 size={16} /> Dashboard
                </li>
                <li className="flex items-center gap-2 hover:text-slate-200 cursor-pointer transition-colors">
                  <Globe2 size={16} /> Geo Analytics
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Seção Superior: Listas */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          
          {/* Coluna 1 & 2: Trending (Mestre) */}
          <div className="lg:col-span-2">
             <div className="mb-6">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                   <Zap className="text-rose-500" size={24} fill="currentColor" /> Trending Now
                </h2>
             </div>
             <TrendingList 
                onSelect={setSelectedCode} 
                selectedCode={selectedCode || undefined} 
             />
          </div>

          {/* Coluna 3: Top 10 */}
          <div className="lg:col-span-1">
             <TopUrlsList 
                onSelect={setSelectedCode} 
                selectedCode={selectedCode || undefined} 
             />
          </div>
        </div>

        {/* Seção Inferior: Detalhes (Reativo) */}
        <section className="mt-16 pt-16 border-t border-slate-900">
          {selectedCode ? (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-black italic">
                  ANALYTICS: <span className="text-brand-primary uppercase">/{selectedCode}</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <HourHeatmap code={selectedCode} />
                <CountryRanking code={selectedCode} />
              </div>
            </>
          ) : (
            <div className="h-64 flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-slate-800 bg-slate-900/10 text-slate-500">
              <Link2 size={48} className="mb-4 opacity-20" />
              <p className="font-medium">Selecione uma URL acima para ver os detalhes em tempo real</p>
            </div>
          )}
        </section>
      </main>

      {/* Footer Simples */}
      <footer className="mt-20 border-t border-slate-900 py-10 text-center">
        <p className="text-sm text-slate-600">
          Built with Clean Architecture, PHP 8.4 and React.
        </p>
      </footer>
    </div>
  );
}
