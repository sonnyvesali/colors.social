import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoProjectCardComponent } from './demo-project-card.component';

describe('DemoProjectCardComponent', () => {
  let component: DemoProjectCardComponent;
  let fixture: ComponentFixture<DemoProjectCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoProjectCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoProjectCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
