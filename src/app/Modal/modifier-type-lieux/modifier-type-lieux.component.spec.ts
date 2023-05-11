import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierTypeLieuxComponent } from './modifier-type-lieux.component';

describe('ModifierTypeLieuxComponent', () => {
  let component: ModifierTypeLieuxComponent;
  let fixture: ComponentFixture<ModifierTypeLieuxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierTypeLieuxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierTypeLieuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
