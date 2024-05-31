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
        var erroresDiv = document.getElementById('errores');
        erroresDiv.innerHTML = '';  // Limpiar los errores previos
        var ul = document.createElement('ul');
        
        errores.forEach(function (error) {
            var li = document.createElement('li');
            li.textContent = error;
            ul.appendChild(li);
        });
    
        erroresDiv.appendChild(ul);
    }

    function mostrarDatosEnviados(nombre, email, mensaje) {
        var datosEnviadosDiv = document.getElementById('datos-enviados');
        datosEnviadosDiv.innerHTML = '';  // Limpiar los datos previos
    
        var h2 = document.createElement('h2');
        h2.textContent = 'Datos Enviados:';
        datosEnviadosDiv.appendChild(h2);
    
        var pNombre = document.createElement('p');
        pNombre.innerHTML = '<strong>Nombre:</strong> ' + nombre;
        datosEnviadosDiv.appendChild(pNombre);
    
        var pEmail = document.createElement('p');
        pEmail.innerHTML = '<strong>Email:</strong> ' + email;
        datosEnviadosDiv.appendChild(pEmail);
    
        var pMensaje = document.createElement('p');
        pMensaje.innerHTML = '<strong>Mensaje:</strong> ' + mensaje;
        datosEnviadosDiv.appendChild(pMensaje);
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