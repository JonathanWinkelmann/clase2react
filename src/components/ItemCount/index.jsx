import React, {useState} from 'react';
import { useEffect } from 'react';
import './style.css';


const ItemCount = () => {
    
    
    const [count, setCount] = useState(0);
    
    
    const handleAdd = () => {
        setCount(count+1);
    }
    //Montaje del componente
    useEffect(()=> {
        //El array de dependencias vacio implica q el callback se ejecutara cuando se MONTA el componente por unica vez.
        console.log("Se monto el ItemCount");

    }, [])
    //La funcion del  callback dentro del useEffect se ejecutara cuando se monte el componente, y cuando se actualice el valor del count.
    useEffect(()=> {
        console.log("Se actualiza el estado")
    }, [count]);




    return (
    <div>

        <h2>{count}</h2>
        <button onClick={handleAdd}>+</button>
    </div>
    );
};

export default ItemCount;