import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
  return (
    <nav>
      <Link to={'/'}>
        Home
      </Link>
      <Link to={'/about'}>
        About
      </Link>
    </nav>
  )
}

export default Nav