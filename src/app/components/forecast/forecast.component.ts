import { Component, OnInit, Output } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {
  @Output() sendForecast: EventEmitter<any> = new EventEmitter;
  numberOfDays: number = 0

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  submitDays(): void {
    // console.log(this.numberOfDays);
    const forecast = this.weatherService.getForecast(this.numberOfDays);
    
    this.sendForecast.emit(forecast)
  }

}
