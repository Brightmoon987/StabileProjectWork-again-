import { TestBed } from '@angular/core/testing';

import { ManteService } from './mante.service';

describe('ManteService', () => {
  let service: ManteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
