document.getElementById("form-contacto").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombreContacto").value.trim();
    const mensaje = document.getElementById("mensajeContacto").value.trim();

    if (nombre && mensaje) {
        const div = document.getElementById("mensajeEnviado");
        div.innerHTML = `<strong>Gracias, ${nombre}.</strong><br>Tu mensaje fue: "${mensaje}"`;

        document.getElementById("form-contacto").reset();
    }
});
