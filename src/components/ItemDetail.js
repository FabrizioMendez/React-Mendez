import React, { useContext } from 'react'
import Cart from './Cart'
import ItemCount from './ItemCount'
const ItemDetail = () => {
    const value = useContext(ItemCount)
    const [cart, setCart] = value.cart
  
    const shopp = () => {
      setCart(cart)
    }
    
  return (
    <div>
    <ItemCount/>
    </div>
  )
}

export default ItemDetail