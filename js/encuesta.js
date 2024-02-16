// Scroll reveal animations
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 3000,
    delay: 600
    // reset: true //reset aniamtion
})

// Stats
sr.reveal('.stats__item', {
    delay: 0,
    distance: '100px',
    interval: 100,
    origin: 'top'
})

// Variable para redireccionar a GoogleReviews
var redirect = false;
var inForm = false;
var stars = 4;

const star1 = document.querySelector('.star__1');
const star2 = document.querySelector('.star__2');
const star3 = document.querySelector('.star__3');
const star4 = document.querySelector('.star__4');
const star5 = document.querySelector('.star__5');
const starBtn = document.querySelector('.star__btn');
const formContent = document.querySelector('.form__content');
const title = document.querySelector('.title');
const starsContent = document.querySelector('.stars__content');
const confirmContent = document.querySelector('.confirm__content');


star1.addEventListener('click', () => {
    if (inForm === false) {
        redirect = false;
        stars = 1;
        star1.classList.add('text-yellow-300');
        star2.classList.remove('text-yellow-300');
        star3.classList.remove('text-yellow-300');
        star4.classList.remove('text-yellow-300');
        star5.classList.remove('text-yellow-300');
    }
});

star2.addEventListener('click', () => {
    if (inForm === false) {
        redirect = false;
        stars = 2;
        star1.classList.add('text-yellow-300');
        star2.classList.add('text-yellow-300');
        star3.classList.remove('text-yellow-300');
        star4.classList.remove('text-yellow-300');
        star5.classList.remove('text-yellow-300');
    }
});

star3.addEventListener('click', () => {
    if (inForm === false) {
        redirect = false;
        stars = 3;
        star1.classList.add('text-yellow-300');
        star2.classList.add('text-yellow-300');
        star3.classList.add('text-yellow-300');
        star4.classList.remove('text-yellow-300');
        star5.classList.remove('text-yellow-300');
    }    
});

star4.addEventListener('click', () => {
    if (inForm === false) {
        redirect = false;
        stars = 4;
        star1.classList.add('text-yellow-300');
        star2.classList.add('text-yellow-300');
        star3.classList.add('text-yellow-300');
        star4.classList.add('text-yellow-300');
        star5.classList.remove('text-yellow-300');
    }
});

star5.addEventListener('click', () => {
    if (inForm === false) {
        redirect = true;
        stars = 5;
        star1.classList.add('text-yellow-300');
        star2.classList.add('text-yellow-300');
        star3.classList.add('text-yellow-300');
        star4.classList.add('text-yellow-300');
        star5.classList.add('text-yellow-300');
    }
});

function continuarEncuesta(){
    starBtn.classList.add('hidden');
    formContent.classList.remove('hidden');

}

function redirectGoogleReviews() {
    inForm = true;
    if (redirect === true) {
        window.location.href = 'https://g.page/r/CVshYZSjgMJtEBM/review';
    }
    else {
        continuarEncuesta();
    }
} 


function enviarFormulario() {
    mostrarMensaje();

    // Obtener los datos del formulario
    var comentario = document.getElementById("comentario").value;

    // Crear objeto de datos
    var datos = {
        // estrellas: stars, --> Ajustar make para agregar este campo
        comentario: comentario,
        fecha: new Date().toLocaleString(),
        // Agrega aquí más campos según sea necesario
    };

    // Convertir datos a formato JSON
    var jsonData = JSON.stringify(datos);

    // Crear objeto XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Configurar la solicitud POST al webhook
    xhr.open("POST", "https://hook.us1.make.com/ytpmiauzy2ldyxb6a69p9i8kse73pn7j", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    // Definir la función de retorno de llamada
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Éxito: puedes realizar acciones adicionales si es necesario
        }
    };

    // Enviar los datos al webhook
    xhr.send(jsonData);
}


function mostrarMensaje() {
    // Ocultamos
    starsContent.classList.add('hidden');
    title.classList.add('hidden');
    formContent.classList.add('hidden');

    // Muestra el mensaje de agradecimiento
    confirmContent.classList.remove('hidden');
}