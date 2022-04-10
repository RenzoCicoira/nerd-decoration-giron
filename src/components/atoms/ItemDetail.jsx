import React, { useContext } from 'react'
import ItemCount from './ItemCount'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { CartContext } from '../../context/CartContext'


const ItemDetail = ({name, price, img, stock, description, id}) => {

  const {cart, addItem, isInCart} = useContext(CartContext)
  console.log( cart )

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(-1)
  }
  
  const [counter, setCounter] = useState (1)

  const addToCart = () => {
    const itemToAdd = {
      id,
      name,
      price,
      img,
      counter
    }
    console.log(itemToAdd)
    addItem(itemToAdd)
  }



  return (
    <div className='w-2/3 bg-gray-800 py-2 m-2 flex flex-wrap justify-center items-center rounded-xl'>
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
          {/* { stock <= 10 && <p className='text-red-500'>¡Últimas unidades!</p>} */}
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
              : <div className='flex flex-col'>
                  <p className='text-lg font-medium text-green-50'>Agregaste {counter} unidades de {name} al carrito de compras!</p>
                  <Link 
                  className='no-underline m-1 py-1 px-10 bg-gray-100 rounded-xl self-center text-2xl text-green-500 hover:bg-gray-300' 
                  to='/'
                  >Seguir comprando
                  </Link>
                  <Link 
                  className='no-underline m-1 py-1 px-20 bg-green-500 rounded-xl self-center text-2xl text-black hover:bg-green-600' 
                  to='/cart'
                  >Ir al Carrito
                  </Link>
                  
                </div>
              }
          </div>
          </>
          :
          <>
            <div className='self-center'>
              <p className='text-2xl p-2 text-red-500'>Producto sin stock</p>
              {/* <Link to='/'>
                <button className='bg-orange-500 hover:bg-orange-600 rounded text-white p-2 px-4 text-xl '>Volver</button>
              </Link> */}
            </div>
          </>
        }
      </div>
      <hr/>
    </div>
  )
}

export default ItemDetail