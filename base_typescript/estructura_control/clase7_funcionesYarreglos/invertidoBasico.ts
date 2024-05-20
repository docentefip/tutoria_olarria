import * as rls from "readline-sync";

let dimensionArreglo: number = rls.questionInt(
  "Ingrese cuantos numeros desea almacenar: "
);
let arregloInvertido: number[] = new Array(dimensionArreglo);
let i: number;

for (i = 0; i < dimensionArreglo; i++) {
  arregloInvertido[i] = rls.questionInt(
    "Ingrese los numeros que desea almacenar  : "
  );
}

for (i = dimensionArreglo- 1; i >= dimensionArreglo;i--) {
  console.log(arregloInvertido[i], " ");
}
