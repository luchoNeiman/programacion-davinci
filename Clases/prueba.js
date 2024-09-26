class Auto {
    constructor(marca, modelo, anio) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.mostrarInfo = function () {
            return `Tengo un auto ${this.marca}, modelo ${this.modelo} y es del año ${this.anio}`;

        }
    }
}

const auto1 = new Auto('Fiat', 'Chronos', 2021);
const auto2 = new Auto('Chevrolet', 'Cobalt', 2008);

console.log(auto1);
console.log(auto2);
console.log(auto1.mostrarInfo());







class Estacionamiento {
    // Agregamos la propiedad "autos"
    autos = [];

    // Agregamos el método para guardar autos
    agregarAuto(auto) {
        this.autos.push(auto);
    }
    // Agregamos el método para listar los autos
    mostrarAutos() {
        let respuesta = `<ul>`;

        for (const auto of this.autos) {
            respuesta += `<li>${auto.mostrarInfo()}</li>`
        }

        respuesta += '</ul>';

        return respuesta;
    }
}


const estacionamiento = new Estacionamiento()

const auto3 = new Auto('Fiat', 'Chronos', 2021);
const auto4 = new Auto('Chevrolet', 'Cobalt', 2008);

console.log('auto 1 ', auto1);
console.log('auto 2 ', auto2);
console.log(estacionamiento.agregarAuto(auto3));


