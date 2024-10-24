let dados ={ // primeira forma de declarar um objeto, os tipos das propiedades sao definidas pela a atribuicao de valores
nome: 'João',
idade: 30,
status: true,
ola : ()=>{console.log('ola')}
}


function mostrarDados(dados:object) {
    console.log(dados);
}

mostrarDados(dados);

dados.ola();

let pessoa:{nome:string; idade?:number} = {nome:'João', idade:30} // segunda forma de declarar um objeto com propriedades opcionais e eu ja posso definir os tipos das propriedades

let joao =  pessoa.nome;
console.log(joao);


type Carro = {nome:string; ano:number} // terceira forma de declarar um objeto, a vantagem e que eu posso reaproveitar os tipos das propriedades
let carro:Carro = {nome:'BMW', ano:2020}
let carro2:Carro = {nome:'Cheveter', ano:2020,}

console.log(carro, carro2);


