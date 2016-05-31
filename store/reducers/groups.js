import { RECEIVE_GROUPS } from '../../constants/actionTypes';

function groups(state = [], action) {
  const { groups } = action;
  
  switch (action.type) {
    case RECEIVE_GROUPS:
      return groups
  
    default:
      return state
  }
}

export default groups;
