import { Component, OnInit, Output } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';


@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  @Output() sendForecast: EventEmitter<any> = new EventEmitter;
  @Output() fullForecast: Array<any> = []
  numberOfDays: number = 0
  

  forecast = new Observable 

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  // submitDays(e: any): void {
  submitDays(): void {
    // console.log(this.numberOfDays);
    
    const forecast = {
      temp: '',
      humidity: '',
      wind_speed: '',
    }

    
    // const forecastData = this.weatherService.getForecast(this.numberOfDays)
    // .subscribe((data) => console.log(data));

    /* 
      STILL TRYING TO PASS DATA FROM FORECAST COMPONENT TO DAY COMPONENT
    */

    const forecastData = this.weatherService.getForecast(this.numberOfDays)
    .subscribe((data) => {
      for(let i = 0; i < this.numberOfDays; i++){
        // this.forecast = data.daily[i]
        // console.log(this.forecast);
        this.fullForecast.push(this.forecast = data.daily[i])
      }
      // console.log(this.fullForecast);
      
    });
    
    
    // this.sendForecast.emit(this.weatherService.getForecast(this.numberOfDays))
    this.sendForecast.emit(this.numberOfDays)
  }

}
