import { combineReducers } from 'redux';
import cards from './cards';
import users from './users';
import groups from './groups';

const rootReducer = combineReducers({
  cards
});

export default rootReducer;