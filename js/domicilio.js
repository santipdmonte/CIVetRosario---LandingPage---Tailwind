function enviarFormularioDomicilio() {

    tipoEmptyAlert = document.getElementById("tipoEmptyAlert");
    montoAlert = document.getElementById("montoAlert");

    // Obtener los datos del formulario
    var fecha = document.getElementById("fecha").value;
    var direccion = document.getElementById("direccion").value;
    var monto = document.getElementById("monto").value;
    var tratamiento = document.getElementById("tratamiento").value;
    var observaciones = document.getElementById("observaciones").value;

    // Validar que el monto no sea 0
    if (monto <= 0) {
        montoAlert.classList.remove('hidden');
        return;
    }
    montoAlert.classList.add('hidden');

    var tipo = '';
    if (document.getElementById("tipoCanino").checked) {
        tipo = 'Canino';
    } else if (document.getElementById("tipoFelino").checked) {
        tipo = 'Felino';
    } else {
        tipoEmptyAlert.classList.remove('hidden');
        return;
        // tipo = 'N/A';
    }
    tipoEmptyAlert.classList.add('hidden');

    // Crear objeto de datos
    var datos = {
        fecha: fecha,
        direccion: direccion,
        monto: monto,
        'Felino / Canino': tipo,
        tratamiento: tratamiento,
        observaciones: observaciones
    };

    
    enviarAlExcel(datos);


    mostrarMensaje(direccion);

    document.getElementById('encuestaFormDomicilio').reset();
    setCurrentDate() // -> Establecida 

}


function enviarAlExcel(datos){
    // Convertir datos a formato JSON
    var jsonData = JSON.stringify(datos);

    // Crear objeto XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Configurar la solicitud POST al webhook
    xhr.open("POST", "https://hook.us1.make.com/iwl1nv0hm4tskiunx96xdwanjrstj2yt", true);
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

function mostrarMensaje(direccion) {

    document.getElementById('alertMessage').classList.remove('hidden');
    if (direccion != '') {
        document.getElementById('direccionAlert').textContent  = direccion;
    }
    
}


