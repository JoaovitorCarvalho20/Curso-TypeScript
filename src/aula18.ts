class Computador1 {
    marca: string ;
    valor: number ;

    constructor( marca:string, valor:number ){
        this.marca = marca;
        this.valor = valor;
    }
    
escrver():void{
    console.log(this.marca);
    console.log(this.valor);
}
      
}

let Pc3 = new Computador1("Dell", 1000);
Pc3.escrver();

