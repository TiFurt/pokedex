import { Component, OnInit } from '@angular/core';
import {GetPokedexService} from "../../services/get-pokedex.service";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  public pokedex: Array<any> = []

  constructor(private getPokedexService: GetPokedexService) { }

  ngOnInit(): void {
    this.getPokedexService.getPokedex().subscribe(
      res => this.pokedex = res.results,
      error => console.log(error)
    )
  }

}
