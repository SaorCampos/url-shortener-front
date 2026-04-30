import axios from 'axios';
import type { AxiosInstance } from 'axios';
import type { AnalyticsRepository } from '../../core/repositories/analytics-repository';
import type { StatPoint } from '../../core/domain/models/stat-point';
import type { TrendingUrl } from '../../core/domain/models/trending-url';
import type { CountryStats } from '../../core/domain/models/country-stats';
import type { GeoPoint } from '../../core/domain/models/geo-point';
import type { TopUrl } from '../../core/domain/models/top-url';

export class ApiAnalyticsRepository implements AnalyticsRepository {
  private api: AxiosInstance;

  constructor(baseURL: string) {
    this.api = axios.create({ 
        baseURL,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
  }

  async getMinuteStats(code: string, minutes: number): Promise<StatPoint[]> {
    const { data } = await this.api.get<StatPoint[]>(`/analytics/${code}`, {
      params: { minutes }
    });
    return data;
  }

  async getTopUrl(): Promise<TopUrl[]> {
    const { data } = await this.api.get<TopUrl[]>('/analytics-top-day');
    return data;
  }

  async getTrending(): Promise<TrendingUrl[]> {
    const { data } = await this.api.get<TrendingUrl[]>('/analytics-top-hour');
    return data;
  }

  async getHourHeatmap(code: string): Promise<StatPoint[]> {
    const { data } = await this.api.get<StatPoint[]>(`/analytics-heatmap/${code}`);
    return data;
  }

  async getCountryStats(code: string): Promise<CountryStats[]> {
    const { data } = await this.api.get<CountryStats[]>(`/analytics-countries/${code}`);
    return data;
  }

  async getGeoPoints(code: string): Promise<GeoPoint[]> {
    const { data } = await this.api.get<GeoPoint[]>(`/analytics-geo/${code}`);
    return data;
  }
}