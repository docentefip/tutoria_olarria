/*Construya un algoritmo que tenga un arreglo de números y se los muestre al usuario
El arreglo debe ser llamado num 
El arreglo num debe contener los siguientes datos: 20, 14, 8, 0, 5, 19 y 24.
Mostrar los valores resultantes del arreglo
 */

function mostrarArreglo(arreglo: number[]): void {
  for (let index = 0; index < arreglo.length; index++) {
    console.log(arreglo[index] + "!");
  }
}
let numeros: number[] = [20,14,8,0,5,19,24];
let indice: number = 0;

mostrarArreglo(numeros);