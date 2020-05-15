import { TestBed } from '@angular/core/testing';

import { UserpermissionService } from './userpermission.service';

describe('UserpermissionService', () => {
  let service: UserpermissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserpermissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
