import React from 'react'
import { DateTime, Info } from 'luxon'
import './ForecastDetail.scss'

let day = 0

function ForecastDetail({ forecast }) {
  day = (DateTime.fromSeconds(forecast[0].dt).setZone(forecast[0].timezone).weekday)

  const dayofweek = () => {
    day = day + 1
    if (day > 6) {
      day = 0
    }
    return day
  }

  return (
    <div className='forecast-container'>
      <div className='daily'>
        <p>Weekly Forecast</p>
      </div>
      <hr />
      <div className='weather-cards'>
        {forecast.slice(0, 7).map((item, idx) => (
          <div className='card' key={idx}>
            <p>{Math.round(item.main.temp) + '°C'}</p>
            <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt='' />
            <p>{Info.weekdays()[dayofweek(day)]}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ForecastDetail