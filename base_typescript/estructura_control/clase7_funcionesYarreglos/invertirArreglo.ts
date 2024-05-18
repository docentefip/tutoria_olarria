/*Almacene en un arreglo de tamaño N los números ingresados por el usuario
•La dimensión N también es ingresada por el usuario
•Muestre los números del arreglo pero del último al primero */


import * as rls from "readline-sync";

function llenarArray(arreglo:number[]) {

    for (let index = 0; index < arreglo.length; index++) {
            arreglo[index]=rls.questionInt("Ingrese un mumero :");   
        
    }
   return arreglo;
    
}

let n = rls.questionInt("Ingrese el tamaño del arreglo :");
let arreglo:number[]=new Array(n);



llenarArray(arreglo);

for (let index =n-1; index >=0; index--) {
    console.log("EL arreglo invertido queda asi: ",arreglo[index]);    
    
}

console.log("El arreglo es :",arreglo);
