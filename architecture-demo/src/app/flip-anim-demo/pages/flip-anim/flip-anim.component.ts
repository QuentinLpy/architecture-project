import { Component, OnInit } from '@angular/core';

import { FlipService } from '../../shared/flip/flip.service';

@Component({
  selector: 'app-flip-anim',
  templateUrl: './flip-anim.component.html',
  styleUrls: ['./flip-anim.component.scss']
})
export class FlipAnimComponent implements OnInit {

  constructor(private flipService: FlipService) {

    this.elements = [
      {
        id: 1,
        img: 'assets/images/1.jpg', desc: 'Quare hoc quidem praeceptum, cuiuscumque est, ad tollendam amicitiam valet ' +
          'illud potius praedfgfgcipiendum fuit, ut eam diligentiam adhiberemus in amicitiis comparandis, ut ne quando amare '
      }, {
        id: 2,
        img: 'assets/images/2.jpg', desc: 'Quare hoc quidem praeceptum, cuiuscumque est, ad tollendam amicitiam valet ' +
          'illud potius dgf fuit, ut eam diligentiam adhiberemus in amicitiis comparandis, ut ne quando amare '
      }, {
        id: 3,
        img: 'assets/images/3.jpg', desc: 'Quare hoc quidem praeceptum, cuiuscumque est, ad tollendam amicitiam valet ' +
          'illud potius praedgfcipiendum fuit, ut eam diligentiam adhiberemus in amicitiis comparandis, ut ne quando amare '
      }, {
        id: 4,
        img: 'assets/images/4.jpg', desc: 'Quare hoc quidem praeceptum, cuiuscumque est, ad tollendam amicitiam valet ' +
          'illud potius praecdgfdipiendum fuit, ut eam diligentiam adhiberemus in amicitiis comparandis, ut ne quando amare '
      }, {
        id: 5,
        img: 'assets/images/5.jpg', desc: 'Quare hoc quidem praeceptum, cuiuscumque est, ad tollendam amicitiam valet ' +
          'illud potius praedgfdgcipiendum fuit, ut eam diligentiam adhiberemus in amicitiis comparandis, ut ne quando amare '
      }, {
        id: 6,
        img: 'assets/images/6.jpg', desc: 'Quare hoc quidem praeceptum, cuiuscumque est, ad tollendam amicitiam valet ' +
          'illud potius praedfgdfcipiendum fuit, ut eam diligentiam adhiberemus in amicitiis comparandis, ut ne quando amare '
      }, {
        id: 7,
        img: 'assets/images/7.jpg', desc: 'Quare hoc quidem praeceptum, cuiuscumque est, ad tollendam amicitiam valet ' +
          'illud potius praecidfgdgpiendum fuit, ut eam diligentiam adhiberemus in amicitiis comparandis, ut ne quando amare '
      }, {
        id: 8,
        img: 'assets/images/8.jpg', desc: 'Quare hoc quidem praeceptum, cuiuscumque est, ad tollendam amicitiam valet ' +
          'illud potius praecipienfgdfgdfdum fuit, ut eam diligentiam adhiberemus in amicitiis comparandis, ut ne quando amare '
      }, {
        id: 9,
        img: 'assets/images/9.jpg', desc: 'Quare hoc quidem praeceptum, cuiuscumque est, ad tollendam amicitiam valet ' +
          'illud potius praecipigdfgegdfndum fuit, ut eam diligentiam adhiberemus in amicitiis comparandis, ut ne quando amare '
      }, {
        id: 10,
        img: 'assets/images/10.jpg', desc: 'Quare hoc quidem praeceptum, cuiuscumque est, ad tollendam amicitiam valet ' +
          'illud potius pragdfgdfgecipiendum fuit, ut eam diligentiam adhiberemus in amicitiis comparandis, ut ne quando amare '
      },
    ];

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
