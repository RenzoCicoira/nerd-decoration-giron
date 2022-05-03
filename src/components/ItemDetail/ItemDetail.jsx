import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemDetailDesktop from './ItemDetailDesktop'
import ItemDetailUndefined from './ItemDetailUndefined'
import ItemDetailMobile from './ItemDetailMobile'


const ItemDetail = ({name, price, img, stock, description, id}) => {

  const [isMobile, setIsMobile] = useState(false)

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

  const checkIsMobile = () => {
    console.log(window.visualViewport.width)
    if (window.visualViewport.width <= 1024) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    checkIsMobile()

    window.addEventListener('resize', checkIsMobile)

    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  if(name === undefined) {
    return (
      <ItemDetailUndefined />
    )

  } else {
    return (
      isMobile
      ? <ItemDetailMobile 
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
      : <ItemDetailDesktop
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