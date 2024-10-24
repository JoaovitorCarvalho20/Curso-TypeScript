import { Moto,coisas } from "./classes";
import Pessoa from "./classes";

const p1 = new Pessoa('João', 30);
console.log(p1);

const m1 = new Moto('BMW', 2020);
console.log(m1)



coisas.forEach((elemento) => {
    console.log(elemento);
});


console.log(coisas.fill('teste'));
