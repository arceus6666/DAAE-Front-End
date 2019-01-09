import { TestBed, inject } from '@angular/core/testing';

import { StuffManagerService } from './stuff-manager.service';

describe('StuffManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StuffManagerService]
    });
  });

  it('should be created', inject([StuffManagerService], (service: StuffManagerService) => {
    expect(service).toBeTruthy();
  }));
});
