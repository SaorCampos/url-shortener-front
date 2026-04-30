import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { useUrlHeatmap } from '../../hooks/use-analytics';
import { Loader2 } from 'lucide-react';

interface HourHeatmapProps {
  code: string;
}

export function HourHeatmap({ code }: HourHeatmapProps) {
  const { data, isLoading, isError } = useUrlHeatmap(code);

  if (isLoading) return <div className="flex justify-center p-8"><Loader2 className="animate-spin text-slate-500" /></div>;

  if (isError || !Array.isArray(data)) {
    return (
      <div className="h-50 flex items-center justify-center border border-dashed border-slate-800 rounded-2xl text-slate-500">
        Dados do heatmap indisponíveis
      </div>
    );
  }

  return (
    <div className="h-full w-full p-4 bg-slate-900/50 rounded-2xl border border-slate-800">
      <h3 className="text-sm font-bold text-slate-400 uppercase mb-6 tracking-widest">
        Clicks por Hora (Heatmap)
      </h3>
      <div className="h-50 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
            <XAxis 
              dataKey="label" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748b', fontSize: 12 }}
            />
            <YAxis hide />
            <Tooltip 
              cursor={{ fill: '#334155', opacity: 0.4 }}
              contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
              itemStyle={{ color: '#38bdf8' }}
            />
            <Bar 
              dataKey="value" 
              fill="#38bdf8" 
              radius={[4, 4, 0, 0]} 
              barSize={30}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}