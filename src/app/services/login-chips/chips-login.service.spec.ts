import { TestBed } from '@angular/core/testing';
import { ChipsLoginService } from './chips-login.service';

describe('NicheRangeService', () => {
  let service: ChipsLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChipsLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
