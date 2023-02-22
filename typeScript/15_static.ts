class Assinatura{
    static peridodo : number = 6
    cupom: boolean

    constructor(cupom: boolean){
        this.cupom = cupom
    }

    static assinaturaPremium(flag: boolean){
        return flag ? this.peridodo *= 2 : null
    }

    assinaturaMaster(flag:boolean){
        flag ? Assinatura.peridodo +=  4 : null
    }
}



const perfil = Assinatura

console.log(`Periodo de assinatura: ${perfil.peridodo} meses`);
perfil.assinaturaPremium(true)
console.log(`Periodo de assinatura: ${perfil.peridodo} meses`);

const cumpomValido: Assinatura = new Assinatura(true)
console.log(`Cupom válido? : ${cumpomValido.cupom}`);

cumpomValido.assinaturaMaster(true)
console.log(`Periodo de assinatura: ${perfil.peridodo} meses`);