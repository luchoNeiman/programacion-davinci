// let colores = ['rojo', 'verde', 'azul', 'rojo', 'blanco', 'negro', 'verde'];

// Sintaxis     (elemento, indice, arrayRecorriendo) => {}
// colores.forEach((color, indice, coloresArray) => {
  // console.log('Estoy dando una vuelta.');
//   console.log(indice, color);

// })




// let lados = [1,1,2,3,5,8]
// ANTES DEL MAP
// let ladosMultiplicadosPorDos = []

// for (const lado of lados) {
//     ladosMultiplicadosPorDos.push(lado*2)
// }

// console.log(ladosMultiplicadosPorDos);


// CON EL MAP
// const ladosPorDos = lados.map((lado) => {
//     return lado*2
// })

// console.table(ladosPorDos)





// EJEMPLO 2 DE MAP
// const personas = [
//     {nombre: 'Marcos', apellido: 'Diaz'},
//     {nombre: 'Susana', apellido: 'Ramirez'},
//     {nombre: 'Liz', apellido: 'Perez'}
// ]



// const nombresCompletos = personas.map ((persona) => {
//     console.log(persona);
//     return persona.nombre + '' + persona.apellido;
// })
// console.log(nombresCompletos);



// FILTER filtra los numero que cumplan con tal condicion
// let numeros = [1,2,3,4,5,8,13,21,34]


// const numerosPares = numeros.filter((numero) => {
    // if (numero % 2 == 0) {
    //     return true;
    // } else {
    //     return false;
    // } OPCION 1
    // return numero % 2 === 0 ? true : false; OPCION 2
    // return numero % 2 === 0; OPCION 3 
// })


// OPCION MAS CORRECTA

// const numerosPares = numeros.filter((numero) => numero % 2 == 0)
// console.table(numerosPares)




// CON FIND filtra el numero pero solo el primero

// const primerNumeroPar = numeros.find((numero) => numero % 2 == 0)
// const primerNumeroMayorA10 = numeros.find((numero) => numero > 100)

// console.log(primerNumeroPar);
// console.log(primerNumeroMayorA10);




// REDUCE
// let numeros = [1,2,3,4,5,8,13,21,34,10]

// const suma = numeros.reduce((acumulador, numero) => {   
//     return acumulador + numero;
// }, '0')



// const suma = numeros.reduce((acumulador, numero) => acumulador + numero)
// console.log(suma);





// toString
// let frutas = ['banana', 'limon', 'manzana', 'mango']
// let lastFrutas = frutas.toString()
// let lastFrutas = frutas.join(', ')

// console.log(lastFrutas);
