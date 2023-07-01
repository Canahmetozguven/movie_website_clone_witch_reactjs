import { React, useEffect, useState } from "react";
import "./app.css";
import SearchIcon from "./search.svg";
import MovieCard from "./movie";

const api = "https://www.omdbapi.com/?apikey=c2bdc910&i=tt3896198"

const movie1 = {
  "Title": "Reign of Judges: Title of Liberty - Concept Short",
  "Year": "2018",
  "imdbID": "tt4275958",
  "Type": "movie",
  "Poster": "N/A"
}


const App = () => {
  const [movies, setMovies] = useState([])

  const [search, setSearch] = useState("")
  let searchMovies = async (title) => {
    const response = await fetch(`${api}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  };
  useEffect(() => {
    searchMovies("Spiderman")
  }, [])
  return (
    <div className="app"> 
      <h1>App</h1>
      <div className="search">
        <input className="search-input" placeholder="Sarch For Movies..." value={search} onChange={(e) => setSearch(e.target.value) } />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(search)} />
      </div>
      <div className="container">
        {
          movies?.length > 0 ? (

            movies.map((movie) => (
              <MovieCard movie={movie} />
            ))

          ) :
            (
              <div>
                <h2>Movie Not Found</h2>
              </div>
            )
        }
      </div>
    </div>
  );
}


export default App;
