import React, { useContext } from "react";
import { useEffect, useState } from "react/cjs/react.development";
import { GlobalContext } from "../context/GlobalState";

export const MovieControls = ({ type, movie }) => {
  const {
    watchlist,
    addMovieToWatchlist,
    removeMovieFromWatchlist,
  } = useContext(GlobalContext);


  return (
    <div className="inner-card-controls">
         {type === "movie" ? (
        <>
          <button className="ctrl-btn" onClick={() => {
            addMovieToWatchlist(movie.id)
          }}>
            <span>Add To Watchlist</span>
            <i className="fa-fw far fa-eye"></i>
          </button>)
        </>
      ) : (
           <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
          <span>Remove from Watchlist</span>
            <i className="fa-fw fa fa-times"> </i>
          </button>
      )}




    </div>
  );
};
