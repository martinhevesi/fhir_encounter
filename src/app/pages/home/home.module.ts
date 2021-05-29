import { ContainerModule } from './../../shared/container/container.module';
import { HighlightModule } from './../../shared/directives/highlight/highlight.module';
import { OnhoverModule } from './../../shared/directives/onhover/onhover.module';
import { NavModule } from './../nav/nav.module';
import { EncounterAddModule } from './../encounter-add/encounter-add.module';
import { EncounterCardModule } from './../encounter-card/encounter-card.module';
import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu'



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    EncounterCardModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    EncounterAddModule,
    MatMenuModule,
    NavModule,
    OnhoverModule,
    HighlightModule,
    ContainerModule
  ],
})
export class HomeModule { }
