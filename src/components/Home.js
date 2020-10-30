import React from 'react'
import Background from '../styles/image/background.jpg'

const Home = () => {
  return <div style={{backgroundImage: `url("${Background}")`}} className = "hero is-danger is-fullheight-with-navbar">
    <div className = "hero-body">
      <div className = "container has-text-centered">
        <h1 className = "title">Weather</h1>
        <h4 className = "subtitle">Here for all your weather needs</h4>
      </div>
    </div>
  </div>
}

export default Home 