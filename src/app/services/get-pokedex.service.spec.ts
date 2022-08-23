import { TestBed } from '@angular/core/testing';

import { GetPokedexService } from './get-pokedex.service';

describe('GetPokedexService', () => {
  let service: GetPokedexService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPokedexService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
