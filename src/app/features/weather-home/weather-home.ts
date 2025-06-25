import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../../core/services/weather-service';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { IWeatherData } from '../../models/interfaces/iweather-data';
import { Subject, takeUntil } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { WeatherCard } from '../weather-card/weather-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-home',
  imports: [FormsModule, FontAwesomeModule, WeatherCard, CommonModule],
  templateUrl: './weather-home.html',
  standalone: true,
})
export class WeatherHome implements OnInit, OnDestroy {
  constructor(private weatherService: WeatherService) {}

  private readonly destroy$ = new Subject<void>();
  weatherDatas!: IWeatherData;
  errorMessage: string | null = null;
  initialCityName: string = 'Fortaleza'; // Default city to fetch weather data for
  searchIcon = faMagnifyingGlass; // FontAwesome search icon class

  ngOnInit(): void {
    // Optionally, fetch weather data for a default city on init
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void {
    this.weatherService
      .getWeatherDatas(cityName)
      .pipe(
        takeUntil(this.destroy$) // Unsubscribe on destroy
      )
      .subscribe({
        next: (response) => {
          response && (this.weatherDatas = response as IWeatherData);
          console.log('Weather data:', response);
        },
        error: (error) => {
          console.error('Error fetching weather data:', error);
        },
      });
  }

  onSubmit(): void {
    if (this.initialCityName.length) this.getWeatherDatas(this.initialCityName);
    this.initialCityName = ''; // Clear input after submission
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
