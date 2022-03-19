import { TestBed } from '@angular/core/testing';

import { FrontChipsService } from './front-chips.service';

describe('FrontChipsService', () => {
  let service: FrontChipsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrontChipsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get selected roles', () => {});
});
