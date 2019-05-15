import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { DataFlipApi } from '../shared/api/data-flip.api';
import { CardComponent } from './components/card/card.component';
import { FlipAnimDemoRoutingModule } from './flip-anim-demo-routing.module';
import { FlipAnimComponent } from './pages/flip-anim/flip-anim.component';

@NgModule({
  declarations: [
    FlipAnimComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FlipAnimDemoRoutingModule,
    MatIconModule,
  ],
  providers: [
    DataFlipApi
  ]
})
export class FlipAnimDemoModule { }
