"use strict";
var produto = 'Geladeira';
var eletronico = 'Televisor';
function exibirProduto() {
    produto = 'notebook';
    var eletrodomestico = 'fritadeira Eletrica';
}
console.log(produto);
// console.log(eletrodomestico);
let n1 = 10;
function testandoLet() {
    let n2 = 11;
    if (n2 > n1) {
        let n3 = 12;
        n3++;
    }
}
testandoLet();
console.log(n1);
// console.log(n2);
// console.log(n3);
