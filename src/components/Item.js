import React from 'react'
import ItemCount from "./ItemCount"
const Item = (props) => {
  return (
    <div className='items'>
      <p>{props.oneItem.producto}</p>
      <p>{props.oneItem.precio}</p>
      <p>{props.oneItem.marca}</p>
      <ItemCount stock ={5} initial ={0}/>
    </div>
  )
}

export default Item