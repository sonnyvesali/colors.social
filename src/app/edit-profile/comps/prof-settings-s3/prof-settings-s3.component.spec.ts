import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfSettingsS3Component } from './prof-settings-s3.component';

describe('ProfSettingsS3Component', () => {
  let component: ProfSettingsS3Component;
  let fixture: ComponentFixture<ProfSettingsS3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfSettingsS3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfSettingsS3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
