import React, { useState, useEffect } from 'react'
import ItemDesktop from './ItemDesktop'
import ItemMobile from './ItemMobile'


const Item = ({product}) => {
  
  const {name, price, img, id} = product

  const [isMobile, setIsMobile] = useState(false)

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

  return (
    isMobile
    ? <ItemMobile 
        name={name}
        price={price}
        img={img}
        id={id}
      />
    : <ItemDesktop 
        name={name}
        price={price}
        img={img}
        id={id}
      />
  )
}

export default Item