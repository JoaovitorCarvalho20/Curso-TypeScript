"use strict";
class Carros {
    nome;
    cor;
    ano;
    constructor(nome, cor, ano) {
        this.nome = nome;
        this.cor = cor;
        this.ano = ano;
    }
    get Nome() {
        return this.nome;
    }
    get Cor() {
        return this.cor;
    }
    get Ano() {
        return this.ano;
    }
    set Ano(ano) {
        this.ano = ano;
    }
    set Nome(nome) {
        this.nome = nome;
    }
    set Cor(cor) {
        this.cor = cor;
    }
    mostrarDados() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Cor: ${this.cor}`);
        console.log(`Ano: ${this.ano}`);
    }
    acelerar() {
        console.log("Acelerando");
    }
    desacelerar() {
        console.log("Desacelerando");
    }
}
const carro1 = new Carros("BMW", "Preto", 2020);
const _carro2 = new Carros("Cheveter", "Vermelho", 2020);
carro1.mostrarDados();
_carro2.mostrarDados();
carro1.acelerar();
_carro2.acelerar();
