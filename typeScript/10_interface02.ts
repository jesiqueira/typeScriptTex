// Definir um tipo de Matriz
interface Listagem {
    [pedidos: number]: number
}

interface Departamentos {
    [setores: string]: string
}

let historicoPedidos: Listagem = [123, 325, 84]

console.log(`Pedido n° ${historicoPedidos[1]}`) //325

let categoriaLoja: Departamentos = {}
categoriaLoja['CMB'] = 'Cama, mesa e banho'
categoriaLoja['infj'] = 'Infanto Juvenil'

console.log(`Você está no setor: ${categoriaLoja['infj']}`)

// Opcionais
interface Lojas {
    regiao: string
    readonly filial: number //Somente leitura
    // funcionarios?: number //Opcional
    funcionarios: number
}

let lojaMatriz: Lojas = {
    regiao: 'Norte',
    filial: 0,
    funcionarios: 13,
}

lojaMatriz.funcionarios = 15
// lojaMatriz.filial = 2 //somente leitura
console.log(lojaMatriz)
