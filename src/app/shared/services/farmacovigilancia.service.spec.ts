import { TestBed } from '@angular/core/testing';

import { farmacovigilanciaService } from './farmacovigilancia.service';

describe('farmacovigilanciaService', () => {
  let service: farmacovigilanciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(farmacovigilanciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
