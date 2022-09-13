import ItemList from "./ItemList"
import { useState } from 'react';
// _____________________________________________
const ItemListContainer = () => {
  const [productos, setProductos] =useState([]);
  // ___________________________________________
  const promesa=new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve([
        {producto: "mouse",
        precio: 1500,
        marca:"Logitec"},
        {producto: "teclado",
        precio: 1000,
        marca:"Logitec"}
      ]);
    },2000)
  })
  promesa.then(res => setProductos(res))
  return (
    <div>
        <ItemList list={productos}/>
    </div>
  )
}

export default ItemListContainer 