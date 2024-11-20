import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { SearchBoxComponent } from './app/components/search-box/search-box.component';
import { WeatherDisplayComponent } from './app/components/weather-display/weather-display.component';
import { WeatherService } from './app/services/weather.service';
import { WeatherData } from './app/models/weather.model';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SearchBoxComponent,
    WeatherDisplayComponent,
    MatIconModule,
  ],
  template: `
    <div class="container">
      <h1 class="mainheader">Weather for</h1>
      
      <app-search-box [ngClass]="{'searched': weatherData}" [placeholder]="searchPlaceholder" (searchEvent)="searchWeather($event)"></app-search-box>
      <app-weather-display *ngIf="weatherData" [weather]="weatherData"></app-weather-display>
      
      <p class="error" *ngIf="error">{{ error }}</p>
    </div>
  `,
  styles: [
    `
    .container {
      width: min(80vw, 1440px);
      margin: var(--step-0) auto;
    }
    .mainheader {
      color: var(--color-orange);
      font-weight: 700;
    }
    .error {
      color: red;
      text-align: center;
    }
    .back-button {
      margin-top: var(--size17);
      background: transparent;
      border: var(--size03) solid var(--color-deepblue);
      color: var(--color-deepblue);
      cursor: pointer;
      font-size: var(--size1);
      padding: var(--size06) var(--size1);
      margin-bottom: var(--size1);
      border-radius: var(--size06);
      transition: all 0.3s ease;
    }
    .back-button:hover {
      background-color: var(--color-deepblue);
      color: var(--color-ghostwhite);
    }
  `,
  ],
})
export class App {
  weatherData?: WeatherData;
  error = '';
  searchPlaceholder = 'Zip Code or City';

  constructor(
    private weatherService: WeatherService,
    private location: Location
  ) {
    // Listen for popstate (browser back/forward) events
    window.onpopstate = (event) => {
      if (event.state?.weatherData) {
        // Restore weather data from history state
        this.weatherData = event.state.weatherData;
        this.error = '';
      } else {
        // Clear weather data when navigating back to search
        this.weatherData = undefined;
        this.error = '';
      }
    };
  }

  searchWeather(location: string) {
    this.error = '';
    this.weatherService.getWeather(location).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.searchPlaceholder = this.weatherData.location.name;
        console.log(this.weatherData.location.name);
        // Push a new state to browser history when weather is loaded
        history.pushState({ weatherData: data }, '', `?location=${location}`);
      },
      error: (err) => {
        this.error = 'Failed to fetch weather data. Please try again.';
        console.error('Weather API Error:', err);
      },
    });
  }

  goBack() {
    this.location.back();
  }
}

bootstrapApplication(App, {
  providers: [provideHttpClient(), provideAnimations()],
}).catch((err) => console.error(err));
