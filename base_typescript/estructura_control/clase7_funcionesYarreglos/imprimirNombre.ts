/*2) Dado un array con nombres de tamaño 5, pedir al usuario que ingrese 
un nombre y verificar si está en el arreglo. Imprimir el arreglo y si está o no en él. 
 */

import * as rls from "readline-sync";

let nombres:string[] = ["Juan", "Paula","Sofia","Ana","Mauricio"];
let nombreBuscado:string= rls.question("ingrese nombre a buscar: ")

for (let index = 0; index < nombres.length; index++) {

    if (nombres[index]===nombreBuscado){
        console.log(`El nombre buscado esta en la posicion : ${index}`)
    }
    
    
}
console.log(nombres);




/*otra opcion de resolucion

let nombres: string[] = ['Ana', 'Juan', 'María', 'Pedro', 'Luis'];


let nombreIngresado: string = prompt('Ingresa un nombre:');

let encontrado: boolean = false;
for (let nombre of nombres) {
    if (nombre === nombreIngresado) {
        encontrado = true;
        break;
    }
}

console.log('Array de nombres:', nombres);
if (encontrado) {
    console.log(`El nombre ${nombreIngresado} está en el arreglo.`);
} else {
    console.log(`El nombre ${nombreIngresado} NO está en el arreglo.`);
}

*/