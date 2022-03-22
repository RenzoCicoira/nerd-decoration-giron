import React from 'react'
import ItemCount from './ItemCount'

const Item = ({name, category, price, img, id}) => {
  return (
    <div key={id} className="w-96 bg-gray-800 py-4 m-4 flex flex-col items-center rounded-xl">
      <h3>{name}</h3>
      <img src={img} alt="producto" className=""/>
      <p className='mt-2 text-xl'>{category}</p>
      <p className='text-2xl'>${price}</p>
      <button>Ver más información</button>
      <div>
        <ItemCount initialValue={1} stock={5}/>
      </div>
    </div>
  )
}

export default Item