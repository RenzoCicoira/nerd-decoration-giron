const ItemCount = ({max = 10, onAdd, counter, setCounter}) => {

  const add = () =>{
    counter < max && setCounter (counter + 1)
  }
  const subtract = () => {
    counter > 1 && setCounter (counter - 1)
  }

  return (
    <div className='flex flex-col items-center bg-gray-600 w-60 pb-4 mt-2 rounded-xl'>
      <div>
        <button onClick={subtract} className='m-4 py-1 px-3 bg-red-500 rounded-2xl text-2xl'>-</button>
        <span className='text-white'>{counter}</span>
        <button onClick={add} className='m-4 py-1 px-3 bg-green-500 rounded-2xl text-2xl'>+</button>
      </div>
      <button onClick={onAdd} className='p-2 bg-white rounded text-black'>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount