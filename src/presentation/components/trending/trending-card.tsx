import { Zap, TrendingUp, MousePointer2 } from "lucide-react";

interface TrendingCardProps {
  url: {
    code: string;
    clicks: number;
    viral: boolean;
  };
  onSelect: (code: string) => void;
  isSelected: boolean;
}

export function TrendingCard({ url, onSelect, isSelected }: TrendingCardProps) {
  return (
    <div
      onClick={() => onSelect(url.code)}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl border-2 p-5 transition-all duration-500 ease-out ${
        isSelected
          ? "border-brand-primary bg-slate-900/80 shadow-[0_0_30px_rgba(56,189,248,0.15)] scale-[1.02]"
          : "border-slate-800 bg-slate-950/40 hover:border-slate-700"
      }`}
    >
      {/* 1. Badge de Viralização (Fix: Melhorado para evitar o bug do losango) */}
      {url.viral && (
        <div className="absolute -right-2 -top-2 flex items-center justify-center">
          <div className="absolute h-12 w-12 bg-rose-500/20 blur-xl animate-pulse" />
          <div className="relative bg-slate-950 border border-rose-500/50 p-2 rounded-bl-2xl rounded-tr-xl">
            <Zap size={14} className="text-rose-500" fill="currentColor" />
          </div>
        </div>
      )}

      {/* 2. Glow Interno (Apenas quando selecionado) */}
      {isSelected && (
        <div className="absolute inset-0 bg-linear-to-br from-brand-primary/5 via-transparent to-transparent pointer-events-none" />
      )}

      <div className="relative z-10 flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
              Short Code
            </p>
            <h4
              className={`text-2xl font-mono font-black transition-colors ${
                isSelected ? "text-brand-primary" : "text-slate-200"
              }`}
            >
              /{url.code}
            </h4>
          </div>

          <div
            className={`p-3 rounded-xl transition-all duration-300 ${
              isSelected
                ? "bg-brand-primary text-slate-950 shadow-[0_0_15px_rgba(56,189,248,0.4)]"
                : "bg-slate-800 text-slate-500 group-hover:text-slate-200"
            }`}
          >
            <TrendingUp size={20} />
          </div>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">
              Engajamento
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-white tracking-tighter">
                {url.clicks}
              </span>
              <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                +100%
              </span>
            </div>
          </div>

          <div
            className={`flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-300 ${
              isSelected
                ? "opacity-100 text-brand-primary translate-y-0"
                : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 text-slate-500"
            }`}
          >
            <MousePointer2 size={12} fill="currentColor" />
            Selecionado
          </div>
        </div>
      </div>
    </div>
  );
}
