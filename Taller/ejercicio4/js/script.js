//Cambiar el color de fondo al hacer clic en un sitio web.

function cambiarColor(){
    let colorAleatorio = Math.floor(Math.random()*3)+1;
    let arrayColores = ['blue', 'white', 'black', 'pink'];
    document.body.style.backgroundColor = arrayColores[colorAleatorio];
    Swal.fire({
        text: `${arrayColores[colorAleatorio]}`
    });
}