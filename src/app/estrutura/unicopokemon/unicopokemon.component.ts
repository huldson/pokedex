import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { error } from 'console';
import { CommonModule } from '@angular/common';
import { RequisicaoPokemon } from './requisicaoPokemon';
@Component({
  selector: 'app-unicopokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl :'./unicopokemon.component.html',
  styleUrl:'./unicopokemonComponent.css'
})
export class UnicopokemonComponent {

  public nome? :string;
  public informacao! :RequisicaoPokemon;
  public id ?: string;
  
  
  constructor(private activaroute:ActivatedRoute,private http:HttpClient){
  
    this.activaroute.params.subscribe(params=>{
   
     this.id = params["id"];

  let resposta =  http.get<RequisicaoPokemon>("https://pokeapi.co/api/v2/pokemon/"+this.id).subscribe(
      
      (Resp)=>{
       this.informacao =Resp
        this.nome= Resp.name;
       
      },

      (error)=>console.log("erro"+error)
    
    )

  })

  } 
 
}
