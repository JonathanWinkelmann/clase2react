import React, { useEffect, useState } from 'react';
import './style.scss';
import	Itemlist from '../../components/ItemList';
//import { products } from '../../components/data/products';



const ItemslistContainer = ({greeting}) => {
    

    const [products, setProducts] = useState([])



    //La promise se ejecuta una unica vez cuando se monta el componente
    useEffect( ()=> {
        
        //IIFE
        (async ()=> {
            /*const obtenerProductos = new Promise ((accept, reject)=> {
                setTimeout(()=> {
                    accept(products)
                }, 3000);
            })*/
            
            /*
            obtenerProductos
            .then((result) => {
                console.log(result)
                setProductos(result)})
            
                .catch((error) => console.log(error))
                */
            try {
            const response = await fetch("https://fakestoreapi.com/products");
            const productos = await response.json(); 
            setProducts(productos);
            } catch (error) {
                console.log(error);
            }
            
        })()
    }, [])
    
        console.log(products)



    return (
        <div className='item-list-container'>
            <Itemlist products={products}/>
        </div>
    )
}

export default ItemslistContainer;