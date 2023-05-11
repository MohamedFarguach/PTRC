import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteLieuxComponent } from './ajoute-lieux.component';

describe('AjouteLieuxComponent', () => {
  let component: AjouteLieuxComponent;
  let fixture: ComponentFixture<AjouteLieuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteLieuxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouteLieuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
