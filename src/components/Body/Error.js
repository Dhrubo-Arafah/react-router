import React from 'react'
import { useLocation } from 'react-router';

const Error = () => {
      const location = useLocation();
      return (
      <div>
        <h2>Error: {location.pathname}</h2>
      </div>
  )
}

export default Error
