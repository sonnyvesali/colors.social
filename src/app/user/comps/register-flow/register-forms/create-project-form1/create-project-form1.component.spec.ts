import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectForm1Component } from './create-project-form1.component';

describe('CreateProjectForm1Component', () => {
  let component: CreateProjectForm1Component;
  let fixture: ComponentFixture<CreateProjectForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProjectForm1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
