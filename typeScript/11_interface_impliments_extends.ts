interface IProduto {
    nome: string
    codigo: number
    getCodigo?: () => string
}

interface IFornecedor extends IProduto {
    fornecedor: string
}
let cadastroProdutos: IFornecedor = {
    nome: 'Jose edmar de Siqueira',
    codigo: 3245,
    fornecedor: ' Hipos Eletrics',
}

console.log(cadastroProdutos)

// Implementar na classe

class Estoque implements IFornecedor {
    fornecedor: string
    nome: string
    codigo: number

    constructor(nome: string, codigo: number, fornecedor: string) {
        this.nome = nome
        this.codigo = codigo
        this.fornecedor = fornecedor
    }

    getCodigo(): string {
        return `Código do pedido: n° ${this.codigo}`
    }
}

let item:Estoque = new Estoque('Quebra cabeça', 123, 'Funsio Toys')
console.log(item)
console.log(item.getCodigo())
