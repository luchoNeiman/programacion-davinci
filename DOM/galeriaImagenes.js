const $imagenes = document.querySelectorAll('.galeria img')

for (const $imagen of $imagenes) {
    $imagen.addEventListener('click', (evento) => {
        const $dialog = document.createElement('dialog')
        document.body.prepend($dialog)
        $dialog.showModal()
        $dialog.addEventListener('close', () =>{
            $dialog.remove()
        })
        // const $imagen = document.createElement('img')
        // $imagen.src = evento.currentTarget.src
        // $imagen.alt = evento.currentTarget.alt
        const $imagen = evento.currentTarget.cloneNode()

        const $form = document.createElement('form')
        $form.method= 'dialog'
        const $boton = document.createElement('button')
        $boton.textContent = 'cerrar'
        $form.append($boton)
        $dialog.append($imagen, $form);
        $dialog.append($imagen)
    })
}
