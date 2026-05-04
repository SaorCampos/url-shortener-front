import { useTrending } from '../../hooks/use-analytics';
import { TrendingCard } from './trending-card';
import { TrendingCardSkeleton } from './trending-card-skeleton';

interface TrendingListProps {
  onSelect: (code: string) => void;
  selectedCode?: string | null;
}

export function TrendingList({ onSelect, selectedCode }: TrendingListProps) {
  const { data: trending, isLoading } = useTrending();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map(i => <TrendingCardSkeleton key={i} />)}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {trending?.map(url => (
        <TrendingCard 
          key={url.code} 
          url={url} 
          onSelect={onSelect} 
          isSelected={selectedCode === url.code} 
        />
      ))}
    </div>
  );
}