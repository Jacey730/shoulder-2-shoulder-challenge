import { TestBed } from '@angular/core/testing';

import { ShareCountryDataService } from './share-country-data.service';

describe('ShareCountryDataService', () => {
  let service: ShareCountryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareCountryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
