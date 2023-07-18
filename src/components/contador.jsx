import {useState} from "react"

const Contador = () => {
    const [numero, setNumero] = useState(0)
    
    const handleclick = (evento) => {
        setNumero(numero + 1)
   }
    return(
        <>
        <h1>Tu Contador es de: {numero}</h1>
        <button type="button" onClick={handleclick}>Aumentar</button>

        </>
    )
}

export default Contador