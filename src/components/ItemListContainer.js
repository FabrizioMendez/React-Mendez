import { Link, useParams } from 'react-router-dom';
import { AppContext } from "../App/Provider";
import { useContext, useState } from 'react';

const ItemListContainer = () => {
  const [state, setState] = useContext(AppContext);
  
  return (
    <>
      <div>{state.map(product => (
        <div className="grande">
          <div className="chico">{product.producto}</div>
          <div className="chico">{product.precio}</div>
          <div className="chico">{product.marca}</div>
          <div className="chico">{product.imagen}</div>
          <Link className='detalleItem' to ={`/detail/:producto`}>Ir al detalle</Link>
        </div>
        ))}</div>
    </>
  )
}

export default ItemListContainer 