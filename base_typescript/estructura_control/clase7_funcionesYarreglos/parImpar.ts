/*Desarrollar un algoritmo que dado un número, ingresado por el usuario determine si el número es par o impar y le informe al usuario
En el caso de ser 0 (cero) el algoritmo deberá  informar
 */

import * as rls from "readline-sync";

let numero: number = rls.questionInt("Ingrese un numero: ");

if (numero === 0) {
  console.log("Usted ha ingresado un cero");
} else {
  if (numero % 2 === 0) {
    console.log("El numero ingresado es par");
  } else {
    console.log("el numero ingresado es impar");
  }
}
