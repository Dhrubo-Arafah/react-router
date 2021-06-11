import React from 'react'
import { Route, Switch } from 'react-router'
import Home from './Body/Home'
import Topics from './Body/Topics'
import Navigation from './Header/Navigation'

const Main = () => {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route
          exact path="/"
          component={Home}
        />
        <Route path="/topics" component={ Topics}/>
      </Switch>
    </div>
  )
}

export default Main
