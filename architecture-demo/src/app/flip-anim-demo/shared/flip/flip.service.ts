import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlipService {

  duration = 500;
  positions = {};

  constructor() {

  }

  public setDuration(duration: number) {
    this.duration = duration;
  }

  /**
   * Mémorise les positions de nos elements
   * @param elements: any
   */
  public read(elements) {
    elements.forEach(element => {
      const id = element.getAttribute('id');
      this.positions[id] = element.getBoundingClientRect();
    });
  }


  /**
   * Anime les elements vers leur nouvelle position
   * @param elements: any
   */
  play(elements) {
    elements.forEach(element => {
      const id = element.getAttribute('id');
      const newPosition = element.getBoundingClientRect();
      const oldPosition = this.positions[id];
      const deltaX = oldPosition.x - newPosition.x;
      const deltaY = oldPosition.y - newPosition.y;
      const deltaW = oldPosition.width / newPosition.width;
      const deltaH = oldPosition.height / newPosition.height;
      element.animate([{
        transform: `translate(${deltaX}px, ${deltaY}px) scale(${deltaW}, ${deltaH})`,
      },
      {
        transform: `none`,
      }], {
          duration: this.duration,
          easing: 'cubic-bezier(0.42, 0, 0.58, 1)',
          fill: 'both',
        });
      element.style.transform = `translate(${deltaX}px, ${deltaY}px)  scale(${deltaW}, ${deltaH}`;
    });
  }

  remove(element) {
    element.parentNode.parentNode.appendChild(element.parentNode);
    const id = element.getAttribute('id');
    const newPosition = element.getBoundingClientRect();
    const oldPosition = this.positions[id];
    const deltaX = oldPosition.x - newPosition.x;
    const deltaY = oldPosition.y - newPosition.y;
    element.animate([{
      transform: `translate(${deltaX}px, ${deltaY}px)`,
      opacity: 1
    },
    {
      transform: `translate(${deltaX}px, ${deltaY - 30}px)`,
      opacity: 0
    }],
      {
        duration: this.duration,
        easing: 'cubic-bezier(0.42, 0, 0.58, 1)',
        fill: 'both',
      });
  }
}
