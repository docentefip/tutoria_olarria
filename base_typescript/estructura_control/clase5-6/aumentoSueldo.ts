/*.Una empresa desea premiar a sus empleados con un aumento de sueldo. 
Este aumento se ajusta a la siguiente tabla:
 
Sueldo Actual Sueldo con Aumento
0 - 15.000 $                20%
15.001 - 20.000  $          10%
20.001 - 25.000  $           5%
Más de 25.000 $    No hay aumento

Desarrolle un algoritmo dado el salario actual de un emplea
determine el aumento de sueldo a aplicar y se lo muestre
  */
import * as rls from "readline-sync";

let sueldo: number = rls.questionFloat("Ingrese sueldo del empleado: ");
let cobrar: number;

if (sueldo > 0 && sueldo <= 15000) {
  cobrar = sueldo + sueldo * 0.2;
  console.log("recibe un aumento del 20 %");
} else {
  if (sueldo > 15000 && sueldo <= 20000) {
    cobrar = sueldo + sueldo * 0.1;
    console.log("recibe un aumento del 10 %");
  } else {
    if (sueldo > 20000 && sueldo <= 25000) {
      cobrar = sueldo + sueldo * 0.05;
      console.log("recibe un aumento del 5 %");
    } else {
      cobrar = sueldo;
      console.log("No recibe aumento");
    }
  }
}
console.log("el sueldo a cobrar es :$ " + cobrar);
