import React from 'react'
import { Link } from 'react-router-dom'

const ItemDetailUndefined = () => {
  return (
    <div>
      <div className='flex flex-col items-center bg-components mt-24 mb-60 p-10'>
        <p className='text-4xl'>El producto que estás intentado buscar no existe</p>
        <p className='text-3xl'>Por favor selecciona uno de la lista de productos.</p>
        <Link to='/'>
            <button 
            className='bg-orange-500 rounded px-3 py-2 mt-4 text-2xl text-white hover:bg-orange-600'
            >Ir a Productos
            </button>
          </Link>
      </div>
    </div>
  )
}

export default ItemDetailUndefined