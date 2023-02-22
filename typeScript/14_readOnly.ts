class Reserva {
    readonly codigo: number
    acomodacao: string

    constructor(codigo: number, acomodacao: string) {
        this.codigo = codigo
        this.acomodacao = acomodacao
    }
}


const reserva:Reserva = new Reserva(4, 'Bangalo Premium')

// reserva.codigo = 5 //erro por que é somente leitura

console.log(reserva.codigo);


// readonly em interfaces

interface Consumo{
    itens: string[]
    // readonly quarto:number
    quarto:number
}

const comanda: Consumo = {
    itens: ['Café com leite', 'Pão de queijo', 'Salada de frutas'],
    quarto: 12
}

// comanda.quarto = 13  // erro somente leitura

const fichaDeConsumo: Readonly<Consumo> = {
    itens: ['Café com leite', 'Pão de queijo', 'Salada de frutas'],
    quarto: 12
}

// fichaDeConsumo.quarto = 13 // somente leitura

fichaDeConsumo.itens[0] = 'Café Espresso'

console.log(fichaDeConsumo);