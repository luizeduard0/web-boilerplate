import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { async } from './middleware';
import logger from './logger';
import rootReducer from './rootReducer';

const createStoreWithMiddleware = applyMiddleware(thunk, async, logger)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;
