let tupla:[nome:string, sobrenome:string, idade:number] = ['João', 'Silva', 30];

tupla.push('teste', 'teste2', 10);



tupla.forEach(function(elemento){
    console.log(elemento);
})