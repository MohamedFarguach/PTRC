import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTypeVehiculeComponent } from './ajouter-type-vehicule.component';

describe('AjouterTypeVehiculeComponent', () => {
  let component: AjouterTypeVehiculeComponent;
  let fixture: ComponentFixture<AjouterTypeVehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterTypeVehiculeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterTypeVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
