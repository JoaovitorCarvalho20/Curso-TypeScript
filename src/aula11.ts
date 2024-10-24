function logar (user:string,pass:string){ // Funcao sem retorno 
    console.log(`User: ${user}`);
    console.log(`Pass: ${pass}`);
}

logar("joao","123");

console.log("------------");

function soma2 (n1:number,n2:number):number{ // Funcao com retorno
    let resultado : number = n1 + n2;
    return resultado;
 
} 

let resultado:string = soma2(10,20).toString(); // estou convertendo o retorno da função para string
console.log(typeof resultado);  
console.log(resultado); // o resultado sera uma string 

console.log("------------");
let testex : number = 10;

resultado= testex+(20).toString(); // estou convertendo teste para string e somando 20

console.log(typeof resultado);
console.log(resultado); // o resultado sera uma string onde vai conter o valor de testex + 20 ou seja um concatenação de string 10 de number e 20 do valor atribuido a variavel testex
