'use strict'

function validarCampo(mensajePrompt, mensajeError) {
  let valor;
  do {
    valor = prompt(mensajePrompt);
    if (!valor) {
      alert(mensajeError);
    }
  } while (!valor);
  return valor;
}




function validarDuracion(mensajePrompt, min, max) {
  let duracion;
  do {
    duracion = parseInt(prompt(mensajePrompt));
    if (isNaN(duracion) || duracion < min || duracion > max) {
      alert(`La duración debe estar entre ${min} y ${max} segundos.`);
    }
  } while (isNaN(duracion) || duracion < min || duracion > max);
  return duracion;
}




let discos = []; // Array que almacenará los discos agregados por el usuario:
let contDiscos = 0;




const codigoExiste = (codigo) => { //Funcion que verifica si el codigo unico existe
  return discos.some(disco => disco.codigo === codigo);
};




const cargarNuevoDisco = () => {
  let nombre, autor, codigo;

  // Validar nombre del disco
  nombre = validarCampo("Ingrese el nombre del disco", "El nombre del disco no puede estar vacío.");

  // Validar autor o banda
  autor = validarCampo("Ingrese el autor o banda del disco", "El autor o banda no puede estar vacío.");

  // Validar código numérico único entre 1 y 999
  do {
    codigo = parseInt(prompt("Ingrese un código numérico único para el disco (entre 1 y 999)"));
    if (isNaN(codigo) || codigo < 1 || codigo > 999 || codigoExiste(codigo)) {
      alert("El código debe ser un número único entre 1 y 999 que no haya sido utilizado.");
    }
  } while (isNaN(codigo) || codigo < 1 || codigo > 999 || codigoExiste(codigo));

  // Crear el objeto disco con la información básica
  const disco = {
    nombre: nombre,
    autor: autor,
    codigo: codigo,
    pistas: []
  };

  // Cargar las pistas
  let agregarOtraPista = true;
  while (agregarOtraPista) {
    let nombrePista, duracionPista;

    // Validar nombre de la pista
    nombrePista = validarCampo("Ingrese el nombre de la pista", "El nombre de la pista no puede estar vacío.");

    // Validar duración de la pista entre 0 y 7200 segundos
    duracionPista = validarDuracion("Ingrese la duración de la pista en segundos (entre 0 y 7200)", 0, 7200);

    // Agregar la pista al array de pistas del disco
    disco.pistas.push({ nombre: nombrePista, duracion: duracionPista });

    // Preguntar si quiere agregar otra pista
    agregarOtraPista = confirm("¿Desea agregar otra pista?");
  }

  // Guardar el disco en el array de discos
  discos.push(disco);
  contDiscos++; // Incrementar el contador de discos
  alert("El disco ha sido cargado exitosamente.");

  // Mostrar el contador de discos
  mostrarContadorDiscos();
  console.log(discos);
};




const mostrarContadorDiscos = () => {
  document.getElementById("contador").innerText = `Total de discos: ${contDiscos}`;
};



const mostrarDiscos = () => {
  let respuesta = '';
  let duracionMaxima = 0;
  let discoConDuracionMaxima;

  for (const disco of discos) {
    let cantidadPistas = disco.pistas.length;
    let duracionTotal = 0;
    let pistaMayorDuracion = disco.pistas[0];
    
    // Crear el bloque de información del disco primero
    let discoHTML = `
      <li>
        <h2>${disco.nombre}</h2>
        <p>Autor: ${disco.autor}</p>
        <p>Código: ${disco.codigo}</p>
        <p>Cantidad de pistas: ${cantidadPistas}</p>
    `;

    // Inicializar las pistas por separado
    let pistasHTML = '<ul><h3>Pistas:</h3>';

    for (const pista of disco.pistas) {
      duracionTotal += pista.duracion;

      if (pista.duracion > pistaMayorDuracion.duracion) {
        pistaMayorDuracion = pista;
      }

      // Generar el HTML de las pistas, según su duración
      const color = pista.duracion > 180 ? 'style="color:red;"' : '';
      pistasHTML += `<li ${color}>${pista.nombre} - ${pista.duracion} segundos</li>`;
    }

    pistasHTML += '</ul>'; // Cerrar el bloque de pistas

    // Verificar si este disco tiene la duración total más alta
    if (duracionTotal > duracionMaxima) {
      duracionMaxima = duracionTotal;
      discoConDuracionMaxima = disco;
    }

    let promedioDuracion = (duracionTotal / cantidadPistas).toFixed(2); //el toFixed nos sirvió para el tema de los decimales (acordarse de esto)

    // Completar el HTML del disco con la duración y demás datos
    discoHTML += `
        <p>Duración total del disco: ${duracionTotal} segundos</p>
        <p>Promedio de duración por pista: ${promedioDuracion} segundos</p>
        <p>Pista con mayor duración: ${pistaMayorDuracion.nombre} (${pistaMayorDuracion.duracion} segundos)</p>
      </li>`;

    // Ahora concatenar la información del disco y sus pistas en el orden correcto
    respuesta += discoHTML + pistasHTML;
  }

  // Destacar el disco con la mayor duración total
  if (discoConDuracionMaxima) {
    respuesta += `<h3>El disco con la mayor duración total es: ${discoConDuracionMaxima.nombre} (${duracionMaxima} segundos)</h3>`;
  }

  document.getElementById("respuesta").innerHTML = respuesta;
};



const buscarDisco = () => {
  let codigoBusqueda = parseInt(prompt("Ingrese el código del disco que desea buscar"));

  let discoEncontrado = discos.find(disco => disco.codigo === codigoBusqueda);

  if (discoEncontrado) {
    let cantidadPistas = discoEncontrado.pistas.length;
    let duracionTotal = 0;
    let pistaMayorDuracion = discoEncontrado.pistas[0];

    for (const pista of discoEncontrado.pistas) {
      duracionTotal += pista.duracion;
      if (pista.duracion > pistaMayorDuracion.duracion) {
        pistaMayorDuracion = pista;
      }
    }

    let promedioDuracion = duracionTotal / cantidadPistas;

    let respuesta = `
      <li>
        <h2>${discoEncontrado.nombre}</h2>
        <p>Autor: ${discoEncontrado.autor}</p>
        <p>Código: ${discoEncontrado.codigo}</p>
        <p>Cantidad de pistas: ${cantidadPistas}</p>
        <p>Duración total del disco: ${duracionTotal} segundos</p>
        <p>Promedio de duración por pista: ${promedioDuracion} segundos</p>
        <p>Pista con mayor duración: ${pistaMayorDuracion.nombre} (${pistaMayorDuracion.duracion} segundos)</p>
      </li>`;

    document.getElementById("respuesta").innerHTML = respuesta;
  } else {
    alert("No se encontró un disco con ese código.");
  }
};