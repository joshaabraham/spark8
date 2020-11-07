import { TestBed } from '@angular/core/testing';

import { DataGenericCrudService } from './data-generic-crud.service';

describe('DataGenericCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataGenericCrudService = TestBed.get(DataGenericCrudService);
    expect(service).toBeTruthy();
  });
});
