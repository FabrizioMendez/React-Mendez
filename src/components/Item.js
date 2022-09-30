import React from 'react'
import { AppContext } from "../App/Provider";
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
const Item = (oneItem) => {
  // const [state, setState] = useContext(AppContext);
  return (
    <Link to = {`/detail/${oneItem.producto}`}>
    <div className='items'>
      <p className='dataItem'>{oneItem.producto}</p>
      <p className='dataItem'>{oneItem.precio}</p>
      <p className='dataItem'>{oneItem.marca}</p>
      <p className='dataItem'>{oneItem.imagen}</p>
    </div>
    </Link>
    
  )
}

export default Item
