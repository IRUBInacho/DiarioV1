// RELOJ

const hora = document.getElementById('hora');
const fecha = document.getElementById('fecha');

const meses = [
 "enero", "febrero", "marzo", "abril", "mayo", "junio",
 "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
];

const actualizarReloj = () => {
 const ahora = new Date();

 let dia = ahora.getDate();
 let mes = ahora.getMonth();
 let año = ahora.getFullYear();

 hora.textContent = ahora.toLocaleTimeString();
 fecha.textContent = `${dia} de ${meses[mes]} de ${año}`;
};

setInterval(actualizarReloj, 1000);
actualizarReloj();



// Articulos

document.getElementById("form-articulo").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    const titulo = document.getElementById("titulo").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();

    if (titulo && descripcion) {
        const lista = document.getElementById("lista-articulos");

        const nuevoItem = document.createElement("li");
        nuevoItem.innerHTML = `<strong>${titulo}</strong>: ${descripcion}`;
        lista.appendChild(nuevoItem);

        // Limpiar el formulario
        document.getElementById("form-articulo").reset();
    }
});





