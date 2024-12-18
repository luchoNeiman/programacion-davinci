// ejercicio 1
const $idH1 = document.getElementById('titulo')
console.log($idH1);
$idH1.id = 'titulo-principal'
console.log($idH1);

// ejercicio 2
const $valorHref = document.querySelector('a')
console.log($valorHref);
console.log($valorHref.href);
console.log($valorHref.attributes.href.value);
console.log($valorHref.dataset.info);

// ejercicio 3
const $parrafo = document.querySelector('#parrafo')
$parrafo.style.color = 'aliceblue'
$parrafo.style.fontSize = '24px'