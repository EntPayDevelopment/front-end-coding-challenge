import { routerReducer } from 'react-redux-router';
import { combineReducers } from 'redux';
import movies from './movies';
import watchlist from './watch-list';

const createReducer = asyncReducer =>
  combineReducers({
    movies,
    watchlist,
    route: routerReducer,
    ...asyncReducer
  });

export default createReducer;
