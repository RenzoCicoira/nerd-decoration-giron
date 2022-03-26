import ItemList  from "./ItemList"
import { useEffect, useState } from "react"
import { getProducts } from "../../mocks/FakeApi"

const ItemListContainer = ({title, description}) => {
  const [arrayProducts, setArrayProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect (() =>{
    setLoading(true)
    getProducts
    .then((res) => setArrayProducts(res))
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
  },[])

  return (
    <div className="flex flex-col items-center">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      {loading ? <p className="text-2xl">Cargando...</p> : <ItemList arrayProducts={arrayProducts}/>}
      
    </div>
  )
}

export default ItemListContainer