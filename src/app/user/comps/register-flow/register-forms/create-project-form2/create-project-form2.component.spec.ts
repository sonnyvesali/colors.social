import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectForm2Component } from './create-project-form2.component';

describe('CreateProjectForm2Component', () => {
  let component: CreateProjectForm2Component;
  let fixture: ComponentFixture<CreateProjectForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProjectForm2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
