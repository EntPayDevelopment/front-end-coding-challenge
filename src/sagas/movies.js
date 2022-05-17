import { put, all, takeEvery, fork, call } from 'redux-saga/effects';
import actions from '../actions';
import { getMedias, addToWatchlist, removeFromWatchlist } from '../services/movies';
import { getMovies} from '../services/watch-list';
const { movieActions, watchListActions } = actions;

const processMovies = (movies) => {
  const watchListMovies = getMovies();
  if(watchListMovies){
    return movies.map(movie => {
      return {...movie, isWatchList: watchListMovies?.includes(movie.id) || false }
    })
  }
  return movies;
}

export function* getMovieRequest() {
  yield takeEvery(movieActions.GET_MOVIES, function* () {
    try {
      const movies = yield getMedias();
      yield put({
        type: movieActions.GET_MOVIES_SUCCESS,
        data: processMovies(movies)
      });
    } catch (error) {
      console.log(error);
      yield put({
        type: movieActions.GET_MOVIES_SUCCESS,
      });
    }
  });
}

export function* addMovieRequest() {
  yield takeEvery(movieActions.ADD_MOVIE, function* ({ movie }) {
    try {
      const res = yield addToWatchlist(movie.id);
      yield put({ type: watchListActions.ADD_WATCHLIST_MOVIE, movie });
      yield put({
        type: movieActions.ADD_MOVIE_SUCCESS,
      });
      yield put({ type: movieActions.GET_MOVIES });
    } catch (error) {
      console.log(error);
      yield put({
        type: movieActions.ADD_MOVIE_FAILURE,
      });
    }
  });
}

export function* removeMovieRequest() {
  yield takeEvery(movieActions.REMOVE_MOVIE, function* ({ movie }) {
    try {
      const res = yield removeFromWatchlist(movie.id);
      yield put({ type: watchListActions.REMOVE_WATCHLIST_MOVIE, movie });
      yield put({
        type: movieActions.REMOVE_MOVIE_SUCCESS,
      });
      yield put({ type: movieActions.GET_MOVIES });
    } catch (error) {
      console.log(error);
      yield put({
        type: movieActions.REMOVE_MOVIE_FAILURE,
      });
    }
  });
}

export default function* rootSaga() {
  yield all([fork(getMovieRequest),fork(addMovieRequest),fork(removeMovieRequest)]);
}
