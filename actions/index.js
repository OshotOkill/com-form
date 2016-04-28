import fetch from 'isomorphic-fetch';
import * as actionTypes from '../constants/actionTypes';

const { ADD_CARD, DELETE_CARD, RECEIVE_DATA } = actionTypes;

export function addCard(cardConfigs) {
  return {
    type: ADD_CARD,
    cardConfigs
  }
}

export function deleteCard(id) {
  return {
    type: DELETE_CARD,
    id
  }
}

export function receiveData(json) {
  return {
    type: RECEIVE_DATA,
    data: json.cards
  }
}

export function fetchData() {
  return dispatch => {
    return fetch('/data/initialState')
      .then(res => {
        if (res.status >= 400) {
          throw new Error('Connection failed');
        }
        return res.json();
      })
      .then(json => dispatch(receiveData(json)))
      .catch(err => console.error(err));
  }
}

// export function postData(cardConfigs) {
//   return dispatch => {
//     fetch('/data/initialState.json', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       mode: 'cors',
//       body: JSON.stringify(cardConfigs)
//     })
//       .then(res => {
//         if (res.status >= 400) {
//           throw new Error('Connection failed');
//         }
//         // return res.json()
//       })
//       .catch(err => console.error(err));
    
//     return dispatch(addCard(cardConfigs));
//   }
// }

export function postData(cardConfigs) {
  return dispatch => {
    return fetch('/data/initialState', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: {
        cardConfigs: JSON.stringify(cardConfigs)
      }
    })
      .then(res => {
        if (res.status >= 400) {
          throw new Error('Connection failed');
        }
        return res.json()
      })
      .then(json => dispatch(receiveData(json)))
      .catch(err => console.error(err));
    
    // return dispatch(addCard(cardConfigs));
  }
}
