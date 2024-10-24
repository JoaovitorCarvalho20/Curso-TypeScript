"use strict";
let dados = {
    nome: 'João',
    idade: 30,
    status: true,
    ola: () => { console.log('ola'); }
};
function mostrarDados(dados) {
    console.log(dados);
}
mostrarDados(dados);
dados.ola();
let pessoa = { nome: 'João', idade: 30 }; // segunda forma de declarar um objeto com propriedades opcionais e eu ja posso definir os tipos das propriedades
let joao = pessoa.nome;
console.log(joao);
let carro = { nome: 'BMW', ano: 2020 };
let carro2 = { nome: 'Cheveter', ano: 2020, };
console.log(carro, carro2);
