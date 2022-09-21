import React, { useEffect, useState } from 'react';
import './style.scss';
import	Itemlist from '../../components/ItemList';
import { useParams } from 'react-router-dom';


const ItemslistContainer = ({greeting}) => {
    

    const [products, setProducts] = useState([])

    const {categoryId} = useParams();



    //La promise se ejecuta una unica vez cuando se monta el componente
    useEffect( ()=> {
        (async ()=> {
            try {
                if (categoryId){
                    const response = await fetch("https://fakestoreapi.com/products/category/" + categoryId);
                    const productos = await response.json(); 
                    setProducts(productos);
                } else {
                    const response = await fetch("https://fakestoreapi.com/products");
                    const productos = await response.json(); 
                    setProducts(productos);
                }
            } catch (error) {
                console.log(error);
            }
            
        })()
    }, [categoryId]);
    
        console.log(products);



    return (
        <div className='item-list-container'>
            <Itemlist products={products}/>
        </div>
    )
}

export default ItemslistContainer;