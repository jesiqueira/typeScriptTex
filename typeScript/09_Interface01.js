var pedido_01 = {
    codigo: 1,
    cliente: 'Jose Edmar'
};
console.log(pedido_01);
function imprimirPedido(codigo, cliente) {
    console.log("Pedido n\u00FAmero: ".concat(codigo, ", cliente: ").concat(cliente, ". Em rota de entrega"));
}
function baixaPedido(codigo, cliente) {
    console.log("Pedido n\u00FAmero: ".concat(codigo, ", cliente: ").concat(cliente, ". Entregue!"));
}
var rastreiaPedido = imprimirPedido;
rastreiaPedido(12345, 'Jose Edmar');
rastreiaPedido = baixaPedido;
rastreiaPedido(2, 'Lucas');
