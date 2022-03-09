import { TestBed } from '@angular/core/testing';

import { EditNameAndEmailService } from './edit-name-and-email.service';

describe('EditNameAndEmailService', () => {
  let service: EditNameAndEmailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditNameAndEmailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
