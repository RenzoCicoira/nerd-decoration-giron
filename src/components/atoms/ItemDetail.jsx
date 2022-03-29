import React from 'react'
import ItemCount from './ItemCount'
import { useNavigate } from 'react-router-dom'

const ItemDetail = ({name, price, img, stock, description}) => {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(-1)
  }

  return (
    <div className='w-2/3 bg-gray-800 py-4 m-4 flex flex-row flex-wrap justify-center items-center rounded-xl'>
      <div className='flex flex-col px-4 w-96'>
        <p className='text-2xl'>Detalle del producto:</p>
        <img src={img} alt={name} className="m-2"/>
        <h3>{name}</h3>
      </div>
      <div className='flex flex-col px-4 h-96 justify-end w-96 px-4'>
        <p className='text-2xl mt-4'>Descripción: </p>
        <p className='flex w-60'>{description}</p>
        <p className='text-2xl'>Precio: ${price}</p>
        <p className='text-lg'>Stock Disponible: {stock}</p>
        <div className='self-center'>
          <ItemCount name={name} max={stock}/>
        </div>
      </div>
      <hr/>
      <div className='flex h-96'>
        <button className="text-white bg-orange-500 px-4 py-2 mt-4 rounded self-start" onClick={handleNavigate}>Volver</button>
      </div>
    </div>
  )
}

export default ItemDetail