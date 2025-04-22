document.getElementById("form-articulo").addEventListener("submit", function (event) {
    event.preventDefault();

    const titulo = document.getElementById("titulo").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();
    const seccion = document.getElementById("seccion").value;

    if (titulo && descripcion && seccion) {
        // Crear nuevo elemento <tr> con la noticia
        const nuevaFila = document.createElement("tr");

        nuevaFila.innerHTML = `
            <td><strong>${titulo}</strong></td>
            <td colspan="3">${descripcion}</td>
        `;

        // Insertar en la sección elegida
        const tablaSeccion = document.querySelector(`#${seccion} table`);
        if (tablaSeccion) {
            tablaSeccion.appendChild(nuevaFila);
        }

        // También mostramos el resumen en la parte baja (opcional)
        const resumen = document.createElement("li");
        resumen.textContent = `${titulo} (${seccion})`;
        document.getElementById("lista-articulos").appendChild(resumen);

        // Limpiar formulario
        document.getElementById("form-articulo").reset();

        // Opcional: actualizar contador de artículos
        const idContador = `contador-${seccion.toLowerCase()}`;
        const filas = tablaSeccion.querySelectorAll("tr").length;
        const contador = document.getElementById(idContador);
        if (contador) contador.textContent = `Artículos en esta sección: ${filas}`;
    }
});
