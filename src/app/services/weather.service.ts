import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';
import { environment } from '../../environments/environment';
import { BaseApiService } from '../services/api.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class WeatherService {
//   private apiKey = '0a6c6b36f4094b77a4730909241211';
//   private baseUrl = 'https://api.weatherapi.com/v1';

//   constructor(private http: HttpClient) {}

//   getWeather(location: string): Observable<WeatherData> {
//     return this.http.get<WeatherData>(
//       `${this.baseUrl}/current.json?key=${this.apiKey}&q=${location}`
//     );
//   }
// }

@Injectable({
  providedIn: 'root'
})
export class WeatherService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http, environment.apis.weatherApi);
  }

  getWeather(location: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      this.buildUrl(location),
      { headers: this.getHeaders() }
    );
  }

  // Add more specific methods for main API
  
}


