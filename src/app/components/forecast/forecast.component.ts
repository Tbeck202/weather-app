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
  numberOfDays: number = 0

  forecast = new Observable 

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  submitDays(e: any): void {
    // console.log(this.numberOfDays);
    const forecastData = this.weatherService.getForecast(this.numberOfDays)
    // .subscribe((data) => console.log(data));
    

    /* I can get data back from the api, but I think i probably need to build a "forecast" interface */
    this.forecast = forecastData
    // console.log(this.forecast);
    // this.forecast.subscribe((data) => console.log(data));
    
    // this.sendForecast.emit(this.weatherService.getForecast(this.numberOfDays))
  }

}
