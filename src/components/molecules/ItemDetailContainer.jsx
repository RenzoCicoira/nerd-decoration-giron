import React, { useEffect, useState } from 'react'
import { getProducts } from '../../mocks/FakeApi'
import ItemDetail from '../atoms/ItemDetail'

const ItemDetailContainer = () => {
const [productDetail, setProductDetail] = useState({})
const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    getProducts
      .then((res) => setProductDetail(res.find((item) => item.id === '1')))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  },[]);


  return (
    <div>
      {loading ? <p>Cargando...</p> : <ItemDetail productDetail={productDetail}/>}
    </div>
  )
}

export default ItemDetailContainer