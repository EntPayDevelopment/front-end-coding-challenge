import React from "react";
import {Button} from './hoc';
import { useDispatch } from "react-redux";
import actions from '../actions';
const { movieActions } = actions;

export const Movie = ({ movie }) => {
  const dispatch = useDispatch();
  const addMovie = (movie) => {
    dispatch({ type: movieActions.ADD_MOVIE, movie });
  }

  const removeMovie = (movie) => {
    dispatch({ type: movieActions.REMOVE_MOVIE, movie });
  }


  return (<div className="movie-container">
    <div className="movie-poster"> 
      <img src={movie.image} alt={movie.id} />
    </div>
    <div className="movie-title">
      {movie.title}
    </div>
    <div className="movie-btn">
      {movie.isWatchList ? 
          <Button className="btn-danger" iconClass="fa-remove" text="Remove from Watchlist" onClick={()=>{removeMovie(movie)}} />: 
          <Button className="btn-success" iconClass="fa-plus" text="Add to Watchlist" onClick={()=>{addMovie(movie)}} />}
    </div>    
  </div>)
}
