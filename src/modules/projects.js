import assign from 'lodash/object/assign';
import { callAPI } from '../helpers';

const initialState = {
  data: [],
  isLoading: false,
  errorMessage: null
};

export default function reducer(state = initialState, action) {
  if (action.type === 'LOAD_PROJECTS_REQUEST') {
    return assign({}, state, {
      data: [],
      isLoading: true,
      errorMessage: null
    });
  }
  if (action.type === 'LOAD_PROJECTS_SUCCESS') {
    return assign({}, state, {
      data: action.payload,
      isLoading: false,
      errorMessage: null
    });
  }
  if (action.type === 'LOAD_PROJECTS_FAILURE') {
    return assign({}, state, {
      data: [],
      isLoading: false,
      errorMessage: action.payload.message
    });
  }
  return state;
}

export function loadProjects() {
  return {
    type: 'LOAD_PROJECTS',
    promise: callAPI('get', '/projects.json')
  };
}
