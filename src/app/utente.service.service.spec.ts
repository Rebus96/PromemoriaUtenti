import { TestBed } from '@angular/core/testing';

import { UtenteServiceService } from './utente.service.service';

describe('UtentiServiceService', () => {
  let service: UtenteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtenteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
