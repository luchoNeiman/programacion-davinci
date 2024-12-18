class Usuario {
    static ultimoUsuarioCreado = null;

    // Otra forma de agregar propiedades
    // Nombre = Valor
    // esAdmin = false // Propiedad pública

    // Agregamos una propiedad privada
    #esAdmin = false;
    constructor(nombre, apellido) { // Este constructor tiene los parámetros que recibe cuando se crea un objeto
        console.log(`Estamos creando un nuevo objeto`);
        console.log('El nombre de este nuevo usuario será:', nombre);

        // Agregamos una propiedad al objeto
        this.nombre = nombre;
        this.apellido = apellido;
        // this.esAdmin = false;

        // Agregamos una propiedad PRIVADA al objeto
        // this.#esAdmin = false;


        // Agregamos métodos al objeto
           this.presentarse = function () {
                return `Hola, yo soy ${this.nombre} y soy admin? (${this.#esAdmin})`;
            }
    }

    // Getters y setters
    get nombreCompleto() {
        return this.nombre + ' ' + this.apellido; // Devolvemos la propiedad "nombre" del objeto
    }

    get getEsAdmin() {
        return this.#esAdmin; // Podemos utilizar un getter para devolver una propiedad privada
    }
    // Genero un método setter para poder modificar la propiedad "esAdmin"
    set setEsAdmin(valor) {
        this.#esAdmin = valor
    }
}
// Utilizamos la plantilla
console.log('Último usuario creado: ', Usuario.ultimoUsuarioCreado);
const usuario1 = new Usuario('Pepe', 'Ramirez'); // ejecutamos el método "constructor"
console.log('Último usuario creado: ', Usuario.ultimoUsuarioCreado);
const usuario2 = new Usuario('María', 'Dominguez'); // ejecutamos el método "constructor"
console.log('Último usuario creado: ', Usuario.ultimoUsuarioCreado);
usuario1.setEsAdmin = true;
console.log(usuario1);
console.log(usuario2);
console.log(usuario1.NombreCompleto);



