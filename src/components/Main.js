import React from 'react'
import {Switch, Route } from 'react-router-dom';
import About from './Body/About';
import Child from './Body/Child';
import Dashboard from './Body/Dashboard';
import Error from './Body/Error';
import Home from './Body/Home';
import User from './Body/User';
import Navigation from './Header/Navigation';

const Main = () => {
  return (
    <div>
      <Navigation/>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/dashboard"><Dashboard /></Route>
        <Route exact path="/user"><User/></Route>
        <Route path="/user/:name/:email" children={<Child />} />
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </div>
  )
}

export default Main
