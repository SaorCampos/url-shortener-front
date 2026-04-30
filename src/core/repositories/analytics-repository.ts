import type { StatPoint } from "../domain/models/stat-point";
import type { TrendingUrl } from "../domain/models/trending-url";
import type { CountryStats } from "../domain/models/country-stats";
import type { GeoPoint } from "../domain/models/geo-point";
import type { TopUrl } from "../domain/models/top-url";

export interface AnalyticsRepository {
  getTrending(): Promise<TrendingUrl[]>;
  getTopUrl(): Promise<TopUrl[]>;
  getMinuteStats(code: string, minutes: number): Promise<StatPoint[]>;
  getHourHeatmap(code: string): Promise<StatPoint[]>;
  getCountryStats(code: string): Promise<CountryStats[]>;
  getGeoPoints(code: string): Promise<GeoPoint[]>;
}