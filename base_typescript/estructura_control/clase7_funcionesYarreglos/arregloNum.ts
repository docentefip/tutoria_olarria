/* Construya un algoritmo que tenga un arreglo de números y se los muestre al usuario
El arreglo debe ser llamado num 
El arreglo num debe contener los siguientes datos: 20, 14, 8, 0, 5, 19 y 24.
Mostrar los valores resultantes del arreglo
 */


let num:number[] = [20, 14, 8, 0, 5, 19 , 24];

for (let index = 0; index < num.length; index++) {
    console.log("arreglo de numeros en posicion ",index," :",num[index]);
    console.log(num);
}