import { BarChart3, X } from "lucide-react";

interface AnalyticsHeaderProps {
  title: string;
  subtitle?: string;
  onClose: () => void;
  icon?: React.ElementType;
}

export function AnalyticsHeader({
  title,
  subtitle = "Monitoramento Ativo",
  onClose,
  icon: Icon = BarChart3,
}: AnalyticsHeaderProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-slate-900 pb-8 animate-in fade-in slide-in-from-top-2 duration-500">
      <div className="flex items-center gap-4">
        <div className="p-4 bg-brand-primary/10 rounded-2xl border border-brand-primary/20 shadow-[0_0_15px_rgba(56,189,248,0.05)]">
          <Icon className="text-brand-primary" size={32} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em]">
              {subtitle}
            </p>
          </div>
          <h2 className="text-4xl font-black tracking-tighter text-white">
            {title}
          </h2>
        </div>
      </div>

      <button
        onClick={onClose}
        className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 hover:shadow-lg transition-all font-bold text-sm group"
      >
        <X
          size={16}
          className="group-hover:rotate-90 transition-transform duration-300"
        />
        FECHAR ANÁLISE
      </button>
    </div>
  );
}
