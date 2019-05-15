import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FlipAnimComponent } from './pages/flip-anim/flip-anim.component';

const routes: Routes = [
  { path: '', component: FlipAnimComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class FlipAnimDemoRoutingModule { }
