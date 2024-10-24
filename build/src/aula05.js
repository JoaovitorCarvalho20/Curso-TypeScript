"use strict";
let numeros = [1, 2, 3, 4, 5];
//let numeros2 : Array <number> = [1,2,3,4]; Formas de definir um Array 
//let numeros3:(number|string)[]=["joao",0];
numeros.push(6); // Adiciona um elemento no final do array
numeros.unshift(0); // Adiciona um elemento no inicio do array
numeros.pop(); // Remove o elemento do final do array
numeros.shift(); // Remove o elemento do inicio do array
numeros.forEach(function (elemento) {
    console.log(elemento);
});
let numeros_or = [1, 2, 3, 4, 5];
console.log(numeros_or.find(elemento => elemento > 4)); // Retorna o primeiro elemento que satisfizer a condição
