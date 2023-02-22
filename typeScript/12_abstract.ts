// classe abstract não pode ser instaciadas somente extendidas

abstract class Rede {
    nome: string

    constructor(nome: string) {
        this.nome = nome
    }

    imprimeLoja(): string {
        return this.nome
    }

    abstract buscaLoja(nome: string, codigo: number): Rede

    abstract mostraCodigo(): number
}

class Franquia extends Rede {
    codigoFranquia: number
    
    constructor(nome: string, codigo: number) {
        super(nome)
        this.codigoFranquia = codigo
    }
    buscaLoja(nome: string, codigo: number): Rede {
        return new Franquia(nome, codigo)
    }
    mostraCodigo(): number {
        return this.codigoFranquia
    }
}

let franquiado: Franquia = new Franquia('São Carlos', 3)
let loja5 = franquiado.buscaLoja('Franca', 5)
console.log(franquiado.imprimeLoja())
console.log(loja5);
console.log(loja5.imprimeLoja());

console.log(`Código franquiado: ${franquiado.mostraCodigo()}`);
console.log(`Código Loja: ${loja5.mostraCodigo()}`);
