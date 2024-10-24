function cambiarImagenes(sentido = 1) {
    // Cambiar la posición actual
    posicionActual += sentido;

    // Limitamos el movimiento a las últimas 3 imágenes
    if (sentido === 1 && posicionActual > imagenes.length - 3) {
        posicionActual = imagenes.length - 3;
    } else if (sentido !== 1 && posicionActual < 0) {
        posicionActual = 0;
    }
    // Recorremos las imágenes para cambiarle su src
    // for (let i = 0; i < $imagenes.length; i++) {}
    $imagenes.forEach(($imagen, i) => {
        $imagen.src = 'imagenes/' + imagenes[i + posicionActual].src;
        $imagen.alt = imagenes[i + posicionActual].alt;
    })

    cambiarImagen($imagenes[0])
}
function cambiarImagen($imagen) {
    $imagenGrande.src = $imagen.src;
    $imagenGrande.alt = $imagen.alt;
}