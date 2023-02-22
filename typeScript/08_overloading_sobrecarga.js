function alerta(data, msg) {
    return "".concat(data, " - ").concat(msg);
}
var notifica1 = alerta("12/10/2011", 'Renovar Assinatura');
var notifica2 = alerta(12, 1235);
console.log(notifica1);
console.log(notifica2);
