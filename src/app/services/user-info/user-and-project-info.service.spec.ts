import { TestBed } from '@angular/core/testing';

import { UserAndProjectInfoService } from './user-and-project-info.service';

describe('UserAndProjectInfoService', () => {
  let service: UserAndProjectInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAndProjectInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
