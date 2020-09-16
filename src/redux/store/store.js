import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from '../reducers/root-reducer';

const middlewares = [logger]; //middleware the store is expecting should be an array

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
