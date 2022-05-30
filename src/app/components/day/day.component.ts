import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  @Input() numberOfDays!: number;
  @Input() fullForecast: any
  
  constructor() { }

  ngOnInit(): void {
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`Hi from day component: ${this.numberOfDays}`);
    console.log(`Hi from day component: ${this.fullForecast}`);
  }

  getForecast() { 
    // console.log(`Hi from day component: ${this.numberOfDays}`);
    // console.log(`Hi from day component: ${this.numberOfDays}`);
    // console.log(`Hi from day component: ${this.forecast}`);
    
    
  }

}

