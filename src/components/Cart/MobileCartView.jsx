import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'


const MobileCartView = () => {

  const { cart, cartTotal, emptyCart, removeItem } = useContext(CartContext)

  return (
    <div className=' flex flex-col items-center'>
      <div className='bg-components m-4 p-4 rounded-xl flex flex-col items-center'>
        <div>
          <Link to='/'>
            <button 
            className='bg-orange-500 rounded px-3 py-2 mt-2 text-xl text-white hover:bg-orange-600'
            >Agregar más productos
            </button>
          </Link>
        </div>
        <h2 className='m-4 text-4xl'>Tu compra:</h2>
        {
          cart.map((item) => (
            <div key={item.id} className='bg-components w-64 m-2 p-2 flex flex-col'>
              <div className='flex justify-center'>
                <p className='text-2xl'>{item.name}</p>
              </div>
              <div className='flex flex-col justify-around items-center'>
                <div>
                  <img src={item.img} alt={item.name} className='h-44'/>
                </div>
                <div>
                  <p className='mt-2 text-base'>Cantidad: {item.counter}</p>
                  <p className='text-base'>Precio unitario: ${item.price}</p>
                  <p className='text-lg'>Precio total: ${item.price * item.counter}</p>
                </div>
                <div className='flex pb-2'>
                  <Link 
                    onClick={() => removeItem(item.id)} 
                    to={`/detail/${item.id}`}
                    className='bg-yellow-500 hover:bg-yellow-600 p-2 text-lg rounded h-8 text-white mx-4'
                    >
                    <FaEdit/>
                  </Link>
                  <button 
                    onClick={() => removeItem(item.id)} 
                    className='bg-red-500 hover:bg-red-600 p-2 text-lg rounded h-8 mx-4'
                    >
                    <FaTrashAlt/>
                  </button>
                </div>
              </div>
            </div> 
          ))
        }
        <h3 className='m-4'>TOTAL: ${cartTotal()}</h3>
        
        <button onClick={emptyCart} className='bg-red-500 hover:bg-red-600 text-2xl m-2 p-2 rounded'>Vaciar Carrito</button>
        <Link to='/checkout' className='bg-green-500 hover:bg-green-600 text-3xl m-2 p-2.5 rounded text-white no-underline'>Terminar mi Compra</Link>
        </div>
    </div>
  )
}

export default MobileCartView