import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterTypeLieuxComponent } from './ajouter-type-lieux.component';

describe('AjouterTypeLieuxComponent', () => {
  let component: AjouterTypeLieuxComponent;
  let fixture: ComponentFixture<AjouterTypeLieuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterTypeLieuxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterTypeLieuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
