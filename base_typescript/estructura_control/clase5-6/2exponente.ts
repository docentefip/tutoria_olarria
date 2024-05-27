import * as rls from "readline-sync";

let base:number=rls.questionFloat("Ingrese la base: ");
let exponente:number=rls.questionFloat("Ingrese el exponente (debe ser mayor o igual a cero): ");
let resultadoFuncion:number;

dibujarGuiones(40);
console.log("Calculadora de potencias")

function dibujarGuiones (numeroDeGuiones:number) {;
    let linea:string= "";
    for (let i:number=0;i<=numeroDeGuiones;i++) {;
        linea+="-";
    }
    console.log(linea);
}
function calcularPotencia (base:number, exponente:number):number {;
    return Math.pow(base, exponente);
}

if (exponente>=0) {
    resultadoFuncion=calcularPotencia(base, exponente);
    console.log("El resultado es: "+resultadoFuncion);
} else {
    console.log("El numero ingresado es menor a cero");
} 

dibujarGuiones(40);