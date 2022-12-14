import {Component, OnInit} from '@angular/core';
import {GetPokedexService} from "../../services/get-pokedex.service";
import {Pokedex} from "../../models/pokedex";
import {debounceTime, tap} from "rxjs";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  public pokedex: Pokedex = {
    count: 0,
    next: '',
    previous: '',
    results: [],
  }
  public pokedexReset: Pokedex = {
    count: 0,
    next: '',
    previous: '',
    results: [],
  }

  public error: boolean = false

  public search: string = ''


  constructor(private getPokedexService: GetPokedexService) {
  }

  ngOnInit(): void {
    this.getPokedexService.getPokedex().pipe(
      tap(res => {
        this.pokedex = res;
        this.pokedexReset = {...this.pokedex};
      })
    ).subscribe()
  }

  public getNextPage(url: string) {
    this.getPokedexService.getNextPage(url).subscribe(
      res => {
        this.pokedex.results = [...this.pokedex.results, ...res.results];
        this.pokedex.next = res.next;
        this.pokedex.previous = res.previous;
      },
      error => {
        this.error = true
      })
  }


  public searchPokemon(event: string) {
    if (event.trim().length) {
      this.getPokedexService.getAllPokemons().pipe(
        tap(res => {
          this.pokedex.results = res.results.filter(pokemon => pokemon.name.includes(event.trim().toLowerCase()))
          this.pokedex.results.map((pokemon) => {
            this.getPokedexService.getSearchedPokemon(pokemon.url).pipe(
              tap(res => {
                pokemon.status = res
              })
            ).subscribe()
          })
        }),
      ).subscribe()
    } else {
      this.pokedex = {...this.pokedexReset}
    }
    this.search = event
  }


}
