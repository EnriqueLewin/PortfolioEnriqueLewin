function mostrar() {
    div = document.getElementById('ventanaModal');
    div.style.display = '';
}

function cerrar() {
    div = document.getElementById('ventanaModal');
    div.style.display = 'none';
}

function ocultarHeader() {
    div = document.getElementById('divHeader')
    div.style.visibility = 'hidden';
}

function mostrarHeader() {
    div = document.getElementById('divHeader')
    div.style.visibility = 'visible';
}

function opacarBody() {
    div = document.getElementById('opacar');
}

function boton() {
    const boton = document.getElementById('open');
    boton.addEventListener('click', mostrar);
    boton.addEventListener('click', ocultarHeader);
    boton.addEventListener('click', opacarBody);
}
function cruz() {
    const cruz = document.querySelector('#close');
    cruz.addEventListener('click', cerrar);
    cruz.addEventListener('click', mostrarHeader);
}


function cargarDocumento() {
    boton();
    cruz();
}



window.onload = cargarDocumento;