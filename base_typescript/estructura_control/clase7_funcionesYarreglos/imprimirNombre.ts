function imprimirNombre(nombre: string, apellido: string): void {
    const nombreCompleto = nombre + " "+apellido;
    console.log(nombreCompleto);
}


const nombre = "Juan";
const apellido = "Pérez";
imprimirNombre(nombre, apellido);