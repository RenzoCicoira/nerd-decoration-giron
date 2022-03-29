import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../mocks/FakeApi'
import ItemDetail from '../atoms/ItemDetail'

const ItemDetailContainer = () => {

const [productDetail, setProductDetail] = useState(null)
const [loading, setLoading] = useState(false)
const { itemId } = useParams()
console.log(itemId)
console.log(productDetail)

useEffect(() => {

  getProducts
    .then((res) =>{
      setProductDetail(res.find( (prod) => prod.id === itemId) )
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      setLoading(false)
    })
}, [itemId])


  return (
    <div className='flex justify-center'>
      {
      loading 
      ? <h2>Cargando...</h2> 
      : <ItemDetail {...productDetail}/>
      }
    </div>
  )
}

export default ItemDetailContainer