import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

function configStore(initialState) {
  return createStore(
    rootReducer, 
    initialState,
    applyMiddleware(
      thunkMiddleware,
      createLogger()
    )
  )
}

export default configStore;