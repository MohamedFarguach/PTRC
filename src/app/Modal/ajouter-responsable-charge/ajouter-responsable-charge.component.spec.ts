import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterResponsableChargeComponent } from './ajouter-responsable-charge.component';

describe('AjouterResponsableChargeComponent', () => {
  let component: AjouterResponsableChargeComponent;
  let fixture: ComponentFixture<AjouterResponsableChargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterResponsableChargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterResponsableChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
