import actions from '../actions';
const { watchListActions } = actions;

const initialState = {
  loader: false,
  data: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case watchListActions.GET_WATCHLIST_MOVIES:
      return {
        ...state,
        loader: true
      };
    case watchListActions.GET_WATCHLIST_MOVIES_SUCCESS:
      return {
        ...state,
        data: action.data || [],
        loader: false
      };
    case watchListActions.GET_WATCHLIST_MOVIES_FAILURE:
      return {
        ...state,
        data: [],
        loader: false
      };
    case watchListActions.ADD_WATCHLIST_MOVIE:
      return {
        ...state,
        loader: true
      };
    case watchListActions.ADD_WATCHLIST_MOVIE_SUCCESS:
      return {
        ...state,
        loader: false
      };
    case watchListActions.ADD_WATCHLIST_MOVIE_FAILURE:
      return {
        ...state,
        loader: false
      };
    default:
      return state;
  }
}
