import React from 'react'
import { DateTime } from 'luxon'
import './Weather.scss'

function Weather({weather: {description, speed, temp, dt, timezone, name, country}}) {
  return (
    <div className='weather-container'>
      <div className='place'>
        <div className='location'>{`${name}, ${country}`}</div>
        <div className='date'>{DateTime.fromSeconds(dt).setZone(timezone).toFormat("cccc, dd, LLL, yyyy' | Local time: 'hh:mm a")}</div>
      </div>
      <div className='weather-box'>
        <div className='temperature'>
          <div className='temp-number'>{Math.round(temp)}</div>
          <div className='temp-degree'>°C</div>
        </div>
        <div className='status'>
          <div className='weather'>{description}</div>
          <div className='wind'>{`Wind speed: ${speed} m/s`}</div>
        </div>
      </div>
    </div>
  )
}

export default Weather