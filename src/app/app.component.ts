import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <app-pokedex-header></app-pokedex-header>
    <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pokedex';
}
