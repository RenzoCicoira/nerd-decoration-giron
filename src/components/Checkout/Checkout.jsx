import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { Navigate, useNavigate } from 'react-router-dom'
import { db } from '../../firebase/config'
import { getDocs, query, where, documentId, writeBatch,  collection, addDoc, Timestamp } from "firebase/firestore"
import { Link } from 'react-router-dom'
// import WithoutStock from './WithoutStock'

const Checkout = () => {

  const {cart, cartTotal, emptyCart} = useContext(CartContext)

  const [orderId, setOrderId] = useState(null)

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(-1)
  }

  const [values, setValues] = useState({
    name: '',
    lastname: '',
    email: '',
    tel: '',
    dir: '',
  })

  const handleInputChange = (e) => {
    console.log(e.target.value)
    console.log(e.target.id)

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
            .finally(() => {
              
            })
        })
    } else {
      alert(
        `Hay items sin stock.
Por favor vuelve al carrito y edita tu compra`
      )
      // return(
      //   <WithoutStock />
      // )
    }

  
  }

  if(orderId) {
    return (
      <div className='h-screen flex flex-col items-center'>
        <div className='mt-24 p-8 rounded-xl bg-components flex flex-col items-center'>
          <h2 className='text-5xl'>Tu compra se ha realizado exitosamente!</h2>
          <p className='text-3xl pt-4'>El número de orden de tu compra es: {orderId}</p>
          <Link to='/' className='bg-orange-500 hover:bg-orange-600 px-8 py-2 m-2 text-4xl rounded no-underline text-white mt-4'>Volver al Inicio</Link>
        </div>
      </div>
    )
  }


  if (cart.length === 0) {
    return <Navigate to='/'/>
  }

  return (
    <div className='flex flex-col items-center h-screen'>
      <div className='mt-24 p-4 bg-components rounded-xl w-1/2'>
        <div>
          <button className="text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded" onClick={handleNavigate}>Volver</button>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className=''>Checkout</h2>
          <p className='text-2xl m-2'>Formulario de confirmación de compra</p>
        </div>
        <div className='mt-4 w-full'>
          <form onSubmit={handleSubmit} className='flex flex-col items-center'>
            <input 
              required
              className='border m-2 text-xl text-black w-2/3' 
              placeholder='Nombre' 
              type={"text"} 
              value={values.name}
              id='name'
              onChange={handleInputChange}
            />
            <input 
              required
              className='border m-2 text-xl text-black w-2/3' 
              placeholder='Apellido' 
              type={"text"} 
              value={values.lastname}
              id='lastname'
              onChange={handleInputChange}
            />
            <input 
              required
              className='border m-2 text-xl text-black w-2/3' 
              placeholder='Email' 
              type={"email"} 
              value={values.email}
              id='email'
              onChange={handleInputChange}
            />
            <input 
              required
              className='border m-2 text-xl text-black w-2/3' 
              placeholder='Teléfono' 
              type={"tel"} 
              value={values.tel}
              id='tel'
              onChange={handleInputChange}
            />
            <input 
              required
              className='border m-2 text-xl text-black w-2/3' 
              placeholder='Dirección' 
              type={"dir"} 
              value={values.dir}
              id='dir'
              onChange={handleInputChange}
            />
            <button  
              className='bg-green-500 hover:bg-green-600 rounded w-2/3 py-1 my-4 text-2xl' 
              type='submit'
              >Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Checkout