import React from 'react'


//CORRESPONDE A LA CARD DEL PRODUCTO
const Item = ({product}) => {
  return (
    <div>
      <img src={product.image} width={250} alt="product"/>
      <h1>{product.title}</h1>
    </div>
  )
}

export default Item