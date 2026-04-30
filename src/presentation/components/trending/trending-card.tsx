import { TrendingUp, Zap, MousePointer2 } from 'lucide-react';
import type { TrendingUrl } from '../../../core/domain/models/trending-url';

interface TrendingCardProps {
  url: TrendingUrl;
}

export function TrendingCard({ url }: TrendingCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-xl border p-5 transition-all hover:scale-[1.02] ${
      url.viral 
        ? 'border-rose-500/50 bg-rose-500/5' 
        : 'border-slate-800 bg-slate-900/50'
    }`}>
      {/* Badge de Viral */}
      {url.viral && (
        <div className="absolute right-0 top-0 flex items-center gap-1 rounded-bl-lg bg-rose-500 px-2 py-1 text-[10px] font-bold uppercase text-white">
          <Zap size={12} fill="white" />
          Viral
        </div>
      )}

      <div className="flex flex-col gap-4">
        <div>
          <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Short Code</span>
          <h3 className="text-xl font-bold text-slate-100 font-mono tracking-tight">
            /{url.code}
          </h3>
        </div>

        <div className="flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-slate-500 uppercase">Clicks</span>
            <div className="flex items-center gap-2">
              <MousePointer2 size={16} className="text-brand-primary" />
              <span className="text-2xl font-black text-slate-50">{url.clicks}</span>
            </div>
          </div>

          <div className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-bold ${
            url.trend.startsWith('+') ? 'text-emerald-400 bg-emerald-400/10' : 'text-slate-400 bg-slate-400/10'
          }`}>
            <TrendingUp size={14} />
            {url.trend}
          </div>
        </div>
      </div>
    </div>
  );
}