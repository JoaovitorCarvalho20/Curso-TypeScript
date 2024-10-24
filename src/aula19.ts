class Computador2 {
    marca: string ;
    private valor: number ;
    private memoria: number;
    private	 processador: string;


    constructor( marca:string, valor:number, memoria:number, processador:string){
        this.marca = marca;
        this.valor = valor;
        this.memoria = memoria;
        this.processador = processador;
    }
    
escrever():void{
    console.log("------------");
    console.log("Marca: "+this.marca);
    console.log("Valor: "+this.valor);
    console.log("Memoria: "+this.memoria);
    console.log( "Processador: "+this.processador);
    console.log("------------");
}

public valorDoPC (valor : number){
   this.valor = valor + this.valor; 
}
}
let Pc4 = new Computador2("Dell", 1000, 8, "i7");
Pc4.valorDoPC(300);
Pc4.escrever();


