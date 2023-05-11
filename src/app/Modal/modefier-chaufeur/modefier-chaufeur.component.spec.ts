import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModefierChaufeurComponent } from './modefier-chaufeur.component';

describe('ModefierChaufeurComponent', () => {
  let component: ModefierChaufeurComponent;
  let fixture: ComponentFixture<ModefierChaufeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModefierChaufeurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModefierChaufeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
