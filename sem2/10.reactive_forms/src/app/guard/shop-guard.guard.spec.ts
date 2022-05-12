import { TestBed } from '@angular/core/testing';

import { ShopGuardGuard } from './shop-guard.guard';

describe('ShopGuardGuard', () => {
  let guard: ShopGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ShopGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
