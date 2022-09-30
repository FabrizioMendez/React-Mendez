import React from 'react'
import Item from './Item'
import { AppContext } from "../App/Provider";
import { useContext, useState } from 'react';

const ItemList = () => {
    const [state, setState] = useContext(AppContext);
    return (
    <>
     <div className='itemlist'>
        {state.map((oneItem,indx)=>{
            return(
                <Item key={indx} oneItem={oneItem}/>
                )
            })}
    </div> 
    </>
    )
}

export default ItemList