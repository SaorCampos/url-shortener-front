import { useTrending } from '../../hooks/use-analytics';
import { TrendingCard } from './trending-card';
import { Loader2 } from 'lucide-react';

export function TrendingList() {
  const { data, isLoading, isError } = useTrending();

  if (isLoading) {
    return (
      <div className="flex h-40 items-center justify-center">
        <Loader2 className="animate-spin text-brand-primary" size={32} />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-lg border border-red-900/50 bg-red-900/10 p-4 text-red-400">
        Erro ao carregar tendências. Verifique se o backend está rodando.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {data?.map((url) => (
        <TrendingCard key={url.code} url={url} />
      ))}
    </div>
  );
}