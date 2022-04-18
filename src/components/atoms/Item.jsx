import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
  const {name, price, img, id} = product
  return (
    <div key={id} className="w-96 bg-components py-4 my-10 mx-4 flex flex-col items-center rounded-xl">
      <img src={img} alt={name} className="mt-2 h-64"/>
      <h3 className='mt-4'>{name}</h3>
      <p className='text-2xl'>${price}</p>
      <Link to={`/detail/${id}`}><button className='bg-orange-500 hover:bg-orange-600 p-2 px-4 text-lg text-white rounded'>Ver más</button></Link>
    </div>
  )
}

export default Item