import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserPreferencesComponent } from './edit-user-preferences.component';

describe('EditUserPreferencesComponent', () => {
  let component: EditUserPreferencesComponent;
  let fixture: ComponentFixture<EditUserPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserPreferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
