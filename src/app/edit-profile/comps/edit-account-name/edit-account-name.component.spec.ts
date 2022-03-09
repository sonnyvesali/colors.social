import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccountNameComponent } from './edit-account-name.component';

describe('EditAccountNameComponent', () => {
  let component: EditAccountNameComponent;
  let fixture: ComponentFixture<EditAccountNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAccountNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAccountNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
