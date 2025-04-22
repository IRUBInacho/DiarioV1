function contarArticulos(idTabla, idContador) {
    const tabla = document.querySelector(`#${idTabla} table`);
    if (!tabla) return;

    const filas = tabla.querySelectorAll("tr").length;
    document.getElementById(idContador).textContent = `Artículos en esta sección: ${filas}`;
}

document.addEventListener("DOMContentLoaded", () => {
    contarArticulos("Inicio", "contador-inicio");
    contarArticulos("Deporte", "contador-deporte");
    contarArticulos("Negocio", "contador-negocio");
});
