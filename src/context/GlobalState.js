import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import { getMedias,addToWatchlist,removeFromWatchlist } from "@api";

// initial state
const initialState = {
  watchlist:  localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    :  [],
  movies: [],
  errorText:''
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
   useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  }, [state]);

  // actions
  const addMovieToWatchlist = (id) => {
    addToWatchlist(id).then(
      (data) => {
        const movie = data["message"]
        const moviedata = movie.toString()
        const paseData = moviedata.split(' ');
        const movieId = paseData[2];
        dispatch({
          type: "ADD_MOVIE_TO_WATCHLIST", payload: {
            movieId,
          }
        });
       }
    ).catch( (error) => {
      if (error["status"] == 422) {
        const message = 'Oops something went wrong, Please try again later'
        dispatch({
          type: "ADD_MOVIE_TO_WATCHLIST_ERROR",
          payload: { message },
        })
      }
    } )
  };

  const retriveAllMovies =  async () => {
    await getMedias().then((data) => {
      const movie  = data
     dispatch({
        type: "GET_ALL_MOVIES",
        payload: {
          movie
        },
      })
    }).catch((error) => console.log(error));
  }

  const removeMovieFromWatchlist = (id) => {
    removeFromWatchlist(id).then(
      (data) => {
        const movie = data["message"]
        const moviedata = movie.toString()
        const paseData = moviedata.split(' ');
        const movieId = paseData[2];
        dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: { movieId} });
       }
     ).catch(console.error())
  };




  return (
    <GlobalContext.Provider
      value={{
        ...state,
        watchlist: state.watchlist,
        retriveAllMovies,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
