import { useReducer } from "react";
import { useForm } from "../hooks/useForm";

const inicialState = [
    {
        id: new Date().getTime(),
        tarea: "explicar reducers",
        finalizada: false,
    },
];

const tareaReducer = (state = inicialState, action = {}) => {
    if (action.type === "[TAREAS] Agregar tarea") {
        return [...state, action.payload];
    }
    switch (action.type) {
        case "[TAREAS] Agregar tarea":
            return [...state, action.payload];
        case "[TAREAS] Finalizar tarea":
            return state.map((tarea) => {
                if (tarea.id == action.payload) {
                    return {
                        ...tarea,
                        finalizada: !tarea.finalizada,
                    };
                }
                return tarea;
            });
        case "[TAREAS] Eliminar tarea":
            return state.filter(tarea => tarea.id !== action.payload)
        case "[TAREAS] ELiminar todo":
            return []
        default:
            return state;
    }
};

export const ReducerComponent = () => {
    const [tareaState, dispatch] = useReducer(tareaReducer, inicialState);

    const { tarea, formState, onInputChange } = useForm({ tarea: "" });

    const agregarTarea = (event) => {
        event.preventDefault();
        if (formState.tarea == "") return;
        const tarea = {
            id: new Date().getTime(),
            tarea: formState.tarea,
            finalizada: false,
        };
        const action = {
            type: "[TAREAS] Agregar tarea",
            payload: tarea,
        };
        dispatch(action);
    };

    const finalizarTarea = ({ id }) => {
        const action = {
            type: "[TAREAS] Finalizar tarea",
            payload: id,
        };
        dispatch(action);
    };

    const borrarTarea = ({id}) => {
        const action = {
            type: '[TAREAS] Eliminar tarea',
            payload: id
        }
        dispatch(action)
    }

    const reset = () => {
        const action = {
            type: '[TAREAS] ELiminar todo',
            payload: ''
        }
        dispatch(action)
    }

    return (
        <>
            <form onSubmit={agregarTarea}>
                <div className="form-group">
                    <label htmlFor="tarea">Tarea</label>
                    <input
                        className="form-control"
                        type="text"
                        name="tarea"
                        id="tarea"
                        placeholder="Tarea..."
                        onChange={onInputChange}
                        value={tarea}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
                <button className="btn btn-danger" onClick={reset} type="button">Eliminar todo</button>
            </form>
            <hr />
            <ul className="list-group">
                {tareaState.map((item) => {
                    return (
                        <li
                            className="list-group-item d-flex justify-content-between"
                            key={item.id}
                        >
                            <span>{item.tarea}</span>
                            <div>
                                <input
                                    type="checkbox"
                                    value={item.finalizada}
                                    onChange={() => finalizarTarea(item)}
                                />
                                <button className="btn btn-sm btn-danger" onClick={() => borrarTarea(item)}>x</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
