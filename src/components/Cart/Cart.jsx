import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'
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
    <div className=' flex flex-col items-center'>
      <div className='bg-components m-4 p-4 rounded-xl flex flex-col items-center'>
        <div className='flex self-start'>
          <Link to='/'>
            <button 
            className='bg-orange-500 rounded px-3 py-2 mt-2 text-xl text-white hover:bg-orange-600'
            >Agregar más productos
            </button>
          </Link>
        </div>
        <h2 className='m-4 text-4xl'>Tu compra:</h2>
        <div className='flex flex-wrap justify-center'>
        {
          cart.map((item) => (
            <div key={item.id} className='bg-components h-64 w-1/2 m-2 p-2 flex flex-col'>
              <div>
                <p className='h-12 text-2xl'>{item.name}</p>
              </div>
                <div className='flex justify-around items-center'>
                  <div>
                    <img src={item.img} alt={item.name} className='w-32'/>
                  </div>
                  <div>
                    <p className='mt-2 text-lg'>Cantidad: {item.counter}</p>
                    <p className='text-lg'>Precio unitario: ${item.price}</p>
                    <h5>Precio total: ${item.price * item.counter}</h5>
                  </div>
                  <div className='flex self-end ml-1 pb-2'>
                    <button 
                      onClick={() => removeItem(item.id)} 
                      className='bg-red-500 hover:bg-red-600 p-2 text-lg rounded'
                      >
                      <FaTrashAlt/>
                    </button>
                  </div>
                  <div className='flex self-end ml-1 pb-2'>
                    <button 
                      onClick={() => removeItem(item.id)} 
                      className='bg-yellow-500 hover:bg-yellow-600 p-2 text-lg rounded'
                      >
                      <FaEdit/>
                    </button>
                  </div>
              </div>
            </div> 
          ))
        }
        </div>
        <h3 className='m-4'>TOTAL: ${cartTotal()}</h3>
        
        <button onClick={emptyCart} className='bg-red-500 hover:bg-red-600 text-2xl m-2 p-2 rounded'>Vaciar Carrito</button>
        <Link to='/checkout' className='bg-green-500 hover:bg-green-600 text-3xl m-2 p-2.5 rounded text-white no-underline'>Terminar mi Compra</Link>
        </div>
    </div>
  )
}

export default Cart