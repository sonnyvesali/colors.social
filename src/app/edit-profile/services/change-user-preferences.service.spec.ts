import { TestBed } from '@angular/core/testing';

import { ChangeUserPreferencesService } from './change-user-preferences.service';

describe('ChangeUserPreferencesService', () => {
  let service: ChangeUserPreferencesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeUserPreferencesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
