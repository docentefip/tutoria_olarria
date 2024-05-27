/* Cree un método esMultiplo con 2 parámetros que devuelva el valor lógico 
verdadero o falso según si el primer número que se indique como parámetro es 
múltiplo del segundo.
Recuerde que un numero es múltiplo de otro si al dividirlo su resto es cero
Recuerde que la operación mod permite saber si el resto de una división es cero

*/
import * as rls from "readline-sync";
let num1:number= rls.questionInt("ingrese primer numero: ");
let num2:number= rls.questionInt("ingrese segundo numero: ");

if (esMultiplo(num1,num2)) {
    console.log(num1 + " es multiplo de " + num2);
    
} else {
    console.log(num1 + " NO es multiplo de " + num2);
}



function esMultiplo(num1: number, num2: number) {
  if (num1 % num2 === 0) {
    
    return true;
  } else {
    
    return false;
  }
}