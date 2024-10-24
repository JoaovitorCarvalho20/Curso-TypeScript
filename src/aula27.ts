interface carros{
 acelerar(): void;
 desacelerar(): void;
}

class Carros implements carros{

    private nome: string;
    private cor: string;
    private ano: number;

    constructor( nome: string, cor: string, ano: number){
    this.nome = nome;
    this.cor = cor;
    this.ano = ano;
    }

    get Nome(): string {
        return this.nome;
    }

    get Cor(): string { 
        return this.cor;    
    }   

    get Ano(): number {
        return this.ano;    
    }

    set Ano(ano: number) {  
        this.ano = ano;
    }

    set Nome(nome: string) {
        this.nome = nome;
    }

    set Cor(cor: string) {
        this.cor = cor;
    }

    mostrarDados(): void {
        console.log(`Nome: ${this.nome}`);
        console.log(`Cor: ${this.cor}`);
        console.log(`Ano: ${this.ano}`);
    }

    public acelerar(): void {
        console.log("Acelerando");

    }

    public desacelerar(): void {
        console.log("Desacelerando");

    }
    
}

const carro1 = new Carros( "BMW", "Preto", 2020);
const _carro2 = new Carros( "Cheveter", "Vermelho", 2020);

carro1.mostrarDados();
_carro2.mostrarDados();

carro1.acelerar();
_carro2.acelerar();




