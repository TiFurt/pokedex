import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {Pokedex} from "../models/pokedex";
import {PokemonStatus} from "../models/pokemon-status";

@Injectable({
  providedIn: 'root'
})
export class GetPokedexService {

  public emitEvent = new EventEmitter();

  private pokedex: any = {}

  private pokedexUrl: string = 'https://pokeapi.co/api/v2/'

  private pokemonSpecies: string = 'pokemon?offset=0&limit=100'

  private allPokemon: string = 'pokemon?limit=100000&offset=0'

  private pokemonUrl: string = 'https://pokeapi.co/api/v2/pokemon/'

  private pokemonSpeciesUrl: string = 'https://pokeapi.co/api/v2/pokemon-species/'

  constructor(private http: HttpClient) {
  }

  public getPokedex(): Observable<Pokedex> {
    return this.pokedex = this.http.get<Pokedex>(`${this.pokedexUrl}${this.pokemonSpecies}`).pipe(
      tap(res => {
        res.results.map((resPokemons: any) => {

          this.apiGetPokemon(resPokemons.url).subscribe(
            res => resPokemons.status = res
          );

        })
      })
    )
  }

  public apiGetPokemon(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(
      map(
        res => res
      )

    )
  }

  public getNextPage(url: string): Observable<any>{
    return this.http.get<any>(url).pipe(
      tap(res =>{
        res.results.map((resPokemon:any)=>{
          this.apiGetPokemon(resPokemon.url).subscribe(
            res => resPokemon.status = res
          )
        })
      })
    )
  }

  public getAllPokemons(): Observable<Pokedex>{
    return this.http.get<Pokedex>(`${this.pokedexUrl}${this.allPokemon}`).pipe(
      res => res,
      error => error,
    )
  }

  public getSearchedPokemon(url: string): Observable<PokemonStatus> {
    return this.http.get<PokemonStatus>(url).pipe(
      res => res,
      error => error,
    )
  }


  public getPokemon(name: string): Observable<PokemonStatus> {
    return this.http.get<PokemonStatus>(`${this.pokemonUrl}${name}`).pipe(
      res => res,
      error => error,
    )
  }

  public getPokemonSpecies(name: string): Observable<any> {
    return this.http.get<any>(`${this.pokemonSpeciesUrl}${name}`).pipe(
      res => res,
      error => error
    )
  }
}
