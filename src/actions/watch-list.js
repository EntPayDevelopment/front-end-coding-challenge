const movieActions = {
    ADD_WATCHLIST_MOVIE: 'ADD_WATCHLIST_MOVIE',
    ADD_WATCHLIST_MOVIE_SUCCESS: 'ADD_WATCHLIST_MOVIE:_SUCCESS',
    ADD_WATCHLIST_MOVIE_FAILURE: 'ADD_WATCHLIST_MOVIE:_FAILURE',
    REMOVE_WATCHLIST_MOVIE: 'REMOVE_WATCHLIST_MOVIE',
    REMOVE_WATCHLIST_MOVIE_SUCCESS: 'REMOVE_WATCHLIST_MOVIE:_SUCCESS',
    REMOVE_WATCHLIST_MOVIE_FAILURE: 'REMOVE_WATCHLIST_MOVIE:_FAILURE',
    GET_WATCHLIST_MOVIES: 'GET_WATCHLIST_MOVIES',
    GET_WATCHLIST_MOVIES_SUCCESS: 'GET_WATCHLIST_MOVIES:_SUCCESS',
    GET_WATCHLIST_MOVIES_FAILURE: 'GET_WATCHLIST_MOVIES:_FAILURE',

    getWatchListMoviesRequest: () => {
        return {
            type: authActions.GET_WATCHLIST_MOVIES,
        };
    },
    addMovieRequest: () => {
        return {
            type: authActions.ADD_MOVIE,
        };
    },
    removeMovieRequest: () => {
        return {
            type: authActions.REMOVE_MOVIE,
        };
    },
};

export default movieActions;