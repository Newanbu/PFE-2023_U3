import React,{useState,useEffect} from "react";

const Ciudad = () => {
    const saludo = () => {
        alert("hola")
    }

    return(
    <>


        <h1>Calama Ciudad Heroica</h1>
        <p>Bastion de chilenidad</p>
        <button onClick={saludo}>saluda!</button>

        </>

    )
}

export default Ciudad