import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NicheChipsListComponent } from './niche-chips-list.component';

describe('NicheChipsListComponent', () => {
  let component: NicheChipsListComponent;
  let fixture: ComponentFixture<NicheChipsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NicheChipsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NicheChipsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
