import { TestBed, inject } from '@angular/core/testing';

import { EcranService } from './ecran.service';

describe('EcranService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EcranService]
    });
  });

  it('should be created', inject([EcranService], (service: EcranService) => {
    expect(service).toBeTruthy();
  }));
});
