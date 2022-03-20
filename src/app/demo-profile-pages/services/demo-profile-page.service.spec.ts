import { TestBed } from '@angular/core/testing';

import { DemoProfilePageService } from './demo-profile-page.service';

describe('DemoProfilePageService', () => {
  let service: DemoProfilePageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoProfilePageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
