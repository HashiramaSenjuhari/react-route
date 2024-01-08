import axios from 'axios'

import React from 'react'

const Recipe = () => {
     const fetchData = async() =>{
    const url = 'https://www.themealdb.com/api/json/v1/1/random.php'
    try
    {
      const response = await axios.get(url)
      const data = response.data
      console.log(data)
    }
    catch(error)
    {
      console.error(error)
      throw error
    }
  }
  fetchData()
  return (
    <div>Recipe</div>
  )
}

export default Recipe