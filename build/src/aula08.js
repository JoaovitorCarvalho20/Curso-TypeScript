"use strict";
var dias;
(function (dias) {
    dias[dias["DOMINGO"] = 0] = "DOMINGO";
    dias[dias["SEGUNDA"] = 1] = "SEGUNDA";
    dias[dias["TERCA"] = 2] = "TERCA";
    dias[dias["QUARTA"] = 3] = "QUARTA";
    dias[dias["QUINTA"] = 4] = "QUINTA";
    dias[dias["SEXTA"] = 5] = "SEXTA";
    dias[dias["SABADO"] = 6] = "SABADO";
})(dias || (dias = {}));
const d = new Date();
console.log(dias[d.getDay()]); // Isso funciona da seguinte forma dias tem definido as constantes do enum, eu passo a chave do enum e entao d.getDay() e o valor do dia da semana retorna o dia da semana que eu estou passando
var cores;
(function (cores) {
    cores["branco"] = "#fff";
    cores["azul"] = "#00f";
    cores["vermelho"] = "#f00";
    cores["verde"] = "#0f0";
    cores["preto"] = "#000";
})(cores || (cores = {}));
console.log(cores.preto); //  vai me retornar o exadecimal de #000 que é a chave do enum preto
var tipoUser;
(function (tipoUser) {
    tipoUser[tipoUser["ADMIN"] = 0] = "ADMIN";
    tipoUser[tipoUser["NORMAL"] = 1] = "NORMAL";
    tipoUser[tipoUser["SUPERADMIN"] = 2] = "SUPERADMIN";
})(tipoUser || (tipoUser = {}));
console.log(tipoUser.SUPERADMIN);
const user = tipoUser.SUPERADMIN; // Eu posso atribuir o enum a uma variavel
console.log(user);
var statusPedidos;
(function (statusPedidos) {
    statusPedidos["pendente"] = "pendente";
    statusPedidos["concluido"] = "concluido";
    statusPedidos["cancelado"] = "cancelado";
})(statusPedidos || (statusPedidos = {}));
let atualizarStatusPedido = (idPedido, status) => {
    console.log(`O pedido ${idPedido} foi atualizado para ${status}`);
};
atualizarStatusPedido(1, statusPedidos.concluido); // chamando a funçao
