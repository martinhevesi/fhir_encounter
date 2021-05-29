import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncounterAddComponent } from './encounter-add.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    EncounterAddComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  entryComponents:[EncounterAddComponent],
  exports:[EncounterAddComponent],
})
export class EncounterAddModule { }
