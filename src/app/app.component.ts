import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private weatherService : WeatherService){

  }

  weatherData :any;
  temperature : number = 0;
  min_temp :number =0;
  max_temp :number =0;
  humidity :number =0;
  wind :number =0;
  cityname :string ='Tunisia';



  ngOnInit(): void {

    this.getWeatherData(this.cityname);


  }



  onSubmit(){

    this.getWeatherData(this.cityname);
    this.cityname = '';

  }


  private getWeatherData(cityname : string){
    this.weatherService.getWeatherData(this.cityname).subscribe({

      next:(res) => {
        this.weatherData = res;
       console.log(this.weatherData);
       this.cityname = this.weatherData.name;
       this.temperature = this.weatherData.main.temp;
       this.min_temp = this.weatherData.main.temp_min;
       this.max_temp = this.weatherData.main.temp_max;
       this.humidity = this.weatherData.main.humidity;
       this.wind = this.weatherData.wind.speed;


      },

      error: (error) => console.log(error.message),
      complete: ()=> console.log('APIcall completed')


    })
   }
}
