import React from 'react';
import './styles.scss';
import {useNavigate} from 'react-router-dom';


//CORRESPONDE A LA CARD DEL PRODUCTO
const Item = ({product}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/detail/${product.id}`)
  }

  return (
    <div className='card-container' onClick={handleNavigate}>
      <img src={product.image} width={250} alt="product"/>
      <h1>{product.title}</h1>
    </div>
  )
}

export default Item