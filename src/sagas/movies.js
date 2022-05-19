import { put, all, fork, takeLatest } from "redux-saga/effects";
import actions from "../actions";
import {
  getMedias,
  addToWatchlist,
  removeFromWatchlist,
} from "../services/movies";
import { getMovies } from "../services/watch-list";
const { movieActions, watchListActions } = actions;
import { toast } from "react-toastify";

const processMovies = (movies) => {
  const watchListMovies = getMovies();
  if (watchListMovies) {
    return movies.map((movie) => {
      return {
        ...movie,
        isWatchList: watchListMovies?.includes(movie.id) || false,
      };
    });
  }
  return movies;
};

export function* getMovieRequest() {
  yield takeLatest(movieActions.GET_MOVIES, function* () {
    try {
      const movies = yield getMedias();
      yield put({
        type: movieActions.GET_MOVIES_SUCCESS,
        data: processMovies(movies),
      });
    } catch (error) {
      toast.error(error.message || error.response.data.message);
      console.log(error);
      yield put({
        type: movieActions.GET_MOVIES_FAILURE,
      });
    }
  });
}

export function* addMovieRequest() {
  yield takeLatest(movieActions.ADD_MOVIE, function* ({ movie }) {
    try {
      yield addToWatchlist(movie.id);
      yield put({ type: watchListActions.ADD_WATCHLIST_MOVIE, movie });
      yield put({
        type: movieActions.ADD_MOVIE_SUCCESS,
      });
      yield put({ type: movieActions.GET_MOVIES });
    } catch (error) {
      toast.error(error.message || error.response.data.message);
      console.log(error);
      yield put({
        type: movieActions.ADD_MOVIE_FAILURE,
      });
    }
  });
}

export function* removeMovieRequest() {
  yield takeLatest(movieActions.REMOVE_MOVIE, function* ({ movie }) {
    try {
      yield removeFromWatchlist(movie.id);
      yield put({ type: watchListActions.REMOVE_WATCHLIST_MOVIE, movie });
      yield put({
        type: movieActions.REMOVE_MOVIE_SUCCESS,
      });
      yield put({ type: movieActions.GET_MOVIES });
    } catch (error) {
      toast.error(error.message || error.response.data.message);
      console.log(error);
      yield put({
        type: movieActions.REMOVE_MOVIE_FAILURE,
      });
    }
  });
}

export default function* rootSaga() {
  yield all([
    fork(getMovieRequest),
    fork(addMovieRequest),
    fork(removeMovieRequest),
  ]);
}
