import { Encounter } from './../../shared/models/encounter.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-encounter-edit',
  templateUrl: './encounter-edit.component.html',
  styleUrls: ['./encounter-edit.component.scss']
})
export class EncounterEditComponent implements OnInit {
  form: FormGroup = new FormGroup({
    status: new FormControl(this.data.status, Validators.required),
    class: new FormControl(this.data.class, Validators.required),
  });

  constructor(public dialogRef: MatDialogRef<EncounterEditComponent>, @Inject(MAT_DIALOG_DATA) public data: Encounter) { }

  ngOnInit(): void {
  }

}
