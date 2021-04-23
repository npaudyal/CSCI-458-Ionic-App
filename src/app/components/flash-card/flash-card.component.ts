import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flash-card',
  templateUrl: './flash-card.component.html',
  styleUrls: ['./flash-card.component.scss'],
})
export class FlashCardComponent implements OnInit {

  flipped:boolean = false;

  constructor() { }

  flip(){
    this.flipped = !this.flipped;
  }
  
  ngOnInit() {}

 
}
