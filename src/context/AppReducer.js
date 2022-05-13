
export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [...state.movies.filter((movie) => movie.id == action.payload.movieId), ...state.watchlist],

      }
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(movie => movie.id != action.payload.movieId),

      }
    case "GET_ALL_MOVIES":
      return {
        ...state,
        movies: action.payload.movie,
      }
     case "ADD_MOVIE_TO_WATCHLIST_ERROR":
      return {
        ...state,
        errorText : action.payload.message
      }
    default:
      return state;
  }
};
