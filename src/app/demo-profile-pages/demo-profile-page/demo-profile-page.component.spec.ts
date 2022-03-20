import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoProfilePageComponent } from './demo-profile-page.component';

describe('DemoProfilePageComponent', () => {
  let component: DemoProfilePageComponent;
  let fixture: ComponentFixture<DemoProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoProfilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
