import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './pages/main/main.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';

@NgModule({
  declarations: [MainComponent, TopBarComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
