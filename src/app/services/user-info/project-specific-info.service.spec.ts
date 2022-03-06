import { TestBed } from '@angular/core/testing';

import { ProjectSpecificInfoService } from './project-specific-info.service';

describe('ProjectSpecificInfoService', () => {
  let service: ProjectSpecificInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectSpecificInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
