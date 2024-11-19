import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherData } from '../../models/weather.model';

@Component({
  selector: 'app-weather-display',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="weather-info" *ngIf="weather">
        <div class="current-wrapper">
          <p class="temp">{{ weather.current.temp_f | number : '1.0-0' }}<sup>°F</sup></p>
          <div class="condition-wrapper">
            <img class="weather-icon" [src]="weather.current.condition.icon" [alt]="weather.current.condition.text">
            <p class="condition">{{ weather.current.condition.text }}</p>
          </div>
        </div>

        <div class="extra-info">
          <p>Humidity: {{ weather.current.humidity }}%</p>
          <p>Wind: {{ weather.current.wind_mph }} m/h</p>
        </div>
    </div>
  `,
  styles: [
    `
    .weather-info sup {
      font-size: 0.382em;
      vertical-align: top;
    }
    .weather-info {
      display: flex;
      align-items: stretch;
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: var(--size46);
    }

    .current-wrapper {
      margin-inline-end: var(--size1);
    }
    .condition-wrapper {
      display: flex;
      align-items:center;
      justify-content: center;
    }
    .extra-info {
    }
    .extra-info p {
      font-size: var(--size2);
    }
    .temp {
      font-size: var(--size6);
      font-weight: 900;
      line-height: 0.8;
      // padding-block: var(--sizeBase);
      // padding-inline-end: var(--size1);
      // margin-inline-end: var(--size1);
      // border-right: var(--size03) dotted var(--color-blue);
      color: var(--color-deepblue);
    }
    .condition {
      font-size: var(--size2);
    }

  `,
  ],
  //   styles: [`
  //     .weather-info {
  //       text-align: center;
  //       padding: 2rem;
  //       background-color: #f8f9fa;
  //       border-radius: 8px;
  //     }
  //     .weather-details {
  //       margin-top: 1rem;
  //     }
  //     .temp {
  //       font-size: 3rem;
  //       margin: 0.5rem 0;
  //     }
  //     .condition {
  //       font-size: 1.2rem;
  //       color: #666;
  //     }
  //     .extra-info {
  //       display: flex;
  //       justify-content: center;
  //       gap: 2rem;
  //       margin-top: 1rem;
  //     }
  //   `]
})
export class WeatherDisplayComponent {
  @Input() weather?: WeatherData;
}
