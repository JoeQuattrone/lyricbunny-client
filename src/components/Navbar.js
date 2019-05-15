import React from 'react'
import NavWord from './NavWord.js'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper orange darken-1">
        <a href="/" className="brand-logo center">
          <NavWord />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
