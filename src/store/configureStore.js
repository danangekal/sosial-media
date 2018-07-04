import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { createBrowserHistory } from 'history';
import storage from 'redux-persist/lib/storage'
import { connectRouter, routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

import rootReducers from '../reducers/rootReducer';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(persistedReducer),
  applyMiddleware(routerMiddleware(history), logger, promiseMiddleware())
);

const persistor = persistStore(store);

export { store, persistor, history };