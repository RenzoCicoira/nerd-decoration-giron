import ItemList  from "./ItemList"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "./firebase/config"

const ItemListContainer = ({title, description}) => {

  const [arrayProducts, setArrayProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const {categoryId} = useParams()

  useEffect (() =>{
    setLoading(true)

    // 1. armar la referencia
    const productsRef = collection(db, "products")
    const q = categoryId 
              ? query(productsRef, where('category', '==', categoryId))
              : productsRef
    // 2. llamar (Async) a esa referencia
    getDocs(q)
      .then(resp => {
        const items = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}))
        setArrayProducts(items)
      })
      .finally(() => {
        setLoading(false)
      })
   
  }, [categoryId])

  return (
    <div className="flex flex-col items-center">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      {
        loading 
        ? <p className="text-2xl">Cargando...</p> 
        : <ItemList arrayProducts={arrayProducts}/>
      }
    </div>
  )
}

export default ItemListContainer