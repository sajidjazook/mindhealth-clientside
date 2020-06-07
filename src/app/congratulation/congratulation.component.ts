import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-congratulation',
  templateUrl: './congratulation.component.html',
  styleUrls: ['./congratulation.component.css']
})
export class CongratulationComponent implements OnInit {
  public random: number;
  constructor() { }

  ngOnInit() {
    this.random =  Math.floor(Math.random() * 902203435 ) +1;
    console.log(this.random)
  }

}
