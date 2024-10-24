 class Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
}

 class Moto {
    nome: string;
    ano: number;
    constructor(nome: string, ano: number) {
        this.nome = nome;
        this.ano = ano;
    }
}

const coisas:string[] = ['teste', 'teste2', 'teste3'];

export default Pessoa;
export {  Moto, coisas };