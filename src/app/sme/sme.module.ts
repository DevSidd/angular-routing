import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SmeRoutingModule } from './sme-routing.module';
import { SmePanelComponent } from './components/sme-panel/sme-panel.component';


@NgModule({
  declarations: [
    SmePanelComponent
  ],
  imports: [
    CommonModule,
    SmeRoutingModule
  ]
})
export class SmeModule { }
