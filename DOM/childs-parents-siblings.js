/*
* Sin utilizar ningún método de búsqueda, deben de encontrar las siguientes etiquetas:
  * El párrafo con el contenido "Usuarios:".
  * El segundo ítem del listado (El que tiene "Susana").
  * El <div> con el ID "botones".
  * El primer botón (El que dice "Agregar usuario").
  * 👑 Desde el primer botón, acceder al primer ítem del listado (El que tiene "Marcos").
*/
const $parrafo = document.body.firstElementChild;
console.log('$parrafo', $parrafo);

const $susana = document.body.children[1].firstElementChild.nextElementSibling;
// const $susana = document.body.children[1].children[1];
// const $susana = $parrafo.nextElementSibling.firstElementChild.nextElementSibling;
console.log('$susana', $susana);

const $botones = $parrafo.nextElementSibling.nextElementSibling;
// const $botones = document.body.lastElementChild;
console.log('$botones', $botones);
const $primerBoton = document.body.lastElementChild.firstElementChild;
// const $primerBoton = $botones.firstElementChild;
console.log('$primerBoton', $primerBoton);

const $marcos = $primerBoton.parentElement.previousElementSibling.firstElementChild;
console.log('$marcos', $marcos);