import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetPokedexService {

  public emitEvent = new EventEmitter();

  private pokedex: Object = []

  private pokedexUrl: string = 'https://pokeapi.co/api/v2/'

  private pokemonSpecies: string = 'pokemon?limit=100000&offset=0'

  private allPokemon: string = 'pokemon?limit=100000&offset=0'

  constructor(private http: HttpClient) { }
  public getPokedex(): Observable<{count: number, next:string,previous:string,results:Array<any>}>{
    this.pokedex = this.http.get<{count: number, next:string,previous:string,results:Array<any>}>(`${this.pokedexUrl}${this.pokemonSpecies}`).pipe(
      res => res,
      error => error
    )

    return this.http.get<{count: number, next:string,previous:string,results:Array<any>}>(`${this.pokedexUrl}${this.pokemonSpecies}`).pipe(
      res => res,
      error => error
    )
  }

  public getPokemon(url:string): Observable<object>{
    return this.http.get<object>(url).pipe(
      res => res,
      error => error,
    )
  }
}
