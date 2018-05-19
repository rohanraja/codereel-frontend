import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './rootReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import initialState from './initialState'

export function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        require('redux-immutable-state-invariant').default(),
        thunk
      )
    )
  )
}

export const store = configureStore();
