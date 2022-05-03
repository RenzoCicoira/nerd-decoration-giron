import React from 'react'
import { Link } from 'react-router-dom'

const ItemMobile = ({name, price, img, id}) => {
  return (
    <div key={id} className="w-72 bg-components py-4 my-6 mx-4 flex flex-col items-center rounded-xl">
      <img src={img} alt={name} className="mt-2 h-60 px-3"/>
      <p className='mt-4 text-xl'>{name}</p>
      <p className='text-2xl'>${price}</p>
      <Link to={`/detail/${id}`}><button className='bg-orange-500 hover:bg-orange-600 p-2 px-4 text-lg text-white rounded'>Ver más</button></Link>
    </div>
  )
}

export default ItemMobile