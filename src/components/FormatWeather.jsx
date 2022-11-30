import { DateTime } from 'luxon'

const api = {
    key: '95c9eea660ecb99cb974cebd2b71e87e',
    base: 'https://api.openweathermap.org/data/2.5/'
}

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(api.base + infoType)
    const units = 'metric'
    url.search = new URLSearchParams({...searchParams, units, appID: api.key})
    return fetch(url).then((res) => res.json())
}

const formatCurrentWeather = (data) => {
    const {
        coord: { lat, lon },
        main: { temp },
        name,
        dt,
        sys: { country },
        timezone,
        weather,
        wind: { speed },
    } = data
    const { main: description, icon } = weather[0]

    return {
        lat, lon, temp, name, dt, country, timezone, description, icon, speed
    }
}

const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams
    ).then(formatCurrentWeather)
    const { lat, lon } = formattedCurrentWeather
    const formattedForecastWeather = await getWeatherData('forecast', {
        lat,
        lon,
    })
    return { ...formattedCurrentWeather, ...formattedForecastWeather }
}

export default getFormattedWeatherData