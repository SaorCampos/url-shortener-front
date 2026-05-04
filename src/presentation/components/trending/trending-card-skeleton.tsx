import { Skeleton } from "../common/skeleton";

export function TrendingCardSkeleton() {
  return (
    <div className="rounded-2xl border-2 border-slate-800 bg-slate-900/40 p-5 space-y-4">
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <Skeleton className="h-3 w-16" /> {/* Label: Short Code */}
          <Skeleton className="h-6 w-24" /> {/* O Código em si */}
        </div>
        <Skeleton className="h-10 w-10 rounded-xl" /> {/* Ícone */}
      </div>
      <div className="space-y-2">
        <Skeleton className="h-3 w-20" /> {/* Label: Engagement */}
        <Skeleton className="h-8 w-12" /> {/* Número de Cliques */}
      </div>
    </div>
  );
}