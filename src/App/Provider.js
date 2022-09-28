import { useState } from 'react';
import {createContext} from 'react'
import mouse from "../img/mouse.jfif"
import teclado from "../img/teclado.jpg"
import microfono from "../img/microfono.png"
import auriculares from "../img/auriculares.jpg"
import camara from "../img/camara.jpg"
const Provider = ({ children }) => {
    const [state, setState] = useState([
      {producto: "Mouse",
      precio: 1500,
      marca:"Logitec",
      imagen: <img className="imgItems" src={mouse} alt=""/>},

      {producto: "Teclado",
      precio: 1000,
      marca:"Logitec",
      imagen: <img className="imgItems" src={teclado} alt=""/>},

      {producto: "Microfono",
      precio: 1300,
      marca: "Xtrike-ME",
      imagen: <img className='imgItems' src={microfono} alt=""/>},

      {producto:"Auriculares",
      precio: 1000,
      marca: "Logitec",
      imagen: <img className='imgItems' src={auriculares} alt=""/>},

      {producto:"Camara",
      precio: 2000,
      marca: "Logitec",
      imagen: <img className='imgItems' src={camara} alt =""/>},
    ]);
    
    
    
    return (
    <AppContext.Provider value={[state, setState]}>
        {children}
    </AppContext.Provider>
  )
}
export const AppContext = createContext();
export default Provider