import { all } from "redux-saga/effects";
import moviesSaga from './movies';
import watchListSaga from './watch-list';

export default function* rootSaga(){
    yield all([
        moviesSaga(),
        watchListSaga()
    ])
}