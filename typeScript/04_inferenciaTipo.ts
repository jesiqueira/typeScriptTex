/**
 * typeScript é uma linguagem tipada
 * não é obrigatório especificar o tipo de uma variável
 * inferência ocorre automaticamente
 */

let a = 'Lorem Ispsum' //type String
let n = 34 //number

let array = [1, 45, 'Bom dia!']
array.push(32)
array.push('Boa tarde"')
// array.push(true) //erro

function soma(a1: number, a2: number) {
    return a1 + a2
}

console.log(typeof a)
console.log(typeof n)
console.log(typeof array)

soma(1, 8)
// soma('2', 4) //Erro

let cod:any ='12345'
let codPessoa:number = cod
console.log(codPessoa);
