//Crea un tablero interactivo de notas que permita a los usuarios agregar y eliminar notas.
function agregarNota(){
    let cajaDeTexto = document.createElement("li");
    let contenidoNota = prompt("Introduzca el contenido de la nota: ");
    cajaDeTexto.textContent = contenidoNota;
    let listaDesordenada =  document.getElementById("ul");
    listaDesordenada.appendChild(cajaDeTexto);
}

function elimnarNota(){
    let listaDesordenada = document.getElementById("ul");
    let elementos = listaDesordenada.getElementsByTagName('li');
    let ultimo = elementos[elementos.length - 1];
    listaDesordenada.removeChild(ultimo);
}

