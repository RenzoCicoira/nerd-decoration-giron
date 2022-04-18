import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Cart = () => {

  const { cart, cartTotal, emptyCart, removeItem } = useContext(CartContext)

  console.log(cart)

  if(cart.length === 0 ){
    return (
      <div className='flex flex-col items-center h-screen'>
        <div className='mt-24 bg-components p-8 rounded-xl flex flex-col items-center'>
          <h2 className='text-5xl'>Tu Carrito de compras está vacío</h2>
          <p className='text-3xl mt-4'>Agrega productos a tu carrito para realizar la compra</p>
          <Link to='/'>
            <button 
            className='bg-orange-500 rounded px-10 py-3 mt-4 text-3xl text-white hover:bg-orange-600'
            >Agregar Productos
            </button>
          </Link>
          </div>
      </div>
    )
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='bg-components m-4 p-4 rounded-xl flex flex-col items-center'>
        <h2 className='m-4 text-4xl'>Tu compra:</h2>
        <div className='flex flex-wrap justify-center'>
        {
          cart.map((item) => (
            <div key={item.id} className=' m-2 p-2 w-64'>
              <h4 className='h-12 flex items-center'>{item.name}</h4>
              <img src={item.img} alt={item.name} className='h-64'/>
              <p className='mt-2 text-lg'>Cantidad: {item.counter}</p>
              <p className='text-lg'>Precio unitario: ${item.price}</p>
              <h5>Precio total: ${item.price * item.counter}</h5>
              <button 
                onClick={() => removeItem(item.id)} 
                className='bg-red-500 hover:bg-red-600 p-2 text-lg rounded'
              >
                <FaTrashAlt/>
              </button>
              <hr />
            </div> 
          ))
        }
        </div>
        <h3>TOTAL: ${cartTotal()}</h3>
        <hr />
        <button onClick={emptyCart} className='bg-red-500 hover:bg-red-600 text-2xl m-2 p-2 rounded'>Vaciar Carrito</button>
        <Link to='/checkout' className='bg-green-500 hover:bg-green-600 text-3xl m-2 p-2.5 rounded text-white no-underline'>Terminar mi Compra</Link>
        </div>
    </div>
  )
}

export default Cart