"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professor = void 0;
class Professor {
    constructor(profCode, nome) {
        this.profCode = "";
        this.nome = "";
        this.escola = "High School"; //SOmente Leitura
        this.profCode = profCode;
        this.nome = nome;
    }
    getProfessor() {
        return this.nome;
    }
    setProfessor(nome) {
        this.nome = nome;
    }
}
exports.Professor = Professor;
Professor.regiao = "Norte";
