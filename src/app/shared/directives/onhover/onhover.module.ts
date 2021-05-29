import { OnhoverDirective } from './onhover.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [OnhoverDirective],
  imports: [
    CommonModule
  ],
  exports: [OnhoverDirective]
})
export class OnhoverModule { }
