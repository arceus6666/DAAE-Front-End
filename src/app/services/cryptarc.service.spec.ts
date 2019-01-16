import { TestBed } from '@angular/core/testing';

import { CryptarcService } from './cryptarc.service';

describe('CryptarcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CryptarcService = TestBed.get(CryptarcService);
    expect(service).toBeTruthy();
  });
});
