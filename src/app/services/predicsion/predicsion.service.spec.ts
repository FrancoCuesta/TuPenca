import { TestBed } from '@angular/core/testing';

import { PredicsionService } from './predicsion.service';

describe('PredicsionService', () => {
  let service: PredicsionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PredicsionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
