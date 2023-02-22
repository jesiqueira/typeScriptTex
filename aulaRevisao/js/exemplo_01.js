"use strict";
let nome = "Edmar";
let cpf = 31224082877;
let contratado = true;
let obj = { contador: 0 };
let codigo = 'ab12312312';
codigo = 1234;
console.log(`código do produto: ${codigo}`);
function exibeNotas(avaliacao) {
    console.log(`Nota primeiro semestre: ${avaliacao.n1}`);
    console.log(`Nota primeiro semestre: ${avaliacao.n2}`);
}
console.log(exibeNotas({ n1: 2, n2: 5 }));
