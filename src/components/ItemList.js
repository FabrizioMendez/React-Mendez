import Item from './Item'
import React from 'react'

const ItemList = (props) => {
    return (
    <div className='itemlist'>
        {props.list.map((oneItem,indx)=>{
            return(
                <Item key={indx} oneItem={oneItem}/>
            )
        })}
    </div>
    )
}

export default ItemList