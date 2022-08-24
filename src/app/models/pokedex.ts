import {PokemonStatus} from "./pokemon-status";

export interface Pokedex {
  count: number,
  next: string,
  previous: string,
  results: Array<{ name: string, url: string, status:PokemonStatus}>,
}

