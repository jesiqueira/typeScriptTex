"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Professor_1 = require("./class/Professor");
let prof = new Professor_1.Professor("12345", "Jose Edmar de Siqueira");
// prof.profCode = '546'
// prof.setProfessor('Jose edmar de Siqueira')
console.log(prof.getProfessor());
Professor_1.Professor.regiao = 'Sul';
console.log(Professor_1.Professor.regiao);
