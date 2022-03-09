import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfSettingsS1Component } from './prof-settings-s1.component';

describe('ProfSettingsS1Component', () => {
  let component: ProfSettingsS1Component;
  let fixture: ComponentFixture<ProfSettingsS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfSettingsS1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfSettingsS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
