import { useEffect, useState } from 'react';
import ItemDetail from '../../../components/ItemDetail';

const ItemDetailistContainer = () => {
    const[productDetail, setProductDetail] = useState({})



    //Gestionar la obtencion de la data del detalle
    useEffect(()=> {



        const getProducts = async () => {
            try {
                const response = await fetch ("https://fakestoreapi.com/products/1")
                const data = await response.json();
                setProductDetail(data);
            } catch (error) {
                    console.log(error);
            }
        }
        getProducts();



    }, [])

    console.log(productDetail);

    return <ItemDetail product={productDetail}/>;

}

export default ItemDetailistContainer;