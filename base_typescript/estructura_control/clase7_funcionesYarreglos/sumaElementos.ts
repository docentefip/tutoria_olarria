/*Construya un algoritmo que sume todos los elementos de un arreglo de tamaño N
La dimensión del arreglo es ingresada por el usuario
Los elementos (números) del arreglo son ingresados por el usuario
 */

import * as rls from "readline-sync";


let n:number = rls.questionInt("¿cuantos numeros desea ingresar?")
let num:number[] = new Array(n);
let suma:number=0;
let index:number=0;
for (index = 0; index < n; index++) {
    num[index]= rls.questionInt("ingrese un valor :");
    suma= suma +num[index]
}

for (index = 0; index< n; index++) {
    console.log(`El número en la posición ${index} es: ${num[index]}`);
}console.log(`La suma del arreglo es: ${suma}`); 
