import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  public progress: number = 50;

  get getProgress() {
    return `${this.progress}%`
  }

  constructor() { }

  ngOnInit(): void {
  }

  public changeValueProgress( value: number ) {

    if ( this.progress >= 100 && value >= 0 ) {
      return this.progress = 100;
    }

    if ( this.progress <= 0 && value < 0 ) {
      return this.progress = 0;
    }

    return this.progress += value;
  }

}
