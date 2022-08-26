import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverDirective } from './directives/hover.directive';

@NgModule({
  declarations: [HoverDirective],
  imports: [CommonModule],
  exports: [HoverDirective],
})
export class UtiltiyModule {}
