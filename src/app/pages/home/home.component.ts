import { EncounterAddComponent } from './../encounter-add/encounter-add.component';
import { Encounter } from './../../shared/models/encounter.model';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  list$: Observable<Encounter[]> | null = null;
  errorObject = null;

  constructor(private service: FbBaseService<Encounter>, private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.get();
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("OnChangeHook");
    
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("OnDestroyHook");
    
  }

  get(): void {
    this.errorObject = null;
    this.list$ = this.service.get('Encounters').pipe(
      catchError(err => {
        console.log('Something went wrong...');
        this.errorObject = err;
        return throwError(err);
      })
    );
  }

  addDialog(): void {
    const dialogRef = this.dialog.open(EncounterAddComponent, {});
    dialogRef.afterClosed().subscribe(async (encounter: Encounter) => {
      if (encounter?.status) {
        var enc = new Encounter(encounter.firebaseId, encounter.status, encounter.class);
        console.log(enc);
        await this.service.add('Encounters', enc);
      }
    })
  }

}
