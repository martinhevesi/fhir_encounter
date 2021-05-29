import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterAddComponent } from './encounter-add.component';

describe('EncounterAddComponent', () => {
  let component: EncounterAddComponent;
  let fixture: ComponentFixture<EncounterAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncounterAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EncounterAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
