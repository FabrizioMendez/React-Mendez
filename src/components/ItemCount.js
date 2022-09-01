import { useState } from 'react';
import A from './A';
import B from './B';

const ItemCount = () => {
  const [contador, setcontador] =useState(0);
    return (
    <div>
        <button onClick={()=> {setcontador(contador+1,);}}>Sumar al Carrito</button>
    {
        contador >= 10 ? <A/> : <B/>
    }
        {contador}
    </div>
  )
}
export default ItemCount