import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontFacingNicheChipsComponent } from './front-facing-niche-chips.component';

describe('FrontFacingNicheChipsComponent', () => {
  let component: FrontFacingNicheChipsComponent;
  let fixture: ComponentFixture<FrontFacingNicheChipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontFacingNicheChipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontFacingNicheChipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
