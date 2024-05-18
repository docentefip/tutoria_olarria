/*Sumar los elementos de cada una de las posiciones de dos arreglos y guardar 
el resultado en otro arreglo
•El arreglo tiene dimensión 6 y los números de los dos vectores los carga el usuario */

import * as rls from "readline-sync";

let array1:number[]=new Array(3);
let array2:number[]=new Array(3);
let suma:number[]=new Array(3);



//lleno primer arreglo
console.log("Ingrese 6 numeros para llenar el primer arreglo")
llenarArray(array1);

console.log("Ingrese 6 numeros para llenar el segundo arreglo")
llenarArray(array2);


suma2Array(array1, array2,suma);

console.log("El arreglo sumado queda: ");
console.log(suma);


    

function llenarArray(array:number[]) {

    for (let index = 0; index < array.length; index++) {
            array[index]=rls.questionFloat("Ingrese un mumero ");   
        
    }
   return array;
    
}


function suma2Array(arreglo1:number[], arreglo2:number[],suma:number[]) {

    for (let index = 0; index < arreglo1.length; index++) {
        suma[index]=arreglo1[index]+arreglo2[index];   
    
}
return suma;
    
}