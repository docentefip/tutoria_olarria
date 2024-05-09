/*Desarrolle un algoritmo que diga el precio de una compra  
La compra se compone del precio del producto y la cantidad
Si el cliente gasta más de $1000 debemos aplicarle un descuento del 10%*/

import * as rls from "readline-sync";

let precio: number = rls.questionInt("Ingrese el precio de la compra: ");
let cantidad: number = rls.questionInt("Ingrese la cantidad del producto: ");
let compra:number= (precio* cantidad);

if ( compra >=1000) {
    console.log("Usted tiene que pagar: "+ (compra- (compra*0.1)));

    
    
} else {
    console.log("No tiene descuento");
}