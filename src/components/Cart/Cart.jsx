import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { FaTrashAlt } from 'react-icons/fa'

const Cart = () => {

  const { cart, cartTotal, emptyCart, removeItem } = useContext(CartContext)

  console.log(cart)

  return (
    <div className='flex flex-col items-center'>
      <h2 className='m-4 text-5xl'>Tu compra:</h2>

      {
        cart.map((item) => (
          <div key={item.id} className='m-2 p-2 w-64'>
            <h4>{item.name}</h4>
            <img src={item.img} alt={item.name} className='w-64'/>
            <p className='mt-2 text-lg'>Cantidad: {item.counter}</p>
            <p className='text-lg'>Precio unitario: ${item.price}</p>
            <h5>Precio total: ${item.price * item.counter}</h5>
            <button 
              onClick={() => removeItem(item.id)} 
              className='bg-red-500 p-2 text-lg rounded'
            >
              <FaTrashAlt/>
            </button>
            <hr />
          </div>
        ))
      }

      <h3>TOTAL: ${cartTotal()}</h3>
      <hr />
      <button onClick={emptyCart} className='bg-red-500 text-2xl m-2 p-2 rounded'>Vaciar Carrito</button>
    </div>
  )
}

export default Cart