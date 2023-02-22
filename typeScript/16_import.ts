// class Reserva{} // erro por redeclarar já existe essa classe

// importação unica
// import { cliente } from "./16_modulos";
// console.log(`Nosso novo cliente é: ${cliente}`);

// import tudo
// import * as pedidos from "./16_modulos";
// console.log(`Nosso novo cliente é: ${pedidos.cliente}`);

// Renomear um ou mais módulos
import { Reservas as R, cliente as C } from "./16_modulos";
console.log(`Nosso novo cliente é: ${C}`);

let reversaInicial = new R(4, 'Apartamentos Simples')

console.log(reversaInicial);