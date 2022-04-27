import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/config'
import { doc, getDoc } from 'firebase/firestore'
import ItemDetail from '../ItemDetail/ItemDetail'
import Loading from '../Loading'

const ItemDetailContainer = () => {

const [productDetail, setProductDetail] = useState(null)
const [loading, setLoading] = useState(false)
const { itemId } = useParams()

useEffect(() => {
  setLoading(true)

   const docRef = doc(db, "products", itemId)
   getDoc(docRef)
   .then(doc => {
     const prod = {id: doc.id, ...doc.data()}
     setProductDetail(prod)
   })
   .finally(() => {
     setLoading(false)
   })
   
}, [itemId])


  return (
    <div className='flex justify-center'>
      {
      loading 
      ? <Loading />
      : <ItemDetail {...productDetail}/>
      }
    </div>
  )
}

export default ItemDetailContainer