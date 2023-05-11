import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModefierVehiculesComponent } from './modefier-vehicules.component';

describe('ModefierVehiculesComponent', () => {
  let component: ModefierVehiculesComponent;
  let fixture: ComponentFixture<ModefierVehiculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModefierVehiculesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModefierVehiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
