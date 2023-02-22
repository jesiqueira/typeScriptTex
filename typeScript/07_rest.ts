function zoologico (regiao:string, ...animais:string[]){
    return `Nosso zoo está localizado na região de ${regiao},venha conhecer os animais: ${animais.join(', ')}!`
}

console.log(zoologico('Sul', 'Leões, Girafas, Elefantes'))
console.log(zoologico('São Carlos'))


let restaurante = (nome:string, ...gastronomia:string[])=>{
    return `${nome} você merece nossa cozinha ${gastronomia.join(',')}!`
}

console.log(restaurante('Ristorante', 'Italiana, Alemã, Holandesa'));