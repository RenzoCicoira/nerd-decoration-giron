import React from 'react'
import { Link } from 'react-router-dom'
import { FaEdit } from 'react-icons/fa'

const AddedToCart = ({removeItem, counter, name, id}) => {

  if(counter === 1) {
    return(
      <div className='flex flex-col items-center'>
      <p className='pl-6 text-lg font-medium text-green-50'>Agregaste 1 unidad de {name} al carrito de compras!</p>
      <button
        onClick={() => removeItem(id)} 
        className='flex items-center no-underline m-1 py-1 px-4 bg-gray-100 rounded-xl self-center text-2xl text-orange-400 hover:bg-gray-200 hover:text-orange-600' 
        to='/'
        ><FaEdit/>
        <div className='px-4'>Editar Compra</div>
      </button>
      <Link 
        className='no-underline m-1 py-1 px-10 bg-gray-100 rounded-xl self-center text-2xl text-green-400 hover:bg-gray-200 hover:text-green-600' 
        to='/'
        >Seguir comprando
      </Link>
      <Link 
        className='no-underline m-1 py-1 px-20 bg-green-500 rounded-xl self-center text-2xl text-black hover:bg-green-600' 
        to='/cart'
        >Ir al Carrito
      </Link>
    </div>
    )
  } 

  return (
    <div className='flex flex-col items-center'>
      <p className='pl-6 text-lg font-medium text-green-50'>Agregaste {counter} unidades de {name} al carrito de compras!</p>
      <button
        onClick={() => removeItem(id)} 
        className='flex items-center no-underline m-1 py-1 px-8 bg-gray-100 rounded-xl self-center text-xl text-orange-400 hover:bg-gray-200 hover:text-orange-600' 
        to='/'
        ><FaEdit/>
        <div className='px-4'>Editar Compra</div>
      </button>
      <Link 
        className='no-underline m-1 py-1 px-12 bg-gray-100 rounded-xl self-center text-xl text-green-400 hover:bg-gray-200 hover:text-green-600' 
        to='/'
        >Seguir comprando
      </Link>
      <Link 
        className='no-underline m-1 py-1 px-20 bg-green-500 rounded-xl self-center text-xl text-black hover:bg-green-600' 
        to='/cart'
        >Ir al Carrito
      </Link>
    </div>
  )
}

export default AddedToCart