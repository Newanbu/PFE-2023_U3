import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import './index.css'
import HolaMundo from "./components/HolaMundo.jsx";
import Calama from "./components/Calama.jsx";
import Contador from './components/contador.jsx';
import Pais from './components/pais.jsx'
import Cambio from './components/Nombre.jsx';

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
        }
    ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)