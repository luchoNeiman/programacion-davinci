// const $formulario = document.forms[0];
// $formulario.elements[1]
// $formulario.elements.correo
// $formulario.correo

// console.log($formulario.correo);


const $genero = document.querySelector('#genero')
const $seleccionado = document.querySelectorAll('#seleccionado')

console.log($genero.selectedIndex);

const $optionSeleccionado = $genero.options[ $genero.selectedIndex]
$seleccionado.textContent = `${$optionSeleccionado.value} - ${$optionSeleccionado.textContent}`

const $nuevoOption = document.createElement('option')
$nuevoOption.value = 'g-pop';
$nuevoOption.textContent = 'Pop'
$genero.append($nuevoOption)
$genero.value = 'g-pop'

