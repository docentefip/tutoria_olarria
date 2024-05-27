/*Hacer la suma de dos arreglos y dejarlo en otro arreglo
La dimensión de los arreglos es solicitada al usuario
Los dos arreglos son cargados al azar
 */
import * as rls from "readline-sync";

function Azar (tope : number) : number {
	return Math.floor(Math.random()*tope); 
};

function cargarArreglo(arreglo: number[], cantidad: number) {
    for (let indice = 0; indice < cantidad; indice++) {
      arreglo[indice] = Azar(100);
    }
  }


let cantidad: number = rls.questionInt("Cuantos numeros desea ingresar?: ");

let num1:number[] = new Array(cantidad);
let num2:number[] = new Array(cantidad);
let suma:number[] = new Array(cantidad);


cargarArreglo(num1,cantidad);
console.log("El primer arreglo es: "+num1);
cargarArreglo(num2,cantidad);
console.log("El segundo arreglo es: "+num2);

for (let index = 0; index < num1.length; index++) {
   suma[index]=num1[index]+num2[index];
    
}

console.log("la suma de los arreglos es: "+num1);



