import { createStore } from 'redux'
import rootReducer from './reducers'

function configStore(initState) {
  return createStore(rootReducer, initState);
}

export default configStore