import { TestBed } from '@angular/core/testing';

import { FetchinfoService } from './fetchinfo.service';

describe('FetchinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchinfoService = TestBed.get(FetchinfoService);
    expect(service).toBeTruthy();
  });
});
