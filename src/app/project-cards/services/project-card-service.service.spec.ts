import { TestBed } from '@angular/core/testing';

import { ProjectCardServiceService } from './project-card-service.service';

describe('ProjectCardServiceService', () => {
  let service: ProjectCardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectCardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
