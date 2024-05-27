/*El DT de los infantiles del equipo de fútbol desea saber el promedio de la edad 
de los chicos
La edad de los chicos va de 3 a 7 años. 
Las edades son cargadas al azar (use la función aleatorio(menorValor, mayorValor), 
es decir aleatorio(3,7))
Muestre todas las edades y el promedio de las mismas
 */

import * as rls from "readline-sync";

function Aleatorio(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function cargarArreglo(arreglo: number[], cantidad: number) {
  for (let indice = 0; indice < cantidad; indice++) {
    arreglo[indice] = Aleatorio(3, 7);
  }
}
function mostrarArreglo(arreglo: number[]):void {
  for (let index = 0; index < arreglo.length; index++) {
    console.log(arreglo[index]);
  }
}

function obtenerPromedio(numArreglo:number[],dimArreglo:number) : number {
let prome:number = 0;
let sumaTotal:number = 0;
let indice:number;
for (indice=0; indice < dimArreglo; indice++) {
sumaTotal = sumaTotal + numArreglo[indice]; 
}
prome=sumaTotal/dimArreglo; 
return Math.floor(prome);
}

let promedio: number;
let cantidad: number = rls.questionInt("Ingrese la cantidad de jugadores");
let jugadoresEdad: number[] = new Array(cantidad);
cargarArreglo(jugadoresEdad, cantidad);
mostrarArreglo(jugadoresEdad);
promedio = obtenerPromedio(jugadoresEdad, cantidad);
console.log(`El promedio las edades es de: ${promedio}`);
