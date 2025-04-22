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
