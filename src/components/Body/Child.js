import React from 'react'
import { useParams } from 'react-router'

const Child = () => {
  let { name, email } = useParams();
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Email: { email }</p>
    </div>
  )
}

export default Child
