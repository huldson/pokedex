import { Component } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-exbirpokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl :'./exbirpokmenon.component.html',
  styleUrl :'./exbirpokmenon.component.css'
})
export class ExbirPokemonComponent {
  constructor(http:HttpClient,private router : Router){
    this._http = http;
      }
      public _http ?:HttpClient;
      public listpokmeon ?:PokemonResult[];
obterPokemon(){

let result = this._http?.get<PokemonApiResponse>("https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0").
subscribe((rest)=>this.listpokmeon = rest.results,
(erro)=>console.log("log erro =="+erro) 
)

}
getPokemonId(url: string): string {

  const parts = url.split('/');
  return parts[parts.length - 2]; 
}
detalhes(url?: string){
let id = this.getPokemonId(url!);
console.log("enviado id :"+id)
this.router.navigate(['unicopokemon/',id]) 
}


ngOnInit(){
  this.obterPokemon();
}
}


export class PokemonResult {
 public name?: string;
 public url?: string;
}

export class PokemonApiResponse {
  public count?: number;
 public next?: string | null;
 public previous?: string | null;
 public results?: PokemonResult[];
}