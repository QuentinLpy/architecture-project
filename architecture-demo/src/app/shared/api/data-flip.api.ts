import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataFlipApi {

  constructor() { }

  getDataFlip(): any[] {
    return [
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
}
