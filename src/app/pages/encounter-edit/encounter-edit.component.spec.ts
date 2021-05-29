import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterEditComponent } from './encounter-edit.component';

describe('EncounterEditComponent', () => {
  let component: EncounterEditComponent;
  let fixture: ComponentFixture<EncounterEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncounterEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
