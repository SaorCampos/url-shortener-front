import { Skeleton } from "../common/skeleton";

export function ChartSkeleton() {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/20 p-6">
      <div className="flex items-center justify-between mb-8">
        <Skeleton className="h-6 w-48" />
        <Skeleton className="h-4 w-24" />
      </div>
      <div className="flex items-end justify-between h-48 gap-2">
        {/* Simula as barras do gráfico */}
        {[60, 40, 90, 70, 50, 80, 40, 100, 60].map((h, i) => (
          <Skeleton 
            key={i} 
            className="w-full" 
            style={{ height: `${h}%` }} 
          />
        ))}
      </div>
    </div>
  );
}