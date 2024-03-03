import { TestBed } from '@angular/core/testing';

import { AngularConceptService } from './angular-concept.service';

describe('AngularConceptService', () => {
  let service: AngularConceptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularConceptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
