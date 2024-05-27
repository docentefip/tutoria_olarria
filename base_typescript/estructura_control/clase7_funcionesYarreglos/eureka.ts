/*Escribir un algoritmo que nos pida una clave y verifique que sea la correcta
Tenga en cuenta que la clave es la palabra “eureka”
Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos el sistema mostrará 
un mensaje indicándonos que hemos agotado todas las oportunidades Si acertamos la clave,
 saldremos directamente del programa
 */

import * as rsl from "readline-sync";

const clave: string = "eureka";
let contador: number = 3;
let claveIngresada: string = "";

while ((contador>=1 && contador <= 3) && claveIngresada != clave) {
  claveIngresada = rsl.question("Introduzca la clave: ");
  console.log("Le quedan "+contador+ " intentos");
  contador == contador -1 ;
  
}

if (claveIngresada === clave) {
  console.log("Enhorabuena !!!");
}else{
    console.log("usted no acerto")
}
