import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'


const DesktopCartView = () => {

  const { cart, cartTotal, emptyCart, removeItem } = useContext(CartContext)


  return (
    <div className=' flex flex-col items-center'>
      <div className='w-2/3 bg-components m-4 p-4 rounded-xl flex flex-col items-center'>
        <div className='flex self-start'>
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
            <div key={item.id} className='bg-components h-64 w-2/3 m-2 p-2 flex flex-col'>
              <div className='flex justify-center'>
                <p className='text-3xl'>{item.name}</p>
              </div>
              <div className='flex justify-around items-center'>
                <div>
                  <img src={item.img} alt={item.name} className='h-44'/>
                </div>
                <div>
                  <p className='mt-2 text-lg'>Cantidad: {item.counter}</p>
                  <p className='text-lg'>Precio unitario: ${item.price}</p>
                  <h5>Precio total: ${item.price * item.counter}</h5>
                </div>
                <div className='flex flex-col ml-1 pb-2'>
                  <Link 
                    onClick={() => removeItem(item.id)} 
                    to={`/detail/${item.id}`}
                    className='bg-yellow-500 hover:bg-yellow-600 p-2 text-lg rounded my-3 text-white'
                    >
                    <FaEdit/>
                  </Link>
                  <button 
                    onClick={() => removeItem(item.id)} 
                    className='bg-red-500 hover:bg-red-600 p-2 text-lg rounded my-3'
                    >
                    <FaTrashAlt/>
                  </button>
                </div>
              </div>
            </div> 
          ))
        }
        <h3 className='m-4'>TOTAL: ${cartTotal()}</h3>
        
        <button onClick={emptyCart} className='bg-red-500 hover:bg-red-600 text-xl m-2 py-2 px-4 rounded'>Vaciar Carrito</button>
        <Link to='/checkout' className='bg-green-500 hover:bg-green-600 text-2xl m-2 py-2.5 px-4 rounded text-white no-underline'>Terminar mi Compra</Link>
        </div>
    </div>
  )
}

export default DesktopCartView