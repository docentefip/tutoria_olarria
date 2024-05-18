import { questionInt } from "readline-sync";

function cantidadDeDivisores(numero: number): number {
    let cantidad = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            cantidad++;
        }
    }
    return cantidad;
}

let num1:number = questionInt("ingrese el numero para buscar sus divisores :");
let cantidad = cantidadDeDivisores(num1);
console.log(`La cantidad de divisores de ${num1} es ${cantidad}`);