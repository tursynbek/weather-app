import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IWeather } from '../models/IWeather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  url = 'http://api.weatherapi.com/v1/current.json?key=f473dd6a1cab4d35b37114755232706&q=';

  constructor(
    private http: HttpClient,

  ) { }

  getWeatherData(cityName: string) {
    return this.http.get<IWeather>(this.url + cityName);
  }
}
