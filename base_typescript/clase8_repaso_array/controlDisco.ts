/*Para tener control de la gente que hay en una disco el gerente quiere saber
 cuantas personas de diferentes edades han entrado. 
No se han permitido la entrada a menores de 18 ni mayores de 40. 
Para la carga de los datos se usa la función aleatorio  (use la función 
aleatorio(menorValor,mayorValor), es decir aleatorio(19,40))
Se sabe que la cantidad total de personas dentro del local es de 270
Se quiere saber: 	
Cuántas personas son menores de 21 años
Cuántas personas mayores o igual a 21 años
Cuántas personas en total
 */
function Aleatorio(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function cargarArreglo(arreglo: number[], cantidad: number) {
  for (let indice = 0; indice < cantidad; indice++) {
    arreglo[indice] = Aleatorio(19, 40);
  }
}

function contarMenores(personas: number[], capacidad: number): number {
  let menores: number = 0;
  let indice: number;
  for (indice = 0; indice < capacidad; indice++) {
    if (personas[indice] > 21) {
      menores++;
    }
  }
  return menores;
}

let personas: number[] = new Array(270);

let menores21, mayores21: number;
cargarArreglo(personas,270);
