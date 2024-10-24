// class Conta {
//     private static Id: number = 1; // Variável estática para manter o ID único
//     public numero: number;
//     private titular: string;
//     private saldo : number = 0;
//     constructor( titular: string) {
//         this.numero = this.gerarNumero(); // Gera um número aleatório para a conta
//         this.gerarId(); // Gera e incrementa o ID
//         this.titular = titular; // Define o titular da conta
//         this.saldo = 0; // Define o saldo da conta

//     }

//     gerarNumero(): number {
//         const id = Math.floor(Math.random() * 1000); // Gera um número aleatório
//         return id;
//     }

//     gerarId(): void {
//         this.numero = Conta.Id++; // Incrementa o ID
//     }

//     depositar( valor: number): void {
//         this.saldo += valor;
//     }

//     sacar( valor: number): void {
//         this.saldo -= valor;
//     }

//     exibirSaldo(): void {
//         console.log( `Saldo: ${this.saldo}` );
//     }

//     exibirInfo(): void {
       
//         console.log( `ID: ${this.numero}` );
//         console.log( `Titular: ${this.titular}` );
//         console.log( `Número: ${this.numero}` );
//         console.log( `Saldo: ${this.saldo}` );
//         console.log("--------------------------")
//     }


// }

// class PessoaF extends Conta {
//     public cpf: string;

//     constructor( titular: string, cpf: string) {
//         super( titular); // Chama o construtor da classe pai
//         this.cpf = cpf; // Define o CPF
//         console.log(`Conta criada para ${titular}`); // Exibe a mensagem de conta criada
//     }
//     exibirInfo(): void {
//         super.exibirInfo();
//         console.log( `CPF: ${this.cpf}` );
//     }
// }

// class PessoaJ extends Conta {
//     public cnpj: string;

//     constructor( titular: string, cnpj: string) {
//         super( titular); // Chama o construtor da classe pai
//         this.cnpj = cnpj; // Define o CNPJ
//         console.log(`Conta criada para ${titular}`); // Exibe a mensagem de conta criada
//     }

//     exibirInfo(): void {        
//         super.exibirInfo();
//         console.log( `CNPJ: ${this.cnpj}` );
//     }
// }


// // Criação de instâncias das classes PessoaF e PessoaJ
// const pj = new PessoaJ( 'Empresa Teste', '111.111.111/1111-11');
// const pf = new PessoaF( 'Pessoa Teste', '111.111.111-11');



// pf.depositar(100);
// pj.depositar(1000);

// pj.exibirInfo();
// pf.exibirInfo();