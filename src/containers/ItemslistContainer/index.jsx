import React from 'react';
import './style.scss';
import ItemCount from '../../components/ItemCount';
const ItemslistContainer = ({greeting}) => {
    return (
        <div className='item-list-container'>
            <h1>{greeting}</h1>
            <ItemCount/>
        </div>
    )
}

export default ItemslistContainer;