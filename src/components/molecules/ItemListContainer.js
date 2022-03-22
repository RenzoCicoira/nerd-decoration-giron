import { ItemList } from "./ItemList"

const ItemListContainer = ({title, description}) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <ItemList />
    </div>
  )
}

export default ItemListContainer