import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Background from '../styles/image/background.jpg'
import Search from './Search'

const SearchResult = (props) => {
  const searchId = props.match.params.searchId

  const [search, updateSearch] = useState({})

  useEffect(() => {
    axios.get(`https://api.weatherstack.com/forecast?access_key=a848c9cf9160abde52d49e6e6613652b&query=${searchId}/`)
      .then(resp => {
        const data = resp.data
        updateSearch(data)
      })
  }, [searchId])

  if (!search.location) {
    return <div className="background" style={{backgroundImage: `url("${Background}")` }}>
      <h2 className="loading"> Loading... </h2>
    </div>
  }

  return <div className="background" style={{backgroundImage: `url("${Background}")` }}>
    <Search />
    <div className="section">
    <div className="container city-group">
      <div className="columns is-multiline is-mobile">
        <div className="card" style={{ backgroundColor: ((search.current.temperature) > 18 ? 'rgb(253, 214, 84)' : 'lightBlue'), border: '10px solid lightgrey' }}  >
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <h2 className="title is-10">{search.location.name}, {search.location.country}</h2>
                <p className="subtitle is-10" style={{ color: ((search.current.temperature) > 18 ? 'orange' : 'darkBlue') }} > {Math.round(search.current.temperature)}°C</p>
                <p className="subtitle is-10 description" style={{ fontWeight: 'bolder' }} >{search.current.weather_descriptions[0]}</p>
                <footer className="card-footer">
                  <p className="card-footer-item" style={{ color: ((search.current.temperature) < 15 ? 'mediumBlue' : 'black') }}>
                      LOW: {Math.round(search.forecast['2020-10-29'].mintemp)}°C
                  </p>
                  <p className="card-footer-item" style={{ color: ((search.current.temperature) > 30 ? 'red' : 'black') }}>
                      HIGH: {Math.round(search.forecast['2020-10-29'].maxtemp)}°C
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