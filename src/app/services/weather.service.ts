import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat=36&lon=-115&units=imperial&appid=c69f52648a4f453aeba842ddca9c38a6'
  // private weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=36&lon=-115&appid=c69f52648a4f453aeba842ddca9c38a6'

  constructor(private http: HttpClient) { }

  getForecast(numberOfDays: number): Observable<any> {
    return this.http.get(this.weatherUrl)
  }
}
