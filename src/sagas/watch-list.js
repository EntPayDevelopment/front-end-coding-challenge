import { put, all, fork, takeLatest } from "redux-saga/effects";
import actions from "../actions";
import {
  getMovies,
  addToLocalWatchList,
  removeFromLocalWatchList,
} from "../services/watch-list";
const { watchListActions } = actions;
import { toast } from "react-toastify";

export function* getWatchListMovieRequest() {
  yield takeLatest(watchListActions.GET_WATCHLIST_MOVIES, function* () {
    try {
      const movies = yield getMovies();
      yield put({
        type: watchListActions.GET_WATCHLIST_MOVIES_SUCCESS,
        data: movies,
      });
    } catch (error) {
      console.log(error);
      toast.error(error.message || error.response.data.message);
      yield put({
        type: watchListActions.GET_WATCHLIST_MOVIES_FAILURE,
      });
    }
  });
}

export function* addToWatchListRequest() {
  yield takeLatest(watchListActions.ADD_WATCHLIST_MOVIE, function* ({ movie }) {
    try {
      yield addToLocalWatchList(movie.id);
      yield put({
        type: watchListActions.ADD_WATCHLIST_MOVIE_SUCCESS,
      });
    } catch (error) {
      console.log(error);
      toast.error(error.message || error.response.data.message);
      yield put({
        type: watchListActions.ADD_WATCHLIST_MOVIE_FAILURE,
      });
    }
  });
}

export function* removeFromWatchListRequest() {
  yield takeLatest(
    watchListActions.REMOVE_WATCHLIST_MOVIE,
    function* ({ movie }) {
      try {
        yield removeFromLocalWatchList(movie.id);
        yield put({
          type: watchListActions.REMOVE_WATCHLIST_MOVIE_SUCCESS,
        });
      } catch (error) {
        console.log(error);
        toast.error(error.message || error.response.data.message);
        yield put({
          type: watchListActions.REMOVE_WATCHLIST_MOVIE_FAILURE,
        });
      }
    }
  );
}

export default function* rootSaga() {
  yield all([
    fork(getWatchListMovieRequest),
    fork(addToWatchListRequest),
    fork(removeFromWatchListRequest),
  ]);
}
