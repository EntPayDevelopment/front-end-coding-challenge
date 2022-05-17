import { put, all, takeEvery, fork } from 'redux-saga/effects';
import actions from '../actions';
import { getMovies, addToLocalWatchList, removeFromLocalWatchList } from '../services/watch-list';
const { watchListActions } = actions;

export function* getWatchListMovieRequest() {
  yield takeEvery(watchListActions.GET_WATCHLIST_MOVIES, function*() {
    try {
      const movies = yield getMovies();
      yield put({
        type: watchListActions.GET_WATCHLIST_MOVIES_SUCCESS,
        data: movies
      });
    } catch (error) {
      console.log(error);
      yield put({
        type: watchListActions.GET_WATCHLIST_MOVIES_FAILURE,
      });
    }
  });
}

export function* addToWatchListRequest() {
  yield takeEvery(watchListActions.ADD_WATCHLIST_MOVIE, function*({movie}) {
    try {
      yield addToLocalWatchList(movie.id);
      yield put({
        type: watchListActions.ADD_WATCHLIST_MOVIE_SUCCESS,
      });
    } catch (error) {
      console.log(error);
      yield put({
        type: watchListActions.ADD_WATCHLIST_MOVIE_FAILURE,
      });
    }
  });
}

export function* removeFromWatchListRequest() {
  yield takeEvery(watchListActions.REMOVE_WATCHLIST_MOVIE, function*({movie}) {
    try {
      yield removeFromLocalWatchList(movie.id);
      yield put({
        type: watchListActions.REMOVE_WATCHLIST_MOVIE_SUCCESS,
      });
    } catch (error) {
      console.log(error);
      yield put({
        type: watchListActions.REMOVE_WATCHLIST_MOVIE_FAILURE,
      });
    }
  });
}

export default function* rootSaga() {
  yield all([fork(getWatchListMovieRequest),fork(addToWatchListRequest), fork(removeFromWatchListRequest)]);
}
