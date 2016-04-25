import fetch from 'isomorphic-fetch';
import * as actionTypes from '../constants/actionTypes';

const { ADD_CARD, DELETE_CARD } = actionTypes;

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
    return fetch(`http://localhost:3000/data/initalState.json`)
      .then(res => {
        if (res.status >= 400) {
          throw new Error('Connection failed');
        }
        return res.json();
      })
      .then(json => dispatch(receiveData(json)))
      .catch(err => console.error(`error code:${err.status}`));
  }
}

export function postData(cardConfigs) {
  return dispatch => {
    dispatch(addCard(cardConfigs));  
    return fetch(`http://localhost:3000/data/initalState.json`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cardConfigs
      })
    })
      // .then(json => dispatch(receiveData(json)))
      .catch(err => console.error(`error code:${err.status}`));
  }
}

