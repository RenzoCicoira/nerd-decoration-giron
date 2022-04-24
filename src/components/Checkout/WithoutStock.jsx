import React from 'react'
import { Link } from 'react-router-dom'

const WithoutStock = () => {
  return (
    <div className='h-screen flex flex-col items-center'>
      <div className='mt-24 p-8 rounded-xl bg-components flex flex-col items-center'>
        <h2 className='text-5xl'>Hay items sin stock</h2>
        <p className='text-3xl pt-4'>Por favor edita el producto sin stock en tu carrito y prueba de nuevo</p>
        <Link to='/cart' className='bg-orange-500 hover:bg-orange-600 px-8 py-2 m-2 text-4xl rounded no-underline text-white mt-4'>Ir al Carrito</Link>
      </div>
    </div>
  )
}

export default WithoutStock