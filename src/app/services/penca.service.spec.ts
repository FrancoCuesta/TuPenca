import { TestBed } from '@angular/core/testing';

import { PencaService } from './penca.service';

describe('PencaService', () => {
  let service: PencaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PencaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
