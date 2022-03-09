import { TestBed } from '@angular/core/testing';

import { EditProfStepperService } from './edit-prof-stepper.service';

describe('EditProfStepperService', () => {
  let service: EditProfStepperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditProfStepperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
