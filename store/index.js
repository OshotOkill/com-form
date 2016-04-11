import { createStore } from 'redux'
// import rootReducer from './reducers'
import rootReducer from './reducers'

function configStore(initalState) {
  return createStore(rootReducer, initalState);
}

export default configStore