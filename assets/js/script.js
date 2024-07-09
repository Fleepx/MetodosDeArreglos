const tareas = [];
let idActual = 1;

const agregarTarea = function (posicion) {
    const nuevaTarea = document.querySelector('#agregar').value;

    const objetoTarea = {
        id: idActual,
        nombre: nuevaTarea,
        confirmado: false
    }


    if (posicion === 'Nueva')
        tareas.push(objetoTarea);

    idActual++;
    renderizarDatos();
    actualizarContadores();
}


const eliminarElementoPorId = function (id) {
    const posicion = tareas.findIndex((obj) => {
        if (obj.id === id)
            return true;
        return false;
    });

    tareas.splice(posicion, 1);

    renderizarDatos();
    actualizarContadores();
}

const actualizarConfirmacion = function (id) {
    const posicion = tareas.findIndex((obj) => obj.id === id);

    if (posicion !== -1) {
        tareas[posicion].confirmado = !tareas[posicion].confirmado;
        renderizarDatos();
        actualizarContadores();
    }
}

const renderizarDatos = function () {
    const lista = document.querySelector('#tareas');
    let html = '';
    for (const tarea of tareas) {
        const chequeado = tarea.confirmado ? 'checked' : '';

        html += `
        <div class="tarea">
            <div class="idTarea">
                <strong>${tarea.id}</strong>
            </div>
            <div class="nombreTarea">
                <strong>${tarea.nombre}</strong>
            </div>
            <div class="statusTarea">
                <input onclick="actualizarConfirmacion(${tarea.id})" type="checkbox" ${chequeado}>
            </div>
            <div class="eliminarTarea">
                <button onclick="eliminarElementoPorId(${tarea.id})" class="btn" >X</button>
            </div>
        </div>`;
    }

    lista.innerHTML = html;
}

const actualizarContadores = function () {
    const totalTareas = tareas.length;
    const tareasRealizadas = tareas.filter(tarea => tarea.confirmado).length;

    document.querySelector('#total').textContent = `Total de tareas: ${totalTareas}`;
    document.querySelector('#tareasRealizadas').textContent = `Tareas realizadas: ${tareasRealizadas}`;
}

document.addEventListener("DOMContentLoaded", () => {
    actualizarContadores();
    renderizarDatos();
});

