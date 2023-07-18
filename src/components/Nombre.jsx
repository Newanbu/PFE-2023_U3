import React,{useState} from "react";

const Cambio = () => {
    const [nombre,setNombre] = useState("hola")

    const handlechange = (evento) => {
        setNombre(evento.target.value)
    }

    return(
        <>
        <h1>Saludos</h1>
        <label htmlFor="nombre">Ingresa un nombre: </label>
        <input type="text" name="nombre" onChange={handlechange} value = {nombre}/>
        <h2>Saludo pal {nombre}</h2>
        </>
    )
} 

export default Cambio