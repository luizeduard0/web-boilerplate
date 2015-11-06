import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './rootReducer';

const createStoreWithMiddleware = applyMiddleware(thunk, createLogger())(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;
