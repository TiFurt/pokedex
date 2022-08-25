import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {PokemonPageComponent} from "./pages/pokemon-page/pokemon-page.component";

const routes: Routes = [
  {path:'', component:HomeComponent,pathMatch:'full'},
  {path:'pokemon/:id', component:PokemonPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
