import { TestBed } from '@angular/core/testing';

import { RegApiService } from './reg-api.service';

describe('RegApiService', () => {
  let service: RegApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
