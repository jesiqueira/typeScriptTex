let total: any = 500
let compra = total as number
console.log(`Sua comra é RS ${compra},00`)

// let meuPet = {}
// meuPet.nome = 'Cacau' //erro tem que usar interface

interface meuPet {
    nome: string
    idade: number
}

let pet = <meuPet> {}
pet.nome = 'Cacau'
pet.idade = 7

console.log(`Meu pet chama: ${pet.nome} tem ${pet.idade} anos`);
