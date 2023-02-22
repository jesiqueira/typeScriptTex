import { Professor } from "./class/Professor";

let prof = new Professor("12345", "Jose Edmar de Siqueira");
// prof.profCode = '546'
// prof.setProfessor('Jose edmar de Siqueira')
console.log(prof.getProfessor());
Professor.regiao = 'Sul'
console.log(Professor.regiao);