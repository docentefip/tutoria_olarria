
/*Crear un arreglo de las posiciones que desee el usuario y llenarlo con 
nombres de personas
 */

import * as rls from "readline-sync";

let cantidad:number =rls.questionInt("ingrese tamanio del arreglo :");
let nombres:string[]=new Array(cantidad);
let index:number= 0;
let opcion:string="S"

while (index>=0 && index <= cantidad-1 && opcion ==="S"|| opcion==="s"){

    index=rls.questionInt("ingrese posicon del arreglo :");
    nombres[index]=rls.question("Ingrese nombre :");
    opcion=rls.question("quiere seguir agregando nombres S: Si | N:no :")

}
console.log(nombres);