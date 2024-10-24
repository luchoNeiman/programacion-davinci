// ejercicio
const $boton1 = document.querySelector('#btn-1')
const $boton2 = document.querySelector('#btn-2')

// $boton1.addEventListener('click', () => {
//     alert('Hola');
// })

// $boton2.addEventListener('click', () => {
//     console.log('evento 1');
//     console.log('evento 2');
// })
// fin de ejercicio

//accediendo al elemento
function cambiarBackground(evento) {
    this.style.backgroundColor = evento.color = 'indianred'
}

$boton1.addEventListener('click', cambiarBackground)
$boton2.addEventListener('click', cambiarBackground)