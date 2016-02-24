import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './rootReducer'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk,
      createLogger({
        duration: true,
        predicate: () => process.env.NODE_ENV !== 'production'
      })
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export default store
