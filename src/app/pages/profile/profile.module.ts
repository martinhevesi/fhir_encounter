import { OnhoverModule } from './../../shared/directives/onhover/onhover.module';
import { MatCardModule } from '@angular/material/card';
import { NavModule } from './../nav/nav.module';
import { ProfileRoutingModule } from './profile-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    NavModule,
    MatCardModule,
    OnhoverModule

  ]
})
export class ProfileModule { }
