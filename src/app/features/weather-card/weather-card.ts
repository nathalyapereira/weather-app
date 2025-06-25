import { Component, Input } from '@angular/core';
import { IWeatherData } from '../../models/interfaces/iweather-data';
import {
  faDroplet,
  faTemperatureHigh,
  faTemperatureLow,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-card',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './weather-card.html',
  standalone: true,
})
export class WeatherCard {
  @Input() weatherDatasInput!: IWeatherData;

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;
}
