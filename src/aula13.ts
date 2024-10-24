
let lowercase = function (nome:string)  {   // funcao anonima 
    console.log(nome.toLowerCase()); 
} 


lowercase('TESTE');	




let uppercase =(nome:string)=>{ // funcao arrow
    console.log(nome.toUpperCase());
}

uppercase('teste');


/**
 * Soma dois n  meros e retorna o resultado.
 * 
 * @param {number} num1 - Primeiro numero.
 * @param {number} num2 - Segundo numero.
 * @returns {number} soma dos dois numeros.
 */
let soma1 = (num1:number, num2:number) =>{ 
    return num1 + num2; } // forma concisa de escrever uma funcao arrow

console.log(soma1(10,20));



/**
 * Recebe um vetor de n  umeros e soma todos os elementos,
 * imprimindo o resultado parcial a cada itera o.
 * @param n Vetor de n  umeros a serem somados.
 */
let soma3 = (n:number[])=>{ 
    let resultado = 0;
    // n.forEach((elemento) =>{ // Usando a funcao anonima dentro de uma funcao forEach
    //     resultado = resultado + elemento
    //     console.log(resultado);
        
    // })

    for (const element of n) {
        resultado = resultado + element;
        console.log(resultado);
    }

}

let vetor = [1,2,3,4,5,6,7,8,9,10];
soma3(vetor);
