import { RECEIVE_USER_INFO } from '../../constants/actionTypes';


function user(state = [], action) {
  const { message } = action;
  
  switch (action.type) {
    case RECEIVE_USER_INFO:
      return user
  
    default:
      return state
  }
}

export default user;
