import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModefierLivraisonComponent } from './modefier-livraison.component';

describe('ModefierLivraisonComponent', () => {
  let component: ModefierLivraisonComponent;
  let fixture: ComponentFixture<ModefierLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModefierLivraisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModefierLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
