import { ErrorRoutingModule } from './error-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { NavComponent } from './../nav/nav.component';
import { NavModule } from './../nav/nav.module';
import { ErrorComponent } from './error.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ErrorComponent],
  imports: [
    CommonModule,
    NavModule,
    MatCardModule,
    MatIconModule,
    ErrorRoutingModule
  ],
  exports:[ErrorComponent]
})
export class ErrorModule { }
