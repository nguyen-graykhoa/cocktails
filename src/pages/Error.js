import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='section error-page'>
      <div className="error-container">
        <h1>Oops! it is a dead end</h1>
        <Link to='/' className='btn btn-primary'>Home</Link>
      </div>
      <h2>error page</h2>
    </section>
  )
}

export default Error
