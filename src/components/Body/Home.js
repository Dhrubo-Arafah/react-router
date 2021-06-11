import React from 'react'
import { useLocation } from 'react-router'

const Home = () => {
  const location = useLocation();
  return (
    <div>
      <h2>{location.pathname}</h2>
    </div>
  )
}

export default Home
