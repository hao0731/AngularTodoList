import { TestBed } from '@angular/core/testing';

import { ItemStorageService } from './item-storage.service';

describe('ItemStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemStorageService = TestBed.get(ItemStorageService);
    expect(service).toBeTruthy();
  });
});
