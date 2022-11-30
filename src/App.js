import React, { useState, useEffect } from 'react'
import TopButton from './components/TopButton/TopButton.jsx'
import Input from './components/Input/Input.jsx'
import Weather from './components/Weather/Weather.jsx'
import ForecastDetail from './components/ForecastDetail/ForecastDetail.jsx'
import getFormattedWeatherData from './components/FormatWeather.jsx'

function App() {
  const [query, setQuery] = useState({ q: 'new york' })
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    fetchWeather()
  }, [query])

  const fetchWeather = async () => {
    await getFormattedWeatherData({ ...query, }).then((data) => {
      setWeather(data)
    })
  }

  return (
    <div className={'App ' + (weather !== null ? (weather.temp > 15) ? (weather.temp > 30) ? 'hot' : 'warm' : 'cold' : 'cold')}>
      <TopButton setQuery={setQuery} />
      <Input setQuery={setQuery} />
      {weather && (
        <div>
          <Weather weather={weather} />
          <ForecastDetail forecast={weather.list} />
        </div>
      )
      }
    </div>
  );
}

export default App;
