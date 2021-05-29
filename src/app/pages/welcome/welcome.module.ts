import { OnhoverModule } from './../../shared/directives/onhover/onhover.module';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { NavModule } from './../nav/nav.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';



@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    NavModule,
    MatCardModule,
    MatIconModule,
    WelcomeRoutingModule,
    OnhoverModule
  ]
})
export class WelcomeModule { }
