/**
 * void: quando não há informação, uma função sem retorno por exemplo
 * never: quando algo nunca deve ocorrer
 */

function saudacao(): void {
    console.log('Olá, tudo bem?')
}

let saudarPessoa: void = saudacao()
console.log(saudacao)
console.log(saudarPessoa)

let vazio: void = undefined
// vazio = 1 //erro

// Never

function checkNumber(input: string | number): boolean {
    if (typeof input === 'string') {
        return true
    } else if (typeof input === 'number') {
        return mensagemErro('Este Campo não aceita números')
    }
    else{
        return false
    }
}
function mensagemErro(mensagem: string): never {
    throw new Error(mensagem)
}


if(checkNumber('Jose Edmar de Siqueira')){
    console.log('Retorno é verdadeiro');
}
checkNumber(1234)