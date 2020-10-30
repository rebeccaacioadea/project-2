import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Background from '../styles/image/background.jpg'
import Search from './Search'


const City = (props) => {

  const cityId = props.match.params.cityId


  const [city, updateCity] = useState({})
  const [CityStyle, updateCityStyle] = useState({})


  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/group?id=${cityId}&appid=8569449663f37c3e52851a11d8ac7e5c`)
      .then(resp => {
        const data = resp.data
        updateCity(data)
      })
  }, [])

  console.log(city)
  if (!city.cnt) {
    return <div>
      <h2> Loading... </h2>
    </div>
  }
  console.log(city)


  return <div className="background" style={{ backgroundImage: `url("${Background}")` }}>
    <Search />
    <div className="section">
    <div className="container city-group">
      <div className="columns is-multiline is-mobile">
        <div className="card" style={{ backgroundColor: (((city.list[0].main.temp) - 273.15) > 18 ? 'rgb(253, 214, 84)' : 'lightBlue'), border: '10px solid lightgrey' }}  >
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <h2 className="title is-10">{city.list[0].name}, {city.list[0].sys.country} </h2>
                <p className="subtitle is-10" style={{ color: (((city.list[0].main.temp) - 273.15) > 18 ? 'orange' : 'darkBlue') }}> {Math.round((city.list[0].main.temp) - 273.15)}°C</p>
                <p className="subtitle is-10 description" style={{ fontWeight: 'bolder' }} >{city.list[0].weather[0].description}</p>
                <footer className="card-footer">
                  <p className="card-footer-item" style={{ color: (((city.list[0].main.temp) - 273.15) < 15 ? 'mediumBlue' : 'black') }}>
                      LOW: {Math.round((city.list[0].main.temp_min) - 273.15)}°C
                  </p>
                  <p className="card-footer-item" style={{ color: (((city.list[0].main.temp) - 273.15) > 30 ? 'red' : 'black') }}>
                      HIGH: {Math.round((city.list[0].main.temp_max) - 273.15)}°C
                  </p>
                </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

}

export default City