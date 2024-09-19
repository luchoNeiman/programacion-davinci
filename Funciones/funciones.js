let siglas;

function ingresarSigla() {
   
    do {
        siglas = prompt("Ingrese las siglas de la carrera");
    } while (siglas !== "dw" && siglas !== "dm" && siglas !== "dg");
} 

function mostrarCarrera() {
    let respuesta = "";
    switch (siglas) {
        case "dw":
            respuesta += 'Diseño y Desarrollo web';
            break;
        case "dm":
            respuesta += 'Diseño Multimedial';
            break;
        case "dg":
            respuesta += 'Diseño Grafico';
            break;
        default:
            respuesta += 'Primero debe ingresar las siglas.'
            break;  
    }
    console.log(respuesta);
}