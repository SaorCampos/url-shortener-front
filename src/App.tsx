import { BarChart3, Globe2, Link2 } from "lucide-react";
import { useState } from "react";
import { DashboardPage } from "./presentation/components/pages/dashboard-page";
import { GeoAnalyticsPage } from "./presentation/components/pages/geo-analytics-page";

type View = "dashboard" | "geo";

export default function App() {
  const [currentView, setCurrentView] = useState<View>("dashboard");

  // Helper para aplicar classes dinâmicas nos botões
  const getNavClass = (view: View) =>
    `text-xs font-bold tracking-widest flex items-center gap-2 transition-all duration-300 ${
      currentView === view
        ? "text-brand-primary drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]"
        : "text-slate-500 hover:text-slate-200"
    }`;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-brand-primary/20 flex flex-col">
      {/* Header Unificado */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo Único */}
            <div
              className="flex items-center gap-2 cursor-pointer group"
              onClick={() => setCurrentView("dashboard")}
            >
              <div className="rounded-lg bg-brand-primary p-1.5 shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-transform group-hover:scale-110">
                <Link2 className="text-slate-950" size={20} strokeWidth={3} />
              </div>
              <span className="text-xl font-black tracking-tighter">
                URL<span className="text-brand-primary">SHRT</span>
              </span>
            </div>

            {/* Navegação com Lógica Ativa */}
            <nav className="flex gap-4 md:gap-8">
              <button
                className={getNavClass("dashboard")}
                onClick={() => setCurrentView("dashboard")}
              >
                <BarChart3 size={14} /> DASHBOARD
              </button>

              <button
                className={getNavClass("geo")}
                onClick={() => setCurrentView("geo")}
              >
                <Globe2 size={14} /> GEO ANALYTICS
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="grow mx-auto w-full max-w-7xl px-4 py-12">
        {currentView === "dashboard" ? <DashboardPage /> : <GeoAnalyticsPage />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/50 py-8 text-center">
        <p className="text-[10px] text-slate-700 uppercase tracking-[0.3em] font-bold">
          PHP 8.4 • REACT 19 • CLEAN ARCHITECTURE
        </p>
      </footer>
    </div>
  );
}
