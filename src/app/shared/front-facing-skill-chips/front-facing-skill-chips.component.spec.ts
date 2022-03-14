import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontFacingSkillChipsComponent } from './front-facing-skill-chips.component';

describe('FrontFacingSkillChipsComponent', () => {
  let component: FrontFacingSkillChipsComponent;
  let fixture: ComponentFixture<FrontFacingSkillChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontFacingSkillChipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontFacingSkillChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
