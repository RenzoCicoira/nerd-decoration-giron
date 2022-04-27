import React from 'react'
import { Link } from 'react-router-dom'

const SuccessCheckout = ({orderId}) => {
  return (
    <div className='h-screen flex flex-col items-center'>
      <div className='mt-24 p-8 rounded-xl bg-components flex flex-col items-center'>
        <h2 className='text-3xl'>Tu compra se ha realizado exitosamente!</h2>
        <p className='text-xl pt-4'>El número de orden de tu compra es: {orderId}</p>
        <Link to='/' className='bg-orange-500 hover:bg-orange-600 px-8 py-2 m-2 text-2xl rounded no-underline text-white mt-4'>Volver al Inicio</Link>
      </div>
    </div>
  )
}

export default SuccessCheckout