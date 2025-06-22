import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '719aa73e8e5eb6faf3839a043b640643';

  constructor(private http: HttpClient) {}

  getWeatherDatas(cityName: string): Observable<unknown> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url, {});
  }
}
