import { TestBed } from '@angular/core/testing';

import { WikimediaService } from './wikimedia.service';

describe('WikimediaService', () => {
  let service: WikimediaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WikimediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
