import React from 'react'
import { ImSpinner } from 'react-icons/im'

const Loading = () => {
  return (
    <div className='w-96 h-64 bg-components justify-center mt-36 mb-56 flex flex-col items-center rounded-xl'>
      <p className='text-3xl p-2'>Cargando...</p>
      <ImSpinner className='text-6xl'/>
    </div>
  )
}

export default Loading