export class Professor {
  public profCode: String = "";
  private nome: string = "";
  readonly escola = "High School"; //SOmente Leitura
  static regiao = "Norte";

  constructor(profCode: string, nome: string) {
    this.profCode = profCode;
    this.nome = nome;
  }

  getProfessor() {
    return this.nome;
  }

  setProfessor(nome: string) {
    this.nome = nome;
  }
}
