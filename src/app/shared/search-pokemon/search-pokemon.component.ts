import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {

  public inputSearch: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  searchPokemon(event:string) {
    console.log(event)
  }

}
