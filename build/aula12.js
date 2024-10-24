"use strict";
function soma(a = 0, b = 0) {
    return a + b;
}
console.log(soma(10));
function newUser(user, pass, nome) {
    let dados = {
        user,
        pass,
        nome
    };
    console.log(`User: ${user}`);
    console.log(`Pass: ${pass}`);
    console.log(`Nome: ${nome}`);
    console.log("------------");
    console.log(dados);
}
newUser('joao', '123456');
