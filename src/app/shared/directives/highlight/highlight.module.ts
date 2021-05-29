import { HighlightDirective } from './highlight.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [HighlightDirective],
  imports: [
    CommonModule
  ],
  exports:[HighlightDirective]
})
export class HighlightModule { }
