import { CurrentWeather } from './CurrentWeather';
import { ILocation } from './ILocation';

export interface IWeather {
  location: ILocation,
  current: CurrentWeather,
}
