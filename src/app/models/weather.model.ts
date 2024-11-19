export interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_f: number;
    feelslike_f: number;
    last_updated: string;
    is_day: number;
    condition: {
      text: string;
      icon: string;
    };
    humidity: number;
    wind_mph: number;
    cloud: number;
    percip_in: number;
  };
}
