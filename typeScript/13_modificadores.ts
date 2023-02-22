class Produtos {
    private nome: string
    private codigo: number
    protected preco: number

    constructor(nome: string, codigo: number, preco:number) {
        this.nome = nome
        this.codigo = codigo
        this.preco = preco
    }

    getNome(): string {
        return this.nome
    }
    setNome(nome: string) {
        this.nome = nome
    }
    getCodigo(): number {
        return this.codigo
    }
    setCodigo(codigo: number) {
        this.codigo = codigo
    }
}

class Carrinho extends Produtos{
    constructor(nome:string, codigo:number, preco:number){
        super(nome, codigo, preco)
    }

    getPreco():number{
        return this.preco
    }
}

let cadastraProduto = new Produtos('Geladeira', 1235, 12)
console.log(cadastraProduto.getNome())
cadastraProduto.setNome('Forno')

console.log(cadastraProduto.getCodigo())
console.log(cadastraProduto);

let shop = new Carrinho('Notebook', 987, 1233)
console.log(shop.getNome());
console.log(shop.getPreco());
