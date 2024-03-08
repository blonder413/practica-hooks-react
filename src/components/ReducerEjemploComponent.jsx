const inicialState = [{
    id: 1,
    tarea: 'explicar reducers',
    finalizada: false
}]

const nuevaTarea = {
    id: 2,
    tarea: 'explicar useReducers',
    finalizada: false
}

const agregarTarea = {
    type: '[TAREAS] Agregar tarea',
    payload: nuevaTarea
}

const editarTarea = {
    type: '[TAREAS] Editar tarea',
    payload: nuevaTarea
}

const eliminarTarea = {
    type: '[TAREAS] Eliminar tarea',
}


const tareaReducer = (state = inicialState, action = {}) => {
    if (action.type === '[TAREAS] Agregar tarea') {
        return [...state, action.payload]
    }
    switch (action.type) {
        case '[TAREAS] Agregar tarea':
            return [...state, action.payload]
        case '[TAREAS] Editar tarea':
            // return [...state, action.payload]
        case '[TAREAS] Eliminar tarea':
            // return [...state, action.payload]
        default:
            break;
    }
    return state
}

// console.log(tareaReducer(inicialState, agregarTarea))

//---------------------------------------------------------------------------------------------------------------------
const agregar_tarea = (event) => {
    event.preventDefault()
}
export const ReducerComponent = () => {
    return (
        <form onSubmit={agregar_tarea}>
            <div className="form-group">
                <label htmlFor="tarea">Tarea</label>
                <input className="form-control" type="text" name="tarea" id="tarea" placeholder="Tarea..." />
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    )
}