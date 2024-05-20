/* Construya un algoritmo que tenga un arreglo de dimensión deseada por el usuario
 y llénelo con los nombres que el usuario desee */

 import * as rls from "readline-sync";

 let cantidad:number =rls.questionInt("ingrese tamanio del arreglo :");
 let nombres:string[]=new Array(cantidad);


 for (let index = 0; index < nombres.length; index++) {
    nombres[index]=rls.question("ingrese nombre en la posicion "+index+ " ");
    
 }

 console.log(nombres);

