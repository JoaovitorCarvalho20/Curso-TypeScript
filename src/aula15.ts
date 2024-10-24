let numero : number[]=[1,2,3,4,5]; 

console.log(...numero); // Spread Operator ele serve para espalhar os itens de um array

let novoNumero : number[] = [6,7,8,9,10];

let juntavetor = [...numero, ...novoNumero];	// junta os dois vetores

console.log(juntavetor);