import { TestBed } from '@angular/core/testing';

import { AuthloginServiceService } from './authlogin.service.service';

describe('LoginServiceService', () => {
  let service: AuthloginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthloginServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
