/*Construya un algoritmo que tenga dos arreglos uno que almacene 2 nombres 
y otro que almacene 3 números ambos ingresados por el usuario. 
Al final debe imprimir los valores por consola */

import * as rls from "readline-sync";

function mostrarArreglo(arreglo:number[]|string[]) {
    for (let index = 0; index < arreglo.length; index++) {
        console.log('En posicion  ' +index +" :"+arreglo[index])
        
    }
    
}
function ingresarValores(arreglo:number[]|string[]) {

    for (let index = 0; index < arreglo.length; index++) {
        arreglo[index]= rls.question("ingrese valor :")
        
    }
    
}


let nombres:string[]=new Array(2);

let numeros:number[]=new Array(3);
//lenar los arreglos
console.log("ingrese 2 nombres ");
ingresarValores(nombres);
console.log("ingrese 3 numeros")
ingresarValores(numeros);
console.log("muestra nombres");
mostrarArreglo(nombres);
console.log("muestra numeros");
mostrarArreglo(numeros);