const boton = document.getElementById('tema')
const temaActual = document.getElementById('tema-actual')
const body = document.querySelector('body')

const configuracion = JSON.parse(localStorage.getItem('configuracion')) ?? {tema: 'claro'};

boton.addEventListener('click', () => {
    if (configuracion.tema === 'claro') {
        configuracion.tema = "oscuro"
        
    } else {
        configuracion.tema = 'claro'
    }

    temaActual.textContent = `Tema actual: ${configuracion.tema}`;

    localStorage.setItem('configuracion', JSON.stringify(configuracion))
})

temaActual.textContent = `Tema actual: ${configuracion.tema}`;