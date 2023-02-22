/**
 * enum: estrutura de dados que não se repete
 * comprimento contante
 * typeScript traduz enums em objetos javascript
 */
// enum Gastronomia {
//     Brasileira,
//     Francesa,
//     Japonesa,
//     Alemã,
//     Italiana,
// }
enum Gastronomia {
    Brasileira = 'BR',
    Francesa = 'FR',
    Japonesa = 'JP',
    Alemã = 'AL',
    Italiana = 'IT',
}
enum Status {
    Ativo = 'On',
    Bloqueado = 0,
    Pendente,
}
enum Pontuacao {
    Nivel1 = 0b001,
    Nivel2 = 0b0010,
    Nivel3 = 0b0100,
}
console.log(`Status do cliente ${Status.Ativo}`)
console.log(Gastronomia) //enum completo
console.log(Gastronomia.Francesa) //1
// console.log(Gastronomia[1]) //francesa funciona quando enum é number

console.log(Pontuacao.Nivel1);

let pontos:Pontuacao = Pontuacao.Nivel1
console.log(`Olá você está no nível: ${pontos}`);
//Adicionar Pontuação
pontos |= Pontuacao.Nivel2
console.log(`Seus pontos mudaram agora você é nível: ${pontos}`);
pontos |= Pontuacao.Nivel3
console.log(`Seus pontos mudaram agora você é nível: ${pontos}`);

//Removendo a pontuação
pontos &= ~Pontuacao.Nivel3
console.log(`Atenção! Sua pontuação mudaram agora você é nível: ${pontos}`);
