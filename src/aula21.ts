// class Conta {
//     private static Id: number = 1;
//     public numero: number;
//     public saldo: number;
//     public titular: string;

//     constructor( saldo: number, titular: string) {
//         this.numero = this.gerarNumero();
//         this.gerarId();
//         this.saldo = saldo;
//         this.titular = titular;
//     }

//     gerarNumero(): number {
//     const id = Math.floor(Math.random() * 1000); // gera um número aleatório
//     return id;
//     }

//     gerarId(): number {
//         return Conta.Id++; // incrementa o Id
//     }
// }

// class PessoaF extends Conta {
//   public cpf: string;
//   constructor( saldo: number, titular: string, cpf: string) {
//     super(saldo, titular);
//     this.cpf = cpf;
//   }
// }

// class PessoaJ extends Conta {
//   public cnpj: string;
//   constructor( saldo: number, titular: string, cnpj: string) {
//     super( saldo, titular);
//     this.cnpj = cnpj;
//   }
// }


// const pj = new PessoaJ( 2, 'teste', '111.111.111/1111-11');
// const pf = new PessoaF( 2, 'teste', '111.111.111-11');

// console.log(pf);
// console.log(pj);