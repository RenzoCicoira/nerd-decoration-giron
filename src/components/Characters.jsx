import React from 'react'

const Characters = ({character}) => {
  const {name, status, image, id} = character
  return (
    <div key={id} className="w-96 bg-gray-800 py-4 m-4 flex flex-col items-center rounded-xl">
      <img src={image} alt={name} className=""/>
      <h3 className='mt-2'>{name}</h3>
      <p className='text-2xl'>Status: {status}</p>
    </div>

  )
}

export default Characters