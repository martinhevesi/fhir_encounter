import { HighlightModule } from './../../shared/directives/highlight/highlight.module';
import { EncounterAddComponent } from './../encounter-add/encounter-add.component';
import { EncounterEditModule } from './../encounter-edit/encounter-edit.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncounterCardComponent } from './encounter-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    EncounterCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    EncounterEditModule,
    HighlightModule
  ],
  exports:[EncounterCardComponent]
})
export class EncounterCardModule { }
