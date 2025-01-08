import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './estrutura/cabecalho/cabecalho.component';
import { ExbirPokemonComponent } from './estrutura/exbirpokemon/exbirpokemon.component';
import { UnicopokemonComponent } from './estrutura/unicopokemon/unicopokemon.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CabecalhoComponent,ExbirPokemonComponent,UnicopokemonComponent],
  templateUrl :'./app.Component.html'
})
export class AppComponent {
  title = 'pokedex';
}
