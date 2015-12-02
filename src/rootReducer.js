import { combineReducers } from 'redux';
import projects from './modules/projects/reducer.js';

const rootReducer = combineReducers({
  projects
});

export default rootReducer;
