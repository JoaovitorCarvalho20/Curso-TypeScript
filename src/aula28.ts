
//Gererics 
function testando<t>(v:t):t{
    return v;
}

class testes<t>{ 
valor:t;

constructor(v:t){
    this.valor = v;
}
}

const teste1 = new testes<string>("teste");

console.log(teste1);

console.log(testando(10));
console.log(testando("teste"));
console.log(testando(true));