import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierResponsableChargeComponent } from './modifier-responsable-charge.component';

describe('ModifierResponsableChargeComponent', () => {
  let component: ModifierResponsableChargeComponent;
  let fixture: ComponentFixture<ModifierResponsableChargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierResponsableChargeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierResponsableChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
