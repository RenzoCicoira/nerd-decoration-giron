import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import { Navigate, useNavigate } from 'react-router-dom'
import { db } from '../../firebase/config'
import { getDocs, query, where, documentId, writeBatch,  collection, addDoc, Timestamp } from "firebase/firestore"
import SuccessCheckout from './SuccessCheckout'
import DeskCheckoutForm from './DeskCheckoutForm'
import MobCheckoutForm from './MobCheckoutForm'
import WithoutStock from './WithoutStock'

const Checkout = () => {

  const {cart, cartTotal, emptyCart} = useContext(CartContext)

  const [orderId, setOrderId] = useState(null)

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

  // cree un estado que cambiará segun si el checkout pasa o no y lo inicialicé en false
  const [outOfStock, setOutOfStock] = useState(false)

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(-1)
  }

  const [values, setValues] = useState({
    name: '',
    lastname: '',
    email: '',
    emailComp: '',
    tel: '',
    dir: '',
  })

  const handleInputChange = (e) => {

    setValues({
      ...values,
      [e.target.id]: e.target.value
    })

  }



const handleSubmit = async (e) => {
  e.preventDefault()

  const orden = {
    items: cart,
    total: cartTotal(),
    buyer: {...values},
    timestamp: Timestamp.fromDate(new Date())
  }

  const batch = writeBatch(db)
  const ordersRef = collection(db, 'orders')
  const productsRef = collection(db, 'products')
 // armo query de búsqueda
  const q = query(productsRef, where(documentId(), 'in', cart.map( (item) => item.id) ))
  // traigo la colección
  const products = await getDocs(q)
  // genero un array para pushear luego los items sin stock
  const outOfStock = []
  // itero para comparar y preparar el batch
  products.docs.forEach((doc) => {
    const itemInCart = cart.find((item) => item.id === doc.id)

    if (doc.data().stock >= itemInCart.counter) {
      batch.update(doc.ref, {
        stock: doc.data().stock - itemInCart.counter
      }) 
    } else {
      outOfStock.push(itemInCart)
    }
  })

  // evaluo que todos hayan cumplido la condición
  if (outOfStock.length === 0) {
    batch.commit()
      .then(() => {
        addDoc(ordersRef, orden)
          .then((doc) => {
            setOrderId(doc.id)
            emptyCart()
          })
      })
  } else {
    setOutOfStock(true)
    // si no pasa, el estado cambia a true
  }

}


  

  // si el estado es true, entonces se renderiza el componente WithoutStock
  if(outOfStock === true ) {
    return (
      <WithoutStock/>
    )
  }

  if(orderId) {
    return (
      <SuccessCheckout orderId={orderId}/>
    )
  }

  if (cart.length === 0) {
    return <Navigate to='/'/>
  }

  return (
    isMobile
    ? <MobCheckoutForm
        handleNavigate={handleNavigate}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        values={values}
      />
    : <DeskCheckoutForm 
        handleNavigate={handleNavigate}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        values={values}
      />
  )
}

export default Checkout