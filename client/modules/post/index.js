export const GET_POSTS = 'GET_POSTS'
export const CREATE_POST = 'CREATE_POST'

const initialState = {
  posts: null,
  createPost: null
}

export default function reducer(state = initialState, action) {
  if (action.type === GET_POSTS) {
    return {
      ...state,
      posts: action.response
    }
  }
  if (action.type === CREATE_POST) {
    return {
      ...state,
      createPost: action.response
    }
  }
  return state
}

export function getPosts() {
  return {
    type: GET_POSTS,
    request: {
      path: 'http://jsonplaceholder.typicode.com/posts'
    }
  }
}
