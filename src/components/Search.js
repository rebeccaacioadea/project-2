import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


const Search = () => {
  const [api, updateApi] = useState([])
  const [cityFilter, updateCityFilter] = useState('')

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=8569449663f37c3e52851a11d8ac7e5c`)
      .then(resp => {
        updateApi(resp.data)
        console.log(resp.data)
      })
  }, [])

console.log(api)
  function filterCity() {
    const filteredCity = api.filter(search => {
      const name = search.main.name.toLowerCase()
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
  return <h1>h</h1>
}

export default Search