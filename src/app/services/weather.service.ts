import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  numberOfDays: number = 0
  private weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=40.76&lon=-111.87&units=imperial&appid=c69f52648a4f453aeba842ddca9c38a6'
  // private weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=36&lon=-115&appid=c69f52648a4f453aeba842ddca9c38a6'

  constructor(private http: HttpClient) { }

  getForecast(numberOfDays: number): Observable<any> {
    this.numberOfDays = numberOfDays
    console.log(`From the service ${this.numberOfDays}`);
    
    return this.http.get(this.weatherUrl)
  }
}
