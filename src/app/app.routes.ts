import { Routes } from '@angular/router';
import { ExbirPokemonComponent } from './estrutura/exbirpokemon/exbirpokemon.component';
import { UnicopokemonComponent } from './estrutura/unicopokemon/unicopokemon.component';

export const routes: Routes = [

    {path:'pokemons',component:ExbirPokemonComponent },
    {path:'unicopokemon/:id',component:UnicopokemonComponent}

];
