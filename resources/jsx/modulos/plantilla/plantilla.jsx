import "./plantilla.css";

import React from "react";

export const Plantilla =()=>{

    return(
        <>
            <h1>Hola</h1>
            <Csrf/>{/* esto se importa dentro del form para que sean validos pero no se vera*/}
            <p>Esto solo es una plantilla</p>
        </>
    )
}
