// Definir um tipo
interface Pedido {
    codigo: number
    cliente: string
}

let pedido_01: Pedido = {
    codigo: 1,
    cliente: 'Jose Edmar',
}

console.log(pedido_01)

// Definir um tipo de função
interface ProcessaPedido {
    (codigo: number, cliente: string): void
}

function imprimirPedido(codigo: number, cliente: string): void {
    console.log(`Pedido número: ${codigo}, cliente: ${cliente}. Em rota de entrega`)
}

function baixaPedido(codigo: number, cliente: string): void {
    console.log(`Pedido número: ${codigo}, cliente: ${cliente}. Entregue!`)
}

let rastreiaPedido: ProcessaPedido = imprimirPedido
rastreiaPedido(12345, 'Jose Edmar')
rastreiaPedido = baixaPedido
rastreiaPedido(2, 'Lucas')
