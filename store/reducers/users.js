import * as actionTypes from '../../constants/actionTypes';

const { RECEIVE_USER_MESSAGE } = actionTypes;

function users(state = [], action) {
  const { message } = action;
  
  switch (action.type) {
    case RECEIVE_USER_MESSAGE:
      return message
  
    default:
      return state
  }
}

export default users;
