"use strict";
class Computador2 {
    marca;
    valor;
    memoria;
    processador;
    constructor(marca, valor, memoria, processador) {
        this.marca = marca;
        this.valor = valor;
        this.memoria = memoria;
        this.processador = processador;
    }
    escrever() {
        console.log("------------");
        console.log("Marca: " + this.marca);
        console.log("Valor: " + this.valor);
        console.log("Memoria: " + this.memoria);
        console.log("Processador: " + this.processador);
        console.log("------------");
    }
    valorDoPC(valor) {
        this.valor = valor + this.valor;
    }
}
let Pc4 = new Computador2("Dell", 1000, 8, "i7");
Pc4.valorDoPC(300);
Pc4.escrever();
