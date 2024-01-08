import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'
import Nav from '../components/Nav'
import Recipe from '../data/Recipe'

const Home = () => {
  return (
    <>
      <div id='home'>
        <Nav/>
        {/* <h1>{Recipe}</h1> */}
      </div>    
    </>

  )
}

export default Home