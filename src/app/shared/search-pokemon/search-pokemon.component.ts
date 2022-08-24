import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GetPokedexService} from "../../services/get-pokedex.service";


@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {

  @Output() public searchEmit: EventEmitter<string> = new EventEmitter();

  constructor(private getPokedexService:GetPokedexService) { }

  ngOnInit(): void {

  }


  searchPokemon(search:string) {
    this.searchEmit.emit(search)
  }

}
