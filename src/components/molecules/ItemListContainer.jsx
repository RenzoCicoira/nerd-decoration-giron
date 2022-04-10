import ItemList  from "./ItemList"
import { useEffect, useState } from "react"
import { getProducts } from "../../mocks/FakeApi"
import { useParams } from "react-router-dom"

const ItemListContainer = ({title, description}) => {

  const [arrayProducts, setArrayProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const {categoryId} = useParams()

  useEffect (() =>{
    setLoading(true)

    getProducts
    .then((res) => {
      if (categoryId) {
        setArrayProducts(res.filter( (prod) => prod.category === categoryId))
      }else {
        setArrayProducts(res)
      }
    })
    .catch((error) => {
      console.log(error)
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