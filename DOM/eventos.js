const $boton1 = document.querySelector('#btn-1');
console.log('$boton1', $boton1);

// Agregamos el evento clic al botón


// En JavaScript, tenemos que pasar una función callback al atributo del evento
$boton1.onclick = () => {
    console.log('Esto es un evento desde JavaScript');
}

// Si utilizamos una función que ya existe, no tenemos que agregar los paréntesis
// function f1() {
//     console.log('esto es otro evento mas');

// }
// $boton1.onclick = f1


// agregamos 2 funciones a un solo evento
// function f1() {
//     console.log('esto es otro evento mas');
// }

// function f2() {
//     console.log('esto es otro evento mas');

// }

//addEventListener y removeEventListener

// agregamos el evento click al boton
$boton1.addEventListener('click', () => {
    console.log('Se activo el evento');
})

$boton1.addEventListener('click', () => {
    console.log('Otra funcion');
})