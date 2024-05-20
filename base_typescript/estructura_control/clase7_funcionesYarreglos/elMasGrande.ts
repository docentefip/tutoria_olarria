/*Dado el siguiente arreglo [4,7,9,3,1,45,67,23,29,78,11,16]
Crear un programa que encuentre cual es el número más grande del arreglo e imprimirlo por 
consola
Almacenar el número más grande en una variable global y pasarlo a una función para 
determinar si el número es par o impar
*/
const arreglo: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];


let numeroMasGrande: number = arreglo[0];

for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > numeroMasGrande) {
        numeroMasGrande = arreglo[i];
    }
}


let esPar: boolean = numeroMasGrande % 2 === 0;


console.log("El número más grande del arreglo es:", numeroMasGrande);
console.log("El número más grande es " + (esPar ? "par" : "impar"));