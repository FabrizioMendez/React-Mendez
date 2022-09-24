import React from 'react'
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    <Link to = {`/detail/${props.oneItem.producto}`}>
    <div className='items'>
      <p className='dataItem'>{props.oneItem.producto}</p>
      <p className='dataItem'>{props.oneItem.precio}</p>
      <p className='dataItem'>{props.oneItem.marca}</p>
      <p className='dataItem'>{props.oneItem.imagen}</p>
    </div>
    </Link>
    
  )
}

export default Item
