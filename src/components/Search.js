import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Search = () => {
  const [api, updateApi] = useState([])
  const [cityFilter, updateCityFilter] = useState('')

  useEffect(() => {
    axios.get(`http://api.weatherstack.com/forecast?access_key=a848c9cf9160abde52d49e6e6613652b&query=Italy/`)
      .then(resp => {
        updateApi(resp.data)
        console.log(resp.data)
      })
  }, [])


  function filterCity() {
    const filteredCity = api.filter(search => {
      const name = search.location.name.toLowerCase()
      const filterText = cityFilter.toLowerCase()
      return name.includes(filterText)
    })
    return filteredCity
  }
  return <div className="section">
      <div className="container search-city">
        <input
          className="input search-input"
          placeholder="Find your city"
          onChange={(event) => updateCityFilter(event.target.value)}
          value={cityFilter}
        />
        <Link to={`/project-2/Search/${cityFilter}`}>
          <button className="search">
            Search
            </button>
        </Link>

      </div>
    </div>
}

export default Search