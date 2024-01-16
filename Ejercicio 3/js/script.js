function cambiarTitulo() {
	let nuevoTitulo=prompt("Introduzca el nuevo titulo");
	// Inicializar el condicional
	// Comprobamos si el campo no esta vacío, me ingrea el nuevo titulo que se inserto
	if(nuevoTitulo!==null) {
		return cambiarTituloH1(nuevoTitulo);
	}
}
function cambiarTituloH1(nuevoTitulo){
	document.getElementById("titulo").textContent=nuevoTitulo;
}