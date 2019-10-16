import { TestBed } from '@angular/core/testing';

import { AppGridService } from './app-grid.service';

describe('AppGridService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppGridService = TestBed.get(AppGridService);
    expect(service).toBeTruthy();
  });
});
