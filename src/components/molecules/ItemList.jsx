 import React from 'react'
  import Item from '../atoms/Item'
 
 const ItemList = ({arrayProducts}) => {
   return (
     <div className=''>
      <div className='flex flex-wrap justify-center'>
        {arrayProducts.map(product => <Item product={product} key={product.id}/>)}
      </div>
     </div>
   )
 }
 
 export default ItemList