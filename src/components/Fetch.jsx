import React, { useEffect, useState } from 'react'
import Characters from './Characters'

const Fetch = () => {
  const[characters, setCharacters] = useState([])

  useEffect(() => {
      fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(error))
  },[])

  return (
    <div className='flex flex-wrap justify-center'>
      {characters.map((character) => <Characters key={character.id} character={character}/>)}
    </div>
  )
}

export default Fetch