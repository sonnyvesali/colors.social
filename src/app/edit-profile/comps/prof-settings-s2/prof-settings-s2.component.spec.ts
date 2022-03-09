import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfSettingsS2Component } from './prof-settings-s2.component';

describe('ProfSettingsS2Component', () => {
  let component: ProfSettingsS2Component;
  let fixture: ComponentFixture<ProfSettingsS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfSettingsS2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfSettingsS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
