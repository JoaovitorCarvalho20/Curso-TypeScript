"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coisas = exports.Moto = void 0;
class Pessoa {
    nome;
    idade;
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
class Moto {
    nome;
    ano;
    constructor(nome, ano) {
        this.nome = nome;
        this.ano = ano;
    }
}
exports.Moto = Moto;
const coisas = ['teste', 'teste2', 'teste3'];
exports.coisas = coisas;
exports.default = Pessoa;
