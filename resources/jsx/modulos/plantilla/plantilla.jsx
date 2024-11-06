import "./plantilla.css";

import React from "react";
import ReactDOM from "react-dom";
import { Csrf } from "../../modelos/";

export default function Plantilla(){

    return(
        <>
            <h1>Hola</h1>
            <Csrf/>{/* esto se importa dentro del form para que sean validos pero no se vera*/}
            <p>Esto solo es una plantilla</p>
        </>
    )
}
ReactDOM.render(<Plantilla/>, document.getElementById('root'));