var inForm = false; // --> Determinar en que pagina esta
var stars = 0; //--> Cantidad de estrellas calificadas

const starBtn = document.querySelector('.star__btn');
const formContent = document.querySelector('.form__content');
const title = document.querySelector('.title');
const second_title = document.querySelector('.second_title');
const starsContent = document.querySelector('.stars__content');
const confirmContent = document.querySelector('.confirm__content');
const starsElements = document.querySelectorAll('.star');

starsElements.forEach((star, index) => {
    star.addEventListener('click', () => {
        if (!inForm) {
            stars = index + 1;
            updateStarsUI();
        }
    });
});

function updateStarsUI() {
    starsElements.forEach((star, index) => {
        star.classList.toggle('text-yellow-300', index < stars);
    });
}

function continuarEncuesta(){
    inForm = true;
    starBtn.classList.add('hidden');
    formContent.classList.remove('hidden');
    title.classList.add('hidden');
    second_title.classList.remove('hidden');
}

function redirectGoogleReviews() {
    if (stars === 0) {
        alert('Por favor calificános haciendo click en las estrellas.');
    }
    else if (stars === 5) {
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
        estrellas: stars,
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
    second_title.classList.add('hidden');
    formContent.classList.add('hidden');

    // Muestra el mensaje de agradecimiento
    confirmContent.classList.remove('hidden');
}
