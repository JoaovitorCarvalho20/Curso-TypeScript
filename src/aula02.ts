class Curso{
    canal: string = '';
    curso: string = '';
    valor: number = 0;

    constructor(canal: string, curso: string, valor: number = 0){
        this.canal = canal;
        this.curso = curso;
        this.valor = valor;
    }

}

let c1 = new Curso('CFB Cursos', 'TypeScript', 1000);
console.log(c1);