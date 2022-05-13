import React,{useContext,useState} from "react";
import { MovieControls } from "./MovieControls";
import { GlobalContext } from "../context/GlobalState";
export const MovieCard = ({ movie, type }) => {
   const {movies,
    addMovieToWatchlist, watchlist,
   } = useContext(GlobalContext);
  const [watched, setWatched] = useState(movies);

  let storedMovieWatched = watchlist.find((o) => o.id === movie.id);
  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="image-container movie-card">
      <div>
        <img src={movie.image} />
        <h1>{movie.title}</h1>
        <MovieControls type={watchedDisabled == true ? "watchlist" : "movie"} movie={movie} />
      </div>

    </div>
  );
};
