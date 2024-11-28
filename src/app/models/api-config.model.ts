export interface ApiConfig {
    key: string;
    baseUrl: string;
}
  
export interface Environment {
  production: boolean;
  apis: {
    imageApi: ApiConfig;
    weatherApi: ApiConfig;
  };
}