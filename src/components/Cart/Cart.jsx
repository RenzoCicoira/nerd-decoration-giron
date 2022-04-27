import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import EmptyCart from './EmptyCart'
import DesktopCartView from './DesktopCartView'
import MobileCartView from './MobileCartView'

const Cart = () => {

  const { cart } = useContext(CartContext)

 const [isMobile, setIsMobile] = useState(false)

 const checkIsMobile = () => {
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

  if(cart.length === 0 ){
    return (
      <EmptyCart />
    )
  }

  return (
    isMobile 
    ? <MobileCartView />
    : <DesktopCartView/>
    
  )
}

export default Cart