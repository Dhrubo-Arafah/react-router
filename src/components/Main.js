import React from 'react'
import {Switch, Route } from 'react-router-dom';
import About from './Body/About';
import Dashboard from './Body/Dashboard';
import Error from './Body/Error';
import Home from './Body/Home';
import Navigation from './Header/Navigation';

const Main = () => {
  return (
    <div>
      <Navigation/>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/dashboard"><Dashboard /></Route>
        <Route path="*">
          <Error/>
        </Route>
      </Switch>
    </div>
  )
}

export default Main
