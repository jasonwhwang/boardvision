import { localStorageMiddleware } from '../middleware/middleware'; 
import { applyMiddleware, createStore, combineReducers } from 'redux';

import common from './common';
import requests from './requests';

const reducer = combineReducers({
  common,
  requests
});

const middleware = applyMiddleware(localStorageMiddleware);
const store = createStore(reducer, middleware);

export default store;