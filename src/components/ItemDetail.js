import React from 'react'
import Cart from './Cart'
import ItemCount from './ItemCount'
const ItemDetail = (props) => {
    alert("Compraste, que bien !")
  return (
    <div>
        <ItemCount onAdd= {(props.onAdd) =>{
            setCount();
        }}/>
        {/* <Link to = {"./Cart"}>Terminar compra</Link> */}
    </div>
  )
}

export default ItemDetail