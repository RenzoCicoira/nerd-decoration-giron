import React, { useState } from 'react'

const ItemCount = ({max = 10, name}) => {
  const [counter, setCounter] = useState (1)

  const add = () =>{
    counter < max && setCounter (counter + 1)
  }
  const subtract = () => {
    counter > 1 && setCounter (counter - 1)
  }

  const addToCart = () => {
    if(counter === 0){
      console.log(`No agregaste ningún artículo al carrito`)
    } else if (counter === 1){
      console.log(`Agregaste 1 artículo al carrito`)
    } else {
      console.log(`Agregaste ${counter} ${name} al carrito`)
    }
  }

  return (
    <div className='flex flex-col items-center bg-gray-600 w-60 pb-4 mt-2 rounded-xl'>
      <div>
        <button onClick={subtract} className='m-4 py-1 px-2 bg-red-500 rounded-xl'>-</button>
        <span className='text-white'>{counter}</span>
        <button onClick={add} className='m-4 py-1 px-2 bg-green-500 rounded-xl'>+</button>
      </div>
      <button onClick={addToCart} className='p-2 bg-white rounded text-black'>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount