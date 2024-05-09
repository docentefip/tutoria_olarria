/*Desarrolle un algoritmo que dados tres números determine cuál es el menor de los tres
 */

import * as rls from "readline-sync";

let n1: number = rls.questionInt("Ingrese  el primer numero entero: ");
let n2: number = rls.questionInt("Ingrese segundo numero entero: ");
let n3: number = rls.questionInt("Ingrese  tercer numero entero: ");

if (n1 <= n2 && n1 <= n3) {
  console.log("El menor de los tres numeros es: " + n1);
} else {
  if (n2 < n1 && n2 <= n3) {
    console.log("El menor de los tres numeros es: " + n2);
  } else {
    console.log("El menor de los tres numeros es: " + n3);
  }
}
