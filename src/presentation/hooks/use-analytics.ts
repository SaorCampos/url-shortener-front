import { useQuery } from '@tanstack/react-query';
import { ApiAnalyticsRepository } from '../../data/repositories/api-analytics-repository';

const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error('VITE_API_URL is not defined in .env file');
}
const analyticsRepo = new ApiAnalyticsRepository(API_URL);


export const useTrending = () => {
  return useQuery({
    queryKey: ['trending'],
    queryFn: () => analyticsRepo.getTrending(),
    refetchInterval: 60000,
  });
};

export const useTopUrls = () => {
  return useQuery({
    queryKey: ['topUrls'],
    queryFn: () => analyticsRepo.getTopUrl(),
    refetchInterval: 60000,
  });
};

export const useUrlHeatmap = (code: string) => {
  return useQuery({
    queryKey: ['heatmap', code],
    queryFn: () => analyticsRepo.getHourHeatmap(code),
    enabled: !!code,
    refetchInterval: 60000,
  });
};

export const useMinuteStats = (code: string, minutes: number) => {
    return useQuery({
      queryKey: ['minuteStats', code, minutes],
      queryFn: () => analyticsRepo.getMinuteStats(code, minutes),
      enabled: !!code,
      refetchInterval: 60000
    });
}

export const useCountryStats = (code:string) => {
    return useQuery({
      queryKey: ['countryStats', code],
      queryFn: () => analyticsRepo.getCountryStats(code),
      enabled: !!code,
      refetchInterval: 60000
    });
}

export const useGeoPoints = (code:string) => {
    return useQuery({
      queryKey: ['geoPoints', code],
      queryFn: () => analyticsRepo.getGeoPoints(code),
      enabled: !!code,
      refetchInterval: 60000
    });
}

