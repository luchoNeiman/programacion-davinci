
let arrayNombres = [];
function ingresarNombre() {
    let nombre;    
    
    do {
        nombre = prompt("Ingrese un nombre:");    
    } while (!isNaN(nombre));
    
    arrayNombres.push(nombre);

    console.table(arrayNombres);
}
