import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Background from '../styles/image/background.jpg'
import Search from './Search'

const Forecast = () => {
  const [forecasts, updateForecasts] = useState([])


  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/group?id=2643743,4219762,2988507,1850144,2643123,5128581,2463679,2306104,524901&appid=8569449663f37c3e52851a11d8ac7e5c')
      .then(resp => {
        updateForecasts(resp.data.list)
      })
  }, [])

  return <div className="background" style={{ backgroundImage: `url("${Background}")` }}>
       <Search />
    <div className="section">
      <div className="container">
        <div className="columns is-multiline is-mobile">
          {forecasts.map((city, index) => {
            return <div
              className="column is-one-third-desktop is-half-tablet is-half-mobile"
              key={index}>
              <Link to={`/project-2/Forecast/${city.id}`}>
                <div className="card forecast-card">
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <h2 className="title is-4">{city.name}</h2>
                        <p className="subtitle is-4">{city.weather[0].main}</p>
                        <p className="subtitle is-4">{city.weather[0].description}</p>
                        <p className="subtitle is-4">{Math.round((city.main.temp) - 273.15)}°C</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          })}
        </div>
      </div>
    </div>
  </div>
}


export default Forecast