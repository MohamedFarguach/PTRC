import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteChaufeurComponent } from './ajoute-chaufeur.component';

describe('AjouteChaufeurComponent', () => {
  let component: AjouteChaufeurComponent;
  let fixture: ComponentFixture<AjouteChaufeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteChaufeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouteChaufeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
