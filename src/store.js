import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
// import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import rootSagas from "./sagas";
import createSagaMiddleware from 'redux-saga'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
};

const sagaMiddleware = createSagaMiddleware()
const history = createBrowserHistory();
const middlewares = [sagaMiddleware, routerMiddleware(history)];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, reducers());

const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSagas);

const persistor = persistStore(store);

export { store, history, persistor };
