import * as rls from 'readline-sync';
let base:number = rls.questionInt ("ingrese numero de base: ");
let exponente:number = rls.questionInt ("ingrese numero exponente: ");

let resultado:number = base**exponente;
if (exponente==0) {
        console.log("el resultado es 1")
}
        else if (resultado>0) {
        console.log("el resultado es:  ", resultado) 
        }