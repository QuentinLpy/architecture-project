import { Component, OnInit } from '@angular/core';
import { DataFlipApi } from 'src/app/shared/api/data-flip.api';

import { FlipService } from '../../shared/flip/flip.service';

@Component({
  selector: 'app-flip-anim',
  templateUrl: './flip-anim.component.html',
  styleUrls: ['./flip-anim.component.scss']
})
export class FlipAnimComponent implements OnInit {

  constructor(private flipService: FlipService,
              private dataFlipApi: DataFlipApi) {

    this.elements = this.dataFlipApi.getDataFlip();

  }

  elements: any[];
  ngOnInit(): void {
  }

  toggleClassBig(id: number) {

    const duration = 250;
    const cards = Array.from(document.querySelectorAll('.card'));

    this.flipService.read(cards);
    const element = cards.filter(elt => elt.getAttribute('id') === `card-${id}`)[0];
    element.parentElement.classList.toggle('big');
    this.flipService.setDuration(duration);
    this.flipService.play(cards);
  }

  close(id: number) {

    const cards = Array.from(document.querySelectorAll('.card'));
    const duration = 500;

    this.flipService.setDuration(duration);
    this.flipService.read(cards);
    this.flipService.remove(cards.filter(element => element.getAttribute('id') === `card-${id}`)[0]);
    this.flipService.play(cards.filter(element => element.getAttribute('id') !== `card-${id}`));
    window.setTimeout(() => {
      this.elements = this.elements.filter(myobj => myobj.id !== id);
    }, duration);

  }

}
