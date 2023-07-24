import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import HolaMundo from "./components/HolaMundo.jsx";
import Calama from "./components/Calama.jsx";
import Contador from './components/contador.jsx';
import Pais from './components/pais.jsx'
import Cambio from './components/Nombre.jsx';
import Ejercicio1 from './components/ejercicio01/Ejercicio1.jsx';
import Tareas from './components/ejercicio01/Tareas/Tareas.jsx';
import RegistrosTienda from './components/ejercicio01/ejercicio2.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'


const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<App />
        },
        {
            path: "/saludo",
            element: <HolaMundo/>
        },
        {
            path: "/ciudad",
            element: <Calama/>
        },
        {
            path: "/contador",
            element: <Contador/>
        },
        {
            path:"/pais",
            element:<Pais/>
        },
        {
            path:"/nombre",
            element:<Cambio/>
        },
        {
            path:"/ejercicio",
            element:<Ejercicio1/>
        },
        {
            path:'/tienda',
            element:<RegistrosTienda/>
        },
        {
            path:'/Tarea',
            element:<Tareas/>
        }
    ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)