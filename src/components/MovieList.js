import React, { useContext } from "react";
import { useEffect } from "react/cjs/react.development";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const MovieList = () => {
  const { movies, watchlist, retriveAllMovies, addToWatchlist, errorText } = useContext(GlobalContext);
  console.log({errorText});
  useEffect(() => {
      retriveAllMovies()
  },[])
  return (
    <div className="movie-page">
      {errorText ? (<h2>{errorText}</h2>):(<></>)}
      <div className="container">
         {movies.length > 0 ? (
          <div className="movie-grid">
            {movies.map((movie) => (
            <div>
                <MovieCard movie={movie} key={movie.id} type="movie" />
            </div>
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};
