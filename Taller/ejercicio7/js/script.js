//Crea un botón que, al presionarlo, añada un nuevo elemento (puede ser un párrafo, div, etc.) al DOM con un contenido específico.
function crearElemento() {
    let contenido = prompt("Introduzca el contenido: ");
    let elemento = document.createElement("h1");
    elemento.textContent = contenido;
    document.body.appendChild(elemento);
}