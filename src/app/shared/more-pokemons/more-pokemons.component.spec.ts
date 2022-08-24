import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorePokemonsComponent } from './more-pokemons.component';

describe('MorePokemonsComponent', () => {
  let component: MorePokemonsComponent;
  let fixture: ComponentFixture<MorePokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorePokemonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorePokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
