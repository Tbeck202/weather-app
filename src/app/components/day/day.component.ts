import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  @Input() numberOfDays!: number;
  @Input() forecast: any

  constructor() { }

  ngOnInit(): void {
  }

  getForecast(e: any) { console.log(e);
    
  }

}
