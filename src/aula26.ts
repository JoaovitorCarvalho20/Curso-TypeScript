abstract class Conta {
    private static Id: number = 1; // Variável estática para manter o ID único
    public readonly numero: number;
    private _titular: string;
    private saldo : number = 0;
    constructor( titular: string) {
        this.numero = this.gerarNumero(); // Gera um número aleatório para a conta
        this._titular = titular; // Define o titular da conta
        this.saldo = 0; // Define o saldo da conta

    }

    get titular(): string {
        return this._titular;
    }

    set titular(titular: string) {  
        this._titular = titular;
    }

    gerarNumero(): number {
        const id = Math.floor(Math.random() * 1000); // Gera um número aleatório
        return id;
    }

   

    depositar( valor: number): void {
        this.saldo += valor;
    }

    sacar( valor: number): void {
        this.saldo -= valor;
    }

    exibirSaldo(): void {
        console.log( `Saldo: ${this.saldo}` );
    }

    exibirInfo(): void {
       
        console.log( `ID: ${this.numero}` );
        console.log( `Titular: ${this.titular}` );
        console.log( `Número: ${this.numero}` );
        console.log( `Saldo: ${this.saldo}` );
        console.log("--------------------------")
    }


}

class PessoaF extends Conta {
    public cpf: string;

    constructor( titular: string, cpf: string) {
        super( titular); // Chama o construtor da classe pai
        this.cpf = cpf; // Define o CPF
        console.log(`Conta criada para ${titular}`); // Exibe a mensagem de conta criada
    }
    exibirInfo(): void {
        super.exibirInfo();
        console.log( `CPF: ${this.cpf}` );
    }
}

class PessoaJ extends Conta {
    private cnpj: string;

    constructor( titular: string, cnpj: string) {
        super( titular); // Chama o construtor da classe pai
        this.cnpj = cnpj; // Define o CNPJ
        console.log(`Conta criada para ${titular}`); // Exibe a mensagem de conta criada
    }
    get Cnpj(): string {
        return this.cnpj;
    }
    set Setcnpj(cnpj: string) {
        this.cnpj = cnpj;
    }

    exibirInfo(): void {        
        super.exibirInfo();
        console.log( `CNPJ: ${this.cnpj}` );
    }
}


// Criação de instâncias das classes PessoaF e PessoaJ
const pj = new PessoaJ( 'Empresa Teste', '111.111.111/1111-11');
const pf = new PessoaF( 'Pessoa Teste', '111.111.111-11');



pf.depositar(100);
pj.depositar(1000);

pj.Setcnpj = '222.222.222/2222-22';

pj.exibirInfo();
pf.exibirInfo();



