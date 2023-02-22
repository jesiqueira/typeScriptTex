

let nome: string = "Edmar";
let cpf: number = 31224082877;
let contratado: boolean = true;

let obj:any = {contador: 0}

let codigo: string | number = 'ab12312312'
codigo = 1234

console.log(`código do produto: ${codigo}`);


type Notas = {
    n1: number
    n2: number
}

function exibeNotas(avaliacao:Notas){
    console.log(`Nota primeiro semestre: ${avaliacao.n1}`);
    console.log(`Nota primeiro semestre: ${avaliacao.n2}`);
}


console.log(exibeNotas({n1:2, n2:5}));