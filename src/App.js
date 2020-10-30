import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bulma'
import './styles/style.scss'

import Navbar from './components/Navbar'
import Forecast from './components/Forecast'
import Home from './components/Home'
import City from './components/City'
import Search from './components/Search'
import SearchResult from './components/SearchResult'

const App = () => {
  return <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/project-2/" component={Home} />
      <Route exact path="/project-2/Forecast" component={Forecast} />
      <Route exact path="/project-2/Forecast/:cityId" component={City} />
      <Route exact path="/project-2/Search" component={Search} />
      <Route exact path="/project-2/Search/:searchId" component={SearchResult} />
    </Switch>
  </BrowserRouter>
}

export default App