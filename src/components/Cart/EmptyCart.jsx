import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
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

export default EmptyCart