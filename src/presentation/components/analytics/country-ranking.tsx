import { useCountryStats } from '../../hooks/use-analytics';
import { Globe, Loader2 } from 'lucide-react';

export function CountryRanking({ code }: { code: string }) {
  const { data, isLoading, isError } = useCountryStats(code);

  if (isLoading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin text-slate-500" /></div>;
  
  if (isError || !data || data.length === 0) {
    return <div className="text-slate-500 text-sm p-8 text-center border border-dashed border-slate-800 rounded-2xl">Sem dados geográficos</div>;
  }

  const totalClicksShown = data.reduce((acc, item) => acc + item.clicks, 0);

  return (
    <div className="bg-slate-900/50 rounded-2xl border border-slate-800 p-6 h-full">
      <div className="flex items-center gap-2 mb-6">
        <Globe size={18} className="text-brand-primary" />
        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
          Distribuição por País
        </h3>
      </div>
      
      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.country} className="flex items-center justify-between">
            <span className="font-mono text-slate-200 w-8">{item.country}</span>
            <div className="flex items-center gap-4 flex-1 mx-4">
               <div className="h-1.5 bg-slate-800 rounded-full flex-1 overflow-hidden">
                  <div 
                    className="h-full bg-brand-primary transition-all duration-500" 
                    style={{ width: `${(item.clicks / totalClicksShown) * 100}%` }}
                  />
               </div>
            </div>
            <span className="text-sm font-bold text-slate-400">
                {item.clicks} 
                <span className="ml-2 text-[10px] opacity-50">
                    ({((item.clicks / totalClicksShown) * 100).toFixed(1)}%)
                </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}