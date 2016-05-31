import { combineReducers } from 'redux';
import cards from './cards';
import user from './user';
import groups from './groups';

const rootReducer = combineReducers({
  cards,
  user,
  groups
});

export default rootReducer;