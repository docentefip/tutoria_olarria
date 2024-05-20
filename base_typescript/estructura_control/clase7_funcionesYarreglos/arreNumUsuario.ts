/*Construya un algoritmo que tenga un arreglo de dimensión 5 y llénelo con los números que 
el usuario desee.
Muestre los números del arreglo al usuario
 */
import * as rls from "readline-sync";
function mostrarArreglo(arreglo:number[]) {
    for (let index = 0; index < arreglo.length; index++) {
        console.log(arreglo[index]);
        
    }
    
}
let num:number[] = new Array(5);

for (let index = 0; index < num.length; index++) {
    num[index]= rls.questionInt("ingrese un valor en la posicion "+ index+ " : ");
    
}

mostrarArreglo(num);