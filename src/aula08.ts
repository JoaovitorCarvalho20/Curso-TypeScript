enum dias { // enum é um objeto que representa um conjunto de constantes. Esse é do tipo numerico
    DOMINGO = 0,
    SEGUNDA = 1,
    TERCA = 2,
    QUARTA = 3,
    QUINTA = 4,
    SEXTA = 5,
    SABADO = 6
}

const d = new Date();

console.log(dias[d.getDay()]); // Isso funciona da seguinte forma dias tem definido as constantes do enum, eu passo a chave do enum e entao d.getDay() e o valor do dia da semana retorna o dia da semana que eu estou passando


enum cores { // enum é um objeto que representa um conjunto de constantes. Esse é do tipo string
    branco  = '#fff',
    azul    = '#00f',
    vermelho = '#f00',
    verde = '#0f0',
    preto = '#000'
}

console.log (cores.preto); //  vai me retornar o exadecimal de #000 que é a chave do enum preto


enum tipoUser{ // enum é um objeto que representa um conjunto de constantes. Esse é do tipo numerico
    ADMIN,
    NORMAL,
    SUPERADMIN
}

console.log(tipoUser.SUPERADMIN);

const user:tipoUser = tipoUser.SUPERADMIN; // Eu posso atribuir o enum a uma variavel
console.log(user);


enum statusPedidos { // enum é um objeto que representa um conjunto de constantes. onde mostram os status do pedido
    pendente = 'pendente',
    concluido = 'concluido',
    cancelado = 'cancelado'
}

 let atualizarStatusPedido = (idPedido: number ,status: statusPedidos) => { // função que atualiza o status do pedido
console.log( `O pedido ${idPedido} foi atualizado para ${status}`);
}

atualizarStatusPedido(1, statusPedidos.concluido); // chamando a funçao

