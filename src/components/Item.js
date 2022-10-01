import React from 'react'
import { Link } from 'react-router-dom'


const Item = (producto) => {


  return (
    <Link to = {`/detail/${producto}`}>
    <div className='items'>
      <p className='dataItem'>{producto}</p>
      <p className='dataItem'>{producto}</p>
      <p className='dataItem'>{producto}</p>
      <p className='dataItem'>{producto}</p>
    </div>
    </Link>    
  )
}

export default Item
