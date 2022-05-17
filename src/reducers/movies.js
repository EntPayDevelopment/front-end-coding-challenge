import actions from '../actions';
const { movieActions } = actions;

const initialState = {
  loader: false,
  data: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case movieActions.GET_MOVIES:
      return {
        ...state,
        loader: true
      };
    case movieActions.GET_MOVIES_SUCCESS:
      return {
        ...state,
        data: action.data,
        loader: false
      };
    case movieActions.GET_MOVIES_FAILURE:
      return {
        ...state,
        data: [],
        loader: false
      };
    case movieActions.ADD_MOVIE:
      return {
        ...state,
        loader: true
      };
    case movieActions.ADD_MOVIE_SUCCESS:
      return {
        ...state,
        loader: false
      };
    case movieActions.ADD_MOVIE_FAILURE:
      return {
        ...state,
        loader: false
      };
    default:
      return state;
  }
}
