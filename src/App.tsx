import { BarChart3, Globe2, Link2 } from "lucide-react";
import { useState } from "react";
import { DashboardPage } from "./presentation/components/pages/dashboard-page";
import { GeoAnalyticsPage } from "./presentation/components/pages/geo-analytics-page";

type View = "dashboard" | "geo";

export default function App() {
  const [currentView, setCurrentView] = useState<View>("dashboard");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-brand-primary/20">
      {/* Header Centralizado */}
      <header className="sticky top-0 z-50 border-b border-slate-900 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setCurrentView("dashboard")}
            >
              <div className="rounded-lg bg-brand-primary p-1.5 shadow-[0_0_15px_rgba(56,189,248,0.3)]">
                <Link2 className="text-slate-950" size={20} strokeWidth={3} />
              </div>
              <span className="text-xl font-black tracking-tight">
                URL<span className="text-brand-primary">SHRT</span>
              </span>
            </div>

            <nav className="sticky top-0 z-999 w-full border-b border-white/5 bg-[#020617]/80 backdrop-blur-md">
              <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-brand-primary/20 rounded-lg">
                    <Link2 className="text-brand-primary" size={20} />
                  </div>
                  <span className="font-black text-xl tracking-tighter text-white">
                    URLSHRT
                  </span>
                </div>

                <div className="flex gap-4 md:gap-8">
                  <button
                    className="text-xs font-bold text-brand-primary tracking-widest flex items-center gap-2"
                    onClick={() => setCurrentView("dashboard")}
                  >
                    <BarChart3 size={14} /> DASHBOARD
                  </button>
                  <button
                    className="text-xs font-bold text-slate-500 hover:text-white transition-colors tracking-widest flex items-center gap-2"
                    onClick={() => setCurrentView("geo")}
                  >
                    <Globe2 size={14} /> GEO ANALYTICS
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-12">
        {currentView === "dashboard" ? <DashboardPage /> : <GeoAnalyticsPage />}
      </main>

      <footer className="border-t border-slate-900 bg-slate-950/50 py-12 text-center mt-auto">
        <p className="text-[10px] text-slate-700 uppercase tracking-widest">
          PHP 8.4 • REACT 18 • CLEAN ARCHITECTURE
        </p>
      </footer>
    </div>
  );
}
