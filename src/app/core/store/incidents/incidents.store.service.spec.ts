import { TestBed } from '@angular/core/testing';

import { IncidentsStore } from './incidents.store.service';

describe('Incidents.StoreService', () => {
  let service: IncidentsStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncidentsStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
