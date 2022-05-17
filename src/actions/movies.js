const movieActions = {
    GET_MOVIES: 'GET_MOVIES',
    GET_MOVIES_SUCCESS: 'GET_MOVIES_SUCCESS',
    GET_MOVIES_FAILURE:'GET_MOVIES_FAILURE',
    ADD_MOVIE:'ADD_MOVIE',
    ADD_MOVIE_SUCCESS:'ADD_MOVIE_SUCCESS',
    ADD_MOVIE_FAILURE:'ADD_MOVIE_FAILURE',
    REMOVE_MOVIE:'REMOVE_MOVIE',
    REMOVE_MOVIE_SUCCESS:'REMOVE_MOVIE_SUCCESS',
    REMOVE_MOVIE_FAILURE:'REMOVE_MOVIE_FAILURE',
    getMoviesRequest: () => {
      return {
        type: movieActions.GET_MOVIES,
      };
    },
    addMoviesRequest: (movie) => {
      return {
        type: movieActions.ADD_MOVIE,
        movie
      };
    },
    removeMoviesRequest: (movie) => {
      return {
        type: movieActions.REMOVE_MOVIE,
        movie
      };
    },
  };
  
  export default movieActions;