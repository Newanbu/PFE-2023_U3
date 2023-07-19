import React,{useState,useEffect} from 'react'

const RegistrosTienda =  () => {
    const data = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Victor Wayne" },
        { id: 3, name: "Jane Doe" },
      ];

    return (
        <>
        <div>
            {data.map((data) => (
                <ul>
                    <li>
                        <span>Nombre :</span> {data.name} <br /><span>ID :</span> {data.id}
                    </li>
                </ul>
            ))}
        </div>
        </>
    )
}

export default RegistrosTienda