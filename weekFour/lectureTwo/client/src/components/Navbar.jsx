import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <h1>
            <Link to="/">Home</Link> | <Link to="/shavingcream">Shaving Cream</Link> | <Link to="/pizza">Pizza</Link> | <Link to="/unicorn">Unicorn</Link>
        </h1>
      
    </div>
  )
}

export default Navbar