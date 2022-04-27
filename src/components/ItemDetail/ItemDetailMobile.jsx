import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../atoms/ItemCount'

const ItemDetailMobile = ({name, price, img, stock, description, id, counter, setCounter, addToCart, AddedToCart}) => {

  const { isInCart, removeItem} = useContext(CartContext)

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(-1)
  }

  return (
    <div className='w-2/3 bg-components py-4 m-24 flex flex-wrap justify-center items-center rounded-xl'>
      <div className='flex'>
        <button className="text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded self-start" onClick={handleNavigate}>Volver</button>
      </div>
      <div className='flex flex-col px-4 w-96'>
        <p className='text-2xl'>Detalle del producto:</p>
        <img src={img} alt={name} className="m-2"/>
        <h3>{name}</h3>
      </div>
      <div className='flex flex-col px-4 justify-end w-96 px-4'>
        <div className='self-center'>
          <p className='text-2xl mt-4'>Descripción: </p>
          <p className='flex w-60'>{description}</p>
          <p className='text-2xl'>Precio: ${price}</p>
          <p className='text-lg'>Stock Disponible: {stock}</p>
        </div>
        {
          stock > 0 
          ?
          <> 
          <div className='self-center'>
          {
            !isInCart(id)
            ? <ItemCount 
                max={stock} 
                counter={counter}
                setCounter={setCounter}
                onAdd={addToCart}
              />
              : <AddedToCart 
                  removeItem={removeItem}
                  counter={counter}
                  id={id}
                  name={name}
                />
              }
          </div>
          </>
          :
          <>
            <div className='self-center'>
              <p className='text-2xl p-2 text-red-500'>Producto sin stock</p>
            </div>
          </>
        }
      </div>
      <hr/>
    </div>
  )
}

export default ItemDetailMobile