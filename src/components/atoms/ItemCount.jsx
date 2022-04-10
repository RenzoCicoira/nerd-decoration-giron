const ItemCount = ({max = 10, onAdd, counter, setCounter}) => {

  const add = () =>{
    counter < max && setCounter (counter + 1)
  }
  const subtract = () => {
    counter > 1 && setCounter (counter - 1)
  }

  return (
    <div>
      <div className='flex flex-col items-center bg-gray-600 w-60 pb-4 mt-2 rounded-xl'>
          <div>
            <button onClick={subtract} 
            disabled={counter === 1}
            className={`m-4 py-1 px-3 rounded-2xl text-2xl  
            ${counter > 1 
              ? 'bg-red-500 hover:bg-red-600'
              : 'bg-gray-300' }
              `
              }>-</button>
            <span className='text-white'>{counter}</span>
            <button onClick={add} 
            disabled={counter === max}
            className={`m-4 py-1 px-3 rounded-2xl text-2xl
            ${ counter < max
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-gray-300'}`
              }>+</button>
          </div>
            <button onClick={onAdd} className='p-2 bg-gray-100 hover:bg-gray-300 rounded text-black'>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount