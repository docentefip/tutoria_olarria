/*Una tienda al cumplir años en Octubre ofrece un descuento del 15% a sus clientes 
en todas sus compras 
Desarrolle un algoritmo que dada una compra: precio unitario, cantidad y el mes, 
indicados por el usuario, determine si el cliente tiene descuento o no
 */
import * as rls from "readline-sync";

let punitario: number = rls.questionFloat("Ingrese precio unitario: ");
let cantidad: number = rls.questionInt("Ingrese cantidad: ");
let mes: number = rls.questionInt("ingrese mes del 1 al 12: ");
let totalCompra = 0;
let pdescuento = 0;

totalCompra = punitario * cantidad;
if (mes < 1 || mes > 12) {
  console.log("ingrese mes correcto");
} else {
  if (mes === 11) {
    pdescuento = totalCompra * 0.15;
    console.log(
      " se realizo el descuento del 15%. El cliente tiene que pagar: $" +
        pdescuento
    );
  } else {
    console.log("No se realiza el descuento. Total a pagar $" + totalCompra);
  }
}
