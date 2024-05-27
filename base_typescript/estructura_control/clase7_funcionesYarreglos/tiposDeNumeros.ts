import * as rls from 'readline-sync';
/*Almacene en un arreglo de dimensión N números (la cantidad es ingresada por el usuario)
Muestre cuántos números son positivos, cuántos son negativos y cuántos ceros hay
 */

let dimension:number =rls.questionInt("ingrese tamanio del arreglo :");
 let numeros:string[]=new Array(dimension);

 let 