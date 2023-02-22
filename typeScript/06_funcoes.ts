/**
 * Conficionais e iteradores são identicos em TypeScript
 * if/else/else if  - switch - ternários n? //: //
 * for  - for of - for in -foreach
 * while - do while
 */

// funcão nomeada
function cronograma() {
    console.log('Agenda mensal')
}

function cronograma_geral(tipo: string) {
    console.log(`Agenda: ${tipo}`)
}

cronograma()
cronograma_geral('trimestral')

// funap de retorno
function agenda(dia: number, titulo: string) {
    return `Dia ${dia}, ${titulo}`
}

let compromisso = agenda(12, 'Tomar café')
console.log(compromisso)

// função anonima
let lembrete = function () {
    console.log('Dentista as 8hs')
}
let notificacao = function (nome: String, qtd?: number) {// ? é para uso de param opcional
    return `Olá ${nome}, você tem ${qtd} notificações`
}
lembrete()
console.log(notificacao('edmar', 8))

// Paramentros opcionais - funções de seta ou arrow function
let listaDeCompras = () => console.log('Arroz, feijão e macarrão');
let checkList = (tarefa: string, diaDaSemana: String = 'Domingo') => console.log(`Fazer ${tarefa}, aos: ${diaDaSemana}`);

listaDeCompras()
checkList('Compras')


