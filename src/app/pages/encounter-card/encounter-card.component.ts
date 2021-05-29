import { FbBaseService } from './../../services/fb-base.service';
import { Encounter } from './../../shared/models/encounter.model';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EncounterEditComponent } from '../encounter-edit/encounter-edit.component';

@Component({
  selector: 'app-encounter-card',
  templateUrl: './encounter-card.component.html',
  styleUrls: ['./encounter-card.component.scss']
})
export class EncounterCardComponent implements OnInit {
  @Input() encounter?: Encounter;
  idf: string = "";

  constructor(private service: FbBaseService<Encounter>, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteItem(id: string):void {
    this.service.delete('Encounters',id);
  }

  editItem(encounter: Encounter): void {
    const dialogRef = this.dialog.open(EncounterEditComponent, {
      data: encounter
    });
    console.log("BEFORE EDIT----")
    console.log(encounter.firebaseId, encounter.status, encounter.class);
    this.idf = encounter.firebaseId;
    dialogRef.afterClosed().subscribe(async (encounter: Encounter) => {
      if (encounter?.status) {
        console.log(encounter.firebaseId, encounter.status, encounter.class);
        console.log(this.idf);
        console.log("AFTER EDIT----")
        var enc = new Encounter(this.idf, encounter.status, encounter.class);
        this.idf = "";
        await this.service.update('Encounters', enc.firebaseId, enc);
      }
    })
  }

}
