import React, { useState } from "react"
import ItemCount from "./ItemCount"

const ItemListContainer = ({title, description}) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <ItemCount initialValue={1} stock={5}/>
    </div>
  )
}

export default ItemListContainer