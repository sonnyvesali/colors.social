import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionTierComponent } from './option-tier.component';

describe('OptionTierComponent', () => {
  let component: OptionTierComponent;
  let fixture: ComponentFixture<OptionTierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionTierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionTierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
