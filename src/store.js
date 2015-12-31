import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from './logger.js';
import rootReducer from './rootReducer.js';

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;
