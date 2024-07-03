import React, { useState, useEffect } from 'react'
import './App.css'
import SearchIcon from './search.svg';
import MovieCard from "./components/MovieCard";

/*API Key = 55e28855*/

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=55e28855';
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

const searchMovies = async (title) => {
  const reponse = await fetch(`${API_URL}&s=${title}`)
  const data = await reponse.json();

  setMovies(data.Search)
}

useEffect(() => {
searchMovies('Naruto')
},[] );

return (
  <div className="app">
    <h1>MovieMania</h1>

    <div className="search">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for movies"
      />
      <img
        src={SearchIcon}
        alt="search"
        onClick={() => searchMovies(searchTerm)}
      />
    </div>

    {movies?.length > 0 ? (
      <div className="container">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.Title}/>
        ))}
      </div>
    ) : (
      <div className="empty">
        <h2>No movies found</h2>
      </div>
    )}
  </div>
)
}

export default App