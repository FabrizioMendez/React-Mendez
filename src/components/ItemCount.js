import { useState } from 'react';

const ItemCount = (props) => {
  const [contador, setContador] =useState(props.initial);
    return (
    <div className='contadorItem'>
        <button onClick={()=> {if (contador > props.initial) setContador(contador-1)}}>-</button>
        {contador}
        <button onClick={()=> {if (contador >= props.stock ){alert("NO HAY STOCK!!")}else setContador(contador+1)}}>+</button>
        <br />
        <button onClick={()=>props.onAdd()}>Agregar al carrito</button>


    </div>
  )
}
export default ItemCount