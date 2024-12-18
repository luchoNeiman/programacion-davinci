function Auto(marca, modelo, anio) {
    
this.marca = marca;
this.modelo = modelo;
this.anio = anio;

this.mostrarInfo = function () {
    return `El auto es de marca ${this.marca}, modelo ${this.modelo} y es del año ${this.anio}`
}

}

const auto1 = new Auto('Fiat', 'Chronos', 2021)
const auto2 = new Auto('Ford', 'Fiesta', 2007)
const auto3 = new Auto('Chevrolet', 'Cobalt', 2013)

console.log(auto1.mostrarInfo());
console.log(auto2.mostrarInfo());
console.log(auto3.mostrarInfo());