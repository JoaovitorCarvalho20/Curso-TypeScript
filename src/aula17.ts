class Computador {
    marca: string ;
    valor: number ;

    constructor( marca:string, valor:number ){
        this.marca = marca;
        this.valor = valor;
    } 
      
}

let Pc1 = new Computador("Dell", 1000);
console.log(Pc1);

let Pc2 = new Computador("Samsung", 2000);
console.log(Pc2);

