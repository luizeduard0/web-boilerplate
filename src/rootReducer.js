import { combineReducers } from 'redux';
import projects from './modules/projects';

const rootReducer = combineReducers({
  projects
});

export default rootReducer;
