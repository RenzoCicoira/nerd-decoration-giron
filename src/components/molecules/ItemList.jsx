 import React from 'react'
  import Item from '../atoms/Item'
 
 const ItemList = ({arrayProducts}) => {
   return (
     <div className='grid grid-cols-3'>
       {arrayProducts.map(product => <Item product={product} key={product.id}/>)}
     </div>
   )
 }
 
 export default ItemList