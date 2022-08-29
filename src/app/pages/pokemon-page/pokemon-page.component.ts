import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GetPokedexService} from "../../services/get-pokedex.service";
import {PokemonStatus} from "../../models/pokemon-status";
import {tap} from "rxjs";


@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent implements OnInit {

  public pokemon: PokemonStatus = {
    abilities: [],
    base_experience: 0,
    forms: [],
    game_indices: [],
    height: 0,
    held_items: [],
    id: 0,
    is_default: false,
    location_area_encounters: '',
    moves: [],
    name: '',
    order: 0,
    past_types: [],
    species: {},
    sprites: { back_default: '',
      back_female: null,
      back_shiny: '',
      back_shiny_female: null,
      front_default:'',
      front_female:null,
      front_shiny:'',
      front_shiny_female:null,
      other: { dream_world:{front_default:'',front_female:null},
        home:{front_default:'', front_female: '', front_shiny: '', front_shiny_female: ''},
        "official-artwork": {front_default:'string'}},
      versions: {}},

    stats: [],
    types: [{ slot: 0, type:{name: '', url:''} }],
    weight: 0,
  }

  public pokemonSpecie: any = {}

  constructor(
    private activedRoute: ActivatedRoute,
    private getPokemonService: GetPokedexService,
  ) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(
      res => {
        console.log(res)
        this.getPokemonService.getPokemon(res['name']).pipe(
          tap( res => {
            this.pokemon = res
          })
        ).subscribe()
        this.getPokemonService.getPokemonSpecies(res['name']).pipe(
          tap( res => {
            console.log(res)
            this.pokemonSpecie = res
          })
        ).subscribe()
      }
    )

  }

}
