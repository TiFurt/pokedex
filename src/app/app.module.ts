import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PokemonCardComponent } from './shared/pokemon-card/pokemon-card.component';
import { SearchPokemonComponent } from './shared/search-pokemon/search-pokemon.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { MorePokemonsComponent } from './shared/more-pokemons/more-pokemons.component';
import { PokemonPageComponent } from './pages/pokemon-page/pokemon-page.component';
import { PokedexHeaderComponent } from './shared/pokedex-header/pokedex-header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonCardComponent,
    SearchPokemonComponent,
    MorePokemonsComponent,
    PokemonPageComponent,
    PokedexHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
