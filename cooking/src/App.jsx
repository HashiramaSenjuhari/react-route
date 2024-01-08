import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Food from './pages/Food'
import About from './pages/About'
import './App.scss'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dish/:id' element={<Food/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </>
  )
}

export default App