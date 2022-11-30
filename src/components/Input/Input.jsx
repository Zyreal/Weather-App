import React, { useState } from 'react'
import './Input.scss'

function Input({ setQuery }) {
  const [city, setCity] = useState('')

  const search = e => {
    if (e.key === "Enter") {
      if (city !== '') setQuery({q: city})
      setCity('')
    }
  }

  return (
    <div className='search-box'>
        <input
        type='text'
        placeholder='Search a city' 
        className='search-bar'
        onChange={(e) => (setCity(e.currentTarget.value))}
        value={city}
        onKeyPress={search}/>
    </div>
  )
}

export default Input