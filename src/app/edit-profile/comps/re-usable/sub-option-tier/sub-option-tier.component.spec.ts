import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubOptionTierComponent } from './sub-option-tier.component';

describe('SubOptionTierComponent', () => {
  let component: SubOptionTierComponent;
  let fixture: ComponentFixture<SubOptionTierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubOptionTierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubOptionTierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
