import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculesChaufeurComponent } from './vehicules-chaufeur.component';

describe('VehiculesChaufeurComponent', () => {
  let component: VehiculesChaufeurComponent;
  let fixture: ComponentFixture<VehiculesChaufeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculesChaufeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculesChaufeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
