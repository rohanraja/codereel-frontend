import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from './rootReducer'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

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
