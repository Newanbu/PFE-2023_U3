import React, {useState} from 'react'

// Codigo De John Selti
const Data = [
    {'ID':1,'Tarea':'Salir a correr'},
    {'ID':2,'Tarea':'Hacer Ejercicio'},
    {'ID':3,'Tarea':'Estudiar 10 Minutos'}]

const Tareas = () => {
    const [tareas,setTareas] = useState(Data)

    const [nombreTarea,setNombreTarea] = useState('')

    const handleModificarTarea = (evento) => {
        setNombreTarea(evento.target.value)
    }
    const handleBotonAgregarTarea = (evento) => {
        if(nombreTarea === ''){
            alert('Agrega Una Tarea')
        }else{
            let tareanueva = {
                ID: tareas.length + 1,
                Tarea: nombreTarea
            }

            setTareas([...tareas, tareanueva])
            setNombreTarea('')
        }


    }
    const handleBorrarTarea = (ID) =>{
     const BorraTarea = tareas.filter((tarea) => tarea.ID !== ID)
        setTareas(BorraTarea)
    }


     return(
        <>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Tareas</h5>
                            <label htmlFor="Nombre-Tarea">Ingresa Una Tarea <span className='me-2'></span></label><br/>
                            <button type='submit' className='btn btn-primary mx-2' onClick={handleBotonAgregarTarea}>Añadir</button>
                            <input className='form-label rounded-3' type="text" id='Nombre-Tarea' value={nombreTarea} onChange={handleModificarTarea}/>

                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Lista De Tareas</h5>
                            <p className="card-text"></p>
                            <ul className='list-group'>

                                {tareas.map( function (tarea){
                                    return  (
                                        <>
                                            <li className='list-group-item' key={tarea.ID}>{tarea.Tarea}<span className='m-2'></span><button className='btn btn-outline-secondary' onClick={() => handleBorrarTarea(tarea.ID)}>Borrar</button></li>
                                        </>
                                    )
                                })

                                }

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}





export default Tareas