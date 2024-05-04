import * as rls from "readline-sync";
let numero: number = rls.questionInt("ingrese un numero: ");

if (numero == 0) {
  console.log("el numero ingresado es 0");
} else {
  if (numero % 2 == 0) {
    console.log("el numero es par");
  } else {
    console.log("el numero es impar");
  }
}
