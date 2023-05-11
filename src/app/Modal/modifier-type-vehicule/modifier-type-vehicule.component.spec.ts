import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTypeVehiculeComponent } from './modifier-type-vehicule.component';

describe('ModifierTypeVehiculeComponent', () => {
  let component: ModifierTypeVehiculeComponent;
  let fixture: ComponentFixture<ModifierTypeVehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierTypeVehiculeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierTypeVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
