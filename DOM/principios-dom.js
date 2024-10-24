
// BUSCAMOS LA ETIQEUTA POR SU ID

const $lista1 = document.getElementById('lista1');
console.log($lista1)

const $lista2 = document.querySelector('#lista2')
console.log('$lista2', $lista2);


// BUSCAMOS EL PRIMER LI
const $primerItem = document.querySelector('li')
console.log('$primerItem', $primerItem);


// BUSCAMOS TODOS LOS LI
const $items = document.querySelectorAll('main li')
console.log('$items', $items);

// QUE SE ITERABLE SIGNIFICA QUE SE LO PUEDE RECORRER
// for (const $item of $items) {
//     console.log('$items' , $items);
// }


// TRANSFORMAMOS EL NODELIST A UN ARRAY
const $arrayDeItems = Array.from($items)
console.log('$arrayDeItems', $arrayDeItems);


// BUSCAMOS LOS LI DENTRO DE LISTA1
const $items_lista1 = $lista1.querySelectorAll('li')
console.log($items_lista1);



// ATRIBUTOS
const $lista = document.getElementById('lista1')

// CAMBIAMOS EL ID DE LISTA 1
$lista1.id = 'listado'


// CREAMOS UNA CLASE PARA LISTA 1
$lista1.className = 'listita'
$lista1.classList.add('clase-2')
$lista1.classList.remove('clase-2')
$lista1.classList.toggle('clase-2')


// CREAMOS EL ATRIBUTO TITLE A LISTA1
$lista1.title = 'Este titulo se agrego desde javascript'


console.log('$lista1.id', $lista1.id);
console.log('$lista1.title', $lista1.title);
console.log('$lista1.class', $lista1.className);
// console.log('$lista1.nombre' , $lista1.nombre); NO DEVUELVE NADA YA QUE NO ES UN ATRIBUTO STANDAR
console.log('$lista1.', $lista1.dataset.info);


const $imagen = document.querySelector('#blog4')
console.log($imagen);
console.log('$imagen.src', $imagen.src);
console.log($imagen.attributes.src.value);



// Estilos
$lista1.style.cssText = 'color: indianred; background-color: cornflowerblue'
// $lista1.style.color = 'indianred';
// $lista1.style.backgroundColor = 'blue'



// OTRO HTML que no lo tengo
// contenido interno
const $titulo = document.querySelector('h2')
console.log('$titulo', $titulo);
console.log('$titulo.textContent', $titulo.textContent);

$titulo.textContent = 'Modificamos el titulo desde javascript'

const $lista01 = document.querySelector('#lista1')
console.log('$lista1', $lista01);
console.log('$lista1.textContent', $lista01.textContent);
console.log('$lista1.innerHTML', $lista01.innerHTML);

$lista01.innerHTML += '<li> item 9 </li>'






