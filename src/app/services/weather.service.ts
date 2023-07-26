import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private http : HttpClient ) { }


  getWeatherData (cityname : string){
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+ cityname +'&appid=c7c2f48ab2bb5254c9720942328e01c9&units=metric')

  }

}
