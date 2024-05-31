document.addEventListener('DOMContentLoaded', function () {
    function validarFormulario() {
        // Obtener los valores de los campos
        var nombre = document.getElementById('nombre').value.trim();
        var email = document.getElementById('email').value.trim();
        var mensaje = document.getElementById('mensaje').value.trim();

        // Expresión regular para validar el email
        var emailControl = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        var errores = [];

        // Validar los campos
        if (nombre === '') {
            errores.push('Por favor, ingresa tu nombre.');
        }
        if (email === '') {
            errores.push('Por favor, ingresa tu correo electrónico.');
        } else if (!emailControl.test(email)) {
            errores.push('Por favor, ingresa un correo electrónico válido.');
        }
        if (mensaje === '') {
            errores.push('Por favor, ingresa un mensaje.');
        }

        // Mostrar los errores o los datos enviados
        if (errores.length > 0) {
            mostrarErrores(errores);
        } else {
            mostrarDatosEnviados(nombre, email, mensaje);
        }
    }

    function mostrarErrores(errores) {
        var errorHtml = '<ul>';
        errores.forEach(function (error) {
            errorHtml += '<li>' + error + '</li>';
        });
        errorHtml += '</ul>';
        document.getElementById('errores').innerHTML = errorHtml;
    }

    function mostrarDatosEnviados(nombre, email, mensaje) {
        var datosHtml = '<h2>Datos Enviados:</h2>';
        datosHtml += '<p><strong>Nombre:</strong> ' + nombre + '</p>';
        datosHtml += '<p><strong>Email:</strong> ' + email + '</p>';
        datosHtml += '<p><strong>Mensaje:</strong> ' + mensaje + '</p>';
        document.getElementById('datos-enviados').innerHTML = datosHtml;
    }

    // Hacer la función validarFormulario accesible desde el HTML
    window.validarFormulario = validarFormulario;

//carrusel


var carrouselImages = [
    '../images/image1.jpg',
    '../images/image2.jpg',
    '../images/image3.jpg'
];

var carru = 0;
var carrouselImageElement = document.getElementById('carrousel-image');

function showImage(index) {
    carrouselImageElement.src = carrouselImages[index];
}

function nextImage() {
    carru = (carru + 1) % carrouselImages.length;
    showImage(carru);
}

function prevImage() {
    carru = (carru - 1 + carrouselImages.length) % carrouselImages.length;
    showImage(carru);
}

// Mostrar la primera imagen al cargar la página
showImage(carru);

// Hacer las funciones nextImage y prevImage accesibles desde el HTML
window.nextImage = nextImage;
window.prevImage = prevImage;
});