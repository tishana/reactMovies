import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/Form'
import MovieDisplay from './components/MovieDisplay'

export default function App() {
  // api key
  const apiKey='da340fc4'
  // const apiKey = process.env.REACT_APP_APIKEY
  // state for this application
  const [movie, setMovie] = useState(null)
  

  // Function to get the movies
  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    try {
      const response = await fetch(
      `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    )
    // Parse JSON response into a javascript object
    const data = await response.json()
    //set the Movie state to the movie
    setMovie(data)
  } catch(e){
    console.error(e)
  }
  }

  useEffect(() =>{
    getMovie('It')
  }, [])

  return (
    <div className="App">
      <Form moviesearch={getMovie}/>
      <MovieDisplay movie={movie} />
    </div>
  )
}

