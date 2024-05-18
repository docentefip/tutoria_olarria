import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function sumarArrays(arr1: number[], arr2: number[]): number[] {
    const sumArray: number[] = [];
    for (let i = 0; i < 6; i++) {
        sumArray.push(arr1[i] + arr2[i]);
    }
    return sumArray;
}

function llenarArregloCreativo(arr: number[]): void {
    console.log(`El arreglo lleno de forma creativa es: {${arr.join(' || ')}}`);
}

// Código principal
const arreglo1: number[] = [];
const arreglo2: number[] = [];

rl.question('Ingrese los elementos del primer arreglo separados por espacio: ', (input1) => {
    arreglo1.push(...input1.split(' ').map(Number));
    rl.question('Ingrese los elementos del segundo arreglo separados por espacio: ', (input2) => {
        arreglo2.push(...input2.split(' ').map(Number));
        rl.close();

        const resultadoSuma = sumarArrays(arreglo1, arreglo2);
        console.log('El resultado de la suma de los arreglos es:', resultadoSuma);
        llenarArregloCreativo(resultadoSuma);
    });
});
