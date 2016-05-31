import * as actionTypes from '../../constants/actionTypes';

const { RECEIVE_GROUP_ANNOUNCEMENT } = actionTypes;

function groups(state = [], action) {
  const { anno } = action;
  
  switch (action.type) {
    case RECEIVE_GROUP_ANNOUNCEMENT:
      return anno
  
    default:
      return state
  }
}

export default groups;
