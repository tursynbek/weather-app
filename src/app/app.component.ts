import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { IWeather } from '../models/IWeather';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weatherApp';
  cityName = '';
  currentWeather: IWeather | undefined;

  constructor(
    private weather: WeatherService,
  ) {
  }

  ngOnInit(): void {
    this.weather.getWeatherData('Shymkent').subscribe((data: IWeather)=> {
      this.currentWeather = data;
    });
  }

  getWeather() {
    this.weather.getWeatherData(this.cityName).subscribe((data) => {
      this.currentWeather = data;
    })
  }
}
