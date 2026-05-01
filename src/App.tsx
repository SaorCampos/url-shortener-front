import { CountryRanking } from "./presentation/components/analytics/country-ranking";
import { HourHeatmap } from "./presentation/components/analytics/hour-heatmap";
import { TopUrlsList } from "./presentation/components/top/top-urls-list";
import { TrendingList } from "./presentation/components/trending/trending-list";
import { UrlSearchBar } from "./presentation/components/search/url-search-bar";
import { AnalyticsHeader } from "./presentation/components/common/analytics-header";
import { BarChart3, Globe2, Link2, SearchCode, Zap } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [selectedCode, setSelectedCode] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-brand-primary/20">
      {/* Header Fixo */}
      <header className="sticky top-0 z-50 border-b border-slate-900 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-brand-primary p-1.5 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                <Link2 className="text-slate-950" size={20} strokeWidth={3} />
              </div>
              <span className="text-xl font-black tracking-tight">
                URL<span className="text-brand-primary">SHRT</span>
              </span>
            </div>

            <nav className="hidden md:block">
              <ul className="flex gap-8 text-sm font-bold uppercase tracking-widest text-slate-500">
                <li className="flex items-center gap-2 text-brand-primary cursor-default">
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
      <main className="mx-auto max-w-7xl px-4 py-12">
        {/* Hero Section com Busca */}
        <section className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none">
            Rastreie qualquer <span className="text-brand-primary">Link.</span>
          </h1>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg">
            Insira o código de encurtamento abaixo para acessar estatísticas
            detalhadas de tráfego e geolocalização em tempo real.
          </p>
          <UrlSearchBar onSearch={setSelectedCode} />
        </section>

        {/* Discovery Grid: Trending e Top 10 */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="mb-6">
              <h2 className="text-2xl font-black flex items-center gap-3">
                <Zap
                  className="text-rose-500 animate-pulse"
                  size={24}
                  fill="currentColor"
                />
                TRENDING <span className="text-slate-600 font-light">URLS</span>
              </h2>
            </div>
            <TrendingList
              onSelect={setSelectedCode}
              selectedCode={selectedCode}
            />
          </div>

          <div className="lg:col-span-4">
            <TopUrlsList
              onSelect={setSelectedCode}
              selectedCode={selectedCode}
            />
          </div>
        </div>

        {/* Intelligence Section: Detalhes Reativos */}
        <section className="mt-24 pt-16 border-t border-slate-900">
          {selectedCode ? (
            <div className="animate-in fade-in zoom-in-95 duration-500">
              {/* Componente que unifica Título e Botão de Fechar */}
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
            <div className="group flex flex-col items-center justify-center py-32 rounded-[3rem] border-2 border-dashed border-slate-900 bg-slate-950/20 text-slate-600 transition-all hover:border-slate-800 hover:bg-slate-950/40">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-brand-primary/10 blur-3xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity" />
                <SearchCode
                  size={80}
                  className="relative opacity-20 group-hover:scale-110 group-hover:text-brand-primary group-hover:opacity-60 transition-all duration-500"
                />
              </div>
              <p className="text-xl font-bold text-slate-400">
                Aguardando seleção...
              </p>
              <p className="text-sm opacity-50 mt-1">
                Clique em uma URL das listas acima ou faça uma busca manual.
              </p>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-900 bg-slate-950/50 py-12 text-center">
        <p className="text-sm font-medium text-slate-500 flex items-center justify-center gap-2">
          Made with <span className="text-rose-500 text-lg">♥</span> for Clean
          Code enthusiasts.
        </p>
        <p className="text-[10px] text-slate-700 uppercase tracking-widest mt-2">
          PHP 8.4 • REACT 18 • TAILWIND 3.4
        </p>
      </footer>
    </div>
  );
}
