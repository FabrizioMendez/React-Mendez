import { useState } from 'react';
import ItemDetail from './ItemDetail';
const ItemCount = (props) => {
  const [contador, setContador] =useState(props.initial);
  // ___________________________
  // ACA VA LO DEL PADRE AL HIJO
  const value = {
    cart : [cart, setCart]
  }
  const [cart, setCart]= useState(false);
  // ___________________________

    return (
    <div className='contadorItem'>
        <button onClick={()=> {if (contador > props.initial) setContador(contador-1)}}>-</button>
        {contador}
        <button onClick={()=> {if (contador >= props.stock ){alert("NO HAY STOCK!!")}else setContador(contador+1)}}>+</button>
        <br />
        <button onClick={()=>props.onAdd()}>Agregar al carrito</button>


        <ItemCount value = {value}>
          {props.children}
        </ItemCount>
    </div>
  )
}
export default ItemCount