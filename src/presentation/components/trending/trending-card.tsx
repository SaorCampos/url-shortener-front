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
      className={`group relative cursor-pointer overflow-hidden rounded-2xl border-2 p-5 transition-all duration-300 ${
        isSelected
          ? "border-brand-primary bg-brand-primary/5 shadow-[0_0_25px_rgba(56,189,248,0.15)] scale-[1.02]"
          : "border-slate-800 bg-slate-900/40 hover:border-slate-700 hover:bg-slate-900/60"
      }`}
    >
      {/* Badge de Viralização */}
      {url.viral && (
        <div className="absolute -right-8 -top-8 h-16 w-16 bg-rose-500/10 rotate-45 flex items-end justify-center pb-1">
          <Zap
            size={12}
            className="text-rose-500 -rotate-45 mb-1"
            fill="currentColor"
          />
        </div>
      )}

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
              Short Code
            </p>
            <h4
              className={`text-xl font-mono font-bold transition-colors ${isSelected ? "text-brand-primary" : "text-slate-200"}`}
            >
              /{url.code}
            </h4>
          </div>
          <div
            className={`p-3 rounded-xl transition-colors ${isSelected ? "bg-brand-primary text-slate-950" : "bg-slate-800 text-slate-400 group-hover:text-slate-200"}`}
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
              <span className="text-2xl font-black text-white">
                {url.clicks}
              </span>
              <span className="text-xs font-bold text-emerald-500">+100%</span>
            </div>
          </div>

          <div
            className={`flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest transition-opacity ${isSelected ? "opacity-100 text-brand-primary" : "opacity-0 group-hover:opacity-100 text-slate-500"}`}
          >
            <MousePointer2 size={12} />
            Selecionado
          </div>
        </div>
      </div>
    </div>
  );
}
