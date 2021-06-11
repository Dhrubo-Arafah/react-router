import { useFormik } from 'formik'
import React from 'react'
const User = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    onSubmit: ({ name, email }) => {
      console.log(name)
    },
  })
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="Enter Your Name"
        /><br />
        <label htmlFor="email">Email Address: </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Enter Your Email"
        /><br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default User
