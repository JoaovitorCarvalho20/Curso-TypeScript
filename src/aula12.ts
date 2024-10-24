function soma (a: number=0, b: number=0): number {// Definindo valores padrao para os argumentos
    return a + b;
}

console.log(soma(10));


function newUser (user:string,pass:string, nome?:string){ // Definindo argumentos opcionais
let dados = {
    user,
    pass,   
    nome
}
    console.log(`User: ${user}`);
    console.log(`Pass: ${pass}`);
    console.log(`Nome: ${nome}`);
    console.log("------------");

    console.log(dados);

}

newUser('joao','123456');