/*
 * Neiman, Luciano | Diaz, Sol
*/


// clase Producto
class Producto {
    constructor(id, nombre, descripcion, precio, imagen, imagenes, categoria) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
        this.imagenes = imagenes;
        this.categoria = categoria;
    }
}


// clase ItemCarrito
class ItemCarrito {
    constructor(producto, cantidad = 1) {
        this.id = producto.id;
        this.nombre = producto.nombre;
        this.precio = producto.precio;
        this.cantidad = cantidad;
    }
}

// array de productos (con clases)
const productos = [
    new Producto(
        1,
        'LA RIADA',
        'Las gélidas y oscuras aguas del río Blackwater inundan Perdido, un pequeño pueblo al sur de Alabama. Allí, los Caskey, un gran clan de ricos terratenientes, intentan hacer frente a los daños causados por la riada. Liderados por Mary-Love, la incontestable matriarca, y Óscar, su obediente hijo, los Caskey trabajan por recomponerse y salvaguardar su fortuna. Pero no cuentan con la aparición de la misteriosa Elinor Dammert.',
        14999,
        'img/blackwater-i-la-riada.webp',
        ['img/detalleBlackWater1.webp', 'img/detalle2BlackWater1.png', 'img/blackwater-i-la-riada.webp'],
        'Accion'
    ),
    new Producto(
        2,
        'EL DIQUE',
        'Mientras Perdido se recupera de la inundación, propone la construcción de un dique que impida una nueva catástrofe. Sin embargo, con las obras comenzarán las corrientes impredecibles y las desapariciones. Mientras tanto, en el clan Caskey, la matriarca Mary-Love ve cómo sus intereses chocan con los de Elinor, su misteriosa nuera. Las tensiones entre ambas amenazan con destruir el pueblo entero.',
        14999,
        'img/blackwater-ii-el-dique.webp',
        ['img/detalleBlackWater2.png', 'img/detalle2BlackWater2.jpg', 'img/blackwater-ii-el-dique.webp'],
        'Tristeza'
    ),
    new Producto(
        3,
        'LA CASA',
        'El clan Caskey se desmorona con la cruenta guerra personal entre Mary-Love y Elinor. En los recovecos del caserón donde viven Elinor y Oscar se esconden crisis conyugales y existenciales con repercusiones que desafían la imaginación, mientras los peores recuerdos, aquellos que uno se esfuerza por mantener ocultos, acechan para tejer sus mortíferas redes y salir a flote.',
        14999,
        './img/blackwater-iii-la-casa.jpg',
        ['img/detalleBlackWater3.webp', 'img/detalle2BlackWater3.png', './img/blackwater-iii-la-casa.jpg'],
        'Terror'
    ),
    new Producto(
        4,
        'LA GUERRA',
        'Comienza una nueva era para el clan Caskey: la persistencia y el trabajo duro de Elinor en Perdido por fin parecen dar sus frutos. Su control arraiga en los hogares de un pueblo que en el pasado desconfió de sus intenciones. Sus enemigos, poderosos antaño, decrecen en número y pierden fuerza. El conflicto armado en Europa trae sangre nueva a Perdido. En las tierras de los Caskey, los hombres van y vienen como marionetas.',
        14999,
        './img/blackwater-iv-la-guerra.webp',
        ['img/detalleBlackWater4.webp', 'img/detalle2BlackWater4.jpg', './img/blackwater-iv-la-guerra.webp'],
        'Naturaleza'
    ),
    new Producto(
        5,
        'LA FORTUNA',
        'Como un organismo vivo, el clan Caskey crece y se transforma. Unos tendrá que enfrentarse a la muerte, otros serán bendecidos con la vida. A través de acercamientos inesperados cambiarán las relaciones y el odio, finalmente, quedará enterrado. Miriam dirige ahora el aserradero y saca buen rédito de sus gestiones. Todo Perdido celebrará un sorprendente y milagroso descubrimiento.',
        14999,
        './img/blackwater-v-la-fortuna.jpg',
        ['img/detalleBlackWater5.jpg', 'img/detalle2BlackWater5.png', './img/blackwater-v-la-fortuna.jpg'],
        'Terror',
    ),
    new Producto(
        6,
        'LLUVIA',
        'Pasan los años entre suntuosas fiestas, uniones insólitas y estremecedoras revelaciones, pero nada traerá paz a la familia Caskey. Saben que, tras la calma, siempre aguarda una nueva tormenta. Algo terrible se cierne sobre Perdido, sus habitantes y su río. Ha llegado el momento de la profecía.',
        14999,
        './img/blackwater-vi-lluvia.webp',
        ['img/detalleBlackWater6.jpg', 'img/detalle2BlackWater6.png', './img/blackwater-vi-lluvia.webp'],
        'Tristeza',
    ),

];

// administrador del carrito
const carrito = {
    items: [],
    calcularTotal() {
        console.log('Calculando total...');
        return this.items.reduce((total, item) => total + item.precio * item.cantidad, 0);
    },
    calcularCantidad() {
        console.log('Calculando cantidad...');
        return this.items.reduce((cantidad, item) => cantidad + item.cantidad, 0);
    },
    guardarEnLocalStorage() {
        localStorage.setItem('carrito', JSON.stringify(this.items));
    },
    cargarDesdeLocalStorage() {
        const carritoGuardado = JSON.parse(localStorage.getItem('carrito')) || [];
        this.items = carritoGuardado.map(item => new ItemCarrito(item, item.cantidad));
    }
};


// llamadas al dom
const listaProductos = document.getElementById('productos');
const miniCarritoCantidad = document.querySelector('.items-agregados');
const miniCarritoTotal = document.querySelector('.precio-acumulado');
const contenedorModal = document.getElementById('modal');
const filtroCategorias = document.getElementById('filtro-categorias');


let bannerActual = null; // para almacenar el banner flotante actual

const banners = {
    'Terror': './img/bannerTerror.jpg',
    'Tristeza': './img/bannerTristeza.jpg',
    'Accion': './img/bannerAccion.jpg',
    'Naturaleza': './img/bannerNaturaleza.jpg',
    'Todas': './img/bannerTodas.jpg'
};


// FUNCION PARA MOSTRAR EL BANNER FLOTANTE
function mostrarBannerFlotante(categoria) {
    const imagen = banners[categoria] || banners['Todas'];
    if (bannerActual) { // Si ya hay un banner, eliminarlo antes de mostrar el nuevo
        bannerActual.remove();
    }

    // Crear el nuevo banner
    const banner = document.createElement('div');
    banner.classList.add('banner-flotante');

    // Crear la imagen dentro del banner
    const img = document.createElement('img');
    img.src = imagen;
    img.alt = `Oferta especial en ${categoria}`;
    banner.appendChild(img);

    // Crear la cruz para cerrar el banner
    const cruz = document.createElement('button');
    cruz.textContent = 'X';
    cruz.classList.add('cerrar-banner');
    cruz.addEventListener('click', () => {
        banner.remove();
        bannerActual = null; // para asegurarse de que el banner actual sea nulo al cerrarlo
    });
    banner.appendChild(cruz);

    if (categoria === 'Terror') {
        banner.style.cursor = 'pointer';
        banner.addEventListener('click', () => {
            mostrarDetalleProducto(3);
        });
    }

    document.body.appendChild(banner);
    bannerActual = banner;

    setTimeout(() => {
        banner.remove();
        bannerActual = null;
    }, 10000);
}


// FUNCION PARA CARGAR LOS PRODUCTOS
function renderizarProductos(productosFiltrados = productos) {
    listaProductos.innerText = '';

    for (const producto of productosFiltrados) {
        const li = document.createElement('li');

        const img = document.createElement('img');
        img.src = producto.imagen;
        img.alt = producto.nombre;

        const div = document.createElement('div');

        const h3 = document.createElement('h3');
        h3.textContent = producto.nombre;

        const precio = document.createElement('p');
        precio.textContent = 'Precio: $';
        const spanPrecio = document.createElement('span');
        spanPrecio.textContent = producto.precio;
        precio.append(spanPrecio);

        const categoria = document.createElement('p');
        categoria.textContent = `Categoría: ${producto.categoria}`;

        const boton = document.createElement('button');
        boton.textContent = 'Ver detalle';
        boton.dataset.id = producto.id;
        boton.dataset.action = 'ver-detalle';

        const botonAgregar = document.createElement('button');
        botonAgregar.textContent = 'Agregar al carrito';
        botonAgregar.dataset.id = producto.id;
        botonAgregar.addEventListener('click', () => {
            agregarAlCarrito(producto.id);
        });

        div.append(h3, precio, categoria, boton, botonAgregar);
        li.append(img, div);
        listaProductos.append(li);
    }

}

// EVENTO PARA FILTRAR POR CATEGORIAS
filtroCategorias.addEventListener('change', (e) => {
    const categoriaSeleccionada = e.target.value;
    mostrarBannerFlotante(categoriaSeleccionada);

    if (categoriaSeleccionada === 'Todas') {
        renderizarProductos();
    } else {
        const productosFiltrados = productos.filter(producto => producto.categoria === categoriaSeleccionada);
        renderizarProductos(productosFiltrados);
    }
});


// FUNCION PARA AGREGAR UN PRODUCTO AL CARRITO
function agregarAlCarrito(id) {
    console.log('Agregando producto al carrito...');

    const producto = productos.find(p => p.id === id);

    if (producto) {
        const itemExistente = carrito.items.find(item => item.id === id);

        if (itemExistente) {
            itemExistente.cantidad++;
        } else {
            carrito.items.push(new ItemCarrito(producto));
        }

        // Verificar estado del carrito
        console.log('Carrito actualizado:', carrito.items);
        actualizarMiniCarrito();
        carrito.guardarEnLocalStorage(); // Guardar en Local Storage
    } else {
        console.error('Producto no encontrado');
    }
}

// FUNCION PARA ACTUALIZAR EL MINI CARRITO
function actualizarMiniCarrito() {
    console.log('Actualizando mini carrito...');
    miniCarritoCantidad.textContent = carrito.calcularCantidad();
    miniCarritoTotal.textContent = carrito.calcularTotal().toFixed(2);
}

// EVENTO PARA CARGAR CARRITO DESDE LOCAL STORAGE
document.addEventListener('DOMContentLoaded', () => {
    carrito.cargarDesdeLocalStorage();
    actualizarMiniCarrito();
});

// EVENTO PARA BOTON VER DETALLE
listaProductos.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' && e.target.dataset.action === 'ver-detalle') {
        const idProducto = parseInt(e.target.dataset.id);
        mostrarDetalleProducto(idProducto);
    }
});


// FUNCION PARA MOSTRAR EL DETALLE DEL PRODUCTO
function mostrarDetalleProducto(id) {
    console.log('entra a mostrarDetalleProducto');
    const producto = productos.find(p => p.id === id);

    if (producto) {
        const modal = document.createElement('dialog');
        modal.classList.add('modal');

        const detalle = document.createElement('div');
        detalle.classList.add('detalle');

        const contenedorCarrusel = document.createElement('div');
        contenedorCarrusel.classList.add('carousel');

        const imgGrande = document.createElement('img');
        imgGrande.src = producto.imagenes[0];
        imgGrande.alt = producto.nombre;
        imgGrande.classList.add('imagen-grande');

        contenedorCarrusel.appendChild(imgGrande);

        const contenedorMiniaturas = document.createElement('div');
        contenedorMiniaturas.classList.add('miniaturas');

        let indiceActual = 0;


        // Agregar imágenes pequeñas
        producto.imagenes.forEach((src, index) => {
            const miniatura = document.createElement('img');
            miniatura.src = src;
            miniatura.alt = `Miniatura ${index + 1}`;
            miniatura.classList.add('miniatura');

            miniatura.addEventListener('click', () => {
                imgGrande.src = src;
                indiceActual = index;
            });

            contenedorMiniaturas.appendChild(miniatura);
        });

        contenedorCarrusel.appendChild(contenedorMiniaturas);

        const h3 = document.createElement('h3');
        h3.textContent = producto.nombre;

        const descripcion = document.createElement('p');
        descripcion.textContent = producto.descripcion;

        const precio = document.createElement('p');
        precio.textContent = `Precio: $${producto.precio}`;

        const categoria = document.createElement('p');
        categoria.textContent = `Categoría: ${producto.categoria}`;

        const footer = document.createElement('footer');
        const botonCerrar = document.createElement('button');
        botonCerrar.textContent = 'Cerrar';
        const botonAgregar = document.createElement('button');
        botonAgregar.textContent = 'Agregar';
        botonAgregar.dataset.id = producto.id;

        footer.append(botonCerrar, botonAgregar);

        detalle.append(contenedorCarrusel, h3, descripcion, precio, categoria, footer);
        modal.append(detalle);
        contenedorModal.append(modal);

        modal.showModal();

        function manejarTeclas(e) {
            if (e.key === 'ArrowLeft') {
                // Mover a la imagen anterior
                indiceActual = (indiceActual - 1 + producto.imagenes.length) % producto.imagenes.length;
                imgGrande.src = producto.imagenes[indiceActual];
            } else if (e.key === 'ArrowRight') {
                // Mover a la imagen siguiente
                indiceActual = (indiceActual + 1) % producto.imagenes.length;
                imgGrande.src = producto.imagenes[indiceActual];
            } else if (e.key === 'Escape') {
                // Cerrar modal con tecla Escape
                modal.close();
                contenedorModal.removeChild(modal);
                document.removeEventListener('keydown', manejarTeclas);
            }
        }

        document.addEventListener('keydown', manejarTeclas);

        botonCerrar.addEventListener('click', () => {
            modal.close();
            contenedorModal.removeChild(modal);
            document.removeEventListener('keydown', manejarTeclas);
        });

        botonAgregar.addEventListener('click', () => {
            agregarAlCarrito(id);
            modal.close();
            contenedorModal.removeChild(modal);
            document.removeEventListener('keydown', manejarTeclas);
        });
    }
}


// FUNCION PARA CERRAR TODOS LOS MODALES
function cerrarModales() {
    const modalesAbiertos = document.querySelectorAll('dialog');
    modalesAbiertos.forEach(modal => {
        modal.close();
        modal.remove();
    });
}


// boton para ver el carrito
const botonVerCarrito = document.querySelector('#ver-carrito');


// FUNCIÓN PARA MOSTRAR EL MODAL DEL CARRITO
function mostrarCarrito() {

    // Cerrar cualquier modal previo
    cerrarModales();

    const modal = document.createElement('dialog');
    modal.classList.add('modal');
    modal.style.zIndex = '100';

    const carritoDiv = document.createElement('div');
    carritoDiv.classList.add('carrito');

    const header = document.createElement('header');
    const cantidadProductos = document.createElement('span');
    cantidadProductos.textContent = `Productos: ${carrito.calcularCantidad()}`;
    const totalPrecio = document.createElement('span');
    totalPrecio.textContent = ` Total: $${carrito.calcularTotal().toFixed(2)}`;
    header.append(cantidadProductos, totalPrecio);

    const listaProductos = document.createElement('ul');
    if (carrito.items.length === 0) {
        const mensajeVacio = document.createElement('li');
        mensajeVacio.textContent = 'El carrito está vacío.';
        listaProductos.append(mensajeVacio);
    } else {
        carrito.items.forEach(item => {
            const li = document.createElement('li');
            const subtotal = item.precio * item.cantidad;
            li.textContent = `${item.nombre} - ${item.cantidad} x $${item.precio} = $${subtotal.toFixed(2)}`;

            const botonEliminar = document.createElement('a');
            botonEliminar.href = '#';
            botonEliminar.textContent = 'Eliminar';
            botonEliminar.addEventListener('click', (e) => {
                e.preventDefault();
                eliminarProductoDelCarrito(item.id);
                modal.close();
                mostrarCarrito(); // Actualiza el modal
            });

            li.append(' ', botonEliminar);
            listaProductos.append(li);
        });
    }

    const footer = document.createElement('footer');
    const botonCerrar = document.createElement('button');
    botonCerrar.textContent = 'Cerrar';

    if (carrito.items.length > 0) {
        const botonVaciar = document.createElement('button');
        botonVaciar.textContent = 'Vaciar';
        botonVaciar.addEventListener('click', () => {
            vaciarCarrito();
            modal.close();
            mostrarCarrito();
        });

        const botonCheckout = document.createElement('button');
        botonCheckout.textContent = 'Checkout';
        botonCheckout.addEventListener('click', () => {
            mostrarCheckout();
        });
        footer.append(botonCerrar, botonVaciar, botonCheckout);
    } else {
        footer.append(botonCerrar);
    }

    botonCerrar.addEventListener('click', () => {
        cerrarModal(modal)
    });

    function cerrarModal(modal) {
        if (modal && modal.parentNode) {
            modal.close();
            modal.parentNode.removeChild(modal); // Elimina el nodo solo si tiene un padre
        }
    }

    carritoDiv.append(header, listaProductos, footer);
    modal.append(carritoDiv);
    document.body.append(modal);

    contenedorModal.append(modal);
    modal.showModal();
}


// FUNCIÓN PARA ELIMINAR UN PRODUCTO DEL CARRITO
function eliminarProductoDelCarrito(id) {
    console.log(`Eliminando producto con id ${id} del carrito...`);
    carrito.items = carrito.items.filter(item => item.id !== id);

    carrito.guardarEnLocalStorage();
    actualizarMiniCarrito();
    mostrarCarrito();
}


// FUNCIÓN PARA VACIAR EL CARRITO
function vaciarCarrito() {
    console.log('Vaciando el carrito...');
    carrito.items = [];
    carrito.guardarEnLocalStorage();
    actualizarMiniCarrito();
}


// asociar el evento al boton de ver carrito
botonVerCarrito.addEventListener('click', mostrarCarrito);


// FUNCION PARA MOSTRAR EL MODAL DE CHECKOUT
function mostrarCheckout() {
    cerrarModales();

    const modal = document.createElement('dialog');
    modal.classList.add('modal-checkout');

    const checkoutDiv = document.createElement('div');
    checkoutDiv.classList.add('checkout');

    const h3 = document.createElement('h3');
    h3.textContent = 'Realizar el pago';

    const form = document.createElement('form');
    form.classList.add('checkout-form');

    const campos = [
        crearCampoFormulario({
            tipo: 'text',
            label: 'Nombre completo',
            nombre: 'nombre',
            validacion: /^[a-zA-Z\s]+$/,
            mensaje: 'El nombre solo debe contener letras y espacios.'
        }),
        crearCampoFormulario({
            tipo: 'tel',
            label: 'Teléfono',
            nombre: 'telefono',
            validacion: /^\d{7,15}$/, // Solo números con longitud entre 7 y 15 (lo busque por google)
            mensaje: 'El teléfono debe contener solo números (7 a 15 dígitos).'
        }),
        crearCampoFormulario({
            tipo: 'email',
            label: 'Email',
            nombre: 'email',
            validacion: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, // Validación básica de email (lo busque por google)
            mensaje: 'Por favor, ingresa un email válido.'
        }),
        crearCampoFormulario({
            tipo: 'text',
            label: 'Lugar de entrega',
            nombre: 'lugar',
            validacion: /.+/,
            mensaje: 'Este campo no puede estar vacío.'
        }),
        crearCampoFormulario({
            tipo: 'date',
            label: 'Fecha de entrega',
            nombre: 'fecha-entrega',
            validacion: /.+/,
            mensaje: 'Este campo no puede estar vacío.'
        })
    ];

    campos.forEach(campo => form.appendChild(campo.div)); // Agrega solo los nodos 'div'

    // Footer con botones
    const footer = document.createElement('footer');
    const botonCancelar = document.createElement('button');
    botonCancelar.type = 'button';
    botonCancelar.textContent = 'Cancelar';
    botonCancelar.addEventListener('click', () => {
        modal.close();
        document.body.removeChild(modal);
    });

    const botonPagar = document.createElement('button');
    botonPagar.type = 'submit';
    botonPagar.textContent = 'Continuar';


    botonPagar.addEventListener('click', (e) => {
        e.preventDefault();
        let valido = true;

        campos.forEach(({ div, validacion, mensaje }) => {
            const input = div.querySelector('input');
            if (!validacion.test(input.value.trim())) {
                valido = false;
                marcarCampoInvalido(input, mensaje);
            } else {
                limpiarCampoInvalido(input);
            }
        });

        if (valido) {
            modal.close();
            document.body.removeChild(modal);
            mostrarModalPago();
        }
    });
    footer.append(botonCancelar, botonPagar);
    checkoutDiv.append(h3, form, footer);
    modal.append(checkoutDiv);
    document.body.append(modal);

    modal.showModal();
}


// FUNCION PARA CREAR CAMPOS DEL FORMULARIO
function crearCampoFormulario({ tipo, label, nombre, validacion, mensaje }) {
    const div = document.createElement('div');
    const labelElement = document.createElement('label');
    labelElement.textContent = label;
    labelElement.htmlFor = nombre;  // refleja el valor de la propiedad de contenido for. Esto significa que esta propiedad accesible mediante scripts se utiliza para establecer y leer el valor de la propiedad de contenido for , que es el ID del elemento de control asociado a la etiqueta.

    const input = document.createElement('input');
    input.type = tipo;
    input.name = nombre;
    input.id = nombre;
    input.required = true;

    // Validación al perder el foco
    input.addEventListener('blur', () => {
        if (!validacion.test(input.value.trim())) {
            marcarCampoInvalido(input, mensaje);
        } else {
            limpiarCampoInvalido(input);
        }
    });

    div.appendChild(labelElement);
    div.appendChild(input);

    return { div, validacion, mensaje };
}

// FUNCION PARA MARCAR UN CAMPO COMO INVÁLIDO
function marcarCampoInvalido(input, mensaje) {
    input.classList.add('campo-invalido');
    input.setCustomValidity(mensaje);

    if (!input.nextElementSibling) {
        const errorMensaje = document.createElement('span');
        errorMensaje.textContent = mensaje;
        errorMensaje.classList.add('mensaje-error');
        input.parentElement.appendChild(errorMensaje);
    }
}

// FUNCION PARA LIMPIAR LA MARCA DE CAMPO INVÁLIDO
function limpiarCampoInvalido(input) {
    input.classList.remove('campo-invalido');
    input.setCustomValidity('');

    const errorMensaje = input.parentElement.querySelector('.mensaje-error');
    if (errorMensaje) {
        errorMensaje.remove();
    }
}

// FUNCION PARA MOSTRAR LA ELECCION DEL METODO DE PAGO 
function mostrarModalPago() {
    const modalPago = document.createElement('dialog');
    modalPago.classList.add('modal-pago');

    const formularioPago = document.createElement('form');

    const titulo = document.createElement('h3');
    titulo.textContent = 'Seleccione su método de pago y cuotas';

    const metodoPagoLabel = document.createElement('label');
    metodoPagoLabel.textContent = 'Método de pago:';
    metodoPagoLabel.setAttribute('for', 'metodo-pago');

    const metodoPagoSelect = document.createElement('select');
    metodoPagoSelect.id = 'metodo-pago';
    metodoPagoSelect.required = true;

    const opcionTarjeta = document.createElement('option');
    opcionTarjeta.value = 'tarjeta';
    opcionTarjeta.textContent = 'Tarjeta de Crédito/Débito';

    const opcionEfectivo = document.createElement('option');
    opcionEfectivo.value = 'efectivo';
    opcionEfectivo.textContent = 'Efectivo';

    metodoPagoSelect.append(opcionTarjeta, opcionEfectivo);

    const cuotasLabel = document.createElement('label');
    cuotasLabel.textContent = 'Cuotas:';
    cuotasLabel.setAttribute('for', 'cuotas');

    const cuotasSelect = document.createElement('select');
    cuotasSelect.id = 'cuotas';
    cuotasSelect.required = true;

    for (let i = 1; i <= 12; i++) {
        const opcionCuota = document.createElement('option');
        opcionCuota.value = i;
        opcionCuota.textContent = `${i} cuota${i > 1 ? 's' : ''}`;
        cuotasSelect.append(opcionCuota);
    }

    const botonesContainer = document.createElement('div');
    botonesContainer.classList.add('botones-container');

    const botonCancelar = document.createElement('button');
    botonCancelar.textContent = 'Cancelar';
    botonCancelar.type = 'button';
    botonCancelar.addEventListener('click', () => {
        modalPago.close();
        modalPago.remove();
    });

    const botonFinalizar = document.createElement('button');
    botonFinalizar.textContent = 'Finalizar Pago';
    botonFinalizar.type = 'button';
    botonFinalizar.addEventListener('click', () => {
        if (metodoPagoSelect.value && cuotasSelect.value) {
            console.log('Entrando al if del finalizar compra');
            modalPago.close();
            modalPago.remove();
            mostrarModalExitoPago()
            finalizarCompra()
            carrito.guardarEnLocalStorage();
        }
    })

    botonesContainer.append(botonCancelar, botonFinalizar);

    formularioPago.append(titulo, metodoPagoLabel, metodoPagoSelect, cuotasLabel, cuotasSelect, botonesContainer);
    modalPago.append(formularioPago);

    document.body.appendChild(modalPago);
    modalPago.showModal();
}


// FUNCION PARA FINALIZAR COMPRA
function finalizarCompra() {
    carrito.items = [];
    actualizarMiniCarrito();
}


// FUNCIÓN PARA MOSTRAR MODAL DE PAGO EXITOSO
function mostrarModalExitoPago() {
    const modal = document.createElement('div');
    modal.classList.add('modal-pago-exitoso')

    const cerrarBtn = document.createElement('button');
    cerrarBtn.textContent = 'X';
    cerrarBtn.classList.add('modal-pago-exitoso-cruz')
    cerrarBtn.title = 'Cerrar';
    cerrarBtn.addEventListener('click', () => {
        modal.remove();
    });
    modal.appendChild(cerrarBtn);
    document.body.appendChild(modal);

    setTimeout(() => {
        modal.remove();
    }, 5000);
}

renderizarProductos();  //muestro los productos por pantalla