import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {


  @Input() information: any;

  @Output() close = new EventEmitter<number>();
  @Output() isBig = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }


}
