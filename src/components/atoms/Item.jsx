import React from 'react'
import ItemCount from './ItemCount'

const Item = ({product}) => {
  return (
    <div key={product.id} className="w-96 bg-gray-800 py-4 m-4 flex flex-col items-center rounded-xl">
      <h3>{product.name}</h3>
      <img src={product.img} alt={product.name} className=""/>
      <p className='mt-2 text-xl'>{product.category}</p>
      <p className='text-2xl'>${product.price}</p>
      <button>Ver más información</button>
      <div>
        <ItemCount initialValue={1} stock={5}/>
      </div>
    </div>
  )
}

export default Item