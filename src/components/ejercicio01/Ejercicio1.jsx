{/* Crear un componente vacio llamado Ejercicio
configurar una ruta para el ejercicio
*/}
import React,{useState} from "react"

const Ejercicio1 = () => {

    const [nombre,setNombre] = useState("")
    
    const changeName = (evento) => {
        setNombre(evento.target.value)
    }

    return(
        <>
        <h1>Saludos para {nombre}</h1>
        <div>
            <label htmlFor="nombre">Ingresa Tu Nombre: </label>
            <input type="text" onChange={changeName} value={nombre} />
        </div>
        </>

    )
}

export default Ejercicio1

