let avalor : number;
let bvalor : string;
let cvalor : unknown = "teste 123";

avalor = (cvalor as string).length; // type assertion o "as" é usado para especificar o tipo da variável

console.log(avalor);

let dvalor : number;
let evalor : string ="123";
let fvalor : unknown;

dvalor = Number(evalor); // estou convertendo o valor de evalor para number usando o Number 
evalor = String(dvalor); // estou convertendo o valor de dvalor para string usando o String

console.log(typeof dvalor);
console.log(dvalor);

console.log("------------");

console.log(typeof evalor); 
console.log(evalor);

console.log(
    "       ______\n" +
    "      /|_||_\\`.__\n" +
    "     (   _    _ _\\\n" +
    "     =`-(_)--(_)-'\n"
  );
  