import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GetPokedexService} from "../../services/get-pokedex.service";
import {PokemonStatus} from "../../models/pokemon-status";
import {tap} from "rxjs";
import {PokemonSpecies} from "../../models/pokemon-species";


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
    sprites: {
      back_default: '',
      back_female: null,
      back_shiny: '',
      back_shiny_female: null,
      front_default: '',
      front_female: null,
      front_shiny: '',
      front_shiny_female: null,
      other: {
        dream_world: {front_default: '', front_female: null},
        home: {front_default: '', front_female: '', front_shiny: '', front_shiny_female: ''},
        "official-artwork": {front_default: '""'}
      },
      versions: {}
    },

    stats: [],
    types: [{slot: 0, type: {name: '', url: ''}}],
    weight: 0,
  }

  public pokemonSpecie: PokemonSpecies = {
    "base_happiness": 0,
    "capture_rate": 0,
    "color": {
      "name": "",
      "url": ""
    },
    "egg_groups": [],
    "evolution_chain": {
      "url": ""
    },
    "evolves_from_species": "",
    "flavor_text_entries": [{
      "flavor_text": "",
      "language": {
        "name": "",
        "url": ""
      },
      "version": {
        "name": "",
        "url": ""
      }
    }],


    "form_descriptions": [],
    "forms_switchable": false,
    "gender_rate": 0,
    "genera": [{ "genus": "",
      "language": {
        "name": "",
        "url": ""
      } }],

    "generation": {
      "name": "",
      "url": ""
    },
    "growth_rate": {
      "name": "",
      "url": ""
    },
    "habitat": {
      "name": "",
      "url": ""
    },
    "has_gender_differences": false,
    "hatch_counter": 0,
    "id": 0,
    "is_baby": false,
    "is_legendary": false,
    "is_mythical": false,
    "name": "",
    "names": [{
      "language": {
        "name": "",
        "url": ""
      },
      "name": ""
    }],


    "order": 0,
    "pal_park_encounters": [],
    "pokedex_numbers": [],
    "shape": {
      "name": "",
      "url": ""
    },
  "varieties": []
}

  constructor(
    private activedRoute: ActivatedRoute,
    private getPokemonService: GetPokedexService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(
      res => {
        this.getPokemonService.getPokemon(res['name']).pipe(
          tap(res => {
            this.pokemon = res
          })
        ).subscribe()
        this.getPokemonService.getPokemonSpecies(res['name']).pipe(
          tap(res => {
            switch (res.color.name) {
              case 'pink':
                res.color.name = 'deeppink'
                break
              case 'yellow':
                res.color.name = 'darkgoldenrod'
                break
              case 'white':
                res.color.name = 'grey'
                break
            }
            this.pokemonSpecie = res
          })
        ).subscribe()
      }
    )

  }

  public homePage() {
    this.router.navigateByUrl('')
  }

  public consoleLog() {
    console.log(this.pokemonSpecie)
  }

}
