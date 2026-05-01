import { Trophy, Loader2, MousePointerClick } from "lucide-react";
import { useTopUrls } from "../../hooks/use-analytics";

interface TopUrlsListProps {
  onSelect: (code: string) => void;
  selectedCode?: string | null;
}

export function TopUrlsList({ onSelect, selectedCode }: TopUrlsListProps) {
  const { data, isLoading } = useTopUrls();

  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-slate-900/20 rounded-2xl border border-slate-800">
        <Loader2 className="animate-spin text-brand-primary mb-2" />
        <span className="text-xs text-slate-500 uppercase font-bold tracking-tighter">
          Carregando Ranking...
        </span>
      </div>
    );

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-amber-500/10 rounded-lg">
          <Trophy size={18} className="text-amber-500" />
        </div>
        <h3 className="text-sm font-black text-slate-200 uppercase tracking-widest">
          Top 10
        </h3>
      </div>

      <div className="space-y-1">
        {data?.slice(0, 10).map((url, index) => (
          <button
            key={url.code}
            onClick={() => onSelect(url.code)}
            className={`group flex w-full items-center justify-between rounded-xl px-4 py-3 transition-all ${
              selectedCode === url.code
                ? "bg-brand-primary/10 border border-brand-primary/40 shadow-[0_0_15px_rgba(56,189,248,0.1)]"
                : "hover:bg-slate-800/40 border border-transparent"
            }`}
          >
            <div className="flex items-center gap-4">
              <span
                className={`text-xs font-black ${index < 3 ? "text-brand-primary" : "text-slate-600"}`}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                /{url.code}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500">
                {url.clicks.toLocaleString()}
              </span>
              <MousePointerClick
                size={12}
                className={`opacity-0 group-hover:opacity-100 transition-opacity ${selectedCode === url.code ? "text-brand-primary opacity-100" : "text-slate-600"}`}
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
