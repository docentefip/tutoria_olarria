/*En una prueba, un piloto tiene que completar 4 vueltas
Se necesita un programa que permita ingresar por teclado el tiempo de cada vuelta
El programa debe retornar el tiempo total y el promedio de vuelta

*/ 
import * as rls from 'readline-sync';

let vuelta1: number = rls.questionInt("Ingrese tiempo de la primera vuelta: ");
let vuelta2: number = rls.questionInt("Ingrese tiempo de la segunda vuelta: ");
let vuelta3: number = rls.questionInt("Ingrese tiempo de la tercera vuelta: ");
let vuelta4: number = rls.questionInt("Ingrese tiempo de la cuarta vuelta: ");

let total:number=vuelta1+vuelta2+vuelta3+vuelta4;
console.log("El tiempo total es : "+total);
console.log("El promedio de las vueltas es: " + total/4);
