import { TestBed } from '@angular/core/testing';

import { AppDataClientService } from './app-data-client.service';

describe('AppDataClientService', () => {
  let service: AppDataClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppDataClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
