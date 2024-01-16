//Implementa una galería de imágenes que permita desplazarse hacia la siguiente imagen y hacia la anterior utilizando dos botones distintos.
function siguienteImagen(){
    let imagen = document.getElementById("imagen");
    let imagenActual = imagen.name;
    switch(imagenActual){
        case "1":
            imagen.src = "./img/imagen2.jpg"
            imagen.name = "2";
            break;
        case "2":
            imagen.src = "./img/imagen3.jpg"
            imagen.name = "3";
            break;
        case "3":
            imagen.src = "./img/imagen1.jpg"
            imagen.name = "1";
            break;
    }
}

function anteriorImagen(){
    let imagen = document.getElementById("imagen");
    let imagenActual = imagen.name;
    switch(imagenActual){
        case "1":
            imagen.src = "./img/imagen3.jpg"
            imagen.name = "3";
            break;
        case "2":
            imagen.src = "./img/imagen1.jpg"
            imagen.name = "1";
            break;
        case "3":
            imagen.src = "./img/imagen2.jpg"
            imagen.name = "2";
            break;
    }
}