import React from 'react'

const ItemDetail = ({productDetail}) => {
  const {name, price, img} = productDetail
  return (
    <div className='w-96 bg-gray-800 py-4 m-4 flex flex-col items-center rounded-xl'>
      <h2>Detalle del producto:</h2>
      <h3>{name}</h3>
      <img src={img} alt={name} className="m-2"/>
      <p className='text-2xl'>Precio: ${price}</p>

    </div>
  )
}

export default ItemDetail