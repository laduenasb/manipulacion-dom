//Crea una lista ordenada y permite al usuario reorganizar los elementos de la lista al hacer clic en ellos.
function organizarElemento(elemento){
    let elementoAnterior = elemento.previousElementSibling;
    elemento.parentNode.insertBefore(elemento, elementoAnterior);
}