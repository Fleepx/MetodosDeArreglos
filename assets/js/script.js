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
}


const eliminarElementoPorId = function (id) {
    const posicion = tareas.findIndex((obj) => {
        if (obj.id === id)
            return true;
        return false;
    });

    tareas.splice(posicion, 1);

    renderizarDatos();
}

const actualizarConfirmacion = function (id) {
    const posicion = tareas.findIndex((obj) => {
        if (id === obj.id) {
            return true;
        }
        return false;
    });

    tareas[posicion].confirmado = !tareas[posicion].confirmado;
}

const renderizarDatos = function () {
    const lista = document.querySelector('#tareas');
    let html = '';
    for (const tarea of tareas) {
        console.log(tarea);

        if (tarea.confirmado) {
            chequeado = 'checked';
        } else {
            chequeado = '';
        }

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

renderizarDatos();