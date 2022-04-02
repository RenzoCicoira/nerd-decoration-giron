import React from 'react'

const Select = ({options = [], onSelect}) => {

  const handleSelect = (e) => {
    onSelect(e.target.value)
  }

  return (
    <select className='text-black' onChange={handleSelect}>
      {options.map((elem) => <option value={elem.value}>{elem.text}</option>)}
    </select>
  )
}

export default Select