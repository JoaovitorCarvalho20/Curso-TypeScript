"use strict";
class Curso {
    canal = '';
    curso = '';
    valor = 0;
    constructor(canal, curso, valor = 0) {
        this.canal = canal;
        this.curso = curso;
        this.valor = valor;
    }
}
let c1 = new Curso('CFB Cursos', 'TypeScript', 1000);
console.log(c1);
