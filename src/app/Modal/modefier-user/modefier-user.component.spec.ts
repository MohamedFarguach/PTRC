import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModefierUserComponent } from './modefier-user.component';

describe('ModefierUserComponent', () => {
  let component: ModefierUserComponent;
  let fixture: ComponentFixture<ModefierUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModefierUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModefierUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
