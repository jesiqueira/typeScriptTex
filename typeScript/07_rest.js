function zoologico(regiao) {
    var animais = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        animais[_i - 1] = arguments[_i];
    }
    return "Nosso zoo est\u00E1 localizado na regi\u00E3o de ".concat(regiao, ",venha conhecer os animais: ").concat(animais.join(', '), "!");
}
console.log(zoologico('Sul', 'Leões, Girafas, Elefantes'));
console.log(zoologico('São Carlos'));
var restaurante = function (nome) {
    var gastronomia = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        gastronomia[_i - 1] = arguments[_i];
    }
    return "".concat(nome, " voc\u00EA merece nossa cozinha ").concat(gastronomia.join(','), "!");
};
console.log(restaurante('Ristorante', 'Italiana, Alemã, Holandesa'));
