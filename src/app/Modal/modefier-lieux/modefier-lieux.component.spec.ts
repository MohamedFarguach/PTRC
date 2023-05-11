import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModefierLieuxComponent } from './modefier-lieux.component';

describe('ModefierLieuxComponent', () => {
  let component: ModefierLieuxComponent;
  let fixture: ComponentFixture<ModefierLieuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModefierLieuxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModefierLieuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
