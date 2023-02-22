"use strict";
// class Reserva{} // erro por redeclarar já existe essa classe
exports.__esModule = true;
// importação unica
// import { cliente } from "./16_modulos";
// console.log(`Nosso novo cliente é: ${cliente}`);
// import tudo
// import * as pedidos from "./16_modulos";
// console.log(`Nosso novo cliente é: ${pedidos.cliente}`);
var _16_modulos_1 = require("./16_modulos");
console.log("Nosso novo cliente \u00E9: ".concat(_16_modulos_1.cliente));
var reversaInicial = new _16_modulos_1.Reservas(4, 'Apartamentos Simples');
console.log(reversaInicial);
