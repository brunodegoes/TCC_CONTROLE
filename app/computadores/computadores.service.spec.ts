import { TestBed, inject } from '@angular/core/testing';

import { ComputadoresService } from './computadores.service';

describe('ComputadoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComputadoresService]
    });
  });

  it('should be created', inject([ComputadoresService], (service: ComputadoresService) => {
    expect(service).toBeTruthy();
  }));
});
