import { useTopUrls } from '../../hooks/use-analytics';
import { Trophy, Loader2 } from 'lucide-react';

interface TopUrlsListProps {
  onSelect: (code: string) => void;
  selectedCode?: string;
}

export function TopUrlsList({ onSelect, selectedCode }: TopUrlsListProps) {
  const { data, isLoading } = useTopUrls();

  if (isLoading) return <Loader2 className="animate-spin" />;

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/30 p-6">
      <div className="flex items-center gap-2 mb-6">
        <Trophy size={18} className="text-amber-400" />
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Top 10 All-Time</h3>
      </div>
      <div className="space-y-2">
        {data?.slice(0, 10).map((url, index) => (
          <button
            key={url.code}
            onClick={() => onSelect(url.code)}
            className={`flex w-full items-center justify-between rounded-lg px-3 py-2 transition-colors ${
              selectedCode === url.code ? 'bg-brand-primary/20 border border-brand-primary/30' : 'hover:bg-slate-800/50'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-600">#{index + 1}</span>
              <span className="font-mono text-sm text-slate-200">/{url.code}</span>
            </div>
            <span className="text-xs font-black text-slate-400">{url.clicks} clicks</span>
          </button>
        ))}
      </div>
    </div>
  );
}