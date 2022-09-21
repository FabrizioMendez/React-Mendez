import React from 'react'
import ItemCount from "./ItemCount"
const Item = (props) => {
  return (
    <div className='items'>
      <p className='dataItem'>{props.oneItem.producto}</p>
      <p className='dataItem'>{props.oneItem.precio}</p>
      <p className='dataItem'>{props.oneItem.marca}</p>
      <p className='dataItem'>{props.oneItem.imagen}</p>
      <ItemCount stock ={5} initial ={0}/>
    </div>
  )
}

export default Item