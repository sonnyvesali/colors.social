import { TestBed } from '@angular/core/testing';

import { UserSpecificInfoService } from './user-specific-info.service';

describe('UserSpecificInfoService', () => {
  let service: UserSpecificInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSpecificInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
