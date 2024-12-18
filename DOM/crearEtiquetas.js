const $lista = document.querySelector('#lista')

// EJERCICIO 1
const $h1 = document.createElement('h1')
$h1.textContent = 'Título'
$lista.before($h1)

// EJERCICIO 2
const $item1 = document.createElement('li')
$item1.textContent = 'Item 1'
$lista.prepend($item1)

// EJERCICIO 3
const $item3 = document.createElement('li')
$item3.textContent = 'Item 3'
$lista.children[1].after($item3)

// EJERCICIO 4
const $item5 = document.createElement('li')
$item5.textContent = 'Item 5'
$lista.append($item5)

// EJERCICIO 5
const $boton = document.createElement('button')
$boton.textContent = 'clickeame'
$lista.after($boton)
// extra
$boton.addEventListener('click', () => {
    if (document.querySelector('#lista')) {
        $lista.remove()
        
    } else {
        $boton.before($lista)
    }
})