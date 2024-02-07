import { ContadorComponent } from "./components/ContadorComponent"
import { FormularioComponent } from "./components/FormularioComponent"
import { UsuariosComponent } from "./components/UsuariosComponent"
import { CalculosPesadosComponent } from "./components/CalculosPesadosComponent"
import { CallBackComponent } from './components/CallBackComponent'
import { ReducerComponent } from "./components/ReducerComponent"

export const HooksApp = () => {
    return(
        <>
        <h1>Aplicación de hooks</h1>
        <hr />
        {/* <ContadorComponent></ContadorComponent> */}
        {/* <FormularioComponent></FormularioComponent> */}
        {/* <UsuariosComponent></UsuariosComponent> */}
        {/* <CalculosPesadosComponent></CalculosPesadosComponent> */}
        {/* <CallBackComponent></CallBackComponent> */}
        <ReducerComponent></ReducerComponent>
        </>
    )
}