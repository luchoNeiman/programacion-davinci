
const calcularImpuesto = (precio, impuesto = 21) => {
    if (impuesto === null) {
        console.log("Usamos el valor por defecto");
        impuesto = 21;
    } 
    const iva = precio / impuesto * 100;
    const total = precio + iva;

    return `Precio: ${precio} - IVA: ${iva}% - Total: ${total}`;


}


let precioRecibido, impuestoRecibido;
do {
    precioRecibido = parseFloat(prompt("Ingrese el precio del producto:"));    
} while (isNaN(precioRecibido));

do {
    impuestoRecibido = prompt(`Ingrese el impuesto a calcular sobre el producto (0-100).
        Si selecciona cancelar se utilizara el valor por defecto (21).`

    );

    impuestoRecibido = impuestoRecibido === null ? 21 : impuestoRecibido;
    impuestoRecibido = parseFloat(impuestoRecibido);

} while (!(impuestoRecibido >= 0 && impuestoRecibido <= 100));

console.log(calcularImpuesto(precioRecibido,impuestoRecibido));
 









