import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Background from '../styles/image/background.jpg'
import Search from './Search'

const SearchResult = (props) => {
  const searchId = props.match.params.searchId

  const [search, updateSearch] = useState({})

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchId}&appid=8569449663f37c3e52851a11d8ac7e5c`)
      .then(resp => {
        const data = resp.data
        updateSearch(data)
        console.log(data)
      })
  }, [searchId])
console.log(search)

  if (!search.name) {
    return <div className="background" style={{backgroundImage: `url(${Background})` }}>
      <h2 className="loading"> Loading... </h2>
    </div>
  }

  return  <div className="background" style={{ backgroundImage: `url(${Background})` }}>
    <Search />
    <div className="section">
    <div className="container city-group">
      <div className="columns is-multiline is-mobile">
        <div className="card" style={{ backgroundColor: (((search.main.temp) - 273.15) > 18 ? 'rgb(253, 214, 84)' : 'lightBlue'), border: '10px solid lightgrey' }}  >
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <h2 className="title is-10">{search.name}, {search.sys.country} </h2>
                <p className="subtitle is-10" style={{ color: (((search.main.temp) - 273.15) > 18 ? 'orange' : 'darkBlue') }}> {Math.round((search.main.temp) - 273.15)}°C</p>
                <p className="subtitle is-10 description" style={{ fontWeight: 'bolder' }} >{search.weather[0].description}</p>
                <footer className="card-footer">
                  <p className="card-footer-item" style={{ color: (((search.main.temp) - 273.15) < 15 ? 'mediumBlue' : 'black') }}>
                      LOW: {Math.round((search.main.temp_min) - 273.15)}°C
                  </p>
                  <p className="card-footer-item" style={{ color: (((search.main.temp) - 273.15) > 30 ? 'red' : 'black') }}>
                      HIGH: {Math.round((search.main.temp_max) - 273.15)}°C
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

export default SearchResult