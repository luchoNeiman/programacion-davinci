// let usuario = {
//     nombre : 'pepe',
//     apellido : 'diaz',
//     edad : 20,
//     'comida favorita' : 'pizza'
// }

// usuario.direccion = 'calle falsa 1234'  //agregas una propiedad al objteto sin crearla

// delete usuario.edad //borras una propiedad

// console.log(usuario.direccion); //lees una propiedad del objeto

// usuario['helado favorito'] = 'maracuya' //agregar propiedad 

// console.log(usuario['comida favorita']); //ostrar 




//OBJETO QUE ADENTRO TIENE UN ARRAY Y ADENTRO TIENE UN OBJETO
// const usuario = {
//     'productos favoritos' : ['p1', 'p2', 'p3'],
//     direccion : {
//         altura : '1234',
//         calle : 'sarasa'
//     },
//     amigos : [
//         {
//             nombre : 'Mariana',
//         },
//         {
//             nombre : 'Susana'
//         },
//         {
//             nombre : 'Peter'
//         }
//     ]
// }
// console.log(usuario.amigos[1].nombre);



// RECORRER OBJETOS
// const salarios = {
//     juan : 100,
//     'Cool Juan' : 160,
//     liz : 130 
// }

// for (const nombre in salarios) {
//     //console.log(nombre); //asi no
//    // console.log(salarios.nombre); //asi no
//     console.log(salarios[nombre]);

// }


// //CREAR METODOS MANERA 1
// const usuario = {
//     nombre : 'Alejandro',
//     apellido : 'Martinez',
//     direccion : 'calle ficticia 123, Ciudad inventada, Pais imaginario',
//     presentarse : () => {
//         console.log(`Hola, mi nombre es ${usuario.nombre} ${usuario.apellido} y vivo en ${usuario.direccion}`)
//     }
// };

// const usuario2 = {
//     nombre : 'Sofía',
//     apellido : 'Rodriguez',
//     direccion : 'calle de los codigos 456, Ciudad de los algoritmos, Reino de las maravillas',
//     presentarse : () => {
//         console.log(`Hola, mi nombre es ${usuario2.nombre} ${usuario2.apellido} y vivo en ${usuario2.direccion}`)
//     }
// };




// //CREAR METODOS MANERA 2 (NO SIRVE MUCHO)
// function decirHola(params) {
//     console.log(`Hola, mi nombre es ${usuario.nombre} ${usuario.apellido} y vivo en ${usuario.direccion}`)
// }

// const usuario = {
//     nombre : 'Alejandro',
//     apellido : 'Martinez',
//     direccion : 'calle ficticia 123, Ciudad inventada, Pais imaginario',
//     presentarse : decirHola
// };

// const usuario2 = {
//     nombre : 'Sofía',
//     apellido : 'Rodriguez',
//     direccion : 'calle de los codigos 456, Ciudad de los algoritmos, Reino de las maravillas',
//     presentarse (){
//            console.log(`Hola, mi nombre es ${usuario.nombre} ${usuario.apellido} y vivo en ${usuario.direccion}`)
  //      }
// };





//CREAR METODOS CON THIS (ES LA QUE VA)
// function decirHola() {
//     console.log(`En esta ejecucion this es ${this}`);
    
//     console.log(`Hola, mi nombre es ${this.nombre} ${this.apellido} y vivo en ${this.direccion}`)
// }

// const usuario = {
//     nombre : 'Alejandro',
//     apellido : 'Martinez',
//     direccion : 'calle ficticia 123, Ciudad inventada, Pais imaginario',
//     presentarse : decirHola
// };

// const usuario2 = {
//     nombre : 'Sofía',
//     apellido : 'Rodriguez',
//     direccion : 'calle de los codigos 456, Ciudad de los algoritmos, Reino de las maravillas',
//     presentarse : decirHola
// };
// //NO SE PUEDE USAR THIS EN FUNCIONES FLECHA

// usuario.presentarse();
// usuario2.presentarse();

//EJEMPLO DE USO DE THIS
// let objeto = {
//     prop1 : 'v1',
//     prop2 : 'v2',
//     m1() {
//         console.log(this.prop1);  
//     },
//     prop3 : {
//         prop1 : 'v3',
//         prop2 : 'v4',
//         m1() {
//             console.log(this.prop1);  
//         }
//     }
// }

// console.log(objeto.prop3.prop1);