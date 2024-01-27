import { useCallback, useState } from "react";
import { IncrementarComponent } from "./IncrementarComponent";

export const CallBackComponent = () => {
    const [counter, setCounter] = useState(0);
    // useCallback evite que se esté redibujando
    // Recibe un parámetro desde el componente hijo
    const incrementarPadre = useCallback((value) => {
        // contador es el valor que trae por defecto setCounter
        setCounter(contador => contador + value);
    }, [])
    return (
        <>
            <h1>Contador: {counter}</h1>
            <IncrementarComponent
                incrementar={incrementarPadre}
            ></IncrementarComponent>
        </>
    );
};
