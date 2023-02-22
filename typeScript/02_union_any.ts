/**
 * union: dois ou mais tipos diferentes para variáveis ou argumetnso em funções
 * any: permite que qualquer tipo seja inferido a uma variável - evitar essa utilização
 */
let dadosDoCliente: any = 0
dadosDoCliente = true
dadosDoCliente = 'Hans Solo'
dadosDoCliente = {}

let EstatiscaDoCliente: any[] = ['Controle de Tráfico', 22-10-1980, false]


let statusPedidos: (string | number | false)
statusPedidos = 'EM rota de entrega'
statusPedidos = 123123
statusPedidos = false


function exibeStatusPedido(statusPedidos:(string | number)){
    if(typeof(statusPedidos) === 'string'){
        console.log(`O seu pedido esta em: ${statusPedidos}`);
    }
    else if(typeof(statusPedidos) === 'number'){
        console.log(`O número do pedido é: ${statusPedidos}`);
    }
}

exibeStatusPedido('Em rota de entrega')
exibeStatusPedido(23541)