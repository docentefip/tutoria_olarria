import * as readlineSync from 'readline-sync';

let base : number = readlineSync.questionInt("Ingrese el número de la base: "); 
let exponente : number = readlineSync.questionInt("Ingrese el número del exponente: "); 
const resultado= calcularPotencia (base,exponente)

function calcularPotencia (base:number,exponente:number,):number {
    
    if (exponente === 0) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 0; i < exponente; i++) {
            resultado *= base;
        }
        return resultado;
    }
}

if (exponente < 0) {
    console.log('El exponente debe ser mayor o igual a cero.');
} else {
    let resultado = calcularPotencia(base, exponente);
    console.log('El resultado es: ' + resultado);
}