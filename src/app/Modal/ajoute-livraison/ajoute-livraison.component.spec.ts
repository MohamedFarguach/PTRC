import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteLivraisonComponent } from './ajoute-livraison.component';

describe('AjouteLivraisonComponent', () => {
  let component: AjouteLivraisonComponent;
  let fixture: ComponentFixture<AjouteLivraisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteLivraisonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouteLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
