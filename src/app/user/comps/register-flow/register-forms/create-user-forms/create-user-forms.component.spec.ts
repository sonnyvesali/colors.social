import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserFormsComponent } from './create-user-forms.component';

describe('CreateUserFormsComponent', () => {
  let component: CreateUserFormsComponent;
  let fixture: ComponentFixture<CreateUserFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
