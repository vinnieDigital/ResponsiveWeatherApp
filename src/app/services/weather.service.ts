import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';
import { environment } from '../../environments/environment';
import { BaseApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService extends BaseApiService {
  constructor(http: HttpClient) {
    super(http, environment.apis.weatherApi);
  }

  getWeather(location: string): Observable<WeatherData> {

    var urlString = '';
    urlString = `/current.json?key=${environment.apis.weatherApi.key}&q=${location}`

    return this.http.get<WeatherData>(
      this.buildUrl(urlString),
      { headers: this.getHeaders() }
    );
  }
}


