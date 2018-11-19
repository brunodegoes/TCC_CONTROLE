import { TestBed, inject } from '@angular/core/testing';

import { ChavesService } from './chaves.service';

describe('ChavesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChavesService]
    });
  });

  it('should be created', inject([ChavesService], (service: ChavesService) => {
    expect(service).toBeTruthy();
  }));
});
