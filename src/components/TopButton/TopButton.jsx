import React from 'react'
import './TopButton.scss'

function TopButton({ setQuery }) {
    const cities = [
        {
            id: 1,
            city: 'New york'
        },
        {
            id: 2,
            city: 'Toronto'
        },
        {
            id: 3,
            city: 'Sydney'
        },
        {
            id: 4,
            city: 'Tokyo'
        },
        {
            id: 5,
            city: 'London'
        },
    ];
    return (
        <div className='button-container'>
            {cities.map((place) => (
                <button
                key={place.id}
                className='hi'
                onClick={() => setQuery({q: place.city})}>{place.city}</button>
            ))}
        </div>
    )

}

export default TopButton;