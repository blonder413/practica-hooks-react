import { useMemo, useState } from "react";

export const CalculosPesadosComponent = () => {
    const [listaNumeros, setListaNumeros] = useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9,
    ]);
    const [show, setShow] = useState(true);

    // UseMemo guarda la información y solo se ejecuta si cambio el valor del parámetro final (listaNumeros)
    const getCalculo = (listaNumeros) =>
        useMemo(() => {
            console.log("calculando");
            return listaNumeros.reduce((a, b) => a * b);
        }, [listaNumeros]);

    const agregarNumero = () => {
        setListaNumeros([
            ...listaNumeros,
            listaNumeros[listaNumeros.length - 1] + 1,
        ]);
        console.log(listaNumeros);
    };

    return (
        <>
            <h2>Cálculo</h2>
            <p>{getCalculo(listaNumeros)}</p>
            <button className="btn btn-primary" onClick={() => setShow(!show)}>
                {show ? "show" : "hide"}
            </button>
            <button className="btn btn-primary" onClick={() => agregarNumero()}>
                Agregar número
            </button>
        </>
    );
};
