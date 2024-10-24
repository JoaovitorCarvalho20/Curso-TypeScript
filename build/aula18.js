"use strict";
class Computador1 {
    marca;
    valor;
    constructor(marca, valor) {
        this.marca = marca;
        this.valor = valor;
    }
    escrver() {
        console.log(this.marca);
        console.log(this.valor);
    }
}
let Pc3 = new Computador1("Dell", 1000);
Pc3.escrver();
