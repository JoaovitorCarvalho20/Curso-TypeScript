namespace Loja {
    export class Produto {
        nome: string;
        preco: number;

        constructor(nome: string, preco: number) {
            this.nome = nome;
            this.preco = preco;
        }

        exibirProduto(): void {
            console.log(`Produto: ${this.nome}, Preço: ${this.preco}`);
        }
    }
}

namespace Jogo {
    export class Produto {
        titulo: string;
        plataforma: string;

        constructor(titulo: string, plataforma: string) {
            this.titulo = titulo;
            this.plataforma = plataforma;
        }

        exibirProduto(): void {
            console.log(`Jogo: ${this.titulo}, Plataforma: ${this.plataforma}`);
        }
    }
}

// Acessando classes nos namespaces
let produtoLoja = new Loja.Produto('Notebook', 3500);
produtoLoja.exibirProduto(); // Produto: Notebook, Preço: 3500

let produtoJogo = new Jogo.Produto('FIFA 2024', 'PS5');
produtoJogo.exibirProduto(); // Jogo: FIFA 2024, Plataforma: PS5
