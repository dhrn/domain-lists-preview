import { TestBed } from '@angular/core/testing';

import { DomainService } from './domain.service';

describe('DomainDataService', () => {
  let service: DomainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
