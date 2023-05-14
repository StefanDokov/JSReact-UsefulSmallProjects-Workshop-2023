import React, { useEffect, useState } from 'react';
import './App.css';
import searchIcon from './search.svg';
import MovieCard from './MovieCard.jsx';
// c032e2d7
const API_URL = 'http://www.omdbapi.com?apikey=c032e2d7';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setSearchTerm("")
    return setMovies(data.Search);
    
    
  }

  useEffect(() => {
    searchMovies("");
  },[]);
  console.log(movies);
  return (
    
      <div className='app'>
        <h1>MovieSand</h1>
        <div className='search'>
          <input type='text' 
          placeholder='Searching for...'
          value={searchTerm}
          onChange={(e) => {setSearchTerm(e.target.value)}}
          />
          <img src={searchIcon} alt='search' 
          onClick={() => searchMovies(searchTerm)}/>
        </div>
        {movies?.length > 0? (
           <div className='container'>
            {movies.map((item) => 
              <MovieCard movie={item} />
            )}
        </div>
        ): (
          <div className='empty'>
            <h2>No movies found!</h2>
            </div>
        )}  
      </div>
    
  )
}

export default App
