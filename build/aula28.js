"use strict";
//Gererics 
function testando(v) {
    return v;
}
class testes {
    valor;
    constructor(v) {
        this.valor = v;
    }
}
const teste1 = new testes("teste");
console.log(teste1);
console.log(testando(10));
console.log(testando("teste"));
console.log(testando(true));
