function alerta(data:string, msg:string):string
function alerta(data:number, msg:number):string
function alerta(data:any, msg:any){
    return `${data} - ${msg}`
}

let notifica1 = alerta("12/10/2011", 'Renovar Assinatura')

let notifica2 = alerta(12, 1235)

console.log(notifica1);
console.log(notifica2);