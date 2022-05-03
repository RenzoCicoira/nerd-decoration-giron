import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemDetailDesktop from './ItemDetailDesktop'
import ItemDetailUndefined from './ItemDetailUndefined'


const ItemDetail = ({name, price, img, stock, description, id}) => {

  const { addItem} = useContext(CartContext)

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(-1)
  }
  
  const [counter, setCounter] = useState (1)

  const addToCart = () => {
    const itemToAdd = {
      id,
      name,
      price,
      img,
      counter
    }
    addItem(itemToAdd)
  }



  if(name === undefined) {
    return (
      <ItemDetailUndefined />
    )

  } else {
    return (
      <ItemDetailDesktop
      handleNavigate={handleNavigate}
      setCounter={setCounter}
      addToCart={addToCart}
      name={name}
      id={id}
      price={price}
      img={img}
      counter={counter}
      stock={stock}
      description={description}
      />
    )
  }
}

export default ItemDetail