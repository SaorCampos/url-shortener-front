import { TrendingList } from './presentation/components/trending/trending-list';
import { BarChart3, Globe2, Link2, Zap } from 'lucide-react';

export default function App() {
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
        <div className="mb-8 flex flex-col gap-2">
          <div className="flex items-center gap-2 text-rose-500">
            <Zap size={20} fill="currentColor" />
            <span className="text-sm font-bold uppercase tracking-widest">Live Now</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Trending <span className="text-slate-500 underline decoration-brand-primary/30">URLs</span>
          </h1>
          <p className="max-w-2xl text-slate-400">
            Monitoramento em tempo real das URLs com maior engajamento e detecção automática de viralização.
          </p>
        </div>

        {/* Nossa Lista de Trending */}
        <section className="mt-12">
          <TrendingList />
        </section>

        {/* Placeholder para os próximos componentes (Gráficos) */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="h-64 rounded-2xl border border-dashed border-slate-800 bg-slate-900/20 flex items-center justify-center">
            <span className="text-slate-600 font-medium">Heatmap Chart (Coming Soon)</span>
          </div>
          <div className="h-64 rounded-2xl border border-dashed border-slate-800 bg-slate-900/20 flex items-center justify-center">
            <span className="text-slate-600 font-medium">Geo Location (Coming Soon)</span>
          </div>
        </div>
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