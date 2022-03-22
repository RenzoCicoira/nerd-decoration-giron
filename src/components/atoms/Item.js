import React from 'react'

const Item = (name, category, price, img, id) => {
  return (
    <div key={id}>
      <h3>{name}</h3>
      <p>{category}</p>
      <p>{price}</p>
      <img src={img}/>
    </div>
  )
}

export default Item