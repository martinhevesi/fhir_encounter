import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-encounter-add',
  templateUrl: './encounter-add.component.html',
  styleUrls: ['./encounter-add.component.scss']
})
export class EncounterAddComponent implements OnInit {
  form: FormGroup = new FormGroup({
    status: new FormControl('',Validators.required),
    class: new FormControl('',Validators.required),
  });

  constructor(public dialogRef: MatDialogRef<EncounterAddComponent>) { }

  ngOnInit(): void {
  }

}
