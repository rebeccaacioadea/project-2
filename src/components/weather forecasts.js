import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// what we want:
// 6 buttons for London, Paris, New York, Rome, Tokyo, Manchester.
// Search bar: searches by name - name is then put in to the end of the api after query=
// search bar results in only that cities button coming up.
// button takes you to city page.

const Forecast = () => {
  const [forecasts, updateForecasts] = useState({})
  const [weatherFilter, updateWeatherFilter] = useState('')
  const [selectedName, updateSelectedName] = useState('')

  useEffect(() => {
    axios.get('http://api.openweathermap.org/data/2.5/group?id=2643743,4219762,2988507,1850144,2643123,5128581&appid=8569449663f37c3e52851a11d8ac7e5c')
    // http://api.weatherstack.com/forecast?access_key=a848c9cf9160abde52d49e6e6613652b&query=Italy/
      .then(resp => {
        updateForecasts(resp.data.list)
        console.log(resp.data.list)
      })
  }, [])

  const forecastsArray = Object.entries(forecasts)
  console.log(forecastsArray)
  function filterWeather() {
    const filteredWeather = forecastsArray.filter(forecast => {
      const name = forecast.name.toLowerCase()
      const filterText = weatherFilter.toLowerCase()
      return name.include(filterText) && (selectedName === '' ||
        forecast.name === selectedWeather)
    })
    return filteredWeather
  }
  // filters the forecasts by the city names, this will be connected to the search.

  function findCity() {
    const mappedForecasts = forecastsArray.filter(forecast.name)
    const uniqueNames = new Set(mappedForecasts)
    const nameArray = Array.from(uniqueNames)
    return nameArray
  }
  // this function puts all the different cities in to an array.

  return <div className="section">
    <div className="container">
      <input
        className="input"
        placeholder="Find your city..."
        onChange={(event) => updateWeatherFilter(event.target.value)}
        value={weatherFilter}
      />
      {/* search bar set up */}
      <div className="buttons">
        {findCity().map(name => {
          return <button
            onClick={(event) => updateSelectedName(event.target.innerHTML)}
            className="button"
          >
            {name}
          </button>
          // buttons for the six chosen cities and for the button that occurs when searched.
        })}
      </div> 
      <div className="columns is-multiline is-mobile">
        {filterWeather().map((forecast, index) => {
          return <div
            className="column is-one-third-desktop is-half-tablet is-half-mobile"
            key={index}>
            {/* <Link to {`/forecast/${city.cityLatitude}`}> */}
              <div className="card">
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <h2 className="title is-4">{forecast.name}</h2>
                      <p className="subtitle is-4">{forecast.weather.main}</p>
                      <p className="subtitle is-4">{forecast.weather.description}</p>
                      <p className="subtitle is-4">{forecast.main.temp}</p>
                    </div>
                  </div>
                </div>
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={forecast.weather_icons} alt={forecast.name} />
                  </figure>
                </div>
              </div>
            {/* </Link> */}
            {/* links the button to the city page. */}
          </div>
        })}
      </div>
    </div>
  </div>
}

export default Forecast