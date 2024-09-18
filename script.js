let materias = [
    [10, 9, 10],
    [8, 5, 5],
    [7, 8, 5]
]; 

function mostrarNotas(params) {
    let notaMayor = -Infinity;

    for (let materia of materias) {
        console.log("Estoy recorriendo la siguiente materia: " + materia);

        let sumaNotas = 0;
        for (const nota of materia) {
            sumaNotas += nota;
            notaMayor = nota > notaMayor ? nota : notaMayor;
        }
        console.log("La suma de las notas es: " + sumaNotas);
        let promedio = sumaNotas / materia.length;
        console.log("El promedio es: " + promedio);
    }
}

function ingresarNota(params) {
    let notas = [];
    for (let i = 0; i < 3; i++) {
        let nota;
        do {
            nota = +prompt('Ingrese la nota')
        } while (!(nota >= 1 && nota <= 10));

        notas.push(nota);
    }    
}


















// function mostrarInfo() {
//     let promedio = 0;
//     let mayor = 0;

//     for (let i = 0; i < notas.length; i++) {
        

        
//         suma = suma + notas[i];
//         console.log(suma);    
//         suma = 0;
        
//         if (condition) {
            
//         }
        
       
        

//     }
// }