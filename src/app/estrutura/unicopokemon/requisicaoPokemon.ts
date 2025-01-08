export class RequisicaoPokemon {
    public name?: string;
    public types?: Types[];
  }
  
  export class Types {
    public slot?: number;
    public type?: Type;
  }
  
  export class Type {
    public name?: string;
    public url?: string;
  }